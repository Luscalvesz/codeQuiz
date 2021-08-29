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
function timer() {
    var timer = document.getElementById('timer')
    var time = 60
    var timeInterval = setInterval(() => {
        time = time - 1;
        timer.innerHTML = time
        if (timer.innerHTML == "0") {
            timer.innerHTML = "Tempo esgotado!"
            clearTimeout(timeInterval)
            timer.classList.add("timeOff")
        }

    }, 1000);
}

document.getElementById("err").addEventListener("click", function () {
    var errou = document.getElementById('errou')
    errou.play()

    var faustoArray = ["fausto.png", "fausto1.png", "fausto2.png"]
    var newImg = faustoArray[Math.floor(Math.random() * faustoArray.length)];
    var faustoImg = document.getElementById('fausto')
    faustoImg.classList.toggle("fausTop")
    faustoImg.src = `./assets/imgs/quizImgs/${newImg}`
});
window.onload = aleatoryImg(), timer()