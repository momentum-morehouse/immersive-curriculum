# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

items = [
  {
    title: "Fuji from Inume Pass",
    artist: "Katsushika Hokusai",
    description: "Polychrome woodblock print; ink and color on paper",
    image_url: "https://images.metmuseum.org/CRDImages/as/web-large/DP141029.jpg",
    starting_bid: 5000.00
  },
  {
    title: "Lady at the Tea Table",
    artist: "Mary Cassatt",
    description: "Oil on canvas",
    image_url: "https://images.metmuseum.org/CRDImages/ap/web-large/DT516.jpg",
    starting_bid: 15000.00
  },
  {
    title: "Rue Eugène Moussoir at Moret: Winter",
    artist: "Alfred Sisley",
    description: "Oil on canvas",
    image_url: "https://images.metmuseum.org/CRDImages/ep/web-large/DT1907.jpg",
    starting_bid: 8000.00
  },
  {
    title: "Colombian Masked Figure Pendant",
    artist: "",
    description: "Gold",
    image_url: "https://images.metmuseum.org/CRDImages/ao/web-large/DP160743.jpg",
    starting_bid: 22000.00
  },
  {
    title: "Southern Gardens",
    artist: "Paul Klee",
    description: "Watercolor and ink on paper mounted on cardboard",
    image_url: "https://images.metmuseum.org/CRDImages/ma/web-large/DT229524.jpg",
    starting_bid: 71400.00
  }
]

items.each do |item|
  Item.create(item)
end
