class CreateBoards < ActiveRecord::Migration[5.2]
  def change
    create_table :boards do |t|
      t.string :project_name, null: false
      t.integer :owner_id, null: false
      t.timestamps
    end
    add_index :boards, [:project_name, :owner_id], unique: true
    add_index :boards, :project_name
    add_index :boards, :owner_id
  end
end
