<<<<<<< HEAD
function takeANumber(arr, name){
  arr.push(name);
  var index = arr.length;
  return "Welcome, " + name + ". You are number " + index + " in line."
}


function nowServing(arr){
  if(arr.length === 0){
    return "There is nobody waiting to be served!";
  } else {
    var servedName = arr.shift();
=======
var katzDeliLine = [];


function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  } else {
   var index = katzDeliLine.indexOf(name) + 1;
}
  return "Welcome, " + name + ". You are number " + index + " in line."
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length === 0){
    return "There is nobody waiting to be served!";
  } else {
    var servedName = katzDeliLine.shift();
>>>>>>> 21c1a7f19c75d4d77ff5724edc0fbcc63fa99a92
  }
  return "Currently serving " + servedName + "." 
}

<<<<<<< HEAD
function currentLine(arr){
  if(arr.length === 0){
    return "The line is currently empty."
  }else{
    var newArr = [];
    for(var i = 0; i < arr.length; i++){
      var ele = arr[i];
=======
function currentLine(katzDeliLine){
  if(katzDeliLine.length === 0){
    return "The line is currently empty."
  }else{
    var newArr = [];
    for(var i = 0; i < katzDeliLine.length; i++){
      var ele = katzDeliLine[i];
>>>>>>> 21c1a7f19c75d4d77ff5724edc0fbcc63fa99a92
      var pushEle = (i + 1) + ". " + ele;
      newArr.push(pushEle);
    }
    return "The line is currently: " + newArr.join(", ");
  }
<<<<<<< HEAD
}
=======
}
>>>>>>> 21c1a7f19c75d4d77ff5724edc0fbcc63fa99a92
