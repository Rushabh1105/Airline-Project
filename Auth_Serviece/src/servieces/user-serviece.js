const UserRepository = require('../repository/user-repository');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const { JWT_KEY } = require('../config/server-config');

class UserServiece {
    constructor() {
        this.userRepository = new UserRepository();
    }

    async createUser(data) {
        try {
            const user = await this.userRepository.createUser(data);
            return user;
        } catch (error) {
            console.log('something went wrong in serviece layer');
            throw { error };
        }
    }

    async signIn(email, password) {
        try {
            const user = await this.userRepository.getByEmail(email);
            const passwordMatch = this.checkPassword(password, user.password);
            if (!passwordMatch) {
                console.log('password not match');
                throw { error: 'Incorrect password' };
            }

            const newJWT = this.createToken({ email: user.email, id: user.id });
            return newJWT;
        } catch (error) {
            console.log('something went wrong in serviece layer');
            throw { error };
        }
    }

    async isAuthenticated(token) {
        try {
            const response = await this.varifyToken(token);
            if (!response) {
                throw { error: 'Invalid User' };
            }
            const user = this.userRepository.getById(response.id);
            if (!user) {
                throw { error: 'User not exist' };
            }
            return user;
        } catch (error) {
            console.log('something went wrong with password');
            throw { error };
        }
    }

    async createToken(user) {
        try {
            const result = await jwt.sign(user, JWT_KEY, { expiresIn: '1h' });
            return result;
        } catch (error) {
            console.log('SOMETHING WENT WRONG IN TOKEN CREATION');
            throw { error }
        }
    }

    async varifyToken(token) {
        try {
            const response = await jwt.verify(token, JWT_KEY);
            return response;
        } catch (error) {
            console.log('SOMETHING WENT WRONG IN TOKEN Validation');
            throw { error };
        }
    }

    async checkPassword(userInputPassword, encryptedPassword) {
        try {
            return bcrypt.compareSync(userInputPassword, encryptedPassword);
        } catch (error) {
            console.log('something went wrong with password');
            throw { error };
        }
    }


}

module.exports = UserServiece