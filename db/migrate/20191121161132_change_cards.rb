class ChangeCards < ActiveRecord::Migration[5.2]
  def change
    change_column :cards, :due_date, :date
  end
end
