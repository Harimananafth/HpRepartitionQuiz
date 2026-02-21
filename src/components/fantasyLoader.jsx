export default function FantasyLoader() {
  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <div className="relative">
        <div className="w-32 h-32 border-4 border-yellow-400 rounded-full animate-spin"></div>
        <div className="absolute inset-0 w-32 h-32 border-4 border-purple-500 rounded-full animate-ping opacity-30"></div>
      </div>
    </div>
  );
}