/* eslint-disable prettier/prettier */
import { Schema, model } from 'mongoose';
const memoSchema = new Schema({
    name: {
        type: String
    },
    Title: {
        type: String
    },
    text: {
        type: String
    },
    type: {
        type: String
    },
    from: {
        type: String
    },
    id: {
        type: String
    }
});
export default model('MemoTemplate', memoSchema);