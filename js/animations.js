


$(document).ready(function(){

var tweetCompose = $('.tweet-compose');
var tweetControls = $('#tweet-controls');
var charCount = $('#char-count');
var tweetSubmit = $('#tweet-submit');
var tweetClone = $('#tweetTemplate').clone();
var maxLength = 140;
var tweetAction = $('.tweet-actions');

$('.content').hover(
        function () {
            $(this).children('.tweet-actions').css({visibility: "visible"}); },
        function () {
            $('.tweet-actions').css({visibility: "hidden"});
        });

  tweetControls.hide();
  tweetCompose.on('focus', function(){
    tweetCompose.css("height", "5em");
    tweetControls.show();
  });
  // tweetCompose.blur(function(){
  //   tweetCompose.css("height", "2.5em");
  //   tweetControls.hide();
  // });


  tweetCompose.keyup(function(){
    var tweetLength = tweetCompose.val().length;
    var length = maxLength - tweetLength;
    charCount.text(length);
    if(length <= 10){
      charCount.css('color', 'red');
    } else {
        charCount.css('color','');
    }
    if (length < 0){
      $('#tweet-submit').prop('disabled', true);
      charCount.text('Too long!');
    } else {
      $('#tweet-submit').prop('disabled', false);
    };

  });

  tweetSubmit.on('click',function () {
    $('#stream').prepend(tweetClone);
    var tweetWords = tweetCompose.val();
      tweetClone.find('.fullname').text('Derp McDurp');
      tweetClone.find('.username').text('@thedurp');
      tweetClone.find('.avatar').attr('src', "img/alagoon.jpg");
      tweetClone.find('.tweet-text').text(tweetWords);
      tweetCompose.val('');

  });



  $('.stats').hide();
  $('.tweet').on('click', function(){
    $('.stats').show();

})


});
