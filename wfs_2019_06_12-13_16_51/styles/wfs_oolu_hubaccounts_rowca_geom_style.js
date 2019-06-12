var size = 0;
var ranges_wfs_oolu_hubaccounts_rowca_geom = [[1.000000, 50.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(254,240,217,1.0)'})
    })]],
[50.000000, 100.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(252,183,121,1.0)'})
    })]],
[100.000000, 150.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(235,96,63,1.0)'})
    })]],
[150.000000, 191.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(179,0,0,1.0)'})
    })]]];
var styleCache_wfs_oolu_hubaccounts_rowca_geom={}
var style_wfs_oolu_hubaccounts_rowca_geom = function(feature, resolution){
    var value = feature.get("accounts");
    var style = ranges_wfs_oolu_hubaccounts_rowca_geom[0][2];
    for (i = 0; i < ranges_wfs_oolu_hubaccounts_rowca_geom.length; i++){
        var range = ranges_wfs_oolu_hubaccounts_rowca_geom[i];
        if (value > range[0] && value<=range[1]){
            style =  range[2];
        }
    };
    if ("" !== null) {
        var labelText = String("");
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_wfs_oolu_hubaccounts_rowca_geom[key]){
        var text = new ol.style.Text({
              font: '14.3px \'Ubuntu\', sans-serif',
              text: labelText,
              textBaseline: "center",
              textAlign: "left",
              offsetX: 5,
              offsetY: 3,
              fill: new ol.style.Fill({
                color: 'rgba(0, 0, 0, 255)'
              }),
            });
        styleCache_wfs_oolu_hubaccounts_rowca_geom[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_wfs_oolu_hubaccounts_rowca_geom[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};