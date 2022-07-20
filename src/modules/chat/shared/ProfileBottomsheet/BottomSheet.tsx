import { 
    Dimensions, 
    StyleSheet, 
    View, Text, 
    useWindowDimensions } from 'react-native';
import React from 'react'; 
import { 
    PanGestureHandler
} from 'react-native-gesture-handler'
import Animated, {
    useAnimatedGestureHandler, 
    useSharedValue, 
    useAnimatedStyle,
    withSpring,
} from 'react-native-reanimated';

const {height: SCREEN_HEIGHT} = Dimensions.get('window');

export default function BottomSheet() {
    const gestureHandler = useAnimatedGestureHandler({});
    const dimensions = useWindowDimensions();
    const top = useSharedValue(
        dimensions.height
    );
    const style = useAnimatedStyle(() => {
        return {
            top: top.value
        }
    })

    return (
        
        <PanGestureHandler
            onGestureEvent={gestureHandler}
        >
            <Animated.View style={[{ 
                    height: SCREEN_HEIGHT,
                    width: '100%',
                    backgroundColor: 'white',
                    position: 'absolute',
                    borderRadius: 25,
                    shadowColor: '#000',
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    elevation: 5,
                    padding: 20,
                    justifyContent: 'center',
                    alignItems: 'center'
            },
        style]}>
                <Text>Sheet</Text>
            </Animated.View>
        </PanGestureHandler>
    );
};

