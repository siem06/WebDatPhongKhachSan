const { where } = require("sequelize");
const db = require("../models");

class ServiceController {
  async get(req, res) {
    try {
      const services = await db.service.findAll();
      res.json(services);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  }

  async getService(req, res) {
    try {
      const services = await db.service.findAll({ where: { status: 1 } });
      res.json(services);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  }

  async find(req, res) {
    try {
      const service = await db.service.findByPk(req.params.id);
      if (!service) {
        return res.status(404).json({ error: "Service not found" });
      }
      res.json(service);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  }

  async create(req, res) {
    try {
      const data = {
        typeService: req.body.typeService,
        content: req.body.content,
        logo: req.body.logo,
        status: req.body.status,
      };
      const newService = await db.service.create(data);
      res.json(newService);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  }

  async update(req, res) {
    try {
      const data = {
        typeService: req.body.typeService,
        content: req.body.content,
        logo: req.body.logo,
        status: req.body.status,
      };
      const service = await db.service.findByPk(req.params.id);
      if (!service) {
        return res.status(404).json({ error: "Service not found" });
      }
      await service.update(data);
      res.json(service);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  }

  async delete(req, res) {
    try {
      const service = await db.service.findByPk(req.params.id);
      if (!service) {
        return res.status(404).json({ error: "Service not found" });
      }
      await service.destroy();
      res.json({ message: "Service deleted successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
}

module.exports = new ServiceController();
