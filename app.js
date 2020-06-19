const budgetController = (function() {

    const x = 23

    const add = a => x + a

    return {
        publicTest: function(b) {
            return add(b)
        }
    }

})()

////////////////////

const UIController = (function() {

    // code

})() 

////////////////////

const controller = (function(budgetCtrl, UICtrl) {

    const test = budgetCtrl.publicTest(5)

    return {
        anotherPublic: function() {
            console.log(test)
        }
    }

})(budgetController, UIController)