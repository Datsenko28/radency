

const chooseOptimalDistance = (t, k, ls) => {
    let distance = 0;
        if (ls.length < 1 || k > ls.length) {
            return null;
    }

    for (let i = 0; i < ls.length - k + 1; i++) {
        if (k === 1) {
                if (distance <= ls[i] && ls[i] <= t){
                    distance = ls[i];
                }
        }

       for (let y = i + 1; y < ls.length - k + 2; y++) {
           if (k === 2) {
               let summ2 = ls[i] + ls[y];
                    if (distance <= summ2 && summ2 <= t) {
                        distance = summ2;
                    }
           }

           for (let e = y + 1; e < ls.length; e++) {
               if (k === 3) {
                   let summ3 =ls[i] + ls[y] + ls[e];
                        if (distance <= summ3 && summ3 <= t){
                            distance = summ3;
                        }
               }
           }

       }
    }
    console.log(distance);
    return distance;
}

chooseOptimalDistance(174, 3, [51, 56, 58, 59, 61]);  //173
chooseOptimalDistance(163, 3, [50]); //null
