const Rental = require("../models/Rental");
const mongoose = require("mongoose");

exports.getAllRentals = async (req, res) => {
  try {
    const rentals = await Rental.find({}).select("-bookings");
    res.status(200).json(rentals);
  } catch (err) {
    res.status(422).json({
      success: false,
      err
    });
  }
};

exports.getRentalById = async (req, res) => {
  try {
    const rental = await Rental.findOne({
      _id: mongoose.Types.ObjectId(req.params.id)
    })
      .populate("user", "username -_id")
      .populate("bookings", "startAt endAt -_id");
    res.status(200).json(rental);
  } catch (err) {
    res.status(422).json({
      success: false,
      err
    });
  }
};
