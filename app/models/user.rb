class User < ApplicationRecord
    has_many :cart_details
    has_many :reviews
    has_many :cart_items, through: :cart_details
    has_many :products
    # has_one_attached :image_address_1
    # has_one_attached :image_address_2
    # has_one_attached :image_address_3
    # has_one_attached :image_address_4

    has_secure_password

    validates :username, :email, presence: true

    validates :username, :email, uniqueness: true

    after_create do |user|
        user.cart_details.create
    end
    
    def password=(new_password)
        salt = BCrypt::Engine::generate_salt
        self.password_digest = BCrypt::Engine::hash_secret(new_password, salt)
    end

    def authenticate(password)
        salt = password_digest[0..28]
        return nil unless BCrypt::Engine::hash_secret(password, salt) == self.password_digest
        self
    end
end
