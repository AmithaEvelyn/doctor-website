const router = require("express").Router();
const Razorpay = require("razorpay");
const crypto = require("crypto");



router.post("/orders",async(req,res) => {
    try{
        const instance = new Razorpay({
            key_id: 'rzp_test_9QzxDs7nNM99bl',
            key_secret: 'k5rGqNghLNDVnGynrd5zFgnw',
        });

        const options = {
            amount:req.body.amount*100,
            currency:"INR",
            receipt:crypto.randomBytes(10).toString("hex"),
        };

        instance.orders.create(options,(error,order) => {
            if(error){
                console.log(error);
                return res.status(500).json({ message: "Something Went Wrong!"});
            }
            res.status(200).json({data:order});
        });
    }catch(error){
        console.log(error);
        res.status(500).json({ message: "Internal Server Error!" });
    }
});


router.post("/verify",async(req,res) => {
    try{
    const {
        razorpay_order_id,
        razorpay_payment_id,
        razorpay_signature } = req.body;
        const sign = razorpay_order_id + "|" + razorpay_payment_id;
        const expectedSign = crypto
        .createHmac("sha256",process.env.KEY_SECRET)
        .update(sign.toString())
        .digest("hex");

        if (razorpay_signature === expectedSign){
            return res.status(200).json({ message: "Payment verified succefully" });
        }else{
            return res.status(400).json({ message: "Invalid signature sent!" });
        }
    }catch(error){
        console.log(error);
        res.status(500).json({ message: "Internal Server Error!" });
    }
});

module.exports = router;