import React from "react";
import Fade from "react-reveal/Fade";
import ReactHtmlParser from "react-html-parser";

export default function PageDetailDescription({ data }) {
  return (
    <main>
      <Fade bottom>
        <h4 className="mb-4">About The Place</h4>
        {ReactHtmlParser(data.description)}
      </Fade>

      <div className="row" style={{ marginTop: 30 }}>
        {data.features.map((feature, index) => {
          return (
            <Fade bottom delay={300 * index}>
              <div
                className="col-3"
                key={`feature-${index}`}
                style={{ marginBottom: 20 }}
              >
                <img
                  src={feature.imageUrl}
                  alt={feature.name}
                  className="d-block mb-2"
                />{" "}
                <span>{feature.qty}</span>{" "}
                <span className="text-gray-500 font-weight-light">
                  {feature.name}
                </span>
              </div>
            </Fade>
          );
        })}
      </div>
    </main>
  );
}
