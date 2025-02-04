"use client";
import { useState, useEffect } from "react";
import { mcqs } from "../../data/mcqs";
import { CheckCircleIcon, XCircleIcon, Lightbulb } from "lucide-react";

const QuizPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>(new Array(30).fill(""));
  const [showResults, setShowResults] = useState(false);
  const [shuffledMCQs, setShuffledMCQs] = useState(mcqs);

  const shuffleQuestions = (questions: typeof mcqs) => {
    return [...questions].sort(() => Math.random() - 0.5);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedAnswers = localStorage.getItem("quizAnswers");
      if (savedAnswers) {
        setAnswers(JSON.parse(savedAnswers));
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("quizAnswers", JSON.stringify(answers));
    }
  }, [answers]);

  const handleAnswerChange = (index: number, answer: string) => {
    const newAnswers = [...answers];
    newAnswers[index] = answer;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setAnswers(new Array(30).fill(""));
    setShowResults(false);
    setShuffledMCQs(shuffleQuestions(mcqs));
    if (typeof window !== "undefined") {
      localStorage.removeItem("quizAnswers");
    }
  };

  const currentMCQs = shuffledMCQs.slice(currentIndex, currentIndex + 30);

  const calculateScore = () => {
    return shuffledMCQs.reduce((score, question, index) => {
      return answers[index] === question.answer ? score + 1 : score;
    }, 0);
  };

  const renderFeedbackMessage = () => {
    const score = calculateScore();
    if (score < 5) {
      return (
        <>
          <XCircleIcon className="text-red-500 w-12 h-12 mx-auto mb-4" />
          <p className="text-xl text-red-600 font-semibold">
            You need more practice. Keep trying, you&apos;ll get better!
          </p>
        </>
      );
    } else if (score < 15) {
      return (
        <>
          <Lightbulb className="text-yellow-500 w-12 h-12 mx-auto mb-4" />
          <p className="text-xl text-yellow-600 font-semibold">
            Not bad! Keep up the effort and aim for higher scores.
          </p>
        </>
      );
    } else if (score < 25) {
      return (
        <>
          <CheckCircleIcon className="text-green-500 w-12 h-12 mx-auto mb-4" />
          <p className="text-xl text-green-600 font-semibold">
            Great job! You&apos;re doing well. Just a few more to master it.
          </p>
        </>
      );
    } else {
      return (
        <>
          <CheckCircleIcon className="text-blue-500 w-12 h-12 mx-auto mb-4" />
          <p className="text-xl text-blue-600 font-semibold">
            Excellent! You&apos;re a quiz master. Keep it up!
          </p>
        </>
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-200 p-4 flex items-center justify-center">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-2xl p-8">
        {showResults ? (
          <div className="text-center">
            <h2 className="text-3xl font-bold text-blue-700 mb-6">
              Your Score: {calculateScore()} / 30
            </h2>
            {renderFeedbackMessage()}
            <button
              onClick={handleRestart}
              className="bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition-all shadow-lg mt-4"
            >
              Restart Quiz
            </button>
          </div>
        ) : (
          <>
            <h2 className="text-3xl font-bold text-center text-[#552525] mb-6">
              ExamQuiz.io <br /> Your Ultimate Quiz and Assessment Platform
              <hr />
            </h2>
            {currentMCQs.map((mcq, index) => (
              <div key={index} className="mb-8 border-2 p-4 rounded-lg">
                <p className="font-semibold mb-3 text-[#6141f3] text-lg">
                  {index + 1}. {mcq.question}
                </p>
                {mcq.options.map((option, idx) => (
                  <label
                    key={idx}
                    className="block bg-gray-50 p-3 rounded-lg border hover:border-blue-400 cursor-pointer transition-all mb-2"
                  >
                    <input
                      type="radio"
                      name={`question-${index}`}
                      value={option}
                      checked={answers[index] === option}
                      onChange={() => handleAnswerChange(index, option)}
                      className="mr-3 accent-green-500"
                    />
                    {option}
                  </label>
                ))}
              </div>
            ))}
            <div className="text-center mt-6">
              <button
                onClick={handleSubmit}
                className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 shadow-lg transition-all"
              >
                Submit Quiz
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default QuizPage;