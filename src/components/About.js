import React from "react";

export default function About(props) {

  return (
    <>
      <div className="container">
        <h1 className="my-3" style={{color: props.mode === "dark" ? "#ed9511" : "black"}}>About Me</h1>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={{color: "black", fontSize: 20,backgroundColor: props.mode === "dark" ? "rgb(245 148 148)" : "#e7f1ff"}}
              >
                <b> Hi! My name is Arghadeep Mandal</b>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={{color: props.mode === "dark" ? "#ed9511" : "black", backgroundColor:props.mode==="dark"?"rgb(1 7 26)":"white"}}>
                <strong>I am a Web Devoloper.</strong> I have also done some
                other stuffs. Like i have made a virtual assistant with python.
                 I have also made many projects with Python, among those my
                favourite on is the virtual Keyboard made with python with
                OpenCV Library. Apart from that ,I have a very keen interest in
                Android Devolopment and also have a very good knowledge of it.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
