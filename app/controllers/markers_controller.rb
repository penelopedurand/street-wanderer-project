class MarkersController < ApplicationController
    def index
        markers = Marker.all 
        render json: markers, status: :ok
    end

    def show
        marker = find_marker
        render json: marker, status: :ok
    end
    
    def create
        marker = Marker.create!(marker_params)
        render json: marker, status: :created
    end

    def update
        marker = find_marker
        marker.update!(marker_params)
        render json: marker, status: :created
    end

    def destroy
        marker = find_marker
        marker.destroy!
        head :no_content, status: :ok
    end

    private
    def marker_params
        params.permit(:description, :image, :longitude, :latitude, :cat_id)
    end

    def find_marker
        Marker.find_by!(id: params[:id])
    end

end
