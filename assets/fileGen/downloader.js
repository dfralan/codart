

//Download show section
const exportBtn = $('#exportBtn')
const exportWindow = $('#exportWindow')
const downloadBtn = $('#downloadBtn')
const cancelExport = $('#cancelExport')
const successOnDownload = $('#successOnDownload')



exportBtn.click (function() {
    exportWindow.fadeIn(300);    
});//End download show section


cancelExport.click (function() {
    exportWindow.fadeOut(300);    
});//End download show section



var downloadNow=function(){
    recolectoScripts();
    var zip = new JSZip();


    var html_doc='<!DOCTYPE html>'
    + '\n' + '<html lang="en">'
    + '\n\t' + '<head>'
    + '\n\t\t' + '<meta charset="UTF-8">'
    + '\n\t\t' + '<meta name="viewport" content="width=device-width, initial-scale=1.0">'
    + '\n\t\t' + '<meta http-equiv="X-UA-Compatible" content="ie=edge">'
    + '\n\t\t' + '<link rel="stylesheet" href="style.css">'
    + recolectoScripts()
    + '\n\t' + '</head>'
    + '\n\t' + '<body>\n\t'+htmlEditor.getValue()
    + '\n' + '<script src="script.js"></script>'
    + '\n\t' + '</body>'
    + '\n' + '</html>';


    zip.file("index.html",html_doc);
    zip.file("style.css",cssEditor.getValue());
    zip.file("script.js",jsEditor.getValue());
    jQuery("#downloadBtn").on("click", function () {
    zip.generateAsync({type:"blob"}).then(function (blob) {
        saveAs(blob, "web.zip");
        exportWindow.fadeOut(300);
        setTimeout(function() { successOnDownload.fadeIn(300); }, 300);
        setTimeout(function() { successOnDownload.fadeOut(300); }, 3000);
        }, function (err) {
            jQuery("#downloadBtn").text(err);
            });
    });
}
downloadBtn.click (function() {
    downloadNow();    

});//End download show section