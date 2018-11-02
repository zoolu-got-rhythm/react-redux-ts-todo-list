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

// <<<<<<< HEAD
// test('test regEx: \\w\\s appends .. correctly', () => {
//     expect(testString).toMatch(/.{4}/);
//   });
//
//
// test('test regEx: \\s\\w appends \'..\' correctly', () => {
//     expect(trimTitleOfTodoDown(testString, testString.length)).toMatch(/cat../);
// });
//
// test('test trimTitleOfTodoDown() doesn\'t trim ' +
//     'if cutoff point greater than string length ', () => {
//     expect(trimTitleOfTodoDown(testString, testString.length + 1)).toMatch(/cat\s/);
// });
// =======
// >>>>>>> 409fc4d046f1eb7f1b27720e05371f817533bed2
