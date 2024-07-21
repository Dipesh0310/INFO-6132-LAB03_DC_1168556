import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons'; // Make sure to install @expo/vector-icons if not already installed
import TransactionsListScreen from '../screens/TransactionsListScreen';
import TransactionDetailScreen from '../screens/TransactionDetailScreen';
import SummaryScreen from '../screens/SummaryScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function TransactionsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="TransactionsList" component={TransactionsListScreen} />
      <Stack.Screen name="TransactionDetail" component={TransactionDetailScreen} />
    </Stack.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Transactions') {
              iconName = 'document-text-outline'; // Changed to a more similar icon
            } else if (route.name === 'Summary') {
              iconName = 'information-circle-outline'; // Changed to a more similar icon
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#3498db',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: { display: 'flex' }
        })}
      >
        <Tab.Screen name="Transactions" component={TransactionsStack} />
        <Tab.Screen name="Summary" component={SummaryScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
