class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.string :email
      t.string :phone_number
      t.string :street_address
      t.string :city
      t.string :state
      t.string :zip
      t.string :username
      t.string :password_digest
      t.text :bio
      t.boolean :producer

      t.timestamps
    end
  end
end
