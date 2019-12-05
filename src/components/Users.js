//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, ActivityIndicator } from 'react-native';

import {observer, inject} from 'mobx-react';

// create a component
class Users extends Component {
    render() {
        const {UserStore} = this.props;
        return (
            <View>

                {
                    UserStore.loading ? <ActivityIndicator size={"small"} /> : <Button title={'fetch users'} onPress={() => {UserStore.fetchUsers()}} />
                }

                <View>
                    {
                        UserStore.error ? <Text>{UserStore.error}</Text> : 
                            (
                                UserStore.users.map((user, key) => (
                                    <View key={key}>
                                        <Text>{ user.name.first }</Text>
                                    </View>
                                ))
                            )
                    }
                </View>
            </View>
        );
    }
}

//make this component available to the app
export default inject('UserStore')(observer(Users));
