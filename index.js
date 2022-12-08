var cols = ["red", "blue", "green", "yellow"];
var sequ = [];
var some = [];
var started = false;
var level = 0;
$(document).keypress(function(){
    if(!started)
    {
        // $("#level-title").text("Level "+level);
        newSequence();
        started = true;
    }
});
$(".btn").click(function(){
    var selected=$(this).attr("id");
    some.push(selected);
    playsound(selected);
    pressanime(selected);
    checking(some.length);
});

function checking(currlevel)
{
    if(sequ[currlevel-1] === some[currlevel-1])
    {
        if(sequ.length === some.length)
        {
            setTimeout(function(){
                newSequence();
            },1000);
        }
    }
    else{
        var audio = new Audio("sounds/wrong.mp3");
        audio.play();
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over")
        },200);
        $("#level-title").text("Game Over Press ANY Key to Restart");
        Restart();
    }
}
function Restart()
{
    level = 0;
    sequ = [];
    started = false;
}
function newSequence()
{
    some = [];
    level++;
    $("#level-title").text("Level "+level);
    var max = 4;
    var min = 0;
    var hem =Math.floor(Math.random() * (max - min) ) + min;
    var chosen = cols[hem];
    sequ.push(chosen);
    $("#"+chosen).fadeIn(100).fadeOut(100).fadeIn(100);
    playsound(chosen);
    pressanime(chosen);
}
function playsound(col)
{
    var audio = new Audio("sounds/"+col+".mp3");
    audio.play();
}
function pressanime(onecol)
{
    $("#"+onecol).addClass("pressed");

    setTimeout(function(){
        $("#"+onecol).removeClass("pressed")
    },100);
}