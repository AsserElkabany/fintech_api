
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


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

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

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
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
