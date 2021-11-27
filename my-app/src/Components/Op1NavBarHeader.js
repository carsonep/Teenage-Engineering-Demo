import React from "react";

function Op1NavBarHeader() {
  return (
    <div
      style={{
        padding: "0 4.6vw",
        color: "#a1a1a5",
        fontSize: "1vw",
        width: "97.5%",
      }}
      className="leading-tight font-light flex  justify-between"
    >
      <div className="flex flex-col">
        <span>portable synthesizer</span>
        <span>synthétiseur portable</span>
        <span>ポータブルシンセサイザー</span>
        <span>taschen synthesizer</span>
      </div>

      <div>
        <span>overview</span>
      </div>
      <div>
        <span>features</span>
      </div>
      <div>
        <span>modules</span>
      </div>
      <div>
        <span>accessories</span>
      </div>
      <div>
        <span>visit store</span>
      </div>
    </div>
  );
}

export default Op1NavBarHeader;
