const vendor = (function() {
  class Renderer {
    ctx = null;
    tgtGraph = null;
    constructor(ctx, targetGraph) {
      this.ctx = ctx;
      this.ctx.lineWidth = 10;
      this.ctx.lineCap = 'round';
    }
    drawLine(v1, v2, color) {
      this.ctx.strokeStyle = color;
      this.ctx.beginPath();
      this.ctx.moveTo(...v1);
      this.ctx.lineTo(...v2);
      this.ctx.stroke();
    }
    drawNode(vector, color) {
      this.ctx.fillStyle = color;

      this.ctx.beginPath();
      this.ctx.arc(...vector, 10, 0, Math.PI * 2);
      this.ctx.fill();
    }
  }
  return {
    Renderer,
    buildTestGraph(cW, cH) {
      const paddingPercent = 0.05;
      const squareLength = Math.min(cW - cW * paddingPercent, cH - cH * paddingPercent);
      const scalar = 8;
      const translater = [(cW - squareLength)/2, (cH - squareLength)/2];
      function scaleVector(vector) {
        return vector.map((coord, i) => (
          ((coord / scalar) * squareLength) + translater[i]
        ));
      }
      return {
        adjacencies: [
          ['A', 'B'],
          ['B', 'C'],
          ['C', 'D'],
          ['D', 'E'],
          ['E', 'F'],
          ['F', 'G'],
          ['G', 'H'],
          ['H', 'I'],
          ['I', 'J'],
          ['J', 'A'],
        ],
        vertices: {
          A: {
            key: 'A',
            location: scaleVector([4,0]),
            color: 'white'
          },
          B: {
            key: 'B',
            location: scaleVector([5,3]),
            color: 'white'
          },
          C: {
            key: 'C',
            location: scaleVector([8,3]),
            color: 'white'
          },
          D: {
            key: 'D',
            location: scaleVector([6,5]),
            color: 'white'
          },
          E: {
            key: 'E',
            location: scaleVector([7,8]),
            color: 'white'
          },
          F: {
            key: 'F',
            location: scaleVector([4,6]),
            color: 'white'
          },
          G: {
            key: 'G',
            location: scaleVector([1,8]),
            color: 'white'
          },
          H: {
            key: 'H',
            location: scaleVector([2,5]),
            color: 'white'
          },
          I: {
            key: 'I',
            location: scaleVector([0,3]),
            color: 'white'
          },
          J: {
            key: 'J',
            location: scaleVector([3,3]),
            color: 'white'
          },
        },
        edges: {
          'A->B': {
            color: 'red',
          },
          'B->C': {
            color: 'orange',
          },
          'C->D': {
            color: 'yellow',
          },
          'D->E': {
            color: 'green',
          },
          'E->F': {
            color: 'blue',
          },
          'F->G': {
            color: 'red',
          },
          'G->H': {
            color: 'orange',
          },
          'H->I': {
            color: 'yellow',
          },
          'I->J': {
            color: 'green',
          },
          'J->A': {
            color: 'blue',
          },
        },
      };
    }
  }
})();

