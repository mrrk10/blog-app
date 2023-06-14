import '@/styles/globals.css'
import { store,persistor} from '../redux/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';



export default function App({ Component}) {

  return (
  
    <Provider store={store}>
       <PersistGate loading={null} persistor={persistor}>
       <Component  />
       </PersistGate>
  </Provider>
  

  )
}
