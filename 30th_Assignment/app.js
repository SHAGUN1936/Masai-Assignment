document.addEventListener("DOMContentLoaded", () => {
    loadRecipes();
    document.getElementById("recipeForm").addEventListener("submit", addRecipe);
    document.getElementById("darkModeToggle").addEventListener("click", toggleDarkMode);

   
    document.getElementById("home").style.display = "block";

    
    if (localStorage.getItem("darkMode") === "true") {
        document.body.classList.add("dark-mode");
    }
});


function showSection(sectionId) {
    document.querySelectorAll(".section").forEach(section => section.style.display = "none");
    document.getElementById(sectionId).style.display = "block";
}


function addRecipe(e) {
    e.preventDefault();

    const recipeName = document.getElementById("recipeName").value;
    const ingredients = document.getElementById("ingredients").value.split(",");
    const category = document.getElementById("category").value;
    const steps = document.getElementById("steps").value;

    const recipe = { name: recipeName, ingredients, category, steps };

    const recipes = getRecipes();
    recipes.push(recipe);
    saveRecipes(recipes);
    loadRecipes();
    document.getElementById("recipeForm").reset();
    alert("Recipe added successfully!");
}


function loadRecipes() {
    const recipes = getRecipes();
    const container = document.getElementById("recipesContainer");
    container.innerHTML = "";

    recipes.forEach((recipe, index) => {
        container.innerHTML += `
            <div class="recipe-card">
                <h3>${recipe.name}</h3>
                <p><strong>Category:</strong> ${recipe.category}</p>
                <table class="ingredients-table">
                    <tr><th>Ingredients</th></tr>
                    ${recipe.ingredients.map(ing => `<tr><td>${ing}</td></tr>`).join("")}
                </table>
                <p><strong>Steps:</strong> ${formatText(recipe.steps)}</p>
                <button onclick="deleteRecipe(${index})">Delete</button>
            </div>
        `;
    });
}


function formatText(text) {
    return text
        .replace(/\*{2}(.+?)\*{2}/g, "<b>$1</b>") 
        .replace(/\*(.+?)\*/g, "<i>$1</i>")       
        .replace(/_(.+?)_/g, "<u>$1</u>");         
}


function filterRecipes() {
    const category = document.getElementById("filterCategory").value;
    const recipes = getRecipes();
    const filteredRecipes = category === "all" ? recipes : recipes.filter(recipe => recipe.category === category);
    displayFilteredRecipes(filteredRecipes);
}

function displayFilteredRecipes(recipes) {
    const container = document.getElementById("recipesContainer");
    container.innerHTML = "";

    recipes.forEach(recipe => {
        container.innerHTML += `
            <div class="recipe-card">
                <h3>${recipe.name}</h3>
                <p><strong>Category:</strong> ${recipe.category}</p>
                <table class="ingredients-table">
                    <tr><th>Ingredients</th></tr>
                    ${recipe.ingredients.map(ing => `<tr><td>${ing}</td></tr>`).join("")}
                </table>
                <p><strong>Steps:</strong> ${formatText(recipe.steps)}</p>
            </div>
        `;
    });
}

// Delete Recipe
function deleteRecipe(index) {
    const recipes = getRecipes();
    recipes.splice(index, 1);
    saveRecipes(recipes);
    loadRecipes();
}


function toggleDarkMode() {
    const isDark = document.body.classList.toggle("dark-mode");
    
   
    document.querySelector("header").classList.toggle("dark-mode");
    document.querySelectorAll(".recipe-card, form, nav a").forEach(el => el.classList.toggle("dark-mode"));

  
    localStorage.setItem("darkMode", isDark);
}

document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("darkMode") === "true") {
        toggleDarkMode(); 
    }

    document.getElementById("darkModeToggle").addEventListener("click", toggleDarkMode);
});



function saveRecipes(recipes) {
    localStorage.setItem("recipes", JSON.stringify(recipes));
}

function getRecipes() {
    return JSON.parse(localStorage.getItem("recipes")) || [];
}
