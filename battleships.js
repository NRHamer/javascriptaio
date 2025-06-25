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

const GameBoardWidth = 9;
const GameBoardHeight = 9;
const GameBoardArea = GameBoardWidth * GameBoardHeight;

const PlayerCount = 2;
const SpriteSize = 16;

//Board Class
class gameBoard {
  constructor(PNo) {
    this.PNo = PNo;
    this.gameSquares = [];
  }
}

//Board States
var Board1State = [81];
var Board2State = [81];

//Board Array
var GameBoards = [];

//Board Co-ordinates
const Board1X = 10;
const Board1Y = 40;
const Board2X = 90;
const Board2Y = 40;

//Board 1 X-axis Co-ordinates
const Position1X = [
  10, 17, 24, 31, 38, 45, 52, 59, 66, 10, 17, 24, 31, 38, 45, 52, 59, 66, 10,
  17, 24, 31, 38, 45, 52, 59, 66, 10, 17, 24, 31, 38, 45, 52, 59, 66, 10, 17,
  24, 31, 38, 45, 52, 59, 66, 10, 17, 24, 31, 38, 45, 52, 59, 66, 10, 17, 24,
  31, 38, 45, 52, 59, 66, 10, 17, 24, 31, 38, 45, 52, 59, 66, 10, 17, 24, 31,
  38, 45, 52, 59, 66,
];
/*
const Position1X = [];
 for(let row=0;row<9;row++){
  for(let col=0;col<9;col++){
   Position1X.push(10+col*7);
  }
 }
*/
//Board 2 X-axis Co-ordinates
const Position2X = [
  40, 47, 54, 61, 68, 75, 82, 89, 96, 40, 47, 54, 61, 68, 75, 82, 89, 96, 40,
  47, 54, 61, 68, 75, 82, 89, 96, 40, 47, 54, 61, 68, 75, 82, 89, 96, 40, 47,
  54, 61, 68, 75, 82, 89, 96, 40, 47, 54, 61, 68, 75, 82, 89, 96, 40, 47, 54,
  61, 68, 75, 82, 89, 96, 40, 47, 54, 61, 68, 75, 82, 89, 96, 40, 47, 54, 61,
  68, 75, 82, 89, 96,
];
/*
const Position2X = [];
 for(let row=0;row<9;row++){
  for(let col=0;col<9;col++){
   Position2X.push(90+col*7);
  }
 }
*/
//Board Y-axis Co-ordinates
const PositionY = [
  40, 40, 40, 40, 40, 40, 40, 40, 40, 47, 47, 47, 47, 47, 47, 47, 47, 47, 54,
  54, 54, 54, 54, 54, 54, 54, 54, 61, 61, 61, 61, 61, 61, 61, 61, 61, 68, 68,
  68, 68, 68, 68, 68, 68, 68, 75, 75, 75, 75, 75, 75, 75, 75, 75, 82, 82, 82,
  82, 82, 82, 82, 82, 82, 89, 89, 89, 89, 89, 89, 89, 89, 89, 96, 96, 96, 96,
  96, 96, 96, 96, 96,
];
/*
const PositionY = [];
 for(let row=0;row<9;row++){
  for(let col=0;col<9;col++){
   PositionY.push(40+col*7);
  }
 }
*/
var playerFirstRun = true;
var enemyFirstRun = true;
let currentPlayer = 1;

//Location Class
class location {
  constructor(Cx, Cy) {
    this.x = Cx;
    this.y = Cy;
  }
}

//Area Class
class area {
  constructor(location, width, height) {
    this.location = location;
    this.width = width;
    this.height = height;
  }
  Contains(testlocation) {
    if (
      testlocation.x > this.location.x &&
      testlocation.x < this.location.x + this.width &&
      testlocation.y > this.location.y &&
      testlocation.y < this.location.y + this.height
    )
      return true;
  }
}

//Player Class
class Player {
  constructor(PNo, Loc) {
    this.PNo = PNo;
    this.Loc = Loc;
  }
}

//Game Square Class
class gameSquare {
  constructor(Area, PNo) {
    this.Area = Area;
    this.PNo = PNo;
  }
}

/////////////////////////////////////

function TIC() {
  InitStuff();
  if (playerFirstRun) playerInitStuff();
  if (enemyFirstRun) enemyInitStuff();

  if (btn(0)) y--;
  if (btn(1)) y++;
  if (btn(2)) x--;
  if (btn(3)) x++;

  cls(13);

  //Board 1 Ocean
  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 4; col++) {
      let spriteIndex = [2, 3, 18, 19][(row + col) % 4];
      print(spr(spriteIndex, col * 16 + 10, row * 16 + 40, 1, 2, 0, 0, 1, 1));
    }
  }

  //Board 2 Ocean
  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 4; col++) {
      let spriteIndex = [2, 3, 18, 19][(row + col) % 4];
      print(spr(spriteIndex, col * 16 + 90, row * 16 + 40, 1, 2, 0, 0, 1, 1));
    }
  }

  //Menu Boats
  print(spr(5, 176, 22, 1, 1, 0, 1, 1, 5));
  print(spr(7, 179, 47, 1, 1, 0, 1, 1, 4));
  print(spr(9, 182, 72, 1, 1, 0, 1, 1, 3));
  print(spr(11, 182, 97, 1, 1, 0, 1, 1, 3));
  print(spr(13, 186, 122, 1, 1, 0, 1, 1, 2));

  //Board Grids
  drawBoard1(Board1X, Board1Y);
  drawBoard2(Board2X, Board2Y);

  //Pointer
  spr(0, x, y, 14, 1, 0, 0, 1, 1);
  print("X: " + x + " Y: " + y + " ", 10, 10, 12);
  print(Board1State, 10, 18, 12);
  print(Board2State, 10, 26, 12);

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

  getBoard1State();
  getBoard2State();

  drawPieces();
  if (btn(4)) {
    checkPlayerPosition(x, y);
  }

  t++;
}

/////////////////////////////////////
function InitStuff() {
  for (let count = 0; count < PlayerCount; count++) {
    for (let gameSquareX = 0; gameSquareX < GameBoardWidth; gameSquareX++) {
      for (let gameSquareY = 0; gameSquareY < GameBoardHeight; gameSquareY++) {
        let anchor = count * 80 + 10;
        Location = new location(
          anchor + gameSquareX * SpriteSize,
          gameSquareY * SpriteSize
        );
        Area = new area(Location, SpriteSize, SpriteSize);
        gameSquare = new GameSquare(Area, count + 1);

        GameBoards.push(gameSquare);
      }
    }
  }
}

//Player Initialization
function playerInitStuff() {
  GameBoards[0] = new gameBoard(0);
  for (let i = 0; i < 81; i++) {
    var gs = new gameSquare(
      new area(new location(Position1X[i], PositionY[i], 20, 20), 0),
      0
    );
    GameBoards[0].gameSquares.push(gs);
  }
  firstRun = false;
}

//Enemy Initialization
function enemyInitStuff() {
  GameBoards[1] = new gameBoard(1);
  for (let i = 0; i < 81; i++) {
    var gs = new gameSquare(
      new area(new location(Position2X[i], PositionY[i], 20, 20), 0),
      0
    );
    GameBoards[1].gameSquares.push(gs);
  }
  enemyFirstRun = false;
}

//Board 1 Grid
function drawBoard1(pX, pY) {
  for (let i = 0; i < 10; i++) {
    let y = pY + i * 7;
    line(pX, y, pX + 63, y, 0);
  }
  for (let i = 0; i < 10; i++) {
    let x = pX + i * 7;
    line(x, pY, x, pY + 63, 0);
  }
}

//Board 2 Grid
function drawBoard2(pX, pY) {
  for (let i = 0; i < 10; i++) {
    let y = pY + i * 7;
    line(pX, y, pX + 63, y, 0);
  }
  for (let i = 0; i < 10; i++) {
    let x = pX + i * 7;
    line(x, pY, x, pY + 63, 0);
  }
}

//Get Board 1 state
function getBoard1State() {
  for (let i = 0; i < 81; i++) {
    Board1State[i] = GameBoards[0].gameSquares[i].PNo.toString();
  }
}

//Get Board 2 state
function getBoard2State() {
  for (let i = 0; i < 81; i++) {
    Board2State[i] = GameBoards[0].gameSquares[i].PNo.toString();
  }
}

//Z Button
function drawPieces() {
  for (i = 0; i < 81; i++) {
    if (GameBoards[0].gameSquares[i].PNo != 0) {
      spr(
        15,
        GameBoards[0].gameSquares[i].Area.location.x,
        GameBoards[0].gameSquares[i].Area.location.y,
        14,
        1,
        0,
        0,
        1,
        1
      );
    }
  }
}

//Check Player position
function checkPlayerPosition(pX, pY) {
  for (let i = 0; i < 81; i++) {
    if (
      GameBoards[0].gameSquares[i].Area.Contains(new location(pX, pY)) &&
      GameBoards[0].gameSquares[i].PNo === 0
    ) {
      GameBoards[0].gameSquares[i].PNo = currentPlayer;
      print("Selected square: " + i, 10, 50, 12);
      currentPlayer = currentPlayer === 1 ? 2 : 1;
      break;
    }
  }
}
