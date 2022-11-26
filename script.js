/** 
* @type HTMLCanvasElement
*/

const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

const diamondImg = new Image();
diamondImg.src = 'assets/diamond-model.png';
diamondImg.onload = function() {
    ctx.drawImage(diamondImg, 200, 150, 300, 350);
}
