import React, { useEffect, useState } from "react";
import renderHTML from "react-render-html";
import "./WorkStats.scss";

const WorkStats = () => {
  const [svg, setSvg] = useState("");

  useEffect(() => {
    async function fetchSvg() {
      const SERVER_URL = "https://productive-weekday-server.jugshaurya.now.sh";
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
        <figure>
          <embed src="https://wakatime.com/share/@5b9312f1-d5d1-4f0f-b2fd-4cb7c5a6cec6/30bd6c7c-ab53-47e3-8f88-425bca684314.svg"></embed>
        </figure>

        <figure>
          <embed src="https://wakatime.com/share/@5b9312f1-d5d1-4f0f-b2fd-4cb7c5a6cec6/c6b6194f-318b-41ed-8459-225e9b29c12f.svg"></embed>
        </figure>
        <div className="contrib-svg">
          <h6 className="github-heading">Github Contrib</h6>
          <div className="scroller">
            {renderHTML(
              svg
                .replace(/#ebedf0/g, "#111222")
                .replace(/#9be9a8/g, "#4fffa7")
                .replace(/#40c463/g, "#3DDC84")
                .replace(/#30a14e/g, "#008D41")
                .replace(/#216e39/g, "#00753b")
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkStats;
