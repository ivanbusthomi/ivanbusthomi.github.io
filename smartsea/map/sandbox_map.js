var map;



function removeTopLayer(){
    var layers = map.getLayers();
    layers.pop();
}

function swapTopLayer(){
    var layers = map.getLayers();
	var topLayer = layers.removeAt(2);
	layers.insertAt(1, topLayer);
}

function initMap(){
    map = new ol.Map({
        target:'map',
        renderer:'canvas',
    	view: new ol.View({
    		projection: 'EPSG:900913',
    		center:[-8015003.33712,4160979.44405],
    		zoom:5
    	})
    });
    
    var newLayer = new ol.layer.Tile({
        source: new ol.source.OSM()
    });
    //map.addLayer(newLayer);
    
    //WFS GeoJSON
    var styleCache = {};
    var geoLayer = new ol.layer.Vector({
        source : new ol.source.Vector({
            projection : 'EPSG:900913',
            url : './myGeoJSON.geojson',
            format: new ol.format.GeoJSON()
        }),
        style : function(feature, resolution) {
            var text = resolution < 5000 ? feature.get('name') : '';
            if (!styleCache[text]) {
                styleCache[text] = [new ol.style.Style({
                    fill : new ol.style.Fill({
                        color : 'rgba(255, 255, 255, 0.1)'
                    }),
                    stroke : new ol.style.Stroke({
                        color : '#990000',
                        width : 1
                    }),
                    text : new ol.style.Text({
                        font : '12px Calibri,sans-serif',
                        text : text,
                        fill : new ol.style.Fill({
                            color : '#000'
                        }),
                        stroke : new ol.style.Stroke({
                            color : '#fff',
                            width : 3
                        })
                    }),
                    zIndex : 999
                })];
            }
            return styleCache[text];
        }
    });
    map.addLayer(geoLayer);

    
    // WMS
    var vectorLayer = new ol.layer.Tile({
        source: new ol.source.TileWMS({
            preload: Infinity,
            url: 'http://felek.cns.umass.edu:8080/geoserver/wms',
            serverType:'geoserver',
            params:{
                'LAYERS':"Streams:Developed", 'TILED':true
            }
        })
    });
    //map.addLayer(vectorLayer);      //<-- Add layer to map
    //vectorLayer.setOpacity(.3);   <-- setting opacity of a layer
    
    //WMS 2
    var vectorLayer_2 = new ol.layer.Tile({
        source: new ol.source.TileWMS({
            preload: Infinity,
            url: 'http://felek.cns.umass.edu:8080/geoserver/wms',
            serverType:'geoserver',
            params:{
                'LAYERS':"Streams:Deposition_of_Nitrogen", 'TILED':true
            }
        })
    });
    //map.addLayer(vectorLayer_2);
    
}