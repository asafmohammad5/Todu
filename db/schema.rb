# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_11_21_161132) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "boards", force: :cascade do |t|
    t.string "project_name", null: false
    t.integer "owner_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["owner_id"], name: "index_boards_on_owner_id"
    t.index ["project_name", "owner_id"], name: "index_boards_on_project_name_and_owner_id", unique: true
    t.index ["project_name"], name: "index_boards_on_project_name"
  end

  create_table "cards", force: :cascade do |t|
    t.string "card_name", null: false
    t.string "description", null: false
    t.date "due_date"
    t.text "comments"
    t.integer "list_id", null: false
    t.index ["card_name", "list_id"], name: "index_cards_on_card_name_and_list_id", unique: true
    t.index ["card_name"], name: "index_cards_on_card_name"
  end

  create_table "checklists", force: :cascade do |t|
    t.string "name", null: false
    t.boolean "checked", default: false
    t.integer "card_id", null: false
    t.index ["name"], name: "index_checklists_on_name"
  end

  create_table "lists", force: :cascade do |t|
    t.string "list_name", null: false
    t.integer "board_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["list_name", "board_id"], name: "index_lists_on_list_name_and_board_id", unique: true
    t.index ["list_name"], name: "index_lists_on_list_name"
  end

  create_table "subteam_memberships", force: :cascade do |t|
    t.integer "card_id", null: false
    t.integer "user_id", null: false
    t.index ["card_id"], name: "index_subteam_memberships_on_card_id"
    t.index ["user_id"], name: "index_subteam_memberships_on_user_id"
  end

  create_table "team_memberships", force: :cascade do |t|
    t.integer "board_id", null: false
    t.integer "member_id", null: false
    t.index ["board_id"], name: "index_team_memberships_on_board_id"
    t.index ["member_id"], name: "index_team_memberships_on_member_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

end
