class CreateSubteamMemberships < ActiveRecord::Migration[5.2]
  def change
    create_table :subteam_memberships do |t|
      t.integer :card_id, null: false
      t.integer :user_id, null: false
    end

    add_index :subteam_memberships, :card_id
    add_index :subteam_memberships, :user_id
  end
end
