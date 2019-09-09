import * as mongoose from 'mongoose';

export const ArticleSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  id: { type: String, required: true, unique: true },
  description: String,
  body: String,
  complexity: Number,
  headerImage: String,
  articleImage: String,
  themes: Array,
  size: Array,
  archive: { type: Boolean, defaults: true },
});