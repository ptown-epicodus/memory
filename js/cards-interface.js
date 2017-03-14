var emojiArray = [
  'http://pix.iemoji.com/images/emoji/apple/ios-9/256/grinning-face.png', 'http://pix.iemoji.com/images/emoji/apple/ios-9/256/smiling-face-with-heart-shaped-eyes.png', 'http://pix.iemoji.com/images/emoji/apple/ios-9/256/face-throwing-a-kiss.png', 'http://pix.iemoji.com/images/emoji/apple/ios-9/256/face-with-stuck-out-tongue-and-tightly-closed-eyes.png', 'http://pix.iemoji.com/images/emoji/apple/ios-9/256/smiling-face-with-sunglasses.png'
];


var numberArray = [0,1,2,3,4];
//
var doubleArray = numberArray.slice();
for(var i=0;i<numberArray.length;i++) {
  doubleArray.push(numberArray[i]);
}

//borrowed from http://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
function shuffle(a) {
  var j, x, i;
  for (i = a.length; i; i--) {
      j = Math.floor(Math.random() * i);
      x = a[i - 1];
      a[i - 1] = a[j];
      a[j] = x;
  }
}


$(document).ready(function() {
  shuffle(doubleArray);
  for(var i=0; i<10; i++) {
    $('#card-'+i).append("<img src="+emojiArray[doubleArray[i]]+">");
    $('#card-'+i).addClass(''+doubleArray[i]+'');

  }
  $('.card').click(function() {
    if($(this).hasClass('flipped')){
      $(this).removeClass('flipped');
    } else {
      $(this).addClass('flipped');
    }
    var flipped = $('.flipped');
    if (flipped.length === 2) {
      if($('.flipped')[0].classList.value === $('.flipped')[1].classList.value) {
        $('.flipped').addClass('matched');

      }
      setTimeout(function () {
        $('.card').removeClass('flipped')
      }, 1500);
      var matched = $('.matched');
      if (matched.length === 10) {
        alert('you win!')
      }
    }
  });
});
