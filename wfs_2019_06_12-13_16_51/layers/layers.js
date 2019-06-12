var baseLayer = new ol.layer.Group({
    'title': 'Base maps',
    layers: [
new ol.layer.Tile({
    'title': 'OSM HOT',
    'type': 'base',
    source: new ol.source.XYZ({
        url: 'http://{a-c}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',
        attributions: [new ol.Attribution({html: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors,<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>,Tiles courtesy of <a href="http://hot.openstreetmap.org/" target="_blank">Humanitarian OpenStreetMap Team</a>'})]
    })
})
]
});
var format_wfs_oolu_hubaccounts_rowca_geom = new ol.format.GeoJSON();
var features_wfs_oolu_hubaccounts_rowca_geom = format_wfs_oolu_hubaccounts_rowca_geom.readFeatures(geojson_wfs_oolu_hubaccounts_rowca_geom, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_wfs_oolu_hubaccounts_rowca_geom = new ol.source.Vector();
jsonSource_wfs_oolu_hubaccounts_rowca_geom.addFeatures(features_wfs_oolu_hubaccounts_rowca_geom);var lyr_wfs_oolu_hubaccounts_rowca_geom = new ol.layer.Vector({
                source:jsonSource_wfs_oolu_hubaccounts_rowca_geom, 
                style: style_wfs_oolu_hubaccounts_rowca_geom,
                title: "wfs_oolu_hub:accounts_rowca_geom"
            });

lyr_wfs_oolu_hubaccounts_rowca_geom.setVisible(true);
var layersList = [baseLayer,lyr_wfs_oolu_hubaccounts_rowca_geom];
lyr_wfs_oolu_hubaccounts_rowca_geom.set('fieldAliases', {'accounts': 'accounts', 'commune_id': 'commune_id', 'rowcacode': 'rowcacode', 'name': 'name', });
lyr_wfs_oolu_hubaccounts_rowca_geom.set('fieldImages', {'accounts': 'TextEdit', 'commune_id': 'TextEdit', 'rowcacode': 'TextEdit', 'name': 'TextEdit', });
lyr_wfs_oolu_hubaccounts_rowca_geom.set('fieldLabels', {'accounts': 'inline label', 'commune_id': 'inline label', 'rowcacode': 'inline label', 'name': 'inline label', });
lyr_wfs_oolu_hubaccounts_rowca_geom.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});