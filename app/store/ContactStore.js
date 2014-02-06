Ext.define('ContactApp.store.ContactStore', {
	extend: 'Ext.data.Store',
	storeId: 'ContactStore',
	model: 'ContactApp.model.Contact',
	autoLoad: true,
	sorters: [{
		property: 'kana'
	}, {
		property: 'id'
	}],
	groupField: 'kana',	//groupFieldを指定しないとgetGroupStringが呼ばれない。
	getGroupString: function(record) {
		return record.get('kana').substr(0, 1);
	}
});

