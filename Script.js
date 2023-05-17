 const quizDB =[
     {
         question: "Q1: somthing?",
         a: "aaa",
         b: "bbb",
         c: "c",
         d: "d",
         ans: "ans4"
     },
     {
        question: "Q2: somthing1?",
        a: "aaa",
        b: "bbb",
        c: "c",
        d: "d",
        ans: "ans1" 
     },
     {
        question: "Q3: somthing2?",
        a: "aaa",
        b: "bbb",
        c: "c",
        d: "d",
        ans: "ans2" 
     },
     {
        question: "Q4: somthing3?",
        a: "aaa",
        b: "bbb",
        c: "c",
        d: "d",
        ans: "ans3" 
     },
     {
        question: "Q5: somthing4?",
        a: "aaa",
        b: "bbb",
        c: "c",
        d: "d",
        ans: "ans4" 
     },
     {
        question: "Q6: somthing5?",
        a: "aaa",
        b: "bbb",
        c: "c",
        d: "d",
        ans: "ans1" 
     },
 ];

 const question = document.querySelector('.question');
 const option1 =document.querySelector('#option1');
 const option2 =document.querySelector('#option2');
 const option3 =document.querySelector('#option3');
 const option4 =document.querySelector('#option4');
 const submit =document.querySelector('#submit');

 const answers = document.querySelectorAll('.answer');
 const showScore = document.querySelector('#showScore');

 let questionCount = 0;
 let score = 0;
const loadQuestion = () => {
    const questionList = quizDB[questionCount]
    question.innerHTML = questionList.question;


    option1.innerHTML = questionList.a
    option2.innerHTML = questionList.b  
    option3.innerHTML = questionList.c
    option4.innerHTML = questionList.d



}
loadQuestion();

const getCheckAnswer = () => {
    let answer;
    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }
        

    });
    return answer;

};
    const deselectAll = () => {
        answers.forEach((curAnsElem) => curAnsElem.checked = false);
    }

submit.addEventListener('click', ()=> {
     const checkedAnswer = getCheckAnswer();
     console.log(checkedAnswer);

     if(checkedAnswer == quizDB[questionCount].ans){
         score++;
     };

     questionCount++;
     deselectAll();
     if(questionCount < quizDB.length) {
         loadQuestion();
     } else{

        showScore.innerHTML =
        `<h3> You scored${score}/${quizDB.length} </h3>
        <button class="btn" onclick="location.reload()"> Play again </button>`;
  
        showScore.classList.remove('scoreArea');

     }
}); 
