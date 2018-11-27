const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Users is parent for Kudos notes.  Users can be senders or receivers.

const UserSchema = new Schema({
  username: {
    type: String,
    trim: true,
    required: 'Username is Required'
  },
  
  //Id# of each kudos note will be pushed here if user was the sender
  senderPosts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Kudos'
    }
  ],
//Id# of each kudos note will be pushed here if user was the receiver
  receiverPosts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Kudos'
    }
  ],
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
