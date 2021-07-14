var canvas = new fabric.Canvas('myCanvas')
ball_x=0;
ball_y=0;
hole_y = 500;
hole_x = 800;

block_image_width = 5;
block_image_height = 5;


function load_img()
{
	fabric.Image.fromURL("golf-h.png", function(Img) {
	golf_object = Img;

	golf_object.scaleToWidth(50);
	golf_object.scaleToHeight(50);
	golf_object.set({
	top:hole_y,
	left:hole_y
	});
	canvas.add(golf_object);

	});
	

}

function new_image(get_image)
{
	fabric.Image.fromURL(get_image, function(Img) {
	ball_object = Img;

	ball_object.scaleToWidth(50);
	ball_object.scaleToHeight(50);
    ball_object.set({
	top:ball_y,
	left:ball_x
	});
	canvas.add(ball_object);

	});
	

}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if((ball_x==hole_y)&&(ball_y==hole_y)){
	canvas.remove(ball_object);
	document.getElementById("read").innerHTML="game is over, you win I lost.";
	document.getElementById("myCanvas").style.backgroundColor="red";
	document.getElementById("read").style.color="green";
	document.getElementById("you").style.display="none";
	}

else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}

		if(keyPressed == '83')
		{
			document.getElementById("read").innerHTML="game started";
			new_image('ball.png'); 
			console.log("game started");
		}

		
}
	
}
function up()
	{
		if(ball_y>=0)
		{
			document.getElementById("read").innerHTML="you press up arrow key";
			ball_y = ball_y - block_image_height;
			console.log("block image height = " + block_image_height);
			console.log("When Up arrow key is pressed, X = " + ball_x +" , Y= "+ball_y);
			canvas.remove(ball_object);
			new_image('ball.png'); 
		}	
	}

	function down()
	{
		if(ball_y<=600)
		{
			document.getElementById("read").innerHTML="you press down arrow key";
			ball_y = ball_y + block_image_height;
			console.log("block image height = " + block_image_height);
			console.log("When Down arrow key is pressed, X = " + ball_x +" , Y= "+ball_y);
			canvas.remove(ball_object);
			new_image('ball.png'); 
		}	
	}

	function left()
	{
		if(ball_x>=0)
		{
			document.getElementById("read").innerHTML="you press left arrow key";
			ball_x = ball_x - block_image_width;
			console.log("block image width = " + block_image_width);
			console.log("When Left arrow key is pressed, X = " + ball_x +" , Y= "+ball_y);
			canvas.remove(ball_object);
			new_image('ball.png'); 
		}	
	}

	function right()
	{
		if(ball_x<=800)
		{
			document.getElementById("read").innerHTML="you press right arrow key";
			ball_x = ball_x + block_image_width;
			console.log("block image width = " + block_image_width);
			console.log("When Right arrow key is pressed, X = " + ball_x +" , Y= "+ball_y);
			canvas.remove(ball_object);
			new_image('ball.png'); 
		}	
	}
	
