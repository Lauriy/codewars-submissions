function taxCalculator(total) {
    var tax;
    if (total < 0 || isNaN(total)) {
        return 0;
    }
    if (total <= 10) {
        tax = total * 0.1;
    } else if (total <= 20) {
        tax = 1 + (total - 10) * 0.07;
    } else if (total <= 30) {
        tax = 1 + 0.70 + (total - 20) * 0.05;
    } else {
        tax = 1 + 0.70 + 0.50 + (total - 30) * 0.03;
    }
    return parseFloat(tax.toFixed(2));
}