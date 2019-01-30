$(document).ready(function() {

    $('img').hover(function() {
      $(this).attr('src', $(this).attr('data-attr'));
    }, function() {
      $(this).attr('src', $('img').attr('src'));
    })    
}); 