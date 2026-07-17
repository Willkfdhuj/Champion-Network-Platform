const params = new URLSearchParams(window.location.search);

const userId = params.get("id");

const profile = document.getElementById("profile");

if (!userId) {
    profile.innerHTML = "No Discord ID provided.";
} else {

    fetch(`https://champion-api-zi7z.onrender.com/api/user/${userId}`)
        .then(response => response.json())
        .then(data => {

            profile.innerHTML = `
                <h3>💰 Balance</h3>
                <p>${data.balance} CC</p>

                <h3>🏆 Monthly CC</h3>
                <p>${data.monthlyCC} CC</p>

                <h3>🎰 Casino</h3>
                <p>Games Played: ${data.casino.gamesPlayed || 0}</p>
                <p>Biggest Win: ${data.casino.biggestWin || 0}</p>

                <h3>📦 Crates</h3>
                <p>${data.crates || 0}</p>
            `;

        })
        .catch(() => {
            profile.innerHTML = "Failed to load profile.";
        });
}
