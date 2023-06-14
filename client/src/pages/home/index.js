import Header from '../../components/header'
import Banner from '../../components/banner'
import Categories from '@/components/categories'
import styled from '@emotion/styled'

 const Home = () => {
  // const userinfo = useSelector(state => state)
  const container=styled('container')`
    displat:flex;

  `
  
  return (
    <>
    
      <Header/>
      <Banner/>
      <Categories/>
     

   
  
    

    
    

    
   
    
    </>
  )
} 
export default Home;
