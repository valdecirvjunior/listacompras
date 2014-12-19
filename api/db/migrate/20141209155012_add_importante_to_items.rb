class AddImportanteToItems < ActiveRecord::Migration
  def change
  	add_column :items, :importante, :boolean, default:false

  end
end
