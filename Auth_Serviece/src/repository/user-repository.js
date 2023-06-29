const { User, Role } = require('../models/index');
const ValidationError = require('../utils/validation-error');


class UserRepository {
    async createUser(data) {
        try {
            const user = await User.create(data);
            return user;
        } catch (error) {
            if (error.name == 'SequelizeValidationError') {
                let validattionError = new ValidationError(error);
                console.log(validattionError);
            }
            console.log('something went wrong in repository layer');
            throw { validattionError };
        }
    }

    async destroyUser(userId) {
        try {
            await User.destroy({
                where: {
                    id: userId
                }
            });
            return true;
        } catch (error) {
            console.log('something went wrong in repository layer');
            throw { error };
        }
    }

    async getById(userId) {
        try {
            const user = await User.findByPk(userId, {
                attributes: ['email', 'id'],
            });
            return user;
        } catch (error) {
            console.log('something went wrong in repository layer');
            throw { error };
        }
    }

    async getByEmail(userEmail) {
        try {
            const user = await User.findOne({
                where: {
                    email: userEmail,
                }
            })
            return user;
        } catch (error) {
            console.log('something went wrong in repository layer');
            throw { error };
        }
    }

    async isAdmin(userId) {
        try {
            const user = await User.findByPk(userId);
            const adminRole = await Role.findOne({
                where: {
                    name: 'ADMIN',
                }
            });
            return user.hasRole(adminRole);
        } catch (error) {
            console.log('something went wrong in repository layer');
            throw { error };
        }
    }
}


module.exports = UserRepository;