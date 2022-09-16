function checkTemp(temp)
{
    if (temp < 21)
    {
        Ans = -1
    }
    else if (temp >= 21 && temp <= 40)
    {
        Ans = 0
    }
    else if (temp >= 41 && temp <= 60)
    {
        Ans = 1
    }

    return Ans;
}
