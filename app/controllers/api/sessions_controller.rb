class Api::SessionsController < ApplicationController

    skip_before_action :authorize, only: [:create, :show, :destroy]


    def show
        @current_user = User.find_by(id: session[:user_id])
        if !@current_user
            @current_user = User.new(:username => "Guest")
            @current_user.save(validate: false)
            session[:user_id] = @current_user.id
            cart_details = @current_user.cart_details.create!
        end
        render json: @current_user
    end
    

    def create
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: { error: ["Invalid username or password"] }, status: :unauthorized
        end
    end

    def destroy
        session.delete :user_id
        head :no_content
    end
end
