  document.getElementById('shirt').onclick = function(event){
    event.preventDefault();
    document.getElementById('shirt').style.outline ='2px solid #A3A3A3';
    document.getElementById('t-shirt').style.outline='none';
    document.getElementById('outwear').style.outline ='none';
    document.getElementById('shirt-content-m').style.display ='block';
    document.getElementById('t-shirt-content-m').style.display ='none';
    document.getElementById('outwear-content-m').style.display = 'none';
  }  
document.getElementById('t-shirt').onclick = function(event){
    event.preventDefault();
    document.getElementById('t-shirt').style.outline ='2px solid #A3A3A3';
    document.getElementById('shirt').style.outline ='none';
    document.getElementById('outwear').style.outline ='none';
    document.getElementById('shirt-content-m').style.display ='none';
    document.getElementById('t-shirt-content-m').style.display ='block';
    document.getElementById('outwear-content-m').style.display = 'none';
  }  
document.getElementById('outwear').onclick = function(event){
    event.preventDefault();
    document.getElementById('outwear').style.outline ='2px solid #A3A3A3';
    document.getElementById('t-shirt').style.outline='none';
    document.getElementById('shirt').style.outline ='none';
    document.getElementById('shirt-content-m').style.display ='none';
    document.getElementById('t-shirt-content-m').style.display ='none';
    document.getElementById('outwear-content-m').style.display = 'block';
}

$( document ).ready(function() {
$('#w-outwear').on('click', function(e){
  e.preventDefault();
$('#w-outwear-content').fadeIn(200);
$('#w-t-shirt-content, #dress-content').fadeOut(200);
$('#dress, #w-t-shirt').css('outline', 'none');
$('#w-outwear').css('outline', '2px solid #A3A3A3');
});
$('#w-t-shirt').on('click', function(e){
  e.preventDefault();
$('#w-t-shirt-content').fadeIn(200);
$('#w-outwear-content, #dress-content').fadeOut(200);
$('#dress, #w-outwear').css('outline', 'none');
$('#w-t-shirt').css('outline', '2px solid #A3A3A3');
});
$('#dress').on('click', function(e){
  e.preventDefault();
$('#dress-content').fadeIn(200);
$('#w-t-shirt-content, #w-outwear-content').fadeOut(200);
$('#w-outwear, #w-t-shirt').css('outline', 'none');
$('#dress').css('outline', '2px solid #A3A3A3');
});
$('#cart').on('click', function(e){
  e.preventDefault();
  $('.popup').show();
  $('html').addClass('body-overlay');
});

$('#exit-cross-popup').click(function(){
  $('.popup').hide();
  $('html').removeClass('body-overlay');
});

    $('.pop').click(function(e){
    e.preventDefault();
    $(this).each(function(){
    $('.popup-items').show();
    $('html').addClass('body-overlay');
   var newSrc = $(this).find('img').attr('src');
   $('.popup-items .new-photo img').attr('src', newSrc);
  })
    var newText = $(this).find('p').text();
    $('.popup-items .new-text p').text(newText);
});
  $('#exit-cross-popup-items').click(function(){
  $('.popup-items').hide();
  $('html').removeClass('body-overlay');
});
  $('#nav-man-shitrs').on('click', function (e) {
    e.preventDefault();
        $('#shirt-content-m').show();
        $('#t-shirt-content-m , #outwear-content-m').hide();
        $('html, body').animate({
            scrollTop: $('.title-category-m').offset().top
        }, 500);
        $('#outwear, #t-shirt').css('outline', 'none');
        $('#shirt').css('outline', '2px solid #A3A3A3');
    });
  $('#nav-man-t-shitrs').on('click', function (e) {
    e.preventDefault();
        $('#t-shirt-content-m').show();
        $('#shirt-content-m , #outwear-content-m').hide();
        $('html, body').animate({
            scrollTop: $('.title-category-m').offset().top
        }, 500);
        $('#outwear, #shirt').css('outline', 'none');
        $('#t-shirt').css('outline', '2px solid #A3A3A3');
    });
  $('#nav-man-outerwear').on('click', function (e) {
    e.preventDefault();
        $('#outwear-content-m').show();
        $('#t-shirt-content-m , #shirt-content-m').hide();
        $('html, body').animate({
            scrollTop: $('.title-category-m').offset().top
        }, 500);
        $('#shirt, #t-shirt').css('outline', 'none');
        $('#outwear').css('outline', '2px solid #A3A3A3');
    });
  $('#nav-w-dress').on('click', function (e) {
    e.preventDefault();
        $('#dress-content').show();
        $('#w-t-shirt-content , #w-outwear-content').hide();
        $('html, body').animate({
            scrollTop: $('.title-category-w').offset().top
        }, 500);
        $('#w-outwear, #w-t-shirt').css('outline', 'none');
        $('#dress').css('outline', '2px solid #A3A3A3');
    });
  $('#nav-w-t-shirt').on('click', function (e) {
    e.preventDefault();
        $('#w-t-shirt-content').show();
        $('#dress-content , #w-outwear-content').hide();
        $('html, body').animate({
            scrollTop: $('.title-category-w').offset().top
        }, 500);
        $('#dress, #w-outwear').css('outline', 'none');
        $('#w-t-shirt').css('outline', '2px solid #A3A3A3');
    });
  $('#nav-w-outerwear').on('click', function (e) {
    e.preventDefault();
        $('#w-outwear-content').show();
        $('#dress-content , #w-t-shirt-content ').hide();
        $('html, body').animate({
            scrollTop: $('.title-category-w').offset().top
        }, 500);
        $('#dress, #w-t-shirt').css('outline', 'none');
        $('#w-outwear').css('outline', '2px solid #A3A3A3');
    });
 
$('#contact-show').click(function(){
  $('#contact').show();
})
$('#service-show').click(function(){
  $('#service').show();
})
$('#carrers-show').click(function(){
  $('#careers').show();
})
});
