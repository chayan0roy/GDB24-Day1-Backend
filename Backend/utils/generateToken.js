const jwt = require('jsonwebtoken');

const dotenv = require('dotenv');
dotenv.config();


const generateTokens = async (user) => {
    try {
        const payload = { id: user.id };

        const auth_token = jwt.sign(
            { ...payload },
            process.env.JWT_TOKEN_SECRET_KEY,
            { expiresIn: '7d' }
        );

        return Promise.resolve({ auth_token });
    } catch (error) {
        return Promise.reject(error);
    }
};

module.exports = generateTokens;