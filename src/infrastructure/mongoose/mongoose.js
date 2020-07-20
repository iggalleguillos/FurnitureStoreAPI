
const mongoose = require('mongoose');

module.exports = mongoConnect = () => {
    return mongoose.connect(
        "mongodb+srv://nodetest:nodetest@cluster0.qfhhm.mongodb.net/nodetest?retryWrites=true&w=majority",
            { useNewUrlParser : true }
    ).catch(err =>{
        throw new Error("an error has ocurred when trying connect to mongo", err);
    });
}
 