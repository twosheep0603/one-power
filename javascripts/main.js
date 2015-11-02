$(function(){
  var img = new Image();
  img.setAttribute('crossOrigin', 'anonymous');
  img.onload = function(){
    console.log('loaded');
    draw();
  }
  img.src = 'colordot.jpg';
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
  $('#btn').click(function(){
    draw();
  });
  $('#download').click(function(){
    console.info('download canvas')
    downloadCanvas(this, 'myCanvas', 'one power.png');
  });
  function draw(){
    var title = $('#title').val();
    var subtitle = $('#subtitle').val();
    var big = $('#big').val();
    var word = $('#word').val();
    ctx.clearRect(0,0,800,380);
    ctx.globalCompositeOperation = 'source-over';
    
    var size1 = title.length<3?168:Math.floor(500/title.length)
    var size2 = subtitle.length<6?50:Math.floor(300/subtitle.length)
    var size3 = Math.floor(48+48/big.length)
    var size4 = word.length<5?52:Math.floor(32+100/word.length)
    
    ctx.fillStyle="#000";
    ctx.font = "800 "+size1+"px 'Open Sans'";
    ctx.textAlign='center';
    ctx.fillText(title,220,150+size1/2);
    ctx.globalCompositeOperation = 'source-atop';
    ctx.drawImage(img,-20,-10,520,360);
    ctx.globalCompositeOperation = 'source-over';
    ctx.font = "400 "+size2+"px 'Droid Sans Mono'";
    ctx.fillText(subtitle,220,150+size1/2+size2);
    ctx.fillStyle="#333";
    ctx.fillRect(420.2,180-size1/2,1.6,size1+size2-20);
    ctx.textAlign='left';
    ctx.font = "400 "+size3+"px '微軟正黑體'";
    ctx.fillStyle="black";
    ctx.fillText(big,450,250-size1/2);
    ctx.font = "400 "+size4+"px '微軟正黑體'";
    ctx.fillText(word,450,310-size1/2);
    ctx.globalCompositeOperation='destination-atop';
    ctx.fillStyle="#FFF";
    ctx.fillRect(0,0,800,380);
  }
  function downloadCanvas(link, canvasID, filename) {
    link.href = document.getElementById(canvasID).toDataURL('image/png');
    link.download = filename;
  }
});
