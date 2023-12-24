class Process{
    constructor(value1,operand = '',value2 = 0){
        this._value1 = value1;
        this._operand = operand;
        this._value2 = value2;
    }
    _endResult(){
        if (this._value1 instanceof Process){
            return this._value1.result();
        }else{
            return this._value1;
        }
    }
    _computedResult(){
        const val1 = this._value1 instanceof Process?this._value1.result():this._value1;
        const val2 = this._value2 instanceof Process?this._value2.result():this._value2;
        try{
            return eval(`${val1}${this._operand}${val2}`);
        }catch(error){
            throw new Error(`Ошибка при вычисление <${val1}>${this._operand}<${val2}>`);
        }
    }
    result(){
        if (this._operand){
            return this._computedResult();
        }else{
            return this._endResult();
        }
    }
}
const el=new Process(
    new Process(1),
    '+'
    ,new Process(new Process(2),'*',new Process(3))
);
const answ = el.result();
console.log(answ);