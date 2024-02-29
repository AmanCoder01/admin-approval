import express from "express"
import RegisterController from "../controllers/Register.controller.js";
import LoginController from "../controllers/Login.controller.js";
import RegisterSchema from "../validateSchemaa/RegisterSchema.js";
import LoginSchema from "../validateSchemaa/LoginSchema.js";
import AuthMiddleware from "../middlewares/AuthMiddleware.js";
import {AdminDashboardController, ApproveUserAccount} from "../controllers/AdminDasboard.controller.js";

const apiRoute=express.Router();
const protectedRoute=express.Router();

apiRoute.post('/register',RegisterSchema, RegisterController);
apiRoute.post('/login',LoginSchema, LoginController);

apiRoute.get("/admin/dashboard",AuthMiddleware, AdminDashboardController);
apiRoute.post("/admin/dashboard/approve",AuthMiddleware, ApproveUserAccount);

export {apiRoute,protectedRoute};