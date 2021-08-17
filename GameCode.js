console.log("Start");
var canv = document.getElementById("canvas") ,
    ctx = canv.getContext('2d');
    canv.width = window.innerWidth;
    canv.height = window.innerHeight;

var x = 20;

/*
setInterval(function () {
  ctx.fillRect(x++,20,100,100);

},16)
*/

let angle = 0 ;
var x = canv.width / 2;
var y = canv.height / 2;

var shift = 3;

var direction;

function checkBorderX(x) {
  if (x>canv.width) {
    x = 0;
  }
  if (x< 0 ) {
    x = canv.width ;
  }
  return x;
}

function checkBorderY(y) {
    if (y>canv.width) {
      y = 0;
    }
    if (y< 0 ) {
      y = canv.width ;
    }
    return y;
}

document.addEventListener('keydown',function (e) {
  //console.log(e.keyCode);
  switch (e.keyCode) {
    case 38:
    direction = 'up';

      break;
    case 40:
    direction = 'down';
      break;
    case 37:
    direction = 'right';
        break;
    case 39:
    direction = 'left';
        break;
        case 83:
        direction = 'stop';
            break;
    default:
    //console.log(e.keyCode);
      break;
  }
});

console.log("IMG");

// Создаем объект изображения
var img = new Image();
let img1 = document.createElement('img');
img1.src = "C:\\Users\\ildar.fayzullin\\Desktop\\JavaScript\\res\\Warrior\\crusader.png"; // (*)

/*
img1.onload = function() {
  alert(`Изображение загружено, размеры ${img1.width}x${img1.height}`);
};*/

img.src = "crusader.png";

var countfrmaesStanding = 12 ;
let frames = 0 ;
let frmaesCOunt = 0;
function drawCrusaderStand() {

var frameSizeX = 82;

  ctx.drawImage(img, 0 + (frameSizeX*((frames ) % countfrmaesStanding)) ,
                     0 + 128 * 4  ,
                     frameSizeX   ,
                     128  ,
      x, y,frameSizeX, 128);
      frmaesCOunt++;
      if (frmaesCOunt >= 4) {
              frmaesCOunt = 0;
              frames ++;
      }

  /*
  ctx.drawImage(img, 0 + (64*(frames % countfrmaesStanding)) ,
                     0 + (128*(frames % countfrmaesStanding)) ,
                      64   ,
                     128  ,
      x, y,64, 128);
      frames ++;
*/
}

img.onload = function() {


animation({
  clear() {
    ctx.clearRect(0,0,canv.width,canv.height);
    ctx.beginPath();
    ctx.fillStyle = 'white';
    ctx.fill();

  } ,
  update() {
    angle += Math.PI * 0.01;

      switch (direction) {
        case 'up':
        //38
        y -= shift;
          break;
       case 'down':
       //40
       y += shift;

         break;
      case 'right':
      //37
       x -= shift;
          break;
          case 'left':
          //39
      x += shift;
              break;
        default:
          break;
      }


  } ,
  render() {

/*
    ctx.arc(canv.width /2 + 150 * Math.cos(angle),
           canv.height /2 + 150 * Math.sin(angle) ,
     30 , 0 ,Math.PI * 2);
*/
     //ctx.arc(x, y ,  30 , 0 ,Math.PI * 2);
drawCrusaderStand();
//var crusader_img = documen

      x = checkBorderX(x)
      y = checkBorderX(y)


  var grad = ctx.createLinearGradient(canv.width /2 - 150 ,
                                      canv.height /2 - 150 ,
                                      canv.width /2 + 150 ,
                                     canv.height /2 + 150 );
  // Добавление трёх контрольных точек
  grad.addColorStop(0, 'red');
  grad.addColorStop(.5, 'green');
  grad.addColorStop(1, 'blue');
      ctx.fillStyle = grad;
      ctx.fill();
  }
});
};
