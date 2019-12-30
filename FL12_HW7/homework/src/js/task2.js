let maxInp = 8;
let stepMult = 4;
let minInp = 0;
let attempts = 3;
let totalPrize = 0;
let startPrize = 100;
let rnd;
let userInp
let decision = confirm('Do you want to play a game?');
if (!decision) {
    alert('You did not become a billionaire, but can.');
} else if (decision) {
    for (;;) {
        rnd = Math.round(Math.random() * maxInp);
        for (let i = attempts; i > 0; i--) {
            userInp = prompt(`Choose a roulet pocket from ${minInp} to ${maxInp}\rAtempts left: ${attempts}
Total prize: ${totalPrize}$\rPossible prize at current attempt: ${startPrize}$`);
            if (userInp === '' || +userInp < minInp || +userInp > maxInp || +userInp !== rnd || userInp === null) {
                attempts = --attempts;
                startPrize = Math.round(startPrize / 2);
            } else if (+userInp === rnd) {
                totalPrize = totalPrize + startPrize;
                decision = confirm(`Congratulation, you won! Your prize is: ${totalPrize} $. Do you want to continue?`);
                if (!decision) {
                    attempts = 0;
                   break;
                } else if (decision) {
                    for (let i = attempts; i < 4; i++) {
                        startPrize = startPrize * 2;
                    }
                    attempts = 3;
                    maxInp = maxInp + 4;
                    break;
                }
            }
        }
        if (attempts === 0) {
            alert(`Thank you for your participation. Your prize is:${totalPrize}$`);
            decision = confirm(`Play again?`);
            if (!decision) {
                break;
            } else {
                attempts = 3;
                startPrize = 100;
                maxInp = 8;
                totalPrize = 0;
            }
        }
    }
}