import React, {Component} from 'react';
import './App.css';
import Image from './component/Image.js'

class App extends Component{
  render(){
    return(
      <div className='App'>
      <Image pic={'https://cdn.shopify.com/s/files/1/0218/8417/4408/products/9132p_0c_2x_759c6d77-162c-420c-9b82-50051f04fb37_800x.jpg?v=1581370173'}/>
      </div>
    )
  }
}

export default App;
