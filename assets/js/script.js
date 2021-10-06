var timer;
var timeLeft=0;
function startTimer() {
    timeLeft=50;
    timer=setInterval(function() {
        timeLeft--;
        if(timeLeft===0) {
            finish();
        }
    },1000)
    $(".timer").append(timeLeft)
}

startTimer()

function subtractTime() {
    timeLeft-=10;
    if(timeLeft===0) {
        finish();
    }
}

$(".start-button").click(startQuiz)

function startQuiz() {
    console.log("Started");
    $(".start-page").hide();
    $("#question1").show();
    $(".wrong-answer").click(function () {
        wrongAnswer()
    });
};

$("#correct1").click(function() {
    setQuestion1();
    rightAnswer();
});

function setQuestion1() {
    $("#question1").hide();
    $("#question2").show();
    $(".wrong-answer").click(function () {
        wrongAnswer()
    });
    
};

$("#correct2").click(function() {
    setQuestion2();
    rightAnswer();
});

function setQuestion2() {
    $("#question2").hide();
    $("#question3").show();
    $(".wrong-answer").click(function () {
        wrongAnswer()
    });
};

$("#correct3").click(function() {
    setQuestion3();
    rightAnswer();
});

function setQuestion3() {
    $("#question3").hide();
    $("#question4").show();
    $(".wrong-answer").click(function () {
        wrongAnswer()
    });
};

$("#correct4").click(function() {
    setQuestion4();
    rightAnswer();
});

function setQuestion4() {
    $("#question4").hide();
    $("#question5").show();
    $(".wrong-answer").click(function () {
        wrongAnswer()
    });
};

$("#correct5").click(function() {
    setQuestion5();
    rightAnswer();
});

function setQuestion5() {
    $("#question5").hide();
    $(".wrong-answer").click(function () {
        wrongAnswer()
    });
};


function rightAnswer() {
    $(".result").hide();
};

function wrongAnswer() {
    $(".result").show();
};

