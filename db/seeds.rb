# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


level1 = Level.create(name: "Airport")
level2 = Level.create(name: "Stadium")
level3 = Level.create(name: "Museum")
level4 = Level.create(name: "Sea")
level5 = Level.create(name: "Moon")
level6 = Level.create(name: "Toys")

ch1 = Character.create(name: "wally")
ch2 = Character.create(name: "wenda")
ch3 = Character.create(name: "odlaw")
ch4 = Character.create(name: "whitebeard")
ch5 = Character.create(name: "woof")

for i in [level1, level2, level3, level4, level5, level6] do
  for j in [ch1, ch2, ch3, ch4, ch5] do
    i.characters << j
  end
end



ch1.positions << Position.create(x: 273, y: 223, level_id: level1.id)
ch1.positions << Position.create(x: 266, y: 201, level_id: level2.id)
ch1.positions << Position.create(x: 866, y: 415, level_id: level3.id)
ch1.positions << Position.create(x: 845, y: 474, level_id: level4.id)
ch1.positions << Position.create(x: 389, y: 396, level_id: level5.id)
ch1.positions << Position.create(x: 168, y: 439, level_id: level6.id)

ch2.positions << Position.create(x: 862, y: 417, level_id: level1.id)
ch2.positions << Position.create(x: 237, y: 446, level_id: level2.id)
ch2.positions << Position.create(x: 739, y: 401, level_id: level3.id)
ch2.positions << Position.create(x: 517, y: 431, level_id: level4.id)
ch2.positions << Position.create(x: 279, y: 325, level_id: level5.id)
ch2.positions << Position.create(x: 315, y: 510, level_id: level6.id)

ch3.positions << Position.create(x: 98, y: 414, level_id: level1.id)
ch3.positions << Position.create(x: 583, y: 396, level_id: level2.id)
ch3.positions << Position.create(x: 140, y: 391, level_id: level3.id)
ch3.positions << Position.create(x: 352, y: 454, level_id: level4.id)
ch3.positions << Position.create(x: 54, y: 437, level_id: level5.id)
ch3.positions << Position.create(x: 931, y: 232, level_id: level6.id)

ch4.positions << Position.create(x: 932, y: 501, level_id: level1.id)
ch4.positions << Position.create(x: 595, y: 532, level_id: level2.id)
ch4.positions << Position.create(x: 526, y: 341, level_id: level3.id)
ch4.positions << Position.create(x: 584, y: 434, level_id: level4.id)
ch4.positions << Position.create(x: 766, y: 363, level_id: level5.id)
ch4.positions << Position.create(x: 772, y: 73, level_id: level6.id)

ch5.positions << Position.create(x: 737, y: 467, level_id: level1.id)
ch5.positions << Position.create(x: 595, y: 264, level_id: level2.id)
ch5.positions << Position.create(x: 451, y:295, level_id: level3.id)
ch5.positions << Position.create(x: 626, y: 566, level_id: level4.id)
ch5.positions << Position.create(x: 574, y: 581, level_id: level5.id)
ch5.positions << Position.create(x: 789, y: 555, level_id: level6.id)