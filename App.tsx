// import React from 'react';
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet } from 'react-native';
// import Navigation from './src/modules/navigation/Navigation';
// import AuthProvider from './src/modules/auth/AuthProvider';
// import { store, StoreContext } from './src/modules/stores/store';
// import { ProfileProvider } from './src/modules/profile/context/ProfileProvider';

// export default function App() {
//   return (
//     <StoreContext.Provider value={store}>
//       <AuthProvider>
//         <ProfileProvider>
//           <Navigation />
//           <StatusBar style="auto" />
//         </ProfileProvider>
//       </AuthProvider>
//     </StoreContext.Provider>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import { StatusBar } from 'expo-status-bar';
import React, { useCallback, useRef } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet, { BottomSheetRefProps } from './src/common/BottomSheet';

export default function App() {
  const ref = useRef<BottomSheetRefProps>(null);

  const onPress = useCallback(() => {
    const isActive = ref?.current?.isActive();
    if (isActive) {
      ref?.current?.scrollTo(0);
    } else {
      ref?.current?.scrollTo(-200);
    }
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <StatusBar style="light" />
        <TouchableOpacity style={styles.button} onPress={onPress} />
        <BottomSheet ref={ref}>
          <View style={{ flex: 1, backgroundColor: 'orange' }} />
        </BottomSheet>
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    height: 50,
    borderRadius: 25,
    aspectRatio: 1,
    backgroundColor: 'white',
    opacity: 0.6,
  },
});
