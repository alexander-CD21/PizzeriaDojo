function pizzaOven(tipoCorteza, tipoSalsa, quesos, salsas, numero){
    let Pizza={};
    Pizza.tipoCorteza=tipoCorteza;
    Pizza.tipoSalsa=tipoSalsa;
    Pizza.quesos=quesos;
    Pizza.salsas=salsas;
    Pizza.numero= numero;
    return Pizza;
}

function randomPizza() {
    let numero=Math.floor(Math.random()*4);
    let pizza=[pizza0,pizza1,pizza2,pizza3];
    //for(let i=0; i<pizza.length;i++){
            pedido=pizza[numero];
            //console.log(pedido);

    
    return pedido;
    
}
let pedido;
let pizza0=pizzaOven("estilo Chicago","tradicional",["mozzarella"],["pepperoni","salchicha"],0);
console.log(pizza0);

let pizza1=pizzaOven("lanzada a mano","marinara",["mozzarella","feta"],["champiñones","aceitunas","cebollas"],1);
console.log(pizza1);

let pizza2=pizzaOven("estilo alexander","especial",["peperoni","segoviana",],["pepinillo","jamon","aceitunas","piña"],2);
console.log(pizza2);

let pizza3=pizzaOven("estilo microondas","especial Royal",["queso","fondiu"],["hotdot","piña cortada","aceitunas verdes","carne"],3);
console.log(pizza3);

let aletorio=randomPizza();
console.log(aletorio);