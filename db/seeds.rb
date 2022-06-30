# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
require 'faker'

User.delete_all
Cat.delete_all
Marker.delete_all

puts "Done deleting all 🚧"

5.times do 
    User.create(username: Faker::Internet.unique.username, password: "password")
end

puts "Done seeding users 🏂"

c1 = Cat.create(name: "Marvin", has_owner: true, physical_features: "Tuxedo black cat", fixed_status: true, vet_visit: "01/23/2022", vet_diagnosis: "Healthy", notes: "He likes pawsome food--fish flavored", image: "images/Intro_Marvin.jpg")
c2 = Cat.create(name: "Lila", has_owner: false, physical_features: "Black small cat", fixed_status: true, vet_visit: "Unknown", vet_diagnosis: "unknown", notes: "She likes to take naps in the sun", image: "images/Lila.jpg")
c3 = Cat.create(name: "Binx", has_owner: true, physical_features: "Gray cat with green eyes", fixed_status: true, vet_visit: "Unknown", notes: "He likes to climb ladders", image: "images/Binx.jpg")
c4 = Cat.create(name: "Snoopy", has_owner: false, physical_features: "White cat with black spots", fixed_status: false, vet_visit: "Unknown", vet_diagnosis: "unknown", notes: "N/A", image: "https://images.saymedia-content.com/.image/t_share/MTc0OTY4MDk2OTIxOTU0Mjcy/bicolor-patterns-in-cats.jpg")
c5 = Cat.create(name: "Elliot", has_owner: false, physical_features: "Orange cat with short tail", fixed_status: false, vet_visit: "Unknown", vet_diagnosis: "unknown", notes: "He's a big cat who likes to steal crunchies when he can", image: "https://www.litter-robot.com/media/magefan_blog/2021/02/KURILIAN_BOBTAIL_.jpeg")


puts "Done seeding cats 🐈"


m1 = Marker.create(description: "Cat was on windowsill", image: "images/Binx.jpg", longitude: "-73.9982512301368",latitude: "40.71582478983029", cat_id: c3.id)
m2 = Marker.create(description: "Cat on soft surface", image: "images/Intro_Marvin.jpg", longitude: "-74.00175164473272",latitude: "40.73940602313252", cat_id: c1.id)
m3 = Marker.create(description: "Cat on concrete floor surrounded by grass and was napping", image: "images/Lila.jpg", longitude: "-78.00175164473272",latitude: "45.73940602313252", cat_id: c2.id)
m4 = Marker.create(description: "Cat hissed a bit so I did not approach", image: "https://images.saymedia-content.com/.image/t_share/MTc0OTY4MDk2OTIxOTU0Mjcy/bicolor-patterns-in-cats.jpg", longitude: "-60.00175163373272",latitude: "45.79940602353252", cat_id: c4.id)
m5 = Marker.create(description: "Cat was friendly and nudged my leg when greeted--probably has an owner", image: "https://www.litter-robot.com/media/magefan_blog/2021/02/KURILIAN_BOBTAIL_.jpeg", longitude: "-60.00172163373292",latitude: "45.79945602358232", cat_id: c5.id)

puts "Done seeding markers 🗺"
