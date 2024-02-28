import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
  job: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Job",
  },

  applicantemail: {
    type: String,
    required: true,
  },

  applicantname: {
    type: String,
    required: true,
  },
  coverletter: {
    type: String,
    required: true,
  },
  applicationdate: {
    type: Date,
    default: Date.now,
  },
});


const Application = mongoose.model("Application", applicationSchema);

export default Application;