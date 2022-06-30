class Marker < ApplicationRecord
    belongs_to :cat

    validates :description, presence: true
    # validates :cat_id, presence: true
    validates :longitude, presence: true
    validates :latitude, presence: true
end
