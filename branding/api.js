var rs = require('http/v3/rs');
var configurations = require('core/v3/configurations');

var DIRIGIBLE_BRANDING_NAME = 'DIRIGIBLE_BRANDING_NAME';
var DIRIGIBLE_BRANDING_BRAND = 'DIRIGIBLE_BRANDING_BRAND';
var DIRIGIBLE_BRANDING_ICON = 'DIRIGIBLE_BRANDING_ICON';

var DIRIGIBLE_BRANDING_NAME_DEFAULT = 'Eclipse Dirigible';
var DIRIGIBLE_BRANDING_BRAND_DEFAULT = 'Eclipse Dirigible';
var DIRIGIBLE_BRANDING_ICON_DEFAULT = '../../../../services/v3/web/resources/images/favicon.png';

rs.service()
	.resource('')
		.get(function(ctx, request, response) {
			var branding = {
				'name': configurations.get(DIRIGIBLE_BRANDING_NAME, DIRIGIBLE_BRANDING_NAME_DEFAULT),
				'brand': configurations.get(DIRIGIBLE_BRANDING_BRAND, DIRIGIBLE_BRANDING_BRAND_DEFAULT),
				'icon': configurations.get(DIRIGIBLE_BRANDING_ICON, DIRIGIBLE_BRANDING_ICON_DEFAULT)
			};
            response.println(JSON.stringify(branding));
		})
.execute();
