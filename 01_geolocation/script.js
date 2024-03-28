// getCurrentPosition()
function curSuccess(position) {
  const coords = position.coords;

  console.log(position);
  console.log(`Latitude: ${coords.latitude}`);
  console.log(`Longitude: ${coords.longitude}`);
  console.log(`Within: ${coords.accuracy} meters`);
}

function curError(error) {
  console.log(`Error: ${error.code} - ${error.message}`);
}

const curOptions = {
  enableHighAccuracy: true, // Use GPS if available
  timeout: 5000, // Time to wait to stop trying for location
  maximumAge: 0, // Do not use a cached position
};

navigator.geolocation.getCurrentPosition(curSuccess, curError, curOptions);

// watchPosition()
const target = {
  lantitude: 41.3832497,
  longitude: -71.3832497,
};

function watchSuccess(position) {
  const coords = position.coords;

  if (
    target.lantitude === coords.latitude &&
    target.longitude === coords.longitude
  ) {
    console.log("You have reached your destination!");
    navigator.geolocation.clearWatch(id); // clear watch location
  }
}

function watchError(error) {
  console.log(`Error: ${error.code} - ${error.message}`);
}

const watchOptions = {
  enableHighAccuracy: true, // Use GPS if available
  timeout: 5000, // Time to wait to stop trying for location
  maximumAge: 0, // Do not use a cached position
};

const id = navigator.geolocation.watchPosition(
  watchSuccess,
  watchError,
  watchOptions
);
