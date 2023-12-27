import { Router } from "express";

import loginRoutes from "./src/modules/login/routers/loginRoute.js";
import signUpRoutes from "./src/modules/signUp/routers/signUpRoute.js";

const router = Router()

router.use(loginRoutes);
router.use(signUpRoutes);

export default router;
