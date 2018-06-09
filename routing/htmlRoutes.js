var path = require("path");

function routes(app)  {
    app.get("/survey", function(req, res)   {
        res.sendFile(path.join(__dirname + "/../public/survey.html"));
    });

    app.use(function(req, res)  {
        res.sendFile(path.join(__dirname + "/../public/index.html"));
    });
}

module.exports = routes;