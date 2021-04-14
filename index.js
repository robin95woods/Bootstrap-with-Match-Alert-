var firstname = prompt ("Enter your name");
var secondname = prompt ("Enter the Cats name");

var randomNummber = Math.random();

var onScaleOf100 = randomNummber * 100;

var roundVal = Math.floor(onScaleOf100) + 1;

if (roundVal <= 40){
    alert ("you have a " + roundVal + "%" + " match " + "I don't think this is going to work.")

} else{
    alert ("Its a match")
}

if (roundVal >= 60){
    alert ("you have a " + roundVal + "%" + " match " + "This is a perfect match!")
}

if (roundVal >= 40 && roundVal <= 60){
    alert("There is a small chance this could work")
}
