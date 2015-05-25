Ext.define('YzMobile.model.MainModel',{
    extend: 'Ext.data.Model',
    config: {
        fields: [
            'Warn1h',
            'Warn3h',
            'Warn24h',
            'Danger1h',
            'Danger3h',
            'Danger24h',
            'WaterWarnCount',
            'WaterWarn',
            'WaterDangerCount',
            'WaterDanger',
            'TfCount',
            'Tfxx',
            'Warn1hValue',
            'Warn3hValue',
            'Warn24hValue',
            'Danger1hValue',
            'Danger3hValue',
            'Danger24hValue'
        ]
    }

});