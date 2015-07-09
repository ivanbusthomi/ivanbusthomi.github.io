// map variable
var map;

//style
var vectorStyle = new ol.style.Style({
  fill: new ol.style.Fill({
    color: 'rgba(255, 240, 240, 0.5)'
  }),
  stroke: new ol.style.Stroke({
    color: 'rgba(100, 100, 200, 1)',
    width: 1.5
  })
});

//map initialization;
function initMap(){
    map = new ol.Map({
        target: 'map',
        renderer: 'canvas',
        view: new ol.View({
            projection: 'EPSG:3857',
            center: ol.proj.transform([107, -6.1], 'EPSG:4326', 'EPSG:3857'),
            zoom:10
        })
    }); //end map
    
    //OSM layer
    var osmLayer = new ol.layer.Tile({
        source: new ol.source.OSM()
    })
    map.addLayer(osmLayer);
    
    //GeoJSON coastline
    var coastLineLayer = new ol.layer.Vector({
        source : new ol.source.Vector({
            projection : 'EPSG:900913',
            url : './sampledata/garis_pantai.geojson',
            format: new ol.format.GeoJSON()
        }),
        style: vectorStyle
    });
    map.addLayer(coastLineLayer);
    
    //GeoJSON kep_seribu
    var kep_seribu = new ol.layer.Vector({
        source : new ol.source.Vector({
            projection : 'EPSG:900913',
            url : './sampledata/kep_seribu.geojson',
            format: new ol.format.GeoJSON()
        }),
        style: vectorStyle
    });
    map.addLayer(kep_seribu);
    
    //GeoJSON jkt_utara
    var jkt_utara = new ol.layer.Vector({
        source : new ol.source.Vector({
            projection : 'EPSG:900913',
            url : './sampledata/jkt_utara.geojson',
            format: new ol.format.GeoJSON()
        }),
        style: vectorStyle
    });
    map.addLayer(jkt_utara);
    
    //GeoJSON jkt_timur
    var jkt_timur = new ol.layer.Vector({
        source : new ol.source.Vector({
            projection : 'EPSG:900913',
            url : './sampledata/jkt_timur.geojson',
            format: new ol.format.GeoJSON()
        }),
        style: vectorStyle
    });
    map.addLayer(jkt_timur);
    
    //GeoJSON jkt_selatan
    var jkt_selatan = new ol.layer.Vector({
        source : new ol.source.Vector({
            projection : 'EPSG:900913',
            url : './sampledata/jkt_selatan.geojson',
            format: new ol.format.GeoJSON()
        }),
        style: vectorStyle
    });
    map.addLayer(jkt_selatan);
    
    //GeoJSON jkt_barat
    var jkt_barat = new ol.layer.Vector({
        source : new ol.source.Vector({
            projection : 'EPSG:900913',
            url : './sampledata/jkt_barat.geojson',
            format: new ol.format.GeoJSON()
        }),
        style: vectorStyle
    });
    map.addLayer(jkt_barat);
    
    //GeoJSON jkt_pusat
    var jkt_pusat = new ol.layer.Vector({
        source : new ol.source.Vector({
            projection : 'EPSG:900913',
            url : './sampledata/jkt_pusat.geojson',
            format: new ol.format.GeoJSON()
        }),
        style: vectorStyle
    });
    map.addLayer(jkt_pusat);
    
    // Layer Checkbox Toggle
    $("#checkboxlayer1").prop('checked',true);
    $("#checkboxlayer2").prop('checked',true);
    $("#checkboxlayer3").prop('checked',true);
    
    // Toggle method    
    function checkWFS(){
        if($("#checkboxlayer1").prop('checked')==true){
            kep_seribu.setVisible(true);
            jkt_utara.setVisible(true);
            jkt_timur.setVisible(true);
            jkt_selatan.setVisible(true);
            jkt_barat.setVisible(true);
            jkt_pusat.setVisible(true);
        }else{
            kep_seribu.setVisible(false);
            jkt_utara.setVisible(false);
            jkt_timur.setVisible(false);
            jkt_selatan.setVisible(false);
            jkt_barat.setVisible(false);
            jkt_pusat.setVisible(false);
        }
    };
    $("#checkboxlayer1").change(function event(){checkWFS()});
    
    function checkCoastLine(){
        if($("#checkboxlayer2").prop('checked')==true){
            coastLineLayer.setVisible(true);
        }else{
            coastLineLayer.setVisible(false);
        }
    };
    $("#checkboxlayer2").change(function event(){checkCoastLine()});
    
    function checkOSM(){
        if($("#checkboxlayer3").prop('checked')==true){
            osmLayer.setVisible(true);
        }else{
            osmLayer.setVisible(false);
        }
    };
    $("#checkboxlayer3").change(function event(){checkOSM()});
        
    
            
    
}// end initMap