function findNeededDucks(){
    var weight = document.getElementById("weightInput").value;
    var neededHorses = weight / 250;
    var ducks = Math.round(neededHorses * 131);
    let temp = "You would need ";
    let message = temp.concat(ducks, " ducks to be able to lift ", weight, "kg one foot into the air in one second.");
    if (ducks > 1150000000) { 
        document.getElementById("answer").innerHTML = message.concat(" Congratulations you've managed to exceed the number of ducks in existence. (At least according to the United Nations Food and Agriculture Organization)");
    } else {
        document.getElementById("answer").innerHTML = message;
    }
}