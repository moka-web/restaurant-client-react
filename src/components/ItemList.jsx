import axios from "axios"
import { useEffect, useState } from "react"
import { Container, display, maxWidth } from "@mui/system";
import { Item } from "./Item";
import { Box } from "@mui/material";
import "../css/listado.css"
import { useParams } from "react-router-dom";
import iconoBebida from "../assets/bebida.png"
import iconoEntrada from "../assets/entrada.png"
import iconoPostre from "../assets/postre.png"
import iconoPrincipal from "../assets/principal.png"

//https://rafalopez.000webhostapp.com/api/V1/MESA/PRODUCTOS

export const ItemList = ()=>{

    
    const [menu , setMenu]= useState([])
    const [category,setCategory] = useState("")
    
    useEffect(() => {
        try {
            axios.get("https://rafalopez.000webhostapp.com/api/V1/MESA/PRODUCTOS")
        .then(res=>{
            if (category == "") {
                const data = res.data;
                setMenu(data)
                console.log( data)
            }else{
                const data = res.data ;
                setMenu(data.filter(e=>e.categoria === category))
            }
            
        }
        ).catch(error =>{
            console.log(error.message)
        })
            
        } catch (error) {
            console.log(error.message)
        }
    },[category]); 


    const handleCategoryEvent = (string)=>{
        setCategory(string)
       
    }
    

        
        
    return(
        <>
        
            <Container style={{overflow:"scroll"}}  className="listContainer"  maxWidth="md">
            <Box sx={{display:"flex",}}> 
                <div className="buttonCartegoryContainer">
                    <button onClick={()=>{handleCategoryEvent("entrada")}} className='buttonCartegory' style={{backgroundImage:`url(${iconoEntrada})`}}></button>
                  
                    <span style={{color:"#ffff",textAlign:"center"}}>entrada</span>
                </div>
                <div  className="buttonCartegoryContainer">
                    <button  onClick={()=>{handleCategoryEvent("principal")}} className='buttonCartegory' style={{backgroundImage:`url(${iconoPrincipal})`}}></button>
                    <span style={{color:"#ffff",textAlign:"center"}}> principal</span>
                </div>
                <div  className="buttonCartegoryContainer">
                <button  onClick={()=>{handleCategoryEvent("postre")}} className='buttonCartegory' style={{backgroundImage:`url(${iconoPostre})`}}></button>
                <span style={{color:"#ffff",textAlign:"center"}}>postre</span>
                </div>
                <div  className="buttonCartegoryContainer">
                    <button  onClick={()=>{handleCategoryEvent("bebida")}} className='buttonCartegory' style={{backgroundImage:`url(${iconoBebida})`}} ></button>
                    <span style={{color:"#ffff",textAlign:"center"}}>bebida</span>
                </div>
            </Box>
                <Box className="list-scroll">

                    {menu.length > 0 ? menu.map((item)=>{
                        return(
                            
                            <Item  key={item.id} {...item}></Item>
                        )
                    } ) : <h1>Loading...</h1>}

                </Box>

                

            </Container>
       
        </>
    );

}