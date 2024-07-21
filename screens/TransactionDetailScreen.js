// TransactionDetailScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TransactionDetailScreen = ({ route }) => {
  const { transaction } = route.params;

  return (
    <View style={styles.container}>
    
      <View style={styles.amountContainer}>
        <Text style={styles.amount}>{transaction.amount}</Text>
        <Text style={styles.name}>{transaction.name}</Text>
        <Text style={styles.location}>North York, ON</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.detailLabel}>Transaction Date</Text>
        <Text style={styles.detailValue}>{transaction.date}</Text>
      </View>
    </View>
  );
};

export default TransactionDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#489fca',
    padding: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  amountContainer: {
    backgroundColor: '#489fca',
    paddingVertical: 20,
    alignItems: 'center',
  },
  amount: {
    fontSize: 32,
    color: '#fff',
    marginBottom: 5,
  },
  name: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
  },
  location: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
  detailContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  detailLabel: {
    fontSize: 18,
    color: '#000',
  },
  detailValue: {
    fontSize: 18,
    color: '#7f8c8d',
  },
});
