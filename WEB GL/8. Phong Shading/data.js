var vertices = [
    -0.25,-0.25,0.25,    //titik A 0
    0.25,-0.25,0.25,    //titik B 1
    0.25,-0.25,-0.25,    //titik C 2
    -0.25,-0.25,-0.25,   //titik D 3
    0.0,0.25,0,    //titik E 4
];

var cubeNormal = [
    0.0, 0.0, 1.0,
    1.0, 0.0, 0.0,
    0.0, 1.0, 0.0,
    -1.0, 0.0, 0.0,
    0.0, 0.0, -1.0,
    0.0, -1.0, 0.0
]

var colors = [
    0,1,1, 0,1,1, 0,1,1, 0,1,1,
    0,0,1, 0,1,1, 0,1,1,
];

var indices = [
   0,1,2, 0,2,3,
   0,1,4, 1,2,4,
   2,3,4, 0,3,4
];