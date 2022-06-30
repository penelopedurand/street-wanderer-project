class SightingsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :invalid

    def index 
        sightings = Sighting.all
        render json: sightings, status: :ok
    end

    def show
        sighting = find_sighting
        render json: sighting, status: :ok
    end 

    def create 
        sighting = Sighting.create!(sighting_params)
        render json: sighting, status: :created
    end 

    private
    def sighting_params
        params.permit(:user_id, :cat_id)
    end 

    def find_sighting
        Sighting.find_by!(id: params[:id])
    end 

    def invalid (exception)
        render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end
end
