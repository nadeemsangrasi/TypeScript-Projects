var pBtm = document.querySelector("#pbtm");
var hit = document.querySelector("#hit");
var timerDiv = document.querySelector("#timer");
var scoreDiv = document.querySelector("#incScore");
var livesDiv = document.querySelector("#lives");
var timer = 60;
var score = 0;
var lives = 3;
livesDiv.innerHTML = lives.toString();
function main() {
    var makeBubble = function () {
        var clutter = "";
        for (var i = 0; i <= 132; i++) {
            var randomNum = Math.floor(Math.random() * 10);
            clutter += "<div class=\"bubble\">".concat(randomNum, "</div>");
        }
        pBtm.innerHTML = clutter;
    };
    makeBubble();
    var makeTimer = function () {
        var timerDiv = document.querySelector("#timer");
        setInterval(function () {
            if (timer > 0 && lives > 0) {
                timer--;
                timerDiv.innerHTML = timer.toString();
            }
            else {
                pBtm.innerHTML = "<h1> Game over  ".concat(score, " </h1>");
                hit.innerHTML = "0";
                scoreDiv.innerHTML = "0";
                timerDiv.innerHTML = "0";
                livesDiv.innerHTML = "0";
            }
        }, 1000);
    };
    makeTimer();
    var hits = function () {
        var random = Math.floor(Math.random() * 10);
        hit.innerHTML = random.toString();
    };
    hits();
    var manageScore = function () {
        return {
            addScore: function () {
                score += 10;
                scoreDiv.innerHTML = score.toString();
            },
            subScore: function () {
                if (score !== 0) {
                    score -= 10;
                    scoreDiv.innerHTML = score.toString();
                }
            },
        };
    };
    var addFunctionality = function () {
        pBtm.addEventListener("click", function (e) {
            e.preventDefault();
            var num = Number(e.target.innerText.trim());
            var hitNum = Number(hit.innerHTML.trim());
            if (hitNum === num && lives > 0) {
                hits();
                makeBubble();
                manageScore().addScore();
            }
            else {
                if (timer > 0 && lives > 0) {
                    lives -= 1;
                    hits();
                    makeBubble();
                    livesDiv.innerHTML = lives.toString();
                }
                manageScore().subScore();
            }
        });
    };
    addFunctionality();
}
main();
