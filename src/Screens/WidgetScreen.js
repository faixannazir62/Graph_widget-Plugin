import React, { useState, useEffect } from "react";
import GraphComponent from "./Components/GraphComponent";

function WidgetScreen() {
  const [apiData, setApiData] = useState([]);
  const [dataLoaded, seteDataLoaded] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);
  const [totalDays, setTotlaDays] = useState(7);

  useEffect(() => {
    // api data fetch
    const data = fetch("http://localhost/wordpress/wp-json/wp/v2/graphdata")
      .then((res) => res.json())
      .then((result) => {
        setApiData(result);
        seteDataLoaded(true);
        setErrorMsg(false);
      })
      .catch((error) => {
        setErrorMsg(true);
        seteDataLoaded(false);
        console.log(error);
      });
  }, [totalDays]);
  // here data is sliced into daywise
  const SlicedData = apiData.slice(0, totalDays);
  // handle user selected options
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
        {
          // show these messages, on data loading or api is not respondig or show data
          dataLoaded ? (
            <GraphComponent SlicedData={SlicedData} />
          ) : errorMsg ? (
            <p className="LoadingText">Sorry,API is not Responding.</p>
          ) : (
            <p className="LoadingText">Loading data...</p>
          )
        }
      </div>
    </div>
  );
}

export default WidgetScreen;
