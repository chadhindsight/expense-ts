export function moneyFormatter(num: number) {
    console.log('dsfdsf', num)
    const val = num.toFixed(2).split(".");

    return (
        '$ ' + (val[0].split('')[0] === '-' ? '-' : '') +
        val[0]
            .split('')
            .reverse()
            .reduce(function (acc, num, i) {
                return num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc;
            }, '') +
        '.' +
        val[1]
    );
}