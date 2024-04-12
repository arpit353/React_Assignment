import React from "react";
import "./Page3.css";

function Page3() {
  return (
    <div className="page3">
      <div className="container container-nomargin">
        <div className="row container-margin">
          <div className="col" id="head">
            <h4 className="heading1">We believe in <span className="heading2">diversity & inclusion</span></h4>
          </div>
          <div className="col" id="para">
            <p className="para_color">
              At CaSE we do not just accept difference — we celebrate it, we
              support it, and we thrive on it for the benefit of our employees,
              our services, our industry and our community. We are proud to be
              an equal opportunity employer. Guided by our values and beliefs,
              we foster an inclusive workplace culture where employees thrive
              because of their differences, not in spite of them.
            </p>
            <br></br>
            <p className="para_color">
              Our values and beliefs, we foster an inclusive workplace culture
              where employees thrive because of their differences, not in spite
              of them Our Commitment to reinventing the standard. With more than
              20 nationalities represented in our global workforce, we firmly
              believe that our ability to deliver high-quality results is fueled
              by our active efforts to embed diversity and inclusion. We
              recognise, respect, and strive to create an environment where
              employees can excel and feel a true sense of belonging.
            </p>
            <p className="para_color_strong">
              <strong style={{size:"100px",color:"white"}}>Some of our strategic initiatives include:</strong>
            </p>
          </div>
        </div>
        <div className="row row-format">
          <div className="col">
          <img src="./Group 1593.png" alt="images" className="image3"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page3;
