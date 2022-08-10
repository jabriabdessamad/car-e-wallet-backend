const mongoose = require("mongoose");

const Scheme = mongoose.Schema;

const Parking = Scheme({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  Price: {
    type: String,
    required: true,
  },
  Spots: {
    type: Array,
    required: true,
  },
});
