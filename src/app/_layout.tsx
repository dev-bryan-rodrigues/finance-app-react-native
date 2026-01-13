import { initializeDatabase } from '@/database/initializeDatabase';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { SQLiteProvider } from 'expo-sqlite';
import { View } from 'react-native';
import useLoadFonts from '../../hooks/useLoadFonts';

SplashScreen.preventAutoHideAsync();

export default function Layout (){
  const { fontsLoaded, onLayoutRootView } = useLoadFonts();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <SQLiteProvider
        databaseName="sqlite.db"
        onInit={initializeDatabase}
      >
        <Stack >
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      </SQLiteProvider>
    </View>
  )
}