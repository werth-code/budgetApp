const budgetController = (function() {

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

        getDomStrings: () => {
            return domStrings
        }
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
        // get input data
        const input = UICtrl.getInput()
        console.log(input)

        // add item to budget controller
        // add item to UI
        // calc budget
        // display budget on UI
    }

    return {
        init: () => {
            console.log('App Started!')
            setupEventListeners()
        }
    }

})(budgetController, UIController)

controller.init()