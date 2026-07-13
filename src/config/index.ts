import dotenv from "dotenv"
import path from "path"


const rootPath = process.cwd()
dotenv.config({ path: path.join(rootPath, ".env") });


export default {
    port: process.env.PORT! || 3000,
    app_url: process.env.APP_URL!,
    database_url: process.env.DATABASE_URL!,
}