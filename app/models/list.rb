class List < ApplicationRecord
  validates :list_name, presence: true
  validates :list_name, uniqueness: { scope: :board_id }

  belongs_to :board,
  foreign_key: :board_id,
  class_name: :Board

  has_many :cards,
  foreign_key: :list_id,
  class_name: :Card,
  dependent: :destroy
  
end