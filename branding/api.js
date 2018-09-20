var rs = require('http/v3/rs');
var configurations = require('core/v3/configurations');

var DIRIGIBLE_BRANDING_NAME = 'DIRIGIBLE_BRANDING_NAME';
var DIRIGIBLE_BRANDING_NAME_DEFAULT = 'Eclipse Dirigible';

rs.service()
	.resource('')
		.get(function(ctx, request, response) {
			var branding = {
				'name': configurations.get(DIRIGIBLE_BRANDING_NAME, DIRIGIBLE_BRANDING_NAME_DEFAULT)
			};
            response.println(JSON.stringify(branding));
		})
.execute();
