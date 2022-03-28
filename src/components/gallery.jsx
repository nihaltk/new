import { Image } from "./image";

export const Gallery = (props) => {
  return (
    <div id='portfolio' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2 data-aos="zoom-in-up">Gallery</h2>
          <p data-aos="zoom-in-up">
          Proin volutpat molestie magna, aliquet molestie risus ullamcorper quis.
          </p>
        </div>
        <div className='row'>
          <div className='portfolio-items' data-aos="zoom-in-up">
            {props.data
              ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className='col-sm-6 col-md-4 col-lg-4'>
                  <Image title={d.title} smallImage={d.smallImage} />
                </div>
              ))
              : 'Loading...'}
          </div>
        </div>
      </div>
    </div>
  )
}
