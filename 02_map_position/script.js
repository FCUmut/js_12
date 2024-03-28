const map = L.map("map").setView([36.9206, 30.68798], 27);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

const marker = L.marker([36.9206, 30.68798]).addTo(map);

navigator.geolocation.getCurrentPosition(function (position) {
  //   const lat = position.coords.latitude;
  //   const lng = position.coords.longitude;
  const lat = 36.9206;
  const lng = 30.68798;

  marker.setLatLng([lat, lng]).update();
  map.setView([lat, lng], 13);

  marker.bindPopup("<strong> Hello World </strong> <br> This is my location");
});
