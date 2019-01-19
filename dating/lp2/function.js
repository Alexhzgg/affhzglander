function clear_delay(n) {
  window.clearTimeout(n)
}
function run_loading_run_1(n) {
  timeoutID1 = window.setTimeout(run_loading_1, n)
}
function run_loading_1() {
  $(".thank_for_close, .run_loading_2").fadeIn(),
  $(".main_review").hide()
}
function run_loading_run_2(n) {
  timeoutID2 = window.setTimeout(run_loading_2, n)
}
function run_loading_2() {
  $(".thank_for_close, .run_loading_2").hide(),
  $(".run_loading_3, .li_run_loading_1, .li_run_loading_2").fadeIn()
}
function run_loading_run_3(n) {
  timeoutID3 = window.setTimeout(run_loading_3, n)
}
function run_loading_3() {
  $(".run_loading_3").hide(),
  $(".run_loading_4, .li_run_loading_3").fadeIn()
}
function run_loading_run_4(n) {
  timeoutID3 = window.setTimeout(run_loading_4, n)
}
function run_loading_4() {
  $(".run_loading_4, .loading").hide(),
  $(".li_run_loading_4, li_run_loading_5, .run_loading_5, .show_end").fadeIn()
}
$(function() {
  $(document).on("click", ".next", function(n) {
    n.preventDefault(),
    $(this).parent().hide().next().fadeIn()
  }),
  $(document).on("click", ".run_loading", function(n) {
    n.preventDefault(),
    $(this).parent().hide().next().fadeIn(),
    $(".step4 .loading").show(),
    run_loading_run_1("1000"),
    run_loading_run_2("2250"),
    run_loading_run_3("3000"),
    run_loading_run_4("4000")
  })
});

var interval = setInterval(function() {
  var timer = $('.clock').html();
  timer = timer.split(':');
  var minutes = parseInt(timer[0], 10);
  var seconds = parseInt(timer[1], 10);
  seconds -= 1;
  if (minutes < 0)
    return clearInterval(interval);
  if (minutes < 10 && minutes.length != 2)
    minutes = '0' + minutes;
  if (seconds < 0 && minutes != 0) {
    minutes -= 1;
    seconds = 59;
  } else if (seconds < 10 && length.seconds != 2)
    seconds = '0' + seconds;
  $('.clock').html(minutes + ':' + seconds);
  if (minutes == 0 && seconds == 0)
    clearInterval(interval);
}, 1000);
