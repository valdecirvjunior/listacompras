class Item < ActiveRecord::Base
	validates_presence_of :produto, :quantidade, :message => " - Deve ser preenchido"
	validates_uniqueness_of :produto
end
