import { Word } from './word'

describe('Word', () => {
    test('isAnagramShouldReturnTrueIfSameWord', () => {
        const word = new Word('hello');
        expect(word.isAnagramOf('hello')).toBeTruthy();
    });

    test('isAnagramShouldReturnFalseIfNoLettersInCommon', () => {
        const word = new Word('abc');
        expect(word.isAnagramOf('def')).toBeFalsy();
    });

    test('isAnagramShouldReturnTrueIfAllLetersAreInCommon', () => {
        const word = new Word('arrest');
        expect(word.isAnagramOf('rarest')).toBeTruthy();
    });

    test('isAnagramShouldReturnTrueOnlyIfSameLength', () => {
        const word = new Word('arrestt');
        expect(word.isAnagramOf('rarest')).toBeFalsy();
    });
});