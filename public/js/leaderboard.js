fetch("https://champion-api-zi7z.onrender.com/api/leaderboard")
    .then(response => response.json())
    .then(players => {

        const leaderboard = document.getElementById("leaderboard");

        leaderboard.innerHTML = "";

        players.slice(0, 3).forEach((player, index) => {
            
            const card = document.createElement("div");

            card.className = "player-card";

            card.innerHTML = `
                <h3>
                    ${index === 0 ? "🥇" : index === 1 ? "🥈" : "🥉"} Player ${index + 1}
                </h3>

                <p>💰 ${player.balance} CC</p>
            `;

            leaderboard.appendChild(card);

        });

    })
    .catch(error => {
        console.log(error);
        document.getElementById("leaderboard").innerHTML =
        "Failed to load leaderboard";
    });
