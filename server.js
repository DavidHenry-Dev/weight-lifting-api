const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())

let exercises = {
    "legs" : { 
        'squat' : {
            "targeted": "quad, hamstrings, glutes, abdominals, calves"
        },
        'leg press' : {
            "targeted": "quads, glutes, hamstrings, hips, and calves"
        }
    },

    "chest": { 
        "exercise": "bench press",
        "targeted": "pecs, anterior delts, triceps, biceps, lats"

    },

    "shoulders": { 
        "exercise": "overhead press",
        "targeted": "upper pecs, delts, triceps, traps"

    },

    "back" : { 
        "exercise": "deadlift",
        "targeted": "quadriceps, glutes, hamstrings, lats, traps, erectors, abdominals"

    },

    "unknown" : { 
        "exercise": "unknown",
        "targeted": "unknown"

    }
}

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')

})

app.get('/api/', (request, response)=>{
  response.json(exercises)
})

app.get('/api/:category', (request, response)=>{
    const category = request.params.category.toLowerCase()
    if ( exercises[category] ) {
        response.json(exercises[category])
    } else {
        response.json(exercises['unknown'])
    }
})


const PORT = 5000
app.listen( PORT, ()=> {
    console.log(`The server is now running on ${PORT}!`)
})