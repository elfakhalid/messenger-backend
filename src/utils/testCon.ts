import { Connection, createConnection } from 'typeorm';

let calls = 0;

export const testCon = async (): Promise<Connection> => {
    let drop = false;
    if (calls === 0) {
        drop = true;
    }
    calls++;
    return await createConnection({
        name: 'default',
        type: 'sqlite',
        database: 'messenger',
        synchronize: drop,
        dropSchema: drop,
        entities: [__dirname + '/../entities/*.ts']
    });
};
