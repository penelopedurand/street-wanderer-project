class CreateSightings < ActiveRecord::Migration[7.0]
  def change
    create_table :sightings do |t|
      t.integer :user_id
      t.integer :cat_id

      t.timestamps
    end
  end
end
