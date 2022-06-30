class CatSerializer < ActiveModel::Serializer
  attributes :id, :name, :has_owner, :physical_features, :fixed_status, :vet_visit, :vet_diagnosis, :notes, :image
end
