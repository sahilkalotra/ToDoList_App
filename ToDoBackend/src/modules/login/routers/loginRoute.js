import { Router } from "express";
import loginController from "../controllers/loginController.js";
import { validate } from "express-validation";
import request from "../requests/request.js";

const route = Router();

route.post("/login", [validate(request.loginValidate)], loginController.login);

export default route;
