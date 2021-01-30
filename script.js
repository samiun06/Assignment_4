// The main function which will do all the works of ticket.

function handleTicket(isIncrease, id) {
    const count = getInputValue(id);
    let newCountNumber = count;
    if (isIncrease == true) {
        newCountNumber = count + 1;
    } else if (isIncrease == false && count > 0) {
        newCountNumber = count - 1;
    }
    document.getElementById(id).value = newCountNumber;
    calculation();

}

// Calculation function which will calculate subtotal, vat and total.

function calculation() {
    const firstClass = getInputValue("first-class");
    const economyClass = getInputValue("economy-class");
    const totalPrice = (firstClass * 150) + (economyClass * 100);

    document.getElementById('subtotal').innerText = totalPrice;

    const vat = Math.round(totalPrice * 0.1);
    document.getElementById("vat").innerText = vat;

    const grandTotal = totalPrice + vat;
    document.getElementById("grand-total").innerText = grandTotal;
}

// Function for taking input value so that code don't need to be repeated.

function getInputValue(id) {
    const input = document.getElementById(id);
    const inputNumber = parseInt(input.value);
    return inputNumber;
}

// For showing something after clicking book now button and making the Flying from and Flying to required and cheking if any ticket is bought.

document.getElementById("booking-btn").addEventListener("click", function () {
    const flyFrom = document.getElementById("fly-from").value;
    const flyTo = document.getElementById("fly-to").value;
    const departure = document.getElementById("departure").value;
    const returnFrom = document.getElementById("return").value;
    const firstClassValue = getInputValue("first-class");
    const economyClassValue = getInputValue("economy-class");
    if (flyFrom == "") {
        document.getElementById("required-flyFrom").style.display = "inline";
    } else if (flyTo == "") {
        document.getElementById("required-flyTo").style.display = "inline";
    } else if (departure == "") {
        document.getElementById("required-departure").style.display = "inline";
    } else if (returnFrom == "") {
        document.getElementById("required-return").style.display = "inline";
    } else if (firstClassValue == 0 && economyClassValue == 0) {
        document.getElementById("ticket-requirement").style.display = "inline";
    } else {
        document.getElementById("before-booking").style.display = "none";
        const afterBooking = document.getElementById("after-booking")
        afterBooking.style.display = "block";
    }
})