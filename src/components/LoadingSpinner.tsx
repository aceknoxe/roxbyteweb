'use client';

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="relative h-32 w-32 transform-gpu">
        {/* Outer rotating ring with gradient */}
        <div className="absolute inset-0 animate-spin-slow rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-[3px]">
          <div className="h-full w-full rounded-full bg-black"></div>
        </div>
        
        {/* Inner rotating elements */}
        <div className="absolute inset-2 animate-spin-reverse rounded-full border-[3px] border-transparent border-t-purple-400 border-r-blue-400 shadow-lg opacity-80"></div>
        <div className="absolute inset-4 animate-spin-slow rounded-full border-[3px] border-transparent border-t-blue-500 border-r-purple-500 shadow-lg opacity-90"></div>
        
        {/* Central pulsing core */}
        <div className="absolute inset-6 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 blur-[2px] animate-pulse"></div>
        <div className="absolute inset-8 rounded-full bg-gradient-to-tr from-purple-400 to-blue-500 blur-[1px] animate-pulse-fast"></div>
        
        {/* Floating particles */}
        <div className="absolute inset-0 animate-ping-slow rounded-full border border-blue-400/20"></div>
        <div className="absolute inset-2 animate-ping-reverse rounded-full border border-purple-400/20"></div>
        
        {/* Center dot */}
        <div className="absolute inset-[40%] rounded-full bg-white/30 blur-sm animate-pulse-fast"></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;