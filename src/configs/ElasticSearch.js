const elasticsearch = require('elasticsearch');
const client = new elasticsearch.Client({
    host: process.env.ELASTIC_SEARCH_HOST
});


client.ping({
    requestTimeout: 1000
}, function (error) {
    if (error) {
        console.trace('elasticsearch cluster is down!');
    }
});

module.exports = client;
