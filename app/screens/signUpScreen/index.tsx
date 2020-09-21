import React, { FC, useMemo } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import CameraIcon from '../../assets/svg/defaultIcons/cameraIcon';
import { getStyles } from './styles';

const SignUpScreen: FC<> = () => {
    const styles = useMemo(() => getStyles(), []);

    return(
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Create Your Account</Text>
            </View>
            <View style={styles.avatarContainer}>
                <TouchableOpacity style={styles.iconContainer}>
                    <CameraIcon />
                </TouchableOpacity>
            </View>
            <View style={styles.formContainer}></View>
        </View>
    );
};

export default SignUpScreen;
