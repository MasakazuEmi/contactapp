Ext.define('ContactApp.view.ContactList', {
	extend: 'Ext.grid.Panel',
	xtype: 'contactlist',
	id: 'contactlist',
	store: 'ContactStore', //storeIdを指定する事
	title: '一覧',
	columns: [{
		text: '名前', dataIndex: 'name'
	}],
	features: [{
		ftype: 'grouping',
		groupHeaderTpl: '{name} {rows.length} 件'
	}],
});

