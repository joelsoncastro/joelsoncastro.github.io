/* Description: emulates original behaviour in components */

 
  /*search bar behaviour */
  function clearInputValue(input) {
    if (input.value === input.defaultValue) {
      input.value = '';
    }
  }

  function resetInputValue(input) {
    if (input.value === '') {
      input.value = input.defaultValue;
    }
  }
 

  /* drag */
  
  var draggableContainer = document.getElementById('gm_drawer_container');
  var isDragging = false;
  var startY = 0;
  var originalTop = 0;
  
  draggableContainer.addEventListener('touchstart', function(event) {
    isDragging = true;
    var touch = event.touches[0];
    startY = touch.clientY;
    originalTop = draggableContainer.offsetTop;
    
    // Add transition property to enable smooth animation
    draggableContainer.style.transition = 'top 0.3s ease';
  });
  
  document.addEventListener('touchmove', function(event) {
    if (isDragging) {
      var touch = event.touches[0];
      var deltaY = touch.clientY - startY;
      var newTop = originalTop + deltaY;
      var maxTop = originalTop + 20;
      var minTop = originalTop - 20;
      
      // Apply the new top position within the range
      draggableContainer.style.top = Math.max(minTop, Math.min(maxTop, newTop)) + 'px';
    }
  });
  
  document.addEventListener('touchend', function() {
    isDragging = false;
    
    // Reset the transition and animate back to the original position
    draggableContainer.style.transition = 'top 0.2s ease';
    draggableContainer.style.top = originalTop + 'px';
    
    // Remove the transition after the animation is completed
    setTimeout(function() {
      draggableContainer.style.transition = '';
    }, 300);
  });