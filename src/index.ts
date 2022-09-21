import "reflect-metadata";
import app from './app';
import {AppDataSource} from './db';

async function main(){
    try{
        await AppDataSource.initialize();
        console.log('Base de datos conectada');
        app.listen(3000, ()=>{
            console.log(`Servidor Iniciado`);
        });
        
    }catch(error){
        console.error(error);
    }

}

main();