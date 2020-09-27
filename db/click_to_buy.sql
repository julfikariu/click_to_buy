/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50724
Source Host           : localhost:3306
Source Database       : click_to_buy

Target Server Type    : MYSQL
Target Server Version : 50724
File Encoding         : 65001

Date: 2020-09-24 10:58:26
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `admins`
-- ----------------------------
DROP TABLE IF EXISTS `admins`;
CREATE TABLE `admins` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone_no` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `avatar` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'super admin' COMMENT 'Super admin | Admin',
  `status` tinyint(4) NOT NULL DEFAULT '0',
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `admins_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of admins
-- ----------------------------
INSERT INTO `admins` VALUES ('2', 'julfikar', 'julfikar@gmail.com', null, null, '$2y$10$zZSMNZgi0KsFIjlhmfA5UumOFH3YRcbzATKHXC/41vqOpG.LEg8xe', 'super admin', '0', null, '2020-07-20 07:09:02', '2020-07-20 07:09:02');

-- ----------------------------
-- Table structure for `brands`
-- ----------------------------
DROP TABLE IF EXISTS `brands`;
CREATE TABLE `brands` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of brands
-- ----------------------------
INSERT INTO `brands` VALUES ('1', 'symphony', 'fdvdfvfdvs', '1585994884.jpg', null, null);

-- ----------------------------
-- Table structure for `carts`
-- ----------------------------
DROP TABLE IF EXISTS `carts`;
CREATE TABLE `carts` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `product_id` bigint(20) unsigned NOT NULL,
  `user_id` bigint(20) unsigned DEFAULT NULL,
  `order_id` bigint(20) unsigned DEFAULT NULL,
  `ip_address` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `product_quantity` int(11) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `carts_user_id_foreign` (`user_id`),
  KEY `carts_product_id_foreign` (`product_id`),
  KEY `carts_order_id_foreign` (`order_id`),
  CONSTRAINT `carts_order_id_foreign` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`) ON DELETE CASCADE,
  CONSTRAINT `carts_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE,
  CONSTRAINT `carts_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of carts
-- ----------------------------
INSERT INTO `carts` VALUES ('1', '3', null, '2', '127.0.0.1', '3', '2020-07-25 05:26:30', '2020-07-25 05:38:58');
INSERT INTO `carts` VALUES ('2', '1', null, '2', '127.0.0.1', '1', '2020-07-25 05:26:52', '2020-07-25 05:38:58');
INSERT INTO `carts` VALUES ('3', '4', null, null, '::1', '1', '2020-08-16 03:06:02', '2020-08-16 03:06:02');

-- ----------------------------
-- Table structure for `categories`
-- ----------------------------
DROP TABLE IF EXISTS `categories`;
CREATE TABLE `categories` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `parent_id` int(11) DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of categories
-- ----------------------------
INSERT INTO `categories` VALUES ('1', null, 'first category', 'jkdfks kldf vkld ', '1578461224.jpg', null, null);
INSERT INTO `categories` VALUES ('2', null, 'LED Lamp', 'fdzg', '1595227532.jpg', null, '2020-07-20 06:45:32');
INSERT INTO `categories` VALUES ('3', '2', 'Electronics', 'dfgdgfd', '1595227576.jpg', '2020-07-20 06:46:16', '2020-07-20 06:46:16');
INSERT INTO `categories` VALUES ('4', null, 'Shoe', 'All type of shoe', '1600654927.png', '2020-09-21 02:22:08', '2020-09-21 02:22:08');
INSERT INTO `categories` VALUES ('5', '4', 'womens shoe', 'all shoe for men', '1600655096.JPG', '2020-09-21 02:24:56', '2020-09-21 02:25:10');

-- ----------------------------
-- Table structure for `districts`
-- ----------------------------
DROP TABLE IF EXISTS `districts`;
CREATE TABLE `districts` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `division_id` bigint(20) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of districts
-- ----------------------------
INSERT INTO `districts` VALUES ('1', 'Jashore', '1', null, null);

-- ----------------------------
-- Table structure for `divisions`
-- ----------------------------
DROP TABLE IF EXISTS `divisions`;
CREATE TABLE `divisions` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `priority` int(10) unsigned NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of divisions
-- ----------------------------
INSERT INTO `divisions` VALUES ('1', 'Khulna', '1', null, null);
INSERT INTO `divisions` VALUES ('2', 'Dhaka', '2', null, null);

-- ----------------------------
-- Table structure for `failed_jobs`
-- ----------------------------
DROP TABLE IF EXISTS `failed_jobs`;
CREATE TABLE `failed_jobs` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of failed_jobs
-- ----------------------------

-- ----------------------------
-- Table structure for `migrations`
-- ----------------------------
DROP TABLE IF EXISTS `migrations`;
CREATE TABLE `migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of migrations
-- ----------------------------
INSERT INTO `migrations` VALUES ('1', '2014_10_12_000000_create_users_table', '1');
INSERT INTO `migrations` VALUES ('2', '2014_10_12_100000_create_password_resets_table', '1');
INSERT INTO `migrations` VALUES ('3', '2019_08_19_000000_create_failed_jobs_table', '1');
INSERT INTO `migrations` VALUES ('4', '2019_12_31_093633_create_categories_table', '1');
INSERT INTO `migrations` VALUES ('5', '2019_12_31_093933_create_brands_table', '1');
INSERT INTO `migrations` VALUES ('6', '2019_12_31_093948_create_products_table', '1');
INSERT INTO `migrations` VALUES ('7', '2019_12_31_094017_create_product_images_table', '1');
INSERT INTO `migrations` VALUES ('8', '2019_12_31_103721_create_admins_table', '1');
INSERT INTO `migrations` VALUES ('9', '2020_01_13_033048_create_districts_table', '1');
INSERT INTO `migrations` VALUES ('10', '2020_01_13_033629_create_divisions_table', '1');
INSERT INTO `migrations` VALUES ('11', '2020_04_02_104320_create_orders_table', '1');
INSERT INTO `migrations` VALUES ('12', '2020_04_02_104507_create_carts_table', '1');
INSERT INTO `migrations` VALUES ('13', '2020_04_08_021025_create_settings_table', '1');
INSERT INTO `migrations` VALUES ('14', '2020_04_09_132047_create_payments_table', '1');
INSERT INTO `migrations` VALUES ('15', '2020_04_20_041108_create_sliders_table', '1');

-- ----------------------------
-- Table structure for `orders`
-- ----------------------------
DROP TABLE IF EXISTS `orders`;
CREATE TABLE `orders` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) unsigned DEFAULT NULL,
  `payment_id` bigint(20) unsigned DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone_no` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ip_address` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `shipping_address` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `message` text COLLATE utf8mb4_unicode_ci,
  `transaction_id` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `shipping_charge` int(10) unsigned NOT NULL DEFAULT '60',
  `custom_discount` int(10) unsigned NOT NULL DEFAULT '0',
  `is_paid` tinyint(1) NOT NULL DEFAULT '0',
  `is_completed` tinyint(1) NOT NULL DEFAULT '0',
  `is_seen_by_admin` tinyint(1) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of orders
-- ----------------------------
INSERT INTO `orders` VALUES ('1', '1', '1', 'fff', '000', '1', 'fvvgbbv', 'aaa@gmail.com', 'vfd', '6555', '60', '0', '1', '1', '1', null, '2020-07-25 05:45:20');
INSERT INTO `orders` VALUES ('2', null, '1', 'julfikar', '012458774', '127.0.0.1', 'dfsdsgd', 'mdimamhussain77@gmail.com', 'df', 'er11fgf225252', '60', '0', '0', '1', '1', '2020-07-25 05:38:58', '2020-08-21 05:04:03');

-- ----------------------------
-- Table structure for `password_resets`
-- ----------------------------
DROP TABLE IF EXISTS `password_resets`;
CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  KEY `password_resets_email_index` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of password_resets
-- ----------------------------

-- ----------------------------
-- Table structure for `payments`
-- ----------------------------
DROP TABLE IF EXISTS `payments`;
CREATE TABLE `payments` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `short_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `priority` tinyint(4) NOT NULL DEFAULT '1',
  `no` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'Payment No',
  `type` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'Agent|Personal',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `payments_short_name_unique` (`short_name`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of payments
-- ----------------------------
INSERT INTO `payments` VALUES ('1', 'bkash', 'bkash.png', 'bkash', '1', '1', '1', null, null);
INSERT INTO `payments` VALUES ('2', 'rocket', 'rocket', 'Rocket', '2', '2', '1', null, null);

-- ----------------------------
-- Table structure for `products`
-- ----------------------------
DROP TABLE IF EXISTS `products`;
CREATE TABLE `products` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `category_id` int(10) unsigned NOT NULL,
  `brand_id` int(10) unsigned NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `quantity` int(11) NOT NULL DEFAULT '1',
  `price` int(11) NOT NULL,
  `status` tinyint(4) NOT NULL DEFAULT '0',
  `offer_price` int(11) DEFAULT NULL,
  `admin_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of products
-- ----------------------------
INSERT INTO `products` VALUES ('1', '1', '1', 'Soap', 'Thhbj csknskdjiu jnbkjsd kjnkc nc nkzjnjksd n kcks kjns k\r\nsdncjk kn \r\nNCKNKSN \r\n SKKkjfndk kdjnkj ', 'dfdddfdf', '5', '525', '0', null, '1', '2020-06-03 08:08:32', '2020-06-03 08:08:32');
INSERT INTO `products` VALUES ('3', '2', '1', 'Led', 'degdfg', 'led', '2', '982', '0', null, '1', '2020-07-20 06:48:53', '2020-07-20 06:48:53');
INSERT INTO `products` VALUES ('4', '2', '1', 'Pendrive', 'pendive 32 gb', 'pendrive', '6', '252', '0', null, '1', '2020-07-25 05:32:57', '2020-07-25 05:32:57');
INSERT INTO `products` VALUES ('5', '2', '1', 'Led lamp', 'dcsddfvdag f gfd fd sf sdf', 'led-lamp', '58', '250', '0', null, '1', '2020-09-23 15:47:35', '2020-09-23 15:48:15');

-- ----------------------------
-- Table structure for `product_images`
-- ----------------------------
DROP TABLE IF EXISTS `product_images`;
CREATE TABLE `product_images` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `product_id` int(10) unsigned NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of product_images
-- ----------------------------
INSERT INTO `product_images` VALUES ('1', '1', '1.jpg', null, null);
INSERT INTO `product_images` VALUES ('2', '1', '2.jpg', null, null);
INSERT INTO `product_images` VALUES ('3', '3', '159522773311.jpg.jpg', '2020-07-20 06:48:53', '2020-07-20 06:48:53');
INSERT INTO `product_images` VALUES ('4', '3', '159522773312.jpg.jpg', '2020-07-20 06:48:53', '2020-07-20 06:48:53');
INSERT INTO `product_images` VALUES ('5', '4', '1595655177index.jpg.jpg', '2020-07-25 05:32:57', '2020-07-25 05:32:57');
INSERT INTO `product_images` VALUES ('6', '4', '1595655177transcend-v-700-128gb-usb-30-pen-drive-21546160177.jpg.jpg', '2020-07-25 05:32:57', '2020-07-25 05:32:57');
INSERT INTO `product_images` VALUES ('7', '4', '1595655177indererewx.jpg.jpg', '2020-07-25 05:32:57', '2020-07-25 05:32:57');
INSERT INTO `product_images` VALUES ('8', '5', '16008760561574404095.5dd77fff1799c.jpg.jpg', '2020-09-23 15:47:36', '2020-09-23 15:47:36');
INSERT INTO `product_images` VALUES ('9', '5', '16008760565167LF-CtXL._SX425__lydvpf_gdopvi.jpg.jpg', '2020-09-23 15:47:36', '2020-09-23 15:47:36');
INSERT INTO `product_images` VALUES ('10', '5', '16008760560182603_d7-mini-multimedia-speaker.jpeg.jpeg', '2020-09-23 15:47:36', '2020-09-23 15:47:36');

-- ----------------------------
-- Table structure for `settings`
-- ----------------------------
DROP TABLE IF EXISTS `settings`;
CREATE TABLE `settings` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `address` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `shipping_cost` int(10) unsigned NOT NULL DEFAULT '80',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of settings
-- ----------------------------
INSERT INTO `settings` VALUES ('1', 'ddd@gmail.com', '012555', 'fgvfdg', '80', '2020-07-20 08:29:37', '2020-07-20 08:29:41');

-- ----------------------------
-- Table structure for `sliders`
-- ----------------------------
DROP TABLE IF EXISTS `sliders`;
CREATE TABLE `sliders` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sub_title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `button_text` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `button_link` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `priority` tinyint(3) unsigned NOT NULL DEFAULT '10',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of sliders
-- ----------------------------
INSERT INTO `sliders` VALUES ('1', 'fdgdgfdf', 'dffdf', '1587380062.jpg', 'dfdf', 'dfdfdfdf', '10', null, null);
INSERT INTO `sliders` VALUES ('3', 'we are here', 'hello', '1587380027.jpg', 'hjtss', 'dd', '10', null, null);
INSERT INTO `sliders` VALUES ('4', 'there is one ', 'mr ali', '1587380092.jpg', 'kionjsa', 'komn', '10', null, null);

-- ----------------------------
-- Table structure for `users`
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `username` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone_no` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` tinyint(3) unsigned NOT NULL DEFAULT '0' COMMENT '0 for inactive, 1 for active and 2 for ban',
  `division_id` int(10) unsigned NOT NULL COMMENT 'Division table ID',
  `district_id` int(10) unsigned NOT NULL COMMENT 'District table ID',
  `street_address` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `avatar` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `shipping_address` text COLLATE utf8mb4_unicode_ci,
  `ip_address` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_username_unique` (`username`),
  UNIQUE KEY `users_phone_no_unique` (`phone_no`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('1', 'Admin', 'main', 'admin_main', '01945782164', 'admin@gmail.com', '$2y$10$Ic5IPGNfNDUz7E30eD8YvOnb.7CEPyFEML3PLxewerbF1pcCor.Mm', '1', '1', '1', 'sarsha,Jasore', null, null, '1', null, null, null);
INSERT INTO `users` VALUES ('2', 'Julfikar', 'Khan', 'julfikar-khan', '013458795', 'mdimamhussain77@gmail.com', '$2y$10$Ic5IPGNfNDUz7E30eD8YvOnb.7CEPyFEML3PLxewerbF1pcCor.Mm', '1', '1', '1', 'dds', null, null, '::1', 'OLgyeOhwbBUMZomq2rsHSgBh4iSQLnRz9lt2CIB84tLaSaImJC', '2020-07-20 02:09:18', '2020-07-20 02:09:18');
