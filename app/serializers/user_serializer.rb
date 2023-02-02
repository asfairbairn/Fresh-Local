class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :phone_number, :street_address, :city, :state, :zip, :username, :password_digest, :bio, :image_address_1, :image_address_2, :image_address_3, :image_address_4, :producer
end
