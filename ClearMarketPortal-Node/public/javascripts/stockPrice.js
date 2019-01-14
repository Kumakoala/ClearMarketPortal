// Dummy Data for testing use, remove before PROD
const priceData = [
  {
    stock: 'GOOG',
    price: 1001.67,
    volume: 244677557
  },
  {
    stock: 'APPL',
    price: 120.56,
    volume: 306837209
  },
  {
    stock: 'AMZN',
    price: 1500.67,
    volume: 256798553
  },
  {
    stock: 'MSFT',
    price: 126.67,
    volume: 578940448
  }
];

const priceGet = function() {
  // This makes the stock price keep changing $1 every request
  _updatePrice(priceData);
  console.log('Price changed:', priceData);
  // End of testing use
  return priceData;
}

// Internal Methods
function _changeSiumlation(stockRisePercentage) {
  let changeSimulation = (Math.random()*100 < stockRisePercentage) ? 1 : -1;
  return changeSimulation;
};

function _updatePrice(priceAry) {
  let length = priceAry.length;
  for(let i=0 ; i<length ; i++) {
    priceAry[i].price += _changeSiumlation(65);
  }
}

module.exports = {
    priceGet: priceGet
}