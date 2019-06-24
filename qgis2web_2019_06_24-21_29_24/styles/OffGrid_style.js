var size = 0;
var ranges_OffGrid = [[0.000000, 0.100000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,255,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(44,123,182,1.0)'})
    })]],
[0.100000, 0.350000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,255,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(171,217,233,1.0)'})
    })]],
[0.350000, 0.500000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,255,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(255,255,191,1.0)'})
    })]],
[0.500000, 0.900000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,255,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(253,174,97,1.0)'})
    })]],
[0.900000, 1.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,255,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(215,25,28,1.0)'})
    })]]];
var styleCache_OffGrid={}
var style_OffGrid = function(feature, resolution){
    var value = feature.get("Offgrid_%");
    var style = ranges_OffGrid[0][2];
    for (i = 0; i < ranges_OffGrid.length; i++){
        var range = ranges_OffGrid[i];
        if (value > range[0] && value<=range[1]){
            style =  range[2];
        }
    };
    if (feature.get("COMMUNE") !== null && resolution > 0 && resolution < 280) {
        var labelText = String(feature.get("COMMUNE"));
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_OffGrid[key]){
        var text = new ol.style.Text({
              font: '11.7px \'Sans Serif\', sans-serif',
              text: labelText,
              textBaseline: "center",
              textAlign: "left",
              offsetX: 5,
              offsetY: 3,
              fill: new ol.style.Fill({
                color: 'rgba(0, 0, 0, 255)'
              }),
              stroke: new ol.style.Stroke({
                color: "#ffffff",
                width: 1
              }),
            });
        styleCache_OffGrid[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_OffGrid[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};