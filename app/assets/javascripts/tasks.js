$(document).on('turbolinks:load', function(){
  $('#task_name').focus();

  $('#myModal .btn-primary').click(function(){
    $('.edit_task').submit();
  });
});
