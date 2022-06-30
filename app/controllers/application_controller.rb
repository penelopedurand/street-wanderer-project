class ApplicationController < ActionController::API
    include ActionController::Cookies
    
    rescue_from ActiveRecord::RecordNotFound, with: :not_found

    private
    def not_found(error_obj)
      render json: {error: "#{error_obj.model} not found"}, status: :not_found
    end
end
