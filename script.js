const btnCalculate = document.querySelector("#btn-calculate");
const birthDate = document.querySelector('input[type="date"]');
const ageResult = document.querySelector("#age");

btnCalculate.addEventListener("click", (e) => {
  e.preventDefault();

  if(!birthDate.value){
    ageResult.innerText ="You must select the date";
    return;
  }
  
  const dateOfBirth = new Date(birthDate.value);
  const today = new Date();

if(dateOfBirth > today){
  ageResult.innerText = "You are not born yet";
  return;
}

let years = today.getFullYear() - dateOfBirth.getFullYear();
let months = today.getMonth() - dateOfBirth.getMonth();
let days = today.getDate() - dateOfBirth.getDate();

if(days < 0){
  months--;

  const preveiousMonth = new Date(today.getFullYear,today.getMonth(),0).getDate();
  days += preveiousMonth;
}

if(months < 0){
  years--;
  months += 12;
}


  if (years > 0) {
    ageResult.innerText = `You have ${years} Years, ${months} Months and ${days} days since your birth`;
  } else if (months > 0) {
    ageResult.innerText = `You are ${months} months and ${days} days`;
  } else {
    ageResult.innerText = `Almost ${days} days passed since your birth`;  
  }
});
