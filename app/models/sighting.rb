class Sighting < ApplicationRecord
    belongs_to :cat
    belongs_to :user

    validates :user_id, presence: true
    validates :cat_id, optional: true
end
