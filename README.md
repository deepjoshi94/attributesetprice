# attributesetprice
Hide price and tax for selected attribute sets

As we have to hide price and tax for attribute sets, we need to remove price as a mandantory field.

Go to your admin panel, click **Stores** > **Attributes** > **Product** > **Price** > **Attribute Properties** > **Values Required** > **No** > **Save Attribute**

Place **Custom** folder under app/code and run php bin/magento setup:upgrade