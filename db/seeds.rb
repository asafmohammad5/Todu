# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

demo = User.create(username: "demoUser", password: "hunter2")
bob = User.create(username: "bob", password: "hunter2")

project1 = demo.created_boards.create(project_name: "Project1")
project2 = bob.created_boards.create(project_name: "Project2")

demo.boards << project2
bob.boards << project1