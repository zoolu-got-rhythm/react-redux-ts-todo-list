import trimTitleOfTodoDown from "./longTextTrimmer";

describe('test regEx works properly', () => {

  test('test regEx: \\w\\s$ appends ... correctly', () => {
      const testString: string = "cat "; 
      expect(trimTitleOfTodoDown(testString, testString.length)).toBe("cat...");
    });

  test('test regEx: \\w\\s\\w$ appends ... correctly', () => {
    const testString: string = "cat t"; 
    expect(trimTitleOfTodoDown(testString, testString.length)).toBe("cat...");
  });

  test('test regEx: \\w\\$ appends ... correctly', () => {
    const testString: string = "sdsdfsdfsdafcat"; 
    expect(trimTitleOfTodoDown(testString, testString.length)).toBe("sdsdfsdfsdafcat...");
  }); 

  test('test regEx: empty string returns no elipses', () => {
    const testString: string = ""; 
    expect(trimTitleOfTodoDown(testString, testString.length)).toBe("");
  }); 

  test('test regEx: \\s+ returns just ...', () => {
    const testString: string = "            "; 
    expect(trimTitleOfTodoDown(testString, testString.length)).toBe("...");
  }); 

}); 

