class CreateItems < ActiveRecord::Migration
  def change
    create_table :items do |t|
      t.string :title
      t.string :artist
      t.text :description
      t.decimal :starting_bid
      t.string :image_url

      t.timestamps null: false
    end
  end
end