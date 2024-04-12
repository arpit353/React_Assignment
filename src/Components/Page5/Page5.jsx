import React from "react";
import "./Page5.css";

function Page5() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="heading">
              <h1 className="part1">Employee</h1>
              <h1 className="part2"> Appreciation Program</h1>
            </div>

            <p>
              Our Employee Appreciation Program is tailored to honor the ongoing
              commitment and efforts of our long-serving team members. Our 5
              Year Club and 10 Year Club are special milestones within this
              program, celebrating employees who have dedicated half a decade or
              a full decade to our company mission. Each year, members of these
              clubs are invited to annual events held at select, memorable
              locations, reflecting our gratitude and recognition of their
              unwavering dedication. It's our way of saying thank you and
              ensuring that every significant chapter in our collective journey
              is celebrated with the grandeur it deserves
            </p>
          </div>
          <div class="col page5-col">
            <img src="./Rectangle 29.png" className="img1" alt="img1" />
          </div>
        </div>
        <div class="row">
          <div class="col">
            <img src="./Rectangle 30.png" className="img2" alt="img2" />
          </div>
          <div class="col">
            <img src="./Rectangle 31.png" className="img3" alt="img3" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page5;
