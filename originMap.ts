

export function today():number [][]{
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

    const dayAdd=1;
    const resultTime = new Date(Date.now() + dayAdd * 24*60*60*1000);
    const month =resultTime.getMonth()
    const date =resultTime.getDate()
    const weekDay =resultTime.getDay()


    originMap[Math.floor(month/6)][month%6]=-1
    originMap[Math.floor(2+(date-1)/7)][(date-1)%7]=-1
    originMap[Math.floor(6+weekDay/4)][4+(weekDay-1)%3]=-1
    return originMap

}

