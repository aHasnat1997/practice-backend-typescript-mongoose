import mongoose from "mongoose";
import app from "./app"
import config from "./config";

/**
 * main function
 */
(async function main() {
    try {
        /**
         * mongoDB connection
         */
        await mongoose.connect(config.database_url as string);
        console.log('Connected to MongoDB🔌');
        // const db = mongoose.connection;
        // db.on('error', console.error.bind(console, 'MongoDB connection error 💔 : '));
        // db.once('open', () => {
        //     console.log('Connected to MongoDB🔌');
        // })


        /**
         * server listening
         */
        app.listen(config.port, () => {
            console.log(`Server on 🔥 at ${config.port}`);
        });
    } catch (error) {
        console.log(error);
    }
})();