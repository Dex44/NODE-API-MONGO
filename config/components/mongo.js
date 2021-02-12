// const mongoose = require('mongoose');
// const autoIncrement = require('mongoose-auto-increment');
// const config = require('../../config/config.json');
// const constants = require('../../config/constants');
// const { DATABASE_MONGO_PREFIX } = constants;
// const ENV = process.env.NODE_ENV || "development";
// const DATABASE_CONFIG_KEY = constants.DATABASE_CONFIG_KEY;

const MongoClient = require('mongodb').MongoClient;

// // replace the uri string with your connection string.
// const uri = "mongodb+srv://Mukesh:Mukesh44@cluster0.gf7qq.mongodb.net/nodeTest?retryWrites=true&w=majority"
// MongoClient.connect(uri, function(err, client) {
//    if(err) {
//         console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
//    }
//    console.log('Connected...');
//    const collection = client.db("test").collection("devices");
//    // perform actions on the collection object
//    client.close();
// });


module.exports = {
  bootstrap: () => {
    // console.log(` ##############  ENV = ${ENV} ############# `);
    // let config = common.getValue(DATABASE_CONFIG_KEY, etcdConfig.etcdInstance, {recursive: true}, true);
    // const mongodb = config.mongodb[ENV];
    // const connectionString = DATABASE_MONGO_PREFIX + /* mongodb.username + ':' + mongodb.password + '@' + */ mongodb.host + ':' + mongodb.port + '/' + mongodb.database; // There was an issue while connecting mongodb with development username and password
    // mongoose.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true}, (err, db) => {
    //   if (err) {
    //     console.error(err);
    //     throw new Error('Unable to connect MongoDB');
    //   }
    //   console.log(`###### Connected to MongoDB! ######`);
    //   autoIncrement.initialize(db);
    // });
    // // TODO: Validate DB Address

    const uri = "mongodb+srv://Mukesh:Mukesh44@cluster0.gf7qq.mongodb.net/nodeTest?retryWrites=true&w=majority"
MongoClient.connect(uri,{useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true}, function(err, db) {
   if(err) {
        console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
   }
   console.log('Connected...');
  //  const collection = client.db("test").collection("devices");
   // perform actions on the collection object
  //  client.close();
   autoIncrement.initialize(db);
});
  },
  config: null,
};
