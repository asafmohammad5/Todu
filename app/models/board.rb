class Board < ApplicationRecord
  validates :project_name, presence: true
  validates :project_name, uniqueness: { scope: :owner_id }

  belongs_to :user,
  foreign_key: :owner_id,
  class_name: :User

  has_many :lists,
  foreign_key: :board_id,
  class_name: :List,
  dependent: :destroy

  has_many :team_memberships,
  foreign_key: :board_id,
  class_name: :TeamMembership,
  dependent: :destroy
 
  has_many :members,
  through: :team_memberships,
  source: :member,
  dependent: :destroy

  has_many :cards,
  through: :lists,
  source: :cards
end