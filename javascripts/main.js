$(function(){
  var img = new Image();
  img.onload = function(){
    console.log('loaded');
    draw();
  }
  img.src = 'https://raw.githubusercontent.com/twosheep0603/one-power/5b7d3d5cb98fd6c078a60b2b6c58ac4a90539b80/images/colordot.jpg';
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
  $('#btn').click(function(){draw()});
  function draw(){
    var title = $('#title').val();
    var subtitle = $('#subtitle').val();
    var big = $('#big').val();
    var word = $('#word').val();
    ctx.clearRect(0,0,800,500);
    var size1 = Math.floor(500/title.length)
    var size2 = Math.floor(300/subtitle.length)
    var size3 = Math.floor(48+48/big.length)
    var size4 = Math.floor(32+100/word.length)
    ctx.font = "900 "+size1+"px 'Open Sans'";
    ctx.textAlign='center';
    ctx.fillText(title,220,150+size1/2);
    ctx.globalCompositeOperation = 'source-in';
    ctx.drawImage(img,-10,20,520,360);
    ctx.globalCompositeOperation = 'source-over';
    ctx.font = "400 "+size2+"px 'Open Sans'";
    ctx.fillText(subtitle,220,150+size1/2+size2);
    ctx.fillStyle="#333";
    ctx.fillRect(420.2,180-size1/2,1.6,size1+size2-20);
    ctx.textAlign='left';
    ctx.font = "400 "+size3+"px 'Open Sans'";
    ctx.fillStyle="black";
    ctx.fillText(big,450,250-size1/2);
    ctx.font = "400 "+size4+"px 'Open Sans'";
    ctx.fillText(word,450,310-size1/2);
  }
});
