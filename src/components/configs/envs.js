// export const DRAGONITE_ENV = "https://dragonite.serveo.net"
// export const DRAGONITE_ENV = "http://localhost:5200"
export let DRAGONITE_ENV = '';
export const DRAGONITE_ENV2 = 'http://localhost:5200';
export const setDragoniteEnv = (newEnv) => {
    DRAGONITE_ENV = newEnv;
};