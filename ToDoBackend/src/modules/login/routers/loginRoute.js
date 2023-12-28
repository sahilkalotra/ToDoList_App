import { Router } from "express";
import loginController from "../controllers/loginController.js";
import { validate } from "express-validation";
import request from "../requests/request.js";
import verifyToken from "../../../middlewares/authentication.js";

const route = Router();

route.post("/login", validate(request.loginValidate), loginController.login);
route.get("/getuser", verifyToken, loginController.user);

export default route;
