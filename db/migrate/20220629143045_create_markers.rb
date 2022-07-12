class CreateMarkers < ActiveRecord::Migration[7.0]
  def change
    create_table :markers do |t|
      t.string :description
      t.string :image
      t.string :longitude
      t.string :latitude
      t.integer :cat_id
      t.integer :user_id

      t.timestamps
    end
  end
end
