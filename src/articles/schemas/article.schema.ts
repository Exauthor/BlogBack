import * as mongoose from 'mongoose';

export const ArticleSchema = new mongoose.Schema({
  name: String,
  title: String,
  description: String,
  body: String,
  complexity: Number,
  headerImage: String,
  articleImage: String,
  themes: Array,
  size: Array,
  archive: Boolean,
});