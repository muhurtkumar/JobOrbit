import JobApplication from "../models/jobApplication.js"
import User from "../models/User.js"
import {v2 as cloudinary} from 'cloudinary';

// Get user data
export const getUserData = async (req, res) => {
    const userId = req.auth.userId

    try {
        const user = await User.findById(userId)

        if(!user) {
            return res.status(404).json({success: false, message: "User not found!"})
        }

        res.json({success: true, user})
    } catch (error) {
        res.json({success: false, message: error.message})
    }
}

// Apply for a job
export const applyForJob = async (req, res) => {
    const {jobId} = req.body;
    const userId = req.auth.userId;

    try {
        const isAlreadyApplied = await JobApplication.findOne({jobId, userId}); // user already applied for this job

        if(isAlreadyApplied.length > 0) {
            return res.status(400).json({success: false, message: "Already Applied!"});
        }

        const jobData = await Job.findById(jobId);
        if(!jobData) { // if we dont get jobData means user is applying for job that is not available
            return res.status(404).json({success: false, message: "Job not found!"});
        }

        await JobApplication.create({
            companyId: jobData.companyId,
            userId,
            jobId,
            date: Date.now(),
        })

        res.json({succes: true, message: "Applied successfully!"})
    } catch (error) {
        res.json({success: false, message: error.message});
    }
}

// Get user applied jobs
export const getUserJobApplications = async (req, res) => {
    try {
        const userId = req.auth.userId;

        const applications = await JobApplication.find({userId})
        .populate('companyId', 'name email image')
        .populate('jobId', 'title description location category level salary')
        .exec();

        if(!applications){
            return res.status(404).json({success: false, message: "No job applications found!"});
        }

        return res.json({success: true, applications});
    } catch (error) {
        res.json({success: false, message: error.message});
    }
}

// Update user profile (resume)
export const updateUserResume = async (req, res) => {
    try {
        const userId = req.auth.userId;
        const resumeFile = req.file;

        const userData = await User.findById(userId);

        if(resumeFile){
            const resumeUpload = await cloudinary.uploader.upload(resumeFile.path) // will upload the resume to cloudinary
            userData.resume = resumeUpload.secure_url;
        }

        await userData.save();

        return res.json({success: true, message: "Resume updated successfully!"});
    } catch (error) {
        res.json({success: false, message: error.message});
    }
}
