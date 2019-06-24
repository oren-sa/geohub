var size = 0;
var ranges_Penetration = [[0.000000, 0.000000, [ new ol.style.Style({
         
    })]],
[0.000000, 0.005000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(156,156,156,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(247,251,255,1.0)'})
    })]],
[0.005000, 0.010000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(156,156,156,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(199,220,239,1.0)'})
    })]],
[0.010000, 0.020000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(156,156,156,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(114,178,215,1.0)'})
    })]],
[0.020000, 0.030000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(156,156,156,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(40,120,184,1.0)'})
    })]],
[0.030000, 0.036000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(156,156,156,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(8,48,107,1.0)'})
    })]]];
var styleCache_Penetration={}
var style_Penetration = function(feature, resolution){
    var value = feature.get("Penet_%");
    var style = ranges_Penetration[0][2];
    for (i = 0; i < ranges_Penetration.length; i++){
        var range = ranges_Penetration[i];
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

    if (!styleCache_Penetration[key]){
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
        styleCache_Penetration[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_Penetration[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};