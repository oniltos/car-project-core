// Import required modules
import express from 'express';
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()

import Car from './models/Car.model.js';
import connectToDatabase from './config/db.connection.js';

connectToDatabase()

// Create an instance of the express app
const app = express();

app.use(express.json())

var corsOptions = {
  origin: process.env.CORS_ORIGIN
}

app.use(cors(corsOptions))

app.use((req, res, next) => {
  if (req.query.token !== process.env.TOKEN) {
    return res.status(403).json({message: 'sai fora'})
  }
  next()
})

// Set up a simple route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

function formatString(str) {
    // Split the string into parts using the dash as a separator
    const parts = str.split('-');
  
    // Capitalize the first letter of each part
    const capitalized = parts.map(part => part.charAt(0).toUpperCase() + part.slice(1));
  
    // Join the parts together with a space
    const formatted = capitalized.join(' ');
  
    return formatted;
  }

app.post('/ads', async (req, res) => {
    const { url, vehicle, store } = req.body
    
    const car = vehicle
    const newCar = {
        url: url,
        make: car.make.name,
        model: car.model.name,
        version: car.version.name,
        km: car.kilometre.value,
        optionals: car.optional.name,
        finalPlate: car.finalPlate.name,
        color: car.color.name,
        yearManufacture: car.year.manufacture.value,
        yearModel: car.year.model.value,
        price: car.price.vehicle.value,
        fipe: car.price.fipe.value,
        fuel: car.fuel.name,
        store: formatString(store.portfolio.fantasyName)
    }

    await Car.create(newCar)
    
    res.status(201).json({success: true})
})

app.get('/ads', async (req, res) => {
  const cars = await Car.find({show: true})

  return res.status(200).json(cars)
})

// Start the server
app.listen(process.env.PORT, () => {
  console.log('Server started on port 3000');
});