import React from 'react';

const PageLoader = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] py-12">
      <div className="relative w-12 h-12">
        {/* Outer track */}
        <div className="absolute top-0 left-0 w-full h-full border-4 border-slate-200 rounded-full dark:border-slate-800"></div>
        {/* Spinning indicator using primary/secondary gradient colors */}
        <div className="absolute top-0 left-0 w-full h-full border-4 border-transparent border-t-[#6351ce] border-r-[#47c5f2] rounded-full animate-spin"></div>
      </div>
      <p className="mt-4 text-slate-500 font-medium tracking-wide text-sm animate-pulse">Loading...</p>
    </div>
  );
};

export default PageLoader;
