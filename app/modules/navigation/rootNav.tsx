import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import RegistrationNav from './registrationNav';

const RootNav: FC<> = () => {
    return(
        <NavigationContainer>
            <RegistrationNav />
        </NavigationContainer>
    );
};

export default RootNav;
