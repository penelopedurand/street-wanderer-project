class User < ApplicationRecord
    has_secure_password
    has_many :sightings
    has_many :cats, through: :sightings

    validates :username, presence: true, length: {minimum:  4, maximum: 25}, format: { with: /\A[a-z0-9A-Z ]+\z/, message: "Username can only contain letters and numbers" }
    validates :username, uniqueness: true
    validates :password, presence: true, length: {minimum: 6, maximum: 25}, format: {with: /\A^(?=.{8,32}$)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).*/, message: "Should contain: at least on lower and uppercase letter, one number, and should be a length between 8 - 32 characters"}
    validates :password, confirmation: true, on: :create
    validates :password_confirmation, presence: true, on: :create
    validate :unpremitted_username

    def unpremitted_username
           unless username.starts_with?(/\A[A-Z]/)
            errors.add(:unpremitted_username, ": Meowdy! Username must begin with a capital letter")
          end
    end
end
