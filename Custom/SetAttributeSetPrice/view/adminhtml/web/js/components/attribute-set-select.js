/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

define([
	'jquery',
    'Magento_Ui/js/form/element/ui-select'
], function ($, Select) {
    'use strict';

    return Select.extend({
        defaults: {
            listens: {
                'value': 'changeFormSubmitUrl'
            },
            modules: {
                formProvider: '${ $.provider }'
            }
        },

        /**
         * Change set parameter in save and validate urls of form
         *
         * @param {String|Number} value
         */
        changeFormSubmitUrl: function (value) {
			
			setTimeout(function () {
            
				var disabledAttr = $("#disabled_attr").val();
				var attrSet = disabledAttr.split(",");
				
				if($.inArray( value, attrSet)){
					$('div[data-index="tax_class_id"]').hide();
					$('fieldset[data-index="container_price"]').find(".admin__control-text").val(parseFloat(0.00).toFixed(2));
					$('fieldset[data-index="container_price"]').hide();
				}else{
					$('div[data-index="tax_class_id"]').show();
					$('fieldset[data-index="container_price"]').val('');
					$('fieldset[data-index="container_price"]').show();
				}
			
			}, 3000);
            var pattern = /(set\/)(\d)*?\//,
                change = '$1' + value + '/';

            this.formProvider().client.urls.save = this.formProvider().client.urls.save.replace(pattern, change);
            this.formProvider().client.urls.beforeSave = this.formProvider().client.urls.beforeSave.replace(
                pattern,
                change
            );
        }
    });
});
