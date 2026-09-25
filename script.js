
/* =====================================================
   HER WELLNESS JOURNEY
   Interactive JavaScript
===================================================== */


/* =====================================================
   DAILY DATE & GREETING
===================================================== */

function setDateAndGreeting() {

    const greeting = document.getElementById("todayGreeting");
    const dateElement = document.getElementById("todayDate");

    const now = new Date();
    const hour = now.getHours();

    let message;

    if (hour < 12) {
        message = "Good Morning, Beautiful";
    } else if (hour < 18) {
        message = "Good Afternoon, Beautiful";
    } else {
        message = "Good Evening, Beautiful";
    }

    greeting.textContent = message;

    const formattedDate = now.toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric"
    });

    dateElement.textContent = formattedDate;
}


/* =====================================================
   DAILY INTENTIONS
===================================================== */

const intentions = [

    "Today I choose to move gently, breathe deeply, and honor what my body needs.",

    "I don't have to rush my healing. I can take one meaningful step at a time.",

    "Today I give myself permission to rest without guilt.",

    "I will listen to my body instead of fighting against it.",

    "Today I choose peace over pressure.",

    "I am allowed to protect my energy and create healthy boundaries.",

    "I can do less and still be worthy of love, respect, and success.",

    "Today I will celebrate progress instead of demanding perfection.",

    "My needs matter. My feelings matter. I matter.",

    "I am creating a life that feels safe, meaningful, and authentic to me."

];


function newIntention() {

    const element = document.getElementById("dailyIntention");

    const randomIndex =
        Math.floor(Math.random() * intentions.length);

    element.textContent = intentions[randomIndex];

}


/* =====================================================
   AFFIRMATIONS
===================================================== */

const affirmations = [

    "I am worthy of taking up space.",

    "I trust myself to make choices that honor me.",

    "I do not have to prove my worth through exhaustion.",

    "My boundaries are an expression of self-respect.",

    "I am becoming more comfortable with the woman I am.",

    "I can change my life without abandoning myself.",

    "I deserve relationships that feel safe, respectful, and reciprocal.",

    "I am allowed to rest and still be ambitious.",

    "My voice deserves to be heard.",

    "I release the need to be everything for everyone.",

    "I am learning to treat myself with patience.",

    "My softness and my strength can exist together.",

    "I am not behind. My journey has its own timing.",

    "I can begin again as many times as I need.",

    "I choose myself without guilt.",

    "I am deserving of peace.",

    "I am enough while I am still growing.",

    "I honor the woman I have survived being and the woman I am becoming."

];


function newAffirmation() {

    const element =
        document.getElementById("affirmation");

    const randomIndex =
        Math.floor(Math.random() * affirmations.length);

    element.textContent =
        affirmations[randomIndex];

}


function newBigAffirmation() {

    const element =
        document.getElementById("bigAffirmation");

    const randomIndex =
        Math.floor(Math.random() * affirmations.length);

    element.textContent =
        affirmations[randomIndex];

}


/* =====================================================
   EXERCISES
===================================================== */

const exercises = [

    {
        name: "Gentle Yoga Flow",
        icon: "🧘🏽‍♀️",
        description:
            "Move slowly through comfortable poses while connecting movement with your breath.",
        time: "10–20 min",
        level: "Gentle",
        focus: "Flexibility"
    },

    {
        name: "Somatic Body Awareness",
        icon: "🌿",
        description:
            "Use slow, comfortable movements to notice sensations and reconnect with your body.",
        time: "5–15 min",
        level: "Very Gentle",
        focus: "Body Awareness"
    },

    {
        name: "Tai Chi Flow",
        icon: "🌊",
        description:
            "Practice slow, flowing movements with relaxed breathing and mindful weight shifting.",
        time: "10–20 min",
        level: "Gentle",
        focus: "Balance"
    },

    {
        name: "Gentle Pilates",
        icon: "🌸",
        description:
            "Try controlled, low-impact movements focused on posture, stability, and core awareness.",
        time: "10–20 min",
        level: "Gentle",
        focus: "Stability"
    },

    {
        name: "Mindful Walking",
        icon: "🚶🏽‍♀️",
        description:
            "Take a comfortable walk while paying attention to your breathing, surroundings, and body.",
        time: "10–30 min",
        level: "Gentle",
        focus: "Movement"
    },

    {
        name: "Breathing Practice",
        icon: "🌬️",
        description:
            "Sit comfortably and practice slow, relaxed breathing without forcing the breath.",
        time: "3–10 min",
        level: "Very Gentle",
        focus: "Relaxation"
    },

    {
        name: "Gentle Full Body Stretch",
        icon: "🌱",
        description:
            "Explore comfortable stretches for your neck, shoulders, back, hips, and legs.",
        time: "5–15 min",
        level: "Gentle",
        focus: "Mobility"
    },

    {
        name: "Chair Yoga",
        icon: "🪷",
        description:
            "Use a sturdy chair for gentle seated and supported movements.",
        time: "10–15 min",
        level: "Very Gentle",
        focus: "Mobility"
    },

    {
        name: "Mindful Mobility",
        icon: "✨",
        description:
            "Move through a few slow joint-friendly mobility exercises at a comfortable pace.",
        time: "5–15 min",
        level: "Gentle",
        focus: "Mobility"
    },

    {
        name: "Restorative Movement",
        icon: "🌙",
        description:
            "Combine comfortable stretching, breathing, and rest to create a slower movement session.",
        time: "10–20 min",
        level: "Very Gentle",
        focus: "Restoration"
    }

];


function displayExercise(exercise) {

    document.getElementById("exerciseTitle")
        .textContent = exercise.name;

    document.getElementById("exerciseIcon")
        .textContent = exercise.icon;

    document.getElementById("exerciseDescription")
        .textContent = exercise.description;

    document.getElementById("exerciseTime")
        .textContent = exercise.time;

    document.getElementById("exerciseLevel")
        .textContent = exercise.level;

    document.getElementById("exerciseFocus")
        .textContent = exercise.focus;

}


/* =====================================================
   DAILY EXERCISE
===================================================== */

function getDailyExercise() {

    const today = new Date();

    const dayNumber =
        Math.floor(
            Date.UTC(
                today.getFullYear(),
                today.getMonth(),
                today.getDate()
            ) / 86400000
        );

    const index =
        dayNumber % exercises.length;

    return exercises[index];

}


function generateDailyExercise() {

    const exercise =
        getDailyExercise();

    displayExercise(exercise);

}


/* =====================================================
   RANDOM EXERCISE BUTTON
===================================================== */

function generateExercise() {

    const randomIndex =
        Math.floor(Math.random() * exercises.length);

    displayExercise(exercises[randomIndex]);

}


/* =====================================================
   WATER COUNTER
===================================================== */

let waterCount =
    Number(localStorage.getItem("waterCount")) || 0;


function updateWaterDisplay() {

    document.getElementById("waterCount")
        .textContent = waterCount;

}


function changeWater(amount) {

    waterCount += amount;

    if (waterCount < 0) {
        waterCount = 0;
    }

    if (waterCount > 20) {
        waterCount = 20;
    }

    localStorage.setItem(
        "waterCount",
        waterCount
    );

    updateWaterDisplay();

}


/* =====================================================
   MOOD RESPONSES
===================================================== */

const moodResponses = {

    happy: {
        title: "Let yourself enjoy this feeling. 🌸",
        message:
            "Celebrate the good moment without feeling like you need to explain it or make it productive."
    },

    peaceful: {
        title: "Protect this peaceful energy. 🌿",
        message:
            "Give yourself a few quiet minutes today to breathe, slow down, and enjoy being present."
    },

    sad: {
        title: "You don't have to rush yourself out of sadness. 🌧️",
        message:
            "Give yourself permission to feel. A comforting shower, music, journaling, or talking with someone safe may help."
    },

    angry: {
        title: "Your anger is giving you information. 🔥",
        message:
            "Pause before reacting. Take some space, breathe, write down what happened, and decide what boundary you may need."
    },

    low: {
        title: "Today can be a low-pressure day. 🌙",
        message:
            "Choose one small thing that supports you. A glass of water, a gentle stretch, or a few minutes of fresh air counts."
    },

    fatigue: {
        title: "Your energy deserves respect. 🫧",
        message:
            "Consider reducing the demands on yourself today. Rest, hydration, nourishment, and gentle movement can all be part of your routine."
    },

    anxious: {
        title: "Come back to the present moment. 🌊",
        message:
            "Try noticing five things around you, relaxing your shoulders, and taking a few slow breaths."
    },

    motivated: {
        title: "Use the energy without spending all of it. ✨",
        message:
            "Choose one meaningful goal and give yourself permission to stop before you are completely depleted."
    },

    overwhelmed: {
        title: "You don't have to solve everything today. 🌫️",
        message:
            "Choose your next smallest step. Everything else can wait while you take care of what is immediately in front of you."
    },

    restless: {
        title: "Give your energy somewhere gentle to go. 🌀",
        message:
            "Try a short walk, slow stretching, Tai Chi, or a few minutes of mindful movement."
    }

};


function selectMood(mood) {

    const buttons =
        document.querySelectorAll(".mood-card");

    buttons.forEach(button => {

        button.classList.remove("active");

    });


    event.currentTarget.classList.add("active");


    const response =
        moodResponses[mood];

    const container =
        document.getElementById("moodResponse");


    container.innerHTML = `

        <span>${getMoodIcon(mood)}</span>

        <h3>${response.title}</h3>

        <p>${response.message}</p>

    `;

}


function getMoodIcon(mood) {

    const icons = {

        happy: "😊",
        peaceful: "🌿",
        sad: "🌧️",
        angry: "🔥",
        low: "🌙",
        fatigue: "🫧",
        anxious: "🌊",
        motivated: "✨",
        overwhelmed: "🌫️",
        restless: "🌀"

    };

    return icons[mood];

}


/* =====================================================
   MEAL IDEAS
===================================================== */

const meals = [

    {
        name: "Avocado & Egg Toast",
        description:
            "Whole-grain toast topped with avocado, eggs, tomatoes, and greens."
    },

    {
        name: "Colorful Nourish Bowl",
        description:
            "Build a bowl with leafy greens, vegetables, beans or protein, grains, and a simple dressing."
    },

    {
        name: "Berry Yogurt Bowl",
        description:
            "Greek yogurt with berries, nuts or seeds, and a sprinkle of oats."
    },

    {
        name: "Mediterranean Plate",
        description:
            "Vegetables, hummus, whole grains, olives, and your favorite protein."
    },

    {
        name: "Veggie Omelet",
        description:
            "Eggs with spinach, peppers, tomatoes, onions, and a side of fruit."
    },

    {
        name: "Simple Salmon Bowl",
        description:
            "Salmon with greens, vegetables, rice or another whole grain, and avocado."
    },

    {
        name: "Chickpea Salad",
        description:
            "Chickpeas, cucumber, tomatoes, greens, herbs, and olive oil with lemon."
    },

    {
        name: "Warm Oatmeal Bowl",
        description:
            "Oatmeal topped with berries, banana, nuts, seeds, or nut butter."
    }

];


function newMeal() {

    const randomIndex =
        Math.floor(Math.random() * meals.length);

    const meal =
        meals[randomIndex];

    document.getElementById("mealIdea")
        .textContent = meal.name;

    document.getElementById("mealDescription")
        .textContent = meal.description;

}


/* =====================================================
   TO-DO LIST
===================================================== */

let todos =
    JSON.parse(
        localStorage.getItem("wellnessTodos")
    ) || [];


function saveTodos() {

    localStorage.setItem(
        "wellnessTodos",
        JSON.stringify(todos)
    );

}


function renderTodos() {

    const list =
        document.getElementById("todoList");

    list.innerHTML = "";


    todos.forEach((todo, index) => {

        const li =
            document.createElement("li");


        li.innerHTML = `

            <div class="todo-item-content
                ${todo.completed ? "completed" : ""}">

                <input
                    type="checkbox"
                    ${todo.completed ? "checked" : ""}
                    onchange="toggleTodo(${index})"
                >

                <span>${escapeHTML(todo.text)}</span>

            </div>

            <button
                class="delete-todo"
                onclick="deleteTodo(${index})"
                title="Delete task"
            >
                ✕
            </button>

        `;


        list.appendChild(li);

    });


    updateTodoProgress();

}


function addTodo() {

    const input =
        document.getElementById("todoInput");

    const text =
        input.value.trim();


    if (text === "") {

        input.focus();

        return;

    }


    todos.push({

        text: text,

        completed: false

    });


    saveTodos();

    renderTodos();

    input.value = "";

    input.focus();

}


function toggleTodo(index) {

    todos[index].completed =
        !todos[index].completed;

    saveTodos();

    renderTodos();

}


function deleteTodo(index) {

    todos.splice(index, 1);

    saveTodos();

    renderTodos();

}


function updateTodoProgress() {

    const completed =
        todos.filter(todo => todo.completed).length;

    const total =
        todos.length;

    const element =
        document.getElementById("todoProgress");


    if (total === 0) {

        element.textContent =
            "0 completed";

        return;

    }


    element.textContent =
        `${completed} of ${total} completed`;

}


/* =====================================================
   ENTER KEY FOR TO-DO LIST
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const input =
        document.getElementById("todoInput");

    input.addEventListener("keydown", function(event) {

        if (event.key === "Enter") {

            addTodo();

        }

    });

});


/* =====================================================
   NOTES
===================================================== */

function loadNotes() {

    const savedNotes =
        localStorage.getItem("wellnessNotes");

    if (savedNotes !== null) {

        document.getElementById("wellnessNotes")
            .value = savedNotes;

    }

}


function saveNotes() {

    const notes =
        document.getElementById("wellnessNotes")
        .value;

    localStorage.setItem(
        "wellnessNotes",
        notes
    );


    const message =
        document.getElementById("saveMessage");

    message.textContent =
        "✓ Your notes have been saved.";

}


function clearNotes() {

    const confirmed =
        confirm(
            "Are you sure you want to clear your wellness notes?"
        );


    if (!confirmed) {

        return;

    }


    document.getElementById("wellnessNotes")
        .value = "";

    localStorage.removeItem("wellnessNotes");


    document.getElementById("saveMessage")
        .textContent =
        "Your notes stay in this browser.";

}


/* =====================================================
   WELLNESS SCORE
===================================================== */

function updateScore() {

    const checkboxes =
        document.querySelectorAll(
            ".wellness-check input[type='checkbox']"
        );


    let completed = 0;


    checkboxes.forEach(box => {

        if (box.checked) {

            completed++;

        }

    });


    const percentage =
        Math.round(
            (completed / checkboxes.length) * 100
        );


    document.getElementById("wellnessScore")
        .textContent =
        `${percentage}%`;

}


/* =====================================================
   DAILY RESET FOR WATER
===================================================== */

function resetWaterIfNewDay() {

    const today =
        new Date().toDateString();

    const savedDate =
        localStorage.getItem("waterDate");


    if (savedDate !== today) {

        waterCount = 0;

        localStorage.setItem(
            "waterCount",
            0
        );

        localStorage.setItem(
            "waterDate",
            today
        );

    }

}


/* =====================================================
   SIMPLE HTML SECURITY HELPER
===================================================== */

function escapeHTML(text) {

    const div =
        document.createElement("div");

    div.textContent = text;

    return div.innerHTML;

}


/* =====================================================
   START WEBSITE
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    setDateAndGreeting();

    resetWaterIfNewDay();

    updateWaterDisplay();

    generateDailyExercise();

    newMeal();

    renderTodos();

    loadNotes();

    updateScore();

});
