// Gets All global cases
(async () => {
  const data = await fetch("https://corona.lmao.ninja/all");

  const all = await data.json();

  const allCases = all.cases;
  const allDeaths = all.deaths;
  const allRecovered = all.recovered;

  const caseContent = document.querySelector('#cases > .card-content');

  caseContent.innerHTML = allCases;



  console.log(allCases);
  console.log(allDeaths);
  console.log(allRecovered);
  
})();
