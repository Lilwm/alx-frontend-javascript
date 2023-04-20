import Currency from './3-currency'

class Pricing{
    constructor(amount, currency ){
        if (typeof amount !=='number' || typeof currency !=='number'){
            throw new  TypeError('Amount  and  currency must be a number')
        }
        this._amount = amount;
        this._currency = currency;
    }
//setter & getter
    get amount(){
        return this._amount;
    }
    set amount(value){
        if(typeof value !=='number'){
            throw new TypeError('value must be a number')
        }
        this._amount = value;
    }

    get currency(){
        return this._currency;
    }
    set currency(value){
        if (!(value instanceof Currency)) {
            throw new Error('currency must be an instance of Currency');
          }        
        this._currency = value;
    }

    displayFullPrice(){
        return $`${this._amount} ${this._currency.name} (${this._currency.code})`;
    } 

    static convertPrice(amount, conversionRate) {
        return amount * conversionRate;
      }
}