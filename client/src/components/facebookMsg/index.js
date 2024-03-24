import { FacebookProvider, CustomChat } from 'react-facebook';


const FacebookMsg = () => {
  return (
    <>
     <FacebookProvider appId="1139779193770040" chatSupport>
        <CustomChat pageId="260756740456339" minimized={false}/>
      </FacebookProvider>   
    </>
    
  )
}

export default FacebookMsg