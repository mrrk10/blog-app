import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import styles from '../../styles/Header.module.css';
import styled from '@emotion/styled';
import Link from 'next/link';

const Component=styled(AppBar)`
background-color: #333333;
width='100%'


`
const Container=styled(Toolbar)`
    justify-content:center;
    & > a {
        padding:10px 60px ;
        color:white;
        text-decoration:none;
    }
`




const Header = () => {
  return (
   


 
   <Component position='fixed'>
        <Container>
            <Link href='/'>HOME</Link>
            <Link href='/about'>ABOUT</Link>
            <Link href='/contact'>CONTACT</Link>
            <Link href='/logout'>LOGOUT</Link>
        </Container>
    </Component> 



   
   
  
 
   
  )
}

export default Header