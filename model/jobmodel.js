import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },  
    description: {
        type: String,
        
    },
    company: {
        type: String,
        required: true
    },
    location: {
        type: String,
        
    }
})

const Job = mongoose.model("Job", jobSchema)

export default Job