var rover = {
  direction: "N",
  y: 0,
  x: 0,
  travelLog: [],
}

var marsGrid = [];
for(var i=0; i<10; i++) {
    marsGrid[i] = [];
    for(var j=0; j<10; j++) {
      marsGrid[i][j] = null;
    }
}
console.log(marsGrid);

// ======================

function turnLeft(rover){
  console.log("turnLeft was called!");
  switch(rover.direction){
    case "N":
    rover.direction = "W";
    break;
    case "S":
    rover.direction = "E";
    break;
    case "E":
    rover.direction = "N";
    break;
    case "W":
    rover.direction = "S";
    break;
  }
  console.log("Rover is facing: " + rover.direction + " [" + rover.y + "," + rover.x + "]");
} 

//console.log("Rover Direction: " + rover.direction);


function turnRight(rover){
  console.log("turnRight was called!");
  switch(rover.direction) {
    case 'N':
      rover.direction = 'E';
      break;
    case 'E':
      rover.direction = 'S';
      break;
    case 'S':
      rover.direction = 'W';
      break;
    case 'W':
      rover.direction = 'N';
      break;
 }
 console.log("Rover is facing: " + rover.direction + " [" + rover.y + "," + rover.x + "]");
}

//console.log("Rover Direction: "+ rover.direction);

// function will update the position of object in the grid based on the direction is facing

function moveForward(rover){
  console.log("moveForward was called")
  switch(rover.direction) {
    case "N":
    rover.y = rover.y - 1;
    break;
    case "S":
    rover.y = rover.y + 1;
    break;
    case "W":
    rover.x = rover.x - 1;
    break;
    case "E":
    rover.x = rover.x +1;
    break; 
  }
  console.log("Rover is facing: " + rover.direction + " [" + rover.y + "," + rover.x + "]");
}

//console.log("Rover position: [" + rover.x + "," + rover.y + "]");

// function will update the position of object in the grid based on the direction is facing

function moveBackward(rover){
  console.log("moveBackward was called")
  switch(rover.direction) {
    case "N":
    rover.y = rover.y + 1;
    break;
    case "S":
    rover.y = rover.y - 1;
    break;
    case "W":
    rover.x = rover.x + 1;
    break;
    case "E":
    rover.x = rover.x - 1;
    break; 
  }
  console.log("Rover is facing: " + rover.direction + " [" + rover.y + "," + rover.x + "]");
}

console.log("Rovers position is: [" + rover.y + "," + rover.x + "] / " + "Rover is facing: "
+ rover.direction);

/*
function that picks up the direction to move and calls the appropiate
function to do that. r will call function turnRight and so on...
*/

function moveCommands (commands){
  for (var i = 0 ; i < commands.length ; i++){
    console.log(i)
    switch (commands[i]){
      case "f":
      moveForward(rover);
      rover.travelLog.push("[" + rover.y + "," + rover.x + "]");
      break;
      case "b":
      moveBackward(rover);
      rover.travelLog.push("[" + rover.y + "," + rover.x + "]");
      break;
      case "l":
      turnLeft(rover);
      rover.travelLog.push("[" + rover.y + "," + rover.x + "]");
      break;
      case "r":
      turnRight(rover);
      rover.travelLog.push("[" + rover.y + "," + rover.x + "]");
      break;
    }
  }
}

/*
commands that tell the rover in which direction to move
it will turn righ or left and move forward or backwards
*/

moveCommands('rrfflffb');

console.log('==============================');

console.log('Rovers Location');

console.log("[" + rover.y + "," + rover.x + "] / " + "Rover is facing: "
+ rover.direction);

console.log('==============================');

console.log('This is the Rovers travel log');
console.log('==============================');

console.log(rover.travelLog);

