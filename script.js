var canvas = document.querySelector("#dibujar");
console.log(canvas);
var contexto = canvas.getContext("2d");
console.log(contexto);

//sky
contexto.rect(0, 0, 535, 530);
contexto.fillStyle = "#46b4e1";
contexto.fill();
contexto.stroke();

//floor
contexto.beginPath();
contexto.rect(0, 470, 535, 70);
contexto.fillStyle = "#3ed35b";
contexto.fill();
contexto.stroke();

//house
contexto.beginPath();
contexto.rect(30, 270, 200, 230);
contexto.fillStyle = "#d3c9a4";
contexto.fill();
contexto.stroke();
 
//left window
contexto.beginPath();
contexto.rect(50, 300, 40, 50);
contexto.fillStyle = "#0a53d3";
contexto.fill();
contexto.stroke();

//right window
contexto.beginPath();
contexto.rect(170, 300, 40, 50);
contexto.fillStyle = "#0a53d3";
contexto.fill();
contexto.stroke();

//door
contexto.beginPath();
contexto.rect(100, 400, 60, 100);
contexto.fillStyle = "#a57e47";
contexto.fill();
contexto.stroke();

//fireplace
contexto.beginPath();
contexto.rect(175, 130, 30, 140);
contexto.fillStyle = "#e01f1f";
contexto.fill();
contexto.stroke();

//fireplace top
contexto.beginPath();
contexto.rect(165, 120, 50, 10);
contexto.fillStyle = "#e01f1f";
contexto.fill();
contexto.stroke();

//roof
contexto.beginPath();
   //contexto.lineWidth = 2;
contexto.moveTo(30, 270);
contexto.lineTo(230, 270);
contexto.lineTo(130, 145);
contexto.fillStyle = "#e01f1f";
contexto.fill();
contexto.stroke();

//tree log
contexto.beginPath();
contexto.rect(285, 340, 40, 130);
contexto.fillStyle = "#a57e47";
contexto.fill();
contexto.stroke();

//tree top
contexto.beginPath();
contexto.arc(305, 295, 65, 0, 2 * Math.PI);
contexto.fillStyle = "#229224";
contexto.fill();
contexto.stroke();

//apples
contexto.beginPath();
contexto.arc(280, 265, 5, 0, 2 * Math.PI);
contexto.fillStyle = "red";
contexto.fill();
contexto.stroke();

contexto.beginPath();
contexto.arc(335, 270, 5, 0, 2 * Math.PI);
contexto.fillStyle = "red";
contexto.fill();
contexto.stroke();

contexto.beginPath();
contexto.arc(270, 315, 5, 0, 2 * Math.PI);
contexto.fillStyle = "red";
contexto.fill();
contexto.stroke();

contexto.beginPath();
contexto.arc(325, 320, 5, 0, 2 * Math.PI);
contexto.fillStyle = "red";
contexto.fill();
contexto.stroke();

//sunlights
contexto.beginPath();
contexto.lineWidth = 2;
contexto.moveTo(320, 150);
contexto.lineTo(410, 110);

contexto.moveTo(340, 200);
contexto.lineTo(410, 110);

contexto.moveTo(410, 15);
contexto.lineTo(410, 110);

contexto.moveTo(340, 45);
contexto.lineTo(410, 110);

contexto.moveTo(320, 100);
contexto.lineTo(410, 110);

contexto.moveTo(500, 100);
contexto.lineTo(410, 110);

contexto.moveTo(420, 200);
contexto.lineTo(410, 110);

contexto.moveTo(490, 190);
contexto.lineTo(410, 110);

contexto.moveTo(490, 40);
contexto.lineTo(410, 110);

contexto.fillStyle = "black";
contexto.fill();
contexto.stroke();

//sun
contexto.beginPath();
contexto.arc(405, 110, 55, 0, 2 * Math.PI);
contexto.fillStyle = "yellow";
contexto.fill();
contexto.stroke();



