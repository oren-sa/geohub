var size = 0;
var ranges_Accounts = [[0.000000, 0.000000, [ new ol.style.Style({
         
    })]],
[1.000000, 2.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,255,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(247,252,245,1.0)'})
    })]],
[2.000000, 7.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,255,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(201,233,194,1.0)'})
    })]],
[7.000000, 13.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,255,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(122,199,123,1.0)'})
    })]],
[13.000000, 25.600000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,255,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(41,146,74,1.0)'})
    })]],
[25.600000, 191.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,255,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(0,68,27,1.0)'})
    })]]];
var styleCache_Accounts={}
var style_Accounts = function(feature, resolution){
    var value = feature.get("accounts");
    var style = ranges_Accounts[0][2];
    for (i = 0; i < ranges_Accounts.length; i++){
        var range = ranges_Accounts[i];
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

    if (!styleCache_Accounts[key]){
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
        styleCache_Accounts[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_Accounts[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};