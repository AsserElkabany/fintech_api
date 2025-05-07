
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime,
  createParam,
} = require('./runtime/edge.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}





/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.Applied_couponScalarFieldEnum = {
  Order_id: 'Order_id',
  Coupon_id: 'Coupon_id'
};

exports.Prisma.CategoryScalarFieldEnum = {
  Category_id: 'Category_id',
  Name: 'Name'
};

exports.Prisma.CouponScalarFieldEnum = {
  Coupon_id: 'Coupon_id',
  Code: 'Code',
  Discount_Percent: 'Discount_Percent',
  Expiration_Date: 'Expiration_Date'
};

exports.Prisma.Escrow_transactionsScalarFieldEnum = {
  Escrow_id: 'Escrow_id',
  User_id: 'User_id',
  Shop_id: 'Shop_id',
  payment_id: 'payment_id',
  Amount: 'Amount',
  Status: 'Status'
};

exports.Prisma.Order_itemScalarFieldEnum = {
  Order_id: 'Order_id',
  Product_id: 'Product_id',
  Quantity: 'Quantity',
  Price: 'Price'
};

exports.Prisma.OrdersScalarFieldEnum = {
  Order_id: 'Order_id',
  User_id: 'User_id',
  Order_Date: 'Order_Date',
  Status: 'Status',
  Tracking_Number: 'Tracking_Number',
  Estimated_Delivery_Date: 'Estimated_Delivery_Date',
  Total_Price: 'Total_Price'
};

exports.Prisma.OwnerScalarFieldEnum = {
  Owner_Id: 'Owner_Id',
  Full_Name: 'Full_Name',
  Email: 'Email',
  Phone: 'Phone',
  user_id: 'user_id'
};

exports.Prisma.PaymentScalarFieldEnum = {
  Payment_id: 'Payment_id',
  Order_id: 'Order_id',
  User_id: 'User_id',
  Payment_method: 'Payment_method',
  Payment_status: 'Payment_status',
  Amount: 'Amount',
  Payment_date: 'Payment_date'
};

exports.Prisma.ProductScalarFieldEnum = {
  Product_id: 'Product_id',
  Shop_id: 'Shop_id',
  Category_id: 'Category_id',
  Product_name: 'Product_name',
  Description: 'Description',
  Price: 'Price',
  Stock: 'Stock'
};

exports.Prisma.ReviewsScalarFieldEnum = {
  Review_id: 'Review_id',
  User_id: 'User_id',
  Product_id: 'Product_id',
  Rating: 'Rating',
  Descriptions: 'Descriptions',
  Created_at: 'Created_at'
};

exports.Prisma.ShopScalarFieldEnum = {
  Shop_id: 'Shop_id',
  OwnerId: 'OwnerId',
  Shop_name: 'Shop_name',
  Email: 'Email',
  Website: 'Website'
};

exports.Prisma.Shop_bank_accountScalarFieldEnum = {
  Account_id: 'Account_id',
  Shop_id: 'Shop_id',
  Card_Number: 'Card_Number',
  Name_On_Card: 'Name_On_Card',
  Expiray_Month: 'Expiray_Month',
  Expiray_Year: 'Expiray_Year'
};

exports.Prisma.Shop_locationScalarFieldEnum = {
  Shop_id: 'Shop_id',
  Location: 'Location'
};

exports.Prisma.Shop_phoneScalarFieldEnum = {
  Shop_id: 'Shop_id',
  Phone: 'Phone'
};

exports.Prisma.UserScalarFieldEnum = {
  user_id: 'user_id',
  Full_Name: 'Full_Name',
  Email: 'Email',
  ssn: 'ssn',
  password: 'password',
  EGP: 'EGP'
};

exports.Prisma.User_bank_accountScalarFieldEnum = {
  account_id: 'account_id',
  UserId: 'UserId',
  Card_Number: 'Card_Number',
  Name_On_Card: 'Name_On_Card',
  Expiray_Month: 'Expiray_Month',
  Expiray_Year: 'Expiray_Year'
};

exports.Prisma.CartScalarFieldEnum = {
  Cart_id: 'Cart_id',
  User_id: 'User_id',
  Product_id: 'Product_id',
  Quantity: 'Quantity',
  Added_At: 'Added_At'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.categoryOrderByRelevanceFieldEnum = {
  Name: 'Name'
};

exports.Prisma.escrow_transactionsOrderByRelevanceFieldEnum = {
  Status: 'Status'
};

exports.Prisma.ordersOrderByRelevanceFieldEnum = {
  Status: 'Status'
};

exports.Prisma.ownerOrderByRelevanceFieldEnum = {
  Full_Name: 'Full_Name',
  Email: 'Email',
  Phone: 'Phone'
};

exports.Prisma.paymentOrderByRelevanceFieldEnum = {
  Payment_method: 'Payment_method',
  Payment_status: 'Payment_status'
};

exports.Prisma.productOrderByRelevanceFieldEnum = {
  Product_name: 'Product_name',
  Description: 'Description'
};

exports.Prisma.reviewsOrderByRelevanceFieldEnum = {
  Descriptions: 'Descriptions'
};

exports.Prisma.shopOrderByRelevanceFieldEnum = {
  Shop_name: 'Shop_name',
  Email: 'Email',
  Website: 'Website'
};

exports.Prisma.shop_bank_accountOrderByRelevanceFieldEnum = {
  Name_On_Card: 'Name_On_Card',
  Expiray_Month: 'Expiray_Month',
  Expiray_Year: 'Expiray_Year'
};

exports.Prisma.shop_locationOrderByRelevanceFieldEnum = {
  Location: 'Location'
};

exports.Prisma.shop_phoneOrderByRelevanceFieldEnum = {
  Phone: 'Phone'
};

exports.Prisma.userOrderByRelevanceFieldEnum = {
  Full_Name: 'Full_Name',
  Email: 'Email',
  ssn: 'ssn',
  password: 'password'
};

exports.Prisma.user_bank_accountOrderByRelevanceFieldEnum = {
  Name_On_Card: 'Name_On_Card',
  Expiray_Month: 'Expiray_Month',
  Expiray_Year: 'Expiray_Year'
};


exports.Prisma.ModelName = {
  applied_coupon: 'applied_coupon',
  category: 'category',
  coupon: 'coupon',
  escrow_transactions: 'escrow_transactions',
  order_item: 'order_item',
  orders: 'orders',
  owner: 'owner',
  payment: 'payment',
  product: 'product',
  reviews: 'reviews',
  shop: 'shop',
  shop_bank_account: 'shop_bank_account',
  shop_location: 'shop_location',
  shop_phone: 'shop_phone',
  user: 'user',
  user_bank_account: 'user_bank_account',
  cart: 'cart'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\Users\\Asser\\Desktop\\fintech_api\\generated\\prisma",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [],
    "sourceFilePath": "C:\\Users\\Asser\\Desktop\\fintech_api\\prisma\\schema.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../.env"
  },
  "relativePath": "../../prisma",
  "clientVersion": "6.6.0",
  "engineVersion": "f676762280b54cd07c770017ed3711ddde35f37a",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "mysql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "generator client {\n  provider = \"prisma-client-js\"\n  output   = \"../generated/prisma\"\n}\n\ndatasource db {\n  provider = \"mysql\"\n  url      = env(\"DATABASE_URL\")\n}\n\nmodel applied_coupon {\n  Order_id  Int\n  Coupon_id Int\n  orders    orders @relation(fields: [Order_id], references: [Order_id], onDelete: NoAction, onUpdate: NoAction, map: \"applied_coupon_ibfk_1\")\n  coupon    coupon @relation(fields: [Coupon_id], references: [Coupon_id], onDelete: NoAction, onUpdate: NoAction, map: \"applied_coupon_ibfk_2\")\n\n  @@id([Order_id, Coupon_id])\n  @@index([Coupon_id], map: \"Coupon_id\")\n}\n\nmodel category {\n  Category_id Int       @id @default(autoincrement())\n  Name        String?   @db.VarChar(100)\n  product     product[]\n}\n\nmodel coupon {\n  Coupon_id        Int              @id @default(autoincrement())\n  Code             Int?\n  Discount_Percent Int?\n  Expiration_Date  DateTime?        @db.Date\n  applied_coupon   applied_coupon[]\n}\n\nmodel escrow_transactions {\n  Escrow_id  Int     @id @default(autoincrement())\n  User_id    Int?\n  Shop_id    Int?\n  payment_id Int?    @unique(map: \"payment_id\")\n  Amount     Int?\n  Status     String? @db.VarChar(100)\n  user       user?   @relation(fields: [User_id], references: [user_id], onDelete: NoAction, onUpdate: NoAction, map: \"escrow_transactions_ibfk_1\")\n  shop       shop?   @relation(fields: [Shop_id], references: [Shop_id], onDelete: NoAction, onUpdate: NoAction, map: \"escrow_transactions_ibfk_2\")\n\n  @@index([Shop_id], map: \"Shop_id\")\n  @@index([User_id], map: \"User_id\")\n}\n\nmodel order_item {\n  Order_id   Int\n  Product_id Int\n  Quantity   Int?\n  Price      Int?\n  orders     orders  @relation(fields: [Order_id], references: [Order_id], onDelete: NoAction, onUpdate: NoAction, map: \"order_item_ibfk_1\")\n  product    product @relation(fields: [Product_id], references: [Product_id], onDelete: NoAction, onUpdate: NoAction, map: \"order_item_ibfk_2\")\n\n  @@id([Order_id, Product_id])\n  @@index([Product_id], map: \"Product_id\")\n}\n\nmodel orders {\n  Order_id                Int              @id @default(autoincrement())\n  User_id                 Int?\n  Order_Date              DateTime?        @db.Date\n  Status                  String?          @db.VarChar(100)\n  Tracking_Number         Int?\n  Estimated_Delivery_Date DateTime?        @db.Date\n  Total_Price             Int?\n  applied_coupon          applied_coupon[]\n  order_item              order_item[]\n  user                    user?            @relation(fields: [User_id], references: [user_id], onDelete: NoAction, onUpdate: NoAction, map: \"orders_ibfk_1\")\n  payment                 payment[]\n\n  @@index([User_id], map: \"User_id\")\n}\n\nmodel owner {\n  Owner_Id  Int     @id @default(autoincrement())\n  Full_Name String? @db.VarChar(255)\n  Email     String? @db.VarChar(100)\n  Phone     String? @db.VarChar(255)\n  user_id   Int?\n  user      user?   @relation(fields: [user_id], references: [user_id], onDelete: NoAction, onUpdate: NoAction, map: \"fk_owner_user\")\n  shop      shop[]\n\n  @@index([user_id], map: \"fk_owner_user\")\n}\n\nmodel payment {\n  Payment_id     Int       @id @default(autoincrement())\n  Order_id       Int?\n  User_id        Int?\n  Payment_method String?   @db.VarChar(100)\n  Payment_status String?   @db.VarChar(100)\n  Amount         Decimal?  @db.Decimal(10, 0)\n  Payment_date   DateTime? @default(now()) @db.DateTime(0)\n  orders         orders?   @relation(fields: [Order_id], references: [Order_id], onDelete: NoAction, onUpdate: NoAction, map: \"payment_ibfk_1\")\n  user           user?     @relation(fields: [User_id], references: [user_id], onDelete: NoAction, onUpdate: NoAction, map: \"payment_ibfk_2\")\n\n  @@index([Order_id], map: \"Order_id\")\n  @@index([User_id], map: \"User_id\")\n}\n\nmodel product {\n  Product_id   Int          @id @default(autoincrement())\n  Shop_id      Int?\n  Category_id  Int?\n  Product_name String?      @db.VarChar(100)\n  Description  String?      @db.VarChar(255)\n  Price        Int?\n  Stock        Int?\n  cart         cart[]\n  order_item   order_item[]\n  shop         shop?        @relation(fields: [Shop_id], references: [Shop_id], onDelete: NoAction, onUpdate: NoAction, map: \"product_ibfk_1\")\n  category     category?    @relation(fields: [Category_id], references: [Category_id], onDelete: NoAction, onUpdate: NoAction, map: \"product_ibfk_2\")\n  reviews      reviews[]\n\n  @@index([Category_id], map: \"Category_id\")\n  @@index([Shop_id], map: \"Shop_id\")\n}\n\nmodel reviews {\n  Review_id    Int       @id @default(autoincrement())\n  User_id      Int?\n  Product_id   Int?\n  Rating       Int?\n  Descriptions String?   @db.VarChar(255)\n  Created_at   DateTime? @db.Date\n  user         user?     @relation(fields: [User_id], references: [user_id], onDelete: NoAction, onUpdate: NoAction, map: \"reviews_ibfk_1\")\n  product      product?  @relation(fields: [Product_id], references: [Product_id], onDelete: NoAction, onUpdate: NoAction, map: \"reviews_ibfk_2\")\n\n  @@index([Product_id], map: \"Product_id\")\n  @@index([User_id], map: \"User_id\")\n}\n\nmodel shop {\n  Shop_id             Int                   @id @default(autoincrement())\n  OwnerId             Int?\n  Shop_name           String?               @db.VarChar(100)\n  Email               String?               @db.VarChar(255)\n  Website             String?               @db.VarChar(255)\n  escrow_transactions escrow_transactions[]\n  product             product[]\n  owner               owner?                @relation(fields: [OwnerId], references: [Owner_Id], onDelete: NoAction, onUpdate: NoAction, map: \"shop_ibfk_1\")\n  shop_bank_account   shop_bank_account[]\n  shop_location       shop_location[]\n  shop_phone          shop_phone[]\n\n  @@index([OwnerId], map: \"OwnerId\")\n}\n\nmodel shop_bank_account {\n  Account_id    Int     @id @default(autoincrement())\n  Shop_id       Int?\n  Card_Number   Int?\n  Name_On_Card  String? @db.VarChar(100)\n  Expiray_Month String? @db.VarChar(255)\n  Expiray_Year  String? @db.VarChar(255)\n  shop          shop?   @relation(fields: [Shop_id], references: [Shop_id], onDelete: NoAction, onUpdate: NoAction, map: \"shop_bank_account_ibfk_1\")\n\n  @@index([Shop_id], map: \"Shop_id\")\n}\n\nmodel shop_location {\n  Shop_id  Int\n  Location String @db.VarChar(15)\n  shop     shop   @relation(fields: [Shop_id], references: [Shop_id], onDelete: NoAction, onUpdate: NoAction, map: \"shop_location_ibfk_1\")\n\n  @@id([Shop_id, Location])\n}\n\nmodel shop_phone {\n  Shop_id Int\n  Phone   String @db.VarChar(15)\n  shop    shop   @relation(fields: [Shop_id], references: [Shop_id], onDelete: NoAction, onUpdate: NoAction, map: \"shop_phone_ibfk_1\")\n\n  @@id([Shop_id, Phone])\n}\n\nmodel user {\n  user_id             Int                   @id @default(autoincrement())\n  Full_Name           String?               @db.VarChar(50)\n  Email               String?               @db.VarChar(255)\n  ssn                 String?               @db.VarChar(100)\n  password            String?               @db.VarChar(255)\n  EGP                 Int?\n  cart                cart[]\n  escrow_transactions escrow_transactions[]\n  orders              orders[]\n  owner               owner[]\n  payment             payment[]\n  reviews             reviews[]\n  user_bank_account   user_bank_account[]\n}\n\nmodel user_bank_account {\n  account_id    Int     @id @default(autoincrement())\n  UserId        Int?\n  Card_Number   Int?\n  Name_On_Card  String? @db.VarChar(100)\n  Expiray_Month String? @db.VarChar(255)\n  Expiray_Year  String? @db.VarChar(255)\n  user          user?   @relation(fields: [UserId], references: [user_id], onDelete: NoAction, onUpdate: NoAction, map: \"user_bank_account_ibfk_1\")\n\n  @@index([UserId], map: \"UserId\")\n}\n\nmodel cart {\n  Cart_id    Int       @id @default(autoincrement())\n  User_id    Int?\n  Product_id Int?\n  Quantity   Int?\n  Added_At   DateTime? @default(now()) @db.DateTime(0)\n  user       user?     @relation(fields: [User_id], references: [user_id], onDelete: NoAction, onUpdate: NoAction, map: \"cart_ibfk_1\")\n  product    product?  @relation(fields: [Product_id], references: [Product_id], onDelete: NoAction, onUpdate: NoAction, map: \"cart_ibfk_2\")\n\n  @@index([Product_id], map: \"Product_id\")\n  @@index([User_id], map: \"User_id\")\n}\n",
  "inlineSchemaHash": "4551047c303d526972290bb9e4b943fe2f749f41c41b11a6a7ef6b1ff8a65b74",
  "copyEngine": true
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"applied_coupon\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"Order_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Coupon_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"orders\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"orders\",\"nativeType\":null,\"relationName\":\"applied_couponToorders\",\"relationFromFields\":[\"Order_id\"],\"relationToFields\":[\"Order_id\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"coupon\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"coupon\",\"nativeType\":null,\"relationName\":\"applied_couponTocoupon\",\"relationFromFields\":[\"Coupon_id\"],\"relationToFields\":[\"Coupon_id\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"Order_id\",\"Coupon_id\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"category\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"Category_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"product\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"product\",\"nativeType\":null,\"relationName\":\"categoryToproduct\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"coupon\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"Coupon_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Discount_Percent\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Expiration_Date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"applied_coupon\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"applied_coupon\",\"nativeType\":null,\"relationName\":\"applied_couponTocoupon\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"escrow_transactions\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"Escrow_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"User_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Shop_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"payment_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"user\",\"nativeType\":null,\"relationName\":\"escrow_transactionsTouser\",\"relationFromFields\":[\"User_id\"],\"relationToFields\":[\"user_id\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"shop\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"shop\",\"nativeType\":null,\"relationName\":\"escrow_transactionsToshop\",\"relationFromFields\":[\"Shop_id\"],\"relationToFields\":[\"Shop_id\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"order_item\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"Order_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Product_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Quantity\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"orders\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"orders\",\"nativeType\":null,\"relationName\":\"order_itemToorders\",\"relationFromFields\":[\"Order_id\"],\"relationToFields\":[\"Order_id\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"product\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"product\",\"nativeType\":null,\"relationName\":\"order_itemToproduct\",\"relationFromFields\":[\"Product_id\"],\"relationToFields\":[\"Product_id\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"Order_id\",\"Product_id\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"orders\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"Order_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"User_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Order_Date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Tracking_Number\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Estimated_Delivery_Date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Total_Price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"applied_coupon\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"applied_coupon\",\"nativeType\":null,\"relationName\":\"applied_couponToorders\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"order_item\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"order_item\",\"nativeType\":null,\"relationName\":\"order_itemToorders\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"user\",\"nativeType\":null,\"relationName\":\"ordersTouser\",\"relationFromFields\":[\"User_id\"],\"relationToFields\":[\"user_id\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"payment\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"payment\",\"nativeType\":null,\"relationName\":\"ordersTopayment\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"owner\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"Owner_Id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Full_Name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Phone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"user\",\"nativeType\":null,\"relationName\":\"ownerTouser\",\"relationFromFields\":[\"user_id\"],\"relationToFields\":[\"user_id\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"shop\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"shop\",\"nativeType\":null,\"relationName\":\"ownerToshop\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"payment\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"Payment_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Order_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"User_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Payment_method\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Payment_status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"10\",\"0\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Payment_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"orders\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"orders\",\"nativeType\":null,\"relationName\":\"ordersTopayment\",\"relationFromFields\":[\"Order_id\"],\"relationToFields\":[\"Order_id\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"user\",\"nativeType\":null,\"relationName\":\"paymentTouser\",\"relationFromFields\":[\"User_id\"],\"relationToFields\":[\"user_id\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"product\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"Product_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Shop_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Category_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Product_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Stock\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cart\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"cart\",\"nativeType\":null,\"relationName\":\"cartToproduct\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"order_item\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"order_item\",\"nativeType\":null,\"relationName\":\"order_itemToproduct\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"shop\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"shop\",\"nativeType\":null,\"relationName\":\"productToshop\",\"relationFromFields\":[\"Shop_id\"],\"relationToFields\":[\"Shop_id\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"category\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"category\",\"nativeType\":null,\"relationName\":\"categoryToproduct\",\"relationFromFields\":[\"Category_id\"],\"relationToFields\":[\"Category_id\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reviews\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"reviews\",\"nativeType\":null,\"relationName\":\"productToreviews\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"reviews\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"Review_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"User_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Product_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Rating\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Descriptions\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"user\",\"nativeType\":null,\"relationName\":\"reviewsTouser\",\"relationFromFields\":[\"User_id\"],\"relationToFields\":[\"user_id\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"product\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"product\",\"nativeType\":null,\"relationName\":\"productToreviews\",\"relationFromFields\":[\"Product_id\"],\"relationToFields\":[\"Product_id\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"shop\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"Shop_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"OwnerId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Shop_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Website\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"escrow_transactions\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"escrow_transactions\",\"nativeType\":null,\"relationName\":\"escrow_transactionsToshop\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"product\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"product\",\"nativeType\":null,\"relationName\":\"productToshop\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"owner\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"owner\",\"nativeType\":null,\"relationName\":\"ownerToshop\",\"relationFromFields\":[\"OwnerId\"],\"relationToFields\":[\"Owner_Id\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"shop_bank_account\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"shop_bank_account\",\"nativeType\":null,\"relationName\":\"shopToshop_bank_account\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"shop_location\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"shop_location\",\"nativeType\":null,\"relationName\":\"shopToshop_location\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"shop_phone\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"shop_phone\",\"nativeType\":null,\"relationName\":\"shopToshop_phone\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"shop_bank_account\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"Account_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Shop_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Card_Number\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Name_On_Card\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Expiray_Month\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Expiray_Year\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"shop\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"shop\",\"nativeType\":null,\"relationName\":\"shopToshop_bank_account\",\"relationFromFields\":[\"Shop_id\"],\"relationToFields\":[\"Shop_id\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"shop_location\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"Shop_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Location\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"15\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"shop\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"shop\",\"nativeType\":null,\"relationName\":\"shopToshop_location\",\"relationFromFields\":[\"Shop_id\"],\"relationToFields\":[\"Shop_id\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"Shop_id\",\"Location\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"shop_phone\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"Shop_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Phone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"15\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"shop\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"shop\",\"nativeType\":null,\"relationName\":\"shopToshop_phone\",\"relationFromFields\":[\"Shop_id\"],\"relationToFields\":[\"Shop_id\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"Shop_id\",\"Phone\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"user\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Full_Name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ssn\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"EGP\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cart\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"cart\",\"nativeType\":null,\"relationName\":\"cartTouser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"escrow_transactions\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"escrow_transactions\",\"nativeType\":null,\"relationName\":\"escrow_transactionsTouser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"orders\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"orders\",\"nativeType\":null,\"relationName\":\"ordersTouser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"owner\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"owner\",\"nativeType\":null,\"relationName\":\"ownerTouser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"payment\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"payment\",\"nativeType\":null,\"relationName\":\"paymentTouser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reviews\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"reviews\",\"nativeType\":null,\"relationName\":\"reviewsTouser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_bank_account\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"user_bank_account\",\"nativeType\":null,\"relationName\":\"userTouser_bank_account\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"user_bank_account\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"account_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"UserId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Card_Number\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Name_On_Card\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Expiray_Month\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Expiray_Year\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"user\",\"nativeType\":null,\"relationName\":\"userTouser_bank_account\",\"relationFromFields\":[\"UserId\"],\"relationToFields\":[\"user_id\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"cart\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"Cart_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"User_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Product_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Quantity\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Added_At\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[\"0\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"user\",\"nativeType\":null,\"relationName\":\"cartTouser\",\"relationFromFields\":[\"User_id\"],\"relationToFields\":[\"user_id\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"product\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"product\",\"nativeType\":null,\"relationName\":\"cartToproduct\",\"relationFromFields\":[\"Product_id\"],\"relationToFields\":[\"Product_id\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined
config.compilerWasm = undefined

config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

