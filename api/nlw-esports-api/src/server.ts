import express from "express";

const app = express()

app.get('/ads', (request, response) => {
  return response.json([

    { id: 11, name: 'Anuncio 11' },
    { id: 12, name: 'Anuncio 12' },
    { id: 13, name: 'Anuncio 13' }
  ])
})

app.listen(3333)