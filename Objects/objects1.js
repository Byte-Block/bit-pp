//1.Create an object that represents your favourite coffee. Please include coffee name, strength, flavour, milk, sugar, … everything you like!

var coffee = {
    name: "oreo",
    strength: "7/10",
    milk: "no",
    sugar: "no"

};

console.log(coffee);

var coffee2 = {
    name: "strong",
    strength: 10,
    milk: false,
    sugar: false
}

console.log(coffee2);

//2. Create an object that represents your favourite movie. Please include title, actors, director, genre, popularity. 

var movie = {
    title: "bit",
    actors: ["Brad Pit", "Nolo", "Tarantino"],
    director: "Who Knows",
    genre: "Comedy",
    imdb: "9/10"
}

console.log(movie.actors[1]);

var movie2 = {
    title: "Citizen Kane",
    actors: ["Orson Welles", "Joseph Cotten"],
    director: "Orson Welles",
    genre: "Drama",
    popularity: Infinity
}

console.log(movie2.actors[1]);

//3. Write a function that creates an object that represents a project. Each project is described by: description,  
// programming language, git repository, boolean status that says if the project is in development or not. 
// Add a method that prints out the project's repository,  a method that checks if the project is written in JavaScript 
// as well as a method that checks if the project is in development or not.

var f = function (description, programmingLanguage, gitRepository, inDevelopment) {
    var project = {
        description: description,
        programmingLanguage: programmingLanguage,
        gitRepository: gitRepository,
        inDevelopment: inDevelopment,
        printRepository: function () {
            console.log(this.gitRepository + "\n|-folder1" + "\n|-folder2" + "\n|_Main.exe");
        },
        isWrittenInJavascript: function () {
            if (this.programmingLanguage === 'Javascript') {
                return true;
            } else {
                return false;
            }
        },
        isInDevelopment: function () {
            return this.inDevelopment;
        }
    }
    return project;
}

var project = f('README.txt', 'C-esharp', 'https://github.com/Username/repository.git', false)
console.log(project);
project.printRepository();
console.log(project.isWrittenInJavascript());
console.log(project.isInDevelopment());

//4. Write a function that creates an object that represents a culinary recipe. 
// Each recipe is described by: name, type of cuisine, complexity (value from 1 to 5), list of ingredients, preparing time, preparing instruction. 
// Add a method that prints out all the ingredients necessary for the meal preparation. 
// Add a method that checks if a meal can be prepared for 15 minutes. 
// Add a method that changes the type of cuisine to the given value. 
// Add a method that delete a given ingredient from the list of ingredients.

var f = function (name, typeOfCuisine, Complexity, listOfIngredients, preparingTime, preparingInstruction) {
    var recipe = {
        name: name,
        typeOfCuisine: typeOfCuisine,
        Complexity: Complexity,
        listOfIngredients: listOfIngredients,
        preparingTime: preparingTime,
        preparingInstruction: preparingInstruction,
        printIngredients: function () {
            var res = '';

            for (var i = 0; i < this.listOfIngredients.length; i++) {
                res += this.listOfIngredients[i] + "\n";
            }
            console.log(res);
        },
        under15min: function () {
            if (this.preparingTime <= 15) {
                console.log("Can be prepared in less than 15 min");
            } else {
                console.log("No can do!");
            }
        },
        setTypeOfCuisine: function (typeOfCuisine) {
            this.typeOfCuisine = typeOfCuisine;
        },
        removeIngredient: function (ingredientToRemove) {
            var filteredIngredients = [];

            for (var i = 0; i < listOfIngredients.length; i++) {
                if (this.listOfIngredients !== ingredientToRemove) {
                    filteredIngredients[filteredIngredients.length] = this.listOfIngredients[i];
                }
            }
            this.listOfIngredients = filteredIngredients;
        },
        print: function () {
            console.log(
                "Name            => " + this.name + "\n" +
                "Cuisine         => " + this.typeOfCuisine + "\n" +
                "Ingredients     => " + this.listOfIngredients + "\n" +
                "Time to prepare => " + this.preparingTime + "\n"
            )
        }
    }
    return recipe;
}

var recipe = f("Carbonara", "it", 3, ['pasta', 'parmigiano', 'eggs'], 10, 'improvise');
console.log(recipe);
console.log(recipe.printIngredients());
console.log(recipe.under15min());
console.log(recipe.setTypeOfCuisine("pastiche"));
recipe.removeIngredient('eggs');
console.log(recipe.printIngredients());
recipe.print();

// 

var createProject = function (description, progLang, gitRep, isInDevel) {
    var project = {
        description: description,
        progLang: progLang,
        gitRep: gitRep,
        isInDevel: isInDevel,
        printRep: function () {
            console.log(this.gitRep);
        },
        isWrittenInJavascript: function () {
            console.log(this.progLang === "js");

        },
        isInDevelopment: function () {
            console.log(this.isInDevel);

        }
    }
    return project;
}

var project = createProject("description", "css", "repository", true);
project.printRep();
project.isWrittenInJavascript();
project.isInDevelopment();

//--------------------------------------------------------------------

function Project(description, programmingLanguage, gitRepository, inDevelopment) {
    this.description = description;
    this.programmingLanguage = programmingLanguage;
    this.gitRepository = gitRepository;
    this.inDevelopment = inDevelopment;
    this.printRepository = function () {
        console.log(this.gitRepository + "\n|-folder1" + "\n|-folder2" + "\n|_Main.exe");
    };
    this.isWrittenInJavascript = function () {
        if (this.programmingLanguage === 'Javascript') {
            return true;
        } else {
            return false;
        }
    };
    this.isInDevelopment = function () {
        return this.inDevelopment;
    };
}

var project = new Project('README.txt', 'C-esharp', 'https://github.com/Username/repository.git', false)
console.log(project);
project.printRepository();
console.log(project.isWrittenInJavascript());
console.log(project.isInDevelopment());


