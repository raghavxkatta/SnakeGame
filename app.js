const gameBoard=document.querySelector('.gameBoard');
const ctx= gameBoard.getContext("2d");
const scoreText=document.querySelector('.scoreText');
const resetBtn=document.querySelector('.resetBtn');
const gameHeight=gameBoard.height;
const gameWidth=gameBoard.width;
const snakeColor="light green";
const unitSize=25;
const snakeBorder="black";
const foodColor="red";
let running=false;
let xVelocity=unitSize;
let yVelocity=0;
let foodX;
let foodY;
let score=0;
let snake =[
    {x:unitSize*4,y:0},
    {x:unitSize*3,y:0},
    {x:unitSize*2,y:0},
    {x:unitSize,y:0}
];
window.addEventListener("keydown",changeDirection);
resetBtn.addEventListener('click',resetGame);

gameStart();
createFood();

function gameStart(){}
function nextTick(){}
function clearBoard(){}
function createFood(){
    function randomFood(max,min){
        const randNum= Math.round((Math.random()*(max-min)+min)/unitSize)*unitSize;
        return randNum;
    }
    foodX=randomFood(0,gameWidth-unitSize)
    console.log(foodX);
    foodY=randomFood(0,gameHeight-unitSize)
}
function drawFood(){
    ctx.fillStyle=foodColor;
    ctx.fillRect(foodX,foodY,unitSize,unitSize);
}
function moveSnake(){}
function drawSnake(){}
function changeDirection(){}
function checkGameOver(){}
function displayGameOver(){}
function resetGame(){}