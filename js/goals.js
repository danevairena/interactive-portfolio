/* LEARNING GOALS DATA */

import { renderGoals } from "./goals-ui.js";
import { renderStats } from "./goals-stats.js";
import { initFilters } from "./goals-filters.js";
import { initGoalForm } from "./goals-form.js";

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
let currentFilter = "all";

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

function getFilteredGoals() {
    switch (currentFilter) {
        case "active":
            return goals.filter(goal => !goal.completed);

        case "completed":
            return goals.filter(goal => goal.completed);

        default:
            return goals;
    }
}

function addGoal(title, firstStep) {
    if (!title) {
        return "Please enter a learning goal.";
    }

    if (!firstStep) {
        return "Please enter the first step.";
    }

    const isDuplicate = goals.some(goal =>
        goal.title.trim().toLowerCase() === title.toLowerCase()
    );

    if (isDuplicate) {
        return "This learning goal already exists.";
    }

    const newGoal = {
        id: crypto.randomUUID(),
        title,
        firstStep,
        completed: false
    };

    goals.push(newGoal);
    updateUI();

    return null;
}

function updateUI() {
    const filteredGoals = getFilteredGoals();

    renderGoals(filteredGoals, toggleGoal, deleteGoal, currentFilter);
    renderStats(goals);
}

initFilters(filter => {
    currentFilter = filter;
    updateUI();
});

initGoalForm(addGoal);

updateUI();