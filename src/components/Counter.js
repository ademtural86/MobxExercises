//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import {observer, inject} from 'mobx-react';

//@inject('CounterStore', 'PersonStore')
//@observer
class Counter extends Component {
    render() {
        const { CounterStore, PersonStore } = this.props;

        return (
            <View>
                <Text style={styles.text}>{CounterStore.count}</Text>
                <View style={styles.buttonContainer}>
                    <Button 
                        title={"decrement"}
                        onPress={() => CounterStore.decrement()}
                    />
                    <Button 
                        title={"increment"}
                        onPress={() => CounterStore.increment()}
                    />
                </View>
                <Text style={{ textAlign: 'center'}}>{PersonStore.fullName}</Text>
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

export default inject('CounterStore', 'PersonStore')(observer(Counter));