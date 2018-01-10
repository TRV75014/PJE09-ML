class CreatePaintings < ActiveRecord::Migration
  def change
    create_table :paintings do |t|

      t.integer :mark
      t.text :JsonData
      t.belongs_to :parameters
      t.timestamps null: false
    end
  end
end
