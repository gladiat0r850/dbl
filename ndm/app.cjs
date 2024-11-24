const express = require("express"); // Proper ES Module import

const app = express();

const team = [
    {
        name: "Vegito Blue",
        unitType: "Transforming",
        color: "GRN",
        episode: "Future saga",
        rarity: "SPARKING",
        Legends_Limited: true,
    },
    {
        name: "SSJ3 Gotenks",
        unitType: "Default",
        color: "RED",
        episode: "Majin buu saga",
        rarity: "SPARKING",
        Legends_Limited: true,
    },
    {
        name: "SSJ4 Gogeta",
        unitType: "Default",
        color: "PUR",
        episode: "GT",
        rarity: "ULTRA",
        Legends_Limited: false,
    },
];

app.get("/dblegends", (req, res) => {
    res.json(team);
});

app.listen(5000, () => {
    console.log("Listening to port 5000");
});
