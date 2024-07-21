import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Make sure to install @expo/vector-icons if not already installed

const mockData = [
  { id: '1', name: 'Starbucks', amount: '$12.00', date: '2024-03-10' },
  { id: '2', name: 'Apple Store', amount: '$101.00', date: '2024-03-11' },
  { id: '3', name: 'Sephora', amount: '$120.00', date: '2024-03-12' },
  { id: '4', name: 'Shoppers Drug Mart', amount: '$12.00', date: '2024-03-13' },
  { id: '5', name: 'Pizza Hut', amount: '$24.00', date: '2024-03-14' },
  { id: '6', name: 'Cheesecake Factory', amount: '$45.00', date: '2024-03-15' },
  { id: '7', name: 'Nike', amount: '$250.00', date: '2024-03-16' },
  { id: '8', name: 'Tim Hortons', amount: '$7.89', date: '2024-03-17' },
  { id: '9', name: 'Whole Foods', amount: '$78.00', date: '2024-03-18' },
  { id: '10', name: 'Cineplex', amount: '$42.50', date: '2024-03-19' },
];

const TransactionsListScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={mockData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('TransactionDetail', { transaction: item })}
          >
            <View style={styles.itemText}>
              <Text style={styles.itemName}>{item.name}</Text>
              <View style={styles.itemRight}>
                <Text style={styles.itemAmount}>{item.amount}</Text>
                <Ionicons name="chevron-forward" size={30} color="#3498db" />
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default TransactionsListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  item: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
 
 
    borderBottomColor: '#489fca',



    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  itemRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemName: {
    fontSize: 20,
    color: '#000',
    flex: 1,
  },
  itemAmount: {
    fontSize: 16,
    color: '#3498db',
    marginRight: 0,
  },
});
