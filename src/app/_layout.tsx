import { initializeDatabase } from '@/database/initializeDatabase'
import { Stack } from 'expo-router'
import { SQLiteProvider } from 'expo-sqlite'

export default function Layout (){
  return (
    <SQLiteProvider databaseName='sqlite.db' onInit={initializeDatabase}>
      <Stack>
        <Stack.Screen name='index'/>
      </Stack>
    </SQLiteProvider>
  )
}