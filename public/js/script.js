function start() {
  // Hide the button and show the card wrapper
  var button = document.getElementById('button');
  button.style.display = 'none';

  var personcard = document.getElementById('card-wrapper');
  personcard.style.display = 'block';

  // Check if DeviceMotionEvent is available and if permission is required
  if (typeof DeviceMotionEvent !== 'undefined' && typeof DeviceMotionEvent.requestPermission === 'function') {
      DeviceMotionEvent.requestPermission().then(function (response) {
          if (response === 'granted') {
              alert('Permission has been granted. Please be informed that we do not store any information.');

              // Get the card element to apply rotation
              var card = document.getElementById('card-1');

              // Listen for device orientation changes and apply rotation to the card
              window.addEventListener('deviceorientation', function (event) {
                  var x = 55 - event.beta; // Adjust beta value for x-axis rotation
                  var y = event.gamma; // Use gamma value for y-axis rotation
                  // Apply the rotation transformation to the card element
                  card.style.transform = `rotateX(${x}deg) rotateY(${y}deg)`;
                  card.style.webkitTransform = `rotateX(${x}deg) rotateY(${y}deg)`;
              });
          } else {
              alert('Permission has been denied. The 3D card functionality won\'t work.');
          }
      }).catch(function (error) {
          alert('Error requesting permission: ' + error.message);
      });
  } else {
      alert('Device motion is not supported in this browser.');
  }
}
