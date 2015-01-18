'use strict';

angular.module('listacompraApp')
.factory('product', ['$resource', function($resource) {
			return $resource ('http://localhost:3000/items/:id.json', {id: "@id"},
				{ 
					'update':  { method: 'PUT' }
				}
			);
	}	]
);

