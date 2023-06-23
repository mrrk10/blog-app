import { Box,Typography } from "@mui/material"
import styled from "@emotion/styled";

const Container=styled(Box)`
  border:1px  solid #d3cede;
  border-radius:10px;
  text-align:center;
  & > p{
  
  }
`
const Image=styled('img')`
width:100%;
height:200px;;
`

const Card = ({fetchData}) => {
  return (
    <>
    <Container>
  
    <Image src={`/uploads/${fetchData?.pic}`}/>
      <Typography>{fetchData.categories}</Typography>
      <Typography>{fetchData.title}</Typography>
      <Typography>{fetchData.username}</Typography>
      {/* <Typography>{fetchData.description}</Typography> */}
      
    </Container>
    </>
  )
}

export default Card