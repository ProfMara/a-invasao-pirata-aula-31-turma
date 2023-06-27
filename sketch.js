const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world, ground;
var solo, parado;
var cenario;
var torre, torreIMG;

var balas = [];
var barcos = [];

function preload(){
    //carrega a imagem do cenario
    cenario = loadImage("fundo.gif");

}


function setup() {
    canvas = createCanvas(1200, 600);
    engine = Engine.create();
    world = engine.world;

    parado = { isStatic: true };

    solo = Bodies.rectangle(width/2, height-2, width, 2, parado);
    World.add(world, solo);

 

    rectMode(CENTER);
    //configura para posicionar as imagens a partir do centro
    imageMode (CENTER);
    //converte o modo de medir o ângulo para GRAU
    angleMode(DEGREES);

    //cria um objeto da classe torre
    torre = new Torre(160,350,150,310)
    

    //cria um objeto da classe canhão
    canhao = new Canhao(160,130)
    bala = new Bala(160,140)
    
    
    
    
}

function draw() {
    Engine.update(engine);
    background("cyan");
    //coloca uma imagem no meio do jogo
    image (cenario, 600, 300,1200,600);
    bala.show();
    //exibe o canhão
    canhao.show()
    //exibe a torre
    torre.show();
    


    //comando que repete código
    for(var i = 0; i < balas.length; i++ ){
        if(balas[i] !== undefined){
            balas[i].show();
            
        }
    }

    fill("green")
    //solo
    rect(solo.position.x, solo.position.y, width, 10);
    
}
//aciona os códigos quando pressiona qualquer tecla
function keyPressed(){
    //checa se a tecla espaço foi pressionada
    if(keyCode==32){
        //criar bala
        bala = new Bala(160,130);
        //atira a bala
        bala.shoot();
        //add a bala na matriz
        balas.push(bala);
    }

}
