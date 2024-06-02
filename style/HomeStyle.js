import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { COLORS } from './color';

export const home_Style = StyleSheet.create({
    header: {
      backgroundColor: COLORS.orange,
    },
    tabBar: {
      flexDirection: 'row',
      borderTopColor: '#333333',
      borderTopWidth: 1,
      borderColor: COLORS.white,
      backgroundColor:COLORS.backgroundColor
    },
    tab: {
      height: 50,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    tabStatus: {
      height: 50,
      flex: 1,
      marginLeft: 20,
      justifyContent: 'center',
    },
    stack: {
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 20,
        color: COLORS.white,
        backgroundColor: COLORS.secondOrange,
    },
    container: {
    }
  });