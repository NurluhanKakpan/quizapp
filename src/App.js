import './App.scss';
import React, {useState} from "react";
import Quiz from "./components/Quiz";
import Answer from "./components/Answer";

const questions = [
    {
        title: "What is the capital of France?",
        answers: ["Paris", "Lyon", "Toulouse"],
        correctAnswer: 0
    },
    {
        title: "What is the capital of Germany?",
        answers: ["Munich", "Dortmund", "Berlin"],
        correctAnswer: 2
    },
    {
        title: "What is the capital of Kazakhstan?",
        answers: ["Nur-Sultan", "Astana", "Almaty"],
        correctAnswer: 1
    },
]


function App() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [result, setResult] = useState(0);
    const question = questions[currentQuestion];

    const number_of_questions = questions.length;

    const onClickAnswer = (answer) => {
        if (answer === question.correctAnswer){
            setResult(result + 1)
        }
        setCurrentQuestion(currentQuestion + 1)

    }

  return (
    <div className="wrapper">
        {

            currentQuestion ===questions.length ? <Answer result = {result} number_of_questions = {number_of_questions}  /> : <Quiz question={question} onClickAnswer={onClickAnswer}/>
        }

    </div>
  );
}

export default App;
