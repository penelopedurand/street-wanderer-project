class User < ApplicationRecord
    has_secure_password
    has_many :sightings
    has_many :cats, through: :sightings

    validates :username, presence: true, length: {minimum:  4, maximum: 25}
    validates :username, uniqueness: true
    validates :password, presence: true, length: {minimum: 6, maximum: 25}
    validates :password, confirmation: true, on: :create
    validates :password_confirmation, presence: true, on: :create
end
