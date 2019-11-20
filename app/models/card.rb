class Card < ApplicationRecord
  validates :card_name, :description, presence: true
  validates :card_name, uniqueness: { scope: :list_id }

  belongs_to :list,
  foreign_key: :list_id,
  class_name: :List

  has_many :checklists,
  foreign_key: :card_id,
  class_name: :Checklist,
  dependent: :destroy

  has_many :subteam_memberships,
  foreign_key: :card_id,
  class_name: :SubteamMembership,
  dependent: :destroy

  has_many :subteam_members,
  through: :subteam_memberships,
  source: :member,
  dependent: :destroy

end