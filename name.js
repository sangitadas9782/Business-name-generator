    let random = Math.random()
        let first, second, third;

        // Lets generate the first word
        if(random<0.33){
            first = "Crazy"
        }
        else if(random<0.66 && random>=0.33){
            first = "Amazing"
        }
        else{
            first = "Fire"
        }
        // Lets generate the second word
        random = Math.random()
        if(random<0.33){
            second = "Engine"
        }
        else if(random<0.66 && random>=0.33){
            second = "Foods"
        }
        else{
            second = "Garments"
        }

        // Lets generate the third word
        random = Math.random()
        if(random<0.33){
            third = "Bros"
        }
        else if(random<0.66 && random>=0.33){
            third = "Limited"
        }
        else{
            third = "Hub"
        }

        console.log(`${first} ${second} ${third}`)
