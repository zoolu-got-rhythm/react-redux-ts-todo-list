

export default function trimTitleOfTodoDown(title: string, cutOffPoint: number): string{
    let stringWithCutOffPoint: string = title.substring(0, cutOffPoint); 
    if(stringWithCutOffPoint.length == cutOffPoint){
        return stringWithCutOffPoint.replace(/(\w+)(?:\s+\w$|\s+$|$)/g, "$1...") as string; 
    }else{
        return stringWithCutOffPoint; 
    }
}