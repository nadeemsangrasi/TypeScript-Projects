let pBtm = document.querySelector("#pbtm") as HTMLDivElement;
let hit = document.querySelector("#hit") as HTMLDivElement;
let timerDiv = document.querySelector("#timer") as HTMLDivElement;
let scoreDiv = document.querySelector("#incScore") as HTMLDivElement;
let livesDiv = document.querySelector("#lives") as HTMLDivElement
let timer: number = 60;
let score: number = 0;
let lives : number = 3
livesDiv.innerHTML=lives.toString()
function main(): void {
  let makeBubble = (): void => {
    let clutter: string = "";
    for (let i = 0; i <= 132; i++) {
      let randomNum: number = Math.floor(Math.random() * 10);
      clutter += `<div class="bubble">${randomNum}</div>`;
    }
    pBtm.innerHTML = clutter;
  };
  makeBubble();

  let makeTimer = (): void => {
    let timerDiv = document.querySelector("#timer") as HTMLDivElement;

    setInterval((): void => {
      if (timer > 0 && lives>0) {
        timer--;
        timerDiv.innerHTML = timer.toString();
      } else {
        pBtm.innerHTML = `<h1> Game over  ${score} </h1>`;
        hit.innerHTML = "0";
        scoreDiv.innerHTML = "0";
        timerDiv.innerHTML="0"
        livesDiv.innerHTML="0"
      }
    }, 1000);
  };
  makeTimer();

  let hits = (): void => {
    let random: number = Math.floor(Math.random() * 10);
    hit.innerHTML = random.toString();
  };
  hits();

  interface ScoreObj {
    addScore: () => void;
    subScore: () => void;
  }
  let manageScore = (): ScoreObj => {
    return {
      addScore: () => {
        score += 10;
        scoreDiv.innerHTML = score.toString();
      },
      subScore: () => {
        if (score !== 0) {
          score -= 10;
          scoreDiv.innerHTML = score.toString();
        }
      },
    };
  };


let addFunctionality = (): void => {
    pBtm.addEventListener("click", (e): void => {
      e.preventDefault();
      let num: number = Number((<HTMLElement>e.target).innerText.trim());
      let hitNum: number = Number(hit.innerHTML.trim());
      if (hitNum === num && lives>0) {
        hits();
        makeBubble();
        manageScore().addScore();
      } else {
    
        if (timer > 0 && lives>0) {
          lives-=1
          hits();
          makeBubble();
          livesDiv.innerHTML=lives.toString()
        }
        manageScore().subScore();
      }
    });
  };

  
  addFunctionality();
}
main();
