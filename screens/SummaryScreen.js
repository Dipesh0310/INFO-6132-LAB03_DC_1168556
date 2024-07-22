// SummaryScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const mockData = [
  { id: '1', name: 'Starbucks', amount: 12.00, date: 'Mar 13,2024' },
  { id: '2', name: 'Apple Store', amount: 101.00, date: 'Mar 14,2024' },
  { id: '3', name: 'Sephora', amount: 120.00, date:'Mar 15,2024' },
  { id: '4', name: 'Shoppers Drug Mart', amount: 12.00,  date: 'Mar 12,2024' },
  { id: '5', name: 'Pizza Hut', amount: 24.00, date: '2024-03-14' },
  { id: '6', name: 'Cheesecake Factory', amount: 45.00, date: '2024-03-15' },
  { id: '7', name: 'Nike', amount: 250.00, date: '2024-03-16' },
  { id: '8', name: 'Tim Hortons', amount: 7.89, date: '2024-03-17' },
  { id: '9', name: 'Whole Foods', amount: 78.00, date: '2024-03-18' },
  { id: '10', name: 'Cineplex', amount: 42.50, date: '2024-Mar-19' },
];

const totalExpenses = mockData.reduce((sum, item) => sum + item.amount, 0);
const highestSpending = mockData.reduce((max, item) => (item.amount > max.amount ? item : max), mockData[0]);
const lowestSpending = mockData.reduce((min, item) => (item.amount < min.amount ? item : min), mockData[0]);

const SummaryScreen = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.summaryItem, styles.withBorder]}>
        <Text style={styles.label}>Transactions</Text>
        <Text style={styles.value}>{mockData.length}</Text>
      </View>
      <View style={[styles.summaryItem, styles.withBorder]}>
        <Text style={styles.label}>Balance</Text>
        <Text style={styles.value}>${totalExpenses.toFixed(2)}</Text>
      </View>
      <View style={styles.summaryItem}>
        <Text style={[styles.label, styles.highlight]}>High Spending</Text>
      </View>
      <View style={styles.detailItem}>
        <Text style={styles.detailLabel}>{highestSpending.name}</Text>
        <Text style={styles.detailValue}>${highestSpending.amount.toFixed(2)}</Text>
      </View>
      <View style={styles.summaryItem}>
        <Text style={[styles.label, styles.highlight]}>Low Spending</Text>
      </View>
      <View style={styles.detailItem}>
        <Text style={styles.detailLabel}>{lowestSpending.name}</Text>
        <Text style={styles.detailValue}>${lowestSpending.amount.toFixed(2)}</Text>
      </View>
    </View>
  );
};

export default SummaryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  withBorder: {
    borderBottomWidth: 1,
    borderBottomColor: '#489fca',
  },
  summaryItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  label: {
    fontSize: 18,
    color: '#000',
  },
  value: {
    fontSize: 18,
    color: '#7f8c8d',
  },
  detailItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#489fca',
  },
  detailLabel: {
    fontSize: 18,
    color: '#000',
  },
  detailValue: {
    fontSize: 18,
    color: '#7f8c8d',
  },
  highlight: {
    color: '#3498db',
    fontWeight: 'bold',
  },
});
