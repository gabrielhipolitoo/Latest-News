import express from "express";
import EmailSchema from "../database/models.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", { lengthSubscribe: 2 });
});

router.post("/sendemail", async (req, res) => {
  const { email } = req.body;
  const verifyEmail = await EmailSchema.findOne({ email: email });
  const lengthDocument = await EmailSchema.collection.countDocuments();
  if (verifyEmail) {
    console.log(`este email ja em uso -> ${email}`);
    return res
      .status(400)
      .json({ errorcode: "Este email ja esta inscrito", lengthDocument });
  }

  const saveEmail = new EmailSchema({
    email,
  });

  try {
    await saveEmail.save();
    console.log(`email inscrito -> ${email}`);
    res.json({ status: "ok", lengthDocument });
  } catch (error) {
    res.status(500).json({ errorcode: error });
  }
});

router.get("/subscribe", (req, res) => {
  res.render("subscribe");
});

export default router;
