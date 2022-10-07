function order(Order)
{
    var Order;
    Total = 0;

    for (var i = 0, row; row = Order.rows[i]; i++) {
        console.log("Name: " + row.name)
        console.log("Amount: " + row.amount)
        vatAmount = row.price * row.vat;
        vatPrice = row.price + vatAmount;
        console.log("Price: " + vatPrice)
        Total += row.price;
    }

    console.log(Total)
}