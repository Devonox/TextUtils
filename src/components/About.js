import React from "react";

export default function About(props) {
  return (
    <>
      <div className="container">
        <h1
          className="my-3"
          style={{ color: props.mode === "dark" ? "#ed9511" : "black" }}
        >
          About Me
        </h1>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={{
                  color: "black",
                  fontSize: 20,
                  backgroundColor:
                    props.mode === "dark" ? "rgb(245 148 148)" : "#e7f1ff",
                }}
              >
                <b>Analyze Your text</b>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div
                className="accordion-body"
                style={{
                  color: props.mode === "dark" ? "#ed9511" : "black",
                  backgroundColor:
                    props.mode === "dark" ? "rgb(1 7 26)" : "white",
                }}
              >
                Textutils gives you a way to analyze your text quickly and
                efficiently. Be it word count, character count or
              </div>
            </div>
          </div>
        </div>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={{
                  color: "black",
                  fontSize: 20,
                  backgroundColor:
                    props.mode === "dark" ? "rgb(245 148 148)" : "#e7f1ff",
                }}
              >
                <b>Free to use </b>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div
                className="accordion-body"
                style={{
                  color: props.mode === "dark" ? "#ed9511" : "black",
                  backgroundColor:
                    props.mode === "dark" ? "rgb(1 7 26)" : "white",
                }}
              >
                TextUtils is a free character counter tool that provides instant
                character count & word count statistics for a given text.
                TextUtils reports the number of words and characters. Thus it is
                suitable for writing text with word/ character limit.
              </div>
            </div>
          </div>
        </div>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={{
                  color: "black",
                  fontSize: 20,
                  backgroundColor:
                    props.mode === "dark" ? "rgb(245 148 148)" : "#e7f1ff",
                }}
              >
                <b>Browser Compatible </b>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div
                className="accordion-body"
                style={{
                  color: props.mode === "dark" ? "#ed9511" : "black",
                  backgroundColor:
                    props.mode === "dark" ? "rgb(1 7 26)" : "white",
                }}
              >
                This word counter software works in any web browsers such as
                Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to
                count characters in facebook, blog, books, excel document, pdf
                document, essays, etc.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
