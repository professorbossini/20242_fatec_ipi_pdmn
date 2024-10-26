import {
  Button,
  FlatList,
  Pressable, 
  StyleSheet, 
  Text,
  TextInput, 
  View 
} from 'react-native';

import { AntDesign } from '@expo/vector-icons';

import {
  useState
} from 'react'

interface Lembrete{
  id: string;
  texto: string;
}

export default function App() {
  const [lembrete, setLembrete] = useState('')
  const [lembretes, setLembretes] = useState<Lembrete[]>([])

  const adicionar = () => {
    //1. Construir um objeto do tipo Lembrete (aplique o sistema de tipos estático). SEu id deve ser a data atual do sistema representada por um número convertido para String e o texto deve ser igual àquele valor existente na variável de estado lembrete
    const novoLembrete: Lembrete = {
      id: Date.now().toString(),
      texto: lembrete
    }
    //2. Usar a função apropriada para atualizar a lista de lembretes, lembrando que esta atualização deve causar impacto gráfico, ou seja, atualizar a tela
    setLembretes(lembretesAtual => [novoLembrete, ...lembretesAtual])
    //3. limpe o campo em que o usuário digita o lembrete, atribuindo a cadeia vazia à variável de estado que se chama lembrete
    setLembrete('')
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input} 
        placeholder='Digite um lembrete...'
        onChangeText={setLembrete}
        value={lembrete}
      />
      <Pressable
        style={styles.button}
        onPress={adicionar}>
        <Text
          style={styles.buttonText}>
            Salvar lembrete
          </Text>
      </Pressable>
      <FlatList
        keyExtractor={item => item.id}
        style={styles.list} 
        data={lembretes}
        renderItem={l => (
          <View
            style={styles.listItem}>
            <Text
              style={styles.listItemText}>
                {l.item.texto}
            </Text>
            <View
              style={styles.listItemButtons}>
              <Pressable>
                <AntDesign name='delete' size={24}/>
              </Pressable>
              <Pressable>
                <AntDesign name='edit' size={24} />
              </Pressable>
            </View>
          </View>
        )}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40
  },
  input: {
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    padding: 12,
    marginBottom: 12,
    textAlign: 'center',
    borderRadius: 4
  },
  button: {
    width: '80%',
    //material blue 500
    backgroundColor: '#0096F3',
    padding: 12,
    borderRadius: 4
  },
  buttonText: {
    color: 'white',
    textAlign: 'center'
  },
  list: { 
    borderWidth: 1, 
    borderColor: 'gray', 
    width: '80%',
    borderRadius: 4,
    marginTop: 12,
    padding: 8
  },
  listItem: {
    padding: 12,
    backgroundColor: '#f0f0f0',
    borderBottomWidth: 1,
    borderBottomColor: '#CCC',
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center'
  },
  listItemText: {
    textAlign: 'center',
    width: '70%'
  },
  listItemButtons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '30%'
  }
});
