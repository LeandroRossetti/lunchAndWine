export async function getDolar(){
    let urlUsd='https://www.dolarsi.com/api/api.php?type=valoresprincipales'
    try {
        const resp=await fetch(urlUsd);
        const data=await resp.json();
        const {venta}=data[1].casa;
        return venta;
    } catch (result) {
        return undefined;
    }

}