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
var format_Tickets_Repo = new ol.format.GeoJSON();
var features_Tickets_Repo = format_Tickets_Repo.readFeatures(geojson_Tickets_Repo, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tickets_Repo = new ol.source.Vector();
jsonSource_Tickets_Repo.addFeatures(features_Tickets_Repo);var lyr_Tickets_Repo = new ol.layer.Vector({
                source:jsonSource_Tickets_Repo, 
                style: style_Tickets_Repo,
                title: "Tickets_Repo"
            });var format_Tickets_Technique = new ol.format.GeoJSON();
var features_Tickets_Technique = format_Tickets_Technique.readFeatures(geojson_Tickets_Technique, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tickets_Technique = new ol.source.Vector();
jsonSource_Tickets_Technique.addFeatures(features_Tickets_Technique);var lyr_Tickets_Technique = new ol.layer.Vector({
                source:jsonSource_Tickets_Technique, 
                style: style_Tickets_Technique,
                title: "Tickets_Technique"
            });var format_Accounts = new ol.format.GeoJSON();
var features_Accounts = format_Accounts.readFeatures(geojson_Accounts, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Accounts = new ol.source.Vector();
jsonSource_Accounts.addFeatures(features_Accounts);var lyr_Accounts = new ol.layer.Vector({
                source:jsonSource_Accounts, 
                style: style_Accounts,
                title: "Accounts"
            });var format_OffGrid = new ol.format.GeoJSON();
var features_OffGrid = format_OffGrid.readFeatures(geojson_OffGrid, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OffGrid = new ol.source.Vector();
jsonSource_OffGrid.addFeatures(features_OffGrid);var lyr_OffGrid = new ol.layer.Vector({
                source:jsonSource_OffGrid, 
                style: style_OffGrid,
                title: "OffGrid%"
            });var format_Penetration = new ol.format.GeoJSON();
var features_Penetration = format_Penetration.readFeatures(geojson_Penetration, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Penetration = new ol.source.Vector();
jsonSource_Penetration.addFeatures(features_Penetration);var lyr_Penetration = new ol.layer.Vector({
                source:jsonSource_Penetration, 
                style: style_Penetration,
                title: "Penetration"
            });

lyr_Tickets_Repo.setVisible(true);lyr_Tickets_Technique.setVisible(true);lyr_Accounts.setVisible(true);lyr_OffGrid.setVisible(true);lyr_Penetration.setVisible(true);
var layersList = [baseLayer,lyr_Tickets_Repo,lyr_Tickets_Technique,lyr_Accounts,lyr_OffGrid,lyr_Penetration];
lyr_Tickets_Repo.set('fieldAliases', {'REGION': 'REGION', 'CERCLE': 'CERCLE', 'COMMUNE': 'COMMUNE', 'OffgridHH': 'OffgridHH', 'accounts': 'accounts', 'Penet_%': 'Penet_%', 'ticket_tec': 'ticket_tec', 'ticket_rep': 'ticket_rep', 'Offgrid%': 'Offgrid%', });
lyr_Tickets_Technique.set('fieldAliases', {'REGION': 'REGION', 'CERCLE': 'CERCLE', 'COMMUNE': 'COMMUNE', 'OffgridHH': 'OffgridHH', 'accounts': 'accounts', 'Penet_%': 'Penet_%', 'ticket_tec': 'ticket_tec', 'ticket_rep': 'ticket_rep', 'Offgrid%': 'Offgrid%', });
lyr_Accounts.set('fieldAliases', {'REGION': 'REGION', 'CERCLE': 'CERCLE', 'COMMUNE': 'COMMUNE', 'OffgridHH': 'OffgridHH', 'accounts': 'accounts', 'Penet_%': 'Penet_%', 'ticket_tec': 'ticket_tec', 'ticket_rep': 'ticket_rep', 'Offgrid%': 'Offgrid%', });
lyr_OffGrid.set('fieldAliases', {'REGION': 'REGION', 'CERCLE': 'CERCLE', 'COMMUNE': 'COMMUNE', 'OffgridHH': 'OffgridHH', 'accounts': 'accounts', 'Penet_%': 'Penet_%', 'ticket_tec': 'ticket_tec', 'ticket_rep': 'ticket_rep', 'Offgrid_%': 'Offgrid_%', 'Offgrid%': 'Offgrid%', });
lyr_Penetration.set('fieldAliases', {'REGION': 'REGION', 'CERCLE': 'CERCLE', 'COMMUNE': 'COMMUNE', 'OffgridHH': 'OffgridHH', 'accounts': 'accounts', 'Penet_%': 'Penet_%', 'ticket_tec': 'ticket_tec', 'ticket_rep': 'ticket_rep', 'Offgrid%': 'Offgrid%', });
lyr_Tickets_Repo.set('fieldImages', {'REGION': 'TextEdit', 'CERCLE': 'TextEdit', 'COMMUNE': 'TextEdit', 'OffgridHH': 'TextEdit', 'accounts': 'TextEdit', 'Penet_%': 'TextEdit', 'ticket_tec': 'TextEdit', 'ticket_rep': 'TextEdit', 'Offgrid%': 'TextEdit', });
lyr_Tickets_Technique.set('fieldImages', {'REGION': 'TextEdit', 'CERCLE': 'TextEdit', 'COMMUNE': 'TextEdit', 'OffgridHH': 'TextEdit', 'accounts': 'TextEdit', 'Penet_%': 'TextEdit', 'ticket_tec': 'TextEdit', 'ticket_rep': 'TextEdit', 'Offgrid%': 'TextEdit', });
lyr_Accounts.set('fieldImages', {'REGION': 'TextEdit', 'CERCLE': 'TextEdit', 'COMMUNE': 'TextEdit', 'OffgridHH': 'TextEdit', 'accounts': 'TextEdit', 'Penet_%': 'TextEdit', 'ticket_tec': 'TextEdit', 'ticket_rep': 'TextEdit', 'Offgrid%': 'TextEdit', });
lyr_OffGrid.set('fieldImages', {'REGION': 'TextEdit', 'CERCLE': 'TextEdit', 'COMMUNE': 'TextEdit', 'OffgridHH': 'TextEdit', 'accounts': 'TextEdit', 'Penet_%': 'TextEdit', 'ticket_tec': 'TextEdit', 'ticket_rep': 'TextEdit', 'Offgrid_%': 'TextEdit', 'Offgrid%': 'TextEdit', });
lyr_Penetration.set('fieldImages', {'REGION': 'TextEdit', 'CERCLE': 'TextEdit', 'COMMUNE': 'TextEdit', 'OffgridHH': 'TextEdit', 'accounts': 'TextEdit', 'Penet_%': 'TextEdit', 'ticket_tec': 'TextEdit', 'ticket_rep': 'TextEdit', 'Offgrid%': 'TextEdit', });
lyr_Tickets_Repo.set('fieldLabels', {'REGION': 'inline label', 'CERCLE': 'inline label', 'COMMUNE': 'inline label', 'OffgridHH': 'inline label', 'accounts': 'inline label', 'Penet_%': 'inline label', 'ticket_tec': 'inline label', 'ticket_rep': 'inline label', 'Offgrid%': 'inline label', });
lyr_Tickets_Technique.set('fieldLabels', {'REGION': 'inline label', 'CERCLE': 'inline label', 'COMMUNE': 'inline label', 'OffgridHH': 'inline label', 'accounts': 'inline label', 'Penet_%': 'inline label', 'ticket_tec': 'inline label', 'ticket_rep': 'inline label', 'Offgrid%': 'inline label', });
lyr_Accounts.set('fieldLabels', {'REGION': 'inline label', 'CERCLE': 'inline label', 'COMMUNE': 'inline label', 'OffgridHH': 'inline label', 'accounts': 'inline label', 'Penet_%': 'inline label', 'ticket_tec': 'inline label', 'ticket_rep': 'inline label', 'Offgrid%': 'inline label', });
lyr_OffGrid.set('fieldLabels', {'REGION': 'inline label', 'CERCLE': 'inline label', 'COMMUNE': 'inline label', 'OffgridHH': 'inline label', 'accounts': 'inline label', 'Penet_%': 'inline label', 'ticket_tec': 'inline label', 'ticket_rep': 'inline label', 'Offgrid_%': 'inline label', 'Offgrid%': 'inline label', });
lyr_Penetration.set('fieldLabels', {'REGION': 'inline label', 'CERCLE': 'inline label', 'COMMUNE': 'inline label', 'OffgridHH': 'inline label', 'accounts': 'inline label', 'Penet_%': 'inline label', 'ticket_tec': 'no label', 'ticket_rep': 'no label', 'Offgrid%': 'inline label', });
lyr_Penetration.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});