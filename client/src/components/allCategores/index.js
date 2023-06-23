import { useEffect, useState } from "react";
import Card from "../card";
import { Grid} from "@mui/material"
import Link from "next/link";
// import { useRouter } from "next/router";
// import { useSearchParams } from 'next/navigation'


const AllCategories=()=>{
    const[categoriesData,setCategoriesData]=useState([]);
  
    // const router=useRouter();
    // console.log(router.asPath)
    // const categoryRoute=router.query?.category;
    // console.log(categoryRoute)
    // const searchParams = useSearchParams()
    // const categoryRoute = searchParams.get('category')
    // console.log(category)


    const fetcCategoreis=async()=>{
      const res=await fetch(`http://localhost:4000/blogs`)
        const data=await res.json();
        // console.log(data)
        setCategoriesData(data.allCategoryData)
      }


        // if(categoryRoute!='null'){
        //   const res=await fetch(`http://localhost:4000/blogs?category=${categoryRoute}`)
        //   const data=await res.json();
        //   // console.log(data)
        //   setCategoriesData(data.allCategoryData)
        // }
        // else{
        //   const res=await fetch(`http://localhost:4000/blogs`)
        //   const data=await res.json();
        //   // console.log(data)
        //   setCategoriesData(data.allCategoryData)
        // }
       
        
    
   
        useEffect(()=>{
            fetcCategoreis();
        },[])
    
  

  return (
    <>
    {/* <div>AllCategories</div> */}
  
  <Grid container rowSpacing={3} columnSpacing={2} justifyContent="flex-start" alignItems="center">
    {
      categoriesData&&categoriesData.length>0 ?
        categoriesData.map(item=>(
          <Grid item lg={4} xs={3} sm={4} >
      <Link href={`/viewDetails/${[item._id]}`} style={{textDecoration:'none',color:"inherit" }}> <Card fetchData={item}/></Link>   
          </Grid>
        )
  ):<h1>no data to dispaly</h1>
  
    }
    </Grid>
    </>
    
  )
}

export default AllCategories