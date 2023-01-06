import React, { useState, useEffect } from "react";
import GraphComponent from "./Components/GraphComponent";
import { __ } from "@wordpress/i18n";
function WidgetScreen() {
  const [apiData, setApiData] = useState([]);
  const [dataLoaded, seteDataLoaded] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);
  const [totalDays, setTotlaDays] = useState(7);

  useEffect(() => {
    // api data fetch
    // change this url "http://localhost/wordpress" According to you website url "keep rest url as it is".
    // E.g "https://example.com/?rest_route=/wp/v2/graphdata"
    // ! Also change fetch path inside the " build folder > index.js  (you can find out the code between line no. 110 to 130)"
    const data = fetch(
      "http://localhost/wordpress/?rest_route=/wp/v2/graphdata"
    )
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
          <h2>{__("Graph Widget", "graph-widget")}</h2>
        </div>
        <div className="options">
          <select name="duration" id="duraton" onChange={handleDuraton}>
            <option value="7" selected>
              {__("Last 7 days", "graph-widget")}
            </option>
            <option value="15">{__("Last 15 days", "graph-widget")}</option>
            <option value="30">{__("Last 1 month", "graph-widget")}</option>
          </select>
        </div>
      </div>
      <div className="inner-c graph-data">
        {
          // show these messages, on data loading or api is not respondig or show data
          dataLoaded ? (
            <GraphComponent SlicedData={SlicedData} />
          ) : errorMsg ? (
            <p className="LoadingText">
              {__("Sorry,API is not Responding.", "graph-widget")}
            </p>
          ) : (
            <p className="LoadingText">
              {__(" Loading data...", "graph-widget")}
            </p>
          )
        }
      </div>
    </div>
  );
}

export default WidgetScreen;
