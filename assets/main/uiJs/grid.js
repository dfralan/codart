let grid = GridStack.init({
    float: true,
    animate: true,
    always_show_resize_handle: true,
  });

  let items = [

    {x: 0, y: 0, w: 4, h: 4, content: `
    <div class='editorHeader'>HTML</div>
    <div class='editor' id='htmlEditor'></div>
  `},

    {x: 4, y: 0, w: 4, h: 4, content: `
    <div class='editorHeader'>CSS</div>
    <div class='editor' id='cssEditor'></div>
  `},

    {x: 8, y: 0, w: 4, h: 4, content: `
    <div class='editorHeader'>JS</div>
    <div class='editor' id='jsEditor'></div>
`},
  ];
  
  grid.load(items);
  
  grid.on('added removed change', function(e, items) {
    let str = '';
    items.forEach(function(item) { str += ' (x,y)=' + item.x + ',' + item.y; });
    console.log(e.type + ' ' + items.length + ' items:' + str );
  });


  

