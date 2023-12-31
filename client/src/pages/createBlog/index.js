import { useState } from "react"
import { Box,styled } from "@mui/material"
import Image from "next/image"
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import TextareaAutosize from '@mui/base/TextareaAutosize';
import Styles from '../../styles/formik_blog.module.css'
import { useSelector } from "react-redux";
import {  message } from 'antd';
import { useRouter } from 'next/router'
import Header from "@/components/header";





const CreateBlog = () => {
  // const[categoriesData,setCategoriesData]=useState([])
  const [messageApi, contextHolder] = message.useMessage();
  const router = useRouter();


  const[file,setFile]=useState(null)
  const{fullname}=useSelector((state)=>state)
  const img=styled(Image)`
      box-shadows:10px 10px  10px 10px #ccc;
      width:100%;
  `
  const TextArea=styled(TextareaAutosize)`
    width:100%;
    padding:5px;
    border:none;
    `


const blogValidation = Yup.object().shape({
    title: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
      categories: Yup.string()
             .oneOf(
               ['music', 'sports', 'education', 'entertainment'],
               'select a categories'
             )
             .required('Required'),
      description: Yup.string()
      .required('Required'),
  });


const saveFile=(e)=>{
  setFile(e.target.files[0]);
  // console.log(e.target.files[0])
}

const submitBlog=async(formFields)=>{
  const formData = new FormData();
  
  formData.append("avatar", file);
  formData.append("title",formFields.title)
  formData.append("categories",formFields.categories)
  formData.append("description",formFields.description)
  formData.append("username",fullname)
  const res = await fetch(`http://localhost:4000/blogs`, {
    method: "POST",
    body: formData,
  });
  const data=await res.json();
  // setCategoriesData(data.categoryData)
  console.log(data)
  if(data.success){
    messageApi.success(data.message);
    // router.push('/home');
  }
  else{
    messageApi.error(data.message);

  }
}



  return (
    <div>
      <Header/>
     
      <Box>
       <img 
    //  src="/uploads/blog_3.jpeg||"
     src={`/uploads/blog_3.jpeg`||`/uploads/${url}`}
     sizes="(max-width: 768px) 100vw"
     width="100%"
     height={300}
     alt="user cover image"/>
</Box>

    <div className={Styles.formikContainer}>
    <Formik
       initialValues={{
        title: '',
        categories:'',
        description: ''
        
        
       }}
       validationSchema={blogValidation}
       onSubmit={values => {
         submitBlog(values)

       }}
     >
       {({ errors, 
       touched,
        handleBlur
       ,values,
       handleChange,
       handleSubmit,
        }) => (
         <Form onSubmit={handleSubmit}>
<button style={{float:'right',width:'15vh',padding:'8px',
backgroundColor:'#333333',color:'white',borderRadius:'10px'}} 
type="submit">Submit</button> 

  <div className={Styles.fileInput}>
  <input type="file"   onChange={saveFile} />
  </div>
  

          
              
        
           <Field name="title" placeholder="title..." className={Styles.inputFiled
          }  
           /> 
           {errors.title && touched.title ? (
             <div className={Styles.error}>{errors.title}</div>
           ) : null} <br/><br/>

          <Field as="select" name="categories" placeholder="Select a categories" className={Styles.dropDwon}>
             <option value="" disabled>select a categories</option>
             <option value="music">music</option>
             <option value="sports">sports</option>
             <option value="entertainment">entertainment</option>
             <option value="education">education</option>
           </Field>
           {errors.categories && touched.categories ? (
             <div className={Styles.error}>{errors.categories}</div>
           ) : null} <br/><br/>
        

           <TextArea 
           id="descriptionInput "  
           name="description"
           placeholder="Write Something..." 
           minRows={8}
           value={values.description}
           onChange={handleChange}
           
           />
           {errors.description && touched.description ? <div className={Styles.error}>{errors.description}</div> : null} <br/><br/>


           
</Form>
        
       )}
     </Formik>
    {contextHolder}       

    </div>
    </div>
  )
}

export default CreateBlog;