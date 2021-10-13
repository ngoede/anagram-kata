export class Word {
    isAnagramOf(possibleAnagram: string): boolean {
        return possibleAnagram.length === this.word.length
            && Array.from(possibleAnagram)
                    .every(c => this.word.includes(c.toString()));
    }

    private word: string;

    constructor(w: string) {
        this.word = w;

    }
}
