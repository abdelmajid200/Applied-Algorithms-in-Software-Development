function dijkstra(graph, startNode) {
    const distances = {};
    const visited = {};
    const queue = [];  
    for (let node in graph) {
        distances[node] = Infinity;
    }
    distances[startNode] = 0;
    queue.push(startNode);
    while (queue.length) {   
        let currentNode = queue.shift();
        visited[currentNode] = true;
        for (let neighbor in graph[currentNode]) {
            let distance = distances[currentNode] + graph[currentNode][neighbor];
            if (distance < distances[neighbor]) {
                distances[neighbor] = distance;
            }
            if (!visited[neighbor]) {
                queue.push(neighbor);
            }
        }
    }
    return distances;
}
