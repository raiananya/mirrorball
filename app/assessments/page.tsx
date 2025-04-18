"use client";

import { assessments } from "@/constants/assessments";
import Link from "next/link";
import Header from "@/components/Header";

export default function AssessmentsPage(){
    return(
        <div>
        <Header/>
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-6 text-green-500">Available Assessments</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {assessments.map((test)=>(
                    <div className="p-4 border rounded-lg hover:shadow-lg bg-dark-400 cursor-pointer transition">
                            <h2 className="text-xl font-semibold">{test.name}</h2>
                            <p className="text-dark-600">{test.description}</p>
                            <Link href={`/assessments/${test.id}`}>
                                 <button className="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition">
                                    Take Test
                                 </button>
                            </Link>
                        </div>
                ))}
            </div>
        </div>
        </div>
        
    )
}