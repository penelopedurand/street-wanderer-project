class Cat < ApplicationRecord
    has_many :markers, dependent: :destroy
    has_many :sightings
    has_many :users, through: :sightings

    validates :name, presence: true, length: { minimum: 2 }
    validates :physical_features, presence: true, length: { maximum: 500 }
end
