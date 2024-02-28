import express from "express";
import Job from "./model/jobmodel.js";
import Application from "./model/application.model.js";
import connectDb from "./db/connectDb.js"
const app = express();
app.use(express.json());
connectDb(); 

app.post("/api/v1/jobs", (req, res) => {
  try {
    const { title, description, company, location } = req.body;
    if (!title || !company) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const job = new Job({
      title,
      description,
      company,
      location,
    });

    job.save();

    return res.status(201).json(job);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

app.get("/api/v1/jobs", async (req, res) => {
    try {
        const jobs = await Job.find();
        return res.status(200).json(jobs);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
    });

    app.post("/api/v1/apply/:jobId", async (req, res) => {
        try {
            const { applicantemail, applicantname, coverletter } = req.body;
            const { id } = req.params;
            const job = await Job.findById(id);
            if (!job) {
                return res.status(404).json({ message: "Job not found" });
            }
            const application = new Application({
                job: id,
                applicantemail,
                applicantname,
                coverletter,
            });
            application.save();
            return res.status(201).json(application);
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: "Internal Server Error" });
        }
    });

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
