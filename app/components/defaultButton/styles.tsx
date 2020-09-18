import { StyleSheet } from "react-native";
import config from "../../config";

export const getStyles = () => {
    return StyleSheet.create({
        container: {
            backgroundColor: '#9F75F5',
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 15,
            paddingHorizontal: 25,
            borderRadius: 25
        },
        text: {
            ...config.TEXT_STYLE.big,
            textTransform: 'uppercase',
            letterSpacing: 1,
            color: '#352738'
        }
    });
};