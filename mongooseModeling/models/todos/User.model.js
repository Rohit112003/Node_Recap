import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      unique: [true, 'password is required'],
      required: true,
      min: [8, 'Must be 8 letter'],
    },
  },
  { timestamps: true }
);
export const User = mongoose.model('User', userSchema);
