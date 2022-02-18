import "./student-map-counter.scss";

//import React, { useEffect } from 'react';
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

import Fade from "react-reveal/Fade";
function StudentMapCounter() {
  function onLoad() {}

  return (
    <div id="" className="StudentMapCounter">
      <div className="container">
        <div className="visual-text">
          <h3 className="mb-0">
            We’re &nbsp;<span> inspiring </span>{" "}
            &nbsp; the next generation of global &nbsp;{" "}
            <span >STEM leaders</span>
          </h3>
        </div>
      </div>

      <div className="dot-map mt-50">
        <img src="images/dot-map.svg" />
        <div className="imageBoxWrap container">
          <div className="row">
            <Fade left>
              <div className="col-md-4">
                <div className="imageBox">
                  {/* <img src='images/students-new.svg' alt='students' /> */}
                  <h4>
                    <VisibilitySensor
                      partialVisibility
                      offset={{ bottom: 200 }}
                    >
                      {({ isVisible }) => (
                        <div style={{ height: 80 }}>
                          {isVisible ? (
                            <CountUp end={40000} duration={2.2} />
                          ) : null}
                        </div>
                      )}
                    </VisibilitySensor>
                  </h4>
                  <h6>Students</h6>
                </div>
              </div>
            </Fade>
            <Fade top>
              <div className="col-md-4">
                <div className="imageBox">
                  {/* <img src='images/countries-new.svg' alt='students' /> */}
                  <h4>
                    <VisibilitySensor
                      partialVisibility
                      offset={{ bottom: 200 }}
                    >
                      {({ isVisible }) => (
                        <div style={{ height: 80 }}>
                          {isVisible ? <CountUp end={125} /> : null}
                        </div>
                      )}
                    </VisibilitySensor>
                  </h4>
                  <h6>Countries</h6>
                </div>
              </div>
            </Fade>
            <Fade right>
              <div className="col-md-4">
                <div className="imageBox">
                  {/* <<img src='images/states-new.svg' alt='students' /> */}
                  <h4>
                    <VisibilitySensor
                      partialVisibility
                      offset={{ bottom: 200 }}
                    >
                      {({ isVisible }) => (
                        <div style={{ height: 80 }}>
                          {isVisible ? <CountUp end={50} /> : null}
                        </div>
                      )}
                    </VisibilitySensor>
                  </h4>
                  <h6>States</h6>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentMapCounter;
