import data from '../data.json';

function loadUserData() {
    const totalScore = document.querySelector('.score-circle>.total-score');
    const scores = {
        reaction: document.getElementById('reactionScore'),
        memory: document.getElementById('memoryScore'),
        verbal: document.getElementById('verbalScore'),
        visual: document.getElementById('visualScore'),
    }

    document.addEventListener('DOMContentLoaded', () => {
        let sum = 0;

        data.forEach(item => {
            sum += item.score;

            if (!(item.category.toLowerCase() in scores)) {
                throw new Error(`Invalid data. ${item.category} isn't recognized by the system`);
            }
            scores[item.category.toLowerCase()].textContent = item.score;
        })

        totalScore.textContent = Math.floor(sum / 4);
    })
}

loadUserData() //initial render
