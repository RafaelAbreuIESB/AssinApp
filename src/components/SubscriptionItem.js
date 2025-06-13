import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function SubscriptionItem({ item, onPress, onLongPress }) {
  const data = new Date(item.dataRenovacao.seconds * 1000).toLocaleDateString();
  return (
    <TouchableOpacity onPress={onPress} onLongPress={onLongPress}>
      <View>
        <Text>{item.nome} - R$ {item.valor}</Text>
        <Text>Renova em: {data}</Text>
      </View>
    </TouchableOpacity>
  );
}
