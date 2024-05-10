import { action, makeObservable, observable } from 'mobx';

class MyStore {
    @observable data: any[] = [];

    constructor() {
        makeObservable(this);
    }

    @action
    updateData(newData: any[]) {
        this.data = newData;
        this.saveDataToLocalStorage();
    }

    @action
    loadDataFromLocalStorage() {
        const storedData = localStorage.getItem('myData');
        if (storedData) {
            this.data = JSON.parse(storedData);
        }
    }

    @action
    saveDataToLocalStorage() {
        localStorage.setItem('myData', JSON.stringify(this.data));
    }
}

const myStore = new MyStore();
export default myStore;
