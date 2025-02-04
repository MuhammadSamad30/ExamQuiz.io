import React from "react";
import "animate.css";
import Link from "next/link";

const Home: React.FC = () => {
  return (
    <div
      id="container"
      className="min-h-screen flex flex-col justify-center items-center py-8 px-4"
    >
      <div className="flex flex-col justify-center items-center p-8 rounded-lg border-2 bg-[#632727c9]">
        <h1 className="text-4xl md:text-6xl font-bold text-center text-[#42a8d4] animate__animated animate__fadeIn">
          ExamQuiz.<span className="text-blue-600">io</span>
        </h1>

        <p className="text-base md:text-lg text-[#ffffff] mt-2 animate__animated animate__fadeIn animate__delay-1s">
          Developed by Muhammad Samad
        </p>

        <p className="text-center text-[#75e6ba] mt-4 font-medium max-w-xl text-sm md:text-base animate__animated animate__fadeIn animate__delay-2s">
          Welcome to Exam.io, a platform to test your knowledge. Start your quiz
          and challenge yourself with different levels of difficulty. Let&apos;s see
          how well you can do!
        </p>

        <Link href="/quiz" className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:bg-blue-700 animate__animated animate__fadeIn animate__delay-3s">
            Start Quiz
        </Link>
      </div>
    </div>
  );
};

export default Home;
