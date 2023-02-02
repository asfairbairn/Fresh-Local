class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :review, :star_rating
  has_one :user
end
