//1000단위마다 콤마
export function addComma(number){

  if(number === undefined) return 0;

  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

//XCO계산
export function calculateXCO( coin, coinAmount, bonus ){
  const XCO = coin === "BTC" ? coinAmount * 5 : coinAmount * 3;
  const totalXCO = XCO + XCO * bonus;

  return { XCO, totalXCO };
}

//fund 총액 계산
export function calculateUSD(coinArr){
  let result = {
    totalUSD: 0,
    totalXCO: 0
  }
  let btcToUSD = 9284;
  let ethToUSD = 687;
  if(coinArr.length === 0){
    return 0;
  }

  for(let i=0 ; i < coinArr.length ; i++){
    if(coinArr[i]._id === "BTC"){
      result.totalUSD += coinArr[i].amount * btcToUSD;
      result.totalXCO += coinArr[i].xco;
    }else{
      result.totalUSD += coinArr[i].amount * ethToUSD;
      result.totalXCO += coinArr[i].xco;
    }
  }

  return result;
}

//bonus
export function getBonus (givenDate){
  const formattedGivenDate = new Date(givenDate);
  let today = new Date();
  let msDiff = formattedGivenDate - today;
  let days = parseInt(msDiff / (24 * 3600 * 1000));
  console.log(typeof days);
  let bonus = 0;

  switch(true){
    case(days < 5):
      bonus=0;
      break;
    case(days < 10):
      bonus=0.05;
      break;
    case(days < 15):
      bonus=0.1;
      break;
    case(days < 20):
      bonus=0.2;
      break;
    default:
      bonus=0;
      break;
  }

  return bonus;
}
