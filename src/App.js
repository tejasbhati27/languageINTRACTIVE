import React, { useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import "./App.css";

const languageData = {
  Hindi: [
    { name: "Sanskrit", value: 70, age: "3000+ years", words: ["Dharma", "Karma"], origin: "Ancient India" },
    { name: "Persian", value: 10, age: "1100 years", words: ["Bazaar", "Shaan"], origin: "Mughals" },
    { name: "Arabic", value: 10, age: "1400 years", words: ["Hukum", "Lazim"], origin: "Traders" },
    { name: "Other", value: 10, age: "-", words: ["-"], origin: "-" },
  ],
  Tamil: [
    { name: "Dravidian", value: 90, age: "2000+ years", words: ["Vannakam", "Thambi"], origin: "South India" },
    { name: "Sanskrit", value: 5, age: "3000+ years", words: ["Guru", "Mani"], origin: "Ancient India" },
    { name: "Other", value: 5, age: "-", words: ["-"], origin: "-" },
  ],
  Urdu: [
    { name: "Persian", value: 40, age: "1100 years", words: ["Ishq", "Mehfil"], origin: "Mughals" },
    { name: "Arabic", value: 30, age: "1400 years", words: ["Qalam", "Hakeem"], origin: "Traders" },
    { name: "Turkic", value: 20, age: "900 years", words: ["Khan", "Sipahi"], origin: "Turks" },
    { name: "Other", value: 10, age: "-", words: ["-"], origin: "-" },
  ],
};

const COLORS = ["#ff7300", "#0088FE", "#00C49F", "#FFBB28"];

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState("Hindi");
  const [hoveredSegment, setHoveredSegment] = useState(null);

  return (
    <div className="container">
      <h1>Interactive Language Composition</h1>
      <div className="language-selector">
        {Object.keys(languageData).map((lang) => (
          <button
            key={lang}
            className={`lang-btn ${selectedLanguage === lang ? "selected" : ""}`}
            onClick={() => setSelectedLanguage(lang)}
          >
            {lang}
          </button>
        ))}
      </div>
      <PieChart width={400} height={400}>
        <Pie
          data={languageData[selectedLanguage]}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={120}
          fill="#8884d8"
          onMouseEnter={(data) => setHoveredSegment(data)}
          onMouseLeave={() => setHoveredSegment(null)}
        >
          {languageData[selectedLanguage].map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
      {hoveredSegment && (
        <div className="hover-info">
          <h3>{hoveredSegment.name}</h3>
          <p><strong>Age:</strong> {hoveredSegment.age}</p>
          <p><strong>Words:</strong> {hoveredSegment.words.join(", ")}</p>
          <p><strong>Introduced by:</strong> {hoveredSegment.origin}</p>
        </div>
      )}
    </div>
  );
}

export default App;
