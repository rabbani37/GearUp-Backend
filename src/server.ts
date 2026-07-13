

import app from "./app";
import config from "./config";
import { prisma } from "./lib/prisma";





const PORT = config.port;



async function main() {


    try {
        await prisma.$connect();
        console.log("Database connected successfully...");
        app.listen(PORT, () => {
            console.log(`Server is runnign on port: ${PORT}`);
        });

    } catch (error) {

        console.log(`Start the server: `, error);
        process.exit(1)
        await prisma.$disconnect()
    }

};

main()