import { useEffect, useState } from "react";
import Card from "../card";
import { Grid} from "@mui/material"
import styled from "@emotion/styled";
import styles from '../../styles/Categories.module.css'
import { useRouter } from "next/router";


const AllCategories=()=>{
    const[categoriesData,setCategoriesData]=useState([]);
  
    const router=useRouter();
    const categoryRoute=router.query?.category;
    console.log(categoryRoute)
    
    const fetcCategoreis=async()=>{
        // const res=await fetch(`http://localhost:4000/blogs`)
        const res=await fetch(`http://localhost:4000/blogs/?category=${categoryRoute}`)
        const data=await res.json();
        // console.log(data)
        setCategoriesData(data.allCategoryData)
        
    }
   
        useEffect(()=>{
            fetcCategoreis();
        },[categoryRoute])
    
    // const fetchEachCategories=async()=>{
    //       const res=await fetch(`http://localhost:4000/blogs/?category=${categoryRoute}`)
    //       // const res=await fetch(`http://localhost:4000/blogs/?category=${categoryRoute}`)
    //       const data=await res.json();
    //       // console.log(data)
    //       setCategoriesData(data.allCategoryData)
          
    //   }

    //   useEffect(()=>{
    //     fetchEachCategories();
    // },[categoryRoute])

  return (
    <>
    {/* <div>AllCategories</div> */}
  
  <Grid container rowSpacing={3} columnSpacing={2} justifyContent="flex-start" alignItems="center">
    {
      categoriesData&&categoriesData.length>0 ?
        categoriesData.map(item=>(
          <Grid item lg={4} xs={3} sm={4} >
          <Card fetchData={item}/>
          </Grid>
        )
  ):<h1>no data to dispaly</h1>
  
    }
    </Grid>
    </>
    
  )
}

export default AllCategories