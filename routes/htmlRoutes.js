app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "javascript/home.html"));
});

app.get("/reserve", function (req, res) {
    res.sendFile(path.join(__dirname, "javascript/reserve.html"));
});

app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "javascript/tables.html"));
});