Ext.Loader.setConfig({
	enabled: true,
	paths: {
		'ContactApp': './app/'
	}
});
Ext.application({
	name: 'ContactApp',
	controllers: ['ContactController'],
	models: ['Contact'],
	stores: ['ContactStore'],
	views: ['ContactList', 'Contact'],

	launch: function() {
		Ext.create('Ext.container.Viewport', {
			layout: 'border',
			items: [{
				xtype: 'panel',
				title: '連絡先',
				region: 'north'
			}, {
				xtype: 'contactlist',
				region: 'west'
			}, {
				xtype: 'contactform',
				region: 'center'
			}]
		});
	}
});
