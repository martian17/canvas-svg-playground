

let main = function(){
    let body = new ELEM(document.body);
    let canvas = body.add("canvas").e;
    let width = 500;
    let height = 200;
    canvas.width = width;
    canvas.height = height;
    let ctx = canvas.getContext("2d");
    let s = 50;
    ctx.beginPath();
    for(let i = 0; i < s; i++){
        let h = Math.sin(i/s*10);
        let r = i/s;
        let x = width*r;
        let y = height/2+h*height/3;
        ctx.lineTo(x,y);
    }
    ctx.lineWidth = 3;
    ctx.shadowBlur = 10;
    ctx.shadowColor = "#f0f";
    ctx.strokeStyle = "#f0f";
    ctx.stroke();
};

main();


