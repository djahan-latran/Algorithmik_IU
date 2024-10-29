// constructing a greedy algorithm to find the item with the highest value per weight

let greedyAlgo = (items) => {
    let greatestUnitValue = 0;
    let gUVItem = "";
    for (let item in items) {
        let name = item;
        let unitValue = items[item].ttlValue / items[item].weight;
        if (unitValue > greatestUnitValue) {
            greatestUnitValue = unitValue;
            gUVItem = name;
        }
    } return console.log(`item: ${gUVItem}, unit value: ${greatestUnitValue}`)
}

const objItems = {
    mangoes: {weight: 20, ttlValue: 60},
    avocadoes: {weight: 15, ttlValue: 60},
    yams: {weight: 10, ttlValue: 90},
    maize: {weight: 30, ttlValue: 60}
}


let greedyTest = greedyAlgo(objItems);
console.log(greedyTest)