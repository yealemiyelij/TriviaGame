$("#start").on("click", function () {
    // $("#sub wrapper").remove();

    for (var i = 0; i < questions.length; i++) {
        $("#sub wrapper").append('<h2>' + questions[i].questions + '</h2>');


    }

})

var questions = [{
        questions: "Which English Premier Leage club is the three times winner of UEFA Champions Leagues?",
        answers: ["Manchester City", "Chealsea", "Manchester United", "Liverpool"],
        correctAnswer: "manchester united"
    },
    {
        questions: "which club is named in the second-largest city of Portugal?",
        answers: ["FC Porto", "Braga", "Benefica", "Portimonense"],
        correctAnswer: "FC Porto"
    },
    {
        questions: "what is the offical working language of the Government of Ethiopa",
        answers: ["Oromiffa", "English", "Amharic", "Tigregna"],
        correctAnswer: "Amharic"
    },
    {
        questions: "which country in the world is the least in population size?",
        answers: ["China", "Zanzibar", "Vatican City", "Tuvalu"],
        correctAnswer: "Vatican City"
    },
    {
        questions: "which state of US named in the name of the President?",
        answers: ["Denver", "Washington DC", "Ohio", "Marryland"],
        correctAnswer: "Washington DC"
    },
    {
        questions: "Which state of US named to honor King Charles'wife Queen Henrietta Maria?",
        answers: ["Denver", "Washington DC", "Ohio", "Marryland"],
        correctAnswer: "Marryland"
    },

    {
        questions: "what is the The Frist State where Basketball is invented?",
        answers: ["Washington", "Marryland", "Massachusetts", "California"],
        correctAnswer: "Massachusetts"
    },
    {
        questions: "Which famous singer in US is known for reinventing a Hair Style?",
        answers: ["Beyonce", "Rihana", "Price", "Lady Gaga"],
        correctAnswer: "Rihana"
    },
    {
        questions: "who is officially named as 'Stefani Joanne Angelina Germanotta'?",
        answers: ["Taylor Swift", "Madona", "Selina Gomez", "Lady Gaga"],
        correctAnswer: "Lady Gaga"
    },

    {
        questions: "which interstate highway is the longest in USA?",
        answers: ["I-95", "I-94", "I-75", "I-90"],
        correctAnswer: "I-90"
    }
];