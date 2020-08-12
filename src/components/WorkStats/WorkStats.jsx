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
          <embed src="https://wakatime.com/share/@5b9312f1-d5d1-4f0f-b2fd-4cb7c5a6cec6/85647fe0-5681-42b8-9022-7cc7ccedba54.svg"></embed>
        </figure>

        <figure>
          <embed src="https://wakatime.com/share/@5b9312f1-d5d1-4f0f-b2fd-4cb7c5a6cec6/27001716-efe3-401d-89e2-a1887c0df4d6.svg"></embed>
        </figure>
        <div className="contrib-svg">
          <h6 className="github-heading">Github Contrib</h6>
          <div className="scroller">{console.log(typeof svg)}
            {renderHTML(
              svg
                .replaceAll("#ebedf0", "#222222")
                .replaceAll("#9be9a8", "#4fffa7")
                .replaceAll("#40c463", "#3DDC84")
                .replaceAll("#30a14e", "#008D41")
                .replaceAll("#216e39", "#00753b")
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkStats;
