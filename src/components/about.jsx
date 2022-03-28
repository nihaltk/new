export const About = (props) => {
  return (
    <div id="about" className="pd-5">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6 abt-backed">
            {" "}
            <img src="img/about.jpg" data-aos="zoom-in-up" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2 data-aos="zoom-in-up">About Us</h2>
              <p data-aos="zoom-in-up">{props.data ? props.data.paragraph : "loading..."}</p>
              <h3 data-aos="zoom-in-up">What We Are ? </h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul data-aos="zoom-in-up">
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul data-aos="zoom-in-up">
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}> {d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
