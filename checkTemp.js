function checkTemp(temp)
{
    if (temp < 21)
    {
        Ans = -1
    }
    else if (temp > 40)
    {
        Ans = 1
    }
    else if (temp != 21 && 40)
    {
        Ans = 0
    }
    
    return Ans;
}
