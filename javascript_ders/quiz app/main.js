var quizData = null
var quizAnswers = null
var total = 0
var userAnswers = [{},{},{},{}]

async function getData(){
    var question = await fetch('http://localhost:3000/quizData')
    quizData = await question.json()

    var answer = await fetch('http://localhost:3000/quizAnswer')
    quizAnswers = await answer.json()
    await setData()
}


function setData(){
    var data = ""
    quizData.forEach((response, index) => {
       data += `<div class="card">
                    <div class="card-body">
                    <h6>${response.id} - <span>${response.title}</span></h6>
                    <div class="answers">
                        <div class="card">
                            <ul class="list-group list-group-flush">
                            <li class="list-group-item cevaplar${index}" onclick="answer('cevaplar${index}', 0, ${index})">${response.answers.a}</li>
                            <li class="list-group-item cevaplar${index}" onclick="answer('cevaplar${index}', 1, ${index})">${response.answers.b}</li>
                            <li class="list-group-item cevaplar${index}" onclick="answer('cevaplar${index}', 2, ${index})">${response.answers.c}</li>
                            <li class="list-group-item cevaplar${index}" onclick="answer('cevaplar${index}', 3, ${index})">${response.answers.d}</li>
                            </ul>
                        </div>
                    </div>
                    </div>
              </div>`
    });
    document.getElementById('content').innerHTML = data
}

function answer(val, answerIndex, questionIndex){
    var selectedItem = document.getElementsByClassName(val)
    var tempArr = [selectedItem[0], selectedItem[1], selectedItem[2], selectedItem[3]]

    tempArr.forEach(element => {
        element.classList.remove("active")
    });
    tempArr[answerIndex].classList.add("active")

     // points
     let userAnswer = null
     if(answerIndex == 0) userAnswer = "a"
     if(answerIndex == 1) userAnswer = "b"
     if(answerIndex == 2) userAnswer = "c"
     if(answerIndex == 3) userAnswer = "d"

    userAnswers[questionIndex] = {question: questionIndex, answer: userAnswer}
 
}

function result(){
    total = 0
    userAnswers.forEach(element => {
        if(quizAnswers[element.question] == element.answer && element.answer != null ) {
            total = total + 25
        }
        document.getElementById('result').innerHTML = total
    });
}

// page load
getData()