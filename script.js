//define obj for question entity
let questions = [{
    title: 'gato',
    alternatives: ['dog', 'cat', 'bird', 'fish'],
    correctAnswer: 1
}, {
    title: 'ave',
    alternatives: ['mouse', 'hamster', 'lizard', 'bird'],
    correctAnswer: 3
}, {
    title: 'rata',
    alternatives: ['cat', 'fish', 'rat', 'shark'],
    correctAnswer: 2
}, {
    title: 'mosca',
    alternatives: ['fly', 'puma', 'fish', 'dog'],
    correctAnswer: 0
}];

//new code
let app = {
    start: function () {
        this.currPosition = 0;
        this.score = 0;
        //get alternatives
        let alts = document.querySelectorAll('.alternative');
        //add event handlers
        alts.forEach((element, index) => {
            element.addEventListener('click', () => {
                //check correct answer
                this.checkAnswer(index);
            });
        });
        this.updateStats();
        //show first question
        this.showQuestion(questions[this.currPosition]);
    },

    showQuestion: function (q) {
        //keep track of current question
        this.currQuestion = q;
        //show question title
        let titleDiv = document.getElementById('title');
        titleDiv.textContent = q.title;

        //show alternatives
        let alts = document.querySelectorAll('.alternative');
        alts.forEach(function (element, index) {
            element.textContent = q.alternatives[index];
        });

    },

    checkAnswer: function (userSelected) {
        let currQuestion = questions[this.currPosition];
        if (this.currQuestion.correctAnswer == userSelected) {
            // correct
            console.log('correct');
            this.score++;
            this.showResult(true);
        } else {
            // not correct
            console.log('wrong');
            this.showResult(false);
        }

        this.updateStats();
        // increase position
        this.increasePosition();
        // show next question
        this.showQuestion(questions[this.currPosition]);
    },

    increasePosition: function () {
        // increases currPosition by 1
        this.currPosition++;
        // resets currPosition to 0 when end of array is reached
        if (this.currPosition == questions.length) {
            this.currPosition = 0;
        }
    },

    updateStats: function () {
        // select score div element
        let scoreDiv = document.getElementById('score');
        // modify score div element
        scoreDiv.textContent = `Your score: ${this.score}`;
    },

    showResult: function (isCorrect) {
        let resultDiv = document.getElementById('result');
        let result = '';
        // determine which result message to show
        if (isCorrect) {
            result = 'Correct Answer!';
        }
        else {
            // get the current question
            let currQuestion = questions[this.currPosition];
            // get correct answer (index)
            let correctAnswIndex = currQuestion.correctAnswer;
            // get correct answer (text)
            let correctAnswText = currQuestion.alternatives[correctAnswIndex];
            result = `Wrong! Correct answer: ${correctAnswText}`;
        }
        resultDiv.textContent = result;
    }
};

//modified code
app.start();

// new code
let btn = document.getElementById('btn');
btn.addEventListener('click', function () {
    console.log('Clicked!');
});
