const express = require('express')
const app = express()
import { Request, Response } from "express"

interface Legends {
    name: string
    unitType: 'Transforming' | 'Default' | 'Revival' | 'Tag',
    color: 'RED' | 'YEL' | 'BLU' | 'GRN' | 'PUR',
    episode: string
    rarity: 'HERO' | 'EXTREME' | 'SPARKING' | 'ULTRA'
    Legends_Limited: boolean
}
let team: Legends[] = [
    {
        name: 'Vegito Blue',
        unitType: 'Transforming',
        color: 'GRN',
        episode: 'Future saga',
        rarity: 'SPARKING',
        Legends_Limited: true
    },
    {
        name: 'SSJ3 Gotenks',
        unitType: 'Default',
        color: 'RED',
        episode: 'Majin buu saga',
        rarity: 'SPARKING',
        Legends_Limited: true
    },
    {
        name: 'SSJ4 Gogeta',
        unitType: 'Default',
        color: 'PUR',
        episode: 'GT',
        rarity: 'ULTRA',
        Legends_Limited: false
    }
]

app.get('/dblegends', (req: Request, res: Response) => {
    res.send(team)
})

app.listen(5000, (error: Error) => {
    if(!error){
        console.log(`Listening to 5000`)
    }
})