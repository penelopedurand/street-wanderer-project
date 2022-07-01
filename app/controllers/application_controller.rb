class ApplicationController < ActionController::API
    include ActionController::Cookies
    
    rescue_from ActiveRecord::RecordNotFound, with: :not_found
    before_action :authorize

    private
    def not_found(error_obj)
      render json: {error: "#{error_obj.model} not found"}, status: :not_found
    end

    def authorize
      @current_user = User.find_by(id: session[:user_id])
  
      render json: { errors: ["Not authorized"] }, status: :unauthorized unless @current_user
    end
end
