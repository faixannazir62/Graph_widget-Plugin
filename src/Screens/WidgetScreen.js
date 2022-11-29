import React, { useState } from "react";
import GraphComponent from "./Components/GraphComponent";

function WidgetScreen() {
  const [totalDays, setTotlaDays] = useState(7);
  const handleDuraton = (e) => {
    setTotlaDays(e.target.value);
  };
  return (
    <div className="main-c">
      <div className="inner-c title-nd-options">
        <div className="title">
          <h2>Graph Widget</h2>
        </div>
        <div className="options">
          <select name="duration" id="duraton" onChange={handleDuraton}>
            <option value="7" selected>
              Last 7 days
            </option>
            <option value="15"> Last 15 days</option>
            <option value="30"> Last 1 month</option>
          </select>
        </div>
      </div>
      <div className="inner-c graph-data">
        <GraphComponent totalDays={totalDays} />
      </div>
    </div>
  );
}

export default WidgetScreen;
