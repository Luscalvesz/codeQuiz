function logoIn() {
    var logo = document.querySelector(".header-box-logo")
    logo.src = "assets/imgs/logoActive.svg"
}
function logoOut() {
    var logo = document.querySelector(".header-box-logo")
    logo.src = "assets/imgs/logo.svg"
}
function callMenu() {
    var header = document.getElementById("menu")
    header.classList.toggle("activeMenu")
}
function aleatoryImg() {
    var img = document.getElementById("questImg")
    var imgsArray = ["batema.gif", "emogi.gif", "lenny.gif", "nazare.gif", "will.gif"]
    var newImg = imgsArray[Math.floor(Math.random() * imgsArray.length)];

    img.src = `./assets/imgs/quizImgs/${newImg}`
}
// function timer() {
//     var timer = document.getElementById('timer')
//     var time = 60
//     var timeInterval = setInterval(() => {
//         time = time - 1;
//         timer.innerHTML = time
//         if (timer.innerHTML == "0") {
//             timer.innerHTML = "Tempo esgotado!"
//             clearTimeout(timeInterval)
//             timer.classList.add("timeOff")
//         }

//     }, 1000);
// }

// document.getElementById("err").addEventListener("click", function () {
//     var errou = document.getElementById('errou')
//     errou.play()

//     var faustoArray = ["fausto.png", "fausto1.png", "fausto2.png"]
//     var newImg = faustoArray[Math.floor(Math.random() * faustoArray.length)];
//     var faustoImg = document.getElementById('fausto')
//     faustoImg.classList.toggle("fausTop")
//     faustoImg.src = `./assets/imgs/quizImgs/${newImg}`
// });









var questionsArr = [
        
    { "title": "Isso é css?", "desc": "Será que está certo?", "options":{"option1": "sim","option2": "não","option3": "talvez"},"correct": "sim","img": "question01.png" }, 
    { "title": "Isso é js?", "desc": "Será que está certo?", "options":{"option1": "sim","option2": "não","option3": "talvez"}, "correct": "não","img": "question02.png" }

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
    let lastQuestion = questionsArr[i]
    console.log(lastQuestion);

    localStorage.setItem("lastQuestion", JSON.stringify(lastQuestion));

    question.innerHTML = `
        <h3 class="main-box-title" id="questionTitle">${questionsArr[i].title}</h3>
        <p class="main-box-desc" id="questionDesc">${questionsArr[i].desc}</p>
        <img class="main-box-img" src="./assets/imgs/questionImgs/${questionsArr[i].img}" alt="img" id="questionImg">
        <div class="main-box-answers" id="questionOptions">
            <button class="main-box-answers-resp" id="err" onclick="resp(value)" value="${questionsArr[i].options.option1}">${questionsArr[i].options.option1}</button>
            <button class="main-box-answers-resp" onclick="resp(value)" value="${questionsArr[i].options.option2}">${questionsArr[i].options.option2}</button>
            <button class="main-box-answers-resp" onclick="resp(value)" value="${questionsArr[i].options.option3}">${questionsArr[i].options.option3}</button>
            <button class="main-box-answers-resp" onclick="resp(value)" value="${questionsArr[i].options.option4}">${questionsArr[i].options.option4}</button>
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

        alert("acertou");
        // time += 5
        // timer(time)
    }else{
        alert("errou");

        // time -= 5
        // timer(time)
    }
}


// window.onload = aleatoryImg(), timer(), question();
window.onload = question();