import React, {useState} from 'react';
import { Button, Text, View } from 'react-native';

function App() {

  const [nome,setNome] = useState('Vasco da Gama');
  const [idade, setIdade] = useState (123)

  function entrar(){
    setNome('BBBBBASCO')
  }

  function fato(){
    setIdade('5 Anos na série B')
  }
  return (
  <View style={{ marginTop:25}}>
    <Text style={{fontSize: 19}}>{nome}</Text>
    <Button title="Mudar nome" onPress={entrar}/>
    <Text style={{fontSize: 17}}>{idade} anos</Text>
    <Button title="Fato inusitado" onPress={fato}/>
  </View>
  );
}

export default App;
