
window.addEventListener("load",draw);
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
    function draw(){
       
        ctx.fillStyle = "brown";
        ctx.fillRect(240,175,20,80);
       
     
        ctx.beginPath();
        ctx.moveTo(250, 25);
        ctx.lineTo(200, 75); 
        ctx.lineTo(225, 75);
        ctx.lineTo(175, 125);
        ctx.lineTo(200, 125);
        ctx.lineTo(150, 175);
        ctx.lineTo(200, 175);
        ctx.lineTo(350, 175);
        ctx.lineTo(300, 125);
        ctx.lineTo(325, 125);
        ctx.lineTo(275, 75);
        ctx.lineTo(300, 75);
        ctx.lineTo(250, 25);
        ctx.closePath();  
        ctx.fillStyle = "green";
        ctx.fill();      
        ctx.stroke();
    }


   

   