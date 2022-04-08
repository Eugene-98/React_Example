import { Component } from "react"
import { renderMatches } from "react-router"
import { Carousel } from "react-bootstrap"
import lakeImg from '../assets/lake.jpg'
import sityImg from '../assets/sity.jpg'
import ravierImg from '../assets/ravier.jpg'

export default class CarouselBox extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img 
                        className="d-blog w-100"
                        src={lakeImg}
                        alt="Lake"
                    />
                    <Carousel.Caption>
                        <h3>Lake image</h3>
                        <p>Lorem ipsum, odio vivamus eget diam urna nibh tempus pharetra</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img 
                        className="d-blog w-100"
                        src={sityImg}
                        alt="Sity"
                    />
                    <Carousel.Caption>
                        <h3>Sity image</h3>
                        <p>Lorem ipsum, odio vivamus eget diam urna nibh tempus pharetra</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img 
                        className="d-blog w-100"
                        src={ravierImg}
                        alt="Ravier"
                    />
                    <Carousel.Caption>
                        <h3>Ravier image</h3>
                        <p>Lorem ipsum, odio vivamus eget diam urna nibh tempus pharetra</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}