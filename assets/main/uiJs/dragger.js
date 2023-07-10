
//All document const
const htmlBtn = $('#htmlBtn')
const cssBtn = $('#cssBtn')
const jsBtn = $('#jsBtn')
const nav = $('#nav')
const showBtn = $('#Show')
const hideBtn = $('#Hide')
const gridCanvas = $('#gridCanvas')

//Show Hide Btn Section
hideBtn.click(function(){  
  if (hideBtn.css('display') == 'block') {
    gridCanvas.hide(300);
    hideBtn.hide();
    showBtn.show(100);
  }
});

showBtn.click(function(){  
  if (showBtn.css('display') == 'block') {
    gridCanvas.show(300);
    showBtn.hide();
    hideBtn.show(100);
  }
});
//End show Hide Btn Section

//Get margin for Editors
marginTop = function(){
  height = nav.height()
  return height + "px"
}

//Animation load and message for redirect old browsers
document.onreadystatechange = function () {
  setTimeout(function(){
  var state = document.readyState
  if (state === 'complete'){
    document.getElementById('load').style.visibility="hidden";
    welcome();
  }
  else{
    document.getElementById('toolongawait').style.visibility="visible";}
}, 1500);}

window.addEventListener('resize', function(){
  
  gridCanvas.css({"height": "0px"});
  gridCanvas.css({"transition": '.3s'});
  gridCanvas.css({"top": marginTop()});
})

//Make codeCanvas disappear

$(".grid-stack-item").hover(				
  function () {
    gridCanvas.css({"height": "0px !important"});
    console.log("!")
  }, 

  function () {
    pepi= $(".grid-stack-item")[0].className;
    pepi2= $(".grid-stack-item")[1].className;
    pepi3= $(".grid-stack-item")[2].className;
    if (pepi == "grid-stack-item ui-draggable ui-resizable ui-draggable-dragging ui-resizable-autohide" || pepi2 == "grid-stack-item ui-draggable ui-resizable ui-draggable-dragging ui-resizable-autohide" || pepi3 == "grid-stack-item ui-draggable ui-resizable ui-draggable-dragging ui-resizable-autohide")
    {
      height = $( window ).height();
      heightReady = height + "px"
      gridCanvas.css({"height": heightReady});
      console.log("?");}
    else if(pepi == "grid-stack-item ui-draggable ui-resizable ui-resizable-autohide"){
      gridCanvas.css({"height": "0px !important"});}
  
  }
);

//tooltipBravo Section
//Tooltip from JS, created by Alan.

//tooltip style
const cssBravoInfo = `
  opacity: 0;
  width: 450px;
  position: absolute;
  z-index: 1000;
  background-color: white;
  color: black;
  text-align: center;
  border-radius: 6px;
  border: solid 1px rgb(191, 191, 191);
  padding: 30px;
  transform: translateX(-40px);
  transform: translateY(10px);
  transition: .3s;
}`

const cssBravoDebajo = `
  opacity: 0;
  position: absolute;
  z-index: 1000;
  background-color: white;
  color: black;
  text-align: center;
  width: 170px;
  border-radius: 6px;
  border: solid 1px rgb(191, 191, 191);
  padding: 10px;
  transform: translate(-60px, 15px);
  transition: .3s;
}`

//Create tooltip bravo
$('#logo').on('mouseenter', function(){       
  // function only for 'mouseenter' event
  $(`${logoTooltip}`).appendTo("#logo");
  setTimeout(function(){
    const pepe = document.getElementById("tooltipBravo") 
    if (pepe === null){}
    else{
    document.getElementById("tooltipBravo").style.opacity=1;}
}, 1000);
});

//Delete tooltip on Hover
$('#logo').on('mouseleave', function(){
  document.getElementById("tooltipBravo").style.opacity=0;
  contentToRemove = document.querySelectorAll("#tooltipBravo");
  setTimeout(function(){
    $(contentToRemove).remove();
}, 300);  
});

var logoTooltip = `
<div id='tooltipBravo' style="${cssBravoInfo}">

<button id="logo">
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="21.3px"height="20.1px" viewBox="0 0 21.3 20.1" style="overflow:visible;enable-background:new 0 0 21.3 20.1;" xml:space="preserve"><style type="text/css"></style><defs></defs><g id="Layer_2_2_"><g><path class="st0" d="M6.1,0c0.1,4.8,0.3,9.5,0.4,14.3c2.8,0,5.5,0,8.4,0c0.1-3,0.1-5.8,0.3-8.7c-1,0-1.9,0-3,0c0,1.9,0,3.9-0.1,5.8c-1,0-1.8,0-2.8,0c0-3-0.1-5.8-0.1-8.7c3,0,6,0,9,0c-0.3,4.8-0.4,9.5-0.6,14.3c-4.6,0-9.1,0-13.7,0C3.6,11.5,3.3,5.7,3.1,0C2.1,0,1,0,0,0c0.4,6.7,0.7,13.4,1.2,20.1c5.4,0,10.7,0,16.3,0c0.9,0,1.8,0,2.7,0c0.4-6.7,0.7-13.4,1.2-20.1C16.3,0,11.3,0,6.1,0z"></g></g></svg>
</button>

<br>
<br>
<h4>Codart Version 1.0.</h4><br>

<p>© 2020-2021 Unirvana.live, All rights reserved.</p><br>

<p>Tenga en cuenta que es una versión BETA, por lo que agradecemos cualquier comentario ó contribución. Será de gran ayuda para entender cómo lo estás disfrutando, y mejorar aún más la experiencia.
Por supuesto, si necesita ayuda, no dude en consultar nuestra sección de preguntas frecuentes, así como nuestra documentación. </p>


<p> Unirvana.live, el logotipo de Unirvana.live y Codart son marcas comerciales de Unirvana Inc. en el
República Argentina. </p> <br>

<p> Codart usa parcial o totalmente software de otros proyectos como: </p>
<a href="https://ace.c9.io/">Ace</a>,
<a href="http://www.dematte.at/colorPicker/"> ColorPicker</a>,
<a href="https://eruda.liriliri.io/"> Eruda</a>,
<a href="https://stuk.github.io/jszip/"> JsZip</a>,
<a href="https://getbootstrap.com/> Bootstrap</a>,
<a href="https://jquery.com/"> JQuery</a>,
<a href="https://gridstackjs.com/"> GridStack</a>,
<a href="https://modernizr.com/"> Modernizr</a><br><br><br>

<p>Visite la sección legal para obtener más información.</p>

<a href="https://github.com/dfralan/newUnirvana/tree/main/ide/doc">Docs</a><br>
<a href="https://github.com/dfralan/newUnirvana/tree/main/ide">Lib</a><br><br>
</div>
`



//Create tooltip bravo
$('#undoBtn').on('mouseenter', function(){       
  // function only for 'mouseenter' event
  $(`${undoTooltip}`).appendTo("#undoBtn");
  setTimeout(function(){
    const pepe = document.getElementById("tooltipBravo") 
    if (pepe === null){}
    else{
    document.getElementById("tooltipBravo").style.opacity=1;}
}, 1000);
});

//Delete tooltip on Hover
$('#undoBtn').on('mouseleave', function(){
  document.getElementById("tooltipBravo").style.opacity=0;
  contentToRemove = document.querySelectorAll("#tooltipBravo");
  setTimeout(function(){
    $(contentToRemove).remove();
}, 300);  
});

var undoTooltip = `
<p id='tooltipBravo' style="${cssBravoDebajo}">
Deshaz la última accion.
</p>
`

//Create tooltip bravo
$('#redoBtn').on('mouseenter', function(){       
  // function only for 'mouseenter' event
  $(`${redoTooltip}`).appendTo("#redoBtn");
  setTimeout(function(){
    const pepe = document.getElementById("tooltipBravo") 
    if (pepe === null){}
    else{
    document.getElementById("tooltipBravo").style.opacity=1;}
}, 1000);
});

//Delete tooltip on Hover
$('#redoBtn').on('mouseleave', function(){
  document.getElementById("tooltipBravo").style.opacity=0;
  contentToRemove = document.querySelectorAll("#tooltipBravo");
  setTimeout(function(){
    $(contentToRemove).remove();
}, 300);  
});

var redoTooltip = `
<p id='tooltipBravo' style="${cssBravoDebajo}">
Repite tu última accion.
</p>
`

//Create tooltip bravo
$('#htmlBtn').on('mouseenter', function(){       
  // function only for 'mouseenter' event
  $(`${htmlTooltip}`).appendTo("#htmlBtn");
  setTimeout(function(){
    const pepe = document.getElementById("tooltipBravo") 
    if (pepe === null){}
    else{
    document.getElementById("tooltipBravo").style.opacity=1;}
}, 1000);
});

//Delete tooltip on Hover
$('#htmlBtn').on('mouseleave', function(){
  document.getElementById("tooltipBravo").style.opacity=0;
  contentToRemove = document.querySelectorAll("#tooltipBravo");
  setTimeout(function(){
    $(contentToRemove).remove();
}, 300);  
});

var htmlTooltip = `
<p id='tooltipBravo' style="${cssBravoDebajo}">
Este es el botón de atajo a tu hoja HTML.
</p>
`

//Create tooltip bravo
$('#cssBtn').on('mouseenter', function(){       
  // function only for 'mouseenter' event
  $(`${cssTooltip}`).appendTo("#cssBtn");
  setTimeout(function(){
    const pepe = document.getElementById("tooltipBravo") 
    if (pepe === null){}
    else{
    document.getElementById("tooltipBravo").style.opacity=1;}
}, 1000);
});

//Delete tooltip on Hover
$('#cssBtn').on('mouseleave', function(){
  document.getElementById("tooltipBravo").style.opacity=0;
  contentToRemove = document.querySelectorAll("#tooltipBravo");
  setTimeout(function(){
    $(contentToRemove).remove();
}, 300);  
});

var cssTooltip = `
<p id='tooltipBravo' style="${cssBravoDebajo}">
Este es el botón de atajo a tu hoja de estilos (CSS).
</p>
`

//Create tooltip bravo
$('#jsBtn').on('mouseenter', function(){       
  // function only for 'mouseenter' event
  $(`${jsTooltip}`).appendTo("#jsBtn");
  setTimeout(function(){
    const pepe = document.getElementById("tooltipBravo") 
    if (pepe === null){}
    else{
    document.getElementById("tooltipBravo").style.opacity=1;}
}, 1000);
});

//Delete tooltip on Hover
$('#jsBtn').on('mouseleave', function(){
  document.getElementById("tooltipBravo").style.opacity=0;
  contentToRemove = document.querySelectorAll("#tooltipBravo");
  setTimeout(function(){
    $(contentToRemove).remove();
}, 300);  
});

var jsTooltip = `
<p id='tooltipBravo' style="${cssBravoDebajo}">
Este es el botón de atajo a tu hoja de funciones (Javascript).
</p>
`

//Create tooltip bravo
hideBtn.on('mouseenter', function(){       
  // function only for 'mouseenter' event
  $(`${hideTooltip}`).appendTo("#Hide");
  setTimeout(function(){
    const pepe = document.getElementById("tooltipBravo") 
    if (pepe === null){}
    else{
    document.getElementById("tooltipBravo").style.opacity=1;}
}, 1000);
});

//Delete tooltip on Hover
hideBtn.on('mouseleave', function(){
  document.getElementById("tooltipBravo").style.opacity=0;
  contentToRemove = document.querySelectorAll("#tooltipBravo");
  setTimeout(function(){
    $(contentToRemove).remove();
}, 300);  
});

var hideTooltip = `
<p id='tooltipBravo' style="${cssBravoDebajo}">
Presioná este botón para ocultar tus hojas de trabajo.
</p>
`

//Create tooltip bravo
$('#Show').on('mouseenter', function(){       
  // function only for 'mouseenter' event
  $(`${showTooltip}`).appendTo("#Show");
  setTimeout(function(){
    const pepe = document.getElementById("tooltipBravo") 
    if (pepe === null){}
    else{
    document.getElementById("tooltipBravo").style.opacity=1;}
}, 1000);
});

//Delete tooltip on Hover
$('#Show').on('mouseleave', function(){
  document.getElementById("tooltipBravo").style.opacity=0;
  contentToRemove = document.querySelectorAll("#tooltipBravo");
  setTimeout(function(){
    $(contentToRemove).remove();
}, 300);  
});

var showTooltip = `
<p id='tooltipBravo' style="${cssBravoDebajo}">
Presioná este botón para mostrar tus hojas de trabajo.
</p>
`

//Create tooltip bravo
$('#scriptBtn').on('mouseenter', function(){       
  // function only for 'mouseenter' event
  $(`${scriptTooltip}`).appendTo("#scriptBtn");
  setTimeout(function(){
    const pepe = document.getElementById("tooltipBravo") 
    if (pepe === null){}
    else{
    document.getElementById("tooltipBravo").style.opacity=1;}
}, 1000);
});

//Delete tooltip on Hover
$('#scriptBtn').on('mouseleave', function(){
  document.getElementById("tooltipBravo").style.opacity=0;
  contentToRemove = document.querySelectorAll("#tooltipBravo");
  setTimeout(function(){
    $(contentToRemove).remove();
}, 300);  
});

var scriptTooltip = `
<p id='tooltipBravo' style="${cssBravoDebajo}">
Administrá tus Links, Scripts, y CDN's.
</p>
`

//Create tooltip bravo
$('#clearBtn').on('mouseenter', function(){       
  // function only for 'mouseenter' event
  $(`${clearTooltip}`).appendTo("#clearBtn");
  setTimeout(function(){
    const pepe = document.getElementById("tooltipBravo") 
    if (pepe === null){}
    else{
    document.getElementById("tooltipBravo").style.opacity=1;}
}, 1000);
});

//Delete tooltip on Hover
$('#clearBtn').on('mouseleave', function(){
  document.getElementById("tooltipBravo").style.opacity=0;
  contentToRemove = document.querySelectorAll("#tooltipBravo");
  setTimeout(function(){
    $(contentToRemove).remove();
}, 300);  
});

var clearTooltip = `
<p id='tooltipBravo' style="${cssBravoDebajo}">
Presiona aquí para limpiar tu mesa de trabajo.
</p>
`

//Create tooltip bravo
$('#runBtn').on('mouseenter', function(){       
  // function only for 'mouseenter' event
  $(`${runTooltip}`).appendTo("#runBtn");
  setTimeout(function(){
    const pepe = document.getElementById("tooltipBravo") 
    if (pepe === null){}
    else{
    document.getElementById("tooltipBravo").style.opacity=1;}
}, 1000);
});

//Delete tooltip on Hover
$('#runBtn').on('mouseleave', function(){
  document.getElementById("tooltipBravo").style.opacity=0;
  contentToRemove = document.querySelectorAll("#tooltipBravo");
  setTimeout(function(){
    $(contentToRemove).remove();
}, 300);  
});

var runTooltip = `
<p id='tooltipBravo' style="${cssBravoDebajo}">
Haz correr tu aplicación.
</p>
`

//Create tooltip bravo
$('#exportBtn').on('mouseenter', function(){       
  // function only for 'mouseenter' event
  $(`${exportTooltip}`).appendTo("#exportBtn");
  setTimeout(function(){
    const pepe = document.getElementById("tooltipBravo") 
    if (pepe === null){}
    else{
    document.getElementById("tooltipBravo").style.opacity=1;}
}, 1000);
});

//Delete tooltip on Hover
$('#exportBtn').on('mouseleave', function(){
  document.getElementById("tooltipBravo").style.opacity=0;
  contentToRemove = document.querySelectorAll("#tooltipBravo");
  setTimeout(function(){
    $(contentToRemove).remove();
}, 300);  
});

var exportTooltip = `
<p id='tooltipBravo' style="${cssBravoDebajo}">
Haz click para ir a la ventana de exportación.
</p>
`;

