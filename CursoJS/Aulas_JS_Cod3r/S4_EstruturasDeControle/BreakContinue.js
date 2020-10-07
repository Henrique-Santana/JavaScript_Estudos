const nums = [1,2,3,4,5,6,7,8,9,10]

for(x in nums){
    if(x == 5){
        break //pula para fora do for, porque não funciona no if
    }
    console.log(`${x} = ${nums[x]}`)
}

for ( y in nums){
    if (y == 5){
        continue //O continue pula uma repetição, não encerra a repetiçã, ele apenas pula uma repetição como no exemplo mostra, no caso só pula um vetor do array.
    }
    console.log(`${y} = ${nums[y]}`)
}

externo:
for (a in nums){
    for (b in nums){
        if(a ==2 && b == 3) break externo
        console.log(`Par = ${a},${b}`)
    }
}