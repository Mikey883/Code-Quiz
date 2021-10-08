var timer;
var timeLeft = 0;
function startTimer() {
    timeLeft = 60;
    timer=setInterval(function() {
        timeLeft--;
        $(".timer").text("Time:" + " " + timeLeft);
        if(timeLeft <= 0) {
            finish();
        }
    },1000)
}
 
function subtractTime() {
    timeLeft -= 5;
    if(timeLeft <= 0) {
        finish();
    }
}

var totalPoints = points
var points = 0;
function addPoints() {
    points + 5;
    $(".points").text(points);
}

function subtractPoints() {
    points - 5;
    $(".points").text(points);
}

$(".wrong-answer").click(function () {
    wrongAnswer()
});

function finish() {
    timeLeft = 0;
    $(".timer").text("Time:" + " " + timeLeft);
    $(".start-page").hide();
    $("#question1").hide();
    $("#question2").hide();
    $("#question3").hide();
    $("#question4").hide();
    $("#question5").hide();
    $(".result").hide();
    $(".finish-page").show();
    
}

$(".start-button").click(startQuiz)

function startQuiz() {
    $(".start-page").hide();
    $("#question1").show();
    startTimer() 
};

$("#correct1").click(function() {
    setQuestion1(), rightAnswer();
});

function setQuestion1() {
    $("#question1").hide();
    $("#question2").show();
};

$("#correct2").click(function() {
    setQuestion2(), rightAnswer();
});

function setQuestion2() {
    $("#question2").hide();
    $("#question3").show();
};

$("#correct3").click(function() {
    setQuestion3(), rightAnswer();
});

function setQuestion3() {
    $("#question3").hide();
    $("#question4").show();
};

$("#correct4").click(function() {
    setQuestion4(), rightAnswer();
});

function setQuestion4() {
    $("#question4").hide();
    $("#question5").show();
};

$("#correct5").click(function() {
    setQuestion5(), rightAnswer();
});

function setQuestion5() {
    finish()
};

function rightAnswer() {
    $(".result").hide(), addPoints();
};

var timerWrong;
var timeLeftWrong = 0;
function showWrongText() {
    timeLeftWrong = 2;
    timer=setInterval(function() {
        timeLeftWrong--;
        $(".result").show()
        if(timeLeftWrong <= 0) {
            $(".result").hide()
        }
    },1000)
}

function wrongAnswer() {
    showWrongText(), subtractTime(), subtractPoints();
};

