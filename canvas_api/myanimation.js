
const canvas=document.querySelector(".canvas");
//setting height-width according to userwindow
const width=canvas.width=window.innerWidth;
const height=canvas.height=window.innerHeight;
//reference to canvas element
const ctx=canvas.getContext("2d");

ctx.fillStyle='rgb(255,255,255)';
ctx.fillRect(0,0,width,height);

//createing image element
const image=new Image();
image.src='12-principles-of-animation.jpg';
image.addEventListener('load',animate);

//point initally to middle left corner
ctx.translate(0,0);
let image_crop_control=0;
let image_postion_control=0;
function animate(){
    ctx.fillRect(0,0,width,height);
    ctx.drawImage(image,      //image source
        40+(247*(image_crop_control++)),0  //crop coordinate of image
        ,247,733                  //crop dimensions of image
        ,0+(image_postion_control),height/4    //coordinate where image will  be placed
        ,width/10,height/2         //dimensions of image [placed]
        );

    image_crop_control++;
    if(image_crop_control>5){
        image_crop_control=0;
    }

    image_postion_control+=20;
    if(image_postion_control>width){
        image_postion_control=0;

    }
    setTimeout(()=>requestAnimationFrame(animate),150);    //setting fps

};

