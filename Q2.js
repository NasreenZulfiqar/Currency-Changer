// app.ts
var CurrencyConverter = /** @class */ (function () {
    function CurrencyConverter() {
        this.exchangeRates = {
            USD: 1,
            EUR: 0.85,
            GBP: 0.73,
            Pak: 280.50
        };
    }
    CurrencyConverter.prototype.convert = function (amount, fromCurrency, toCurrency) {
        var rateFrom = this.exchangeRates[fromCurrency] || 1;
        var rateTo = this.exchangeRates[toCurrency] || 1;
        var convertedAmount = (amount / rateFrom) * rateTo;
        return convertedAmount;
    };
    return CurrencyConverter;
}());
var converter = new CurrencyConverter();
var amount = 100;
var fromCurrency = 'USD';
var toCurrency = 'Pak';
var convertedAmount = converter.convert(amount, fromCurrency, toCurrency);
console.log("".concat(amount, " ").concat(fromCurrency, " is equal to ").concat(convertedAmount.toFixed(2), " ").concat(toCurrency));
