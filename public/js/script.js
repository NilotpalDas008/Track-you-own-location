const socket = io();

document.addEventListener("DOMContentLoaded", () => {
  const map = L.map("map").setView([0, 0], 2);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  const markers = {};

  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(
      (position) => {
        const { latitude, longitude, accuracy } = position.coords;
        
        // Log to console for debugging
        console.log(`Lat: ${latitude}, Lng: ${longitude}, Accuracy: ${accuracy}m`);
        
        socket.emit("send-location", { latitude, longitude });
        map.setView([latitude, longitude], 16);
        
        // Update or create marker for your location
        if (markers[socket.id]) {
          markers[socket.id].setLatLng([latitude, longitude]);
        } else {
          markers[socket.id] = L.marker([latitude, longitude])
            .addTo(map)
            .bindPopup(`You are here<br>Accuracy: ${Math.round(accuracy)}m`)
            .openPopup();
        }
      },
      (error) => {
        console.error("Geolocation error:", error);
        alert(`Location error: ${error.message}`);
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      }
    );
  } else {
    alert("Geolocation is not supported by your browser");
  }

  socket.on("receive-location", (data) => {
    const { id, latitude, longitude } = data;
    
    if (markers[id]) {
      markers[id].setLatLng([latitude, longitude]);
    } else {
      markers[id] = L.marker([latitude, longitude])
        .addTo(map)
        .bindPopup(`User: ${id}`);
    }
  });

  socket.on("user-disconnected", (id) => {
    if (markers[id]) {
      map.removeLayer(markers[id]);
      delete markers[id];
    }
  });
});