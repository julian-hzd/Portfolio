import data from '../data/projects'
import Carousel from 'react-bootstrap/Carousel';
import React, { useState } from 'react';



export default function Projects() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div id="carousel-wrapper" >
            <Carousel
                fade
                activeIndex={index}
                onSelect={handleSelect}
                keyboard={true}
                id="flex"
            >
                {
                    data.map(
                        project => {
                            return (
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={project.image}
                                    />
                                    <Carousel.Caption>
                                        <h3>{project.title}</h3>
                                        <p>{project.description}</p>
                                        <p>{project.contributors}</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            )
                        }
                    )
                }
            </Carousel>
            )

        </div>
        )
}