class CartItem < ApplicationRecord
  belongs_to :cart_detail, dependent: :destroy
  belongs_to :product
end
