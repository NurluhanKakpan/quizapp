import './components.scss';
const Quiz = ({question,onClickAnswer}) => {
    return (
        <div className="quizapp">
            <h1>Quiz</h1>
            <div className="quiz-container">
                <h1>{question.title}</h1>
                <ul>
                    {
                        question.answers.map((answer, index) => <li key={index} onClick={() =>onClickAnswer(index)} >{answer}</li> )
                    }
                </ul>
            </div>
        </div>
    )
}

export  default Quiz;
