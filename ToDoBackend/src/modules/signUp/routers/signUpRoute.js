import { Router } from "express";
import { validate } from "express-validation";

import signUpController from "../controllers/signUpController.js";
import request from "../requests/request.js";


const route = Router();

route.post(
  "/signUp",
  [validate(request.signUpValidate)],
  signUpController.signUp
);

export default route;
