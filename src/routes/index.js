const ArticleRepository = require("../repositories/ArticleRepository");
const articleRepository = new ArticleRepository("articles");

module.exports = (app) => {

    app.get("/api/articles", async (request, response) => {
        const articles = await articleRepository.search({
            body: {
                "query": {
                    "match_all": {}
                }
            }
        });
        response.json(articles.hits.hits);
    })

    app.get("/api/articles/:id", async (request, response) => {
        const article = await articleRepository.getById(request.params.id);
        response.json(article);
    })

    app.post("/api/articles", async (request, response) => {
        const register = request.body;
        await articleRepository.create(register);
        response.sendStatus(201);
    })

    app.put("/api/articles/:id", async (request, response) => {
        const datasModified = request.body;
        await articleRepository.update(request.params.id, datasModified);
        response.sendStatus(204);
    })

    app.delete("/api/articles/:id", async (request, response) => {
        await articleRepository.remove(request.params.id);
        response.sendStatus(204);
    })
}
