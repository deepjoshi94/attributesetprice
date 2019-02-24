<?php

namespace Custom\SetAttributeSetPrice\Block\Adminhtml\Catalog\Product\Edit\Tab;

use Magento\Backend\Block\Template\Context;
use Magento\Framework\Registry;
use Magento\Framework\View\Element\Template;
use Magento\Framework\App\Config\ScopeConfigInterface;
use Magento\Store\Model\ScopeInterface;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of SetDefault
 *
 * @author Admin
 */
class SetPrice extends Template{
    
    protected $_template = 'product/edit/setprice.phtml';
    protected $_qrcodeListFactory;
    protected $fileName;
    
    const XML_PATH_ATTRIBUTE_SETS = 'catalog/disable_set/attribute_sets';
    
    protected $_coreRegistry = null;
    
    public function __construct(
        Context $context,
        Registry $registry,
        ScopeConfigInterface $scopeConfig,
        array $data = []
    ) {
        $this->_coreRegistry = $registry;
        $this->scopeConfig = $scopeConfig;
        parent::__construct($context, $data);
    }
    
    public function getProduct() {
        return $this->_coreRegistry->registry('current_product');
    }
    
    public function test() {
        return 123;
    }
    
     public function getDisabledAttributes() {
        return $this->scopeConfig->getValue(self::XML_PATH_ATTRIBUTE_SETS, ScopeInterface::SCOPE_STORE);
     }
}
