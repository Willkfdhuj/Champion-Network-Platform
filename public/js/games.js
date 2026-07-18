const games = [

    {
        name: "Geometry Dash",
        id: "geometrydash",
        image: "images/gd.jpg",
        url: ""
    },

    {
        name: "Slope",
        id: "slope",
        image: "images/slope.jpg",
        url: ""
    },

    {
        name: "Run 3",
        id: "run3",
        image: "images/run3.jpg",
        url: ""
    },

    {
        name: "Basketball Bros",
        id: "basketballbros",
        image: "images/basketballbros.jpg",
        url: ""
    },

    {
        name: "Tetris",
        id: "tetris",
        image: "images/tetris.jpg",
        url: ""
    },

    {
        name: "2048",
        id: "2048",
        image: "images/2048.jpg",
        url: ""
    },

    {
        name: "Minecraft Classic",
        id: "minecraftclassic",
        image: "images/minecraftclassic.jpg",
        url: ""
    },

    {
        name: "Rooftop Snipers",
        id: "rooftopsnipers",
        image: "images/rooftopsnipers.jpg",
        url: ""
    },

    {
        name: "Flappy Bird",
        id: "flappybird",
        image: "images/flappybird.jpg",
        url: ""
    },

    {
        name: "Snake",
        id: "snake",
        image: "images/snake.jpg",
        url: ""
    },

    {
        name: "Pac-Man",
        id: "pacman",
        image: "images/pacman.jpg",
        url: ""
    },

    {
        name: "Space Invaders",
        id: "spaceinvaders",
        image: "images/spaceinvaders.jpg",
        url: ""
    },

    {
        name: "Soccer Random",
        id: "soccerandom",
        image: "images/soccerandom.jpg",
        url: ""
    },

    {
        name: "Football Bros",
        id: "footballbros",
        image: "images/footballbros.jpg",
        url: ""
    },

    {
        name: "8 Ball Pool",
        id: "pool",
        image: "images/pool.jpg",
        url: ""
    },

    {
        name: "Stickman Hook",
        id: "stickmanhook",
        image: "images/stickmanhook.jpg",
        url: ""
    },

    {
        name: "Vex 1",
        id: "vex1",
        image: "images/vex1.jpg",
        url: ""
    },

    {
        name: "Vex 2",
        id: "vex2",
        image: "images/vex2.jpg",
        url: ""
    },

    {
        name: "Vex 3",
        id: "vex3",
        image: "images/vex3.jpg",
        url: ""
    },

    {
        name: "Vex 4",
        id: "vex4",
        image: "images/vex4.jpg",
        url: ""
    },

    {
        name: "Vex 5",
        id: "vex5",
        image: "images/vex5.jpg",
        url: ""
    },

    {
        name: "Agar.io",
        id: "agar",
        image: "images/agar.jpg",
        url: ""
    },

    {
        name: "Slither.io",
        id: "slither",
        image: "images/slither.jpg",
        url: ""
    },

    {
        name: "Paper.io",
        id: "paperio",
        image: "images/paperio.jpg",
        url: ""
    },

    {
        name: "Krunker",
        id: "krunker",
        image: "images/krunker.jpg",
        url: ""
    },

    {
        name: "Shell Shockers",
        id: "shellshockers",
        image: "images/shellshockers.jpg",
        url: ""
    },

    {
        name: "Zombs Royale",
        id: "zombsroyale",
        image: "images/zombsroyale.jpg",
        url: ""
    },

    {
        name: "Cookie Clicker",
        id: "cookieclicker",
        image: "images/cookieclicker.jpg",
        url: ""
    },

    {
        name: "Idle Breakout",
        id: "idlebreakout",
        image: "images/idlebreakout.jpg",
        url: ""
    },

    {
        name: "Fireboy and Watergirl",
        id: "fireboywatergirl",
        image: "images/fireboywatergirl.jpg",
        url: ""
    },

    {
        name: "Temple Run",
        id: "temple",
        image: "images/temple.jpg",
        url: ""
    },

    {
        name: "Subway Surfers",
        id: "subway",
        image: "images/subway.jpg",
        url: ""
    },

    {
        name: "Drift Boss",
        id: "driftboss",
        image: "images/driftboss.jpg",
        url: ""
    },

    {
        name: "Moto X3M",
        id: "motox3m",
        image: "images/motox3m.jpg",
        url: ""
    },

    {
        name: "Happy Wheels",
        id: "happywheels",
        image: "images/happywheels.jpg",
        url: ""
    }

];


const container = document.getElementById("games");


function displayGames(list) {

    container.innerHTML = "";

    list.forEach(game => {

        const card = document.createElement("div");

        card.className = "game-card";

        card.innerHTML = `

            <img src="${game.image}">

            <h3>${game.name}</h3>

            <a href="play.html?game=${game.id}">
                <button>Play</button>
            </a>

        `;

        container.appendChild(card);

    });

}


displayGames(games);



document.getElementById("search").addEventListener("input", function(){

    const value = this.value.toLowerCase();

    const filtered = games.filter(game =>
        game.name.toLowerCase().includes(value)
    );

    displayGames(filtered);

});
