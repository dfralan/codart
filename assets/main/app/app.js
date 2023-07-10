//Code taker section
function getUserCode() {
    return consoleSwitcher() + "\n" + recolectoScripts() + "\n" + htmlEditor.getValue() + "\n" + "<style>" + "\n" + cssEditor.getValue() + "\n" + "</style>" + "\n" +  "<script>" + "\n" + jsEditor.getValue() + "\n" + "</script>";
    }//End code taker section


//Funcion Console Switcher    
const consoleSwitchBtn = document.getElementById("consoleSwitchBtn");
const consoleScripter = '<script src="assets/Eruda/eruda.unminifiedCopy.js"></script>'
function consoleSwitcher() {
  // Get the checkbox
  if (consoleSwitchBtn.checked == true){
      return consoleScripter;
  } else {return ""}
  }//End actualizar previsualizacion e interpretación 

consoleSwitchBtn.addEventListener('change', (event) => {
  getUserCode()
  update() 
})


//Color Ui section
function getContrast(hexcolor){//Get contrast
    var r = parseInt(hexcolor.substr(0,2),16);
    var g = parseInt(hexcolor.substr(2,2),16);
    var b = parseInt(hexcolor.substr(4,2),16);
    var yiq = ((r*299)+(g*587)+(b*114))/1000;
    return (yiq >= 128) ? 'black' : 'white';
}

gato()

function gato(){
	let n = 0;
	let x = 0;
	while (n < 5) {n++;x += n;
		randomColor = Math.floor(Math.random()*16777215).toString(16);
    readyRandomColor = '#'+ randomColor;        
    readyRandomColorInverted = getContrast(randomColor);
		$(".logo__stroke").css({"stroke": readyRandomColor});
    $(".logo__stroke").css("filter", `drop-shadow( 0px 0px 1px ${readyRandomColor})`);
    $(".logo__fill").css({"stroke": readyRandomColor});
    $(".st0").css({"fill": readyRandomColor});	
    $(".color").css({"color": readyRandomColorInverted, "background-color": readyRandomColor});
	}}

logo.addEventListener('click', () => {
    gato();
});//End random color generator

//Theme selector
const themes = document.getElementById("themes")

function theme() {
    var select = themes;
    var option = select.options[select.selectedIndex];
    themeSelected = themes.value = option.text;
    htmlEditor.setTheme(`ace/theme/${themeSelected}`);
    cssEditor.setTheme(`ace/theme/${themeSelected}`);
    jsEditor.setTheme(`ace/theme/${themeSelected}`);
  }

  themes.addEventListener('change', () => {
      theme()
});//End theme selector

//script Window
const scriptManagerBtn  = $('#scriptBtn')//Boton del tablero
const scriptWindow = $('#scriptWindow')//Ventana Script Manager
const closeScriptBtn = $('#closeScriptBtn')//Cancelar y cerrar ventana
const aceptarScriptBtn = $('#aceptarScriptBtn')//Boton para aceptar y actualizar cambios en Scripts
// Script and Link Manager

//Mostrar Script Manager Window
scriptManagerBtn.click (function() {
    scriptWindow.fadeIn(300);    
});//End download show section

//Ocultar Script Manager Window
closeScriptBtn.click (function() {
    scriptWindow.fadeOut(300);    
});//End script section


//Script 1
function scriptReady1() {
  var scriptInput1 = $('#scriptInput1').val();  
  return(scriptInput1);
  }

$('#tryScriptBtn1').click (function () {
  result = scriptReady1();
  if (result=="") {
    $('#outputScript1').html ("Esta vacio.");
  }
  else{
    $('#outputScript1').html ("Listoooooooo");
  }
});

$('#deleteScriptInput1').click (function () {
  result = scriptReady1();
  if (result == "") {
    $('#outputScript1').html("Ya está vacio rrope.");
  }
  else{
    $('#outputScript1').html('Borrado jefe');
    $('#scriptInput1').val('');
  }
});

//Script 2
function scriptReady2() {
  var scriptInput2 = $('#scriptInput2').val();  
  return(scriptInput2);
  }

$('#tryScriptBtn2').click (function () {
  result = scriptReady2();
  if (result=="") {
    $('#outputScript2').html ("Esta vacio.");
  }
  else{
    $('#outputScript2').html ("Listoooooooo");
  }
});

$('#deleteScriptInput2').click (function () {
  result = scriptReady2();
  if (result == "") {
    $('#outputScript2').html("Ya está vacio rrope.");
  }
  else{
    $('#outputScript2').html('Borrado jefe');
    $('#scriptInput2').val('');
  }
});

//Script 3
function scriptReady3() {
  var scriptInput3 = $('#scriptInput3').val();  
  return(scriptInput3);
  }

$('#tryScriptBtn3').click (function () {
  result = scriptReady3();
  if (result=="") {
    $('#outputScript3').html ("Esta vacio.");
  }
  else{
    $('#outputScript3').html ("Listoooooooo");
  }
});

$('#deleteScriptInput3').click (function () {
  result = scriptReady3();
  if (result == "") {
    $('#outputScript3').html("Ya está vacio rrope.");
  }
  else{
    $('#outputScript3').html('Borrado jefe');
    $('#scriptInput3').val('');
  }
});


//Script 4
function scriptReady4() {
  var scriptInput4 = $('#scriptInput4').val();  
  return(scriptInput4);
  }

$('#tryScriptBtn4').click (function () {
  result = scriptReady4();
  if (result=="") {
    $('#outputScript4').html ("Esta vacio.");
  }
  else{
    $('#outputScript4').html ("Listoooooooo");
  }
});

$('#deleteScriptInput4').click (function () {
  result = scriptReady4();
  if (result == "") {
    $('#outputScript4').html("Ya está vacio rrope.");
  }
  else{
    $('#outputScript4').html('Borrado jefe');
    $('#scriptInput4').val('');
  }
});


//Script 5
function scriptReady5() {
  var scriptInput5 = $('#scriptInput5').val();  
  return(scriptInput5);
  }

$('#tryScriptBtn5').click (function () {
  result = scriptReady5();
  if (result=="") {
    $('#outputScript5').html ("Esta vacio.");
  }
  else{
    $('#outputScript5').html ("Listoooooooo");
  }
});

$('#deleteScriptInput5').click (function () {
  result = scriptReady5();
  if (result == "") {
    $('#outputScript5').html("Ya está vacio rrope.");
  }
  else{
    $('#outputScript5').html('Borrado jefe');
    $('#scriptInput5').val('');
  }
});

function recolectoScripts(){
  return filteredScript1() + filteredScript2() + filteredScript3() + filteredScript4() + filteredScript5()
}

aceptarScriptBtn.click (function(){
  scriptWindow.fadeOut(300);
  recolectoScripts()
  update()
})

function filteredScript1(){
  if (scriptReady1() == "") {
    //  block of code to be executed if the condition is true
    return "";
  } else {
    //  block of code to be executed if the condition is false
    return "\n\t\t" + "<!-- External Dependencies -->" + "\n\t\t" + scriptReady1();
  }}

  function filteredScript2(){
    if (scriptReady2() == "") {
      //  block of code to be executed if the condition is true
      return "";
    } else {
      //  block of code to be executed if the condition is false
      return "\n\t\t" + scriptReady2();
    }}

    function filteredScript3(){
      if (scriptReady3() == "") {
        //  block of code to be executed if the condition is true
        return "";
      } else {
        //  block of code to be executed if the condition is false
        return "\n\t\t" + scriptReady3();
      }}

      function filteredScript4(){
        if (scriptReady4() == "") {
          //  block of code to be executed if the condition is true
          return "";
        } else {
          //  block of code to be executed if the condition is false
          return "\n\t\t" + scriptReady4();
        }}
  


        function filteredScript5(){
          if (scriptReady5() == "") {
            //  block of code to be executed if the condition is true
            return "";
          } else {
            //  block of code to be executed if the condition is false
            return "\n\t\t" + scriptReady5();
          }}


//Actualizar previsualizacion e interpretación  
function update() {
    //this is the content of iframe
    var code = document.getElementById('iframeUser').contentWindow.document;
    code.open();
    
    getUserCode()
    //getting value from editor and puts in the iframe
    code.write(getUserCode());
    code.close();

const runBtn = document.getElementById("runBtn")

runBtn.addEventListener('click', () => {
    update();
});} 


//Funcion AutoRun
function autoRun() {
// Get the checkbox
var autoRunBtn = document.getElementById("autoRunBtn");
if (autoRunBtn.checked == true){
    update()
} else {}
}//End actualizar previsualizacion e interpretación 



//Undo & Redo functions
const undoBtn = document.getElementById("undoBtn")//Undo function
undoBtn.addEventListener('click', () => {
    document.execCommand('undo', false, null);
});

const redoBtn = document.getElementById("redoBtn")//Redo function
redoBtn.addEventListener('click', () => {
    document.execCommand('redo', false, null);
});//End Undo & Redo functions


//Pre armado de editores
function loadHTMLEditor() {    
    defaultHTMLValue = 
`
<div class="wrapper">
    <h1>
    Static Layout Example
    </h1>
    <header>
    </header>
        <nav>
        NAV
        </nav>
    <section>
        SECTION
    </section>
</div>
`
    //tells ace editor to use editor element , window.editor makes it global in the javascript file
    htmlEditor = ace.edit("htmlEditor");
    //mode mode
    htmlEditor.setTheme("ace/theme/monokai");
    //html mode
    htmlEditor.getSession().setMode("ace/mode/html");
    //sample text
    htmlEditor.setValue(defaultHTMLValue,1); //1 = moves cursor to end
    // when something changed in editor update is called
    htmlEditor.getSession().on('change', function() {
        autoRun();
    });

    // puts cursor in the editor
    htmlEditor.focus();

    //htmlEditor.setOption('showLineNumbers', true);
    htmlEditor.setOptions({
        showLineNumbers: true,
        vScrollBarAlwaysVisible:false,
        enableBasicAutocompletion: true,
        enableSnippets: true,
        enableLiveAutocompletion: false,
        selectionStyle: 'line',// "line"|"text"
        highlightActiveLine: true, // boolean
        highlightSelectedWord: true, // boolean
        readOnly: false, // boolean: true if read only
        cursorStyle: 'ace', // "ace"|"slim"|"smooth"|"wide"
        mergeUndoDeltas: true, // false|true|"always"
        behavioursEnabled: true, // boolean: true if enable custom behaviours
        wrapBehavioursEnabled: true, // boolean
        autoScrollEditorIntoView: undefined, // boolean: this is needed if editor is inside scrollable page
        keyboardHandler: null, // function: handle custom keyboard events        
        
        // renderer options
        animatedScroll: false, // boolean: true if scroll should be animated
        displayIndentGuides: false, // boolean: true if the indent should be shown. See 'showInvisibles'
        showInvisibles: false, // boolean -> displayIndentGuides: true if show the invisible tabs/spaces in indents
        showPrintMargin: true, // boolean: true if show the vertical print margin
        printMarginColumn: 80, // number: number of columns for vertical print margin
        printMargin: undefined, // boolean | number: showPrintMargin | printMarginColumn
        showGutter: true, // boolean: true if show line gutter
        fadeFoldWidgets: false, // boolean: true if the fold lines should be faded
        showFoldWidgets: true, // boolean: true if the fold lines should be shown ?
        showLineNumbers: true,
        highlightGutterLine: false, // boolean: true if the gutter line should be highlighted
        hScrollBarAlwaysVisible: false, // boolean: true if the horizontal scroll bar should be shown regardless
        vScrollBarAlwaysVisible: false, // boolean: true if the vertical scroll bar should be shown regardless
        fontSize: 12, // number | string: set the font size to this many pixels
        fontFamily: undefined, // string: set the font-family css value
        maxLines: undefined, // number: set the maximum lines possible. This will make the editor height changes
        minLines: undefined, // number: set the minimum lines possible. This will make the editor height changes
        maxPixelHeight: 0, // number -> maxLines: set the maximum height in pixel, when 'maxLines' is defined. 
        scrollPastEnd: 0, // number -> !maxLines: if positive, user can scroll pass the last line and go n * editorHeight more distance 
        fixedWidthGutter: false, // boolean: true if the gutter should be fixed width        
        
        // mouseHandler options
        scrollSpeed: 2, // number: the scroll speed index
        dragDelay: 0, // number: the drag delay before drag starts. it's 150ms for mac by default 
        dragEnabled: true, // boolean: enable dragging
        focusTimout: 0, // number: the focus delay before focus starts.
        tooltipFollowsMouse: true, // boolean: true if the gutter tooltip should follow mouse
        
        // session options
        firstLineNumber: 1, // number: the line number in first line
        overwrite: false, // boolean
        newLineMode: 'auto', // "auto" | "unix" | "windows"
        useWorker: true, // boolean: true if use web worker for loading scripts
        useSoftTabs: true, // boolean: true if we want to use spaces than tabs
        tabSize: 4, // number
        wrap: false, // boolean | string | number: true/'free' means wrap instead of horizontal scroll, false/'off' means horizontal scroll instead of wrap, and number means number of column before wrap. -1 means wrap at print margin
        indentedSoftWrap: true, // boolean
        foldStyle: 'markbegin', // enum: 'manual'/'markbegin'/'markbeginend'.
    });

    htmlEditor.setShowPrintMargin(false);
    //htmlEditor.setBehavioursEnabled(false);
}



function loadCSSEditor() {
    defaultCSSValue =
    `.wrapper{width: 960px;margin: 0 auto;}header{width:960px;}nav, section {float: left;}nav{width: 200px;margin-right: 10px;
    }
    
    section {
    width: 750px;
    }
    *, *:before, *:after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    }
    
    body {
    background: #C1C1C1;
    color: #444;
    font-family: Helvetica;
    text-align: center;
    margin: 0;
    }
    
    header,
    nav,
    section {
    border: 1px solid white;
    margin-bottom: 10px;
    border-radius: 3px;
    }
    
    header {
    padding: 20px 0;
    }
    
    nav, section {
    padding: 200px 0;
    }`
    //tells ace editor to use editor element , window.editor makes it global in the javascript file
    cssEditor = ace.edit("cssEditor");
    cssEditor.resize();
    cssEditor.renderer.updateFull();
    //mode mode
    cssEditor.setTheme("ace/theme/monokai");
    //html mode
    cssEditor.getSession().setMode("ace/mode/css");
    //sample text
    cssEditor.setValue(defaultCSSValue,1); //1 = moves cursor to end
    // when something changed in editor update is called
    cssEditor.getSession().on('change', function() {
        autoRun();
    });

    // puts cursor in the editor
    cssEditor.focus();

    //htmlEditor.setOption('showLineNumbers', true);
    cssEditor.setOptions({
        showLineNumbers: true,
        vScrollBarAlwaysVisible:false,
        enableBasicAutocompletion: true,
        enableSnippets: true,
        enableLiveAutocompletion: true,
        selectionStyle: 'line',// "line"|"text"
        highlightActiveLine: true, // boolean
        highlightSelectedWord: true, // boolean
        readOnly: false, // boolean: true if read only
        cursorStyle: 'ace', // "ace"|"slim"|"smooth"|"wide"
        mergeUndoDeltas: true, // false|true|"always"
        behavioursEnabled: true, // boolean: true if enable custom behaviours
        wrapBehavioursEnabled: true, // boolean
        autoScrollEditorIntoView: undefined, // boolean: this is needed if editor is inside scrollable page
        keyboardHandler: null, // function: handle custom keyboard events
        
        // renderer options
        animatedScroll: false, // boolean: true if scroll should be animated
        displayIndentGuides: false, // boolean: true if the indent should be shown. See 'showInvisibles'
        showInvisibles: false, // boolean -> displayIndentGuides: true if show the invisible tabs/spaces in indents
        showPrintMargin: true, // boolean: true if show the vertical print margin
        printMarginColumn: 80, // number: number of columns for vertical print margin
        printMargin: undefined, // boolean | number: showPrintMargin | printMarginColumn
        showGutter: true, // boolean: true if show line gutter
        fadeFoldWidgets: false, // boolean: true if the fold lines should be faded
        showFoldWidgets: true, // boolean: true if the fold lines should be shown ?
        showLineNumbers: true,
        highlightGutterLine: false, // boolean: true if the gutter line should be highlighted
        hScrollBarAlwaysVisible: false, // boolean: true if the horizontal scroll bar should be shown regardless
        vScrollBarAlwaysVisible: false, // boolean: true if the vertical scroll bar should be shown regardless
        fontSize: 12, // number | string: set the font size to this many pixels
        fontFamily: undefined, // string: set the font-family css value
        maxLines: undefined, // number: set the maximum lines possible. This will make the editor height changes
        minLines: undefined, // number: set the minimum lines possible. This will make the editor height changes
        maxPixelHeight: 0, // number -> maxLines: set the maximum height in pixel, when 'maxLines' is defined. 
        scrollPastEnd: 0, // number -> !maxLines: if positive, user can scroll pass the last line and go n * editorHeight more distance 
        fixedWidthGutter: false, // boolean: true if the gutter should be fixed width
        
        // mouseHandler options
        scrollSpeed: 2, // number: the scroll speed index
        dragDelay: 0, // number: the drag delay before drag starts. it's 150ms for mac by default 
        dragEnabled: true, // boolean: enable dragging
        focusTimout: 0, // number: the focus delay before focus starts.
        tooltipFollowsMouse: true, // boolean: true if the gutter tooltip should follow mouse

        // session options
        firstLineNumber: 1, // number: the line number in first line
        overwrite: false, // boolean
        newLineMode: 'auto', // "auto" | "unix" | "windows"
        useWorker: true, // boolean: true if use web worker for loading scripts
        useSoftTabs: true, // boolean: true if we want to use spaces than tabs
        tabSize: 4, // number
        wrap: false, // boolean | string | number: true/'free' means wrap instead of horizontal scroll, false/'off' means horizontal scroll instead of wrap, and number means number of column before wrap. -1 means wrap at print margin
        indentedSoftWrap: true, // boolean
        foldStyle: 'markbegin', // enum: 'manual'/'markbegin'/'markbeginend'.
    });
    cssEditor.setShowPrintMargin(false);
    //cssEditor.setBehavioursEnabled(false);
}



function loadJSEditor() {
    defaultJSValue = `console.log("Hola perro")`
    //tells ace editor to use editor element , window.editor makes it global in the javascript file
    jsEditor = ace.edit("jsEditor");
    //mode mode
    jsEditor.setTheme("ace/theme/monokai");
    //html mode
    jsEditor.getSession().setMode("ace/mode/javascript");
    //sample text
    jsEditor.setValue(defaultJSValue,1); //1 = moves cursor to end
    // when something changed in editor update is called
    jsEditor.getSession().on('change', function() {
        autoRun();
    });

    // puts cursor in the editor
    jsEditor.focus();
    
    //htmlEditor.setOption('showLineNumbers', true);
    jsEditor.setOptions({
        fontSize: "12.5pt",
        showLineNumbers: true,
        vScrollBarAlwaysVisible:true,
        enableBasicAutocompletion: true,
        enableSnippets: true,
        enableLiveAutocompletion: false,
        showLineNumbers: true,
        vScrollBarAlwaysVisible:false,
        enableBasicAutocompletion: true,
        enableSnippets: true,
        enableLiveAutocompletion: true,
        selectionStyle: 'line',// "line"|"text"
        highlightActiveLine: true, // boolean
        highlightSelectedWord: true, // boolean
        readOnly: false, // boolean: true if read only
        cursorStyle: 'ace', // "ace"|"slim"|"smooth"|"wide"
        mergeUndoDeltas: true, // false|true|"always"
        behavioursEnabled: true, // boolean: true if enable custom behaviours
        wrapBehavioursEnabled: true, // boolean
        autoScrollEditorIntoView: undefined, // boolean: this is needed if editor is inside scrollable page
        keyboardHandler: null, // function: handle custom keyboard events
        
        // renderer options
        animatedScroll: false, // boolean: true if scroll should be animated
        displayIndentGuides: false, // boolean: true if the indent should be shown. See 'showInvisibles'
        showInvisibles: false, // boolean -> displayIndentGuides: true if show the invisible tabs/spaces in indents
        showPrintMargin: true, // boolean: true if show the vertical print margin
        printMarginColumn: 80, // number: number of columns for vertical print margin
        printMargin: undefined, // boolean | number: showPrintMargin | printMarginColumn
        showGutter: true, // boolean: true if show line gutter
        fadeFoldWidgets: false, // boolean: true if the fold lines should be faded
        showFoldWidgets: true, // boolean: true if the fold lines should be shown ?
        showLineNumbers: true,
        highlightGutterLine: false, // boolean: true if the gutter line should be highlighted
        hScrollBarAlwaysVisible: false, // boolean: true if the horizontal scroll bar should be shown regardless
        vScrollBarAlwaysVisible: false, // boolean: true if the vertical scroll bar should be shown regardless
        fontSize: 12, // number | string: set the font size to this many pixels
        fontFamily: undefined, // string: set the font-family css value
        maxLines: undefined, // number: set the maximum lines possible. This will make the editor height changes
        minLines: undefined, // number: set the minimum lines possible. This will make the editor height changes
        maxPixelHeight: 0, // number -> maxLines: set the maximum height in pixel, when 'maxLines' is defined. 
        scrollPastEnd: 0, // number -> !maxLines: if positive, user can scroll pass the last line and go n * editorHeight more distance 
        fixedWidthGutter: false, // boolean: true if the gutter should be fixed width
        
        // mouseHandler options
        scrollSpeed: 2, // number: the scroll speed index
        dragDelay: 0, // number: the drag delay before drag starts. it's 150ms for mac by default 
        dragEnabled: true, // boolean: enable dragging
        focusTimout: 0, // number: the focus delay before focus starts.
        tooltipFollowsMouse: true, // boolean: true if the gutter tooltip should follow mouse

        // session options
        firstLineNumber: 1, // number: the line number in first line
        overwrite: false, // boolean
        newLineMode: 'auto', // "auto" | "unix" | "windows"
        useWorker: true, // boolean: true if use web worker for loading scripts
        useSoftTabs: true, // boolean: true if we want to use spaces than tabs
        tabSize: 4, // number
        wrap: false, // boolean | string | number: true/'free' means wrap instead of horizontal scroll, false/'off' means horizontal scroll instead of wrap, and number means number of column before wrap. -1 means wrap at print margin
        indentedSoftWrap: true, // boolean
        foldStyle: 'markbegin', // enum: 'manual'/'markbegin'/'markbeginend'.
    });
    jsEditor.setShowPrintMargin(false);
    //htmlEditor.setBehavioursEnabled(false);
}



//Full editor setup
function setupEditor() {
    loadHTMLEditor();
    loadCSSEditor();
    loadJSEditor();
}//Full editor setup



//Ventana de bienvenida & llamado a Configuracion principal
const welcomeWindow = $('#welcomeWindow')
const aceptarWelcomeBtn = $('#aceptarWelcomeBtn')


//Iniciar editor una vez confirmado el mensaje de bienvenida
function ready() {
    setupEditor();    
    setTimeout(autoRun, 3000);


}//End on load do this
function welcome() {
    welcomeWindow.fadeIn(300);}


aceptarWelcomeBtn.click (function() {
    welcomeWindow.fadeOut(300);
    ready()
});//End download show section



//Clear section
const clearBtn = $('#clearBtn')
const clearWindow = $('#clearWindow')
const clearNow = $('#clearNow')
const cancelClear = $('#cancelClear')
const successOnClean = $('#successOnClean')

cancelClear.click (function() {
    clearWindow.fadeOut(300);
});//End clear section

clearBtn.click(function() {
    clearWindow.fadeIn(300);
});

//Clear editor functions
var clearEditor=function(){
    htmlEditor.setValue("");
    cssEditor.setValue("");
    jsEditor.setValue("");
    document.getElementById("iframeUser").src = "about:blank";
    setTimeout(gato, 1000);
    update()
}

//Clear HTML function
var clearHtml=function(){
    htmlEditor.setValue("");
}

//Clear CSS function
var clearCss=function(){
    cssEditor.setValue("");
}

//Clear JS function
var clearJs=function(){
    jsEditor.setValue("");}

//Eliminar ahora
clearNow.click(function() {
    clearEditor()
    clearWindow.fadeOut(300);
    setTimeout(function() { successOnClean.fadeIn(300); }, 300);
    setTimeout(function() { successOnClean.fadeOut(300); }, 3000);
    gato()
    });






























































//Important things that dont have to be here
//<script src="eruda.min.js"></script>
//<script>eruda.init(),eruda.get("console").config.set("displayGetterVal",!0)</script>