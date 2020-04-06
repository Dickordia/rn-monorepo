
const names = ['January', 'February', 'MarchA', 'April', 'May', 'June', 'JulyA'];

export function randomLabels(numItems) {
  let result = [];

  for (var i = 0; i < numItems; i++) {
    const aIdx = Math.floor(Math.random() * names.length);
    result.push(names[aIdx]);
  }

  return result;
}

export function randomDataset(name, color, numItems) {
  let aData = [];

  for (var i = 0; i < numItems; i++) {
    aData.push(Math.floor(Math.random() * 100) + 1);
  }

  return {
    data: aData,
    label: name,
    borderColor: randomColor(),
    backgroundColor: randomColor(),
  };
}

export function randomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export function randomDataPieChart(numItems) {
    let aData = [];
    let aColors = [];

    for (var i = 0; i < numItems; i++) {
      aData.push(Math.floor(Math.random() * 100) + 1);
      aColors.push(randomColor());
    }

  return JSON.stringify({
    labels: randomLabels(numItems),
    datasets: [
      {
        data: aData,
        backgroundColor: aColors,
      },
    ],
  });
}

export function randomDataBubbleChart(numItems) {
    let aData = [];
    for (var i = 0; i < numItems; i++) {
        const aIdx = Math.floor(Math.random() * names.length);

        let aSet = {
          data: [
            {
              x: Math.floor(Math.random() * 100) + 1,
              y: Math.floor(Math.random() * 100) + 1,
              r: Math.floor(Math.random() * 50) + 10,
            },
          ],
          label: names[aIdx],
          borderColor: randomColor(),
          backgroundColor: randomColor(),
        };

        aData.push(aSet)
    }
console.log(aData);

    return JSON.stringify({
      labels: "Africa",
      datasets: aData
    });
}

export function randomData(numItems) {
  return JSON.stringify({
    labels: randomLabels(numItems),
    datasets: [
      randomDataset('First', 'magenta', numItems),
      randomDataset('Second', 'green', numItems),
      randomDataset('Third', 'blue', numItems),
    ],
  });
}
