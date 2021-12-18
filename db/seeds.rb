# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

user1 = User.create!(email: 'doglover@gmail.com', password: 123456)
user2 = User.create!(email: 'snowboardbro@icloud.com', password: 7891011)
user3 = User.create!(email: 'puzzlelady@msn.com', password: 121314)

user1.posts.create(title:"treat sale", body:"PetCo has a treat sale!")
user1.posts.create(title:"hiking trails", body:"Boulder Lake is a 3 mile dog friendly hike.")

user2.posts.create(title:"hey", body:"Who's ready to hit the mountain?")
user2.posts.create(title:"POW", body:"POW day let's go!")


user3.posts.create(title:"corner pieces", body:"I lost a corner piece... devastating.")
user3.posts.create(title:"thrift finds", body:"Found a 5000 piece puzzle at the thrift shop!!")



