import { Router } from "express";
const rentRoute = Router();
import Rent from "../model/rentSchema.js";

rentRoute.post('/newRent', async (req, res) => {
  try {
    const { rentAmount, platformFee, userPays, ownerReceives } = req.body;
    const rent = new Rent({ rentAmount, platformFee, userPays, ownerReceives });
    await rent.save();
    res.status(201).json({msg: "New Rent Added Successfully.",rent});
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong.' });
  }
});

rentRoute.get('/getAllRent', async (req, res) => {
  try {
    const rents = await Rent.find();
    res.status(200).json(rents);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong.' });
  }
});

rentRoute.put('/updateRent/:id', async (req, res, next) => {
  try {
    const { rentAmount, platformFee, userPays, ownerReceives } = req.body;
    const rent = await Rent.findByIdAndUpdate(req.params.id, { rentAmount, platformFee, userPays, ownerReceives }, { new: true });
    res.status(200).json(rent);
  } catch (error) {
    console.log('err', error);
    res.status(500).json({ error: 'Something went wrong.' });
  }
});

rentRoute.delete('/deleteRent/:id', async (req, res) => {
  try {
    await Rent.findByIdAndDelete(req.params.id);
    res.status(200).json({msg: 'Data Deleted successfully.'});
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong.' });
  }
});

export default rentRoute;