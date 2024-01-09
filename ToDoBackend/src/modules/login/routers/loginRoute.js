import { Router } from "express";
import { validate } from "express-validation";

import request from "../requests/request.js";
import loginController from "../controllers/loginController.js";
import verifyToken from "../../../middlewares/authentication.js";

const route = Router();

route.post("/login", validate(request.loginValidate), loginController.login);
route.get("/getuser", verifyToken, loginController.user);

export default route;
