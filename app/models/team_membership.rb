class TeamMembership < ApplicationRecord
  belongs_to :board,
  foreign_key: :board_id,
  class_name: :Board

  belongs_to :member,
  foreign_key: :member_id,
  class_name: :User
end