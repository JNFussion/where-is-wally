class AddLevelIdToPositions < ActiveRecord::Migration[7.0]
  def change
    add_reference :positions, :level, foreign_key: true
  end
end
