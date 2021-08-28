var questionsArr = [
        
        { "title": "O css está correto?", "desc": "Será que o código abaixo está certo?", 
        "options":{"option1": "sim","option2": "não","option3": "talvez"},
        "correct": "option1",
        "img": "Nova-windblown.png" }, 
        { "title": "O js está correto?", "desc": "Será que o código abaixo está certo?", 
        "options":{"option1": "sim","option2": "não","option3": "talvez"}, 
        "correct": "option2",
        "img": "Nova-windblown.png" }
        
    ]


function question() {
    console.log("to aqui ",questionsArr); 

    let question = document.getElementById("question")
    let i
    let questionTitle = document.getElementById("questionTitle")
    let questionDesc = document.getElementById("questionDesc")
    let questionImg = document.getElementById("questionImg")
    let questionOptions = document.getElementById("questionOptions")

    i = Math.floor(Math.random() * questionsArr.length); 
    console.log(i);
    console.log( questionsArr.length);
    question.innerHTML = `
        <h3 class="question-title" id="questionTitle">${questionsArr[i].title}</h3>
        <p class="question-text" id="questionDesc">${questionsArr[i].desc}</p>
        <img src="${questionsArr[i].img}" alt="img" id="questionImg">
        <div class="question-respBox" id="questionOptions">
            <button class="question-respBox-item">${questionsArr[i].options.option1}</button>
            <button class="question-respBox-item">${questionsArr[i].options.option2}</button>
            <button class="question-respBox-item">${questionsArr[i].options.option3}</button>
            <button class="question-respBox-item">${questionsArr[i].options.option4}</button>
        </div>

    `

    // questionsArr.forEach(element => {
    //     console.log(element);
        
    // });






}