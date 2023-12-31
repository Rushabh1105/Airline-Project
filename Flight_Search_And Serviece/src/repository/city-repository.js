const { Op } = require('sequelize');

const { City } = require('../models/index');

class CityRepository {
    async createCity({ name, address }) {
        try {
            const city = await City.create({ name, address });
            return city;
        } catch (error) {
            throw { error };
        }
    }

    async deleteCity(cityId) {
        try {
            await City.destroy({
                where: {
                    id: cityId,
                }
            });
            return true;
        } catch (error) {
            throw { error };
        }
    }

    async updateCity(cityId, data) {
        try {
            const city = await City.update(data, {
                where: {
                    id: cityId,
                }
            })
            return city;
        } catch (error) {
            throw { error };
        }
    }

    async getCity(cityId) {
        try {
            const city = await City.findByPk(cityId);
            return city;
        } catch (error) {
            throw { error };
        }
    }

    async getAllCities(filter) {
        try {
            if (filter.name) {
                const cities = await City.findAll({
                    where: {
                        name: {
                            [Op.startsWith]: filter.name
                        }
                    }
                });
                return cities;
            }
            const cities = await City.findAll();
            return cities;
        } catch (error) {
            throw { error };
        }
    }
}


module.exports = CityRepository;