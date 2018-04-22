const Storage = {
    save: (name, data) => {
        console.log("saving");
        window.localStorage.setItem(name, JSON.stringify(data));
        console.log(window.localStorage);
    },
    open: (name) => {
        const data = window.localStorage.getItem(name);
        return JSON.parse(data);
    }
}

export default Storage;