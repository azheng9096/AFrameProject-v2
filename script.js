class Rain{
  constructor(x, y, z){
    this.x = x;
    this.y = y;
    this.z = z;

    this.y_coord = y;

    this.obj = document.createElement("a-box");
    this.obj.setAttribute("position", {x:this.x, y:this.y, z:this.z});
    this.obj.setAttribute("width", 0.02);
    this.obj.setAttribute("depth", 0.02);
    this.obj.setAttribute("height", 0.5);

    this.obj.setAttribute("color", "white");
  }

  fall(){
    this.y_coord -= 1.5;
    this.obj.setAttribute("position", {x:this.x, y:this.y_coord, z:this.z});

    if(this.y_coord <= 0){
      this.obj.setAttribute("position", {x:this.x, y:this.y, z:this.z});
      this.y_coord = this.y;
    }

  }

}


class Firefly{
  constructor(x, y, z){
    this.x = x;
    this.y = y;
    this.z = z;

    this.obj = document.createElement("a-entity");
    
    let firefly = document.createElement("a-sphere");
    firefly.setAttribute("position", {x:0, y:2, z:0});
    firefly.setAttribute("radius", 0.1);
    firefly.setAttribute("color", "gold");

    this.obj.appendChild(firefly);


    //let light_T = document.createElement("a-entity");
    this.light_T = document.createElement("a-entity");
    this.light_T.setAttribute("light", {"intensity": 2, "distance": 2, "type":"point", "color":"#ffff00", "castShadow":"true"});
    this.light_T.setAttribute("position", {x:0, y:2.5, z:0});

    this.obj.appendChild(this.light_T);

    //let light_B = document.createElement("a-entity");
    this.light_B = document.createElement("a-entity");
    this.light_B.setAttribute("light", {"intensity": 2, "distance": 2, "type":"point", "color":"#ffff00", "castShadow":"true"});
    this.light_B.setAttribute("position", {x:0, y:1.5, z:0});

    this.obj.appendChild(this.light_B);



    this.obj.setAttribute("position", {x:this.x, y:this.y, z:this.z});



    this.clicked=false;
    let fireflyClass = this;
    this.lightIntensity = 0;

    this.obj.addEventListener("click",function(obj){
      fireflyClass.clicked=true;
    });

  }

  move(){
    let x_random = (Math.random() * (0.05 - 0.0200) + 0.0200).toFixed(4);
    x_random*=Math.floor(Math.random()*2) == 1 ? 1 : -1;
    let newx = parseFloat(this.x)+parseFloat(x_random);

    let y_random = (Math.random() * (0.05 - 0.0200) + 0.0200).toFixed(4);
    y_random*=Math.floor(Math.random()*2) == 1 ? 1 : -1;
    let newy = parseFloat(this.y)+parseFloat(y_random);


    let z_random = (Math.random() * (0.05 - 0.0200) + 0.0200).toFixed(4);
    z_random*=Math.floor(Math.random()*2) == 1 ? 1 : -1;
    let newz = parseFloat(this.z)+parseFloat(z_random);


    this.obj.setAttribute("position", {x:newx, y:newy, z:newz});
    
  }

  lightUpOnClick(){
    if(this.clicked){

      if(this.lightIntensity<2)
        this.lightIntensity+=0.05;

      this.light_T.setAttribute("light", {"intensity": this.lightIntensity});
      this.light_B.setAttribute("light", {"intensity": this.lightIntensity});
      this.move();
    }else{
      this.light_T.setAttribute("light", {"intensity": 0});
      this.light_B.setAttribute("light", {"intensity": 0});
    }
  }
  
}


class Branch{
  constructor(x, y, z, r_x, r_y, r_z){
    this.x = x;
    this.y = y;
    this.z = z;

    this.r_x = r_x;
    this.r_y = r_y;
    this.r_z = r_z;

    this.obj = document.createElement("a-entity");
    
    let b_1 = document.createElement("a-cone");
    b_1.setAttribute("position", {x: 1.85, y:5.187, z:0.897});
    b_1.setAttribute("rotation", {x: 0, y:0, z: 47.9});
    b_1.setAttribute("geometry", {"height":3, "radiusBottom":0.45, "radiusTop":0.1, "segmentsHeight":5, "segmentsRadial":5});
    b_1.setAttribute("color", "#552b00");

    this.obj.appendChild(b_1);


    let b_2 = document.createElement("a-cone");
    b_2.setAttribute("position", {x: 0.809, y:5.102, z:0.895});
    b_2.setAttribute("rotation", {x: 0, y:0, z: 71.62});
    b_2.setAttribute("geometry", {"height":2.5, "radiusBottom":0.2, "radiusTop":0.15, "segmentsHeight":5, "segmentsRadial":5});
    b_2.setAttribute("color", "#552b00");

    this.obj.appendChild(b_2);
    

    let b_3 = document.createElement("a-cone");
    b_3.setAttribute("position", {x: -1.297, y:5.398, z:1.134});
    b_3.setAttribute("rotation", {x: 12.55, y:-165.24, z: -94.595});
    b_3.setAttribute("geometry", {"height":2, "radiusBottom":0.15, "radiusTop":0.05, "segmentsHeight":5, "segmentsRadial":5});
    b_3.setAttribute("color", "#552b00");

    this.obj.appendChild(b_3);


    let b_4 = document.createElement("a-cone");
    b_4.setAttribute("position", {x: 1.121, y:6.374, z:1.706});
    b_4.setAttribute("rotation", {x: 0, y:-122.212, z: -52.769});
    b_4.setAttribute("geometry", {"height":2.5, "radiusBottom":0.25, "radiusTop":0.15, "segmentsHeight":5, "segmentsRadial":5});
    b_4.setAttribute("color", "#552b00");

    this.obj.appendChild(b_4);


    let b_5 = document.createElement("a-cone");
    b_5.setAttribute("position", {x: 0.671, y:7.536, z:3.034});
    b_5.setAttribute("rotation", {x: 0, y:-81.47, z: -49.96});
    b_5.setAttribute("geometry", {"height":1.5, "radiusBottom":0.15, "radiusTop":0.05, "segmentsHeight":5, "segmentsRadial":5});
    b_5.setAttribute("color", "#552b00");

    this.obj.appendChild(b_5);


    let b_6 = document.createElement("a-cone");
    b_6.setAttribute("position", {x: 1.867, y:5.274, z:0.897});
    b_6.setAttribute("rotation", {x: 0, y:0, z: 30.31});
    b_6.setAttribute("geometry", {"height":3, "radiusBottom":0.3, "radiusTop":0.2, "segmentsHeight":5, "segmentsRadial":5});
    b_6.setAttribute("color", "#552b00");

    this.obj.appendChild(b_6);

    let b_7 = document.createElement("a-cone");
    b_7.setAttribute("position", {x: 0.458, y:7.144, z:0.895});
    b_7.setAttribute("rotation", {x: 0, y:0, z: 46.41});
    b_7.setAttribute("geometry", {"height":2, "radiusBottom":0.2, "radiusTop":0.15, "segmentsHeight":5, "segmentsRadial":5});
    b_7.setAttribute("color", "#552b00");

    this.obj.appendChild(b_7);


    let b_8 = document.createElement("a-cone");
    b_8.setAttribute("position", {x: -1.102, y:8.256, z:0.919});
    b_8.setAttribute("rotation", {x: 7.85, y:-171.83, z: -61.99});
    b_8.setAttribute("geometry", {"height":2, "radiusBottom":0.15, "radiusTop":0.05, "segmentsHeight":5, "segmentsRadial":5});
    b_8.setAttribute("color", "#552b00");

    this.obj.appendChild(b_8);


    let b_9 = document.createElement("a-cone");
    b_9.setAttribute("position", {x: -0.317, y:7.059, z: 0.385});
    b_9.setAttribute("rotation", {x: 10.6, y:144.67, z: -87.43});
    b_9.setAttribute("geometry", {"height":2, "radiusBottom":0.15, "radiusTop":0.05, "segmentsHeight":5, "segmentsRadial":5});
    b_9.setAttribute("color", "#552b00");

    this.obj.appendChild(b_9);

    let b_10 = document.createElement("a-cone");
    b_10.setAttribute("position", {x: 0.206, y:7.364, z: 2.039});
    b_10.setAttribute("rotation", {x: 0, y:150.46, z: -49.96});
    b_10.setAttribute("geometry", {"height":1.5, "radiusBottom":0.15, "radiusTop":0.05, "segmentsHeight":5, "segmentsRadial":5});
    b_10.setAttribute("color", "#552b00");

    this.obj.appendChild(b_10);

    this.obj.setAttribute("position", {x:this.x, y:this.y, z:this.z});
    this.obj.setAttribute("rotation", {x:this.r_x, y:this.r_y, z:this.r_z});
  }
  
}


class Tree{
  constructor(x, z, s, lc){
    this.x = x;
    this.z = z;
    this.s = s;
    this.lc = lc;

    this.obj = document.createElement("a-entity");

    let trunk = document.createElement("a-cone");
    trunk.setAttribute("position", {x: 3, y:2.5, z:0.97});
    trunk.setAttribute("geometry", {"segmentsHeight":5, "radiusTop":0.5, "height":5, "segmentsRadial": 5});
    trunk.setAttribute("color", "#552b00");

    this.obj.appendChild(trunk);

    let branch1 = new Branch(0, 0, 0, 0, 0, 0);
    this.obj.appendChild(branch1.obj);

    let branch2 = new Branch(6.267, 0.801, 0.46, 23.2, -123.76, 8.65);
    this.obj.appendChild(branch2.obj);

    let branch3 = new Branch(2.8, 0.572, 4.65, 8.02, 108, -5.33);
    this.obj.appendChild(branch3.obj);


    let l_1 = document.createElement("a-dodecahedron");
    l_1.setAttribute("radius", 2);
    l_1.setAttribute("position", {x: 5, y:9, z:4});
    l_1.setAttribute("color", this.lc);
    this.obj.appendChild(l_1);

    let l_2 = document.createElement("a-dodecahedron");
    l_2.setAttribute("radius", 2);
    l_2.setAttribute("position", {x: 4.344, y:6.635, z:4.542});
    l_2.setAttribute("color", this.lc);
    this.obj.appendChild(l_2);

    let l_3 = document.createElement("a-dodecahedron");
    l_3.setAttribute("radius", 2.5);
    l_3.setAttribute("position", {x: -2.314, y:8.358, z:1.777});
    l_3.setAttribute("color", this.lc);
    this.obj.appendChild(l_3);

    let l_4 = document.createElement("a-dodecahedron");
    l_4.setAttribute("radius", 2.5);
    l_4.setAttribute("position", {x: 3.536, y:7.744, z:-3.545});
    l_4.setAttribute("color", this.lc);
    this.obj.appendChild(l_4);
    
    let l_5 = document.createElement("a-dodecahedron");
    l_5.setAttribute("radius", 2);
    l_5.setAttribute("position", {x: 0.443, y:7.744, z:-4.781});
    l_5.setAttribute("color", this.lc);
    this.obj.appendChild(l_5);

    let l_6 = document.createElement("a-dodecahedron");
    l_6.setAttribute("radius", 2);
    l_6.setAttribute("position", {x: 5.728, y:7.744, z:1.815});
    l_6.setAttribute("color", this.lc);
    this.obj.appendChild(l_6);

    let l_7 = document.createElement("a-dodecahedron");
    l_7.setAttribute("radius", 1.5);
    l_7.setAttribute("position", {x: 5.728, y:5.695, z:-3.551});
    l_7.setAttribute("color", this.lc);
    this.obj.appendChild(l_7);

    let l_8 = document.createElement("a-dodecahedron");
    l_8.setAttribute("radius", 3.5);
    l_8.setAttribute("position", {x: 1.195, y:8.36, z:2.553});
    l_8.setAttribute("color", this.lc);
    this.obj.appendChild(l_8);

    let l_9 = document.createElement("a-dodecahedron");
    l_9.setAttribute("radius", 2.5);
    l_9.setAttribute("position", {x: 6.412, y:7.038, z:-1.036});
    l_9.setAttribute("color", this.lc);
    this.obj.appendChild(l_9);

    let l_10 = document.createElement("a-dodecahedron");
    l_10.setAttribute("radius", 3);
    l_10.setAttribute("position", {x: -1.723, y:6.971, z:-1.542});
    l_10.setAttribute("color", this.lc);
    this.obj.appendChild(l_10);

    let l_11 = document.createElement("a-dodecahedron");
    l_11.setAttribute("radius", 3.5);
    l_11.setAttribute("position", {x: 3.202, y:10.456, z:-0.982});
    l_11.setAttribute("color", this.lc);
    this.obj.appendChild(l_11);

    let l_12 = document.createElement("a-dodecahedron");
    l_12.setAttribute("radius", 2);
    l_12.setAttribute("position", {x: 0.443, y:7.744, z:-2.497});
    l_12.setAttribute("color", this.lc);
    this.obj.appendChild(l_12);

    let l_13 = document.createElement("a-dodecahedron");
    l_13.setAttribute("radius", 2);
    l_13.setAttribute("position", {x: -2.211, y:5.638, z:0.687});
    l_13.setAttribute("color", this.lc);
    this.obj.appendChild(l_13);

    this.obj.setAttribute("position", {x:this.x, y:0, z:this.z});    
    this.obj.setAttribute("scale", {x:this.s, y:this.s, z:this.s});



    let treeClass = this;
    this.h = 16;
    this.l = 70;

    this.changeC = false;

    this.leavesArray = [l_1,l_2,l_3,l_4,l_5,l_6,l_7,l_8,l_9,l_10,l_11,l_12,l_13];

    this.shakeTree = false;


    this.obj.addEventListener("mouseenter", function(obj){
      treeClass.changeC = true;
    });
    this.obj.addEventListener("mouseleave", function(obj){
      treeClass.changeC = false;
    });

    this.obj.addEventListener("mousedown", function(obj){
      treeClass.shakeTree = true;
    });
    this.obj.addEventListener("mouseup", function(obj){
      treeClass.shakeTree = false;
    });


    this.leavesFall = [];
    this.leavesStick = [];

  }

  changeColor(){
    if(this.changeC){
      if(this.h!=360){
        this.h++;
      }else{
        this.h=0;
      }
    }

    this.lc = `hsl(${this.h},100%,${this.l}%)`;
    for (let leaf of this.leavesArray){
      leaf.setAttribute("color", this.lc);
    }

    for (let leaf of this.leavesFall){
      leaf.obj.setAttribute("color", this.lc);
    }

    for(let leaf of this.leavesStick){
      if(leaf.obj.object3D.position.y!=0.2){
        leaf.obj.setAttribute("color", this.lc);
      }
      //let positionData = leaf.obj.getAttribute("position")
      //console.log(leaf.obj.object3D.position.y);
    }
    
  }

  appendLeaves(r_l, r_u, y_l, y_u, dx, dz){
    //fall
    for(var i=0; i<200; i++){
      //let y = randomFloat(30, 60);
      let y = randomFloat(y_l, y_u);
      
      //let r = randomFloat(0, 50);
      let r = randomFloat(r_l, r_u);
      let angle = random(0, 360)*Math.PI/180;

      let x = r*Math.cos(angle);
      let z = r*Math.sin(angle);

      //let leaf = new Leaf(x, y, -220+z, "#FF926B");
      let leaf = new Leaf(x+dx, y, z+dz, this.lc);
      this.leavesFall.push(leaf);
      
      scene.append(leaf.obj);
    }

    //stick
    for(var i=0; i<50; i++){
      let y = randomFloat(y_l, y_u);
      
      let r = randomFloat(r_l, r_u);
      let angle = random(0, 360)*Math.PI/180;

      let x = r*Math.cos(angle);
      let z = r*Math.sin(angle);

      let leaf = new Leaf(x+dx, y, z+dz, this.lc);
      this.leavesStick.push(leaf);

      scene.append(leaf.obj);
    }


  }


  appendedLeavesFall(){
    for(let leaf of this.leavesFall){
      leaf.fall();
    }
    for(let leaf of this.leavesStick){
      leaf.fallNStick();
    }

  }


  appendOnlyStickLeaves(r_l, r_u, y_l, y_u, dx, dz, amt){
    //stick
    for(var i=0; i<amt; i++){
      let y = randomFloat(y_l, y_u);
      
      let r = randomFloat(r_l, r_u);
      let angle = random(0, 360)*Math.PI/180;

      let x = r*Math.cos(angle);
      let z = r*Math.sin(angle);

      let leaf = new Leaf(x+dx, y, z+dz, this.lc);
      this.leavesStick.push(leaf);

      scene.append(leaf.obj);
    }
  }


  shake(){
    if(this.shakeTree){
      let dx = this.obj.object3D.position.x;
      let dz = this.obj.object3D.position.z;
      this.appendOnlyStickLeaves(0, 5, 7, 20, dx+4, dz, 1);
    }
  }
  
}


/*class KFish{
  constructor(x, y, z){
    this.x = x;
    this.y = y;
    this.z = z;

    this.r_z = random(-50, 50);
    this.r_y = random(0,180);



    this.rdm_h = random(0,40);
    this.rdm_l = random(60,100);




    this.obj = document.createElement("a-entity");

    let body = document.createElement("a-icosahedron");
    body.setAttribute("material",{"src":"https://i.ibb.co/fd2hGpD/koi2.jpg","repeat":"3 2"});
    body.setAttribute("radius", 0.5);

    //body.setAttribute("position", {x: 0.8+this.x, y: 0.5+this.y, z:this.z});
    body.setAttribute("position", {x: 0.8, y: 0.5, z:0});

    body.setAttribute("scale", {x: 3.685, y:1.151, z: 1});
    body.setAttribute("detail", 1);

    //scene.append(body);
    this.obj.appendChild(body);


    let fin_F = document.createElement("a-dodecahedron");
    fin_F.setAttribute("color", "white");
    fin_F.setAttribute("radius", 0.5);

    //fin_F.setAttribute("position", {x: 0.624+this.x, y: 0.2+this.y, z: 0.413+this.z});
    fin_F.setAttribute("position", {x: 0.624, y: 0.2, z: 0.413});

    fin_F.setAttribute("rotation", {x:47.326, y:165.24, z:-128.8});
    fin_F.setAttribute("scale", {x: 1.154, y:0.617, z: 0.187});
    
    //scene.append(fin_F);
    this.obj.appendChild(fin_F);


    let fin_B = document.createElement("a-dodecahedron");
    fin_B.setAttribute("color", "white");
    fin_B.setAttribute("radius", 0.5);

    //fin_B.setAttribute("position", {x: 0.629+this.x, y: 0.318+this.y, z: -0.376+this.z});
    fin_B.setAttribute("position", {x: 0.629, y: 0.318, z: -0.376});

    fin_B.setAttribute("rotation", {x:50.4775, y:9.855, z:100.725});
    fin_B.setAttribute("scale", {x: 1.224, y:0.676, z: 0.167});
    
    //scene.append(fin_B);
    this.obj.appendChild(fin_B);


    let fin_T = document.createElement("a-dodecahedron");
    fin_T.setAttribute("color", "white");
    fin_T.setAttribute("radius", 0.5);

    //fin_T.setAttribute("position", {x: 0.947+this.x, y: 1.055+this.y, z: 0.032+this.z});
    fin_T.setAttribute("position", {x: 0.947, y: 1.055, z: 0.032})

    fin_T.setAttribute("rotation", {x:-10.943, y:178.476, z:178.19});
    fin_T.setAttribute("scale", {x: 1.779, y:0.617, z: 0.111});
    
    //scene.append(fin_T);
    this.obj.appendChild(fin_T);


    let tail_T = document.createElement("a-dodecahedron");
    tail_T.setAttribute("color", "white");
    tail_T.setAttribute("radius", 0.5);

    //tail_T.setAttribute("position", {x: 2.789+this.x, y: 0.881+this.y, z: -0.024+this.z});
    tail_T.setAttribute("position", {x: 2.789, y: 0.881, z: -0.024});

    tail_T.setAttribute("rotation", {x:0, y:0, z:35.695});
    tail_T.setAttribute("scale", {x: 1.26, y:0.819, z: 0.301});
    
    //scene.append(tail_T);
    this.obj.appendChild(tail_T);


    let tail_B = document.createElement("a-dodecahedron");
    tail_B.setAttribute("color", "white");
    tail_B.setAttribute("radius", 0.5);

    //tail_B.setAttribute("position", {x: 2.487+this.x, y: 0.294+this.y, z: -0.024+this.z});
    tail_B.setAttribute("position", {x: 2.487, y: 0.294, z: -0.024});

    tail_B.setAttribute("rotation", {x:-18, y:180, z:-144.328});
    tail_B.setAttribute("scale", {x: 1.061, y:0.557, z: 0.146});
    
    //scene.append(tail_B);
    this.obj.appendChild(tail_B);



    let eye_T = document.createElement("a-sphere");
    eye_T.setAttribute("color", "black");
    eye_T.setAttribute("radius", 0.05);

    //eye_T.setAttribute("position", {x: -0.393+this.x, y: 0.6+this.y, z: 0.315+this.z});
    eye_T.setAttribute("position", {x: -0.393, y: 0.6, z: 0.315});
    
    //scene.append(eye_T);
    this.obj.appendChild(eye_T);


    let eye_B = document.createElement("a-sphere");
    eye_B.setAttribute("color", "black");
    eye_B.setAttribute("radius", 0.05);

    //eye_B.setAttribute("position", {x: -0.393+this.x, y: 0.6+this.y, z: 0.311+this.z});
    eye_B.setAttribute("position", {x: -0.393, y: 0.6, z: -0.311});
    
    //scene.append(eye_B);
    this.obj.appendChild(eye_B);


    this.obj.setAttribute("position", {x:this.x, y:this.y, z:this.z});
    this.obj.setAttribute("rotation", {x:0, y:this.r_y, z:this.r_z});

    //scene.append(this.obj);
    this.dx=0
    if(this.r_y>=0 && this.r_y <90){
      this.dx=-0.05
    }else if(this.r_y>90 && this.r_y <= 180){
      this.dx=0.05
    }

    this.dz=0
    if(this.r_y>0 && this.r_y <180){
      this.dz=0.05
    }
    
    this.dy = 0;
    if(this.r_z<0 && this.r_z >=-50){
      this.dy=0.05
    }else if(this.r_z>0 && this.r_z<=50){
      this.dy=-0.05
    }


    this.changePartsColorArray = [body, fin_F, fin_B, fin_T, tail_T, tail_B];
    for (let part of this.changePartsColorArray){
      part.setAttribute("color", `hsl(${this.rdm_h},100%,${this.rdm_l}%)`);
    }

    this.white=false;
    this.red=false;

  }

  changeColor(cond){

    if(cond){


      if(this.rdm_h==40){
        this.red=false;
      }else if(this.rdm_h==0){
        this.red=true;
      }

      if(this.red){
        this.rdm_h++;
      }else{
        this.rdm_h--;
      }




    }


    for (let part of this.changePartsColorArray){
      part.setAttribute("color", `hsl(${this.rdm_h},100%,${this.rdm_l}%)`);
    }
  }

  moveF(){
    let x_random = randomFloat(-1, 1);
    let y_random = randomFloat(-1, 1);
    let z_random = randomFloat(-1, 1);

    let rz_random = random(-90, 90);
    let ry_random = random(0, 360);

    this.obj.setAttribute("position", {x:this.x+x_random, y:this.y+y_random, z:this.z+z_random});
    this.obj.setAttribute("rotation", {x:0, y:ry_random, z:rz_random});

  }

  move(lx, ux, ly, uy, lz, uz){
    
    if(this.x<=lx){
      this.dx = 0.1;
      this.r_y = random(90, 270);
    }else if(this.x >= ux){
      this.dx = -0.1;
      this.r_y = random(270, 360);
    }

    if(this.z<=lz){
      this.dz = 0.1;
      this.r_y = random(0, 180);
    }else if(this.z >= uz){
      this.dz = -0.1;
      this.r_y = random(180, 360);
    }

    if(this.y<=ly){
      this.dy = 0.1;
      this.r_z = random(-50, 0);
    }else if(this.y >= uy){
      this.dy = -0.1;
      this.r_z = random(0, 50);
    }



    if(this.r_y>=0 && this.r_y <90){
      this.dx=-0.05
    }else if(this.r_y>90 && this.r_y <= 180){
      this.dx=0.05
    }else{
      this.dx=0
    }

    if(this.r_y>0 && this.r_y <180){
      this.dz=0.05
    }else if(this.r_y>180 && this.r_y<360){
      this.dz=-0.05
    }else{
      this.dz=0
    }

    if(this.r_z<0 && this.r_z >=-50){
      this.dy=0.05
    }else if(this.r_z>0 && this.r_z<=50){
      this.dy=-0.05
    }else{
      this.dy=0
    }


    this.x+=this.dx;
    this.y+=this.dy;
    this.z+=this.dz;
    this.obj.setAttribute("position", {x:this.x, y:this.y, z:this.z});
    this.obj.setAttribute("rotation", {x:0, y:this.r_y, z:this.r_z});
  }

}*/

class KFish{
  constructor(x, y, z){
    this.x = x;
    this.y = y;
    this.z = z;

    this.r_z = random(-50, 50);
    this.r_y = random(0,180);



    this.rdm_h = random(0,40);
    this.rdm_l = random(60,100);




    this.obj = document.createElement("a-entity");

    this.fish = document.createElement("a-gltf-model");
    this.fish.setAttribute("src", "#kFish");
    this.fish.setAttribute("position", {x:0, y:0.1, z:0});
    this.fish.setAttribute("scale", {x:0.03, y:0.03, z:0.03});
    this.fish.setAttribute("rotation", {x:0, y:180, z:0})
    this.fish.setAttribute("animation-mixer",{"clip":"mill"});

    this.obj.appendChild(this.fish);
    

    this.obj.setAttribute("position", {x:this.x, y:this.y, z:this.z});
    this.obj.setAttribute("rotation", {x:0, y:this.r_y, z:this.r_z});

    //scene.append(this.obj);
    this.dx=0
    if(this.r_y>=0 && this.r_y <90){
      this.dx=-0.05
    }else if(this.r_y>90 && this.r_y <= 180){
      this.dx=0.05
    }

    this.dz=0
    if(this.r_y>0 && this.r_y <180){
      this.dz=0.05
    }
    
    this.dy = 0;
    if(this.r_z<0 && this.r_z >=-50){
      this.dy=0.05
    }else if(this.r_z>0 && this.r_z<=50){
      this.dy=-0.05
    }



  }


  moveF(){
    let x_random = randomFloat(-1, 1);
    let y_random = randomFloat(-1, 1);
    let z_random = randomFloat(-1, 1);

    let rz_random = random(-90, 90);
    let ry_random = random(0, 360);

    this.obj.setAttribute("position", {x:this.x+x_random, y:this.y+y_random, z:this.z+z_random});
    this.obj.setAttribute("rotation", {x:0, y:ry_random, z:rz_random});

  }

  move(lx, ux, ly, uy, lz, uz, cond){

    if(cond){
    
      if(this.x<=lx){
        this.dx = 0.1;
        this.r_y = random(90, 270);
      }else if(this.x >= ux){
        this.dx = -0.1;
        this.r_y = random(270, 360);
      }

      if(this.z<=lz){
        this.dz = 0.1;
        this.r_y = random(0, 180);
      }else if(this.z >= uz){
        this.dz = -0.1;
        this.r_y = random(180, 360);
      }

      if(this.y<=ly){
        this.dy = 0.1;
        this.r_z = random(-50, 0);
      }else if(this.y >= uy){
        this.dy = -0.1;
        this.r_z = random(0, 50);
      }



      if(this.r_y>=0 && this.r_y <90){
        this.dx=-0.05
      }else if(this.r_y>90 && this.r_y <= 180){
        this.dx=0.05
      }else{
        this.dx=0
      }

      if(this.r_y>0 && this.r_y <180){
        this.dz=0.05
      }else if(this.r_y>180 && this.r_y<360){
        this.dz=-0.05
      }else{
        this.dz=0
      }

      if(this.r_z<0 && this.r_z >=-50){
        this.dy=0.05
      }else if(this.r_z>0 && this.r_z<=50){
        this.dy=-0.05
      }else{
        this.dy=0
      }

      this.x+=this.dx;
      this.y+=this.dy;
      this.z+=this.dz;
      this.fish.setAttribute("animation-mixer", {"timeScale":2});

    }else{
      this.fish.setAttribute("animation-mixer", {"timeScale":0});
    }
    this.obj.setAttribute("position", {x:this.x, y:this.y, z:this.z});
    this.obj.setAttribute("rotation", {x:0, y:this.r_y, z:this.r_z});
  }

}

class KFish2{
  constructor(x, y, z){
    this.x = x;
    this.y = y;
    this.z = z;

    this.r_z = random(-50, 50);
    this.r_y = random(0,180);



    this.rdm_h = random(0,40);
    this.rdm_l = random(60,100);




    this.obj = document.createElement("a-entity");

    this.fish = document.createElement("a-gltf-model");
    this.fish.setAttribute("src", "#kFish2");
    this.fish.setAttribute("position", {x:0, y:0.1, z:0});
    this.fish.setAttribute("scale", {x:0.005, y:0.005, z:0.005});
    this.fish.setAttribute("rotation", {x:0, y:180, z:0})
    this.fish.setAttribute("animation-mixer","");

    this.obj.appendChild(this.fish);
    

    this.obj.setAttribute("position", {x:this.x, y:this.y, z:this.z});
    this.obj.setAttribute("rotation", {x:0, y:this.r_y, z:this.r_z});

    //scene.append(this.obj);
    this.dx=0
    if(this.r_y>=0 && this.r_y <90){
      this.dx=-0.05
    }else if(this.r_y>90 && this.r_y <= 180){
      this.dx=0.05
    }

    this.dz=0
    if(this.r_y>0 && this.r_y <180){
      this.dz=0.05
    }
    
    this.dy = 0;
    if(this.r_z<0 && this.r_z >=-50){
      this.dy=0.05
    }else if(this.r_z>0 && this.r_z<=50){
      this.dy=-0.05
    }



  }


  moveF(){
    let x_random = randomFloat(-1, 1);
    let y_random = randomFloat(-1, 1);
    let z_random = randomFloat(-1, 1);

    let rz_random = random(-90, 90);
    let ry_random = random(0, 360);

    this.obj.setAttribute("position", {x:this.x+x_random, y:this.y+y_random, z:this.z+z_random});
    this.obj.setAttribute("rotation", {x:0, y:ry_random, z:rz_random});

  }

  move(lx, ux, ly, uy, lz, uz, cond){

    if(cond){
    
      if(this.x<=lx){
        this.dx = 0.1;
        this.r_y = random(90, 270);
      }else if(this.x >= ux){
        this.dx = -0.1;
        this.r_y = random(270, 360);
      }

      if(this.z<=lz){
        this.dz = 0.1;
        this.r_y = random(0, 180);
      }else if(this.z >= uz){
        this.dz = -0.1;
        this.r_y = random(180, 360);
      }

      if(this.y<=ly){
        this.dy = 0.1;
        this.r_z = random(-50, 0);
      }else if(this.y >= uy){
        this.dy = -0.1;
        this.r_z = random(0, 50);
      }



      if(this.r_y>=0 && this.r_y <90){
        this.dx=-0.05
      }else if(this.r_y>90 && this.r_y <= 180){
        this.dx=0.05
      }else{
        this.dx=0
      }

      if(this.r_y>0 && this.r_y <180){
        this.dz=0.05
      }else if(this.r_y>180 && this.r_y<360){
        this.dz=-0.05
      }else{
        this.dz=0
      }

      if(this.r_z<0 && this.r_z >=-50){
        this.dy=0.05
      }else if(this.r_z>0 && this.r_z<=50){
        this.dy=-0.05
      }else{
        this.dy=0
      }

      this.x+=this.dx;
      this.y+=this.dy;
      this.z+=this.dz;
      this.fish.setAttribute("animation-mixer", {"timeScale":1});

    }else{
      this.fish.setAttribute("animation-mixer", {"timeScale":0});
    }
    this.obj.setAttribute("position", {x:this.x, y:this.y, z:this.z});
    this.obj.setAttribute("rotation", {x:0, y:this.r_y, z:this.r_z});
  }

}

class Leaf{
  constructor(x,y,z,c){
    this.x = x;
    this.y = y;
    this.z = z;

    this.c = c;

    this.y_coord = y;
    this.y_stick = random(0, 360);

    this.obj = document.createElement("a-circle");
    this.obj.setAttribute("position", {x: this.x, y:this.y, z:this.z});
    this.obj.setAttribute("scale", {x: 1.5, y: 0.75, z:1});
    this.obj.setAttribute("radius", 0.15);
    this.obj.setAttribute("side", "double");

    this.obj.setAttribute("color", this.c);

    this.r_x = random(-80, 80);
    this.r_y = random(0, 360);
    this.r_z = random(0, 360);


    this.obj.setAttribute("rotation", {x:this.r_x, y:this.r_y, z:this.r_z});

  }


  fall(){
    this.y_coord -= 0.05;
    this.obj.setAttribute("position", {x:this.x, y:this.y_coord, z:this.z});

    if(this.y_coord <= 0){
      this.obj.setAttribute("position", {x:this.x, y:this.y, z:this.z});
      this.y_coord = this.y;
    }

  }

  fallNStick(){
    this.obj.setAttribute("position", {x:this.x, y:this.y_coord, z:this.z});

    if(this.y_coord <= 0.25){
      this.y_coord=0.2
      this.obj.setAttribute("rotation", {x:-90, y:this.y_stick, z:0});
    }else{
      this.y_coord -= 0.05;
    }
  }
  

  changeColor(h,s,l){
    this.c = `hsl(${h},${s}%,${l}%)`;
    this.obj.setAttribute("color", this.c);
  }
  
  
}

class TreeM{
  constructor(x, z, s){
    this.x = x;
    this.z = z;
    this.s = s;

    this.obj = document.createElement("a-entity");

    let tree = document.createElement("a-entity");
    tree.setAttribute("obj-model", {"obj":"#tree-obj", "mtl":"#tree-mtl"});
    
    this.obj.appendChild(tree);

    this.obj.setAttribute("position", {x:this.x, y:0, z:this.z});    
    this.obj.setAttribute("scale", {x:this.s, y:this.s, z:this.s});



    let treeClass = this;

    this.shakeTree = false;



    this.obj.addEventListener("mousedown", function(obj){
      treeClass.shakeTree = true;
    });
    this.obj.addEventListener("mouseup", function(obj){
      treeClass.shakeTree = false;
    });


    this.leavesFall = [];
    this.leavesStick = [];
    this.lc = "green"

  }

  appendLeaves(r_l, r_u, y_l, y_u, dx, dz){
    //fall
    for(var i=0; i<200; i++){
      //let y = randomFloat(30, 60);
      let y = randomFloat(y_l, y_u);
      
      //let r = randomFloat(0, 50);
      let r = randomFloat(r_l, r_u);
      let angle = random(0, 360)*Math.PI/180;

      let x = r*Math.cos(angle);
      let z = r*Math.sin(angle);

      //let leaf = new Leaf(x, y, -220+z, "#FF926B");
      let leaf = new Leaf(x+dx, y, z+dz, this.lc);
      this.leavesFall.push(leaf);
      
      scene.append(leaf.obj);
    }

    //stick
    for(var i=0; i<50; i++){
      let y = randomFloat(y_l, y_u);
      
      let r = randomFloat(r_l, r_u);
      let angle = random(0, 360)*Math.PI/180;

      let x = r*Math.cos(angle);
      let z = r*Math.sin(angle);

      let leaf = new Leaf(x+dx, y, z+dz, this.lc);
      this.leavesStick.push(leaf);

      scene.append(leaf.obj);
    }


  }


  appendedLeavesFall(){
    for(let leaf of this.leavesFall){
      leaf.fall();
    }
    for(let leaf of this.leavesStick){
      leaf.fallNStick();
    }

  }


  appendOnlyStickLeaves(r_l, r_u, y_l, y_u, dx, dz, amt){
    //stick
    for(var i=0; i<amt; i++){
      let y = randomFloat(y_l, y_u);
      
      let r = randomFloat(r_l, r_u);
      let angle = random(0, 360)*Math.PI/180;

      let x = r*Math.cos(angle);
      let z = r*Math.sin(angle);

      let leaf = new Leaf(x+dx, y, z+dz, this.lc);
      this.leavesStick.push(leaf);

      scene.append(leaf.obj);
    }
  }


  shake(){
    if(this.shakeTree){
      let dx = this.obj.object3D.position.x;
      let dz = this.obj.object3D.position.z;
      this.appendOnlyStickLeaves(0, 5, 5, 10, dx+4, dz, 1);
    }
  }
  
}

class WaterLily{
  constructor(x, z){
    this.x = x;
    this.z = z;

    this.r_y = random(0, 360);
    //this.repeat = 0;

    this.obj = document.createElement("a-entity");

    this.wl = document.createElement("a-gltf-model");
    this.wl.setAttribute("src", "#waterlily");
    this.wl.setAttribute("position", {x:0, y:0.01, z:0});
    this.wl.setAttribute("scale", {x:0.02, y:0.02, z:0.02});
    this.wl.setAttribute("rotation", {x:0, y:this.r_y, z:0});
    this.wl.setAttribute("animation-mixer", {"timeScale":-1,"loop":"once", "clip":"WaterLily|WaterLily_opening", "clampWhenFinished":true});

    
    this.obj.appendChild(this.wl);

    this.obj.setAttribute("position", {x:this.x, y:0, z:this.z});    

    this.open = false
    let wlClass = this;

    this.obj.addEventListener("click", function(obj){
      wlClass.wl.removeAttribute("animation-mixer");
      if(!wlClass.open){
        wlClass.open = true;
        wlClass.wl.setAttribute("animation-mixer", {"timeScale":1,"clip":"WaterLily|WaterLily_opening", "repetitions":0, "clampWhenFinished":true});
        
      }
      else{
        wlClass.open = false;
        wlClass.wl.setAttribute("animation-mixer", {"timeScale":-1,"clip":"WaterLily|WaterLily_opening", "repetitions":0, "clampWhenFinished":true});
      }
      
    });

  }

  /*animate(){
    if(this.open){
      console.log(true);
      this.wl.setAttribute("animation-mixer", {"timeScale":1,"loop":"once", "clampWhenFinished":true});
    }else{
      this.wl.setAttribute("animation-mixer", {"timeScale":-1,"loop":"once", "clampWhenFinished":true});
    }
  }*/
  
}


function random(lower, upper){
  return Math.floor(Math.random() * (upper-lower+1)) + lower;
}

function randomFloat(lower, upper){
  return (Math.random() * (upper-lower+1) + lower).toFixed(4);
}



//variables


let scene;
let rains = [], fish = [], fireflies = [], fish_L=[], leaves=[], leaves_S = [];
let tree;

let trees = [], fireflies_M=[];

var leftTankC = false, rightTankC=false;
let stoneLanternLight;
var on = true;


let tank, foxEty;
let fish2 = [], fish_L2 = [];
let wLilies = [];



function init(){
  scene = document.getElementById("scene");

  //https://github.com/donmccurdy/aframe-extras/tree/master/src/loaders#animation
  tank = document.getElementById("tank");
  tank.addEventListener("click", function(obj){
    tank.setAttribute("animation-mixer", "");
    console.log(true)
  });

  foxEty = document.getElementById("foxEty");
  foxEty.addEventListener("click",function(obj){
    foxEty.removeAttribute("animation-mixer");
    foxEty.setAttribute("animation-mixer", {"loop":"once"});
    console.log(true)
  })

  tree = new Tree(-10, -222.5, 5, "#FF926B");
  tree.appendLeaves(0,50,30,60,0,-220);
  scene.append(tree.obj);

  for(var i=0; i<10; i++){
    let x = random(295, 350);
    let z = random(-190, -95);

    let wLily = new WaterLily(x, z)
    wLilies.push(wLily);
    scene.append(wLily.obj)
  }

  
  //trees
  /*for(var i = 0; i < 25; i+=1){  
    let x = random(125, 225);
    let z = random(-100, 60);

    let s = randomFloat(1, 3);

    let c_g = random(68,200);
    let c_b = random(0,68)
    let tree_R = new Tree(x, z, s, `rgb(255,${c_g},${c_b})`);
    trees.push(tree_R);
    scene.append(tree_R.obj);
    
  }*/
  for(var i = 0; i < 20; i+=1){  
    let x = random(125, 225);
    let z = random(-100, 60);

    let s = randomFloat(0.5, 2);

    let tree_R = new TreeM(x, z, s);
    trees.push(tree_R);
    scene.append(tree_R.obj);
  }

  /*
  //leaves
  for(var i=0; i<200; i++){
    let y = randomFloat(30, 60);
    
    let r = randomFloat(0, 50);
    let angle = random(0, 360)*Math.PI/180;

    let x = r*Math.cos(angle);
    let z = r*Math.sin(angle);

    let leaf = new Leaf(x, y, -220+z, "#FF926B");
    leaves.push(leaf);
    scene.append(leaf.obj);
  }

  //stick
  for(var i=0; i<50; i++){
    let y = randomFloat(30, 60);
    
    let r = randomFloat(0, 50);
    let angle = random(0, 360)*Math.PI/180;

    let x = r*Math.cos(angle);
    let z = r*Math.sin(angle);

    let leaf = new Leaf(x, y, -220+z, "#FF926B");
    leaves_S.push(leaf);
    scene.append(leaf.obj);
  }
  */



  //fireflies
  for(var i=0; i<12; i++){
    
    let r = randomFloat(0, 60);
    let angle = random(-250, 60)*Math.PI/180;

    let x = r*Math.cos(angle);
    let z = r*Math.sin(angle);

    let firefly = new Firefly(x, 0, -220+z);
    //fireflies.push(firefly);
    fireflies_M.push(firefly);
    scene.append(firefly.obj);
  }


  for(var i = 0; i < 3; i+=1){  
    let x = randomFloat(-10, 10);
    let z = randomFloat(-104, -20);
    let firefly = new Firefly(x, 0, z);
    fireflies.push(firefly);
    scene.append(firefly.obj);
  }



  //Fish
  
  for(var i=0; i<8; i++){

    let x = random(30, 85);
    let z = random(-118, -113);
    let y = random(3, 7);

    let kFish = new KFish(x, y, z);
    fish.push(kFish);
    scene.append(kFish.obj);
  }


  for(var i=0; i<5; i++){

    let x = random(-68, -64);
    let z = random(-34, -12);
    let y = random(3, 7);

    let kFish = new KFish(x, y, z);
    fish_L.push(kFish);
    scene.append(kFish.obj);
  }

  for(var i=0; i<5; i++){

    let x = random(30, 85);
    let z = random(-118, -113);
    let y = random(3, 7);

    let kFish = new KFish2(x, y, z);
    fish2.push(kFish);
    scene.append(kFish.obj);
  }


  for(var i=0; i<3; i++){

    let x = random(-68, -64);
    let z = random(-34, -12);
    let y = random(3, 7);

    let kFish = new KFish2(x, y, z);
    fish_L2.push(kFish);
    scene.append(kFish.obj);
  }

  //middle
  /*for(var i = 0; i < 500; i+=1){  
    let x = randomFloat(-10, 10);
    let y = randomFloat(30, 60);
    let z = randomFloat(-104, 50);
    let rain = new Rain(x, y, z);
    rains.push(rain);
    scene.append(rain.obj);
  }


  //left
  for(var i = 0; i < 100; i+=1){  
    let x = randomFloat(-80, -10);
    let y = randomFloat(30, 60);
    let z = randomFloat(50, -15);
    let rain = new Rain(x, y, z);
    rains.push(rain);
    scene.append(rain.obj);
  }

  //right near building
  for(var i = 0; i < 50; i+=1){  
    let x = randomFloat(10, 100);
    let y = randomFloat(30, 60);
    let z = randomFloat(-10, 13);
    let rain = new Rain(x, y, z);
    rains.push(rain);
    scene.append(rain.obj);
  }

  //pavillion middle
  for(var i = 0; i < 50; i+=1){  
    let x = randomFloat(30, 50);
    let y = randomFloat(30, 60);
    let z = randomFloat(30, 50);
    let rain = new Rain(x, y, z);
    rains.push(rain);
    scene.append(rain.obj);
  }

  //pavillion left
  for(var i = 0; i < 50; i+=1){  
    let x = randomFloat(10, 30);
    let y = randomFloat(30, 60);
    let z = randomFloat(13, 50);
    let rain = new Rain(x, y, z);
    rains.push(rain);
    scene.append(rain.obj);
  }

  //pavillion right
  for(var i = 0; i < 50; i+=1){  
    let x = randomFloat(50, 100);
    let y = randomFloat(30, 60);
    let z = randomFloat(13, 50);
    let rain = new Rain(x, y, z);
    rains.push(rain);
    scene.append(rain.obj);
  }*/




  let tankLeft = document.getElementById("tankLeft");
  let tankRight = document.getElementById("tankRight");

  tankLeft.addEventListener("mouseenter", function(obj){
    leftTankC=true;
  });

  tankLeft.addEventListener("mouseleave", function(obj){
    leftTankC=false;
  });


  tankRight.addEventListener("mouseenter", function(obj){
    rightTankC=true;
  });

  tankRight.addEventListener("mouseleave", function(obj){
    rightTankC=false;
  });


  let stoneLantern = document.getElementById("stoneLantern");
  stoneLanternLight = document.getElementById("stoneLanternLight");

  stoneLanternLight.lightIntensity=2;

  stoneLantern.addEventListener("click",function(obj){
    if(on){
      on = false;
    }else{
      on = true;
    }

  });



  
  loop();
  slowLoop();
}




function loop(){

  for(let rain of rains){
    rain.fall();
  }

  for(let kFish of fish){
    kFish.move(30, 85, 3, 7, -118, -113, rightTankC);
    //kFish.changeColor(rightTankC);
  }

  for(let kFish of fish_L){
    kFish.move(-68, -64, 3, 7, -34, -12, leftTankC);
    //kFish.changeColor(leftTankC);
  }

  for(let kFish of fish2){
    kFish.move(30, 85, 3, 7, -118, -113, rightTankC);
  }

  for(let kFish of fish_L2){
    kFish.move(-68, -64, 3, 7, -34, -12, leftTankC);
  }

  /*for(let leaf of leaves){
    leaf.fall();
  }
  for(let leaf of leaves_S){
    leaf.fallNStick();
  }*/

  tree.appendedLeavesFall();

  for(let tree_R of trees){
    tree_R.shake();
    tree_R.appendedLeavesFall();
  }


  /*for(let wLily of wLilies){
    wLily.animate();
  }*/

  
  setTimeout(loop, 10)
}

function slowLoop(){

  for(let firefly of fireflies_M){
    firefly.move();
  }

  for(let firefly of fireflies){
    //firefly.move();
    firefly.lightUpOnClick();
  }

  tree.changeColor();

  tree.appendOnlyStickLeaves(0,50,30,60,0,-220,2);



  if(on){
    if(stoneLanternLight.intensity<2)
    stoneLanternLight.intensity+=0.01;

    stoneLanternLight.setAttribute("light", {"intensity": stoneLanternLight.lightIntensity});
    stoneLanternLight.setAttribute("light", {"intensity": stoneLanternLight.lightIntensity});
  }
  else{
    stoneLanternLight.setAttribute("light", {"intensity": 0});
    stoneLanternLight.setAttribute("light", {"intensity": 0});
  }


  setTimeout(slowLoop, 200)
}

