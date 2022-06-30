class CatsController < ApplicationController
    def index
        cats = Cat.all
        render json: cats, status: :ok
    end

    def show
        cat = find_cat
        render json: cat, status: :ok
    end

    def create
        cat = Cat.create!(cat_params)
        render json: cat, status: :created
    end

    def update
        cat = find_cat
        cat.update!(cat_params) 
        render json: cat, status: :created
    end

    def destroy
        cat = find_cat
        cat.destroy!
        head :no_content, status: :ok
    end

    private
    def cat_params
        params.permit(:name, :name, :has_owner, :physical_features, :fixed_status, :vet_visit, :vet_diagnosis, :notes, :image)
    end
    
    def find_cat
        Cat.find_by!(id: params[:id])
    end

end
