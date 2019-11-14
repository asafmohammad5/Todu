class CreateTeamMemberships < ActiveRecord::Migration[5.2]
  def change
    create_table :team_memberships do |t|
      t.integer :board_id, null: false
      t.integer :member_id, null: false
    end

    add_index :team_memberships, :board_id
    add_index :team_memberships, :member_id
  end
end
