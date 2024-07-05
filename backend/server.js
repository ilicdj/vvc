import {app} from "./app.js";
import mongoose from 'mongoose';

const DB = process.env.DB_CONNSTR;
mongoose.connect(DB, {
}).then(() => console.log(`🔥 Connected to the DB`)).catch(err => console.log('🔥🔥🔥🔥🔥',err));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`🔥 Listening on port ${PORT}`)
})