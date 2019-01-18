$(document).ready(function() {
    var current = 1;
    $('.select_item').click(function() {
        current++;
        $('body').removeClass().addClass('bg' + current);
        $(this).closest('.step').hide().next('.step').fadeIn();
    });
});
