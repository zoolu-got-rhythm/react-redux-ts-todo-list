import trimTitleOfTodoDown from "./longTextTrimmer";


const testString: string = "cat "; 

test('test regEx: \\w\\s appends .. correctly', () => {
    expect(trimTitleOfTodoDown(testString, 4)).toBe("cat..");
  });