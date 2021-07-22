function spiral(param1) {
    let multi = []
    let inc = 0
    var result = []
    for (let i = 0; i < param1; i++) {
        multi[i] = []
        for (let j = 0; j < param1; j++) {
            multi[i][j] = inc
            inc++
        }
    }
    while(multi.length > 0) {
        result = result.concat(multi.shift())
 
        for(let i = 0; i < multi.length;i++) {
            result.push(multi[i].pop())
        }

        
        result = result.concat((multi.pop() || []).reverse())
        


        for (let j = multi.length - 1; j >= 0; j--) {
            result.push(multi[j].shift())
        }

    }
    console.log(result)
}


spiral(5)
spiral(6)
spiral(7)
