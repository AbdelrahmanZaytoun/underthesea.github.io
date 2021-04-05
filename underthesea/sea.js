$(document).ready(function(){
  
  $('#searchbar-icon').click(function(){
    $('#searchbar-input').animate({width: 'toggle'});
    $("#searchbar-icon").toggle();
    $("#searchbar-cross").toggle(500);
  });
  
  $('#searchbar-cross').click(function(){
    $('#searchbar-input').animate({width: 'toggle'});
    $("#searchbar-cross").toggle();
    $("#searchbar-icon").toggle(500);
  });
  
});


'use strict';

var search = document.getElementById('search'), 
    searchWrapper = document.getElementById('search-wrapper'), 
    closeIcon = document.getElementById('close-icon');

// Input focus
search.onfocus = function() {
  searchWrapper.classList.add('search-expanded');
  this.addEventListener('transitionend', function() {
    closeIcon.style.display = 'block';
  });
}

// Input blur
search.onblur = function() {
  
  searchWrapper.classList.remove('search-expanded');
  closeIcon.classList.add('closing');
  
  this.addEventListener('transitionend', function() {
    closeIcon.classList.remove('closing');
    closeIcon.style.display = 'none';
  });
  
}

// Close
closeIcon.onclick = function() {
  
  this.classList.add('closing');
  
  document.activeElement.blur();
  
  setTimeout(function() {
    closeIcon.classList.remove('closing');
  }, 1000);
  
}