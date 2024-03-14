import { useEffect } from 'react';
import { useFonts } from 'expo-font';

export default function useCustomFonts() {
  const [loaded] = useFonts({
    'GongGothic': require('../assets/fonts/GongGothicLight.ttf'),
    'PretendardRegular': require('../assets/fonts/PretendardRegular.ttf'),
    'PretendardMedium' : require('../assets/fonts/PretendardMedium.ttf'),
    'PretendardSemiBold' : require('../assets/fonts/PretendardSemiBold.ttf'),
  });

  useEffect(() => {
    return () => {
      // Clean up font loading if needed
    };
  }, []);

  return loaded;
}