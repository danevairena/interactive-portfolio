/* LEARNING GOALS DATA */

import { renderGoals } from "./goals-ui.js";
import { renderStats } from "./goals-stats.js";

const initialGoals = [
    {
        id: "goal-1",
        title: "Deepen my JavaScript knowledge",
        firstStep: "Build an interactive learning goals application using vanilla JavaScript.",
        completed: false
    },
    {
        id: "goal-2",
        title: "Improve my testing and debugging skills",
        firstStep: "Create and execute test scenarios for the application's core features.",
        completed: false
    },
    {
        id: "goal-3",
        title: "Write cleaner, maintainable code",
        firstStep: "Organize application logic into small functions with clear responsibilities.",
        completed: false
    }
];

let goals = initialGoals.map(goal => ({ ...goal }));

function toggleGoal(id) {
    const goal = goals.find(goal => goal.id === id);

    if (!goal) return;

    goal.completed = !goal.completed;
    updateUI();
}

function deleteGoal(id) {
    const confirmed = window.confirm(
        "Are you sure you want to delete this learning goal?"
    );

    if (!confirmed) return;

    goals = goals.filter(goal => goal.id !== id);
    updateUI();
}

function updateUI() {
    renderGoals(goals, toggleGoal, deleteGoal);
    renderStats(goals);
}

updateUI();