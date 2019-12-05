import {observable, autorun, action, configure, reaction, when} from 'mobx';

configure({
    enforceActions: "observed"
});

class CounterStore{
    @observable count = 1;

    constructor(){
       /* autorun (() => {
            console.log(`${this.count}`);
        })

        // count her 5 oldugunda çalışır
        reaction(
            () => this.count,
            count => {
                if (count === 5) {
                    alert("Oldu")
                }
            }
        )*/
        //count 5 oldugunda 1 defa calısır sonra birdaha calısmaz
        when(
            () => this.count === 5,
            () => alert("Başardın")
        )


    }

    @action decrement = () => {
        this.count--;
    }

    @action increment = () => {
        this.count++;
    }
}

export default new CounterStore()