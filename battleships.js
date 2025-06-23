// title:   Battleships
// author:  Chris & Nick
// desc:    Neither chess nor checkers
// site:    website link
// license: MIT License (change this to your license of choice)
// version: 0.1
// script:  js

var t = 0;
var x = 0;
var y = 0;

//Player Board Array
var playerBoard = [];
for (let i = 0; i < 81; i++) {
  playerBoard.push(0);
}

//Enemy Board Array
var enemyBoard = [];
for (let i = 0; i < 81; i++) {
  enemyBoard.push(0);
}

//Board States
var playerBoardState = [81];
var enemyBoardState = [81];

//Board Arrays
var pBoard = [];
var eBoard = [];

//Board Co-ordinates
const enemyBoardX = 90;
const enemyBoardY = 40;
const playerBoardX = 10;
const playerBoardY = 40;

//Player Board X-axis Co-ordinates
const playerPositionX = [];
for (let row = 0; row < 9; row++) {
  for (let col = 0; col < 9; col++) {
    playerPositionX.push(10 + col * 7);
  }
}

//Enemy Board X-axis Co-ordinates
const enemyPositionX = [];
for (let row = 0; row < 9; row++) {
  for (let col = 0; col < 9; col++) {
    enemyPositionX.push(90 + col * 7);
  }
}

//Board Y-axis Co-ordinates
const PositionY = [];
for (let row = 0; row < 9; row++) {
  for (let col = 0; col < 9; col++) {
    PositionY.push(40 + col * 7);
  }
}

var firstRun = true;

function TIC() {
  if (btn(0)) y--;
  if (btn(1)) y++;
  if (btn(2)) x--;
  if (btn(3)) x++;

  cls(13);

  //Enemy Board Ocean
  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 4; col++) {
      let spriteIndex = [2, 3, 18, 19][(row + col) % 4];
      print(spr(spriteIndex, col * 16 + 90, row * 16 + 40, 1, 2, 0, 0, 1, 1));
    }
  }
  //Player Board Ocean
  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 4; col++) {
      let spriteIndex = [2, 3, 18, 19][(row + col) % 4];
      print(spr(spriteIndex, col * 16 + 10, row * 16 + 40, 1, 2, 0, 0, 1, 1));
    }
  }

  //Menu Boats
  print(spr(5, 176, 22, 1, 1, 0, 1, 1, 5));
  print(spr(7, 179, 47, 1, 1, 0, 1, 1, 4));
  print(spr(9, 182, 72, 1, 1, 0, 1, 1, 3));
  print(spr(11, 182, 97, 1, 1, 0, 1, 1, 3));
  print(spr(13, 186, 122, 1, 1, 0, 1, 1, 2));

  //Pointer
  spr(0, x, y, 14, 1, 0, 0, 1, 1);
  print("X: " + x + " Y: " + y, 10, 10, 12);

  //Board Descriptions
  print("Enemy Board", 91, 33, 0, false, 1, 0, 0);
  print("Player Board", 8, 33, 0, false, 1, 0, 0);

  //Menu Titles
  print("BATTLESHIPS", 165, 5, 0, false, 1, 0, 0);
  print("Carrier", 177, 15, 0, false, 1, 0, 0);
  print("Battleship", 168, 40, 0, false, 1, 0, 0);
  print("Destroyer", 169, 65, 0, false, 1, 0, 0);
  print("Submarine", 170, 90, 0, false, 1, 0, 0);
  print("Patrol Boat", 165, 115, 0, false, 1, 0, 0);

  //Board Grids
  makeEnemyBoard(enemyBoardX, enemyBoardY);
  makePlayerBoard(playerBoardX, playerBoardY);

  t++;
}

//Enemy Board Grid
function makeEnemyBoard(pX, pY) {
  for (let i = 0; i < 10; i++) {
    let y = pY + i * 7;
    line(pX, y, pX + 63, y, 0);
  }
  for (let i = 0; i < 10; i++) {
    let x = pX + i * 7;
    line(x, pY, x, pY + 63, 0);
  }
}

//Player Board Grid
function makePlayerBoard(pX, pY) {
  for (let i = 0; i < 10; i++) {
    let y = pY + i * 7;
    line(pX, y, pX + 63, y, 0);
  }
  for (let i = 0; i < 10; i++) {
    let x = pX + i * 7;
    line(x, pY, x, pY + 63, 0);
  }
}
