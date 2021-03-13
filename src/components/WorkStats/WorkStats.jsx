import React, { useEffect, useState } from "react";
import renderHTML from "react-render-html";
import "./WorkStats.scss";

const WorkStats = () => {
  const [svg, setSvg] = useState("");

  useEffect(() => {
    async function fetchSvg() {
      const SERVER_URL = "https://productive-weekday-server.now.sh";
      const response = await fetch(`${SERVER_URL}/user/priyansh18?requireSvg=true`);
      const result = await response.text();
      setSvg(result);
    }
    fetchSvg();
  }, []);

  return (
    <div className="workstats-section" id="workstats">
      <section>
        <h4>WorkStats</h4>
      </section>
      <div className="container">
      <figure><embed src="https://wakatime.com/share/@5b9312f1-d5d1-4f0f-b2fd-4cb7c5a6cec6/e1439cd5-190f-44fb-9ebc-14267bea628b.svg"></embed></figure>

      <figure><embed src="https://wakatime.com/share/@5b9312f1-d5d1-4f0f-b2fd-4cb7c5a6cec6/c571c24f-fe72-4f0a-8c62-ebea3b9dea8c.svg"></embed></figure>
        <div className="contrib-svg">
          <h6 className="github-heading">Github Contrib</h6>
          <div className="scroller">
            {renderHTML(
              svg
                .replace(/var\(--color-calendar-graph-day-bg\)/g, "#222222")
                .replace(/var\(--color-calendar-graph-day-L1-bg\)/g, "#4fffa7")
                .replace(/var\(--color-calendar-graph-day-L2-bg\)/g, "#3DDC84")
                .replace(/var\(--color-calendar-graph-day-L3-bg\)/g, "#008D41")
                .replace(/var\(--color-calendar-graph-day-L4-bg\)/g, "#00753b")
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkStats;
