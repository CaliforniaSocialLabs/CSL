import React, { useState, useEffect } from 'react';
import questionsData from '../Data/quiz.json';
import TopProgressBar from '../components/ProgressBar';

const Quiz = () => {
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState('');
    const [answeredQuestions, setAnsweredQuestions] = useState(0);
    const [score, setScore] = useState(0);
    const [quizComplete, setQuizComplete] = useState(false); 
  
    useEffect(() => {
      setQuestions(questionsData);
    }, []);
  
    const handleOptionChange = (e) => {
      setSelectedOption(e.target.value);
    };
  
    const handleNextQuestion = () => {
      if (selectedOption) {
        const currentQuestion = questions[currentQuestionIndex];
        const questionKey = `Q${currentQuestionIndex + 1}`;
        const currentQuestionData = currentQuestion[questionKey][0];
  
        if (selectedOption === currentQuestionData.correct_answer) {
          setScore((prevScore) => prevScore + 1); 
        }
  
        setAnsweredQuestions((prev) => prev + 1);
  
        if (currentQuestionIndex < questions.length - 1) {
          setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
          setSelectedOption(''); 
        } else {
          setQuizComplete(true);
        }
      }
    };
  
    const handleTryAgain = () => {
      setCurrentQuestionIndex(0);
      setSelectedOption('');
      setAnsweredQuestions(0);
      setScore(0);
      setQuizComplete(false);
    };
  
    if (questions.length === 0) {
      return <div>Loading questions...</div>;
    }
  
    if (currentQuestionIndex >= questions.length) {
      return <div>No more questions!</div>;
    }
  
    const currentQuestion = questions[currentQuestionIndex];
    const questionKey = `Q${currentQuestionIndex + 1}`;
    const question = currentQuestion[questionKey][0];
  
    const progressPercentage = Math.round((answeredQuestions / questions.length) * 100);
  
    if (quizComplete) {
      return (
        <div>
          <h2>Quiz Completed!</h2>
          <p>Your score: {score} out of {questions.length}</p>
          <p>Percentage: {((score / questions.length) * 100).toFixed(2)}%</p>
          {score < questions.length && (
            <button className='Quiz-button' onClick={handleTryAgain}>Try Again</button>
          )}
        </div>
      );
    }
  
    return (
      <>
      <div className='Quiz-container'>
        <TopProgressBar now={progressPercentage} />
        <h2>{question.question}</h2>
        <div className='Quiz-form-container'>
        <form>
          {Object.entries(question.choices).map(([key, value]) => (
            <div className='Quiz-choice' key={key}>
              <label>
                <input
                  type="radio"
                  value={key}
                  checked={selectedOption === key}
                  onChange={handleOptionChange}
                />
                {value}
              </label>
            </div>
          ))}
        </form>
        </div>
        <button className='Quiz-button' onClick={handleNextQuestion} disabled={!selectedOption}>
          Next
        </button>
      </div>
      <div>
      Question {currentQuestionIndex + 1} of {questions.length}
    </div>
    </>
    );
  };
  
  export default Quiz;