(() => {
  
  function getEdgeKey(key1, key2) {
    return `${key1}->${key2}`;
  }

  function drawGraph(r, graph) {
    // FILL THIS OUT
    const { 
      adjacencies,
      vertices,
      edges,
    } = graph;

    console.log(adjacencies);

    adjacencies.forEach(([vertice1, vertice2]) => {
      // let color = colors[Math.floor(Math.random() * colors.length)];
      console.log('vertice1', vertices[vertice1]);
      console.log('vertice2', vertices[vertice2]);

      const {
          location: v1Point,
          color: v1Color,
      } = vertices[vertice1];

      const {
          location: v2Point,
          color: v2Color,
      } = vertices[vertice2];

      const edge = edges[getEdgeKey(vertice1, vertice2)];
      console.log(edge);
      r.drawLine(v1Point, v2Point, edge.color);

      r.drawNode(v1Point, v1Color);
      r.drawNode(v2Point, v2Color);      
    });
  }

  function main() {
    const {
      clientWidth,
      clientHeight,
    } = document.body;
    const canvas = document.getElementById('gl-canvas');
    canvas.width = clientWidth;
    canvas.height = clientHeight;

    const ctx = canvas.getContext('2d');

    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, clientWidth, clientHeight);


    const testGraph = vendor.buildTestGraph(clientWidth, clientHeight);

    drawGraph(new vendor.Renderer(ctx), testGraph);
  }

  main();

  window.onresize = main;
})();
