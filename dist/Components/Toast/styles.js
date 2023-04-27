"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
exports.default = react_native_1.StyleSheet.create({
    container: {
        position: 'absolute',
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    toastContainer: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
        backgroundColor: 'rgba(0,0,0,0.9)',
        maxWidth: '90%',
        maxHeight: 60,
        minWidth: 50,
        flexDirection: 'row',
    },
    toastText: { color: '#ffffff', textAlign: 'center' },
});
