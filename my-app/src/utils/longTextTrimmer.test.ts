import trimTitleOfTodoDown from "./longTextTrimmer";


const testString: string = "cat "; 

test('test regEx: \\w\\s appends .. correctly', () => {
    expect(testString).toMatch(/.{4}/);
  });


test('test regEx: \\s\\w appends \'..\' correctly', () => {
    expect(trimTitleOfTodoDown(testString, testString.length)).toMatch(/cat../);
});

test('test trimTitleOfTodoDown() doesn\'t trim ' +
    'if cutoff point greater than string length ', () => {
    expect(trimTitleOfTodoDown(testString, testString.length + 1)).toMatch(/cat\s/);
});