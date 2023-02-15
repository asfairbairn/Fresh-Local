class CartDetailSerializer < ActiveModel::Serializer
  attributes :id, :purchased
  has_one :user
  has_many :cart_items
end
