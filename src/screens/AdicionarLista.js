import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import { db } from '../services/firebase';
import { addDoc, updateDoc, doc, collection } from 'firebase/firestore';
import { globalStyles } from '../styles/Estilo';

export default function AddEditScreen({ route, navigation }) {
  const sub = route.params?.subscription;
  const [nome, setNome] = useState(sub?.nome || '');
  const [valor, setValor] = useState(String(sub?.valor || ''));
  const [data, setData] = useState(
    sub ? sub.dataRenovacao.toDate().toISOString().slice(0, 10) : ''
  );
  const [categoria, setCategoria] = useState(sub?.categoria || '');

  const handleSalvar = async () => {
    const payload = {
      nome,
      valor: parseFloat(valor),
      dataRenovacao: new Date(data),
      categoria,
    };

    try {
      if (sub) {
        await updateDoc(doc(db, 'subscriptions', sub.id), payload);
      } else {
        await addDoc(collection(db, 'subscriptions'), payload);
      }
      navigation.goBack();
    } catch (error) {
      console.error('Erro ao salvar:', error);
    }
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>{sub ? 'Editar' : 'Nova'} Assinatura</Text>
      <TextInput
        style={globalStyles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={globalStyles.input}
        placeholder="Valor"
        keyboardType="numeric"
        value={valor}
        onChangeText={setValor}
      />
      <TextInput
        style={globalStyles.input}
        placeholder="Data (YYYY-MM-DD)"
        value={data}
        onChangeText={setData}
      />
      <TextInput
        style={globalStyles.input}
        placeholder="Categoria"
        value={categoria}
        onChangeText={setCategoria}
      />

      <TouchableOpacity style={globalStyles.button} onPress={handleSalvar}>
        <Text style={globalStyles.buttonText}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
}
