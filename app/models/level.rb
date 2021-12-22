class Level < ApplicationRecord
  has_and_belongs_to_many :characters
  has_and_belongs_to_many :users
end
