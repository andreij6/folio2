// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

jQuery(function() {
	new Morris.Bar({
	  // ID of the element in which to draw the chart.
	  element: 'myfirstchart',
	  // Chart data records -- each entry in this array corresponds to a point on
	  // the chart.
	  data: [
	    { y: 'Donations(Updated Daily)', a: 0, b: 11600 },
	  ],
	  // The name of the data record attribute that contains x-values.
	  xkey: 'y',
	  // A list of names of data record attributes that contain y-values.
	  ykeys: ['a','b'],
	  // Labels for the ykeys -- will be displayed when you hover over the
	  // chart.
	  labels: ['Raised', 'Goal']
	});
});