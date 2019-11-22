# Todu!

[See it here](https://todu-now.herokuapp.com/)

Todu! is a Trello clone with some slight differences. With the Todu! app, you can create a project/projects and have them all displayed on your main page. Within each project, you have the power to add other users, lists, and cards. 


![GitHub Logo](/app/assets/images/Todu-main.png)


## Boards/Lists/Cards

The core purpose of this app is to give users a tool to organize multiple projects and have each one be quickly accessible. Todu! allows users to create multiple projects while also giving them the ability to add/remove members for each project. Each project is completely seperate from the other. Furthermore, the users main page also displays their joined projects. Todu! seperates the permission level of created projects versus joined projecets. Within created projects the user has full control. They can rename the project, add/remove users, create/delete lists and cards, and fully edit the cards themselves. On the otherhand, joined projects only give the user the ability to leave the project, check-off checklists and leave comments. 

This type of permission level and layout is what seperates Todu! from other apps.

![GitHub Logo](/app/assets/images/Todu-boards.png)

The permission level was accomplished using a `team_membership` join table for joined boards and `boards` table for created boards. For joined boards the corresponding table stores a `member_id` as well as the `board_id`. It would look something like this:

| `id` |  `member_id` |  `board_id` |
|--:|---|---|
| `4 `| `17` | `3`  |

For created boards the corresponding table would resemble this:

| `id` | `project_name` | `owner_id` |`created_at` | `updated_at`|
|--:|---|---|---|---|
| `3`| `board test` | `7`  |`2019-11-19 10:00:26` | `2019-11-21 11:47:11`|

The User model has two associations that fetch the created or joined boards when called.

```
has_many :created_boards,
foreign_key: :owner_id,
class_name: :Board
```
  
````
has_many :boards,
through: :team_memberships,
source: :board
````
  
Finally, the boards controller sends back only the boards that the user has created or is a member of.
 
 ``` 
 def index
    @boards = current_user.created_boards + current_user.boards
    render :index
 end
```

This project was designed and built in under two weeks.

## Technologies implemented
* Rails
* Javascript
* React/Redux
* Postgres
* CSS/SCSS
* HTML

## Features

* Authentication using BCrypt
* Users can create boards
* Users can search for other users to add to their project
* The main page shows all of the users created projects as well as joined projects
* Users can add lists to each individual created project
* Users can add cards to those list s
* Users can fully edit their projects cards while having restrictions on joined projects
* Users can remove other users they added on created projects



