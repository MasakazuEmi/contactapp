Ext.define('ContactApp.view.Contact', {
	extend: 'Ext.form.Panel',
	xtype: 'contactform',
	id: 'contact',
	bodyPadding: 5,
	layout: 'anchor',
	title: '詳細',
	defaults: {
		anchor: '100%'
	},
	tbar: [{
		xtype: 'button',
		text: 'クリア',
		action: 'clear'
	}],
	items: [{
		xtype: 'hiddenfield',
		name: 'id',
		value: -1
	}, {
		xtype: 'textfield',
		name: 'name',
		fieldLabel: '名前'	//SenchaTouch2では'label'
	}, {
		xtype: 'textfield',
		name: 'kana',
		fieldLabel: 'ヨミ'
	}, {
		xtype: 'textfield',
		name: 'tel',
		fieldLabel: '電話番号'
	}, {
		xtype: 'textfield',
		name: 'email',
		fieldLabel: 'メールアドレス',
		vtype: 'email'	// SenchaTouch2ではxtype:'emailfield'
	}],
	buttons: [{
		text: '登録',
		action: 'save'
	}, {
		xtype: 'tbfill'
	}, {
		text: '削除',
		action: 'delete'
	}]
});
