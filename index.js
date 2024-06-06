
let  nameHero = "Murilovisk"
let xp = 10050
const msg = "O herói " + nameHero + " está no nível de " 

if (xp<=1000) 
    console.log(msg + "Ferro")

else if (xp>=1001 && xp <= 2000)
    console.log(msg + "Bronze")

else if (xp>=2001 && xp <= 5000)
    console.log(msg + "Prata")

else if (xp>=5001 && xp <= 7000)
    console.log(msg + "Ouro")

else if (xp>=7001 && xp <= 8000)
    console.log(msg + "Platina")

else if (xp>=8001 && xp <= 9000)
    console.log(msg + "Ascendente")

else if (xp>=9001 && xp <= 10000)
    console.log(msg + "Imortal")

else if(xp>= 10001)
    console.log(msg + "Radiante")