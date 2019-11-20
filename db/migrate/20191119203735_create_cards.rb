class CreateCards < ActiveRecord::Migration[5.2]
  def change
    create_table :cards do |t|
      t.string :card_name, null: false
      t.string :description, null: false
      t.datetime :due_date
      t.text :comments
      t.integer :list_id, null: false
    end
    add_index :cards, :card_name
    add_index :cards, [:card_name, :list_id], unique: true
  end
end
