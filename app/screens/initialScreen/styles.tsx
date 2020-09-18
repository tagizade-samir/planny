import { StyleSheet } from "react-native";

export const getStyles = () => {
    return StyleSheet.create({
        container: {
            flex: 1
        },
        topComponent: {
            flex: 0.7,
        },
        bottomComponent: {
            flex: 0.3,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
        }
    });
};