let html = document.getElementById("HTML-code");
    let css = document.getElementById("CSS-code");
    let js = document.getElementById("JS-code");
    let output = document.getElementById("output");
function run(){
    
    output.contentDocument.body.innerHTML = html.value + "<style>" + css.value + "</style>";
    /* since css is not text like html it is a styling */
    output.contentWindow.eval(js.value)/* evaluate what is written in the js */
}