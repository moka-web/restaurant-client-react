
import { Container,Box } from '@mui/system';
import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { CarouselItem } from './CarouselItem';
import "../css/carousel.css"
import mozoimg from "../assets/Mozo.png"

export const HomeCarousel = (props)=>{


    var items = [
        {   id:1,
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!",
            image:"https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {   id:2,
            name: "Random Name #2",
            description: "Hello World!",
            image:"https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
    ]
    //hardcode :)

    return (
        <Box className="carouselContainer">

            <Box className="mozoCall">
                <h5>¿alguna duda?</h5>
                <h1>llamar mozo</h1>
                <img className='mozo-img'   src={mozoimg} alt="" />
                
            </Box>
        
            <Carousel>
                {
                    items.map( (item) => <CarouselItem key={item.id} {...item} /> )
                }
            </Carousel>
            
        </Box>    
       
    )
}


