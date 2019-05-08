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
var format_TestCommunes = new ol.format.GeoJSON();
var features_TestCommunes = format_TestCommunes.readFeatures(geojson_TestCommunes, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TestCommunes = new ol.source.Vector();
jsonSource_TestCommunes.addFeatures(features_TestCommunes);var lyr_TestCommunes = new ol.layer.Vector({
                source:jsonSource_TestCommunes, 
                style: style_TestCommunes,
                title: "TestCommunes"
            });

lyr_TestCommunes.setVisible(true);
var layersList = [baseLayer,lyr_TestCommunes];
lyr_TestCommunes.set('fieldAliases', {'admin2Name': 'admin2Name', 'admin1Name': 'admin1Name', 'admin0Name': 'admin0Name', 'admin3Name': 'admin3Name', 'offgrid': 'offgrid', 'actives': 'actives', 'desactives': 'desactives', 'Penet%': 'Penet%', });
lyr_TestCommunes.set('fieldImages', {'admin2Name': 'TextEdit', 'admin1Name': 'TextEdit', 'admin0Name': 'TextEdit', 'admin3Name': 'TextEdit', 'offgrid': 'TextEdit', 'actives': 'TextEdit', 'desactives': 'TextEdit', 'Penet%': 'TextEdit', });
lyr_TestCommunes.set('fieldLabels', {'admin2Name': 'inline label', 'admin1Name': 'inline label', 'admin0Name': 'inline label', 'admin3Name': 'header label', 'offgrid': 'inline label', 'actives': 'inline label', 'desactives': 'inline label', 'Penet%': 'inline label', });
lyr_TestCommunes.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});