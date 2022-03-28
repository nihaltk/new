export const Testimonials = (props) => {
  return (
    <div id='testimonials'>


      <div className="testim pd-5">
        <div className="container">
          <div className='section-title text-center'>
            <h2 data-aos="zoom-in-up">What our clients say</h2>
          </div>
          <div className="testim-content" data-aos="zoom-in-up">
            {props.data
              ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="testim-box" >
                  <p>"{d.text}"</p>
                  <div className="testim-box-content">
                    <div className='testimonial-image' data-aos="zoom-in-up" >
                      {' '}
                      <img src={d.img} alt='' />{' '}
                    </div>
                    <h3 data-aos="zoom-in-up"> - {d.name}</h3>
                  </div>
                </div>

              ))
              : 'loading'}
          </div>

        </div>

      </div>


    </div>
  )
}


{/* <div className='row'>
{props.data
  ? props.data.map((d, i) => (
      <div key={`${d.name}-${i}`} className='col-md-4'>
        <div className='testimonial'>
          <div className='testimonial-image'>
            {' '}
            <img src={d.img} alt='' />{' '}
          </div>
          <div className='testimonial-content'>
            <p>"{d.text}"</p>
            <div className='testimonial-meta'> - {d.name} </div>
          </div>
        </div>
      </div>
    ))
  : 'loading'}
</div> */}