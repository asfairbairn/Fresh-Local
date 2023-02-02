class ProductSerializer < ActiveModel::Serializer
  attributes :id, :price, :stock, :name, :date_harvested, :organic, :image_address_1, :image_address_2, :image_address_3, :image_address_4, :description
  has_one :user
  has_one :product_category
end
