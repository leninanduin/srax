$(function(){
  function toggle_form_overlay() {
    $('.form-overlay').toggleClass('invisible');
    $('#get-started-form').toggleClass('invisible');
  }

  function submit_get_started_form() {
    var data = $('#user_data').serializeArray();
    var errors = 0;
    data.forEach(function(d) {
      if (d.value == "") {
        errors++;
        console.error('Error: ' + d.name + ' can not be empty' );
        $('[for='+d.name+']').addClass('text-danger');
      } else {
        $('[for='+d.name+']').removeClass('text-danger');
        console.log(d.name + ':' +d.value );
      }
    });

    if (!errors) {
      $('#user_data').attr('hidden', 'true');
      $('#thanks_message').removeAttr('hidden');
      console.log('Success!');
    }

  };

  $('#get-started').click(function(){
    toggle_form_overlay();
  });

  $('#get-started-form .close').click(function(){
    toggle_form_overlay();
  });

  $('#get-started-form .btn-primary').click(function(){
    submit_get_started_form();
  });
});