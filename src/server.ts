
import app from "./app";
import config from "./config";





const PORT = config.port;



function main() {


    try {

        app.listen(PORT, () => {
            console.log(`Server is runnign on port: ${PORT}`);
        });

    } catch (error) {

        console.log(`Start the server: `, error);

    }
    
};

main()