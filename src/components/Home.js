// import React from 'react'

// export default function Home() {
//   return (
//     <div>Home</div>
//   )
// }


import React from 'react'
import imageCover from '../image/boyPlayinggame.jpg';
// import Contact from './Contact';
// import VirtualCard from './VirtualCard/VirtualCard';
import Games from './Games';
// import '../components/Style.css'

export default function Home() {
  return (
    <div>
      <div className="m-5 p-5">
        <div className="row d-flex justify-content-between align-items-center">
          <div className="leftBanner col-lg-6 mb-5">
            <h2 className=''>Welcome to Our Game Portal</h2>
            <p className='mb-5'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
            </p>
            <button>Play Now</button>
          </div>
          <div className="rightBanner col-lg-4">
            <img src={imageCover} alt="Game Image" className="img-fluid rounded" />
          </div>
        </div>
      </div>

      {/* Modern Video Playing Area */}
      <div className="my-5">
        <div className=" bg-primary text-white rounded d-flex justify-content-center overflow-hidden mx-auto p-5" style={{ maxWidth: '1200px' }}>
          <div className="d-flex justify-content-center align-items-center" style={{ width: '1200px', height: '450px' }}>
            <iframe
              width="1150"
              height="500"
              src="https://www.youtube.com/embed/your_video_id"
              title="YouTube Video"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>

        </div>
      </div>
      {/* Trending Games Section */}
      <Games />

      {/* Virtual Card Section */}
      <div className="m-5 p-5">
        <div className="row">
          <div className="card-body col-md-6 mt-5">
            <h1>Buy Virtual Card</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
            </p>
            <button className="btn btn-primary">Buy Now</button>
          </div>

          {/* Virtual Card Details */}
          <div className="col-md-6 pl-5">
            {/* <VirtualCard /> */}
          </div>
        </div>
      </div>

      {/* <Contact /> */}

    </div>
  )
}
