import React from "react";
import "./Page2.css"

function Page2() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-6" style={{color:"#6B6B6B"}}>
            <div className="headings">
            <h3 className="heading_1">We </h3> <h3 className="heading_2">stay connected</h3>
            </div>
            <h6 className="small_heading">Quarterly Business Updates</h6>
            <p>
              We strive to stay connected as a team through communication and
              collaboration. This materialises every quarter through our
              Quarterly Business Update events. These gatherings are immersive
              sessions where every team member, regardless of rank or tenure,
              comes together to contribute to our overarching business strategy,
              and stay connected. They are opportunities to learn from our
              seasoned leaders and to also share personal insights and
              achievements that can steer our collective future. In an
              ever-evolving engineering landscape, staying connected isn’t just
              a benefit—it’s essential.
            </p>
            <h6 className="small_heading">Industry Events & Networking</h6>
            <h6 className="small_heading">Associations Memberships</h6>
          </div>
          <div className="col-6">
            <img
              src="./Rectangle 39.png" alt="p" style={{ height: "800px", width: "640px" }}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page2;
