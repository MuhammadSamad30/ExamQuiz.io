"use client";
import { useState, useEffect } from "react";
import { mcqs } from "../../data/mcqs";
import { CheckCircleIcon, XCircleIcon, Lightbulb } from "lucide-react";

type QuizSession = {
  shuffledMCQs: typeof mcqs;
  currentMCQs: typeof mcqs;
  answers: string[];
};

const QuizPage = () => {
  const [session, setSession] = useState<QuizSession>({
    shuffledMCQs: mcqs,
    currentMCQs: [],
    answers: new Array(30).fill(""),
  });
  const [showResults, setShowResults] = useState(false);
  const [incorrectAnswers, setIncorrectAnswers] = useState<{
    indexes: number[];
    questions: typeof mcqs;
  }>({ indexes: [], questions: [] });

  useEffect(() => {
    const savedSession = localStorage.getItem("quizSession");
    if (savedSession) {
      const parsed = JSON.parse(savedSession);
      setSession(parsed);
    } else {
      initializeNewSession();
    }
  }, []);

  const initializeNewSession = () => {
    const shuffled = [...mcqs].sort(() => Math.random() - 0.5);
    const current = shuffled.slice(0, 30);
    setSession({
      shuffledMCQs: shuffled,
      currentMCQs: current,
      answers: new Array(30).fill(""),
    });
  };

  const saveSession = (updatedSession?: Partial<QuizSession>) => {
    const sessionToSave = { ...session, ...updatedSession };
    localStorage.setItem("quizSession", JSON.stringify(sessionToSave));
  };

  const handleAnswerChange = (index: number, answer: string) => {
    const newAnswers = [...session.answers];
    newAnswers[index] = answer;
    setSession((prev) => ({ ...prev, answers: newAnswers }));
    saveSession({ answers: newAnswers });
  };

  const handleSubmit = () => {
    const wrongAnswers = session.currentMCQs.reduce(
      (acc, question, index) => {
        if (session.answers[index] !== question.answer) {
          acc.indexes.push(index);
          acc.questions.push(question);
        }
        return acc;
      },
      { indexes: [] as number[], questions: [] as typeof mcqs }
    );

    setIncorrectAnswers(wrongAnswers);
    setShowResults(true);
  };

  const handleRestart = () => {
    localStorage.removeItem("quizSession");
    initializeNewSession();
    setShowResults(false);
    setIncorrectAnswers({ indexes: [], questions: [] });
  };

  const calculateScore = () => {
    return session.currentMCQs.reduce((score, question, index) => {
      return session.answers[index] === question.answer ? score + 1 : score;
    }, 0);
  };

  const renderFeedbackMessage = () => {
    const score = calculateScore();
    const scoreRanges = [
      {
        max: 5,
        icon: XCircleIcon,
        color: "red",
        message: "You need more practice. Keep trying!",
      },
      {
        max: 15,
        icon: Lightbulb,
        color: "yellow",
        message: "Not bad! Aim higher!",
      },
      {
        max: 25,
        icon: CheckCircleIcon,
        color: "green",
        message: "Great job! Almost there!",
      },
      {
        max: 30,
        icon: CheckCircleIcon,
        color: "blue",
        message: "Excellent! Quiz master!",
      },
    ];

    const {
      icon: Icon,
      color,
      message,
    } = scoreRanges.find((range) => score < range.max) || scoreRanges[3];

    return (
      <>
        <Icon className={`text-${color}-500 w-12 h-12 mx-auto mb-4`} />
        <p className={`text-xl text-${color}-600 font-semibold text-center`}>
          {message}
        </p>
      </>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-200 p-4 flex items-center justify-center">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-2xl p-6 md:p-8">
        {showResults ? (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-blue-700 mb-4">
                Your Score: {calculateScore()} / 30
              </h2>
              {renderFeedbackMessage()}
            </div>

            {incorrectAnswers.indexes.length > 0 && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-red-600 text-center">
                  Mistakes Breakdown ({incorrectAnswers.indexes.length})
                </h3>
                <div className="grid gap-4 md:grid-cols-2">
                  {incorrectAnswers.questions.map((question, i) => (
                    <div
                      key={i}
                      className="p-4 bg-red-50 rounded-lg border-2 border-red-200"
                    >
                      <p className="font-semibold text-red-800 mb-2">
                        Question {incorrectAnswers.indexes[i] + 1}
                      </p>
                      <p className="text-red-600 mb-3">{question.question}</p>
                      <div className="space-y-2">
                        <p className="text-sm font-medium text-red-500">
                          Your Answer:{" "}
                          {session.answers[incorrectAnswers.indexes[i]]}
                        </p>
                        <p className="text-sm font-medium text-green-600">
                          Correct Answer: {question.answer}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="text-center">
              <button
                onClick={handleRestart}
                className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-3 rounded-full hover:scale-105 transition-transform shadow-lg"
              >
                Start New Quiz
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
              ExamQuiz.io
              <br />
              <span className="text-xl text-gray-600">
                Your Ultimate Assessment Platform
              </span>
              <hr className="mt-4 border-t-2 border-gray-200" />
            </h1>

            <div className="space-y-6">
              {session.currentMCQs.map((mcq, index) => (
                <div
                  key={index}
                  className="p-4 bg-gray-50 rounded-lg border-2 hover:border-blue-300"
                >
                  <p className="font-semibold text-purple-600 mb-3">
                    {index + 1}. {mcq.question}
                  </p>
                  <div className="space-y-2">
                    {mcq.options.map((option, idx) => (
                      <label
                        key={idx}
                        className="flex items-center p-3 bg-white rounded-lg border hover:border-blue-400 cursor-pointer transition-all"
                      >
                        <input
                          type="radio"
                          name={`question-${index}`}
                          value={option}
                          checked={session.answers[index] === option}
                          onChange={() => handleAnswerChange(index, option)}
                          className="mr-3 w-3 h-3 accent-yellow-500"
                        />
                        <span className="flex-1">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <button
                onClick={handleSubmit}
                className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-3 rounded-full hover:scale-105 transition-transform shadow-lg"
              >
                Submit Quiz
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizPage;
