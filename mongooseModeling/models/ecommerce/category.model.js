import mongoose from 'mongoose';

const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      reqquired: true,
    },
  },

  { timestamps: true }
);

export const Category = mongoose.model('Category', CategorySchema);
