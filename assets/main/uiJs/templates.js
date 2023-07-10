animationHTMLValue =
`
<center class="peperino">
    <div id="load">
    <center class="logoLoad">
  <svg class="logo" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 50 50" version="1.1">
    <g class="logo__mainGroup">
        
      <path class="logo__square" fill="none" stroke-width="1" d="M0,0 0,50 50,50 50,0z"/>

      <g class="logo__colorGroup">
        <path class="logo__stroke" fill="none" stroke-width="1" d="M0,00 0,50 50,50 50,0 20,0 20,30 30,30 30,10 40,10 40,40 10,40 10,0 -0.5,0" />
        <path class="logo__fill" fill="none" stroke-width="11" d="M5,-0.5 5,45 45,45 45,5 25,5 25,30.5 " />
      </g>
    </g>
  </svg>
</center>
`
animationCSSValue =
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

standarHTMLValue =
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

standarCSSValue =
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

standarJSValue = `console.log("Hola perro")`