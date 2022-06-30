class CreateCats < ActiveRecord::Migration[7.0]
  def change
    create_table :cats do |t|
      t.string :name
      t.boolean :has_owner
      t.string :physical_features
      t.boolean :fixed_status
      t.string :vet_visit
      t.string :vet_diagnosis
      t.string :notes
      t.string :image

      t.timestamps
    end
  end
end
