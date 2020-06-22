const budgetController = (function() {

    const Expense = function(id, description, value) {
        this.id = id
        this.description = description
        this.value = value
    }

    const Income = function(id, description, value) {
        this.id = id
        this.description = description
        this.value = value
    }

const data = {
    allItems: {
        exp: [],
        inc: [],
    },
    totals: {
        exp: 0,
        inc: 0,
    },

}

    return {

        addItem: (type, desc, val) => {

            let newItem;

            //Creates new id but allows us to delete old entries. Can this be improved? Unreadable.
            if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1 
            } else {
                ID = 0
            }

            if (type === 'exp') {
                newItem = new Expense(ID, desc, val)
            } else if (type === 'inc') {
                newItem = new Income(ID, desc, val)
            }    

            data.allItems[type].push(newItem)
            return newItem

        },

        testing: () => {
            console.log(data)
        }

    }

})()

////////////////////

const UIController = (function() {

    const domStrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputButton: '.add__btn',
    }

    return {
        getInput: ()=> {
            return {
                type: document.querySelector(domStrings.inputType).value,
                description: document.querySelector(domStrings.inputDescription).value,
                value: document.querySelector(domStrings.inputValue).value 
            }
        },

        addListItem: (obj, type) => {
            let html;
            // html placeholder text
            if (type === 'inc') {
                html = '<div class="item clearfix" id="income-0"><div class="item__description">Salary</div><div class="right clearfix"><div class="item__value">+ 2,100.00</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
            } else if (type === 'exp') {
                html = '<div class="item clearfix" id="expense-0"><div class="item__description">Apartment rent</div><div class="right clearfix"><div class="item__value">- 900.00</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
            }
            // Replace placeholder text with our user data

            // insert html into DOM
        },

        getDomStrings: () => {
            return domStrings
        },
    }

})() 

////////////////////

const controller = (function(budgetCtrl, UICtrl) {

    const setupEventListeners = () => {
        const dom = UICtrl.getDomStrings()

        document.querySelector(dom.inputButton).addEventListener('click', ctrlAddItem)

        document.addEventListener('keypress', event => {
            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem()
            }
        })
    }

    const ctrlAddItem = () => {

        let input, newItem;
        // get input data
        input = UICtrl.getInput()

        // add item to budget controller
        newItem = budgetCtrl.addItem(input.type, input.description, input.value)

        // add item to UI
        // calc budget
        // display budget on UI
    }

    return {
        init: () => {
            setupEventListeners()
        }
    }

})(budgetController, UIController)

controller.init()