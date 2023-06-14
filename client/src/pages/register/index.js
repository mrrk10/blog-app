import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link'
import { message } from 'antd';
import Styles from './registerCss.module.css'
import Image from 'next/image';
import { useRouter } from 'next/router';


// const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
const SignupSchema = Yup.object().shape({
  
  fullname: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
  
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    // .matches(passwordRules, { message: "Please create a stronger password" })  
    .required('Required'),
    confirmPassword: Yup.string()
     .oneOf([Yup.ref('password'), null], 'Passwords must match')
     .required('Required')
});

const Register=()=>{
  const [messageApi, contextHolder] = message.useMessage();
  const router = useRouter();  


    
const fetchUser=async(values)=>{
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values)
        };
      const res= await fetch('http://localhost:4000/register',  requestOptions)
      const data=await res.json();
      // console.log(data)
      
      if(data.success){
        messageApi.success(data.msg)

        router.push('/')


        }
      else{
        messageApi.error(data.msg)
      }

    }
    
    
     
    return(
        <>
        <div style={{textAlign:'center'}}>
        <Image
      src="/kurakani.png"
      width={600}
      height={80}
      alt="Picture of the author"
    />
        </div>
        
   <div className={Styles.registerCss}>
     <h1 style={{color:'white'}}>Signup</h1>
     <Formik
       initialValues={{
         fullname: '',
         email: '',
         password: '',
         confirmPassword:''
        
       }}
       validationSchema={SignupSchema}
       onSubmit={values => {
         // same shape as initial values
         fetchUser(values)

       }}
     >
       {({ errors, touched, handleBlur, }) => (
         <Form>
        
           <Field name="fullname" placeholder="Fullname" /> 
           {errors.fullname && touched.fullname ? (
             <div className={Styles.error}>{errors.fullname}</div>
           ) : null} <br/><br/>

         
           <Field name="email" type="email" placeholder="Email" />
           {errors.email && touched.email ? (
             <div className={Styles.error}>{errors.email}</div> 
           ) : null} <br/><br/>

        
           <Field name="password" type="password" placeholder="Password"  onBlur={handleBlur}  />
           {errors.password && touched.password ? <div className={Styles.error}>{errors.password}</div> : null} <br/><br/>

           <Field name="confirmPassword" type="confirmPassword" placeholder="Confirm Password"/>
           {errors.confirmPassword && touched.confirmPassword ?
            <div className={Styles.error}>{errors.confirmPassword}</div> : null} <br/><br/>
           <button className={Styles.btn} type="submit">Submit</button>

         </Form>
        
       )}
     </Formik>
     <h3 style={{color:'white'}}>Already have an account? <Link style={{textDecoration:'none',color:'blue'}} href="/">login in here</Link> </h3>
     {contextHolder}
    
   </div>
 
        
        </>
    )
}

export default Register