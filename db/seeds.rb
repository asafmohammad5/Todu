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
john = User.create(username: "john", password: "hunter2")
alex = User.create(username: "alex", password: "hunter2")
albert = User.create(username: "albert", password: "hunter2")
charles = User.create(username: "charles", password: "hunter2")
juan = User.create(username: "juan", password: "hunter2")
george = User.create(username: "george", password: "hunter2")
jessica = User.create(username: "jessica", password: "hunter2")
natasha = User.create(username: "natasha", password: "hunter2")
erica = User.create(username: "erica", password: "hunter2")
samantha = User.create(username: "samantha", password: "hunter2")
robert = User.create(username: "robert", password: "hunter2")
lilly = User.create(username: "lilly", password: "hunter2")
tom = User.create(username: "tom", password: "hunter2")
julian = User.create(username: "julian", password: "hunter2")
anna = User.create(username: "anna", password: "hunter2")
kelly = User.create(username: "kelly", password: "hunter2")
hanna = User.create(username: "hanna", password: "hunter2")
lisa = User.create(username: "lisa", password: "hunter2")
patrick = User.create(username: "patrick", password: "hunter2")
mohammad = User.create(username: "mohammad", password: "hunter2")
chris = User.create(username: "chris", password: "hunter2")
sam = User.create(username: "sam", password: "hunter2")
alfonso = User.create(username: "alfonso", password: "hunter2")
claudia = User.create(username: "claudia", password: "hunter2")
bruce = User.create(username: "bruce", password: "hunter2")
elsa = User.create(username: "elsa", password: "hunter2")
brandy = User.create(username: "brandy", password: "hunter2")
evan = User.create(username: "evan", password: "hunter2")
yulia = User.create(username: "yulia", password: "hunter2")
johnathan = User.create(username: "johnathan", password: "hunter2")


project1 = demo.created_boards.create(project_name: "Project1")
project2 = asaf.created_boards.create(project_name: "Project2")
project3 = palwasha.created_boards.create(project_name: "Project3")
project4 = timothy.created_boards.create(project_name: "Project4")
project5 = timothy.created_boards.create(project_name: "Project5")


demo.boards << project3
demo.boards << project5
asaf.boards << project4
palwasha.boards << project2
timothy.boards << project1