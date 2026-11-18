/* LEARNING GOALS UI */

const goalsList = document.getElementById("goals-list");
const goalsEmpty = document.getElementById("goals-empty");

export function renderGoals(goals, onToggle, onDelete, currentFilter) {
    goalsList.replaceChildren();

    if (goals.length === 0) {
        const messages = {
            all: "No learning goals yet. Add your first goal!",
            active: "No active goals. Great progress!",
            completed: "No completed goals yet. Keep going!"
        };

        goalsEmpty.textContent = messages[currentFilter];
        goalsEmpty.hidden = false;
        return;
    }

    goalsEmpty.hidden = true;

    goals.forEach(goal => {
        const listItem = document.createElement("li");
        listItem.classList.add("goal-item");

        if (goal.completed) {
            listItem.classList.add("completed");
        }

        // Status button
        const statusButton = document.createElement("button");
        statusButton.type = "button";
        statusButton.classList.add("goal-status");
        statusButton.textContent = goal.completed ? "✓" : "";
        statusButton.setAttribute(
            "aria-label",
            goal.completed ? "Mark as active" : "Mark as completed"
        );

        statusButton.addEventListener("click", () => {
            onToggle(goal.id);
        });

        // Goal content

        const goalDetails = document.createElement("div");
        goalDetails.classList.add("goal-details");

        const goalTitle = document.createElement("h3");
        goalTitle.classList.add("goal-title");
        goalTitle.textContent = goal.title;

        const goalDescription = document.createElement("p");
        goalDescription.classList.add("goal-description");
        goalDescription.textContent = goal.firstStep;

        goalDetails.append(goalTitle, goalDescription);

        // Delete button
        const deleteButton = document.createElement("button");
        deleteButton.type = "button";
        deleteButton.classList.add("goal-delete");
        deleteButton.textContent = "×";
        deleteButton.setAttribute(
            "aria-label",
            `Delete ${goal.title}`
        );

        deleteButton.addEventListener("click", () => {
            onDelete(goal.id);
        });

        listItem.append(statusButton, goalDetails, deleteButton);
        goalsList.append(listItem);
    });
}