const { Artisan, Specialty, Category } = require("../models");
const { Op } = require("sequelize");

exports.getAllArtisans = async (req, res) => {
  try {
    const artisans = await Artisan.findAll({
      include: {
        model: Specialty,
        include: Category,
      },
    });

    res.json(artisans);
  } catch (error) {
    res.status(500).json({
      error: "Erreur récupération artisans",
    });
  }
};

exports.getTopArtisans = async (req, res) => {
  try {
    const artisans = await Artisan.findAll({
      where: {
        isTop: true,
      },
      limit: 3,
      include: {
        model: Specialty,
        include: Category,
      },
    });

    res.json(artisans);
  } catch (error) {
    res.status(500).json({
      error: "Erreur récupération top artisans",
    });
  }
};

exports.getArtisanById = async (req, res) => {
  try {
    const artisan = await Artisan.findByPk(req.params.id, {
      include: {
        model: Specialty,
        include: Category,
      },
    });

    if (!artisan) {
      return res.status(404).json({
        error: "Artisan introuvable",
      });
    }

    res.json(artisan);
  } catch (error) {
    res.status(500).json({
      error: "Erreur récupération artisan",
    });
  }
};

exports.searchArtisans = async (req, res) => {
  try {
    const query = req.query.q;

    const artisans = await Artisan.findAll({
      where: {
        name: {
          [Op.like]: `%${query}%`,
        },
      },
      include: {
        model: Specialty,
        include: Category,
      },
    });

    res.json(artisans);
  } catch (error) {
    res.status(500).json({
      error: "Erreur recherche artisans",
    });
  }
};
const transporter = require("../config/mailer");

exports.contactArtisan = async (req, res) => {
  try {
    const artisan = await Artisan.findByPk(req.params.id);

    if (!artisan) {
      return res.status(404).json({
        error: "Artisan introuvable",
      });
    }

    const { name, email, subject, message } = req.body;

    await transporter.sendMail({
      from: process.env.MAIL_USER,
      to: artisan.email,
      subject: subject,
      html: `
        <h2>Nouveau message depuis Trouve ton artisan</h2>

        <p><strong>Nom :</strong> ${name}</p>

        <p><strong>Email :</strong> ${email}</p>

        <p><strong>Message :</strong></p>

        <p>${message}</p>
      `,
    });

    res.json({
      message: "Email envoyé avec succès",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "Erreur envoi email",
    });
  }
};