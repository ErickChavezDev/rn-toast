"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const react_native_safe_area_context_1 = require("react-native-safe-area-context");
const styles_1 = __importDefault(require("./styles"));
const Toast = ({ action, duration = 3000, message, show }) => {
    const { bottom } = (0, react_native_safe_area_context_1.useSafeAreaInsets)();
    const fadeAnim = react_1.default.useRef(new react_native_1.Animated.Value(0)).current;
    react_1.default.useEffect(() => {
        if (show) {
            react_native_1.Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 800,
                useNativeDriver: true,
            }).start(() => {
                setTimeout(() => {
                    react_native_1.Animated.timing(fadeAnim, {
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
            return (<react_native_1.Pressable onPress={action.onPress}>
          <react_native_1.Text style={{
                    color: action.color,
                }}>
            {action.message}
          </react_native_1.Text>
        </react_native_1.Pressable>);
        }
    };
    return (<react_native_1.View style={[styles_1.default.container, { bottom }]}>
      <react_native_1.Animated.View style={[
            {
                opacity: fadeAnim,
            },
            styles_1.default.toastContainer,
        ]}>
        <react_native_1.Text style={styles_1.default.toastText}>{message + ' '}</react_native_1.Text>
        {renderAction()}
      </react_native_1.Animated.View>
    </react_native_1.View>);
};
exports.default = Toast;
