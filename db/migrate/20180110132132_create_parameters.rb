class CreateParameters < ActiveRecord::Migration
  def change
    create_table :parameters do |t|

      t.integer :nbRectBlack
      t.integer :nbRectWhite
      t.boolean :progressif
      t.belongs_to :users
      t.timestamps null: false
    end
  end
end
