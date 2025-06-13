import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/Estilo';
import { db } from '../services/firebase';
import { collection, onSnapshot } from 'firebase/firestore';
import SubscriptionItem from '../components/SubscriptionItem';

export default function HomeScreen({ navigation }) {
  const [subs, setSubs] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, 'subscriptions'), snap => {
      const data = snap.docs.map(d => ({ id: d.id, ...d.data() }));
      setSubs(data);
    });
    return unsub;
  }, []);

  const total = subs.reduce((acc, cur) => acc + cur.valor, 0);
  const próximas = [...subs]
    .sort((a, b) => a.dataRenovacao.seconds - b.dataRenovacao.seconds)
    .slice(0, 5);

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Resumo de Assinaturas</Text>
      <Text style={globalStyles.text}>Gasto mensal total: R$ {total.toFixed(2)}</Text>

      <Text style={[globalStyles.title, { marginTop: 20 }]}>Próximas renovações</Text>
      <FlatList
        data={próximas}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <SubscriptionItem item={item} />}
      />

      <TouchableOpacity style={globalStyles.button} onPress={() => navigation.navigate('Adicionar')}>
        <Text style={globalStyles.buttonText}>Adicionar Assinatura</Text>
      </TouchableOpacity>

      <TouchableOpacity style={globalStyles.button} onPress={() => navigation.navigate('Lista')}>
        <Text style={globalStyles.buttonText}>Ver Lista Completa</Text>
      </TouchableOpacity>
    </View>
  );
}
