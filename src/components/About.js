import React, {useState}from "react";

export default function About() {

  return (

    <div className="container">
      <section className="py-5">
        <div className="container">
          <div className="text-center">
            <span className="text-muted">Our Story</span>
            <h2 className="display-5 fw-bold mb-3">About Us</h2>
          </div>
          <div className="row gx-5">
            <div className="col-md-6">
              <div className="lead text-center text-md-start">
                <p>
                  Lorem ipsum dolor, sit amet elit Quamnitm veniam dicta
                  architecto, quos id nemo minima nulla ducimus officii nulla
                  ducimus officiis! quos id nemo minima nulla ducimus officii
                  nulla ducimus officiis.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="lead text-center text-md-start">
                <p>
                  Lorem ipsum dolor, sit amet elit Quamnitm veniam dicta
                  architecto, quos id nemo minima nulla ducimus officii nulla
                  ducimus officiis Quamnitm veniam dicta architecto, quos id
                  nemo minima.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
