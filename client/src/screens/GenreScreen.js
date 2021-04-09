import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import RNPickerSelect from 'react-native-picker-select';


const GenreScreen = ( props ) => {
    return (
        <RNPickerSelect
            onValueChange={() => props.navigation.navigate('Mode')}
            items={[
                { label: 'Pop', value: 'pop' },
                { label: 'R&B', value: 'r&b' },
                { label: 'Country', value: 'country' },
                { label: 'Electronic', value: 'edm' },
            ]}
        />
    );
}

const styles = StyleSheet.create({

});

export default GenreScreen;