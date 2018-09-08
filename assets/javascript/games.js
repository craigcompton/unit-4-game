console.log("JS");

// debugger;

// Variables

var wins = 0;
var losses = 0;

var target = 0;
var score = 0;
var currentScore = 0;

// Functions

function targetNumber() {
    target = Math.floor(Math.random() * 102) + 19;
    console.log(target);
}

// I was able to get a rendom number to work, at least.

function reset() {
    $(".ruby").attr("value", (Math.floor(Math.random() * 12) + 1));
    $(".star").attr("value", (Math.floor(Math.random() * 12) + 1));
    $(".emerald").attr("value", (Math.floor(Math.random() * 12) + 1));
    $(".sapphire").attr("value", (Math.floor(Math.random() * 12) + 1));
    $(".targetNum").html("Target: " + target);
    $(".winLose").html("<p>Wins: " + wins + "</p>" + "<p>Losses: " + losses + "</p>");
    $(".score").html("Score: " + currentScore);
    console.log("reset");
}

// I was trying to set the random number to the items with the classes .ruby .star .emerald & .sapphire, but I didn't get this to work.  Uncaught ReferenceError: ruby is not defined

targetNumber();
console.log(target);
reset();

function gem() {

    currentScore += parseInt($(this).attr("value"));
    $(".score").html("Score: " + currentScore);
    if (currentScore == target) {
        wins++;
        reset();
    }
    else if (currentScore > target) {
        losses++;
        reset();
    };
};

$(".gem").click(function() {
    $(".score").html("Score: " + (currentScore = currentScore + (this.value)));
    gem();
    console.log(this);
});
