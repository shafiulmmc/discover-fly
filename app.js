// handle ticket change function
function handleTicketChange(ticket, isIncrease) {
    let ticketCount = document.getElementById(ticket).value;
    let ticketCountNumber = parseInt(ticketCount);
    let ticketCountNewNumber = ticketCountNumber;

    if (isIncrease == true && ticketCount < 20) {
        ticketCountNewNumber = ticketCountNumber + 1;
    }
    if (isIncrease == false && ticketCount > 0) {
        ticketCountNewNumber = ticketCountNumber - 1;
    }
    document.getElementById(ticket).value = ticketCountNewNumber;
    calculateTotal()
}

// calculate function
function calculateTotal() {
    let firstClassTicketCalculate = document.getElementById('first-class').value;
    let firstClassTicketCalculateNumber = parseInt(firstClassTicketCalculate);

    let economyTicketCalculate = document.getElementById('economy').value;
    let economyTicketCalculateNumber = parseInt(economyTicketCalculate);

    let totalAmount = firstClassTicketCalculateNumber * 150 + economyTicketCalculateNumber * 100;
    document.getElementById('subtotal').innerText = "$" + totalAmount;

    let tax = Math.round(totalAmount * 0.1);
    document.getElementById('tax').innerText = "$" + tax;

    let totalPrice = totalAmount + tax;
    document.getElementById('total').innerHTML = "$" + totalPrice;

    //handle book button 

    document.getElementById('modal-body').innerHTML = " You have buy first class ticket " + firstClassTicketCalculateNumber + " and economy ticket " + economyTicketCalculateNumber + " Your total price is " + "$" + totalPrice;

}