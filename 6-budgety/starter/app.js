/*var budgetController = (function (){  Module Pattern using  IIFE´s
    var x = 23;
    var add = function(a){ //Only can be accessed using public test method
        return x + a;
    }

    return { //Returning Object containing a method
        publicTest: function(b){
            return add(b);
        }
    }
})();

//budgetController.publicTest(5);

var uiController = (function(){
    
    return {

    }
})();

// Modules above are independent from each other

var controller = (function(budgetCtrl, uiCtrl){ //We can pass arguments to modules
    var z = budgetCtrl.publicTest(5);

    return {
        anotherPublic: function(){
            console.log(z);
        }
    }

})(budgetController, uiController); // Inside the function they have different names
*/


//BUDGET CONTROLLER
var budgetController = (function (){ /* Module Pattern using  IIFE´s*/

    var Expense = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
        this.percentage = -1;
    };

    var Income = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
    };

    Expense.prototype.calcPercentage = function(totalIncome){ //ONLY calculates percentage
        if(totalIncome > 0){
            this.percentage = Math.round((this.value / totalIncome) * 100);
        }
        else{
            this.percentage = -1;
        }
    };

    Expense.prototype.getPercentage = function(){
        return this.percentage; //returns percentage
    };


    var data = {
        allItems: {
            exp: [],
            inc : []
        },
        totals: {
            exp : 0,
            inc : 0
        },
        budget: 0,
        percentage: -1
    };

    var calculateTotal = function(type){
        var sum = 0;

        data.allItems[type].forEach(function(current){ //Current element in the array
            sum += current.value;
        });

        data.totals[type] = sum
    };

    return{
        addItem: function(type, desc, val){ //Type, description & value
            
            var newItem, ID;
            // Create new id
            if(data.allItems[type].length > 0){
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1; //ID = lastID + 1
                                        //Lenght of the array (either inc or exp) - 1
            }
            else{
                ID = 0;
            }


            //Create new item based on "inc" or "exp" type
            if(type === "exp"){
                newItem = new Expense (ID, desc, val);
            }
            else if(type === "inc"){
                newItem = new Income (ID, desc, val);
            }

            //Push into the data structure
            data.allItems[type].push(newItem);

            //return the new Element
            return newItem;

        },

        deleteItem: function(type, id){

            var ids, index;
            ids = data.allItems[type].map(function(current){ //map returns an array. Current object in th array
                return current.id; //Ids in the array. ids = [1,2,5,6]
            });

            index = ids.indexOf(id); //Returns the index number of the element we eant to erase

            if(index !== -1){ //If element exists, we delete
                data.allItems[type].splice(index, 1); //Position of element & delete 1 item
            }

        },

        calculateBudget: function(){

            //Calculate Total Income & Expenses
            calculateTotal("exp");
            calculateTotal("inc");

            //Calculate the Budget: Income - Expenses
            data.budget = data.totals.inc - data.totals.exp;

            //Calculate the Percentage of Income that we spent
            if(data.totals.inc > 0){
                data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
            }
            else{
                data,percentage = -1; //Doesn´t exist
            }


        },

        calculatePercentages: function(){
            /*
            a= 20
            b= 10
            c= 40
            inc = 100
            a = 20/100%
            */
            data.allItems.exp.forEach(function(current){
                current.calcPercentage(data.totals.inc);
            });
        },

        getPercentages: function(){

            var allPerc = data.allItems.exp.map(function(current){
                return current.getPercentage();
            });
            return allPerc;         
        },

        getBudget: function(){
            return{
                budget: data.budget,
                totalInc: data.totals.inc,
                totalExp: data.totals.exp,
                percentage: data.percentage
            };
        },

        testing: function(){
            console.log(data);
        }
    };

})();


//UI CONTROLLER
var uiController = (function(){

    var DOMstrings = {
        inputType : ".add__type",
        inputDescription : ".add__description",
        inputValue : ".add__value",
        inputButton : ".add__btn",
        incomeContainer: ".income__list",
        expensesContainer: ".expenses__list",
        budgetLabel: ".budget__value",
        incomeLabel: ".budget__income--value",
        expensesLabel: ".budget__expenses--value",
        percentageLabel: ".budget__expenses--percentage",
        container: ".container",
        expensesPercentageLabel: ".item__percentage",
        dateLabel: ".budget__title--month"
    };

    var formatNumber = function(num, type){

        var numSplit, int, dec, sign;
        /*
        + or - before number
        2 decimal points
        comma separating thousands

        2310.4567 -> + 2,310.46
        2000 -> + 2,000.00
        */

        num = Math.abs(num); //absolute part

        num = num.toFixed(2); //Num with 2 decimals

        numSplit = num.split(".");
        
        int = numSplit[0];
        dec = numSplit[1];

        if(int.length > 3){
            int = int.substr(0, int.length - 3) + "," + int.substr(int.length - 3 , 3); //start, number of elements to take
        }

        //type === "epx" ? sign = "-" : sign = "+"; 

        return (type === "exp" ? sign = "-" : sign = "+") + " " + int + "." + dec;

    };

    var nodeListForEach = function(list, callback){ //Node list & callback function
        for (var i = 0; i<list.length; i++){
            callback(list[i], i);
        }
    };

    //Function to read input data
    return {
        getInput: function(){
            return {
                type: document.querySelector(DOMstrings.inputType).value, //Will be either inc or exp
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: parseFloat(document.querySelector(DOMstrings.inputValue).value) //Convert the string to a number
            };
        },

        addListItem: function(object, type){

            var html, newHtml, element;
            //Create HTML string with  placeholder text
            if(type === "inc"){
                element = DOMstrings.incomeContainer;
                html = '<div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';

            }
            else if(type === "exp"){
                element = DOMstrings.expensesContainer;
                html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';

            }

            //Reaplce the placeholder text with actual data

            newHtml = html.replace("%id%", object.id);
            newHtml = newHtml.replace("%description%", object.description);
            newHtml = newHtml.replace("%value%", formatNumber(object.value, type));

            //Insert the HTML into the DOM
                                //Element = Income / Expense List
            document.querySelector(element).insertAdjacentHTML("beforeend", newHtml);
                                                               //Position, string to insert


        },

        deleteListItem: function(selectorID){

            var element = document.getElementById(selectorID);
            element.parentNode.removeChild(element);
        },

        clearFields: function(){
            var fields, fieldsArr;

                            //returns a list
            fields = document.querySelectorAll(DOMstrings.inputDescription + ", " + DOMstrings.inputValue);

            //We need to convert the list into an array using slice method (call method)
            fieldsArr = Array.prototype.slice.call(fields); //Array function constructor. It wil return an array

            //We loop through the array to clean the input
            fieldsArr.forEach(function(current, index, array){ //current element (Input Desciption/Value)
                current.value = "";
            });

            fieldsArr[0].focus();//We return to the first input box
        },

        displayBudget: function(object){

            var type;
            object.budget > 0 ? type = "inc" : type = "exp";

            document.querySelector(DOMstrings.budgetLabel).textContent = formatNumber(object.budget, type);
            document.querySelector(DOMstrings.incomeLabel).textContent = formatNumber(object.totalInc, "inc");
            document.querySelector(DOMstrings.expensesLabel).textContent = formatNumber(object.totalExp, "exp");

            if(object.percentage > 0){ //If a percentage is > 0
                document.querySelector(DOMstrings.percentageLabel).textContent = object.percentage + "%";
            }
            else{
                document.querySelector(DOMstrings.percentageLabel).textContent = "---";
            }

        },

        displayPercentages: function(percentages){

            var fields = document.querySelectorAll(DOMstrings.expensesPercentageLabel); //Node List

            //For Each function for node lists

            nodeListForEach(fields, function(current, index){

                if(percentages[index] > 0){
                    current.textContent = percentages[index] + "%";
                }
                else{
                    current.textContent = "---";
                }
            });
        },

        displayMonth: function(){

            var now, year, month, months;
            now = new Date();
            //var christmas = new Date(2016, 11, 25);
           
            months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            month = now.getMonth();
            year = now.getFullYear();

            document.querySelector(DOMstrings.dateLabel).textContent = months[month] + " " + year;
        },

        changedType: function(){

            var fields = document.querySelectorAll(
                DOMstrings.inputType + "," + 
                DOMstrings.inputDescription + "," +
                DOMstrings.inputValue
            ); //Node List

            nodeListForEach(fields, function(current){
                current.classList.toggle("red-focus"); 
            });

            document.querySelector(DOMstrings.inputButton).classList.toggle("red");
        },

        getDOMstrings: function(){
            return DOMstrings;
        }

    };
})();

// Modules above are independent from each other


// GOBAL APP CONTROLLER
var controller = (function(budgetCtrl, uiCtrl){ //We can pass arguments to modules}}

    var setupEventListeners = function(){

        var DOM = uiCtrl.getDOMstrings();
        document.querySelector(DOM.inputButton).addEventListener("click", ctrlAddItem);
        document.addEventListener("keypress", function(event){ //We want to enable the user to use the enter button
            if(event.keyCode === 13 || event.which === 13){ //We specify the enter keycode (button id)
                ctrlAddItem();
            }
        });

        document.querySelector(DOM.container).addEventListener("click", ctrlDeleteItem);

        document.querySelector(DOM.inputType).addEventListener("change", uiCtrl.changedType);
    };

    var ctrlAddItem = function(){
        
        var input, newItem;

        //1.-Get the filled input data
        input = uiCtrl.getInput();

        if(input.description!=="" && !isNaN(input.value) && input.value > 0){

            //2.-Add the item to the budget controller
            newItem = budgetCtrl.addItem(input.type, input.description, input.value);

            //3.-Add the item to the UI
            uiCtrl.addListItem(newItem, input.type);
                            //Object, type

            //4.-Clear the Fields
            uiCtrl.clearFields();

            //5.-Calculate & update BUdget
            updateBudget();

            //6.- Calculate & Update Percentages
            updatePercentages();

        }

    };

    var ctrlDeleteItem = function(event){

        var itemID, type, ID;
        //console.log(event.target.parentNode.parentNode.parentNode.parentNode.id);

        itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;

        if(itemID){

            var splitID;
            // inc-0
            splitID = itemID.split("-");
            type = splitID[0];
            ID = parseInt(splitID[1]);

            // 1.- Delete item from data structure
            budgetCtrl.deleteItem(type, ID);

            // 2.- Delete item from UI
            uiCtrl.deleteListItem(itemID);

            // 3.- Upodate & display new budget
            updateBudget();

            // 4.- Calculate & Update Percentages
            updatePercentages();
        }
    };

    var updateBudget = function(){
        
        var budget;
        //6.-Calculate the budget
        budgetCtrl.calculateBudget();

        //7.-Return the Budget
        budget = budgetCtrl.getBudget();

        //8.-Display the budget on the UI
        uiCtrl.displayBudget(budget);


    };

    var updatePercentages = function(){

        // Calculate percentages
        budgetCtrl.calculatePercentages();

        //Read percentages from budget controller
        var percentages = budgetCtrl.getPercentages();

        //Update the UI
        uiCtrl.displayPercentages(percentages);

    };

    return {
        init: function(){
            console.log("Application has started");
            uiCtrl.displayMonth();
            uiCtrl.displayBudget({
                budget: 0,
                totalInc: 0,
                totalExp: 0,
                percentage: -1
            });
            setupEventListeners();
        }
    };

})(budgetController, uiController); // Inside the function they have different names

controller.init();