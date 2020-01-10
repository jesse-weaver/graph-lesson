(() => {
  
  function getEdgeKey(key1, key2) {
    return `${key1}->${key2}`;
  }

  function drawGraph(r, graph) {
    if (!graph.adjacencies.length) {
      return;
    }

    graph.adjacencies.forEach(([k1, k2], i) => {
      const v1 = graph.vertices[k1];
      const v2 = graph.vertices[k2];
      const edge = graph.edges[getEdgeKey(k1, k2)];
      r.drawLine(v1.location, v2.location, edge.color);
      r.drawNode(v1.location, v1.color);
      r.drawNode(v2.location, v2.color);
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
