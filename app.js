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
        incomeContainer: '.income__list',
        expensesContainer: '.expenses__list'
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
            let html, newHtml, element;
           

            if (type === 'inc') {
                element = domStrings.incomeContainer
                html = '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
            } else if (type === 'exp') {
                element = domStrings.expensesContainer
                html = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
            }
            
            newHtml = html.replace('%id%', obj.id)
            newHtml = newHtml.replace('%description%', obj.description)
            newHtml = newHtml.replace('%value%', obj.value)
            // insert html into DOM

            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml)
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