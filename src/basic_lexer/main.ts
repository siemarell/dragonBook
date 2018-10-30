enum Tag {
    NUM = 256,
    ID = 257,
    TRUE = 258,
    FALSE = 259
}

interface IToken {
    readonly id: number
}

class Num implements IToken{
    constructor(public readonly id: number, public readonly value: number){}
}

class Word implements IToken{
    constructor(public readonly id: number, public readonly lexeme: string){}
}

class Lexer {
    line = 1
    private peek = ' '
    private words: Map<number, Word> = new Map()

    constructor(private stringIterator: IterableIterator<string>){
        this.reserve({id: Tag.TRUE, lexeme: "true"});
        this.reserve({id: Tag.FALSE, lexeme: "false"})
    }

    private reserve(t: Word): void {
        this.words.set(t.id, t)
        let a = 'asdxcasd'[Symbol.iterator]().next()
    }

    public scan():void{
        // remove whitespaces
        for(;;this.peek = this.stringIterator.next().value){
            if( this.peek === ' ' || this.peek === '\t'){}
            else if (this.peek === '\n') this.line += 1;
            else break;
        }

        if (!isNaN(parseInt(this.peek, 10))){
            let v = 0
            do {
                
            }while () 
        }
    }
}