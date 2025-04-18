"use client";

import Link from "next/link";
import { assessments } from "@/constants/assessments";

const AssessmentList = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 space-y-6">
      <h1 className="text-3xl font-semibold text-center">Available Assessments</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl">
        {assessments.map((assessment) => (
          <Link
            key={assessment.id}
            href={`/assessments/${assessment.id}`}
            className="bg-dark-400 hover:bg-dark-300 transition rounded-xl shadow-lg p-6 flex flex-col items-start space-y-2"
          >
            <h2 className="text-xl font-semibold">{assessment.name}</h2>
            <p className="text-sm text-muted-foreground">{assessment.description}</p>
            <span className="mt-auto inline-block bg-green-500 text-white px-3 py-1 rounded text-xs">
              Start Assessment
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AssessmentList;
