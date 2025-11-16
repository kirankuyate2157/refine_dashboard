import express from "express";

import { emails, emails_HV, emails_resend } from "../controllers/mail.controller.js";

//addressing and mapping thought routers
const router = express.Router();

router.route("/").post(emails_resend);

router.route("/hirevia").post(emails_HV);

export default router;
