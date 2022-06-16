import { Link } from "react-router-dom";

function App() {
  return (
    <div className="text-center selection:bg-green-900">
      <header className="flex min-h-screen flex-col items-center justify-center bg-[#282c34] text-white">
        <p className="py-10 text-5xl font-black text-transparent bg-gradient-to-r from-emerald-300 to-sky-300 bg-clip-text selection:bg-transparent">
          Vite + React + Typescript + Tailwindcss v3
        </p>
        <Link
          to={{ pathname: "/intro", hash: "#intro" }}
          className="my-6 rounded bg-gray-300 px-2 py-2 text-[#282C34] transition-all hover:bg-gray-200"
        >
          Vitawind Introduction
        </Link>
      </header>
    </div>
  );
}

export default App;
