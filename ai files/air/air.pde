//variables for swinging rope
float angle;
boolean angleUp = true;

//define images for mountains ,clouds , balloon
PImage img;
PImage img2;
PImage img3;
PImage img4;
PImage img5;
PImage img6;
PImage img7;
PImage img8;

//initial for mountains
float x=-30;
float y=800;
float z=1550;

//variables for snowy ground
float noiseScale = 0.005;
float snowX = 0;

//variable for ballon
float wave = 90;
boolean fly =true;

//variable for snow
float[] a = new float[200];
float[] b = new float[200];
float[] speedSnow = new float[200];

//variables for cloud
float[] c = new float[4];
float[] d = new float[4];
float[] speedCloud = new float[4];
float[] cloudSelect = new float[4];


void setup(){
  
  //canvas size
  size(1000,600);
  
  //background color
  background(#93CED2);

  
  stroke(255);
  strokeWeight(5);
  
  //determine randoms for snow x and y position
  int i = 0;
  while(i < 200) { 
    //place randoms into an array to store for later
    a[i] = random(0, width);
    b[i] = random(0, height);
    speedSnow[i] = random(1, 5);
    i = i + 1;
  }
  
  //determine randoms for cloud x and y position
  int p = 0;
  while(p < 4) { 
    
    //place randoms into an array to store for later
    c[p] = random(-200, 1200);
    d[p] = random(-20, 150);
    speedCloud[p] = random(.2, 1.2);
    cloudSelect[p] = random(0, 10);
    p = p + 1;
  }
  
  //assign images
  img = loadImage("mountain.png");
  img2 = loadImage("mountain.png");
  img3 = loadImage("mountain.png");
  img4 = loadImage("baloon.png");
  img5 = loadImage("cloud1.png");
  img6 = loadImage("img6.png");
  img7 = loadImage("fire.png");
  img8 = loadImage("rope.png");

  
}

void draw(){
  
  //set formula for mountains to move
   x= x-1;
   y= y-1;
   z= z-1;
   

   
   //set baloon speed
   if (fly == true){
   wave = wave - .5;
   }
   else
   {
     wave = wave + .5;
   }
   
   //set ballon direction
   if ( wave == 15)
   {
     fly = false;
   }
   if (wave ==90)
   {
     fly =true;
   }  
   
   //resets for mountains
   if(x<-1000){
     x=1000;
   }
   if(y<-1000){
     y=1000;
   }
   if(z<-1000){
     z=1000;
   }
   
    
      //draw elements
     background(#93CED2);
     
    //access cloud array and draw 3 random clouds
  int p = 0;
  while(p < 4) {
   
    //randomly select which cloud to display
    if ( cloudSelect[p] > 5)
    {
      image(img5, c[p], d[p],150, 90); 
    }
    if ( cloudSelect[p] < 5)
    {
      image(img6, c[p], d[p],150, 90); 
    }
    
    c[p] = c[p] - speedCloud[p];
    if(c[p] < -160) {
      c[p] = width;
    }
    p = p + 1;
  }
  
  //draw mountains
  if( fly ==true){
    image(img7, 255, 118+wave,8,10); 
  }
     image(img, x, 200,1000,400);
     image(img2, y, 200,1000,400);
     image(img3, z, 200,1000,400);
     image(img4, 200, wave,120,150);
     
      
     
     //draw ground using perlin noise
     snowX = snowX +1;
     for (int h=0; h < width; h++) {
    float noiseVal = noise((snowX+h)*noiseScale, 590*noiseScale);
    stroke(#ffffff);
    line(h, 540+noiseVal*80, h, height);
  }
     
     //access snow aray and draw 200 flakes
     int i = 0;
  while(i < 200) {
    point(a[i], b[i]);
  
    a[i] = a[i] - speedSnow[i];
    b[i] = b[i] + 1;
    if(b[i] > 600){
      b[i] = 0;
    }
    if(a[i] < -200) {
      a[i] = 1200;
    }
    i = i + 1;;
  }
  
  //set back and forth for rope
  if (angleUp == true){
  angle = angle + .001;
  }
  if (angleUp == false){
  angle = angle - .001;
  }
  if (angle >= .05)
  {
    angleUp = false;
  }
  if (angle <= -.04)
  {
    angleUp = true;
  }
  //set rotate for rope
  translate(198, wave);
  rotate(angle);
   image(img8, -10,55,150,150);
}