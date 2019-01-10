var output = [];

function fizzBuzz(){
    for(var  count=1;count<=100;count++){


  if(count % 3 === 0 && count % 10 ===0){
      output.push('fizzbuzz');
  }else if(count % 5 === 0) {
      output.push('buzz')   
    }
    else if(count % 3 ===0 ){
        output.push('fizz')
    };
    else{
        output.push(count);
    }
    }
};
    
 fizzBuzz();   
console.log(output);

