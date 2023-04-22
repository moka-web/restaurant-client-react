
import { Container,Box } from '@mui/system';
import React, { useState } from 'react';
import Carousel from 'react-material-ui-carousel'
import { CarouselItem } from './CarouselItem';
import "../css/carousel.css"
import mozoimg from "../assets/Mozo.png"
import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';
import Swal from 'sweetalert2';

export const HomeCarousel = (props)=>{

    const [tableNum , setTableNum] = useState()

    

    const mozoCall = async ()=>{


        if (!tableNum  ) {

            const { value: number } = await Swal.fire({
                title: 'Input numero de mesa',
                input: 'select',
                inputOptions: {
                  'mesas': {
                    1: 1,
                    2: 2,
                    3: 3,
                    4: 4
                  }
                },
                inputLabel: 'numero de mesa',
                inputPlaceholder: 'ingrese su numero de mesa'
              })
              if (number) {
                setTableNum(number);

                fetch(`https://rafalopez.000webhostapp.com/api/V1/MESA/MOZO/${number}`)
                .then(response => response.json())
                .then(data => console.log(data))
                .catch(error => console.error(error))
                
              }
        }else{
            console.log(tableNum)
            fetch(`https://rafalopez.000webhostapp.com/api/V1/MESA/MOZO/${tableNum}`)
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error(error))
        }
       
    }


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

            <button onClick={()=>{mozoCall()}} className="mozoCall">

                <h5>¿alguna duda?</h5>
                <h1>llamar mozo</h1>
                <img className='mozo-img'   src={mozoimg} alt="" />
                
            </button>
        
            <Carousel>
                {
                    items.map( (item) => <CarouselItem key={item.id} {...item} /> )
                }
            </Carousel>
            
        </Box>    
       
    )
}


