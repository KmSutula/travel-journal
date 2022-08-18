import React from "react";
import Entry from "./components/Entry.js";
import Nav from "./components/Nav.js";
import data from "./data";
import "./style.css";

export default function App() {
  const entries = data.map((entry) => {
    return (
      <Entry
        key={entry.id}
        title={entry.title}
        location={entry.location}
        googleMapsUrl={entry.googleMapsUrl}
        startDate={entry.startDate}
        endDate={entry.endDate}
        description={entry.description}
        imageUrl={entry.imageUrl}
      />
    );
  });

  return (
    <div>
      <Nav />
      {entries}
    </div>
  );
}
console.log(data);
