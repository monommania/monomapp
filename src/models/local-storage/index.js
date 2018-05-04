const baseprefix = 'monomapp';

const ApplicationLocalStorage = {
    get: function(key) {
        let result = window.localStorage.getItem(baseprefix+"-"+key);
        result = JSON.parse(result);
        return result;
    },
    set: function(key, value) {
        const valueStr = JSON.stringify(value);
        window.localStorage.setItem(baseprefix+"-"+key, valueStr);
    },
    isLogin: function() {
        const result = this.get('islogin');
        return (result === true);
    },
    setStore: function(store) {
        this.set('store', store)
    },
    getStore: function() {
        return this.get('store');
    }
}

export default ApplicationLocalStorage;