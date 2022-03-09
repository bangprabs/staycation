import React from 'react';
import Fade from 'react-reveal/Fade';
import CompletedIlustration from 'assets/images/ilc_success.jpg';

export default function Completed() {
  return (
    <Fade>
      <div className="container" style={{ marginBottom: 10 }}>
        <div className="row justify-content-center text-center">
          <div className="col-4">
            <img
              src={CompletedIlustration}
              alt="Completed checkout payment"
              className="img-fluid"
            />
            <p className="text-gray-500">
              We will inform you via email later once the transaction has been
              acepted
            </p>
          </div>
        </div>
      </div>
    </Fade>
  );
}
