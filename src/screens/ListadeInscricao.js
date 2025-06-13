import React, { useEffect, useState } from 'react';
import { View, FlatList, Alert, TouchableOpacity, Text } from 'react-native';
import { db } from '../services/firebase';
import { globalStyles } from '../styles/Estilo';
import { collection, onSnapshot, deleteDoc, doc } from 'firebase/firestore';
import SubscriptionItem from '../components/SubscriptionItem';

export default function ListaScreen({ navigation }) {
  const [subs, setSubs] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, 'subscriptions'), snap =>
      setSubs(snap.docs.map(d => ({ id: d.id, ...d.data() })))
    );
    return unsub;
  }, []);

  const handleDelete = (id) => {
    Alert.alert('Excluir', 'Deseja excluir essa assinatura?', [
      { text: 'Cancelar' },
      { text: 'Excluir', onPress: () => deleteDoc(doc(db, 'subscriptions', id)) },
    ]);
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Todas as Assinaturas</Text>
      <FlatList
        data={subs}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={globalStyles.itemContainer}
            onPress={() => navigation.navigate('Adicionar', { subscription: item })}
            onLongPress={() => handleDelete(item.id)}>
            <SubscriptionItem item={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
