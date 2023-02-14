class Product < ApplicationRecord
  belongs_to :user
  belongs_to :product_category
  has_many :cart_items
  has_many :cart_details, through: :cart_items
  has_many :reviews, dependent: :destroy
  has_one_attached :image_address_1
  has_one_attached :image_address_2
  has_one_attached :image_address_3
  has_one_attached :image_address_4
end
