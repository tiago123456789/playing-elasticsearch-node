const elasticClient = require("../configs/ElasticSearch");
const { v4 } = require("uuid");

module.exports = class ArticleRepository {

    constructor(index) {
        this._index = index;
    }

    getById(id) {
        return elasticClient.get({
            index: this._index,
            id: id
        });
    }

    search(query) {
        return elasticClient.search({
            index: this._index,
            from: 10,
            size: 10,
            ...query
        });
    }

    create(newRegister) {
        return elasticClient.create({
            index: this._index,
            id: v4(),
            body: newRegister
        });
    }

    update(id, datasModifieds) {
        return elasticClient.update({
            index: this._index,
            id,
            body: { doc: datasModifieds }
        })
    }

    remove(id) {
        return elasticClient.delete({
            index: this._index,
            id: id
        })
    }
}