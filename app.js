const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"));

const products = [{

    "DAIRY": [{
            ProductName: "Bat",
            Des: " Legend bat is full size. Legend bat is specially designed for advanced level cricket players .Thick edges and broad blade. Light Weight full size short handle. Flexible handle good quality cane handle covered with chevron rubber grip.",
            Price: "700"
        },
        {
            ProductName: "Gloves",
            Des: "Palm made from premium quality leather.Nylon gusset for ventilation.Imported PU finger rolls and lightweight HD foam finger rolls.Sponge-padded spacer mesh back for better fit and comfort.",
            Price: "300"
        },
        {
            ProductName: "Pads",
            Des: "A high-Quality Batting Legguard to protect you from injury. A lightweight pads for quick pick and performance delivery.Made from premium quality PVC facing.Low-density foam sheet reinforcement vertical bolster.",
            Price: "500"
        },
        {
            ProductName: "Helmet ",
            Des: "Material:Outer Shell: Cloth Covered High Impact Resistant Polypropylene | Inner Mesh: Shock Resistant, Sweat Absorbent, Breathable Mesh inner lining to keep dry and clean | High density EVA foam padding for superior cushioning.",
            Price: "600"
        },
        {
            ProductName: "Thigh Guard",
            Des: "Made from top quality Cotton+Polyster Material. Best construction to protect your body from injurious.Fully Protection from Ball hitting at Thigh Area.",
            Price: "400"
        },

    ]
}, {
    "FILLING": [
        {
            ProductName: "Shuttle bat",
            Des: "Yonex Nanoray Light 18i Black Strung Badminton Racquet (Weight: 77 g, Tension: 30 lbs)  (Pack of: 1, 77 g)",
            Price: "190"
        }, {
            ProductName: "Shuttle Cork",
            Des: "Get ready for exciting badminton matches! Adrenex S101 pack of 3 feather shuttles- (slow, 75) is made from superior quality material for continuous play. It is 100% rotation tested and has stable flight and balance. It has high visibility, durability.",
            Price: "210"
        }, {
            ProductName: "Shuttle Net",
            Des: "WIMBLEDON SPORTS Anti Bird Net / Garden Net 15 Ft. x 32 Ft. (480 SQ.Ft.) Nylon Net For Balcony Badminton Net  (White)",
            Price: "200"
        }
    ]
}, {
    "FROZENNV": [{
            ProductName: "Dumbbells Set",
            Des: "In corporating dumbbells are perfect for isolations, full body, functional and HIIT workouts; Adding resistance to your workout routine will help shed fat and build muscle faster",
            Price: "1400"
        },
        {
            ProductName: "Squat Rack",
            Des: "SLG-6021L Squat Rack for Gym and Home Purpose, Bench Press, Weight Lifting, Squat Stand (Heavy, Adjustable J-Clamps, Black)",
            Price: "2000"
        },
        {
            ProductName: "Fitness Cycle",
            Des: "Flexnest Flexbike Upright Spin Bike with 16.5 lbs Flywheel, India's 1st Smart Bluetooth Fitness Cycle With Classes on App, 10 Resistance Levels Exercise Bike for Home Gym Workout & Cardio (Black)",
            Price: "15000"
        },
        {
            ProductName: "Weight Training Compact Home Gym Black Browne",
            Des: "This compact home gym was developed by our weight training coaches and product team for your guided weight workouts at home. Need help during your weight training sessions",
            Price: "1900"

        },
        {
            ProductName: "Tred Mill",
            Des: "The T900 treadmill is designed for regular, high-intensity running. It is the perfect ally for runners looking to improve results through indoor training sessions.",
            Price: "16000"

        }
    ]
}, {
    "FROZENV": [{
            ProductName: "Infinity Sports Jersy",
            Des: "Select Correct Size: (7to12 years chest size is 32 inches) & (12to16 years chest size is 36 inches) & Small Chest Size is 36 & Medium Chest Size is 38 & Large Chest Size is 40 & X-Large Chest Size is 42 & XX-Large Chest Size is 44",
            Price: "89"
        },
        {
            ProductName: "DROZIP Mini Bike Pump",
            Des: "Widely used: Classic and lightweight design, suitable for tires of various bicycles and motorcycles, also suitable for inflating football, basketball, and also suitable for gas toys or swimming rings.",
            Price: "1240"
        },
        {
            ProductName: "Foot Ball Kit",
            Des: "Labh Traders laligha 1 FOOTBALL, ONE PAIR OF WRIST BAND, ONE Head BAND, 1 pair of socks, AIR PUMP, 1 PUMP, 1 KIT BAG BAG,, 1 WATER BOTTLE",
            Price: "78"
        },
        {
            ProductName: "Foot Ball Nets",
            Des: "Syndicate Football transform your backyard into a soccer field with the SYNCO Football target goal Set. This set gives you everything you need to start teaching all the kids soccer fundamentals.",
            Price: "1320"

        },
        {
            ProductName: "Foot Ball",
            Des: "Designed for Hobby playing, Recommended for Under 12 yrs age group.Suitable for: ground with natural grass , Sand & Indoor",
            Price: "141"

        }
    ]

}, {
    "TINNED": [{
            ProductName: "UNO cards",
            Des: "Feature 1 : Contains: 2 Set of Cards.Rechargeable : No, Feature 2 : For 7 Yrs and Above",
            Price: "250"
        },
        {
            ProductName: "Carrom Board",
            Des: "GSI Khel Mandir Engineered Wood Gloss Finish Carrom Board with Coins, Striker and Powder, Large 32 Inch 4Mm (Brown, ACW50-LARGE)",
            Price: "2370"
        },
        {
            ProductName: "Chess Board",
            Des: "Chess table with clear pattern on the surface, folding the wooden board whenever you like, convenient for indoor outdoor use and keep in place. Travel chess set Folding chess board, easy to carry and transport, suitable for travel or use at home.",
            Price: "126"
        },
        {
            ProductName: "Stumper Ball",
            Des: "Material-Rubber. Ideal for playing cricket. Buy 2 Or More For Higher Discounts If Available. Check At Quantity Discount.",
            Price: "180"

        },
        {
            ProductName: "Volley Ball",
            Des: "Strong rubber bladder inside the volleyball helps maintain optimum pressure for a good bounce, preventing air-leakage or inadequate air-filling",
            Price: "325"

        }
    ]
}, {
    "CULLINARY": [
    {
        ProductName: "Flip Flops",
        Des: "Latest Stylish Casual sport shoes for men |  Lace up Lightweight navy shoes for running, walking, gym, trekking, hiking & party Running Shoes For Men",
        Price: "290"
    },
    {
        ProductName: "CAMPUS",
        Des: "Exclusive Range of Stylish Comfortable Sports Sneakers Running Shoes Running Shoes For Men  (Grey)",
        Price: "280"
    },
    {
        ProductName: "VECHLO",
        Des: "Asian Plasma-08 sports shoes for men | Latest Stylish Casual sport shoes for men | running shoes for boys | Lace up Lightweight black shoes for running, walking, gym.",
        Price: "300"
    }
]
}]



var username = "";
var adminSign = "admin";
var condition = false;
var productList = [];

mongoose.connect("mongodb://localhost:27017/foodProduct", { useNewUrlParser: true });

const userSchema = new mongoose.Schema({
    userid: { type: String, unique: true },
    password: String,
    phone: Number,
    cart: [{ type: mongoose.Schema.Types.ObjectId, ref: 'cart' }],
    delivery: [{ type: mongoose.Schema.Types.ObjectId, ref: 'delivery' }],
    history: [{ type: mongoose.Schema.Types.ObjectId, ref: 'history' }]
});
const User = mongoose.model("userlogs", userSchema) //Collection-1

//Product
const cartSchema = new mongoose.Schema({
    productName: String,
    imageId: String,
    price: Number,
    quantity: Number
})
const Cart = mongoose.model("cart", cartSchema)

//Delivery
const deliverySchema = new mongoose.Schema({
    userid:String,
    deliveryDate: Date,
    address: String,
    totalPrice: Number,
    paidStatus: { type: String, default: "Not Paid" },
    deliveryStatus: { type: String, default: "Not Done" },
    products: [{ productName: String, imageId: String, price: Number, quantity: Number }]
})
const Delivery = mongoose.model("delivery", deliverySchema)

//History
const historySchema = new mongoose.Schema({
    userid:String,
    deliveryDate: Date,
    address: String,
    totalPrice: Number,
    paidStatus: { type: String, default: "Not paid" },
    deliveryStatus: { type: String, default: "Done" },
    products: [{ productName: String, imageId: String, price: Number, quantity: Number }]
})
const History = mongoose.model("history", historySchema)



app.get("/", (req, res) => {
    res.render("index", { username: username });
})
app.get("/login", (req, res) => {
    res.render("login", { msg: "", username: username });
})
app.get("/product", (req, res) => {
    res.render("product", { products: products, username: username });
})
app.get("/contact", (req, res) => {
    res.render("contact", { username: username });
})
app.get("/admin", (req, res) => {
    if (adminSign != "") {
        User.find({}, (err, output) => {
            if (!err) {
                console.log(adminSign);
                res.render("admin", { userlist: output, msg: "", username: adminSign });
            }
        })
    } else {
        res.render("login", { msg: "Login To Admin Pannel", username: "" });
    }
})

app.get("/delivery",(req,res) => {
    Delivery.find({},(err, output) => {
        if (!err) {
            res.render("yetToDelivery", { products: output,username: adminSign });
            // console.log(output);
        }
    })
})

// User.findOne({ userid: "saran" }).populate('history').exec((err, output) => {
//     if (!err) {
//         console.log(output.history);
//     }
// })

app.get("/history",(req,res) => {
    if (username == "") {
        res.render("login", { msg: "Log In to See the HISTORY", username: "" });
    } else {
        User.findOne({ userid: username }).populate('history').exec((err, output) => {
            if (!err) {
                res.render("history", { products: output.history, username: username });
            }
        })
    }
})

// Login
app.post("/login", (req, res) => {
    var userid = req.body.userName
    var pass = req.body.Password

    User.findOne({ userid: userid }, (err, output) => {
        if (!err) {
            if (output) {
                if (output.password == pass) {
                    username = userid;

                    //Session Handling!
                    if (condition) {
                        const NewCart = new Cart({
                                productName: productList[0],
                                imageId: productList[1],
                                quantity: productList[2],
                                price: productList[3]
                            })
                            // console.log(userid);
                        productList = []
                        User.findOne({ userid: userid }, (err, output) => {
                            if (!err) {
                                output.cart.push(NewCart);
                                output.save((err) => {
                                    if (!err) {
                                        NewCart.save();
                                        res.redirect("/product");
                                    }
                                })
                            }
                        })
                    } else {
                        // console.log("Error");
                        res.redirect("product");
                    }

                } else {
                    res.render("login", { msg: "Wrong Password!", username: username });
                }
            } else {
                res.render("login", { msg: "UserID Not Found! Pls SignUp", username: username });
            }
        }
    })
})
app.post("/signup", (req, res) => {
    var userid = req.body.userName
    var pass = req.body.Password
    var repass = req.body.RePassword
    var phone = req.body.phone

    User.findOne({ userid: userid }, (err, output) => {
        if (!err) {
            if (!output) {
                if (pass != repass) {
                    res.render("login", { msg: "SingUp Failed! Re-Type the Correct Password", username: username });
                } else {
                    const newuser = new User({
                        userid: userid,
                        password: pass,
                        phone: phone
                    })
                    newuser.save()
                    res.render("login", { msg: "successfully Registed!", username: username });
                }
            } else {
                res.render("login", { msg: "User-ID Already Exits!", username: username });
            }
        }
    })
})

app.post("/adminsign", (req, res) => {
    var userid = req.body.userid;
    var pass = req.body.pass;

    if (userid == "admin") {
        if (pass == "admin") {
            adminSign = "admin"
            res.redirect("admin");
        } else {
            res.render("login", { msg: "Wrong Admin Password!", username: adminSign });
        }
    } else {
        res.render("login", { msg: "Wrong Admin UserID!", username: adminSign });
    }

})

// Cart
app.get("/cart", (req, res) => {

    if (username == "") {
        res.render("login", { msg: "Log In to See the CART", username: "" });
    } else {
        User.findOne({ userid: username }).populate('cart').exec((err, output) => {
            if (!err) {
                res.render("cart", { found: output.cart, NoOfProducts: 1, username: username });
            }
        })
    }
})
app.post("/cart", (req, res) => {
    var price = parseInt(req.body.price);
    var quantity = parseInt(req.body.quantity);
    var productName = req.body.product;
    var userid = req.body.userid;
    var imageId = req.body.image;

    if (username == "") {
        condition = true;
        productList.push(productName)
        productList.push(imageId)
        productList.push(quantity)
        productList.push(quantity * price)
        res.render("login", { msg: "Log In to ADD up your Product", username: "" });
    } else {

        // console.log(userid);

        User.findOne({ userid: userid }).populate('cart').exec((err, output) => {
            if (!err) {
                var foundValue = -1;
                output.cart.forEach((e) => {
                    if (e.productName == productName) {
                        foundValue = e._id;
                    }
                });

                if (foundValue == -1) {
                    // adding New product
                    const NewCart = new Cart({
                        productName: productName,
                        imageId: imageId,
                        quantity: quantity,
                        price: quantity * price
                    })

                    output.cart.push(NewCart);
                    output.save((err) => {
                        if (!err) {
                            NewCart.save();
                            res.redirect("/product");
                        }
                    })
                } else {
                    //Updating the Products
                    Cart.findOne({ _id: foundValue }, (err, product) => {
                        product.quantity += quantity;
                        product.price += quantity * price;
                        product.save((err) => {
                            if (!err) {
                                res.redirect("/product");
                            }
                        });
                    })

                }
            }
        });

    }

})
app.get("/deliverysts", (req, res) => {

        if (username != "") {
            User.findOne({ userid: username }).populate('delivery').exec((err, output) => {
                if (!err) {
                    console.log(output.delivery);
                    if (output.delivery[0] == undefined) {
                        res.render("deliverysts", { username: username, products: [] });
                    } else {
                        res.render("deliverysts", { username: username, products: output.delivery });
                    }
                }
            })
        } else {
            res.render("login", { msg: "Log In to See Delivery status", username: "" });
        }
    })
    // place Order
app.post("/placeorder", (req, res) => {
        var amount = req.body.amount;
        var deliveryDate = req.body.deliveryDate;
        var address = req.body.address;
        console.log(amount);

        User.findOne({ userid: username }).populate('cart').exec((err, usercart) => {
            if (!err) {
                const productArray = [];
                usercart.cart.forEach(e => {
                    var productList = { productName: e.productName, imageId: e.imageId, price: e.price, quantity: e.quantity }
                    productArray.push(productList);
                });

                //Adding Delivery info
                const newDelivery = new Delivery({
                    userid:username,
                    deliveryDate: deliveryDate,
                    address: address,
                    totalPrice: amount,
                    products: productArray
                })
                usercart.delivery.push(newDelivery);
                usercart.cart = [];
                usercart.save((error) => {
                    if (!error) {
                        newDelivery.save((err) => {
                            if (!err) {
                                res.redirect("cart")
                            }
                        });
                    }
                })

            }
        })


    })
    // remove item
app.post("/removeProduct", (req, res) => {
    const id = req.body.id;
    // console.log(username);
    Cart.findOneAndDelete({ _id: id }, (err) => {
        if (!err) {
            User.findOne({ userid: username }, (err, output) => {
                if (!err) {

                    //Removes the Id in Array
                    const index = output.cart.indexOf(id);
                    if (index > -1) {
                        output.cart.splice(index, 1); // 2nd parameter means remove one item only
                    }
                    output.save((err) => {
                        if (!err) {
                            res.redirect("/cart")
                        }
                    })
                }
            })
        }
    })
})


// Admin
// remover User
app.post("/removeUser", (req, res) => {
    var id = req.body.id
        // User.findOneAndDelete({age: {$gte:5} }, function (err, docs) {
    User.findOneAndDelete({ _id: id }, (err) => {
        if (!err) {
            User.find({}, (err, output) => {
                if (!err) {
                    res.render("admin", { userlist: output, msg: "Successfully Removed!", username: username });
                }
            })
        }
    })

})

app.post("/viewUserDeliveryProducts", (req, res) => {
    var id = req.body.id
        // console.log(userId);
    User.findById({ _id: id }).populate('delivery').exec((err, output) => {
        if (!err) {
            if (output.delivery[0] == undefined) {
                res.render("develiveryTemp", { username: "Admin", products: [] });
            } else {
                res.render("develiveryTemp", { username: "Admin", products: output.delivery });
            }
        }
    })
})

app.get("/toDelivery", (req, res) => {
    if (adminSign != "") {
        User.findOne({}).populate('delivery').exec((err, output) => {
            if (!err) {
                res.render("toDelivery", { username: adminSign, userArray:output })
            }
        })
    } else {
        res.render("login", { msg: "Login To Admin Pannel", username: "" });
    }
})


// Log Out  
app.get("/logout", (req, res) => {
    username = ""
    res.redirect("/")
})
app.get("/logoutAdmin", (req, res) => {
    adminSign = ""
    res.redirect("/")
})

app.post("/paid",(req,res) => {
    var user = req.body.user;
    Delivery.updateOne({userid: user},{paidStatus:"Paid"},(err,output) => {
        res.redirect("/delivery");
        console.log("Paid status Updated successfully");
    })
})
app.post("/delivered",(req,res) => {
    var user = req.body.user;
    Delivery.updateOne({userid: user},{deliveryStatus:"Done"},(err,output) => {
        paidsts = "Done";
        console.log("delivery status updated sucessfully");
        res.redirect("/delivery");
    })
    const productArray = [];
    Delivery.findOne({userid: user},(err,output) => {
        output.products.forEach(e => {
            var productList = { productName: e.productName, imageId: e.imageId, price: e.price, quantity: e.quantity }
            productArray.push(productList);
        });
        const newHistory = new History({
            userid:output.userid,
            deliveryDate:output.deliveryDate,
            address:output.address,
            totalPrice:output.totalPrice,
            paidStatus:output.paidStatus,
            deliveryStatus:"Delivered",
            products:productArray
        })
        newHistory.save((e)=>{
            if(!e)
            {
                res.render("yetToDelivery", { products: output,username: adminSign });
            }
        })
    })
})

app.listen(9000, () => {
    console.log("server is running on port 9000");
})