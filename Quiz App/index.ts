<<<<<<< HEAD
type Questions={
 Q:string;
A:string;
B:string;
C:string;
D:string;
Correct:string
}


let Question : Questions[] = [
    {
        "Q":"What is capital of Pakistan",
        "A":"dehli",
        "B":"islamabad",
        "C":"dhaka",
        "D":"none",
        "Correct":"B"
    },
    {
        "Q":"What is capital of India",
        "A":"islamabad",
        "B":"dhaka",
        "C":"dehli",
        "D":"none",
        "Correct":"C"
    },
    {
        "Q":"What is capital of Bangladesh",
        "A":"islamabad",
        "B":"dehli",
        "C":"none",
        "D":"dhaka",
        "Correct":"D"
    },
    {
        "Q":"What is full name of pakistan",
        "A":"Islamic republic of Pakistan",
        "B":"islamia pakistan",
        "C":"islamabad pakistan",
        "D":"none",
        "Correct":"A"
    }

]


let index : number = 0
let correct = document.querySelector("#correct h1") as HTMLHeadingElement
let wrong = document.querySelector("#wrong h1") as HTMLHeadingElement
let correctCounter:number =0
let wrongCounter:number =0
function checkAnswer(Question:Questions[]):void{
    let btns = document.querySelectorAll(".checkBtn") as NodeListOf<HTMLButtonElement>
    let correctElem:HTMLButtonElement;
    let click = 0
    btns.forEach((elem:HTMLButtonElement)=>{
            function matchAnswer(){
                if(click==0){
                    if(elem.innerHTML===Question[index].Correct){
                        let parent = elem.parentElement as HTMLElement
                        parent.style.backgroundColor="rgb(23 205 130)"
                        correctCounter++
                        correct.innerHTML=`Correct : ${correctCounter}`
                    }
                    else{
                        let parent = elem.parentElement as HTMLElement
                        let correctElemparent = correctElem.parentElement as HTMLElement
                        parent.style.backgroundColor="rgb(255 108 121)"
                        correctElemparent.style.backgroundColor="rgb(23 205 130)"
                        wrongCounter++
                        wrong.innerHTML=`Wrong : ${wrongCounter}`
                        
                    }

                }
                else{
                    elem.removeEventListener("click",matchAnswer)
                }
                click++
                
                
               
            
            }
            elem.addEventListener("click",matchAnswer)
        
        
if(elem.innerHTML===Question[index].Correct){
correctElem=elem
}

    })
    
    

}   

function addQuestions(Question:Questions[]){
    let QuestionContainer = document.querySelector("#page-1 .container") as HTMLElement
    QuestionContainer.innerHTML=`
    <h3>${index+1}.${Question[index].Q} </h3>
    <div class="options">
    <div class="option">
         <button class="checkBtn">A</button> <Span>${Question[index].A}</Span>
     </div>
     <div class="option">
         <button class="checkBtn" >B</button> <Span>${Question[index].B}</Span>
     </div>
     <div class="option">
         <button class="checkBtn" >C</button> <Span>${Question[index].C}</Span>
     </div>
     <div class="option">
     <button class="checkBtn" >D</button> <Span>${Question[index].D}</Span>
     </div>
    </div>`

    
}
addQuestions(Question)
checkAnswer(Question)

function nextQuestion(){
    let nextBtn =  document.querySelector("#nextBtn") as HTMLButtonElement
    nextBtn.addEventListener("click",()=>{
        if(index<Question.length-1)
        index++
    addQuestions(Question)
    checkAnswer(Question)
    
})

}
nextQuestion()
function priviousQuestion(){
    let preBtn =  document.querySelector("#preBtn") as HTMLButtonElement
    preBtn.addEventListener("click",()=>{
        if(index>0){
            index--
            addQuestions(Question)
            
        }
    })

}
=======
type Questions={
 Q:string;
A:string;
B:string;
C:string;
D:string;
Correct:string
}


let Question : Questions[] = [
    {
        "Q":"What is capital of Pakistan",
        "A":"dehli",
        "B":"islamabad",
        "C":"dhaka",
        "D":"none",
        "Correct":"B"
    },
    {
        "Q":"What is capital of India",
        "A":"islamabad",
        "B":"dhaka",
        "C":"dehli",
        "D":"none",
        "Correct":"C"
    },
    {
        "Q":"What is capital of Bangladesh",
        "A":"islamabad",
        "B":"dehli",
        "C":"none",
        "D":"dhaka",
        "Correct":"D"
    },
    {
        "Q":"What is full name of pakistan",
        "A":"Islamic republic of Pakistan",
        "B":"islamia pakistan",
        "C":"islamabad pakistan",
        "D":"none",
        "Correct":"A"
    }

]


let index : number = 0
let correct = document.querySelector("#correct h1") as HTMLHeadingElement
let wrong = document.querySelector("#wrong h1") as HTMLHeadingElement
let correctCounter:number =0
let wrongCounter:number =0
function checkAnswer(Question:Questions[]):void{
    let btns = document.querySelectorAll(".checkBtn") as NodeListOf<HTMLButtonElement>
    let correctElem:HTMLButtonElement;
    let click = 0
    btns.forEach((elem:HTMLButtonElement)=>{
            function matchAnswer(){
                if(click==0){
                    if(elem.innerHTML===Question[index].Correct){
                        let parent = elem.parentElement as HTMLElement
                        parent.style.backgroundColor="rgb(23 205 130)"
                        correctCounter++
                        correct.innerHTML=`Correct : ${correctCounter}`
                    }
                    else{
                        let parent = elem.parentElement as HTMLElement
                        let correctElemparent = correctElem.parentElement as HTMLElement
                        parent.style.backgroundColor="rgb(255 108 121)"
                        correctElemparent.style.backgroundColor="rgb(23 205 130)"
                        wrongCounter++
                        wrong.innerHTML=`Wrong : ${wrongCounter}`
                        
                    }

                }
                else{
                    elem.removeEventListener("click",matchAnswer)
                }
                click++
                
                
               
            
            }
            elem.addEventListener("click",matchAnswer)
        
        
if(elem.innerHTML===Question[index].Correct){
correctElem=elem
}

    })
    
    

}   

function addQuestions(Question:Questions[]){
    let QuestionContainer = document.querySelector("#page-1 .container") as HTMLElement
    QuestionContainer.innerHTML=`
    <h3>${index+1}.${Question[index].Q} </h3>
    <div class="options">
    <div class="option">
         <button class="checkBtn">A</button> <Span>${Question[index].A}</Span>
     </div>
     <div class="option">
         <button class="checkBtn" >B</button> <Span>${Question[index].B}</Span>
     </div>
     <div class="option">
         <button class="checkBtn" >C</button> <Span>${Question[index].C}</Span>
     </div>
     <div class="option">
     <button class="checkBtn" >D</button> <Span>${Question[index].D}</Span>
     </div>
    </div>`

    
}
addQuestions(Question)
checkAnswer(Question)

function nextQuestion(){
    let nextBtn =  document.querySelector("#nextBtn") as HTMLButtonElement
    nextBtn.addEventListener("click",()=>{
        if(index<Question.length-1)
        index++
    addQuestions(Question)
    checkAnswer(Question)
    
})

}
nextQuestion()
function priviousQuestion(){
    let preBtn =  document.querySelector("#preBtn") as HTMLButtonElement
    preBtn.addEventListener("click",()=>{
        if(index>0){
            index--
            addQuestions(Question)
            
        }
    })

}
>>>>>>> 6b70cfbcce2da265b8e716a40d6a23b5e3b75f8a
priviousQuestion()