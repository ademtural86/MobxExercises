//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

// create a component
class Counter extends Component {
    render() {
        return (
            <View>
                <Text style={styles.text}>0</Text>
                <View style={styles.buttonContainer}>
                    <Button 
                        title={"decrement"}
                    />
                    <Button 
                        title={"increment"}
                    />
                </View>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row'
    },
    text: {
        fontSize: 38,
        textAlign: 'center'
    }
});

//make this component available to the app
export default Counter;
