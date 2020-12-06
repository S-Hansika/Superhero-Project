canvas= new fabric.canvas("myCanvas");

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