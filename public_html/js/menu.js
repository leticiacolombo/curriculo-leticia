function menuClick(id){
    var element = $("#"+id);
    $('html,body').animate({scrollTop: element.offset().top - 70}, 'slow');
}