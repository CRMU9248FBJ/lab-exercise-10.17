window.onload = function () {
    const button = document.getElementById("geoButton");
    button.addEventListener("click", getGeolocation);
};

function getGeolocation() {
    const locationElement = document.getElementById("geolocation");

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            showGeolocation,
            showError,
            { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
        );
    } else {
        locationElement.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showGeolocation(position) {
    const locationElement = document.getElementById("geolocation");
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    locationElement.innerHTML = 
        `<strong>Latitude:</strong> ${latitude}<br>` +
        `<strong>Longitude:</strong> ${longitude}`;
}

function showError(error) {
    const locationElement = document.getElementById("geolocation");
    switch (error.code) {
        case error.PERMISSION_DENIED:
            locationElement.innerHTML = "User denied the request for Geolocation.";
            break;
        case error.POSITION_UNAVAILABLE:
            locationElement.innerHTML = "Location information is unavailable.";
            break;
        case error.TIMEOUT:
            locationElement.innerHTML = "The request to get user location timed out.";
            break;
        case error.UNKNOWN_ERROR:
            locationElement.innerHTML = "An unknown error occurred.";
            break;
    }
}
