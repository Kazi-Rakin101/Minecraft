var canvas= new fabric.Canvas('myCanvas');
blocks_image_width= 30;
blocks_image_height= 30;

player_x= 10;
player_y= 10;
var player_object= "";
var blocks_image_object= "";

function player_update()
{
    fabric.Image.fromURL("player.png",function(Img)
    {
        player_object= Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    });

}
function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        blocks_image_object=Img;
        blocks_image_object.scaleToWidth(blocks_image_width);
        blocks_image_object.scaleToHeight(blocks_image_height);
        blocks_image_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(blocks_image_object);
    });
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keyPressed=e.keyCode;
    console.log("keypPressed");
    if(e.shiftKey==true &&keyPressed=='80')
    {
        console.log("p and shift pressed togther");
        blocks_image_width=blocks_image_width+10;
        blocks_image_height=blocks_image_height+10;
        document.getElementById("current_width").innerHTML=blocks_image_width;
        document.getElementById("current_height").innerHTML=blocks_image_height;
    }

    if(e.shiftKey && keyPressed=='77')
    {
        console.log("n and shift pressed togther");
        blocks_image_width=blocks_image_width-10;
        blocks_image_height=blocks_image_height-10;
        document.getElementById("current_width").innerHTML=blocks_image_width;
        document.getElementById("current_height").innerHTML=blocks_image_height;
    }

    if(keyPressed=='38')
    {
        up();
        console.log("up");
    }

    if(keyPressed=='40')
    {
        down();
        console.log("down");
    }

    if(keyPressed=='37')
    {
        left();
        console.log("left");
    }

    if(keyPressed=='39')
    {
        right();
        console.log("right");
    }

    if(keyPressed=='73')
    {
        new_image("player.png");
        console.log("new_image");
    }

    if(keyPressed=='87')
    {
        new_image("wall.jpg");
        console.log("w");
    }

    if(keyPressed=='71')
    {
        new_image("groung.png");
        console.log("g");
    }

    if(keyPressed=='76')
    {
        new_image("yellow_wall.jpg");
        console.log("l");
    }

    if(keyPressed=='65')
    {
        new_image("cloud.jpg");
        console.log("a");
    }

    if(keyPressed=='70')
    {
        new_image("dark_ground.png");
        console.log("f");
    }

    if(keyPressed=='80')
    {
        new_image("light_green.png");
        console.log("p");
    }

    if(keyPressed=='81')
    {
        new_image("trunk.jpg");
        console.log("q");
    }

    if(keyPressed=='82')
    {
        new_image("unique.png");
        console.log("r");
    }

    if(keyPressed=='83')
    {
        new_image("roof.jpg");
        console.log("s");
    }
}

function up()
{
    if(player_y >=0)
    {
        player_y=player_y-blocks_image_height;
        console.log("block image height="+blocks_image_height);
        console.log("when up arrow is pressed,X="+player_x+",Y="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function down()
{
    if(player_y <=500)
    {
        player_y=player_y-blocks_image_height;
        console.log("block image height="+blocks_image_height);
        console.log("when down arrow is pressed,X="+player_x+",Y="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function left()
{
    if(player_x >=0)
    {
        player_x=player_x-blocks_image_width;
        console.log("block image width="+blocks_image_width);
        console.log("when left arrow is pressed,X="+player_x+",Y="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function right()
{
    if(player_x <=500)
    {
        player_x=player_x-blocks_image_width;
        console.log("block image width="+blocks_image_width);
        console.log("when right arrow is pressed,X="+player_x+"Y="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}