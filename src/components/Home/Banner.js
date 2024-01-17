import React from 'react'
import Carousel from 'react-material-ui-carousel'
import "./Banner.css";
const data = [
  "https://rukminim1.flixcart.com/flap/1680/280/image/1defb861e409319b.jpg?q=50",
  " https://rukminim1.flixcart.com/flap/1680/280/image/685712c6cefb3c02.jpg?q=50",
  "https://rukminim1.flixcart.com/flap/1680/280/image/8d4150cc4f3f967d.jpg?q=50",
  "https://rukminim1.flixcart.com/flap/1680/280/image/685712c6cefb3c02.jpg?q=50"
]
function Banner() {
  return (
    <>
      <Carousel
        className='carasousel'
        autoPlay={true}
        Animation="slide"
        indicators={false}
        navButtonsAlwaysVisible={true}
        cycleNavigation={true}
        navButtonsProps={{
          style: {
            backgroundColor: "#fff",
            color: "#494949 ",
            borderRadius: 0,
            marginTop: -22,
            height: "104px"
          }
        }}
      >
        {
          data.map((imag, index) => {
            return (
              <div key={index}>
                <img src={imag} alt='not found' key={index} className='banner_img' />
              </div>
            )
          })
        }
      </Carousel>
    </>
  )
}

export default Banner;
