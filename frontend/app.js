document.getElementById('getLocation').addEventListener('click', () => {
  const latitudeElement = document.getElementById('latitude');
  const longitudeElement = document.getElementById('longitude');
  const streetLocationElement = document.getElementById('streetLocation');

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);

      // Send the coordinates to the server
      fetch('http://localhost:5000/api/v1/location/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ latitude, longitude }),
      })
        .then(response => response.json())
        .then(data => {
          console.log(data);

          // Display the latitude and longitude in the spans
          latitudeElement.textContent = latitude.toFixed(6); // Adjust the precision as needed
          longitudeElement.textContent = longitude.toFixed(6); // Adjust the precision as needed

          // Display the street location
          streetLocationElement.textContent = `Street Location: ${data.data}`;
        })
        .catch(error => console.error(error));
    }, (error) => {
      console.error(`Error getting location: ${error.message}`);
    });
  } else {
    console.error('Geolocation is not supported by this browser.');
  }
});
