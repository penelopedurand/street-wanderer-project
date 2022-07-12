class MarkerSerializer < ActiveModel::Serializer
  attributes :id, :description, :image, :longitude, :latitude, :cat_id

  belongs_to :cat
end
