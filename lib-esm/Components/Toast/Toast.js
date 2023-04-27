import React from 'react';
import { View, Text, Animated, Pressable } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styles from './styles';
const Toast = ({ action, duration = 3000, message, show }) => {
    const { bottom } = useSafeAreaInsets();
    const fadeAnim = React.useRef(new Animated.Value(0)).current;
    React.useEffect(() => {
        if (show) {
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 800,
                useNativeDriver: true,
            }).start(() => {
                setTimeout(() => {
                    Animated.timing(fadeAnim, {
                        toValue: 0,
                        duration: duration,
                        useNativeDriver: true,
                    }).start();
                }, duration);
            });
        }
    }, [duration, fadeAnim, show]);
    const renderAction = () => {
        if (action) {
            return (<Pressable onPress={action.onPress}>
          <Text style={{
                    color: action.color,
                }}>
            {action.message}
          </Text>
        </Pressable>);
        }
    };
    return (<View style={[styles.container, { bottom }]}>
      <Animated.View style={[
            {
                opacity: fadeAnim,
            },
            styles.toastContainer,
        ]}>
        <Text style={styles.toastText}>{message + ' '}</Text>
        {renderAction()}
      </Animated.View>
    </View>);
};
export default Toast;
