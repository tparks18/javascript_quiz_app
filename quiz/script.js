var questions = [
    {
        prompt: "What is the Chicago Transit Authority's train system more commonly known as?\n(a) The Rail\n\
        (b) The Metra\n(c) The L",
        answer: "c"
    },
    {
        prompt: "How many starts are on Chicago's flag?\n(a) 4\n\
        (b) 3\n(c) 6",
        answer: "a"
    },
    {
        prompt: "What is Chicago's downtown area known as?\n(a) Downtown\n\
        (b) The Loop\n(c) City Center",
        answer: "b"
    },
    {
        prompt: "When was Chicago incorporated as a city?\n(a) 1837 \n\
        (b) 1779\n(c) 1673",
        answer: "a"
    },
    {
        prompt: "Chicago boasts the only public sculpture ever created by which 20th-century artist?\n(a) Alexander Calder\n\
        (b) Joan Miro\n(c) Picasso",
        answer: "c"
    }

]

var score = 0;
correctScore = []
incorrectScore = []

for(var i=0; i < questions.length; i++) {
   var response = window.prompt(questions[i].prompt);
   if(response == questions[i].answer) {
       score++;
        correctScore.push(questions[i])
       alert("Correct!")
   }
   else {
        incorrectScore.push(questions[i])
        alert("Incorrect!")
   }
}

alert("you got " + score + "/" + questions.length);
showResult()
rightQuestion()
wrongQuestion()

function showResult() {
   let result = document.getElementById("Result")
   result.innerHTML = score
}

function rightQuestion() {
   let rightQ = document.getElementById("correctQuestion")
    var listHTML = "<ol>";
        for(var i=0; i < correctScore.length; i++) {
            correctScore[i].prompt
            listHTML += "<li>" + correctScore[i].prompt + "</li>";
        }
        listHTML += "</ol>";
   rightQ.innerHTML = listHTML
}

function wrongQuestion() {
   let wrongQ = document.getElementById("incorrectQuestion")
   var listHTML = "<ol>";
        for(var i=0; i < incorrectScore.length; i++) {
            incorrectScore[i].prompt
            listHTML += "<li>" + incorrectScore[i].prompt + "</li>";
        }
        listHTML += "</ol>";
   wrongQ.innerHTML = listHTML
}

