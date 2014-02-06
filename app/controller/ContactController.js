Ext.define('ContactApp.controller.ContactController', {
	extend: 'Ext.app.Controller',
	refs: [{
		ref: 'list',
		selector: '#contactlist'
	}, {
		ref: 'detail',
		selector: '#contact'
	}, {
		ref: 'saveButton',
		selector: '#contact button[action=save]'
	}],
	init: function() {
		this.control({
			"#contactlist": {
				cellclick: this.editUser
			},
			'#contact button[action=save]': {
				click: this.updateUser
			},
			'#contact button[action=delete]': {
				click: this.deleteUser
			},
			'#contact button[action=clear]': {
				click: this.clearForm
			}
		});
		var store = this.getStore('ContactStore');
		store.on('load', this.clearForm, this);
	},
	editUser: function(table, td, cellIndex, record, tr, rowIndex, e, eOpts) {
		var contactForm = this.getDetail();
		contactForm.loadRecord(record);

		var saveButton = this.getSaveButton();
		saveButton.setText('更新');
	},
	updateUser: function() {
		var contactForm = this.getDetail();
		var data = contactForm.getValues();
		var model = contactForm.getRecord();
		model.set(data);
		var errors = model.validate();
		if(errors.isValid()) {
			var element = Ext.getBody();
			element.mask('Please wait....');
			model.save({
				success: function(m) {
					Ext.getStore('ContactStore').reload();
					element.unmask();
				},
				failure: function(m) {
					element.unmask();
					Ext.Msg.alert('失敗', '登録に失敗しました。');
				}
			});
		} else {
			var msg = "";
			errors.each(function(err) {
				msg += err.field + ' ' + err.message + '<br />';
			});
			Ext.Msg.alert('エラー', msg);
		}
	},
	deleteUser: function() {
		var contactForm = this.getDetail();
		var data = contactForm.getValues();
		var model = contactForm.getRecord();
		if(!model.phontom) {
			var element = Ext.getBody();
			element.mask('Please wait....');
			model.destroy({ //ST2ではerase
				success: function(m) {
					this.clearForm();
					Ext.getStore('ContactStore').reload();
					element.unmask();
				},
				failure: function(m) {
					element.unmask();
					Ext.Msg('失敗', '削除に失敗しました。');
				},
				scope: this
			});
		}
	},
	clearForm: function() {
		var contactForm = this.getDetail();
		contactForm.loadRecord(Ext.create('ContactApp.model.Contact'));

		var saveButton = this.getSaveButton();
		saveButton.setText('新規登録');
	}
});

