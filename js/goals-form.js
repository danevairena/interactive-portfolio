const showGoalFormButton = document.getElementById("show-goal-form");
const goalForm = document.getElementById("goal-form");
const cancelGoalButton = document.getElementById("cancel-goal");

const goalInput = document.getElementById("goal-input");
const goalStepInput = document.getElementById("goal-step-input");
const goalError = document.getElementById("goal-error");

function closeGoalForm() {
    goalForm.reset();
    goalError.textContent = "";
    goalError.hidden = true;

    goalForm.hidden = true;
    showGoalFormButton.hidden = false;
    showGoalFormButton.setAttribute("aria-expanded", "false");
}

export function initGoalForm(onAddGoal) {
    showGoalFormButton.addEventListener("click", () => {
        showGoalFormButton.hidden = true;
        goalForm.hidden = false;
        showGoalFormButton.setAttribute("aria-expanded", "true");

        goalInput.focus();
    });

    cancelGoalButton.addEventListener("click", closeGoalForm);

    goalForm.addEventListener("submit", event => {
        event.preventDefault();

        const title = goalInput.value.trim();
        const firstStep = goalStepInput.value.trim();

        goalError.hidden = true;

        const error = onAddGoal(title, firstStep);

        if (error) {
            goalError.textContent = error;
            goalError.hidden = false;
            return;
        }

        closeGoalForm();
    });
}