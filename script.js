var respostas = {};

var p1 = document.getElementById("pergunta-1");
var p2 = document.getElementById("pergunta-2");
var p3 = document.getElementById("pergunta-3");
var p4 = document.getElementById("pergunta-4");
var p5 = document.getElementById("pergunta-5");
var p6 = document.getElementById("pergunta-6");
var p7 = document.getElementById("pergunta-7");
var p8 = document.getElementById("pergunta-8");
var p9 = document.getElementById("pergunta-9");
var p10 = document.getElementById("pergunta-10");

function ArmazenarRespostas(nump, event){
    if(event.target.type === 'radio'){
    console.log(event.target.value);
    respostas['pergunta'+nump] = parseInt(event.target.value);
    console.log(respostas);
    }
}


p1.addEventListener('click', function(event){
    ArmazenarRespostas(1, event)
})
p2.addEventListener('click', function(event){
    ArmazenarRespostas(2, event)
})
p3.addEventListener('click', function(event){
    ArmazenarRespostas(3, event)
})
p4.addEventListener('click', function(event){
    ArmazenarRespostas(4, event)
})
p5.addEventListener('click', function(event){
    ArmazenarRespostas(5, event)
})
p6.addEventListener('click', function(event){
    ArmazenarRespostas(6, event)
})
p7.addEventListener('click', function(event){
    ArmazenarRespostas(7, event)
})
p8.addEventListener('click', function(event){
    ArmazenarRespostas(8, event)
})
p9.addEventListener('click', function(event){
    ArmazenarRespostas(9, event)
})  
p10.addEventListener('click', function(event){
    ArmazenarRespostas(10, event)
})

function taxaSuspeito(){
    var pontuacao =
    respostas.pergunta1+
    respostas.pergunta2+
    respostas.pergunta3+
    respostas.pergunta4+
    respostas.pergunta5+
    respostas.pergunta6+
    respostas.pergunta7+
    respostas.pergunta8+
    respostas.pergunta9+
    respostas.pergunta10;
    
    return pontuacao;
}

function categoriaSuspeito(){
    if(taxaSuspeito() < 5){
        var categoria = "Você é possivelmente um INOCENTE";
    } else if(taxaSuspeito() == 5){
        var categoria = "Você é um dos SUSPEITOS";
    } else if(taxaSuspeito() < 8){
        var categoria = "Você é CUMPLICE do crime";
    } else if(taxaSuspeito() > 8){
        var categoria = "Você é o CULPADO do crime";
    }

    return categoria;
}

var submit1 = document.getElementById('submit1');
var submit2 = document.getElementById('submit2');
var submit3 = document.getElementById('submit3');
var submit4 = document.getElementById('submit4');
var submit5 = document.getElementById('submit5');
var submit6 = document.getElementById('submit6');
var submit7 = document.getElementById('submit7');
var submit8 = document.getElementById('submit8');
var submit9 = document.getElementById('submit9');
var submit10 = document.getElementById('submit10');

function proxPergunta(nump){
    var pergunta_atual = nump - 1;
    var nump = nump.toString();
    var pergunta_atual = pergunta_atual.toString();

    var el = document.getElementById('pergunta-'+nump);
    var el2 = document.getElementById('pergunta'+pergunta_atual);

    el.style.display = "block";
    el2.style.display = "none"
}

submit1.addEventListener('click', function(){
    proxPergunta(2);
    growProgressBar('20%');
})
submit2.addEventListener('click', function(){
    proxPergunta(3);
    growProgressBar('30%');
})
submit3.addEventListener('click', function(){
    proxPergunta(4);
    growProgressBar('40%');
})
submit4.addEventListener('click', function(){
    proxPergunta(5);
    growProgressBar('50%');
})
submit5.addEventListener('click', function(){
    proxPergunta(6);
    growProgressBar('60%');
})
submit6.addEventListener('click', function(){
    proxPergunta(7);
    growProgressBar('70%');
})
submit7.addEventListener('click', function(){
    proxPergunta(8);
    growProgressBar('80%');
})
submit8.addEventListener('click', function(){
    proxPergunta(9);
    growProgressBar('90%');
})
submit9.addEventListener('click', function(){
    proxPergunta(10);
    growProgressBar('100%');
})
submit10.addEventListener('click', function(){
    proxPergunta(11);
})

submit10.addEventListener('click', function(){
    document.getElementById("mostrarResultado").innerHTML = taxaSuspeito();
    document.getElementById("resultado").innerHTML = categoriaSuspeito();
})

function growProgressBar(percentage_width){
    var bar = document.getElementById("progress_bar");
    bar.style.width = percentage_width;
}