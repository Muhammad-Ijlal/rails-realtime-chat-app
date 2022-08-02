// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import "channels"

import jquery from 'jquery';
window.$ = jquery;

// window.jQuery = jquery;
// import "semantic-ui";

// $(document).on('turbolinks:load', function() {
//   $('.ui.dropdown').dropdown();
//   $('.message .close').on('click', function() {
//     $(this).closest('.message').transition('fade');
//   });
// })

window.scroll_bottom = function(){
  if ($('#messages').length > 0){
    $('#messages').scrollTop($('#messages')[0].scrollHeight)
  }
} 
$(document).ready(function(){
  scroll_bottom();
})