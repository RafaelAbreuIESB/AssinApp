import { StyleSheet } from 'react-native';
import colors from './colors';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.principal,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.titulo,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: colors.fonte,
  },
  input: {
    borderColor: colors.secundario,
    borderWidth: 1,
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
    color: colors.fonte,
  },
  button: {
    backgroundColor: colors.secundario,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: colors.titulo,
    fontWeight: 'bold',
    fontSize: 16,
  },
  itemContainer: {
    backgroundColor: colors.principal,
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: colors.secundario,
  },
});