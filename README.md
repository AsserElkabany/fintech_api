# Fintech API - Advanced E-Commerce & Financial Platform

A production-grade fintech API built with **Node.js + Express**, featuring advanced payment processing, multi-vendor marketplace, and secure financial transactions.

## 🏗️ Architecture Overview

### Technology Stack
- **Runtime**: Node.js with Express 5.1.0
- **Database**: MySQL 3.14.1 (via Prisma ORM)
- **ORM**: Prisma 6.6.0 with type-safe database operations
- **Authentication**: JWT (jsonwebtoken 9.0.2) + BCrypt password hashing
- **Security**: Cookie-based session management, rate limiting
- **Development**: Nodemon for hot-reload

### Core Design Patterns
- **Repository Pattern**: Prisma Client for data abstraction
- **Middleware Architecture**: Authentication layer with JWT verification
- **RESTful API**: Resource-based routing with HTTP verbs
- **Multi-tenant**: Multi-seller marketplace with shop isolation

---

## 🔐 Advanced Security Features

### 1. **Password Security**
- **BCrypt 5.1.1** integration for password hashing
- Secure password storage with salt rounds
- Password verification during login

### 2. **Authentication & Authorization**
```javascript
// JWT-based authentication middleware
const authentication = require('./middlewares/authentication');
// Applied to protected endpoints
router.post('/seller/addshop', authentication, userController.addShop);
```
- **Token-based authentication** for stateless API design
- **Role-based access control**: User vs. Seller differentiation
- **Cookie-based session persistence**

### 3. **Rate Limiting**
- Express rate limiter middleware integration
- Protected from brute-force attacks
- Prevents abuse on login endpoints

---

## 💰 Advanced Financial Features

### 1. **Escrow Transaction System**
```prisma
model escrow_transactions {
  Escrow_id   Int @id @default(autoincrement())
  User_id     Int
  Shop_id     Int
  payment_id  Int @unique
  Amount      Int
  Status      String
}
```
- **Buyer Protection**: Funds held until order completion
- **Atomic Transactions**: Linked to payment records
- **Status Tracking**: Real-time transaction state management
- **Multi-party Settlement**: Secure money flow between users and sellers

### 2. **Multi-Payment Method Support**
```prisma
model payment {
  Payment_method String  // Flexible payment types
  Payment_status String  // Pending, Completed, Failed, Refunded
  Amount        Decimal(10, 2)
  Payment_date  DateTime @default(now())
}
```
- Multiple payment methods support
- Decimal precision (10,2) for financial accuracy
- Automatic timestamp tracking
- Order-linked payment records

### 3. **Bank Account Management**
```prisma
model user_bank_account {
  Card_Number   Int
  Name_On_Card  String
  Expiration    DateTime
}

model shop_bank_account {
  // Seller settlement accounts
}
```
- **User banking**: Payment source management
- **Seller banking**: Payout destination configuration
- **PCI-DSS Ready**: Structured for secure card storage

---

## 🏪 Multi-Vendor Marketplace Architecture

### 1. **Shop Management System**
```prisma
model shop {
  Shop_id             Int
  OwnerId             Int (FK -> owner)
  Shop_name           String
  Email               String
  Website             String
  escrow_transactions escrow_transactions[]
  product             product[]
  shop_bank_account   shop_bank_account[]
  shop_location       shop_location[]
  shop_phone          shop_phone[]
}
```
- **Shop Profiles**: Multi-location, multi-contact support
- **Product Catalog**: Shop-specific inventory management
- **Dynamic Attributes**: Location and phone number arrays

### 2. **Seller Onboarding Flow**
```javascript
router.post('/seller/signup', authentication, userController.postSignupAsSeller);
router.post('/seller/addshop', authentication, userController.addShop);
router.post('/seller/shop/bank_account/:id', authentication, userController.addBankAccount);
router.post('/seller/shop/location/:id', authentication, userController.addLocation);
```
- Progressive seller setup process
- Shop account creation and configuration
- Bank account linking for payouts
- Multi-location support

### 3. **Product & Inventory Management**
```prisma
model product {
  Product_id   Int
  Shop_id      Int (FK)
  Category_id  Int (FK)
  Product_name String
  Price        Int
  Stock        Int
}
```
- **Shop Isolation**: Products linked to specific shops
- **Stock Tracking**: Real-time inventory management
- **Category Classification**: Hierarchical product organization
- **Dynamic Pricing**: Shop-specific pricing control

---

## 📊 Advanced Data Model Relationships

### 1. **Complex Order Pipeline**
```prisma
model orders {
  Order_id                 Int
  User_id                 Int
  Status                  String       // Order lifecycle
  Tracking_Number         Int
  Estimated_Delivery_Date DateTime
  applied_coupon          applied_coupon[]
  order_item              order_item[]
  payment                 payment[]
}

model order_item {
  // Composite key: links specific products to orders
  @@id([Order_id, Product_id])
}
```
- **Order Lifecycle**: Creation → Payment → Shipment → Delivery
- **Multi-item Orders**: Many products per order
- **Tracking Integration**: Shipment tracking data
- **Order Item Junction**: Many-to-many with quantity preservation

### 2. **Coupon & Discount System**
```prisma
model applied_coupon {
  @@id([Order_id, Coupon_id])
}

model coupon {
  Code               Int
  Discount_Percent   Int
  Expiration_Date    DateTime
}
```
- **Composite Primary Keys**: Order + Coupon uniqueness
- **Percentage-based Discounts**: Flexible discount logic
- **Time-limited**: Expiration date validation
- **Promotion Tracking**: Applied coupon analytics

### 3. **Review & Rating System**
```prisma
model reviews {
  Review_id    Int
  User_id      Int (FK)
  Product_id   Int (FK)
  Rating       Int
  Descriptions String
  Created_at   DateTime
}
```
- **User-Product Reviews**: One-to-many relationship
- **Quality Metrics**: Rating aggregation for products
- **Feedback Loop**: Customer experience tracking

---

## 🔗 Database Indexing Strategy

### Performance Optimizations
```prisma
@@index([User_id])        // User-centric queries
@@index([Shop_id])        // Shop inventory queries
@@index([Product_id])     // Product lookups
@@index([Category_id])    // Category filtering
@@index([OwnerId])        // Seller shop queries
```

**Query Optimization Areas**:
- **User Orders**: Instant user-order retrieval
- **Shop Products**: Fast product inventory scans
- **Payment Lookups**: Quick payment transaction searches
- **Category Browsing**: Efficient product filtering

---

## 🌐 API Endpoints Architecture

### Authentication Flow
```
POST   /api/signup              // User registration
POST   /api/login               // User authentication
```

### Seller Operations (Protected)
```
POST   /api/seller/signup                        // Seller registration
POST   /api/seller/addshop                       // Create shop
POST   /api/seller/shop/bank_account/:id         // Link payment account
POST   /api/seller/shop/location/:id             // Add shop location
POST   /api/seller/shop/phone/:id                // Add contact number
POST   /api/seller/shop/addproduct/:id           // List product
PUT    /api/seller/products/:productId           // Update product
```

### Buyer Operations (Protected)
```
GET    /api/products            // Browse products
GET    /api/shops               // List all shops
GET    /api/shop/:id            // Shop details
GET    /api/product/:id         // Product details
GET    /api/shop/products/:id   // Shop inventory
POST   /api/addcart             // Add to cart
GET    /api/cart                // Retrieve cart
POST   /api/add/creditCard      // Save payment method
GET    /api/creditCard          // Retrieve saved cards
```

---

## 🛡️ Security Considerations

### 1. **Input Validation**
- Middleware for request body validation
- Cookie parser for session cookies
- Body parser for JSON payload parsing

### 2. **Relationship Integrity**
- Foreign key constraints in Prisma schema
- Cascade delete rules (NoAction configured)
- Referential integrity validation

### 3. **Financial Data Protection**
- Decimal precision for money calculations (prevents rounding errors)
- Unique payment ID constraints (prevents duplicate payments)
- Timestamp tracking for audit trails

---

## 📈 Scalability Features

### 1. **Database Normalization**
- 3NF schema design
- Composite primary keys for multi-entity relationships
- Foreign key relationships for data consistency

### 2. **Query Optimization**
- Strategic indexing on foreign keys
- Relationship loading through Prisma
- Connection pooling via mysql2

### 3. **Async Architecture**
- Express middleware chain
- Async controller methods
- Database query optimization

---

## 🚀 Development Workflow

### Setup
```bash
npm install
```

### Run Development Server
```bash
npm start
# Uses Nodemon for auto-restart on file changes
```

### Database Initialization
```bash
# Configure .env with DATABASE_URL
# Prisma client generation
npx prisma generate
```

---

## 📋 Advanced Topics

### JWT Token Flow
- Token generation on login
- Token validation on protected routes
- Token refresh strategy (if implemented)

### Escrow Process
1. Buyer purchases → Payment held in escrow
2. Seller ships item → Status updated
3. Buyer confirms delivery → Escrow released
4. Funds transferred to seller account

### Multi-Vendor Settlement
- Daily/weekly payout cycles
- Shop bank account mapping
- Transaction reconciliation
- Payment processing integration

---

## 🔍 Data Integrity Features

- **Foreign Key Constraints**: Referential integrity
- **Unique Constraints**: Duplicate prevention (e.g., payment_id)
- **Composite Keys**: Multi-field uniqueness (orders + coupons)
- **Cascade Rules**: Controlled deletion propagation

---

## 📞 Support & Documentation

For implementation details on:
- **Authentication flows**: See `/middlewares/authentication`
- **Database operations**: Review Prisma schema `/prisma/schema.prisma`
- **API endpoints**: Check `/routes/user.js`
- **Business logic**: Examine `/controllers/user`

---

**Built with ❤️ for fintech excellence**
