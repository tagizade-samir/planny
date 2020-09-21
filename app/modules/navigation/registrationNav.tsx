import React, { FC } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import InitialScreen from '../../screens/initialScreen';
import SignUpScreen from '../../screens/signUpScreen';
import SignInScreen from '../../screens/signInScreen';
import ROUTES from './routes';

const RegistrationNav: FC<> = () => {
    const RegistrationRoot = createMaterialTopTabNavigator();

    return (
        <RegistrationRoot.Navigator
            initialRouteName={ROUTES.REGISTRATION.INITIAL}
            tabBarOptions={{
                style: { display: 'none' }
            }}
            backBehavior={'initialRoute'}
            // swipeEnabled={false}
        >
            <RegistrationRoot.Screen component={SignUpScreen} name={ROUTES.REGISTRATION.SIGNUP} />
            <RegistrationRoot.Screen component={InitialScreen} name={ROUTES.REGISTRATION.INITIAL} />
            <RegistrationRoot.Screen component={SignInScreen} name={ROUTES.REGISTRATION.SIGNIN} />
        </RegistrationRoot.Navigator>
    );
};

export default RegistrationNav;