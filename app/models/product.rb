class Product < ApplicationRecord
  belongs_to :user
  belongs_to :product_category
  has_many :cart_items
  has_many :cart_details, through: :cart_items
end
