export const Features = (props) => {
  return (
    <div id='features' className='text-center pd-5'>
      <div className='container'>
        <div className='col-md-10 col-md-offset-1 section-title'>
          <h2 data-aos="zoom-in-up">Services</h2>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className='col-xs-6 col-md-3' data-aos="zoom-in-up">
                  {' '}
                  <i className={d.icon}></i>
                  <h3 data-aos="zoom-in-up">{d.title}</h3>
                  <p data-aos="zoom-in-up">{d.text}</p>
                </div>
              ))
            : 'Loading...'}
        </div>
      </div>
    </div>
  )
}
