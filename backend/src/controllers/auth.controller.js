export const signup =async (req, res) => {
  res.send("Signup route: Register a new user");
};

export const login = async(req, res) => {
  res.send("Login route: Authenticate a user");
};

export async function logout(req, res){
    res.send("Logout Route")
}