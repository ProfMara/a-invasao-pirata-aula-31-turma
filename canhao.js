class Canhao{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.angulo = 0;
        this.canoImg = loadImage("canhao.png");
        this.baseImg = loadImage("base.png");
    }
    show(){
        console.log(this.angulo)
        //checar se apertou a seta para esquerda
        if(keyIsDown(LEFT_ARROW) && this.angulo > -40){
            //diminui em 1
            this.angulo--;
        }   
        //checar se apertou a seta para direita
        if(keyIsDown(RIGHT_ARROW) && this.angulo < 40){
            //aumenta em 1
            this.angulo++;
        }   
        //salvar o estado do jogo e atualizar as configurações
        push ();
        //mudar o eixo (0,0)
        translate (this.x, this.y);
        rotate(this.angulo);
        //mostrando a imagem do cano
        image (this.canoImg, 0, 0, 150,100);
        pop ();
        //mostrando a imagem da base...
        image (this.baseImg, this.x, this.y, 200,200);
    }
}