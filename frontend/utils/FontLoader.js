import { useEffect } from 'react';
import { useFonts } from 'expo-font';

export default function useCustomFonts() {
  const [loaded] = useFonts({
    'GongGothic': require('../assets/fonts/GongGothicLight.ttf'),
    'Pretendard': require('../assets/fonts/PretendardRegular.ttf'),
  });

  useEffect(() => {
    return () => {
      // Clean up font loading if needed
    };
  }, []);

  return loaded;
}