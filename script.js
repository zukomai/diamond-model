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

// Draw text
const item1 = document.getElementById('item1');

function imageText() {
    if (item1.value == "") {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    else if (item1.value != "") {
    //item1.value = ''
    ctx.fillStyle="black";
    ctx.textAlign="center";
    ctx.fillText(item1.value, 100, 100);
    }

}