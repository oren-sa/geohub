var size = 0;
var ranges_TestCommunes = [[1.000000, 3.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(202,0,32,1.0)'})
    })]],
[3.000000, 5.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(244,165,130,1.0)'})
    })]],
[5.000000, 6.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(247,247,247,1.0)'})
    })]],
[6.000000, 8.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(146,197,222,1.0)'})
    })]],
[8.000000, 37.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(5,113,176,1.0)'})
    })]]];
var styleCache_TestCommunes={}
var style_TestCommunes = function(feature, resolution){
    var value = feature.get("Penet%");
    var style = ranges_TestCommunes[0][2];
    for (i = 0; i < ranges_TestCommunes.length; i++){
        var range = ranges_TestCommunes[i];
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

    if (!styleCache_TestCommunes[key]){
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
        styleCache_TestCommunes[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_TestCommunes[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};