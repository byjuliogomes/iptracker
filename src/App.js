import React, {useState} from 'react';
import './App.css';
import Title from './components/Title';
import Input from './components/Input';
import Modal from './components/Modal';
import SimpleMap from './components/SimpleMap';



function App() {

  const [email, setEmail] = useState("");
  
  return (
    <div className="App">
      <Title>IP Adress Tracker</Title>
      <Input
        onChangeText={(number) => console.log(number)}
        required="required"
        type="text"
        className='form-control'
        />
      
      <Modal onClick={(userData) => console.log(userData)}></Modal>
      <SimpleMap></SimpleMap>
    </div>

    
  );
}

export default App;
