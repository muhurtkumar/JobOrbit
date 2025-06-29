import Company from "../models/Company.js";
import bcrypt from 'bcrypt';
import {v2 as cloudinary} from 'cloudinary';
import generateToken from "../utils/generateToken.js";
import Job from "../models/Job.js";

// Register a new company
export const registerCompany = async (req, res) => {
    const { name, email, password } = req.body;
    const imageFile = req.file;

    if(!name || !email || !password || !imageFile) {
        return res.status(400).json({success:false, message: "All fields are required" });
    }

    try {
        const companyExist = await Company.findOne({ email });
        if(companyExist) {
            return res.status(400).json({success:false, message: "Company already registered" });
        }

        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password, salt);

        const imageUpload = await cloudinary.uploader.upload(imageFile.path)

        const company = await Company.create({
            name,
            email,
            password: hashPassword,
            image: imageUpload.secure_url
        })

        res.status(201).json({
            success: true,
            message: "Company registered successfully",
            company: {
                id: company._id,
                name: company.name,
                email: company.email,
                image: company.image
            },
            token: generateToken(company._id)
        });

    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })
    }
}

// Company Login
export const loginCompany = async (req, res) => {
    const {email, password} = req.body;

    try {
        if(!email || !password) {
            return res.status(400).json({success:false, message: "All fields are required" });
        }

        const company = await Company.findOne({email})
        if(!company) {
            return res.status(400).json({success:false, message: "Company not registered" });
        }

        if(bcrypt.compare(password, company.password)){
            res.status(200).json({
                success: true,
                message: "Company logged in successfully",
                company: {
                    id: company._id,
                    name: company.name,
                    email: company.email,
                    image: company.image
                },
                token: generateToken(company._id)
            });
        }
        else{
            return res.status(400).json({success:false, message: "Invalid email or password" });
        }
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })
    }
}

// Get Company  Data
export const getCompanyData = async (req, res) => {

}

// Post a new job
export const postJob = async (req, res) => {
    const {title, description, location, category, level, salary} = req.body;

    if(!title || !description || !location || !category || !level || !salary) {
        return res.status(400).json({success:false, message: "All fields are required" });
    }

    const companyId = req.company._id;
    
    try {
        const newJob = new Job({
            title,
            description,
            location,
            category,
            level,
            salary,
            date: Date.now(),
            companyId,
        })

        await newJob.save();
        res.status(201).json({
            success: true,
            message: "Job posted successfully",
            newJob
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })
    }
}

// Get Company Job Applicants
export const getCompanyJobApplicants = async (req, res) => {

}

// Get Company Posted Jobs
export const getCompanyPostedJobs = async (req, res) => {

}

// Change Job Application Status (e.g., Accepted, Rejected)
export const changeJobApplicationsStatus = async (req, res) => {

}

// Change Job Visibility
export const changeVisibility = async (req, res) => {

}