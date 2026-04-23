

const Loading = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[50vh] space-y-4">
            {/* Animated Spinner */}
            <div className="relative flex items-center justify-center w-16 h-16">
                <div className="absolute inset-0 border-4 border-gray-200 dark:border-gray-800 rounded-full"></div>
                <div className="absolute inset-0 border-4 border-blue-500 rounded-full border-t-transparent animate-spin"></div>
            </div>

            {/* Pulsing Text */}
            <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-300 animate-pulse">
                Loading data...
            </h1>
        </div>
    );
};

export default Loading;   
