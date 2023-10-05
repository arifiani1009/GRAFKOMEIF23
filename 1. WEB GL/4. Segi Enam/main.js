function main(){
    var canvas = document.getElementById("myCanvas");
    var gl = canvas.getContext("webgl");

    var vertices = [
        0.3, 0.4, //titik A
        0.2, 0.2, //titik B

        0.2, 0.2, //titik B
        0.3, 0.0, //titik C

        0.3, 0.0, //titik C
        0.5, 0.0, //titik D

        0.5, 0.0, //titik D
        0.6, 0.2, //titik E

        0.6, 0.2, //titik E
        0.5, 0.4, //tiitk F

        0.5, 0.4, //tiitk F
        0.3, 0.4 //titik A

    ];

    var vertexShaderCode = `
    attribute vec2 apost;
        void main(){
            gl_Position = vec4(apost, 0.0, 1.0);
        }
    `;

    var positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);

    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexShaderCode);
    gl.compileShader(vertexShader);

    var fragmentShaderCode = document.getElementById("vertexShaderCode").text;

    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragmentShaderCode);
    gl.compileShader(fragmentShader);

    var program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    gl.useProgram(program);

    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    var aPosition = gl.getAttribLocation(program, "apost");
    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(aPosition);

    gl.clearColor(1.0, 1.0, 1.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    gl.drawArrays(gl.LINES, 0, 12);
}