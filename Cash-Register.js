function checkCashRegister(price, cash, cid) {
    let change = cash - price;
    let val = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];

    let sum = 0;

    for (let i = 0; i < cid.length; i++)
        sum += cid[i][1];
    console.log(sum);
    if (sum == change) {
        return { status: "CLOSED", change: cid };
    }
    let ret = [
        ["PENNY", 0],
        ["NICKEL", 0],
        ["DIME", 0],
        ["QUARTER", 0],
        ["ONE", 0],
        ["FIVE", 0],
        ["TEN", 0],
        ["TWENTY", 0],
        ["ONE HUNDRED", 0]
    ];
    for (let i = cid.length - 1; i >= 0; i--) {
        while (change - val[i] > -0.0001 && cid[i][1] > 0)
            change -= val[i], ret[i][1] += val[i], cid[i][1] -= val[i];
    }
    console.log(change);
    if (Math.abs(change) > 0.001)
        return { status: "INSUFFICIENT_FUNDS", change: [] };

    ret = ret.filter(a => a[1] > 0);

    return { status: "OPEN", change: ret.reverse() };
}

console.log(
    checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
);