class CreateChecklists < ActiveRecord::Migration[5.2]
  def change
    create_table :checklists do |t|
      t.string :name, null: false
      t.boolean :checked, default: false
      t.integer :card_id, null: false
    end
    add_index :checklists, :name
  end
end
