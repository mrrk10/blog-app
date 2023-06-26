import styled from '@emotion/styled';
import { Button, Drawer, Radio, Space } from 'antd';
import { useState } from 'react';
import { BlogCategories } from '@/config/categories';
import Styles from '../../styles/Categories.module.css'
import Link from 'next/link';
// import { usePathname } from 'next/navigation'
import Router, { useRouter } from 'next/router';
const CategoriesMenu = () => {
  // const pathname = usePathname()
  // console.log(pathname)
 const router=useRouter()
 console.log(router.query )


  const Component=styled(Drawer)`
      // position:absolute;
      // top: 200px;
    
  `

  const Btn1=styled(Button)`
  background-color:rgb(43, 43, 56);
  color:white;
  height:7vh;
  margin:20px 5px 0px 0px;
`

const Btn2=styled(Button)`
background-color:rgb(43, 43, 56);
color:white;
height:7vh;
margin:20px 5px 0px 0px;
float:right;
clear:both;

`
  





  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState('left');
  const showDrawer = () => {
    setOpen(true);
  };
  const onChange = (e) => {
    setPlacement(e.target.value);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
        <Btn1  onClick={showDrawer} >
          Categories
        </Btn1>
        <Link href='/createBlog'>
        <Btn2>
          Create Blog
        </Btn2>
        </Link>
    
      <Component
        title="Blogs"
        placement={placement}
        height={100}
        width={300}
        onClose={onClose}
        open={open}
      >
            <Link href='/home'>All categories</Link>

        {
          BlogCategories.map(val=>{
            return(
            <>
            <div id={val.id} className={Styles.item}>
              <Link href={`/home?category=${val.type}`}>{val.type}</Link>
            </div>
            </>
              
            

            )
         
          })
        }
      </Component>
    </>
  );
};
export default CategoriesMenu;