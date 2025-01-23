
function getNumber(){
    let attempts =10;
    let lastFixedDigit = null;
    while(attempts>0){
        let enterDigit = prompt(`Enter digit > 100, you have ${attempts} attempts`);
        if(enterDigit===null){
            console.log('User cancelled input');
            return
        }
        if(!isNaN(parseInt(enterDigit))){
            enterDigit = parseInt(enterDigit)
            if(enterDigit>100){
                lastFixedDigit =enterDigit;
                console.log(`last fixed number: ${lastFixedDigit}`)
                break;
            }
            else{
                alert('Enter digit more than 100')

            }
        }
        else {
            alert('Enter valid type')
        }
        attempts--;
        if(attempts<1){
            alert('You wasted all attempts')
        }
    }

}
getNumber()