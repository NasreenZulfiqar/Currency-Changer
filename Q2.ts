// app.ts
class CurrencyConverter {
    private exchangeRates: Record<string, number> = {
      USD: 1,
      EUR: 0.85,
      GBP: 0.73,
      Pak: 280.50
    
    };
  
    convert(amount: number, fromCurrency: string, toCurrency: string): number {
      var rateFrom = this.exchangeRates[fromCurrency] || 1;
      var rateTo = this.exchangeRates[toCurrency] || 1;
  
      var convertedAmount = (amount / rateFrom) * rateTo;
      return convertedAmount;
    }
  }

  let converter = new CurrencyConverter();
  let amount = 100;
  let fromCurrency = 'USD';
  let toCurrency = 'Pak';
  
  let convertedAmount = converter.convert(amount, fromCurrency, toCurrency);
  console.log(`${amount} ${fromCurrency} is equal to ${convertedAmount.toFixed(2)} ${toCurrency}`);