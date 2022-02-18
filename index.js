mapboxgl.accessToken = 'pk.eyJ1IjoibGliYW5hYiIsImEiOiJja3pxcno4OHYwN2YxMnFwNHppdGI0d25qIn0._41TwP2OnAcBGogR1e2T5g';

navigator.geolocation.getCurrentPosition(successlocation, errorLocation, {
    enableHighAccuracy: true
})

function successlocation(position) {
console.log(position)
setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation(){
  setupMap([-2.24, 53.48])  

}

function setupMap(center) {
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 15
      });
      const nav = new mapboxgl.NavigationControl()
      map.addControl(nav)
    
      var directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken
      })
    
      map.addControl(directions, "top-left")
    }

/*var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11'
}); */