// Gets All global cases
(async () => {
  let data = await fetch("https://corona.lmao.ninja/all");

  let all = await data.json();

  let allCases = all.cases;
  let allDeaths = all.deaths;
  let allRecovered = all.recovered;

  console.log(allCases);
  console.log(allDeaths);
  console.log(allRecovered);
  
})();
