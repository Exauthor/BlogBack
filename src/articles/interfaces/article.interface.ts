import { Document } from 'mongoose';

export interface Article extends Document {
    readonly title: String,
    readonly id: String,
    readonly description: String,
    readonly body: String,
    readonly complexity: Number,
    readonly headerImage: String,
    readonly articleImage: String,
    readonly themes: String[],
    readonly size: Number[],
    readonly archive: Boolean,
}