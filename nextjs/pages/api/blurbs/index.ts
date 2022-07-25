import prisma from '../../../lib/prisma';

export default async (req, res) => {
    const data = req.body;
    try {
      const result = await prisma.blurb.findMany();
      res.status(200).json(result);
    } catch (err) {
      console.log(err);
      res.status(500).json({ err: "Error occurred." });
    }
  };