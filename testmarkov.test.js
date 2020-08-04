const { MarkovMachine } = require("./markov");


describe('markov machine', function () {
    test('makes chains', function () {
      let mm = new MarkovMachine("aa bb cc aa BB aa BB");
  
      expect(mm.chains).toEqual(new Map([
        ["aa", ["bb", "BB", "BB"]],
        ["bb", ["cc"]],
        ["cc", ["aa"]],
        ["BB", ["aa", null]]]));
    });

    test('choice picks from array', function () {
        expect(MarkovMachine.choice([1, 1, 1])).toEqual(1);
        expect([1, 2, 3]).toContain(MarkovMachine.choice([1, 2, 3]));
      });
    
    test('generates valid text', function () {
      let mm = new MarkovMachine("the cat in the hat");
      let output = mm.makeText();
      expect(output.endsWith('hat')).toBe(true);
    });

    
});
