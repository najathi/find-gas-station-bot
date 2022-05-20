import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import '../App.css'

export default function Slider() {
  return (
    <Carousel pause="hover" className="bg-dark">
      <Carousel.Item>
        <img
          src="https://dailyexpress.lk/wp-content/uploads/2021/11/Petrol-queue.jpg"
          fluid
        />
        <Carousel.Caption className="carousel-caption">
          <h2>Welcome to Gas Station Bot</h2>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://www.kuwaittimes.com/wp-content/uploads/2022/04/P8D.jpg"
          fluid
        />
        <Carousel.Caption className="carousel-caption">
          <h2>Lets Explore chatbot</h2>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://www.dailynews.lk/sites/default/files/news/2017/04/24/z_p01-CPC.jpg"
          fluid
        />
        <Carousel.Caption className="carousel-caption">
          <h2>Have Great Day !</h2>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}
