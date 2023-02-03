# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
ProductCategory.destroy_all
Product.destroy_all

puts '🌱 Seeding...'


#users

user1 = User.create(first_name: 'Madeline', last_name: 'Fairbairn', email: 'maf@gmail.com', phone_number: '5555555555', street_address: '123 road', city: 'Minneapolis', state: 'MN', zip: '55555', username: 'goatmom12', password: '12345', bio: 'I love goats!', image_address_1: '', image_address_2: '', image_address_3: '', image_address_4: '', producer: true)

user2 = User.create(first_name: 'Andrew', last_name: 'Fairbairn', email: 'asf@gmail.com', phone_number: '5555555555', street_address: '123 lane', city: 'Minneapolis', state: 'MN', zip: '55555', username: 'asf', password: '12345', bio: 'Love to garden and raise chickens', image_address_1: '', image_address_2: '', image_address_3: '', image_address_4: '', producer: true)

user3 = User.create(first_name: 'Chuck', last_name: 'Borden', email: 'chuck@hotmail.com', phone_number: '5555555555', street_address: '123 blvd', city: 'Minnetonka', state: 'MN', zip: '55555', username: 'Chuck_B', password: '12345', bio: 'I love fresh veggies', image_address_1: '', image_address_2: '', image_address_3: '', image_address_4: '', producer: false)

user4 = User.create(first_name: 'Mackenzie', last_name: 'Smith', email: 'msmith@yahoo.com', phone_number: '5555555555', street_address: '123 circle', city: 'Hopkins', state: 'MN', zip: '55555', username: 'veggiekenzie', password: '12345', bio: 'Lover of organic produce!', image_address_1: '', image_address_2: '', image_address_3: '', image_address_4: '', producer: false)

user5 = User.create(first_name: 'Dave', last_name: 'Lura', email: 'beeguy@netscape.com', phone_number: '5555555555', street_address: '123 street', city: 'Chanhassen', state: 'MN', zip: '55555', username: 'honey_man', password: '12345', bio: 'I am an apiarist who loves to collect honey.', image_address_1: '', image_address_2: '', image_address_3: '', image_address_4: '', producer: true)

#product_categories

produce = ProductCategory.create(category_name: 'Produce', category_description: 'Fruits, veggies, and fungi')
dairy = ProductCategory.create(category_name: 'Dairy', category_description: 'Milk, cheese, butter, and other animal by-products')
meat_and_eggs = ProductCategory.create(category_name: 'Meat & Eggs', category_description: 'Beef, pork, chicken, goat, lamb, and eggs')
misc = ProductCategory.create(category_name: 'Misc.', category_description: 'Honey, maple syrup, flowers, and an assortment of other non-categorizable food products')

#products

product1 = Product.create(price: 10.99, user: user1, product_category: dairy, stock: 10, name: 'Half Gallon of Goat Milk', date_harvested: '1/31/23', organic: false, image_address_1: '', image_address_2: '', image_address_3: '', image_address_4: '', description: 'Fresh milk from my goats.')

product2 = Product.create(price: 5.99, user: user1, product_category: dairy, stock: 20, name: 'Chevre', date_harvested: '1/17/23', organic: false, image_address_1: '', image_address_2: '', image_address_3: '', image_address_4: '', description: 'Fresh chevre made from my leftover goatmilk')

product3 = Product.create(price: 11.99, user: user2, product_category: meat_and_eggs, stock: 10, name: 'Dozen fresh eggs', date_harvested: '1/28/23', organic: true, image_address_1: '', image_address_2: '', image_address_3: '', image_address_4: '', description: 'A dozen farm fresh organic eggs')

product4 = Product.create(price: 4.50, user: user2, product_category: produce, stock: 5, name: 'Winter Spaghetti Squash', date_harvested: '10/25/22', organic: true, image_address_1: '', image_address_2: '', image_address_3: '', image_address_4: '', description: 'Winter spaghetti squash harvested in late fall, ready to be eaten')

product5 = Product.create(price: 2.99, user: user2, product_category: produce, stock: 5, name: 'Heirloom Tomatoes', date_harvested: '1/26/23', organic: true, image_address_1: '', image_address_2: '', image_address_3: '', image_address_4: '', description: 'Big, flavorful, and juicy heirloom tomatoes')

product6 = Product.create(price: 1.99, user: user1, product_category: produce, stock: 8, name: 'Cucumbers', date_harvested: '1/28/23', organic: false, image_address_1: '', image_address_2: '', image_address_3: '', image_address_4: '', description: 'Beautiful hydroponic cucumbers')

product7 = Product.create(price: 5.00, user: user2, product_category: misc, stock: 10, name: 'Pint of Maple Syrup', date_harvested: '2/1/23', organic: false, image_address_1: '', image_address_2: '', image_address_3: '', image_address_4: '', description: 'Pint of freshly harvested maple syrup.')

product8 = Product.create(price: 7.50, user: user5, product_category: misc, stock: 20, name: 'Jar of Honey', date_harvested: '8/17/22', organic: false, image_address_1: '', image_address_2: '', image_address_3: '', image_address_4: '', description: 'Honey harvested in late fall')

product9 = Product.create(price: 2.50, user: user5, product_category: produce, stock: 10, name: 'Eggplant', date_harvested: '1/18/23', organic: false, image_address_1: '', image_address_2: '', image_address_3: '', image_address_4: '', description: 'Delicious egg plant greenhouse grown')

product10 = Product.create(price: 10.00, user: user5, product_category: misc, stock: 20, name: 'Propolis', date_harvested: '8/25/22', organic: false, image_address_1: '', image_address_2: '', image_address_3: '', image_address_4: '', description: 'Tin of propolis')

puts '✅ Done seeding!'

