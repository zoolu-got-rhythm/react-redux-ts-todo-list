export default function singleDigitDateNumberToDoubleDigit(num: number): string{
    if(num.toString().length === 1){
        let zeroDigit: string = "0";
        zeroDigit += num.toString(); 
        return zeroDigit;  
    }else{
        return num.toString(); 
    }
}