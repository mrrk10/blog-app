import { useEffect, useState } from "react";
import { Box,Typography } from "@mui/material"
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import Header from "@/components/header";
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import Link from "next/link";

const Container=styled(Box)`
 margin:50px 100px;
 border
`
const Image=styled('img')`
    width:100%;
    height:50vh;

`
const Title=styled(Typography)`
  text-align:center;
  font-size:7vh;
  font-weight:bold;
`
const Author=styled(Typography)`
  color:#878787;
`
const Deleteicon=styled(DeleteIcon)`
border:1px solid #878787 ;
margin-right:10px;
border-radius:5px;
`


const EditIcon=styled(ModeEditIcon)`
border:1px solid #878787;
margin-right:10px;
border-radius:5px;

`

const ViewDetail = () => {
  const[categoriesData,setCategoriesData]=useState([]);
  const router=useRouter();
  // const{id}=router.query
  // console.log(id)
// console.log(router.query.id)


  const fetchCategoreis=async()=>{
   
      const res=await fetch(`http://localhost:4000/blogs/${router?.query?.id}`)
      const data=await res.json();
      // console.log(data)
      setCategoriesData(data.dataById)
    }

    
   
    useEffect(()=>{
      
        fetchCategoreis();
     
  },[])

  const handleDelete=async()=>{
        const res=await fetch(`http://localhost:4000/blogs/${router.query.id}`,{
          method:'DELETE'
        })

        const data=await res.json();
      if(data){
        router.push('/home');
      }
  }

  return (
    <>
<Header/>
<Container>
  <Image src={`/uploads/${categoriesData.pic}`}/>

  <Deleteicon style={{float:'right',color:'red'}} onClick={handleDelete}/>
  
  <Link href={`/updateDetails/${categoriesData._id}`}><EditIcon style={{float:"right"}} color="primary"/></Link>
  
 
  <Title>{categoriesData.title}</Title>
  <Author>Author:<span> </span><p style={{fontWeight:600,display:"inline-block"}}>{categoriesData.username}</p></Author>
  <Typography style={{float:"right" ,color:'#878787' }}>{new Date(categoriesData.createdAt).toDateString()}</Typography>
  
  <Typography style={{marginTop:'10px'}}>{categoriesData.description}</Typography>
</Container>
    </>
   
  )
}

export default ViewDetail;