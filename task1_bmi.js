const btn = document.getElementById('calculate');

btn.addEventListener('click',function(){
    let height = document.querySelector('#height').value;
    let weight = document.querySelector('#weight').value;

   if (height == '' || weight == ''){
    alert('Please fill out input fields!');
    return;
   }
   //bmi -> berat(kg) / tinggi (m)
   let bmi = (weight / (height * height));
   bmi= bmi.toFixed(5)
   document.querySelector('#result').innerHTML = bmi;
   
   let kateg = '';
   if (bmi < 15){
        kateg = 'Berat badan sangat kurang';
   }
   if (bmi >=15 && bmi < 18.5){
    kateg = 'Berat badan kurang (underweight)';
   }
   if (bmi >= 18.5 && bmi < 24 ){
    kateg = 'Normal'
   }
   if (bmi >=24 && bmi <=29){
    kateg = 'Kelebihan berat badan'
   }
   if (bmi > 29){
    kateg = 'Obesitas'
   }
   document.querySelector('.comment').innerHTML = `Kategori : <span id=comment>${kateg}</span>`;
   
});