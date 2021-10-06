var startButton = $(".start-button");
var startPage = $(".start-page");

var question1 = $("#question1");
var question2 = $("#question2");
var question3 = $("#question3");
var question4 = $("#question4");
var question5 = $("#question5");

var correct1 = $("#correct1");
var correct2 = $("#correct2");
var correct3 = $("#correct3");
var correct4 = $("#correct4");
var correct5 = $("#correct5");

var wrong = $(".wrong-answer");
var wrongMessage = $(".result");



startButton.click(startGame)

function startGame() {
    console.log("Started");
    startPage.hide();
    question1.show();
    wrong.click(function () {
        wrongAnswer()
    });
};

correct1.click(function() {
    setQuestion1();
    rightAnswer();
});

function setQuestion1() {
    question1.hide();
    question2.show();
    wrong.click(function () {
        wrongAnswer()
    });
    
};

correct2.click(function() {
    setQuestion2();
    rightAnswer();
});

function setQuestion2() {
    question2.hide();
    question3.show();
    wrong.click(function () {
        wrongAnswer()
    });
};

correct3.click(function() {
    setQuestion3();
    rightAnswer();
});

function setQuestion3() {
    question3.hide();
    question4.show();
    wrong.click(function () {
        wrongAnswer()
    });
};

correct4.click(function() {
    setQuestion4();
    rightAnswer();
});

function setQuestion4() {
    question4.hide();
    question5.show();
    wrong.click(function () {
        wrongAnswer()
    });
};

correct5.click(function() {
    setQuestion5();
    rightAnswer();
});

function setQuestion5() {
    question5.hide();
    wrong.click(function () {
        wrongAnswer()
    });
};


function rightAnswer() {
    wrongMessage.hide();
};

function wrongAnswer() {
    wrongMessage.show();
};

