import {observable, configure, action, runInAction} from 'mobx';
import axios from 'axios';

configure({
    enforceActions: "observed"
});

class UserStore{
    @observable users = [];
    @observable loading = false;
    @observable error = '';

    @action async fetchUsers (){
        this.loading = true;
        this.users = [];
        this.error = '';
        
        try{
            const { data: {results} } = await axios.get('https://randomuser.me/api/?results=10');
            runInAction(() => {
                this.users = results;
                this.loading = false;
            })
        }catch (e) {
            runInAction(() => {
                this.loading = false;
                this.error = 'Error retrieving information from server.';
            })
             alert('error')
        }
}}

export default new UserStore()