import { useState } from 'react';
import {
  Button,
  StyleSheet, 
  Text, 
  View } 
from 'react-native';
//hook (é simplesmente uma função) (nasceram na versão 16.8 do React)
export default function App() {
  //é obrigatório chamar seus hooks dentro da função que define o componente
  const [contador, setContador] = useState(0)
  //1. exibir o contador em um componente textual não editável
  //2. exibir um botão
  //3. Tratar o evento de clique no botão: quando ele for clicado, atualizar a variável contador, fazendo com que o novo valor seja exibido na tela. Ela sobe de 1 em 1
  return (
    <View style={styles.container}>
      <Text>{contador}</Text>
      <Button 
        title='Somar'
        onPress={() => {
          console.log(contador)
          setContador(contador + 1)
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
