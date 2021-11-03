let userlist = [
    {
        username:"test",
        password: "test",
        email: "test@test.com",
        role: "user",
        token: "user-token"
    },
    {
        username:"admin",
        password: "admin",
        email: "admin@admin.com",
        role: "admin",
        token: "admin-token"
    }
]

export const loginUser = (req, resp) => {
   const {username, password} = req.body
    const user = userlist.find((item) => item.username === username)
    if (!user) {
        resp.status(401).json()
}
    if (user?.password === password) {
        resp.status(200).json(user)
    }
    else {resp.status(409).json()}
};

export const registerUser = (req, resp) => {
    const {username, email, password} = req.body
    if (userlist.find((item) => item.username === username)){
        resp.status(200).json()
        return
    }
    if (userlist.find((item) => item.email === email)){
        resp.status().json()
        return
    }
    userlist.push({
        username:username,
        password: password,
        email: email,
        role: "user",
        token: "user-token"
    })
    resp.status(201).json()
}