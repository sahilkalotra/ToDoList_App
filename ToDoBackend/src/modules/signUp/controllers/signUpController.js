import createUser from "../../../modals/signUpModal.js";

class signUpController {
  signUp = async (req, res) => {
    const { firstName, lastName, email, password } = req?.body;
    const user = await createUser(firstName, lastName, email, password);
    if (user) {
      res.send({
        status: true,
        data: user,
      });
    }
  };
}

export default new signUpController();
