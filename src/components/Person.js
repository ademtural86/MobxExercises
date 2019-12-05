//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import {observer, inject} from 'mobx-react';

//@inject('PersonStore')
//@observer
class Person extends Component {
    render() {
        const {PersonStore} = this.props;
        return (
            <View>
                <Text style={styles.text}>{PersonStore.fullName}</Text>
                <Button 
                    title={"change the name"}
                    onPress={() => PersonStore.changeName()}
                />
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    text: {
        fontSize: 38,
        textAlign: 'center'
    }
});

export default inject('PersonStore')(observer(Person));
