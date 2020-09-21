import { StyleSheet } from "react-native";

export const getStyles = (backgroundColor: any) => {
    return StyleSheet.create({
        container: {
            // backgroundColor: backgroundColor && null,
            backgroundColor: 'red',
            // position: 'absolute',
            // top: 0,
            width: '100%',
            height: 70
        },
    });
};