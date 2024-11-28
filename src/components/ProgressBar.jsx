function ProgressBar({ progress }) {
    return (
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
        <div 
          className="bg-indigo-600 h-2.5 rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        >
        </div>
      </div>
    );
  }
  
  export default ProgressBar;
  