import Game from "./app";

export default function Home() {
  return (
    <div className="tic-tak-toe">
      <nav className="flex items-center justify-between p-4 border-b border-gray-800">
        <div className="flex space-x-4"></div>
      </nav>

      {/* Game Header - added above your existing game */}
      <header className="text-center py-8">
        <h1 className="text-4xl font-bold text-red-600 mb-2">TIC-TAC-TOE</h1>
        <p className="text-gray-300">Let’s Play Tic-Tac-Toe!</p>
      </header>

      {/* Your existing game - unchanged */}
      <div className="container mx-auto px-4 pb-12">
        <Game />
      </div>
    </div>
  );
}
