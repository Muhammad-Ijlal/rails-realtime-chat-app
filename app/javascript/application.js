// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

import jquery from 'jquery';
window.$ = jquery;
window.jQuery = jquery;

import "semantic-ui";

$(document).on('turbolinks:load', function() {
  $('.ui.dropdown')
    .dropdown()
  ;
})