var questionsArr = [
        
    { "title": "O css está correto?", "desc": "Será que o código abaixo está certo?", "options":{"option1": "sim","option2": "não","option3": "talvez"},"correct": "sim","img": "Nova-windblown.png" }, 
    { "title": "O js está correto?", "desc": "Será que o código abaixo está certo?", "options":{"option1": "sim","option2": "não","option3": "talvez"}, "correct": "não","img": "Nova-windblown.png" }

]
        
// let time = 60;


function timer(time) {
    let timer = document.getElementById("timer")

    setInterval(() => {
        timer.innerText=`Tempo restante: ${time}`
        time--
    }, 1000);
}

function question() {
    console.log("to aqui ",questionsArr); 

    let question = document.getElementById("question")
    let i
    let questionTitle = document.getElementById("questionTitle")
    let questionDesc = document.getElementById("questionDesc")
    let questionImg = document.getElementById("questionImg")
    let questionOptions = document.getElementById("questionOptions")

    i = Math.floor(Math.random() * questionsArr.length); 
    let lastQuestion = questionsArr[i]
    console.log(lastQuestion);

    localStorage.setItem("lastQuestion", JSON.stringify(lastQuestion));

    question.innerHTML = `
        <h3 class="question-title" id="questionTitle">${questionsArr[i].title}</h3>
        <p class="question-text" id="questionDesc">${questionsArr[i].desc}</p>
        <img src="${questionsArr[i].img}" alt="img" id="questionImg">
        <div class="question-respBox" id="questionOptions">
            <button class="question-respBox-item" onclick="resp(value)" value="${questionsArr[i].options.option1}">${questionsArr[i].options.option1}</button>
            <button class="question-respBox-item" onclick="resp(value)" value="${questionsArr[i].options.option2}">${questionsArr[i].options.option2}</button>
            <button class="question-respBox-item" onclick="resp(value)" value="${questionsArr[i].options.option3}">${questionsArr[i].options.option3}</button>
            <button class="question-respBox-item" onclick="resp(value)" value="${questionsArr[i].options.option4}">${questionsArr[i].options.option4}</button>
        </div>

    `

    // questionsArr.forEach(element => {
    //     console.log(element);
        
    // });

}
function resp(value) {
    var user = JSON.parse(localStorage.getItem('lastQuestion'));
    console.log(user);
    if (user.correct == value) {
        question()
        time += 5
        timer(time)
    }else{

        time -= 5
        timer(time)
    }
}


window.onload = question();