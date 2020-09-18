import React, { FC } from 'react';
import { useMemo } from 'react';
import { ImageBackground, View } from 'react-native';
import { images } from '../../assets/img';
import DefaultButton from '../../components/defaultButton';
import { getStyles } from './styles';

interface InitialScreenProps {
    navigation: any;
};

const InitialScreen: FC<InitialScreenProps> = ({ navigation }) => {
    const styles = useMemo(() => getStyles(), []);

    const onPressSignup = () => {
        navigation.navigate('SIGNUP_SCREEN');
    };

    const onPressSignin = () => {
        navigation.navigate('SIGNIN_SCREEN');
    };

    return (
        <ImageBackground style={styles.container} source={images.MAIN_BACKGROUND} >
            <View style={styles.topComponent}></View>
            <View style={styles.bottomComponent}>
                <DefaultButton text={'SIGN UP'} onPress={onPressSignup} />
                <DefaultButton text={'SIGN IN'} onPress={onPressSignin} />
            </View>
        </ImageBackground>
    );
};

export default InitialScreen;
