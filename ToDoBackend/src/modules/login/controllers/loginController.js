import checkUser from "../../../modals/loginModal.js";
import getUser from "../../../modals/userModal.js";
import { generateToken } from "../helpers.js";

class loginController {
  login = async (req, res) => {
    const { email, password } = req?.body;
    const user = await checkUser(email, password);
    if (user) {
      const token = generateToken(user);
      return res?.status(200).send({
        Authorization: token,
        status: 200,
      });
    }

    return res?.send({
      error: "User Does not exists",
      status: 401,
    });
  };

  user = async (req, res) => {
    const user = await getUser(req?.userId);
    if (user) {
      res.headers 
      return res?.status(200).send({
        data: { user: user },
        status: 200,
      });
    }

    return res?.send({
      error: "User Does not exists",
      status: 401,
    });
  };
}

export default new loginController();
