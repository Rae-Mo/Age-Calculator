const findAge = () => {
    let day /*d1*/= document.getElementById('date').value,
        month /*m1*/= document.getElementById('month').value,
        year /*y1*/= document.getElementById('year').value,
        date = new Date(),
        day2 /*d2*/= date.getDate(),
        secondMonth /*m2*/= 1 + date.getMonth(),
        secondYear /*y2*/= date.getFullYear(),
        months = [];

        months =[1, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

        if(day>day2){
            day2 = day2 + months[secondMonth-1] //where is (;) or why is it not there? 
            secondMonth = secondMonth - 1;
        }

        if(month>secondMonth){
            secondMonth = secondMonth + 12;
            secondYear = secondYear - 1; 
        }

        let bDay = day2 - day;
        let bMonth = secondMonth -month;
        let bYear = secondYear - year;

        document.getElementById('display').innerText = `Your age is ${bYear} years, ${bMonth} months and ${bDay} days`;
}