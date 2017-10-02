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

$(document).on("click", "#reset", function () {
    game.reset();
});

var questions = [{
        questions: "Which English Premier Leage club is the three times winner of UEFA Champions Leagues?",
        answers: ["Manchester City", "Chealsea", "Manchester United", "Liverpool"],
        correctAnswer: "Manchester united"
    },
    {
        questions: "Which club is named in the second-largest city of Portugal?",
        answers: ["FC Porto", "Braga", "Benefica", "Portimonense"],
        correctAnswer: "FC Porto"
    },
    {
        questions: "What is the offical working language of the Government of Ethiopa",
        answers: ["Oromiffa", "English", "Amharic", "Tigregna"],
        correctAnswer: "Amharic"
    },
    {
        questions: "Which country in the world is the least in population size?",
        answers: ["China", "Zanzibar", "Vatican City", "Tuvalu"],
        correctAnswer: "Vatican City"
    },
    {
        questions: "Which state of US named in the name of the President?",
        answers: ["Denver", "Washington DC", "Ohio", "Marryland"],
        correctAnswer: "Washington DC"
    },
    {
        questions: "Which state of US named to honor King Charles'wife Queen Henrietta Maria?",
        answers: ["Denver", "Washington DC", "Ohio", "Marryland"],
        correctAnswer: "Marryland"
    },

    {
        questions: "What is the The Frist State where Basketball is invented?",
        answers: ["Washington", "Marryland", "Massachusetts", "California"],
        correctAnswer: "Massachusetts"
    },
    {
        questions: "Which famous singer in US is known for reinventing a Hair Style?",
        answers: ["Beyonce", "Rihana", "Price", "Lady Gaga"],
        correctAnswer: "Rihana"
    },
    {
        questions: "Who is officially named as 'Stefani Joanne Angelina Germanotta'?",
        answers: ["Taylor Swift", "Madona", "Selina Gomez", "Lady Gaga"],
        correctAnswer: "Lady Gaga"
    },

    {
        questions: "Which interstate highway is the longest in USA?",
        answers: ["I-95", "I-94", "I-75", "I-90"],
        correctAnswer: "I-90"
    }
];

var game = {
    questions: questions,
    currentQuestion: 0,
    counter: 0,
    correct: 0,
    incorrect: 0,
    unanswered: 0,
    countDown: function () {
        game.counter--;
        $("#counter").html(game.counter);
        if (game.counter <= 0) {
            //console.log("Time Up");
            game.timeup();
        };
    },
    loadQuestion: function () {
        timer = setInterval(game.countDown, 1000);
        $("#subwrapper").html("<h2> Time Remaining is: <span id='counter'> 30 </span> Seconds</h2>");
        $("#subwrapper").append("<h2>" + questions[game.currentQuestion].questions + "</h2>");
        for (i = 0; i < questions[game.currentQuestion].answers.length; i++) {
            $("#subwrapper").append('<button class="answer-button" id= "button-' + i + '"data-name="' + questions[game.currentQuestion].answers[i] + '">' + questions[game.currentQuestion].answers[i] + '</button>');
        }

    },
    nextQuestion: function () {
        game.counter = 30;
        $("#counter").html(game.counter);
        game.currentQuestion++;
        game.loadQuestion();

    },
    timeup: function () {
        clearInterval(timer);
        game.unanswered++;
        $("#subwrapper").html("<h2>Out of Time</h2>");
        $("#subwrapper").append("<h3> The Correct Answer is:" + " " + questions[game.currentQuestion].correctAnswer + "</h3>")
        if (game.currentQuestion == questions.length - 1) {
            setTimeout(game.result, 3 * 1000);
        } else {
            setTimeout(game.nextQuestion, 3 * 1000);
        }
    },
    result: function () {
        clearInterval(timer);
        $("#subwrapper").html("<h2>All Done</h2>");
        $("#subwrapper").append("<h3>correct:" + game.correct + "</h3>");

        $("#subwrapper").append("<h3>incorrect:" + game.incorrect + "</h3>");
        $("#subwrapper").append("<h4>unanswered:" + game.unanswered + "</h4>");
        $("#subwrapper").append("<button id='reset'>reset</button>")
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
        $("#subwrapper").html("<h2> You got it right!</h2>");
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
        $("#subwrapper").html("<h2> You got it Wrong!</h2>");
        $("#subwrapper").append("<h3> The Correct Answer is:" + questions[game.currentQuestion].correctAnswer + "</h2>")
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
            game.loadQuestion()
    },
}