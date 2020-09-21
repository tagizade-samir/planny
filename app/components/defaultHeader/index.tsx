import React, { FC, useMemo } from 'react';
import { Text, View } from 'react-native';
import { getStyles } from './styles';

interface DefaultHeaderProps {
    backgroundColor?: any,
};

const DefaultHeader: FC<DefaultHeaderProps> = ({ backgroundColor }) => {
    const styles = useMemo(() => getStyles(backgroundColor), [backgroundColor]);

    return(
        <View style={styles.container}>
            <Text>DEFAULT HEADER</Text>
        </View>
    );
};

export default DefaultHeader;
