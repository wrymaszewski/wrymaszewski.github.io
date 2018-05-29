$(document).ready(function () {
  $('.drop').on({
      'mouseover': function() {
          $(this).find('.desc').show();
      },
      'mouseout': function() {
          $(this).find('.desc').hide();
      },
  });
});
