var size = 0;
var ranges_Tickets_Repo = [[0.000000, 0.000000, [ new ol.style.Style({
         
    })]],
[0.000000, 1.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,255,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(255,245,240,1.0)'})
    })]],
[1.000000, 10.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,255,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(252,163,134,1.0)'})
    })]],
[10.000000, 25.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,255,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(234,54,42,1.0)'})
    })]],
[25.000000, 34.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,255,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(103,0,13,1.0)'})
    })]]];
var styleCache_Tickets_Repo={}
var style_Tickets_Repo = function(feature, resolution){
    var value = feature.get("ticket_rep");
    var style = ranges_Tickets_Repo[0][2];
    for (i = 0; i < ranges_Tickets_Repo.length; i++){
        var range = ranges_Tickets_Repo[i];
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

    if (!styleCache_Tickets_Repo[key]){
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
        styleCache_Tickets_Repo[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_Tickets_Repo[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};