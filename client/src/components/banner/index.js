import styled from "@emotion/styled";
import { Box,Typography } from "@mui/material"
import Image from "next/image";
import Styles from '../../styles/Banner.module.css'

const Container=styled(Box)`


  
& > img{
box-shadow:10px 10px 5px #ccc;
height
width:'100%';
position:sticky;

    
  
}
`





const Banner = () => {
  return (
    <>
    <Container sx={{mt:8}}>
      
      <img
      src="/uploads/banner.jpeg"
      width="100%"
      height={150}

      alt="Picture of the author"
    
    />


     
   
    


    </Container>
    </>
  )
}

export default Banner;