import { MinimumStock } from "./MinimumStock";
import { MockUp } from "./MockUp";
import { Order } from "./Order";
import { Product } from "./Product";
import { Size } from "./Size";
import { Situation } from "./Situation";
import { Supplier } from "./Supplier";
import { User } from "./User";
import { Movements } from "./Movements";
import { Flow } from "./Flow";
import { Favorite } from "./Favorite";
import { Like } from "./Like";

// Definindo as relações entre as tabelas

// Relacionamento entre Product e Size
// Um produto pertence a um tamanho específico, identificado pelo sizeId na tabela Product
Product.belongsTo(Size, {  as: 'size', foreignKey: 'sizeId', });
// Um tamanho pode estar associado a vários produtos
Size.hasMany(Product, { foreignKey: 'sizeId' });

// Relacionamento entre Product e MinimumStock
// Um produto pertence a um estoque mínimo específico, identificado pelo minimumStockId na tabela Product
Product.belongsTo(MinimumStock, { foreignKey: 'minimumStockId' });
// Um estoque mínimo pode estar associado a vários produtos
MinimumStock.hasMany(Product, { foreignKey: 'minimumStockId' });

// Relacionamento entre Product e MockUp
// Um produto pertence a um mockup específico, identificado pelo modelId na tabela Product
Product.belongsTo(MockUp, { foreignKey: 'mockUpId' });
// Um mockup pode estar associado a vários produtos
MockUp.hasMany(Product, { foreignKey: 'mockUpId' });

// Relacionamento entre Product e User
//Um Product pertence a muitos User, atraves do model Favorite
Product.belongsToMany(User, { through: Favorite })
//Um Product pertence a muitos Likes, atraves do model Like
Product.belongsToMany(User, { through: Like })
// Um Product pode estar associado a vários Users
Product.hasMany(Favorite, { as: 'favoritesUsers', foreignKey: 'productId' })

// Relacionamento entre MockUp e Supplier
// Um mockup pertence a um fornecedor específico, identificado pelo suppliersId na tabela MockUp
MockUp.belongsTo(Supplier, { foreignKey: 'suppliersId' });
// Um fornecedor pode estar associado a vários mockups
Supplier.hasMany(MockUp, { foreignKey: 'suppliersId' });

// Relacionamento entre Order e Product
// Um pedido pertence a um produto específico, identificado pelo productId na tabela Order
Order.belongsTo(Product, { as: 'Product', foreignKey: 'productId' });
// Um produto pode estar associado a vários pedidos
Product.hasMany(Order, { foreignKey: 'productId' });

// Relacionamento entre Order e User
// Um pedido pertence a um usuário específico, identificado pelo userId na tabela Order
Order.belongsTo(User, { foreignKey: 'userId' });
// Um usuário pode estar associado a vários pedidos
User.hasMany(Order, { foreignKey: 'userId' });

// Relacionamento entre Order e Situation
// Um pedido pertence a uma situação específica, identificada pelo statusId na tabela Order
Order.belongsTo(Situation, { foreignKey: 'status' });
// Uma situação pode estar associada a vários pedidos
Situation.hasMany(Order, { foreignKey: 'status' });

// Relacionamento entre Movements e Product
// Um movimento pertence a um produto específico, identificado pelo productId na tabela Movements
Movements.belongsTo(Product, { foreignKey: 'productId' });
// Um produto pode estar associado a vários movimentos
Product.hasMany(Movements, { foreignKey: 'productId' });

// Relacionamento entre Movements e User
// Um movimento pertence a um usuário específico, identificado pelo userId na tabela Movements
Movements.belongsTo(User, { foreignKey: 'userId' });
// Um usuário pode estar associado a vários movimentos
User.hasMany(Movements, { foreignKey: 'userId' });

// Relacionamento entre Movements e Flows
// Um movimento pertence a um usuário específico, identificado pelo userId na tabela Movements
Movements.belongsTo(Flow, { foreignKey: 'flowId' });
// Um usuário pode estar associado a vários movimentos
Flow.hasMany(Movements, { foreignKey: 'userId' });

// Relacionamento entre Favorite e Product
// Um Favorite pertence a um Product específico, identificado pelo userId na tabela Favorites
Favorite.belongsTo(Product)
// Um Favorite pertence a um User específico, identificado pelo userId na tabela Favorites
Favorite.belongsTo(User)

// Relacionamento entre User e Product
//Um User pertence a muitos Product, atraves do model Favorites
User.belongsToMany(Product, { through: Favorite })
//Um User pertence a muitos Product, atraves do model Like
User.belongsToMany(Product, { through: Like })
// Um User pode estar associado a vários Favorite
User.hasMany(Favorite, { as: 'favoritesProducts', foreignKey: 'userId' })


// // Relacionamento entre Order e Product
// Order.belongsTo(Product, { as: 'product', foreignKey: 'productId' });
// Product.hasMany(Order, { foreignKey: 'productId' });

// // Relacionamento entre Order e User
// Order.belongsTo(User, { foreignKey: 'userId' });
// User.hasMany(Order, { foreignKey: 'userId' });

// // Relacionamento entre Order e Situation
// Order.belongsTo(Situation, { foreignKey: 'status' });
// Situation.hasMany(Order, { foreignKey: 'status' });


export {
  MinimumStock,
  Size,
  Supplier,
  MockUp,
  User,
  Product,
  Favorite,
  Like,
  Order,
  Situation,
  Movements,
  Flow
};
