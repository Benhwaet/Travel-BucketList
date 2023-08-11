const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const secretKey = 'replace-with-a-secure-secret-key';
const users = [
    {
      id: 1,
      username: 'john_doe',
      email: 'john@example.com',
      password: '$2b$18e60vrJsbC', // hashed password = ?
      profilePicture: 'default-profile.png',
    },
];

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads');
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname);
    },
});
const upload = multer({ storage });

const authController = {
    login: (req, res) => {
        // ... login logic
    },

    signup: (req, res) => {
        // ... signup logic
    }
};


signup: (req, res) => {
    const { username, email, password } = req.body;
    if (users.some((user) => user.username === username || user.email === email)) {
        return res.status(409).json({ error: 'Username or email already exists' });
    }

    const hashedPassword = bcrypt.hashSync(password, 10);
    const newUser = {
        id: users.length + 1,
        username,
        email,
        password: hashedPassword,
        profilePicture: req.file ? req.file.filename : 'default-profile.png',
    };

    users.push(newUser);
    try {
        const token = jwt.sign({ userId: newUser.id }, secretKey, { expiresIn: '1h' });
        const { password: _, ...userData } = newUser;
        res.json({ token, user: userData });
    } catch (error) {
        res.status(500).json({ error: 'Token generation error' });
    }
}

module.exports = authController;

