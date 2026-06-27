let convertBtn = document.getElementById("display-btn");
let lengthResult = document.getElementById("lengthResult");
let VolumeResult = document.getElementById("volumeResult");
let MassResult = document.getElementById("massResult");

convertBtn.addEventListener("click", function () {
  let inputDisplay = document.getElementById("display-input").value;
  let feet = (Number(inputDisplay) * 3.281).toFixed(3);
  let meter = (Number(inputDisplay) / 3.281).toFixed(3);
  let gallon = (Number(inputDisplay) * 0.264).toFixed(3);
  let liter = (Number(inputDisplay) / 0.264).toFixed(3);
  let pound = (Number(inputDisplay) * 2.204).toFixed(3);
  let kilo = (Number(inputDisplay) / 2.204).toFixed(3);

  let convertToFeet = `${inputDisplay} meters = ${feet} feets | ${inputDisplay} feets = ${meter} meters`;
  let convertToLiters = `${inputDisplay} liters = ${gallon} gallons | ${inputDisplay} gallons = ${liter} liters`;
  let convertToKilos = `${inputDisplay} kilos = ${pound} pounds | ${inputDisplay} pound = ${kilo} kilos`;

  lengthResult.textContent = convertToFeet;
  VolumeResult.textContent = convertToLiters;
  MassResult.textContent = convertToKilos;
});
