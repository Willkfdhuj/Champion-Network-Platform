fetch("http://localhost:3000/api/leaderboard")
    .then(response => response.json())
    .then(players => {

        const leaderboard = document.getElementById("leaderboard");

        leaderboard.innerHTML = "";

        players.forEach((player, index) => {

            const card = document.createElement("div");

            card.className = "player-card";

            card.innerHTML = `
                <h3>
                    ${index + 1}. Player
                </h3>

                <p>💰 ${player.balance} CC</p>
                <p>🏆 Monthly CC: ${player.monthlyCC}</p>
            `;

            leaderboard.appendChild(card);

        });

    })
    .catch(error => {
        console.log(error);
        document.getElementById("leaderboard").innerHTML =
        "Failed to load leaderboard";
    });
