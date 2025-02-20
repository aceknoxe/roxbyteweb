'use client';

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="relative h-20 w-20">
        <div className="absolute inset-0 animate-spin-slow rounded-full border-b-2 border-t-2 border-white"></div>
        <div className="absolute inset-2 animate-spin-reverse rounded-full border-b-2 border-t-2 border-purple-500"></div>
        <div className="absolute inset-4 animate-pulse rounded-full bg-gradient-to-r from-purple-500 to-blue-500 opacity-30"></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;