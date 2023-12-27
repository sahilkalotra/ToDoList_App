import checkUser from "../../../modals/loginModal.js";

class loginController {
  login = async (req, res) => {
    const { email, password } = req?.body;
    const user = await checkUser(email, password);
    if (user) {
      console.log('userin')
      return res?.status(200).send({
        data: { ...user },
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
