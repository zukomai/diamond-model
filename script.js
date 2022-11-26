/** 
* @type HTMLCanvasElement
*/

window.onload = canvas();

function canvas() {
    var myCanvas = document.querySelector('canvas');
    if (myCanvas && myCanvas.getContext('2d')) {
        var context = myCanvas.getContext('2d');
        var img = document.getElementById('img1');
        context.drawImage('img', 150, 150)
    }
}