class CreateCartDetails < ActiveRecord::Migration[6.1]
  def change
    create_table :cart_details do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.boolean :purchased

      t.timestamps
    end
  end
end
