var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'First name is required']
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required']
  },
  email: {
    type: String,
    required: [true, 'email is required'],
    unique: true,
    validate:[{
      validator: function(email) {
        // email regex
        return /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/.test(email);
      },
      message: '{VALUE} is not a valid email'
    }]
  },
  password: {
    type: String,
    required: [true, 'password is required']
  }
}, {
  timestamps: true
});

userSchema.methods.hashPassword = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
}

userSchema.methods.validatePassword = function(input) {
  return bcrypt.compareSync(input, this.password);
}

userSchema.pre('save', function(done) {
  this.password = this.hashPassword(this.password);
  done();
})

mongoose.model('User', userSchema);
