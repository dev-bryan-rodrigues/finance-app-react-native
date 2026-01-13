import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

import {
  Saira_400Regular,
  Saira_500Medium,
  Saira_700Bold,
} from "@expo-google-fonts/saira";

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";

const useLoadFonts = () => {
  const [fontsLoaded] = useFonts({
    Poppins_Regular: Poppins_400Regular,
    Poppins_Medium: Poppins_500Medium,
    Poppins_Bold: Poppins_700Bold,
    Saira_Regular: Saira_400Regular,
    Saira_Medium: Saira_500Medium,
    Saira_Bold: Saira_700Bold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  return { fontsLoaded, onLayoutRootView };
};

export default useLoadFonts;
