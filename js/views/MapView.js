app.views.MapView = Backbone.View.extend({

    render: function () {
        this.$el.html(this.template());

        setTimeout(function() {
            // create a map in the "map" div, set the view to a given place and zoom
            var map = L.map('map', {zoomControl:false}).setView(new L.LatLng(-8.04907403176911, -34.90407943725586), 13);
	globalMap = map;
            // add an OpenStreetMap tile layer
            L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);

	$.getJSON("parquespracas.geojson", function(data) {
		var geojsonLayer = new L.GeoJSON(data);		//New GeoJSON layer
		map.addLayer(geojsonLayer);			//Add layer to map	
	});

            // add a marker in the given location, attach some popup content to it and open the popup
            L.marker([42.35996, -71.05579]).addTo(map);
        });

        return this;
    },

    events: {
        "click .back-button": "back"
    },

    back: function() {
        window.history.back();
        return false;
    }

});
