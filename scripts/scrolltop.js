
(function() {
  'use strict';

  document.addEventListener('DOMContentLoaded', function() {
    ScrollTop.Init();
  });

  var ScrollTop = {
    Init : function() {
      // Variable Initial
      this.$top = document.getElementById('scrolltop');
      this.duration = 400;

      // Evnet scroll
      ScrollTop.Event();
    },

    Event : function() {
      this.$top.addEventListener('click', function(e) {
        // Scroll to position fixed
        // window.scrollTo(0, 500);

        // Get position top of document
        var docElement = document.documentElement,
            top = (window.pageYOffset || docElement.scrollTop) - (docElement.clientTop || 0);

        // Timer
        // var timer = setInterval(function() {
        //   // top -= 20;
        //   window.scrollTo(0, top - 30);
        //   top = (window.pageYOffset || docElement.scrollTop) - (docElement.clientTop || 0);
        //
        //   if( top <= 0 ) clearInterval(timer);
        //   console.log('timer');
        // }, 10);

        // console.log(top);
        var n = 0;
        var requestAnimationFrame = window.requestAnimationFrame
            || window.mozRequestAnimationFrame
            || window.webkitRequestAnimationFrame
            || window.msRequestAnimationFrame,

            cancelAnimationFrame = window.cancelAnimationFrasme
            || window.mozRequestAnimationFrame;

        var request;
        // function step() {
        //   n++;
        //   console.log('animate');
        //   request = requestAnimationFrame(step);
        //   if( n > 100 ) cancelAnimationFrame(request);
        // }
        function step() {
          console.log('step');
        }
        console.log('foo', requestAnimationFrame(step));

        // Don't scrolltop with href="#"
        e.preventDefault ? e.preventDefault() : e.returnValue = false;
      });
    },

    ScrollTo : function(element, pos) {
      element.scrollTo(0, pos);
    }
  };
}());
