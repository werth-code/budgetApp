const budgetController = (function() {




})()

////////////////////

const UIController = (function() {

    const domStrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value'
    }

    return {
        getInput: ()=> {
            return {
                type: document.querySelector(domStrings.inputType).value,
                description: document.querySelector(domStrings.inputDescription).value,
                value: document.querySelector(domStrings.inputValue).value 
            }
        }
    }

})() 

////////////////////

const controller = (function(budgetCtrl, UICtrl) {

    const ctrlAddItem = () => {
        // get input data

        const input = UICtrl.getInput()
        console.log(input)

        // add item to budget controller
        // add item to UI
        // calc budget
        // display budget on UI
    
    }

    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem)

    document.addEventListener('keypress', event => { 
        if (event.keyCode === 13 || event.which === 13) {
            ctrlAddItem()
        }

    })

})(budgetController, UIController)