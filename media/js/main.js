$(function(){
    // находим все ссылки класса .col
 $('.col a').mouseover(function(){
     // извлекаем атрибут data-title из текущего объекта
    var title = $(this).attr('data-title'); // создание переменной title из атрибута ссылки текущего объекта
    var body = $(this).attr('data-body');
    var image = $(this).attr('data-image');
    $('#content-title').text(title); // здесь только текст, поэтому используем метод .text()
    $('#content-body').html(body); // здесь возможен  html
    $('.my_pic').hide();
    $('<img>').attr('src', 'media/img/'+image).addClass('my_pic')
    .on('click', function(){
        $('#header').fadeIn(2000, function(){
            $('#header').fadeOut(2000);
        });
    })
    .appendTo('#picture');
 });
 $( "#clickme" ).click(function() {
    $( "#book" ).animate({
      width: "toggle",
      height: "toggle"
    }, {
      duration: 5000,
      specialEasing: {
        width: "linear",
        height: "easeOutBounce"
      },
      complete: function() {
        $( this ).after( "<div>Animation complete.</div>" );
      }
    });
  });
}); 