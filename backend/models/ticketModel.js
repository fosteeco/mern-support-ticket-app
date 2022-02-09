/* Our schema, all the fields we want for our tickets */
const mongoose = require("mongoose");

const ticketSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    product: {
      type: String,
      required: [true, "Please select a product"],
      enum: [
        "iPhone",
        "Macbook Pro",
        "iMac",
        "iPad",
        "Windows PC",
        "Windows Laptop",
      ],
    },
    description: {
      type: String,
      required: [true, "Please enter a description of the issue"],
    },
    status: {
      type: String,
      required: true,
      enum: ["new", "open", "closed"],
      default: "new",
    },
  },
  {
    /* will have created at and updated at  */
    timestamps: true,
  }
);

module.exports = mongoose.model("Ticket", ticketSchema);
