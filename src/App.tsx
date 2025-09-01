import viteLogo from "/vite.svg";
import "./App.css";
import CanvasAnimation from "./CanvasAnimation.tsx";

function App() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <CanvasAnimation width={400} height={400} />
      </div>
    </>
  );
}

export default App;
