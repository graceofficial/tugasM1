const btn = document.getElementById('calculate');

btn.addEventListener('click',function(){
    let tugas = document.querySelector('#tugas').value;
    let uts = document.querySelector('#uts').value;
    let uas = document.querySelector('#uas').value;


   if (tugas == '' || uts == '' || uas == ''){
    alert('Please fill out input fields!');
    return;
   }
   //Nilai Akhir = 30% Nilai UTS + 40% Nilai Tugas + 30% Nilai UAS

   let nilai_akhir = ((0.3 * uts) + (0.4 *tugas) + (0.3 * uas));
   nilai_akhir= nilai_akhir.toFixed(2)

   let nilai_huruf = '';
   if (nilai_akhir >= 80 ){
    nilai_huruf = 'A';
   }
   if (nilai_akhir >=70 && nilai_akhir <80){
    nilai_huruf = 'B';
   }
   if (nilai_akhir >= 60 && nilai_akhir < 70 ){
    nilai_huruf = 'C'
   }
   if (nilai_akhir >=40 && nilai_akhir <60){
    nilai_huruf = 'D'
   }
   if (nilai_akhir < 40){
    nilai_huruf = 'E'
   }
   document.querySelector('.comment').innerHTML = `Nilai Huruf : <span id=comment>${nilai_huruf}</span>`;
   
});