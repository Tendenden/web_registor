
var objary=[];
var objcount = 0;

var target = false;
var movflag = false;


function createObj(type,x,y,w,h,r) {
	var obj= new Object();
	obj.type = type;
	obj.x = x;
	obj.y = y;
	obj.w = w;
	obj.h = h;
	obj.r = r;
	return obj;
}
// function createObj(x,y,w,h,r) {
// 	var obj = createGraphics(w,h);
// 	obj.rect(x,y,w,h,r);
// 	obj.x = x;
// 	obj.y = y;
// 	obj.w = w;
// 	obj.h = h;
// 	obj.r = r;
// 	return obj;
// }


function setup() {                          // **change** void setup() to function setup()
  createCanvas(640, 360);                   // **change** size() to createCanvas()
  strokeWeight(9);                          // strokeWeight() is the same
  stroke(255, 100);                         // stroke() is the same
}

//////////////////////////////////////////////////////////////////////////
//		MAIN FUNCTION      																								//
//////////////////////////////////////////////////////////////////////////
function draw() {                           // **change** void draw() to function draw()
  background(150);                            
  stroke(255, 100);
  //レンダリング
  for (var i=0;i < objary.length;i++) {
  	if(objary[i].type =="rect")
  		rect(objary[i].x,objary[i].y,objary[i].w,objary[i].h,objary[i].r);
  }
  target = checkMouseOnObject();
}
///////////////////////////
//		MAIN FUNCTION      //
///////////////////////////

  //rect(30, 20, 55, 55, 20);
function mouseClicked() {
	if(checkMouseOnObject() == -1) {
		objary[objcount] = createObj("rect",30,20,55,55,20);
		objcount++;
		console.log("click"+objcount);
	}
}


function mouseDragged() {
	if(target != -1) {
		objary[target] = createObj(objary[target].type,objary[target].x+mouseX-pmouseX,objary[target].y+mouseY-pmouseY,
			objary[target].w,objary[target].h,objary[target].r);
	}
}

function checkMouseOnObject() {

	for (var i=0;i < objary.length;i++) {
  	if(objary[i].x<= mouseX && mouseX <= objary[i].x+objary[i].w
  		&& objary[i].y <= mouseY && mouseY <= objary[i].y+objary[i].h) {
  		cursor(MOVE);
  		return i;
  	}
  }
  cursor(ARROW);
  return -1;
  console.log("-1")
}

function keyTyped() {
  if (key === 'q') {
    remove();
  }
}







