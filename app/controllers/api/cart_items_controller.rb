class Api::CartItemsController < ApplicationController

    before_action :find_cart_item, only: [:show, :update, :destroy]


    def show
        render json: @cart_item
    end
    
    def create
        cart_detail = @current_user.cart_details.last
        cart_item = cart_detail.cart_items.create!(cart_item_params)
        render json: cart_item, status: :created
    end

    def update
        @cart_item.update!(params.permit(:quantity))
        render json: @cart_item, status: :accepted
    end

    def destroy
        @cart_item.destroy
        head :no_content
    end
    
    private

    def find_cart_item
        @cart_item = CartItem.find(params[:id])
    end

    def cart_item_params
        params.permit(:product_id, :quantity, :size)
    end

end
