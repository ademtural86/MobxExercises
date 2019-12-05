import {observable, autorun, action, configure, computed, runInAction} from 'mobx';

configure({
    enforceActions: "observed"
});

class PersonStore{
    @observable firstName = "None";
    @observable lastName = "None";

    constructor(){
        autorun (() => {
            console.log(`${this.firstName} - ${this.lastName}`);
        })
    }

    @action changeName(){
        setTimeout(() => {
            runInAction(() => {
                this.firstName = "Adem";
                this.lastName = "Tural";
            })
        }, 2000);

    }

    @computed get fullName(){
        return `${this.firstName} ${this.lastName}`
    }
}

export default new PersonStore()