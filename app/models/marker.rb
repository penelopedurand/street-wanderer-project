class Marker < ApplicationRecord
    belongs_to :cat
    belongs_to :user

    # validates :description, presence: true
    # # validates :cat_id, presence: true
    # validates :longitude, presence: true
    # validates :latitude, presence: true
end
