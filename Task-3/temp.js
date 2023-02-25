function convert() {
    const temperature = parseFloat(document.getElementById("temperature").value);
    const unit = document.getElementById("unit").value;
    let convertedTemperature;
    let convertedUnit;
  
    if (unit === "celsius") {
      convertedTemperature = temperature * 9 / 5 + 32;
      convertedUnit = "Fahrenheit";
    } else {
      convertedTemperature = (temperature - 32) * 5 / 9;
      convertedUnit = "Celsius";
    }
  
    document.getElementById("result").innerHTML = `${convertedTemperature.toFixed(2)} ${convertedUnit}`;
  }
  