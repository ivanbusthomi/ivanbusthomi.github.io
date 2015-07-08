function initMap() {
    var map = new ol.Map({
        target: 'map',
        layers: [
          new ol.layer.Tile({
            source: new ol.source.MapQuest({layer: 'osm'})
          }),
          /*new ol.layer.Vector({
            source: new.ol.source.GeoJSON({
              url: 'sampledata/geojson/jkt_utara.json',
              projection: 'EPSG:4326'
            })  
          }) */   
        ],
        view: new ol.View({
          center: ol.proj.transform([107, -6.1], 'EPSG:4326', 'EPSG:3857'),
          zoom: 10.5
        })
        });
    
    // Kepulauan Seribu
    var jktUtaraJson = new ol.layer.Vector({
        source: new ol.source.GeoJSON({
            url: 'sampledata/geojson/jkt_utara.json',
            projection: 'EPSG:4326'
        })
    });
    map.addLayer(jktUtaraJson);
    jktUtaraJson.setVisible(True);
}