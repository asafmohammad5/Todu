class CreateLists < ActiveRecord::Migration[5.2]
  def change
    create_table :lists do |t|
      t.string :list_name, null: false
      t.integer :board_id, null: false
      t.timestamps
    end
    add_index :lists, [:list_name, :board_id], unique: true
    add_index :lists, :list_name
  end
end
