fetch('https://corona.lmao.ninja/all')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });