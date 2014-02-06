Ext.define('Ext.data.writer.GAEJson', {
	extend: 'Ext.data.writer.Json',
	alias: 'writer.gaejson',
	writeRecords: function(request, data) {
        var req = Ext.data.writer.GAEJson.superclass.writeRecords.call(this, request, data);
        if(req.action.toLowerCase() == 'destroy') { //ST2ではこの時点でDELETEが入っている
            // GAE は HTTP DELETE で ペイロードにデータが入っていると怒られるので、削除するようにする。
            req.jsonData = null;
        }
        return req;
	}
});
		
Ext.define('ContactApp.model.Contact', {
	extend: 'Ext.data.Model',
	//config: { sencha touch 2.0 では config の中に書くが、ExtJSではconfigに書かない
		fields: [{
			name: 'id',
			type: 'int'
		}, {
			name: 'name'
		}, {
			name: 'kana'
		}, {
			name: 'tel'
		}, {
			name: 'email'
		}],
		validations: [{
            type: 'length', field: 'name', min: 1, max: 40
        }, {
            type: 'length', field: 'kana', min: 1, max: 40
        }, {
            type: 'length', field: 'tel', min: 1, max: 11
        }, {
            type: 'email', field: 'email'
        }],
		proxy: {
			type: 'rest',
			url: 'http://contacts-myspoon.appspot.com/service/contact',
			reader: {
				type: 'json',
				root: 'contactEntity' //sencha touch 2.0 ではrootProperty
			},
			writer: {
				type: 'gaejson'
			}
		}
	//}
});
