import React from 'react';

export const PERMISSIONS = {
    PRODUCT_CREATE: 'product.create',
    PRODUCT_EDIT: 'product.edit',
    PRODUCT_SHOW: 'product.show',
    PRODUCT_LIST: 'product.list',
    PRODUCT_ORDER: 'product.order',
    CATEGORY_CREATE: 'category.create',
    CATEGORY_EDIT: 'category.edit',
    CATEGORY_SHOW: 'category.show',
    CATEGORY_LIST: 'category.list',
    CATEGORY_REORDER: 'category.reorder',
    CUSTOMER_CREATE: 'customer.create',
    CUSTOMER_EDIT: 'customer.edit',
    CUSTOMER_SHOW: 'customer.show',
    CUSTOMER_LIST: 'customer.list',
    CUSTOMER_DELETE: 'customer.delete',
    CUSTOMER_PRINT_EDIT: 'customer.printEdit',
    ORDER_EDIT: 'order.edit',
    ORDER_SHOW: 'order.show',
    ORDER_LIST: 'order.list',
    ORDER_CREATE: 'order.create',
    ORDER_CANCEL: 'order.cancel',
    OFFICE_CREATE: 'office.create',
    OFFICE_EDIT: 'office.edit',
    OFFICE_SHOW: 'office.show',
    OFFICE_LIST: 'office.list',
    BILL_CREATE: 'bill.create',
    BILL_EDIT: 'bill.edit',
    BILL_SHOW: 'bill.show',
    BILL_LIST: 'bill.list',
    POSTSALE_CREATE: 'postsale.create',
    POSTSALE_EDIT: 'postsale.edit',
    POSTSALE_SHOW: 'postsale.show',
    POSTSALE_LIST: 'postsale.list',
    POSTSALE_SYNC: 'postsale.sync',
    POSTSALE_RECEIVED: 'postsale.received',
    PAYMENT_CREATE: 'payment.create',
    PAYMENT_EDIT: 'payment.edit',
    PAYMENT_SHOW: 'payment.show',
    PAYMENT_LIST: 'payment.list',
    REPORT_CREATE: 'report.create',
    REPORT_EDIT: 'report.edit',
    REPORT_SHOW: 'report.show',
    REPORT_LIST: 'report.list',
    USER_CREATE: 'user.create',
    USER_EDIT: 'user.edit',
    USER_SHOW: 'user.show',
    USER_LIST: 'user.list',
    SECURITY_CREATE: 'security.create',
    SECURITY_EDIT: 'security.edit',
    SECURITY_SHOW: 'security.show',
    SECURITY_LIST: 'security.list',
    LOCALITY_CREATE: 'locality.create',
    LOCALITY_EDIT: 'locality.edit',
    LOCALITY_SHOW: 'locality.show',
    LOCALITY_LIST: 'locality.list',
    TEMPLATE_CREATE: 'template.create',
    TEMPLATE_EDIT: 'template.edit',
    TEMPLATE_SHOW: 'template.show',
    TEMPLATE_LIST: 'template.list',
    RESOLUTION_CREATE: 'resolution.create',
    RESOLUTION_EDIT: 'resolution.edit',
    RESOLUTION_SHOW: 'resolution.show',
    RESOLUTION_LIST: 'resolution.list',
    CONFIG_CREATE: 'config.create',
    CONFIG_EDIT: 'config.edit',
    CONFIG_SHOW: 'config.show',
    CONFIG_LIST: 'config.list',
    COMMENT_CREATE: 'comment.create',
    COMMENT_EDIT: 'comment.edit',
    COMMENT_SHOW: 'comment.show',
    COMMENT_LIST: 'comment.list',
    COMMENT_DELETE: 'comment.delete',
    ORDER_PERSONAL: 'order.personal',
    OFFICE_DOWNLOAD: 'office.download',
    BILL_DOWNLOAD: 'bill.download',
    POSTSALE_DOWNLOAD: 'postsale.download',
    CATEGORY_DOWNLOAD: 'category.download',
    DELIVERY_LOCALITY_CREATE: 'deliverylocality.create',
    DELIVERY_LOCALITY_EDIT: 'deliverylocality.edit',
    DELIVERY_LOCALITY_SHOW: 'deliverylocality.show',
    DELIVERY_LOCALITY_LIST: 'deliverylocality.list',
    WALLET_CREATE: 'wallet.create',
    WALLET_EDIT: 'wallet.edit',
    WALLET_SHOW: 'wallet.show',
    WALLET_LIST: 'wallet.list',
};
export const hasPermissionAccess = (roles, permission) => {
    return true;
    //return roles.includes(permission);
}
