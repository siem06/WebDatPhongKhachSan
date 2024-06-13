const db = require("../models");

class ContactController {
  async get(req, res) {
    try {
      const contacts = await db.contact.findAll();
      console.log(contacts);
      res.json(contacts);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to fetch contacts" });
    }
  }

  async find(req, res) {
    try {
      const contact = await db.contact.findByPk(req.params.id);
      if (contact) {
        console.log(contact);
        res.json(contact);
      } else {
        res.status(404).json({ error: "Contact not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to fetch contact" });
    }
  }

  async create(req, res) {
    try {
      const { name, email, topic, content } = req.body;
      const newContact = await db.contact.create({
        name,
        email,
        topic,
        content,
      });
      console.log(newContact);
      res.json(newContact);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to create contact" });
    }
  }

  async update(req, res) {
    try {
      const { idAccount, name, email, topic, content } = req.body;
      const contact = await db.contact.findByPk(req.params.id);
      if (contact) {
        contact.idAccount = idAccount;
        contact.name = name;
        contact.email = email;
        contact.topic = topic;
        contact.content = content;
        await contact.save();
        console.log(contact);
        res.json(contact);
      } else {
        res.status(404).json({ error: "Contact not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to update contact" });
    }
  }

  async delete(req, res) {
    try {
      const contact = await db.contact.findByPk(req.params.id);
      if (contact) {
        await contact.destroy();
        console.log(contact);
        res.json({ message: "Contact deleted successfully" });
      } else {
        res.status(404).json({ error: "Contact not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to delete contact" });
    }
  }
}

module.exports = new ContactController();
