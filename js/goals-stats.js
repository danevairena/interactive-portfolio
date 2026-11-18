const totalGoals = document.getElementById("total-goals");
const completedGoals = document.getElementById("completed-goals");
const progressPercent = document.getElementById("progress-percent");

export function renderStats(goals) {
    const total = goals.length;
    const completed = goals.filter(goal => goal.completed).length;

    const progress = total === 0
        ? 0
        : Math.round((completed / total) * 100);

    totalGoals.textContent = total;
    completedGoals.textContent = completed;
    progressPercent.textContent = `${progress}%`;
}