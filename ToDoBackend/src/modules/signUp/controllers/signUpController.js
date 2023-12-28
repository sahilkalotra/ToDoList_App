import createUser from "../../../modals/signUpModal.js";
import { generateToken } from "../helper.js";

class signUpController {
  signUp = async (req, res) => {
    const { firstName, lastName, email, password } = req?.body;
    const user = await createUser(firstName, lastName, email, password);
    if (user) {
      const token = generateToken(user);
      return res.send({
        status: true,
        Authorization: token,
      });
    }
    return res?.send({
      status: false,
      messasge: "User with email Already Exists",
    });
  };
}

export default new signUpController();
