# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

demo = User.create(username: "demoUser", password: "hunter2")
asaf = User.create(username: "asaf", password: "hunter2")
palwasha = User.create(username: "palwasha", password: "hunter2")
timothy = User.create(username: "timothy", password: "hunter2")

project1 = demo.created_boards.create(project_name: "Project1")
project2 = asaf.created_boards.create(project_name: "Project2")
project3 = palwasha.created_boards.create(project_name: "Project3")
project4 = timothy.created_boards.create(project_name: "Project4")

demo.boards << project3
asaf.boards << project4
palwasha.boards << project2
timothy.boards << project1