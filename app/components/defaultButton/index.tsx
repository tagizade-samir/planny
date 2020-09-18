import React, { FC, useMemo } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { getStyles } from './styles';

interface DefaultButtonProps {
    text: string;
    onPress: any;
};

const DefaultButton: FC<DefaultButtonProps> = ({ text, onPress }) => {
    const styles = useMemo(() => getStyles(), []);

    return(
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
};

export default DefaultButton;
