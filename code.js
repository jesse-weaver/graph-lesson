(() => {
  
  function getEdgeKey(key1, key2) {
    return `${key1}->${key2}`;
  }

  function drawGraph(r, graph) {
    // FILL THIS OUT
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
