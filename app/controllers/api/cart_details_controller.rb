class Api::CartDetailsController < ApplicationController

    before_action :find_cart_details, only: [:show]

    skip_before_action :authorize

    def show
        render json: @cart_details.cart_items
    end


    def create
        cart_detail = CartDetail.create!(user_id: session[:user_id])
        render json: cart_detail.cart_items, status: :created
    end

    private

    def find_cart_details
        @cart_details = User.find(params[:id]).cart_details.last
    end
    
end
