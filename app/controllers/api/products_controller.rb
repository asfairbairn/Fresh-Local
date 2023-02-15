class Api::ProductsController < ApplicationController

    before_action :find_product, only: [:show, :update, :destroy]

    skip_before_action :authorize, only: [:index, :show]

    def index
        render json: Product.all
    end

    def show
        render json: @product
    end

    def create
        product = Product.create!(product_params)
        render json: product, status: :created
    end

    def update
        @product.update!(product_params)
        render json: @product, status: :accepted
    end

    def destroy
        @product.destroy
        head :no_content
    end

    private

    def find_product
        @product = Product.find(params[:id])
    end

    def product_params
        params.permit(:name, :product_category_id, :user_id, :image_address_1, :image_address_2, :image_address_3, :image_address_4, :description,  :price, :stock, :organic)
    end

end
