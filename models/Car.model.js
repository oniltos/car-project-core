import mongoose from 'mongoose';

// Define the car schema
const carSchema = new mongoose.Schema({
  url: String,
  make: String,
  model: String,
  version: String,
  km: Number,
  optionals: Object,
  finalPlate: String,
  color: String,
  yearManufacture: Number,
  yearModel: Number,
  price: Number,
  fipe: Number,
  fuel: String,
  store: String,
  storeRating: Number,
  storeAddress: String,
  lat: Number,
  lng: Number,
  flag: Boolean,
  funcionamentoSabado: String
});

// Create the car model
const Car = mongoose.model('Car', carSchema);

export default Car;