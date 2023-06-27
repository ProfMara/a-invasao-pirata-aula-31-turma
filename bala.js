class Bala{
    //define as props da bala
    constructor(x,y){
        //atribuir a prop body
        //DESAFIO nº 5: DEIXAR A BALA PARADA (ESTÁTICA)
        var parado = {isStatic:true}
        this.body = Bodies.circle(x,y,15, parado)
        //1º add o corpo no mundo
        World.add(world, this.body);
        //2º atribuir a prop imagem
        this.imagem = loadImage("bala.png")
    }

    //ATIRAR A BALA
    shoot(){
        var angulo = canhao.angulo - 28;
        //TRANSFORMAR GRAUS PARA RADIANOS
        angulo *= Math.PI/180
        //usar o angulo para definir x e y
        var v = p5.Vector.fromAngle(angulo);
        //TRANSFORMAR RADIANOS PARA GRAU
        v.mult(90/Math.PI)
        Body.setStatic(this.body, false)
        //dar velocidade para a bala
        Body.setVelocity(this.body, {x:v.x, y:v.y})

        
    }


    show(){
        //facilitar a sua vida
        var pos = this.body.position;
        //coloca a imagem na tela
        image (this.imagem, pos.x, pos.y, 30,30);
    }

}