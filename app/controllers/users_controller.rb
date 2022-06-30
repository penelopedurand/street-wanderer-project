class UsersController < ApplicationController
    # skip_before_action :authorize, only: :create
    rescue_from ActiveRecord::RecordInvalid, with: :invalid

 def create
    user = User.create!(user_params)
    session[:current_user] = user.id
    render json: user, status: :created
  end

  def index
    users = User.all 
    render json: users, status: :ok
  end

  def show
    user = User.find_by(id: session[:current_user])
    if user
        render json: user, status: :ok
    else
        render json: { error: "not signed in" }, status: :unauthorized
    end
end

    private
    def user_params
        params.permit(:username, :password)
    end

    def invalid (exception)
        render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end

end
