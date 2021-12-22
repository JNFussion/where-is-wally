class CharactersLevels < ActiveRecord::Migration[7.0]
  def change
    create_join_table :levels, :characters
  end
end
