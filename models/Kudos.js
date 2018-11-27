const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/**
 * Model for Kudos Notes.  Kudos Id# is stored in Users database to link.
 */
var KudosSchema = new Schema({
  title: String,
  body: String,
  from: String,
  to: String
  // from: {
  //   type: String,
  //   trim: true,
  //   required: 'Both Sender and Receiver is Required'
  // },
  // to: {
  //   type: String,
  //   trim: true,
  //   required: 'Both Sender and Receiver is required'
  // }  
});

const Kudos = mongoose.model("Kudos", KudosSchema);

module.exports = Kudos;