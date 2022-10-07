function orderSummary(tellimus)
{
    Total = 0;

    for (var i = 0, row; row = tellimus.rows[i]; i++) {
        console.log(row.name)
        console.log(row.amount)
        vatAmount = row.price * row.vat;
        vatPrice = row.price + vatAmount * row.amount;
        console.log(vatPrice)
        Total += vatPrice;
    }

    console.log(Total)
}
