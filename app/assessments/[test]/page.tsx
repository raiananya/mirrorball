"use client";

import { assessments } from "@/constants/assessments";
import { useState } from "react";
import { useParams } from "next/navigation";

import Header from "@/components/Header";

const TestPage = () => {

  const params = useParams();
  const test = params.test as string;

  const assessment = assessments.find(a => a.id === test);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  if (!assessment) {
    return <div className="text-center mt-10 text-red-500">Test not found.</div>;
  }

  const handleAnswer = (value: number) => {
    setScore(prev => prev + value);

    if (currentQuestion < assessment.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const getResult = (score: number) => {
    if (score <= 5) return "Normal";
    if (score <= 10) return "Moderate";
    return "Severe";
};

  return (
    <div>
      <Header/>
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
      {!showResult ? (
        <div className="max-w-xl w-full bg-dark-400 rounded-lg p-6 shadow-lg space-y-4">
          <h2 className="text-2xl font-semibold">{assessment.name} Assessment</h2>
          <p>{assessment.questions[currentQuestion].question}</p>
          <div className="space-y-2">
            {assessment.questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className="block w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded"
                onClick={() => handleAnswer(option.value)}
              >
                {option.text}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-semibold">Result: {getResult(score)}</h2>
          <p className="text-lg">Your mental health condition is categorized as: 
   <span className="font-bold text-green-400"> {getResult(score)}</span>
</p>
          <button
            onClick={() => {
              setScore(0);
              setCurrentQuestion(0);
              setShowResult(false);
            }}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
          >
            Retake Test
          </button>
        </div>
      )}
    </div>
    </div>
    
  );
};

export default TestPage;
