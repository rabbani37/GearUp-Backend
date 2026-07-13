

import app from "./app";
import config from "./config/config.index";





const PORT = config.port;



async function main() {


    try {

        app.listen(PORT, () => {
            console.log(`Server is runnign on port: ${PORT}`);
        });

    } catch (error) {

        console.log(`Start the server: `, error);
        process.exit(1)
    }

};

main()