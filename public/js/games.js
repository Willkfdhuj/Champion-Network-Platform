const games = [

    {
        name: "Geometry Dash",
        id: "geometrydash",
        image: "geometrydash.jpg"
    },

    {
        name: "Slope",
        id: "slope",
        image: "slope.jpg"
    },

    {
        name: "Run 3",
        id: "run3",
        image: "run3.jpg"
    },

    {
        name: "Basketball Bros",
        id: "basketballbros",
        image: "basketballbros.jpg"
    },

    {
        name: "Tetris",
        id: "tetris",
        image: "tetris.jpg"
    },

    {
        name: "2048",
        id: "2048",
        image: "2048.jpg"
    },

    {
        name: "Minecraft Classic",
        id: "minecraftclassic",
        image: "minecraftclassic.jpg"
    },

    {
        name: "Rooftop Snipers",
        id: "rooftopsnipers",
        image: "rooftopsnipers.jpg"
    },

    {
        name: "Flappy Bird",
        id: "flappybird",
        image: "flappybird.jpg"
    },

    {
        name: "Snake",
        id: "snake",
        image: "snake.jpg"
    },

    {
        name: "Pac-Man",
        id: "pacman",
        image: "pacman.jpg"
    },

    {
        name: "Space Invaders",
        id: "spaceinvaders",
        image: "spaceinvaders.jpg"
    },

    {
        name: "Soccer Random",
        id: "soccerandom",
        image: "soccerandom.jpg"
    },

    {
        name: "Football Bros",
        id: "footballbros",
        image: "footballbros.jpg"
    },

    {
        name: "8 Ball Pool",
        id: "pool",
        image: "pool.jpg"
    },

    {
        name: "Stickman Hook",
        id: "stickmanhook",
        image: "stickmanhook.jpg"
    },

    {
        name: "Vex 1",
        id: "vex1",
        image: "vex1.jpg"
    },

    {
        name: "Vex 2",
        id: "vex2",
        image: "vex2.jpg"
    },

    {
        name: "Vex 3",
        id: "vex3",
        image: "vex3.jpg"
    },

    {
        name: "Vex 4",
        id: "vex4",
        image: "vex4.jpg"
    },

    {
        name: "Vex 5",
        id: "vex5",
        image: "vex5.jpg"
    },

    {
        name: "Agar.io",
        id: "agar",
        image: "agar.jpg"
    },

    {
        name: "Slither.io",
        id: "slither",
        image: "slither.jpg"
    },

    {
        name: "Paper.io",
        id: "paperio",
        image: "paperio.jpg"
    },

    {
        name: "Krunker",
        id: "krunker",
        image: "krunker.jpg"
    },

    {
        name: "Shell Shockers",
        id: "shellshockers",
        image: "shellshockers.jpg"
    },

    {
        name: "Zombs Royale",
        id: "zombsroyale",
        image: "zombsroyale.jpg"
    },

    {
        name: "Cookie Clicker",
        id: "cookieclicker",
        image: "cookieclicker.jpg"
    },

    {
        name: "Idle Breakout",
        id: "idlebreakout",
        image: "idlebreakout.jpg"
    },

    {
        name: "Fireboy and Watergirl",
        id: "fireboywatergirl",
        image: "fireboywatergirl.jpg"
    },

    {
        name: "Temple Run",
        id: "temple",
        image: "temple.jpg"
    },

    {
        name: "Subway Surfers",
        id: "subway",
        image: "subway.jpg"
    },

    {
        name: "Drift Boss",
        id: "driftboss",
        image: "driftboss.jpg"
    },

    {
        name: "Moto X3M",
        id: "motox3m",
        image: "motox3m.jpg"
    },

    {
        name: "Happy Wheels",
        id: "happywheels",
        image: "happywheels.jpg"
    }

];



const container = document.getElementById("games");


function displayGames(list) {

    container.innerHTML = "";


    list.forEach(game => {


        const card = document.createElement("div");

        card.className = "game-card";


        card.innerHTML = `

            <img src="images/games/${game.image}">

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
