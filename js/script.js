var canvas = document.getElementById('mycanvas');
var ctx = canvas.getContext('2d');

canvas.width = 400;
canvas.height = 400;

var mouse = {
  x:0,
  y:0
}

canvas.addEventListener("mousemove",function(evt)
  {
    mouse.x = evt.offsetX
    mouse.y = evt.offsetY
  })

var time=0

//座標繪製
function draw(){
  time++
  ctx.clearRect(0,0,400,400)
  ctx.beginPath()
  for(var i=0;i<10;i++){
    let pos=i*50 //每格50畫一條線
    ctx.moveTo(pos,0) //x軸起點
    ctx.lineTo(pos,400) //x軸終點
    ctx.fillText(pos,pos,10)
    
    ctx.moveTo(0,pos) //y軸起點
    ctx.lineTo(400,pos) //y軸終點
    ctx.fillText(pos,10,pos)
  }
  ctx.strokeStyle = "rgba(0,0,0,0.1)"
  ctx.stroke()
  
  //地上的線
  ctx.beginPath()
  ctx.moveTo(25,350)
  ctx.lineTo(375,350)
  ctx.lineWidth = 2
  ctx.strokeStyle = "black"
  ctx.stroke()
  
  //中間樑柱
  ctx.fillStyle = "#DCDCDC"
  ctx.fillRect(180,150,40,150)
  ctx.strokeRect(180,150,40,150)

  //左邊樑柱
  ctx.fillStyle = "#DCDCDC"
  ctx.fillRect(80,150,40,150)
  ctx.strokeRect(80,150,40,150)

  //右邊樑柱
  ctx.fillStyle = "#DCDCDC"
  ctx.fillRect(280,150,40,150)
  ctx.strokeRect(280,150,40,150)
  
  //屋頂方形
  ctx.beginPath()
  ctx.moveTo(40,125)
  ctx.lineTo(360,125)
  ctx.lineTo(360,150)
  ctx.lineTo(40,150)
  ctx.closePath()
  
  ctx.fillStyle = "#C0C0C0"
  ctx.fill()
  ctx.strokeStyle = "black"
  ctx.stroke()
  
  //三角形屋頂
  ctx.beginPath()
  ctx.moveTo(50,125)
  ctx.lineTo(200,50)
  ctx.lineTo(350,125)
  ctx.closePath()
  
  ctx.fillStyle = "#F5F5F5"
  ctx.fill()
  ctx.strokeStyle = "black"
  ctx.stroke()
  
  //上台階
  ctx.fillStyle = "#DCDCDC"
  ctx.fillRect(60,300,280,25)
  ctx.strokeRect(60,300,280,25)
  
  //下台階
  ctx.fillStyle = "#DCDCDC"
  ctx.fillRect(30,325,340,25)
  ctx.strokeRect(30,325,340,25)

   //旗子
  ctx.beginPath()
  ctx.moveTo(175,75-mouse.y/20)
  ctx.lineTo(225,75-mouse.y/20)
  ctx.lineTo(225,110-mouse.y/20)
  ctx.lineTo(175,110-mouse.y/20)
  ctx.closePath()

  ctx.fillStyle = "red"
  ctx.fill()
  ctx.strokeStyle = "black"
  ctx.stroke()

  //車子
    ctx.fillStyle="#006400"
    let carx = time%440-40
    ctx.fillRect(carx,340,40,25)
    ctx.strokeRect(carx,340,40,25)

    ctx.fillRect(carx,330,70,5)
    ctx.strokeRect(carx,330,70,5)

    ctx.fillRect(carx,330,30,10)
    ctx.strokeRect(carx,330,30,10)
  
    ctx.beginPath()
    ctx.arc(carx+10,365,5,0,Math.PI*2)
    ctx.arc(carx+30,365,5,0,Math.PI*2)
  
    ctx.fillStyle="black"
    ctx.fill()
    ctx.stroke()

}

// draw()

setInterval(draw,10)