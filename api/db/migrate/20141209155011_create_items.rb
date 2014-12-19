class CreateItems < ActiveRecord::Migration
  def change
    create_table :items do |t|
      t.string :produto
      t.string :quantidade
      t.timestamps
    end
  end
end
