class Checklist < ApplicationRecord
  validates :name, presence: true
  validates :checked, inclusion: { in: [true, false] }

  belongs_to :card,
    foreign_key: :card_id,
    class_name: :Card
end