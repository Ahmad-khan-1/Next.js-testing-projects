import React from 'react';
import Link from 'next/link';

// Next.js 13+ Server Components receive searchParams as a prop
interface PageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function GenderPredictionPage({ searchParams }: PageProps) {
  // Await searchParams in Next.js 15+ if needed, but in 14 it's often sync. We'll handle it carefully.
  // We'll cast to standard object to be safe across Next.js versions.
  const sp = await searchParams;
  const name = sp?.name;
  let prediction = null;

  if (name) {
    const res = await fetch(`https://api.genderize.io/?name=${name}`);
    if (res.ok) {
      prediction = await res.json();
    }
  }

  // Determine styling based on gender
  const isMale = prediction?.gender === 'male';
  const isFemale = prediction?.gender === 'female';
  
  let gradientClass = 'from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900';
  if (isMale) gradientClass = 'from-blue-400 to-blue-600';
  if (isFemale) gradientClass = 'from-pink-400 to-pink-600';

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-br ${gradientClass} transition-colors duration-500`}>
      <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl w-full max-w-md text-center">
        <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">Gender Predictor</h1>
        
        <form className="flex flex-col space-y-4 mb-8" action="/gender" method="GET">
          <input 
            type="text" 
            name="name" 
            defaultValue={name || ''}
            placeholder="Enter a first name..." 
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-700 dark:text-white"
            required
          />
          <button 
            type="submit"
            className="bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 py-2 rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition"
          >
            Predict Gender
          </button>
        </form>

        {name && prediction && (
          <div className="mt-6 p-4 border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-700/50">
            <h2 className="text-xl font-semibold capitalize text-gray-800 dark:text-gray-100 mb-2">
              Name: {name}
            </h2>
            {prediction.gender ? (
              <>
                <p className="text-2xl font-bold mb-1">
                  Gender: <span className={isMale ? 'text-blue-500' : 'text-pink-500'}>{prediction.gender.charAt(0).toUpperCase() + prediction.gender.slice(1)}</span>
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  Confidence: <span className="font-semibold text-gray-900 dark:text-white">{(prediction.probability * 100).toFixed(0)}%</span>
                </p>
              </>
            ) : (
              <p className="text-red-500">Sorry, we couldn't predict a gender for this name.</p>
            )}
          </div>
        )}
        
        <div className="mt-8">
            <Link href="/" className="text-sm text-blue-500 hover:underline">
                &larr; Back to Home
            </Link>
        </div>
      </div>
    </div>
  );
}
