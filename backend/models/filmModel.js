import mongoose from "mongoose";
import slugify from "slugify";

const filmSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    director: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    releaseDate: {
        type: String,
        required: true
    },
    ratings: {
        type: String,
        required: true
    },
    image_path: {
        type: String,
        required: true
    },
    slug: String
})

filmSchema.pre('save', function(next){
    this.slug = slugify(this.title,{
        lower:true
    })
    next();
})

const Film = new mongoose.model("Movie", filmSchema)

export { Film }