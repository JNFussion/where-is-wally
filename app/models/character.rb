class Character < ApplicationRecord
  has_and_belongs_to_many :levels
  has_many :positions
end
