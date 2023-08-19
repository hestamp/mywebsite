import mongoose from 'mongoose'

const connectMongo = async () => {
  try {
    await mongoose.connect(process.env.MONGOLINK)
    console.log('success')
  } catch (error) {
    throw new Error('Connection failed!' + error)
  }
}

export default connectMongo
