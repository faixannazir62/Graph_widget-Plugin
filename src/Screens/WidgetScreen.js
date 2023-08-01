import React, { useState, useEffect } from "react";
import GraphComponent from "./Components/GraphComponent";
import { __ } from "@wordpress/i18n";
function WidgetScreen() {
  const [apiData, setApiData] = useState([]);
  const [dataLoaded, seteDataLoaded] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);
  const [totalDays, setTotlaDays] = useState(7);
  var base_url = window.location.origin;
  useEffect(() => {
    // api data fetch
    //  If you want use this plugin on your localhost then change this fetch url accordingly e.g(fetch("https://example.com/?rest_route=/wp/v2/graphdata"))
    // if you are using this plugin on live website it will automatically get base url.
    fetch(base_url + "/?rest_route=/wp/v2/graphdata")
      .then((res) => res.json())
      .then((result) => {
        setApiData(result);
        seteDataLoaded(true);
        setErrorMsg(false);
      })
      .catch(() => {
        setErrorMsg(true);
        seteDataLoaded(false);
      });
  }, [totalDays]);
  // here data is sliced into daywise
  const SlicedData = apiData.slice(0, totalDays);
  // handle user selected options
  const handleDuraton = (e) => {
    setTotlaDays(e.target.value);
  };

  return (
    <div className="widget-box">
      <div className="inner-widget-box title-and-options-box">
        <div className="title-box">
          <h2 className="widget-title">{__("Graph Widget", "graph-widget")}</h2>
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
      <div className="inner-widget-box graph-data-box">
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
