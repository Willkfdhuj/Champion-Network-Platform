console.log("GAMES.JS LOADED");

const games = [

{
    name: "Geometry Dash",
    id: "geometrydash",
    image: "images/gd.jpg",
    url: "https://web-dashers.github.io/"
},

{
    name: "Slope",
    id: "slope",
    image: "images/slope.jpg",
    url: "https://slopenexus.github.io/games/v11/index.html"
},

{
    name: "Run 3",
    id: "run3",
    image: "images/run3.jpg",
    url: "https://run3.io/"
},

{
    name: "Basketball Bros",
    id: "basketballbros",
    image: "images/basketballbros.jpg",
    url: "https://basketbros.io/"
},

{
    name: "Baseball Bros",
    id: "baseballbros",
    image: "images/bb.jpg",
    url: "https://baseballbros.io/"
},

{
    name: "Tetris",
    id: "tetris",
    image: "images/tetris.jpg",
    url: "https://tetris.com/play-tetris"
},

{
    name: "2048",
    id: "2048",
    image: "images/2048.jpg",
    url: "https://2048.name/"
},

{
    name: "Minecraft Classic",
    id: "minecraftclassic",
    image: "images/minecraftclassic.jpg",
    url: "https://classic.minecraft.net/"
},

{
    name: "Rooftop Snipers",
    id: "rooftopsnipers",
    image: "images/rooftopsnipers.jpg",
    url: "https://www.crazygames.com/game/rooftop-snipers"
},

{
    name: "Flappy Bird",
    id: "flappybird",
    image: "images/flappybird.jpg",
    url: "https://flappybird.io/"
},

{
    name: "Snake",
    id: "snake",
    image: "images/snake.jpg",
    url: "https://playsnake.org/"
},

{
    name: "Pac-Man",
    id: "pacman",
    image: "images/pacman.jpg",
    url: "https://www.google.com/logos/2010/pacman10-i.html"
},

{
    name: "Space Invaders",
    id: "spaceinvaders",
    image: "images/spaceinvaders.jpg",
    url: "https://www.crazygames.com/game/space-invaders"
},

{
    name: "Soccer Random",
    id: "soccerandom",
    image: "images/soccerandom.jpg",
    url: "https://www.crazygames.com/game/soccer-random"
},

{
    name: "Football Bros",
    id: "footballbros",
    image: "images/footballbros.jpg",
    url: "https://footballbros.io/"
},

{
    name: "8 Ball Pool",
    id: "pool",
    image: "images/pool.jpg",
    url: "https://www.crazygames.com/game/8-ball-billiards-classic"
},

{
    name: "Stickman Hook",
    id: "stickmanhook",
    image: "images/stickmanhook.jpg",
    url: "https://www.crazygames.com/game/stickman-hook"
},

{
    name: "Vex 1",
    id: "vex1",
    image: "images/vex1.jpg",
    url: "https://www.crazygames.com/game/vex-3"
},

{
    name: "Vex 2",
    id: "vex2",
    image: "images/vex2.jpg",
    url: "https://www.crazygames.com/game/vex-4"
},

{
    name: "Vex 3",
    id: "vex3",
    image: "images/vex3.jpg",
    url: "https://www.crazygames.com/game/vex-3"
},

{
    name: "Vex 4",
    id: "vex4",
    image: "images/vex4.jpg",
    url: "https://www.crazygames.com/game/vex-4"
},

{
    name: "Vex 5",
    id: "vex5",
    image: "images/vex5.jpg",
    url: "https://www.crazygames.com/game/vex-5"
},

{
    name: "Agar.io",
    id: "agar",
    image: "images/agar.jpg",
    url: "https://agar.io/"
},

{
    name: "Slither.io",
    id: "slither",
    image: "images/slither.jpg",
    url: "https://slither.io/"
},

{
    name: "Paper.io",
    id: "paperio",
    image: "images/paperio.jpg",
    url: "https://paper-io.com/"
},

{
    name: "Krunker",
    id: "krunker",
    image: "images/krunker.jpg",
    url: "https://krunker.io/"
},

{
    name: "Shell Shockers",
    id: "shellshockers",
    image: "images/shellshockers.jpg",
    url: "https://shellshock.io/"
},

{
    name: "Zombs Royale",
    id: "zombsroyale",
    image: "images/zombsroyale.jpg",
    url: "https://zombsroyale.io/"
},

{
    name: "Cookie Clicker",
    id: "cookieclicker",
    image: "images/cookieclicker.jpg",
    url: "https://orteil.dashnet.org/cookieclicker/"
},

{
    name: "Idle Breakout",
    id: "idlebreakout",
    image: "images/idlebreakout.jpg",
    url: "https://www.coolmathgames.com/0-idle-breakout"
},

{
    name: "Fireboy and Watergirl",
    id: "fireboywatergirl",
    image: "images/fireboywatergirl.jpg",
    url: "https://www.coolmathgames.com/0-fireboy-and-water-girl-forest-temple"
},

{
    name: "Temple Run",
    id: "temple",
    image: "images/temple.jpg",
    url: "https://www.crazygames.com/game/temple-run-2"
},

{
    name: "Subway Surfers",
    id: "subway",
    image: "images/subway.jpg",
    url: "https://poki.com/en/g/subway-surfers"
},

{
    name: "Drift Boss",
    id: "driftboss",
    image: "images/driftboss.jpg",
    url: "https://www.crazygames.com/game/drift-boss"
},

{
    name: "Moto X3M",
    id: "motox3m",
    image: "images/motox3m.jpg",
    url: "https://www.crazygames.com/game/moto-x3m"
},

{
    name: "Happy Wheels",
    id: "happywheels",
    image: "images/happywheels.jpg",
    url: "https://totaljerkface.com/happy_wheels.tjf"
},

{
    name: "Bob The Robber",
    id: "bobtherobber",
    image: "images/bobtherobber.jpg",
    url: "https://www.crazygames.com/game/bob-the-robber"
},

{
    name: "Bloons TD",
    id: "bloonstd",
    image: "images/bloonstd.jpg",
    url: "https://www.coolmathgames.com/0-bloons-tower-defense-5"
},

{
    name: "Cut The Rope",
    id: "cuttherope",
    image: "images/cuttherope.jpg",
    url: "https://www.crazygames.com/game/cut-the-rope"
},

{
    name: "Doodle Jump",
    id: "doodlejump",
    image: "images/doodlejump.jpg",
    url: "https://doodlejump.io/"
},

{
    name: "Super Mario 64",
    id: "mario64",
    image: "images/mario64.jpg",
    url: "https://supermario64pc.com/"
},

{
    name: "Chess",
    id: "chess",
    image: "images/chess.jpg",
    url: "https://www.chess.com/play/computer"
},

{
    name: "Checkers",
    id: "checkers",
    image: "images/checkers.jpg",
    url: "https://www.coolmathgames.com/0-checkers"
},

{
    name: "Minesweeper",
    id: "minesweeper",
    image: "images/minesweeper.jpg",
    url: "https://minesweeperonline.com/"
},

{
    name: "Solitaire",
    id: "solitaire",
    image: "images/solitaire.jpg",
    url: "https://solitaired.com/"
},

{
    name: "UNO",
    id: "uno",
    image: "images/uno.jpg",
    url: "https://www.crazygames.com/game/uno-online"
},

{
    name: "Among Us",
    id: "amongus",
    image: "images/amongus.jpg",
    url: "https://amongusplay.online/"
},

{
    name: "Gartic Phone",
    id: "garticphone",
    image: "images/garticphone.jpg",
    url: "https://garticphone.com/"
},

{
    name: "Wordle",
    id: "wordle",
    image: "images/wordle.jpg",
    url: "https://www.nytimes.com/games/wordle/index.html"
},

{
    name: "Hextris",
    id: "hextris",
    image: "images/hextris.jpg",
    url: "https://hextris.io/"
},

{
    name: "A Dark Room",
    id: "darkroom",
    image: "images/darkroom.jpg",
    url: "https://adarkroom.doublespeakgames.com/"
},

{
    name: "Chess Rush",
    id: "chessrush",
    image: "images/chessrush.jpg",
    url: "https://www.crazygames.com/"
},

{
    name: "Duck Life",
    id: "ducklife",
    image: "images/ducklife.jpg",
    url: "https://www.crazygames.com/game/duck-life"
},

{
    name: "Ninja Kiwi",
    id: "ninjakiwi",
    image: "images/ninjakiwi.jpg",
    url: "https://www.ninjakiwi.com/"
},

{
    name: "Bad Ice Cream",
    id: "badicecream",
    image: "images/badicecream.jpg",
    url: "https://www.crazygames.com/game/bad-ice-cream"
},

{
    name: "Zig Zag",
    id: "zigzag",
    image: "images/zigzag.jpg",
    url: "https://www.crazygames.com/game/zig-zag"
},

{
    name: "Geometry Dash Lite",
    id: "geometrydashlite",
    image: "images/gdlite.jpg",
    url: "https://geometrydashlite.io/"
},

{
    name: "Moto Rush",
    id: "motorush",
    image: "images/motorush.jpg",
    url: "https://www.crazygames.com/"
},

{
    name: "Tank Trouble",
    id: "tanktrouble",
    image: "images/tanktrouble.jpg",
    url: "https://tanktrouble.com/"
},

{
    name: "Duck Hunt",
    id: "duckhunt",
    image: "images/duckhunt.jpg",
    url: "https://www.crazygames.com/"
},

{
    name: "Classic Arcade",
    id: "arcade",
    image: "images/arcade.jpg",
    url: "https://www.crazygames.com/"
}
];
