function countEvensAndOdds(numbers){
    let even = 0;
    let odd = 0;

    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] % 2 == 0){
            even++
        }else{
            odd++
        }
    }


    return{
        even: even,
        odd : odd
    }
}

let arr = [34, 67, 23, 99]
console.log(countEvensAndOdds(arr));