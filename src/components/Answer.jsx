import './components.scss'
const Answer = ({result,number_of_questions}) => {
    return(
        <div className="answer-block">
            <div className="answer-text">
                <h1> Your result is {result} points in {number_of_questions} questions </h1>
                <a href="/"><button>Try again</button></a>
            </div>
        </div>
    )
}
export default Answer;