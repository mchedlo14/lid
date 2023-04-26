import React from "react";

function App() {

  return (
    <div>
          <a href="leadership.docx.txt" download={'lid'}>
            <button className="cv-btn">Dow Lid</button>
          </a>
          <a href="exx.xlsx" download={'excel'}>
            <button className="cv-btn">Dow Excel</button>
          </a>
    </div>
  );
}

export default App;
