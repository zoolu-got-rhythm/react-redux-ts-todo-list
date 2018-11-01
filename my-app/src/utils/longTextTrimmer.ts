

export default function trimTitleOfTodoDown(title: string, cutOffPoint: number): string{
    let stringWithCutOffPoint: string = title.substring(0, cutOffPoint);
    console.log(stringWithCutOffPoint.length);
    if(stringWithCutOffPoint.length == cutOffPoint){
        return stringWithCutOffPoint.replace(/(\w)\s\w$|(\w)\s+$|\s+$|\w{2}$/g, "$1...") as string;
    }else{
        return stringWithCutOffPoint;
    }
}