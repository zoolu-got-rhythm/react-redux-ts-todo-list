

export default function trimTitleOfTodoDown(title: string, cutOffPoint: number): string{
    let stringWithCutOffPoint: string = title.substring(0, cutOffPoint); 
    if(stringWithCutOffPoint.length == cutOffPoint){
        let regExSearchAndReplaceEndOfString: RegExp = /(\w+)(?:\s+\w$|\s+$|$)/g; 
        if(regExSearchAndReplaceEndOfString.exec(stringWithCutOffPoint) != null){
            console.log("normal case"); 
            return stringWithCutOffPoint.replace(regExSearchAndReplaceEndOfString, "$1...") as string; 
        }else{
            return stringWithCutOffPoint.replace(/\s+/g, "...") as string; 
        }
    }else if(/^\s+$/g.exec(stringWithCutOffPoint) != null){
        return stringWithCutOffPoint.replace(/\s+/g, "...") as string; 
    }else{
        return stringWithCutOffPoint; 
    }
}