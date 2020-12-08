canvas= new fabric.Canvas("myCanvas");

block_w= 30;
block_h= 30;
player_x= 10;
player_y= 10;

var player_object= "";
var block_img= "";

function player_update(){
    fabric.Image.fromURL("iron man.png", function (Img){
        player_object= Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top: player_y ,
            left: player_x
        });
        canvas.add(player_object)
    });
}

function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img){
      block_img= Img;
      block_img.scaleToWidth(block_w);
      block_img.scaleToHeight(block_h);
      block_img.set({
          top: player_y,
          left: player_x
      });
      canvas.add(block_img)
    });
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keyPressed= e.keyCode;
    console.log(keyPressed);
    
    if(e.shiftKey == true && keyPressed== '80'){
        console.log("SHIFT key and P is pressed together")
        block_w += 10;
        block_h += 10;
        document.getElementById("current_w").innerHTML= block_w;
        document.getElementById("current_h").innerHTML= block_h;
    }
    if(e.shiftKey == true && keyPressed== '77'){
        console.log("SHIFT key and M is pressed together")
        block_w -= 10;
        block_h -= 10;
        document.getElementById("current_w").innerHTML= block_w;
        document.getElementById("current_h").innerHTML= block_h;
    }
    if (keyPressed == '70'){
        new_image('ironman_face.png');
        console.log("F");
    }
    if (keyPressed == '66'){
        new_image('spiderman_body.png');
        console.log("B");
    }
    if (keyPressed == '76'){
        new_image('hulk_legs.png');
        console.log("L");
    }
    if (keyPressed == '82'){
        new_image('thor_right_hand.png');
        console.log("R");
    }
    if (keyPressed == '72'){
        new_image('captain_america_left_hand.png');
        console.log("H");
    }
    if(keyPressed == '38'){
        up();
        console.log("UP")
    }
    if(keyPressed == '37'){
        left();
        console.log("LEFT")
    }
    if(keyPressed == '39'){
        right();
        console.log("RIGHT")
    }
    if(keyPressed == '40'){
        down();
        console.log("DOWN")
    }
}