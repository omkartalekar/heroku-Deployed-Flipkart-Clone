import mongoose from 'mongoose';

const Connection = async (URL) => {
        // const URL = `mongodb+srv://${username}:${password}@ecommercewebsite.22od5.mongodb.net/?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false });
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }

};

export default Connection;