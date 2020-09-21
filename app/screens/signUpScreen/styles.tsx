import { StyleSheet } from "react-native";
import config from "../../config";

export const getStyles = () => {
    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#352738'
        },
        textContainer: {
            flex: 0.1,
            justifyContent: 'center',
            alignItems: 'center'
        },
        text: {
            ...config.TEXT_STYLE.huge,
            color: 'white'
        },
        avatarContainer: {
            flex: 0.2,
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 20
        },
        formContainer: {
            flex: 0.75,
            backgroundColor: 'blue'
        },
        iconContainer: {
            backgroundColor: 'white',
            borderRadius: 100,
            height: 100,
            width: 100,
            justifyContent: 'center',
            alignItems: 'center'
        }
    });
};