import { useState } from "react";
import "./App.css";

function App() {
  const [isYes, setIsYes] = useState(false);

  return (
    <>
      {!isYes ? (
        <div className="bg__main">
          <div className="content">
            <h4 className="title">
              Hey My Goddess, Valentine's Day is Tomorrow, and I was wonderiing
              if you'd like to be my Valintine?
            </h4>
            <div className="botton__container">
              <button onClick={() => setIsYes(true)}>Yes</button>
              <button onClick={() => setIsYes(true)}>Yes</button>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg__sec">
          <div className="content">
            <h4 className="title_sec">THANK YOU MY LOVE, I LOVE YOU</h4>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
