class UsersController < ApplicationController

    before_action :find_user, only: [:update, :destroy]
    before_action :guest, only: [:show]
    skip_before_action :authorize, only: [:show, :create]

    def index
        render json: User.all
    end

    def show
        authorize
        render json: User.find(params[:id])
    end

    def guest
        return if session[:user_id]
        @guest = User.new(:username => "Guest")
        @guest.save(validate: false)
        session[:user_id] = @guest.id
        cart_details = @guest.cart_details.create!
    end

    def create
        user = User.create!(user_params)
        user.cart_details.create!
        session[:user_id] = user.id
        render json: user, status: :created
    end


    def update
        @user.update!(user_params)
        render json: @user, status: :accepted
    end

    def destroy
        @user.destroy
        head :no_content
    end

    private

    def find_user
        @user = User.find(params[:id])
    end

    def user_params
        params.permit(:first_name, :last_name, :email, :phone_number, :street_address, :city, :state, :zip, :username, :password, :password_confirmation, :bio, :image_address_1, :image_address_2, :image_address_3, :image_address_4, :producer)
    end

end
