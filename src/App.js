import React, { useState } from "react";
// Make sure PieChart, Pie, Cell, Tooltip, Legend are imported
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
import CustomTooltip from './CustomTooltip'; // Import the custom tooltip
import "./App.css";

// Keep your languageData object the same as before
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
  // --- Add More Languages Here ---
  // Example: Bengali
  Bengali: [
    { name: "Sanskrit", value: 55, age: "3000+ years", words: ["Pita", "Aasha"], origin: "Ancient India" },
    { name: "Prakrit/Pali", value: 15, age: "2000+ years", words: ["Kotha", "Hobo"], origin: "Regional Evolution" },
    { name: "Persian", value: 12, age: "800+ years", words: ["Bazar", "Shobji"], origin: "Mughals/Sultanate" },
    { name: "Arabic", value: 8, age: "800+ years", words: ["Waqt", "Khabar"], origin: "Trade/Religion" },
    { name: "English/Other", value: 10, age: "200+ years", words: ["School", "Bus"], origin: "Colonial/Modern" }
  ],
  Marathi: [
     { name: "Sanskrit", value: 55, age: "3000+ years", words: ["Jeevan", "Shanti"], origin: "Ancient India" },
     { name: "Prakrit", value: 20, age: "2000+ years", words: ["Pahije", "Nako"], origin: "Maharashtri Prakrit" },
     { name: "Persian", value: 10, age: "700+ years", words: ["Daftar", "Kursi"], origin: "Sultanate/Mughals" },
     { name: "Arabic", value: 5, age: "700+ years", words: ["Waqt", "Hukum"], origin: "Trade/Religion" },
     { name: "Dravidian", value: 5, age: "Ancient", words: ["Bhakar"], origin: "Early contact"},
     { name: "English/Other", value: 5, age: "200+ years", words: ["Train", "Doctor"], origin: "Colonial/Modern" }
  ],
  // Add Telugu, Gujarati, Punjabi, Malayalam, Kannada etc. in the same format
  // Make sure the 'value' percentages for each language add up to 100!
};

const COLORS = ["#ff7300", "#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#AF19FF"]; // Added more colors

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState("Hindi");
  // REMOVED hoveredSegment state - Tooltip handles hover internally

  return (
    <div className="app-container"> {/* Changed class name */}
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

      {/* Make chart responsive and maybe slightly smaller */}
      <div className="chart-container">
         {/* Use ResponsiveContainer for better sizing */}
        <ResponsiveContainer width="100%" height={350}>
            <PieChart>
              <Pie
                data={languageData[selectedLanguage]}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={110} // Slightly smaller radius
                fill="#8884d8"
                labelLine={false} // Optional: hide label lines if labels are inside
                // Optional: Add labels inside slices
                // label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {languageData[selectedLanguage].map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              {/* Use the Custom Tooltip Here */}
              <Tooltip content={<CustomTooltip />} />
              <Legend />
            </PieChart>
        </ResponsiveContainer>
      </div>

      {/* REMOVED the separate hover-info div */}

    </div>
  );
}

export default App;
