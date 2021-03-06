$("#start").on("click", function () {
    // $("#sub wrapper").remove();
    //for (var i = 0; i < questions.length; i++) {
    //$("#sub wrapper").append('<h2>' + questions[i].questions + '</h2>');
    //}
    $("#start").remove();
    game.loadQuestion();
});


$(document).on('click', '.answer-button', function (e) {
    game.clicked(e);
});

//$(document).on("click", "#reset", function () {
//game.reset();
//});

$("#reset").on("click", function () {
    $("#reset").remove();
    game.loadQuestion();
    // game.reset();
    console.log(reset)
})


$("#title").hover(function () {
    $(this).fadeOut(1000);
    $(this).fadeIn(500);
});

var pauseBool = false;
var questions = [{
        questions: "1. Which English Premier Leage club is the three times winner of UEFA Champions Leagues?",
        answers: ["Manchester City", "Chealsea", "Manchester United", "Liverpool"],
        correctAnswer: "Manchester united"
    },
    {
        questions: "2. Which club is named in the second-largest city of Portugal?",
        answers: ["FC Porto", "Braga", "Benefica", "Portimonense"],
        correctAnswer: "FC Porto"
    },
    {
        questions: "3. What is the offical working language of the Government of Ethiopa",
        answers: ["Oromiffa", "English", "Amharic", "Tigregna"],
        correctAnswer: "Amharic"
    },
    {
        questions: "4. Which country in the world is the least in population size?",
        answers: ["China", "Zanzibar", "Vatican City", "Tuvalu"],
        correctAnswer: "Vatican City"
    },
    {
        questions: "5. Which state of US named in the name of the President?",
        answers: ["Denver", "Washington DC", "Ohio", "Marryland"],
        correctAnswer: "Washington DC"
    },
    {
        questions: "6. Which state of US named to honor King Charles'wife Queen Henrietta Maria?",
        answers: ["Denver", "Washington DC", "Ohio", "Marryland"],
        correctAnswer: "Marryland"
    },

    {
        questions: "7. What is the The Frist State where Basketball is invented?",
        answers: ["Washington", "Marryland", "Massachusetts", "California"],
        correctAnswer: "Massachusetts"
    },
    {
        questions: "8. Which famous singer in US is known for reinventing a Hair Style?",
        answers: ["Beyonce", "Rihana", "Price", "Lady Gaga"],
        correctAnswer: "Rihana"
    },
    {
        questions: "9. Who is officially named as 'Stefani Joanne Angelina Germanotta'?",
        answers: ["Taylor Swift", "Madona", "Selina Gomez", "Lady Gaga"],
        correctAnswer: "Lady Gaga"
    },

    {
        questions: "10. Which interstate highway is the longest in USA?",
        answers: ["I-95", "I-94", "I-75", "I-90"],
        correctAnswer: "I-90"
    }
];

// var Instruction = ["1. The question is a general aptitiude type", "2. The Question includes issues about football,Singers, population size, name of places", "3. You can pause or resume the game", "4. You have a total of nine questions", "5. Once you have selected, you can't change the choices, so be careful!"];
var timer;
var game = {
    questions: questions,
    currentQuestion: 0,
    counter: 15,
    correct: 0,
    incorrect: 0,
    unanswered: 0,
    countDown: function () {
        if (!pauseBool) {
            game.counter--;
            $("#counter").html(game.counter);
            if (game.counter <= 0) {
                //console.log("Time Up");
                game.timeup();
            };
        }
    },

    loadQuestion: function () {
        timer = setInterval(

            game.countDown

            , 1000);
        $("#controls").removeClass("hidden");
        $("#subwrapper").html("<h2> <strong>Time Remaining is: <span id='counter'> 15 </span> Seconds</strong></h2>");
        $("#subwrapper").append("<h2>" + questions[game.currentQuestion].questions + "</h2>");
        for (i = 0; i < questions[game.currentQuestion].answers.length; i++) {
            $("#subwrapper").append('<button class="answer-button" id= "button-' + i + '"data-name="' + questions[game.currentQuestion].answers[i] + '">' + questions[game.currentQuestion].answers[i] + '</button>');
        }

    },
    nextQuestion: function () {
        game.counter = 15;
        $("#counter").html(game.counter);
        game.currentQuestion++;
        game.loadQuestion();

    },
    timeup: function () {
        clearInterval(timer);
        game.unanswered++;
        $("#subwrapper").html("<h2><strong>Out of Time</strong></h2>");
        $("#subwrapper").append("<h3> The Correct Answer is:" + " " + questions[game.currentQuestion].correctAnswer + "</h3>")
        if (game.currentQuestion == questions.length - 1) {
            setTimeout(game.result, 3 * 1000);
        } else {
            setTimeout(game.nextQuestion, 3 * 1000);
        }
    },
    result: function () {
        clearInterval(timer);
        $("#subwrapper").html("<h2><strong>All Done</strong></h2>");
        $("#subwrapper").append("<h3><strong>Correct:</strong>" + " " + game.correct + "</h3>");

        $("#subwrapper").append("<h3><strong>Incorrect:</strong>" + " " + game.incorrect + "</h3>");

        $("#subwrapper").append("<h4><strong>Unanswered:</strong>" + " " + game.unanswered + "</h4>");
        $("#subwrapper").append("<button id='reset'><strong>Reset</strong></button>")
    },
    clicked: function () {
        clearInterval(timer);
        var e = event;
        if ($(e.target).data("name") == questions[game.currentQuestion].correctAnswer) {
            game.answeredCorrectly();
        } else {
            game.answeredIncorrectly();
        }

    },


    answeredCorrectly() {
        //console.log("I got it")
        clearInterval(timer);
        game.correct++;
        $("#subwrapper").html(" <h2> <strong>You got it right!</strong></h2>");
        if (game.currentQuestion == questions.length - 1) {
            setTimeout(game.result, 3 * 1000);
        } else {
            setTimeout(game.nextQuestion, 3 * 1000);
        }
    },
    answeredIncorrectly() {
        //console.log("wrong Answer")
        clearInterval(timer);
        game.incorrect++;
        $("#subwrapper").html("<h2> <strong>You got it Wrong!</strong></h2>");
        $("#subwrapper").append("<h3> The Correct Answer is:" + " " + questions[game.currentQuestion].correctAnswer + "</h2>")
        if (game.currentQuestion == questions.length - 1) {
            setTimeout(game.result, 3 * 1000);
        } else {
            setTimeout(game.nextQuestion, 3 * 1000);
        }
    },
    rest: function () {
        game.currentQuestion = 0;
        game.counter = 0;
        game.correct = 0;
        game.incorrect = 0;
        game.unanswered = 0,
            //game.loadQuestion()
            $("#reset").click(function () {
                game.loadQuestion();
                console.log(reset)
            })
    },

};


$("#pause").on("click", function () {
    // pause.preventDefault();
    console.log("innnnnnnn");
    pauseBool = true;

});

$("#resume").on("click", function () {
    pauseBool = false;

})