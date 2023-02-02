# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2023_02_01_232059) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "cart_details", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.boolean "purchased"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_cart_details_on_user_id"
  end

  create_table "cart_items", force: :cascade do |t|
    t.bigint "cart_detail_id", null: false
    t.bigint "product_id", null: false
    t.integer "quantity"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["cart_detail_id"], name: "index_cart_items_on_cart_detail_id"
    t.index ["product_id"], name: "index_cart_items_on_product_id"
  end

  create_table "product_categories", force: :cascade do |t|
    t.string "category_name"
    t.string "category_description"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "products", force: :cascade do |t|
    t.float "price"
    t.bigint "user_id", null: false
    t.bigint "product_category_id", null: false
    t.integer "stock"
    t.string "name"
    t.string "date_harvested"
    t.boolean "organic"
    t.string "image_address_1"
    t.string "image_address_2"
    t.string "image_address_3"
    t.string "image_address_4"
    t.text "description"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["product_category_id"], name: "index_products_on_product_category_id"
    t.index ["user_id"], name: "index_products_on_user_id"
  end

  create_table "reviews", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.text "review"
    t.integer "star_rating"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_reviews_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.string "phone_number"
    t.string "street_address"
    t.string "city"
    t.string "state"
    t.string "zip"
    t.string "username"
    t.string "password_digest"
    t.text "bio"
    t.string "image_address_1"
    t.string "image_address_2"
    t.string "image_address_3"
    t.string "image_address_4"
    t.boolean "producer"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "cart_details", "users"
  add_foreign_key "cart_items", "cart_details"
  add_foreign_key "cart_items", "products"
  add_foreign_key "products", "product_categories"
  add_foreign_key "products", "users"
  add_foreign_key "reviews", "users"
end
