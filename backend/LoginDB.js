const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      'mongodb+srv://AkarnaMoulin:praga007thija@clustthemist.oobgmbh.mongodb.net/CuraBridge?retryWrites=true&w=majority&appName=ClustTheMist',
    );
    console.log(`MongoDB Connected`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

module.exports = connectDB;


