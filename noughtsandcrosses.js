var t=0
var x=96
var y=24

var Board=[0,0,0,0,0,0,0,0,0]
var BoardState=[9]
var GameBoard=[]

const BoardX = 59
const BoardY = -27

const PositionX = [89,109,129,89,109,129,89,109,129]
const PositionY = [23,23,23,43,43,43,63,63,63]

const Row1Y = 23
const Row2Y = 43
const Row3Y = 63

const Col1X = 89
const Col2X = 109
const Col3X = 129

var firstRun = true;

let currentPlayer = 1;

let musicPlaying = false;

class Location {
	constructor(Cx,Cy){
	this.x = Cx;
	this.y = Cy;
	}
}

class Area {
 constructor(location, width, height){
 this.location = location;
 this.width=width;
 this.height=height;
 }
  Contains(testlocation)
  {
   if ((testlocation.x>this.location.x)&&
       (testlocation.x<this.location.x+this.width)&&
       (testlocation.y>this.location.y)&&
       (testlocation.y<this.location.y+this.height))
       return true;
  }
 }
 
class Player {
 constructor(PNo,Loc){
  this.PNo = PNo;
  this.Loc = Loc;
  }
}

class Gamesquare {
 constructor(Area,PNo){
  this.Area = Area;
  this.PNo = PNo;
  }
}
		

function TIC()
{
 if (firstRun)	InitStuff();
  
	if(btn(0))y--
	if(btn(1))y++
	if(btn(2))x--
	if(btn(3))x++

	cls(0)
	spr(33,x,y,14,1,0,0,2,2)
	print("X:"+x+" Y:"+y+" "+BoardState,84,104)
	
	
	MakeBoard(BoardX,BoardY)
	GetBoardState()
	DrawPieces()		
	if(btn(4)){CheckPlayerPosition(x,y)}
    isDraw()
	if (isDraw()) {
        print("It's a draw!", 90,90);
    }
    print("Player " + currentPlayer + "'s turn", 84,114);

	t++
	
}

function InitStuff(){for(let r = 0; r<9;r++){var gs=new Gamesquare(new Area(new Location(PositionX[r],PositionY[r]),20,20),0)GameBoard.push(gs);} firstRun = false;}

function MakeBoard(pX, pY)
{
  line(pX+50,pY+50,pX+50,pY+110,13)
  line(pX+70,pY+50,pX+70,pY+110,13)
  line(pX+30,pY+70,pX+90,pY+70,13)
  line(pX+30,pY+90,pX+90,pY+90,13)
}

function GetBoardState(){for (let i = 0; i<9; i++){BoardState[i]=GameBoard[i].PNo.toString();}}

function DrawPieces(){for(i=0;i<9;i++){if (GameBoard[i].PNo!=0){spr(33+(GameBoard[i].PNo*2),GameBoard[i].Area.location.x+2,GameBoard[i].Area.location.y+2,14,1,0,0,2,2)}}}

function CheckPlayerPosition(pX,pY){pX+=8 pY+=8 for(let i = 0; i<9;i++){if(GameBoard[i].Area.Contains(new Location(pX,pY))&&GameBoard[i].PNo === 0){GameBoard[i].PNo=currentPlayer; currentPlayer = currentPlayer === 1 ? 2 : 1;break;}}}

function isDraw() {
    for (let i=0; i<9; i++) {
        if (GameBoard[i].PNo === 0) {
            return false;
        }
    }
    return true;
}

function isDraw() {
    for (let i = 0; i < 9; i++) {
        if (GameBoard[i].PNo === 0) {
            return false;
        }
    }
    return true;
}   