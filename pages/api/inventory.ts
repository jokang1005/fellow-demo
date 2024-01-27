import { NextApiRequest, NextApiResponse } from "next";
import pgPromise, { IInitOptions } from "pg-promise";
import { IClient } from "pg-promise/typescript/pg-subset";

const connectionString = 'postgres://joanne:Hanadul!23@localhost:5432';
const initOptions: IInitOptions<{}, IClient> = {

}
const dbpgp = pgPromise(initOptions);
const db = dbpgp(connectionString);

export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const inventoryData = await db.any('SELECT * FROM fellow_inventory')
        res.json(inventoryData);
    } catch(error:any) {
        console.error('Error fetching data from database:', error.message);
        res.status(500).json({message: `${error.message}`});
    }
}