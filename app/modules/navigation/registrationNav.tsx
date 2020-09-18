import React, { FC } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import InitialScreen from '../../screens/initialScreen';
import SignUpScreen from '../../screens/signUpScreen';
import SignInScreen from '../../screens/signInScreen';

const RegistrationNav: FC<> = () => {
    const RegistrationRoot = createMaterialTopTabNavigator();

    return (
        <RegistrationRoot.Navigator
            initialRouteName={'INITIAL_SCREEN'}
            tabBarOptions={{
                style: { height: 0 }
            }}
            backBehavior={'initialRoute'}
            swipeEnabled={false}
        >
            <RegistrationRoot.Screen component={SignUpScreen} name={'SIGNUP_SCREEN'} />
            <RegistrationRoot.Screen component={InitialScreen} name={'INITIAL_SCREEN'} />
            <RegistrationRoot.Screen component={SignInScreen} name={'SIGNIN_SCREEN'} />
        </RegistrationRoot.Navigator>
    );
};

export default RegistrationNav;