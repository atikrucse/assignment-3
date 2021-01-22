
console.log(budgetCalculator(1, 1, 1));
function kilometerToMeter(kilometer) {
    var meter = 0;
    if (kilometer < 0) {
        return "Kilometer can not be negative value";
    }
    else {
        meter = kilometer * 1000;
        meter = meter.toFixed(4);
        return meter;
    }
}

function budgetCalculator(quantityOfWatch, quantityOfMobile, quantityOfLaptop) {
    if (quantityOfWatch < 0 || quantityOfMobile < 0 || quantityOfLaptop < 0) {
        return "Device quantity can not be nagetive."
    }
    else if ((quantityOfWatch - Math.round(quantityOfWatch)) != 0 || (quantityOfMobile - Math.round(quantityOfMobile)) != 0 || (quantityOfLaptop - Math.round(quantityOfLaptop)) != 0) {
        return "Device quantity can not be a floating number."
    }
    else {
        let watchPrice, mobilePrice, laptopPrice;
        watchPrice = quantityOfWatch * 50;
        mobilePrice = quantityOfMobile * 100;
        laptopPrice = quantityOfLaptop * 500;

        const totalBudget = watchPrice + mobilePrice + laptopPrice;
        return totalBudget;
    }
}

function hotelCost(days) {
    var cost, portion, cost1, cost2, cost3;
    portion = days / 10;    // To devide Input days acording to Condition

    if (days < 1) {
        return "Must have to stay at least 1 day.";
    }
    else {
        // Calculate rent acording to first condition.
        if (days < 10) {
            cost = days * 100;
        }
        else {
            cost1 = (days - ((portion - 1) * 10)) * 100;
            days = days - 10;

            // Calculate rent acording to Second condition.
            if (days < 10) {
                cost2 = days * 80;
            }
            else {
                cost2 = (days - ((portion - 2) * 10)) * 80;
                days = days - 10;

                // Calculate rent acording to Third condition.
                cost3 = days * 50;   
            }
            cost = cost1 + cost2 + cost3;
        }
    }
    return cost;
}




function megaFriend(friendsName) {
    largestName = friendsName[0];

    for (let i = 0; i < friendsName.length; i++) {
        if (largestName < friendsName[i]) {
            largestName = friendsName[i];
        }
    }
    return largestName;
}