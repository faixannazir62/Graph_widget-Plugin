import React, { useState, useEffect } from "react";
import GraphComponent from "./Components/GraphComponent";

function WidgetScreen() {
  const [postData, setPostData] = useState([]);
  const [totalDays, setTotlaDays] = useState(7);

  useEffect(() => {
    // api data fetch
    const data = fetch(
      "https://eodhistoricaldata.com/api/eod/MCD.US?from=2017-01-05&to=2017-02-10&period=d&fmt=json&api_token=demo"
    )
      .then((res) => res.json())
      .then((result) => {
        setPostData(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [totalDays]);
  // here data is sliced into daywise
  const SlicedData = postData.slice(0, totalDays);
  console.log(SlicedData);
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
        <GraphComponent SlicedData={SlicedData} />
      </div>
    </div>
  );
}

export default WidgetScreen;
