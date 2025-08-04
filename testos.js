import os from 'os';

export function obterInfoSistema(){
    return{
        sistema: os.type(),
        plataforma: os.plataform(),
        arquitetura: os.arch(),
        homeDir: os.homedir()
    };
}