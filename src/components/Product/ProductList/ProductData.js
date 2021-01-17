const { ipcRenderer } = window.require("electron");


const getProduct = () => {

    const query = "select id from productos limit 1";
    ipcRenderer.send('database-request', query);
    ipcRenderer.on('database-response', (event, data) => {
        try {
            console.log(data);
        } catch {
            ipcRenderer.removeAllListeners("database-response");
        }
    });
}

exports.getProduct = getProduct;
