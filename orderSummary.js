function orderSummary(Order)
{
    Total = 0;

    for (var i = 0, row; row = tellimus.rows[i]; i++) {
        console.log(row.name)
        console.log(row.amount)
        vatAmount = row.price * row.vat;
        vatPrice = row.price + vatAmount;
        console.log(vatPrice)
        Total += row.price * row.amount;
    }

    console.log(Total)
}
