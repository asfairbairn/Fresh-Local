class UserSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :first_name, :last_name, :email, :phone_number, :street_address, :city, :state, :zip, :username, :password_digest, :bio, :image_address_1, :image_address_2, :image_address_3, :image_address_4, :producer

  def image_address_1
    if object.image_address_1.attached?
      {
        url: rails_blob_url(object.image_address_1)
      }
    end
  end

  def image_address_2
    if object.image_address_2.attached?
      {
        url: rails_blob_url(object.image_address_2)
      }
    end
  end

  def image_address_3
    if object.image_address_3.attached?
      {
        url: rails_blob_url(object.image_address_3)
      }
    end
  end

  def image_address_4
    if object.image_address_4.attached?
      {
        url: rails_blob_url(object.image_address_4)
      }
    end
  end

end
