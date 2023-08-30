const originMap:number [][] = [
    [0,0,0,0,0,0,-1],
    [0,0,0,0,0,0,-1],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [-1,-1,-1,-1,0,0,0],
]

export function today():number [][]{
    originMap[1][1]=-1
    originMap[6][1]=-1
    originMap[6][6]=-1
    return originMap

}

