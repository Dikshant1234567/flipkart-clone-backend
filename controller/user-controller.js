import sinupUser from "../model/sinupUserSchema.js";

export const sinupController = async (req, resp) => {
  try {
    const exist = await sinupUser.findOne({ username: req.body.username });
    if (exist) {
      return resp.status(401).json({ message: "user already exist" });
    }else{
      const user = new sinupUser(req.body);
      await user.save();
      return resp.status(200).json({ data: user });
    }
  } catch (err) {
    console.log("error while sinup controller", err);
    return resp.status(500).json({ error: err });
  }
};

export const loginController = async (req, resp) => {
  try {
    const username = req.body.username;
    const password = req.body.password;
    const userData = await sinupUser.findOne({
      username: username,
      password: password,
    });
    if(userData){
      return resp.status(200).json({ user: userData });
    }else{
      return resp.status(401).json({message : 'user not exist'})
    }

  } catch (err) {
    console.log("error un login api");
    return resp.status(500).json({ message: err });
  }
};
