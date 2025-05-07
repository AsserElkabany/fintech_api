const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();
const jwtkey = "8ca44b776f8562a8068d72b68a66761e73e9432cd8e06659be94936056072615be78e8694da0d770e77ac50dacca5f8142180bfce242088032a370f227c13102";


exports.postSignup = async (req, res) => {
    try {
        const { fullName, email, ssn, password, confirmPassword } = req.body;

        if (!fullName || !email || !ssn || !password || !confirmPassword) {
            return res.status(400).json({ message: 'All fields are required.' });
        }

        if (password !== confirmPassword) {
            return res.status(400).json({ message: 'Passwords do not match.' });
        }

        const existingUser = await prisma.user.findFirst({
            where: { Email: email }
        });

        if (existingUser) {
            return res.status(400).json({ message: 'User already exists with this email.' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await prisma.user.create({
            data: {
                Full_Name: fullName,
                Email: email,
                ssn: ssn,
                password: hashedPassword,
                EGP:0
            },
        });

        res.status(201).json({
            message: 'User created successfully!',
            user: {
                id: newUser.user_id,
                fullName: newUser.Full_Name,
                email: newUser.Email,
            }
        });
    } catch (error) {
        console.error('Signup Error:', error);
        res.status(500).json({ message: 'Internal server error.' });
    }
};

exports.postLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required.' });
        }

        const user = await prisma.user.findFirst({
            where: { Email: email }
        });

        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password.' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid email or password.' });
        }

        const token = jwt.sign(
            { userId: user.user_id, email: user.Email },
            jwtkey,
            { expiresIn: '1h' }
        );

        res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            sameSite: "None",
            maxAge: 10 * 60 * 60 * 1000 
          });

        res.status(200).json({
            message: 'Login successful!',
            user: {
                id: user.user_id,
                fullName: user.Full_Name,
                email: user.Email
            }
        });
    } catch (error) {
        console.error('Login Error:', error);
        res.status(500).json({ message: 'Internal server error.' });
    }
};


exports.getProducts = async (req, res) => {
    try {
        const products = await prisma.product.findMany({
            include: {
                shop: {
                    select: {
                        Shop_name: true
                    }
                },
                category: {
                    select: {
                        Name: true
                    }
                }
            }
        });

        res.status(200).json({ products });
    } catch (error) {
        console.error('Get Products Error:', error);
        res.status(500).json({ message: 'Internal server error.' });
    }
};







//************************************************************************************************************************\\
//*                                                                                                                      *\\
//* *********************************************FUNCTIONS FOR SELLERS ONLY********************************************* *\\
//*                                                                                                                      *\\
//************************************************************************************************************************\\











exports.postSignupAsSeller = async (req, res) => {
    try {
        const userId = req.user_id;
        const { fullName, email, phoneNumber } = req.body;

        if (!fullName || !email || !phoneNumber || !userId) {
            return res.status(400).json({ message: 'All fields are required.' });
        }

        const existingSeller = await prisma.owner.findFirst({
            where: { Email: email }
        });

        if (existingSeller) {
            return res.status(400).json({ message: 'Seller already exists with this email.' });
        }

        const newSeller = await prisma.owner.create({
            data: {
                Full_Name: fullName,
                Email: email,
                Phone: phoneNumber,
                user_id: userId,
            },
        });

        res.status(201).json({
            message: 'Seller created successfully!',
            seller: {
                id: newSeller.seller_id,
                fullName: newSeller.Full_Name,
                email: newSeller.Email,
                phoneNumber: newSeller.phone_number
            }
        });
    } catch (error) {
        console.error('Seller Signup Error:', error);
        res.status(500).json({ message: 'Internal server error.' });
    }
};

exports.addShop = async (req, res) => {
    try {
        const { Shop_name, Email, Website } = req.body;

        if (!Shop_name || !Email || !Website) {
            return res.status(400).json({ message: 'All fields are required.' });
        }

        const newShop = await prisma.shop.create({
            data: {
                Shop_name,
                Email,
                Website,
                owner: {
                    connect: { Owner_Id: req.user_id }  
                }
            }
        });

        res.status(201).json({
            message: 'Shop created successfully!',
            shop: newShop
        });
    } catch (error) {
        console.error('Add Shop Error:', error);
        res.status(500).json({ message: 'Internal server error.' });
    }
};

exports.addLocation = async (req, res) => {
    try {
        const { Location } = req.body;
        let shopId = req.params.id; 
        shopId = parseInt(shopId);  
        const userId = req.user_id;  

        if (!Location) {
            return res.status(400).json({ message: 'Location is required.' });
        }

        
        const shop = await prisma.shop.findUnique({
            where: { Shop_id: shopId },
        });

        if (!shop) {
            return res.status(404).json({ message: 'Shop not found.' });
        }

        if (shop.OwnerId !== userId) {
            return res.status(403).json({ message: 'You are not the owner of this shop.' });
        }

       
        const shopLocation = await prisma.shop_location.create({
            data: {
                Shop_id: shopId,
                Location,
            },
        });

        res.status(201).json({
            message: 'Location added successfully!',
            shopLocation,
        });
    } catch (error) {
        console.error('Add Location Error:', error);
        res.status(500).json({ message: 'Internal server error.' });
    }
};




exports.addPhone = async (req, res) => {
    try {
        const { Phones } = req.body;
        const shopId = req.params.id;
        const userId = req.user_id;  

        if (!Phones || !Array.isArray(Phones)) {
            return res.status(400).json({ message: 'Phones must be an array.' });
        }

       
        const shop = await prisma.shop.findUnique({
            where: { Shop_id: shopId },
        });

        if (!shop) {
            return res.status(404).json({ message: 'Shop not found.' });
        }

        if (shop.OwnerId !== userId) {
            return res.status(403).json({ message: 'You are not the owner of this shop.' });
        }

        // Add phone numbers to the shop
        const phonePromises = Phones.map(async (phone) => {
            await prisma.shop_phone.create({
                data: {
                    Shop_id: shopId,
                    Phone: phone,
                },
            });
        });

        await Promise.all(phonePromises);

        res.status(201).json({
            message: 'Phone numbers added successfully!',
        });
    } catch (error) {
        console.error('Add Phone Error:', error);
        res.status(500).json({ message: 'Internal server error.' });
    }
};



exports.addBankAccount = async (req, res) => {
    try {
        const { Card_Number, Name_On_Card, Expiray_Month, Expiray_Year } = req.body;
        let shopId = req.params.id;  
        shopId = parseInt(shopId);  
        const userId = req.user_id;

        if (!Card_Number || !Name_On_Card || !Expiray_Month || !Expiray_Year) {
            return res.status(400).json({ message: 'All bank account fields are required.' });
        }

        
        const shop = await prisma.shop.findUnique({
            where: { Shop_id: shopId },
        });

        if (!shop) {
            return res.status(404).json({ message: 'Shop not found.' });
        }

        if (shop.OwnerId !== userId) {
            return res.status(403).json({ message: 'You are not the owner of this shop.' });
        }

        
        const bankAccount = await prisma.shop_bank_account.create({
            data: {
                Shop_id: shopId,
                Card_Number,
                Name_On_Card,
                Expiray_Month,
                Expiray_Year,
            },
        });

        res.status(201).json({
            message: 'Bank account added successfully!',
            bankAccount,
        });
    } catch (error) {
        console.error('Add Bank Account Error:', error);
        res.status(500).json({ message: 'Internal server error.' });
    }
};




exports.addProduct = async (req, res) => {
    try {
        const { Product_name, Description, Price, Stock, Category_id } = req.body;
        const shopId = parseInt(req.params.id); 
        const userId = req.user_id; 

        
        if (!Product_name || !Description || !Price || !Stock || !Category_id) {
            return res.status(400).json({ message: 'All product fields are required.' });
        }

        
        const shop = await prisma.shop.findUnique({
            where: { Shop_id: shopId },
        });

        if (!shop) {
            return res.status(404).json({ message: 'Shop not found.' });
        }

        if (shop.OwnerId !== userId) {
            return res.status(403).json({ message: 'You do not own this shop.' });
        }

       
        const product = await prisma.product.create({
            data: {
                Shop_id: shopId,
                Category_id,
                Product_name,
                Description,
                Price,
                Stock
            },
        });

        res.status(201).json({
            message: 'Product added successfully!',
            product,
        });
    } catch (error) {
        console.error('Add Product Error:', error);
        res.status(500).json({ message: 'Internal server error.' });
    }
};






exports.editProduct = async (req, res) => {
    try {
        const productId = parseInt(req.params.productId); 
        const userId = req.user_id;

        const { Product_name, Description, Price, Stock, Category_id } = req.body;

        
        const product = await prisma.product.findUnique({
            where: { Product_id: productId },
            include: {
                shop: true 
            }
        });

        if (!product) {
            return res.status(404).json({ message: 'Product not found.' });
        }

        if (product.shop.OwnerId !== userId) {
            return res.status(403).json({ message: 'You do not own this shop.' });
        }

        
        const updatedProduct = await prisma.product.update({
            where: { Product_id: productId },
            data: {
                Product_name,
                Description,
                Price,
                Stock,
                Category_id
            },
        });

        res.status(200).json({
            message: 'Product updated successfully!',
            product: updatedProduct,
        });
    } catch (error) {
        console.error('Edit Product Error:', error);
        res.status(500).json({ message: 'Internal server error.' });
    }
};







exports.getShops = async (req, res) => {
    try {
        const shops = await prisma.shop.findMany({
            include: {
                owner: {
                    select: {
                        Full_Name: true,
                        Email: true,
                        Phone: true
                    }
                },
                shop_location: true,
                shop_phone: true,
                shop_bank_account: false,
            }
        });

        res.status(200).json({ shops });
    } catch (error) {
        console.error('Get Shops Error:', error);
        res.status(500).json({ message: 'Internal server error.' });
    }
};



exports.getShopById = async (req, res) => {
    try {
        const shopId = parseInt(req.params.id); 
        const userId = req.user_id; 

        const shop = await prisma.shop.findUnique({
            where: { Shop_id: shopId },
            include: {
                owner: {
                    select: {
                        Full_Name: true,
                        Email: true,
                        Phone: true
                    }
                },
                shop_location: true,
                shop_phone: true,
                shop_bank_account: false,
                product:true,
            }
        });

        if (!shop) {
            return res.status(404).json({ message: 'Shop not found.' });
        }


        res.status(200).json({ shop });
    } catch (error) {
        console.error('Get Shop by ID Error:', error);
        res.status(500).json({ message: 'Internal server error.' });
    }
}




exports.getAllProducts = async (req, res) => {
    try {
        const products = await prisma.product.findMany({
            include: {
                shop: {
                    select: {
                        Shop_name: true
                    }
                }
            }
        });

        res.status(200).json({ products });
    } catch (error) {
        console.error('Get All Products Error:', error);
        res.status(500).json({ message: 'Internal server error.' });
    }
};




exports.getProductById = async (req, res) => {
    try {
        const productId = parseInt(req.params.id);

        const product = await prisma.product.findUnique({
            where: { Product_id: productId },
            include: {
                shop: {
                    select: {
                        Shop_name: true
                    }
                }
            }
        });

        if (!product) {
            return res.status(404).json({ message: 'Product not found.' });
        }

        res.status(200).json({ product });
    } catch (error) {
        console.error('Get Product by ID Error:', error);
        res.status(500).json({ message: 'Internal server error.' });
    }
};


exports.postCreditCard = async (req, res) => {
    try {
        const userId = req.user_id;  
        const { Card_Number, Name_On_Card, Expiray_Month, Expiray_Year } = req.body;

        if (!Card_Number || !Name_On_Card || !Expiray_Month || !Expiray_Year) {
            return res.status(400).json({ message: 'All fields are required.' });
        }

        const newCard = await prisma.user_bank_account.create({
            data: {
                Card_Number: Card_Number,
                Name_On_Card: Name_On_Card,
                Expiray_Month: Expiray_Month,
                Expiray_Year: Expiray_Year,
                user: {
                    connect: { user_id: userId } 
                }
            }
        });

        res.status(201).json({ message: 'Credit card saved successfully.', card: newCard });

    } catch (error) {
        console.error('Save Credit Card Error:', error);
        res.status(500).json({ message: 'Internal server error.' });
    }
};



exports.getCreditCard = async (req, res) => {
    try {
        const userId = req.user_id; 

       
        const cards = await prisma.user_bank_account.findMany({
            where: {
                UserId: userId
            },
            select: {
                Card_Number: true,
                Name_On_Card: true,
                Expiray_Month: true,
                Expiray_Year: true
            }
        });

        res.status(200).json({ cards });
    } catch (error) {
        console.error('Get Credit Cards Error:', error);
        res.status(500).json({ message: 'Internal server error.' });
    }
};


exports.getProductsByShopId = async (req, res) => {
    try {
        const shopId = parseInt(req.params.id); 

        
        const products = await prisma.product.findMany({
            where: { Shop_id: shopId },
            include: {
                category: {
                    select: {
                        Name: true
                    }
                }
            }
        });

        if (!products || products.length === 0) {
            return res.status(404).json({ message: 'No products found for this shop.' });
        }

        res.status(200).json({ products });
    } catch (error) {
        console.error('Get Products by Shop ID Error:', error);
        res.status(500).json({ message: 'Internal server error.' });
    }
};





exports.postaddToCart = async (req, res) => {
    try {
        const userId = req.user_id;
        const { productId, quantity } = req.body;

        
        if (!productId || !quantity || quantity <= 0) {
            return res.status(400).json({ message: 'Invalid product ID or quantity.' });
        }

        
        const product = await prisma.product.findUnique({
            where: { Product_id: productId }
        });

        if (!product) {
            return res.status(404).json({ message: 'Product not found.' });
        }

        // Add to cart
        const cartItem = await prisma.cart.create({
            data: {
                User_id: userId,
                Product_id: productId,
                Quantity: quantity,
                Added_At: new Date()
            }
        });

        res.status(201).json({ message: 'Product added to cart.', cartItem });
    } catch (error) {
        console.error('Add to Cart Error:', error);
        res.status(500).json({ message: 'Internal server error.' });
    }
};


exports.getCart = async (req, res) => {
    try {
        const userId = req.user_id;

        const cartItems = await prisma.cart.findMany({
            where: { User_id: userId },
            include: {
                product: { 
                    select: {
                        Product_name: true,
                        Price: true,
                        Description: true
                    }
                }
            }
        });

        res.status(200).json({ cartItems });
    } catch (error) {
        console.error('Get Cart Items Error:', error);
        res.status(500).json({ message: 'Internal server error.' });
    }
};
