class SubteamMembership < ApplicationRecord
  belongs_to :card,
  foreign_key: :card_id,
  class_name: :Card

  belongs_to :member,
  foreign_key: :user_id,
  class_name: :User
end