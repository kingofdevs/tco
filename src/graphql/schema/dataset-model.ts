const mongoose = require('mongoose');
const { Schema } = mongoose;

const dataSetSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  userId: {
    type: Number,
    required: true,
  },
  distanceUnit: {type: Schema.Types.ObjectId, ref: 'list'},
  fuelUnit: {type: Schema.Types.ObjectId, ref: 'list'},
  currency: String,
  countryCode: { type: String, ref: 'country'},
  localRegion: String,
  createdAt: Date,
  updatedAt: Date
},{ timestamps: true, });

export const DataSet = mongoose.model('dataSet', dataSetSchema); 