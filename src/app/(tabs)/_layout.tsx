import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs 
      screenOptions={{
        tabBarActiveTintColor: 'green',
      }}
    >
      <Tabs.Screen 
        name="index" 
        options={{ 
          title: 'Home', 
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
          ) 
        }}
      />

      <Tabs.Screen 
        name="entries" 
        options={{ 
          title: 'Entradas', 
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'add-circle-sharp' : 'add-circle-outline'} color={color} size={24} />
          ) 
        }}
      />
      
      <Tabs.Screen 
        name="outflows" 
        options={{ 
          title: 'Saídas', 
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'exit-sharp' : 'exit-outline'} color={color} size={24} />
          ) 
        }}
      />

      <Tabs.Screen 
        name="tasks" 
        options={{ 
          title: 'Tarefas', 
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'list-circle-sharp' : 'list-circle-outline'} color={color} size={24} />
          ) 
        }}
      />
    </Tabs>
  );
}
