import express from 'express';
import { changeJobApplicationsStatus, changeVisibility, getCompanyData, getCompanyJobApplicants, getCompanyPostedJobs, loginCompany, postJob, registerCompany } from '../controllers/companyController.js';
import upload from '../config/multer.js';

const router = express.Router();

// Register a company
router.post('/register', upload.single('image'), registerCompany)

// Login a company
router.post('/login', loginCompany)

// Get company data
router.get('/company', getCompanyData)

// Post a job
router.post('/post-job', postJob)

// Get Applicants data of company
router.get('/applicants', getCompanyJobApplicants)

// Get Posted Jobs of company
router.get('/list-jobs', getCompanyPostedJobs)

// Change Job Application Status
router.post('/change-status', changeJobApplicationsStatus)

// Change Job Visibility
router.post('/change-visibility', changeVisibility)

export default router;