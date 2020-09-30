// for( var i = 0 Declara a variavel; i<10 condiçao; incremento i++)

// COM VAR
//for(var i = 0; i < 10; i++){
//    console.log(i)
//}
//console.log('i = ',i)

//COM LET
//for(let i = 0; i < 10; i++){
//    console.log(i)
//}
//console.log("i =",i)


const func = []
for(let i = 0; i <10; i++){ //se usar o var, o var ele tem 
    func.push(function(){
        console.log(i)
    })
}

func[2]()
