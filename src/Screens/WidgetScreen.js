import React, { useState, useEffect } from "react";
import GraphComponent from "./Components/GraphComponent";

function WidgetScreen() {
  const [postData, setPostData] = useState({});
  const [totalDays, setTotlaDays] = useState(7);
  useEffect(() => {
    const data = fetch("https://api.publicapis.org/entries")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        setPostData(data.entries);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [totalDays]);
  console.log(postData);
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
