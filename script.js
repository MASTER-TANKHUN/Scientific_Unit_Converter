function formatScientific(num) {
    if (isNaN(num) || num === 0) return "0";
    const exponent = Math.floor(Math.log10(Math.abs(num)));
    const mantissa = (num / Math.pow(10, exponent)).toFixed(4);
    return `${mantissa} × 10<sup>${exponent}</sup>`;
}

function convertUnit() {
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    const fromUnit = parseFloat(document.getElementById('fromUnit').value);
    const toUnit = parseFloat(document.getElementById('toUnit').value);
    
    if (isNaN(inputValue)) {
        document.getElementById('result').innerHTML = `
            <h3>Result:</h3>
            <p>Please enter a value to convert</p>
        `;
        return;
    }
    
    const baseValue = inputValue * fromUnit;
    const resultValue = baseValue / toUnit;
    
    const fromUnitName = document.getElementById('fromUnit').options[document.getElementById('fromUnit').selectedIndex].text;
    const toUnitName = document.getElementById('toUnit').options[document.getElementById('toUnit').selectedIndex].text;
    
    document.getElementById('result').innerHTML = `
        <h3>Result:</h3>
        <p>${formatScientific(inputValue)} ${fromUnitName.split(' - ')[0]} = ${formatScientific(resultValue)} ${toUnitName.split(' - ')[0]}</p>
        <p>Base value: ${formatScientific(baseValue)}</p>
        <p>From unit multiplier: ${formatScientific(fromUnit)}</p>
        <p>To unit multiplier: ${formatScientific(toUnit)}</p>
    `;
}