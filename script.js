document.getElementById('calculateBtn').addEventListener('click', function(){
    calculateBMI();
});

// Function for BMI Calculate
function calculateBMI(){
    // Getting Html Dom Elements
    const weightInputEl = document.getElementById('weightInput').value;
    const heightInputEl = document.getElementById('heightInput').value;
    const resultEl = document.getElementById('result');

    // clear result if any
    resultEl.innerHTML = '';

    // Validate the input vlaues.

    if(weightInputEl === "" || isNaN(weightInputEl)){
        resultEl.innerHTML = `<small class="error">Give a valid weight and it's must be number.</small>`;
        return;
    }
    if(heightInputEl === "" || isNaN(heightInputEl)){
        resultEl.innerHTML = `<small  class="error">Give a valid height and it's must be number.</small>`;
        return;
    }

    // After pass the validation let calculate the BMI and show to dom
    const BMI = (weightInputEl / (heightInputEl * heightInputEl)).toFixed(2);
    resultEl.innerHTML = `<h4> Result BMI: ${BMI} </h4>`
     
}