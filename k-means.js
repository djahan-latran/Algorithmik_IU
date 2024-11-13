//constructing the kmeans algorithm


let kmeans = (points, centroids) => {
    //initiate 2d array based on number of points as columns and number of centroids as rows
    let distances = [];
    for (let i=0; i < centroids.length; i++) {
        row = [];
        for (let j=0; j < points.length; j++) {
            row.push(undefined);
        }
        distances.push(row);
    }
    // initiate a counter for amount of calculating new centroids
    let counter = 5;
    let clusters = []
    while (counter>0) {
        // calculate distances between the centroids and points
        for (let i=0; i<centroids.length; i++) {
            for (let j=0; j<points.length; j++) {
                distances[i][j] = Math.abs(centroids[i] - points[j]);
            }
        }
        // create new 2d array for the clusters
        clusters = []
        for (let i=0; i<centroids.length; i++) {
            let cluster = [];
            clusters.push(cluster);
        }
        // find minimum distance between each point and each centroid
        for (let i=0; i<points.length; i++) {
            let min = distances[0][i]
            let clusterIdx = 0
            for (let j=0; j<centroids.length; j++) {
                if (distances[j][i] < min) {
                    min = distances[j][i];
                    clusterIdx = j;
                }
            } clusters[clusterIdx].push(points[i]);
        }
        // save amount of centroids and reset centroid array
        let centroidAmount = centroids.length;
        centroids = []; 
        // calculating the average of each cluster, saving it as a new centroid
        for (let i=0; i<centroidAmount;i++) {
            let sum = 0;
            for (number of clusters[i]) {
                sum = sum + number;
            }
            let average = sum / clusters[i].length;
            console.log(`average: ${average}, cluster: ${clusters[i]}`);
            centroids.push(average);
        }
        console.log(centroids);
        counter--;
    }
}

let points = [3, 5, 13, 27, 38, 32, 35, 25, 7, 43, 15];
let centroids = [7, 35, 43];
let myTest = kmeans(points, centroids);
myTest;