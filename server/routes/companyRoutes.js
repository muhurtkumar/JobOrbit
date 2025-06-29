import express from 'express';
import { changeJobApplicationsStatus, changeVisibility, getCompanyData, getCompanyJobApplicants, getCompanyPostedJobs, loginCompany, postJob, registerCompany } from '../controllers/companyController.js';
import upload from '../config/multer.js';
import { protectCompany } from '../middlewares/authMiddleware.js';

const router = express.Router();

// Register a company
router.post('/register', upload.single('image'), registerCompany)

// Login a company
router.post('/login', loginCompany)

// Get company data
router.get('/company', protectCompany, getCompanyData)

// Post a job
router.post('/post-job', protectCompany, postJob)

// Get Applicants data of company
router.get('/applicants', protectCompany, getCompanyJobApplicants)

// Get Posted Jobs of company
router.get('/list-jobs', protectCompany, getCompanyPostedJobs)

// Change Job Application Status
router.post('/change-status', protectCompany, changeJobApplicationsStatus)

// Change Job Visibility
router.post('/change-visibility', protectCompany, changeVisibility)

export default router;