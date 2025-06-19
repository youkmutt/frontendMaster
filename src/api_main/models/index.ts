/* tslint:disable */
/* eslint-disable */
/**
 * 
 * @export
 * @interface APCNRebateDetail
 */
export interface APCNRebateDetail {
    /**
     * 
     * @type {number}
     * @memberof APCNRebateDetail
     */
    brandId?: number;
    /**
     * 
     * @type {string}
     * @memberof APCNRebateDetail
     */
    brandName?: string;
    /**
     * 
     * @type {number}
     * @memberof APCNRebateDetail
     */
    rebateAmount?: number;
    /**
     * 
     * @type {string}
     * @memberof APCNRebateDetail
     */
    rebateDetail?: string;
    /**
     * 
     * @type {string}
     * @memberof APCNRebateDetail
     */
    cnNo?: string;
    /**
     * 
     * @type {string}
     * @memberof APCNRebateDetail
     */
    cnDate?: string;
}
/**
 * 
 * @export
 * @interface APCNSupplierDetail
 */
export interface APCNSupplierDetail {
    /**
     * 
     * @type {string}
     * @memberof APCNSupplierDetail
     */
    createDate?: string;
    /**
     * 
     * @type {string}
     * @memberof APCNSupplierDetail
     */
    rebateCode?: string;
    /**
     * 
     * @type {string}
     * @memberof APCNSupplierDetail
     */
    supplierId?: string;
    /**
     * 
     * @type {string}
     * @memberof APCNSupplierDetail
     */
    supplierCode?: string;
    /**
     * 
     * @type {string}
     * @memberof APCNSupplierDetail
     */
    taxPayerId?: string;
    /**
     * 
     * @type {string}
     * @memberof APCNSupplierDetail
     */
    revenueBranchCode?: string;
    /**
     * 
     * @type {string}
     * @memberof APCNSupplierDetail
     */
    supplierName?: string;
    /**
     * 
     * @type {string}
     * @memberof APCNSupplierDetail
     */
    fullAddress?: string;
    /**
     * 
     * @type {number}
     * @memberof APCNSupplierDetail
     */
    provinceId?: number;
    /**
     * 
     * @type {number}
     * @memberof APCNSupplierDetail
     */
    districtId?: number;
    /**
     * 
     * @type {number}
     * @memberof APCNSupplierDetail
     */
    subDistrictId?: number;
    /**
     * 
     * @type {string}
     * @memberof APCNSupplierDetail
     */
    zipCode?: string;
    /**
     * 
     * @type {string}
     * @memberof APCNSupplierDetail
     */
    telephone?: string;
    /**
     * 
     * @type {string}
     * @memberof APCNSupplierDetail
     */
    email?: string;
}
/**
 * 
 * @export
 * @interface APCNTotal
 */
export interface APCNTotal {
    /**
     * 
     * @type {number}
     * @memberof APCNTotal
     */
    amount?: number;
    /**
     * 
     * @type {number}
     * @memberof APCNTotal
     */
    vat?: number;
    /**
     * 
     * @type {number}
     * @memberof APCNTotal
     */
    total?: number;
}

/**
 * 
 * @export
 */
export const APCNstatus = {
    NUMBER_1: 1,
    NUMBER_2: 2,
    NUMBER_3: 3,
    NUMBER_4: 4,
    NUMBER_MINUS_1: -1
} as const;
export type APCNstatus = typeof APCNstatus[keyof typeof APCNstatus];

/**
 * 
 * @export
 * @interface ARCNCustomerDetail
 */
export interface ARCNCustomerDetail {
    /**
     * 
     * @type {string}
     * @memberof ARCNCustomerDetail
     */
    rebateCode?: string;
    /**
     * 
     * @type {string}
     * @memberof ARCNCustomerDetail
     */
    rebateDetail?: string;
    /**
     * 
     * @type {string}
     * @memberof ARCNCustomerDetail
     */
    taxPayerId?: string;
    /**
     * 
     * @type {string}
     * @memberof ARCNCustomerDetail
     */
    revenueBranchCode?: string;
    /**
     * 
     * @type {string}
     * @memberof ARCNCustomerDetail
     */
    customerName?: string;
    /**
     * 
     * @type {string}
     * @memberof ARCNCustomerDetail
     */
    fullAddress?: string;
    /**
     * 
     * @type {number}
     * @memberof ARCNCustomerDetail
     */
    provinceId?: number;
    /**
     * 
     * @type {number}
     * @memberof ARCNCustomerDetail
     */
    districtId?: number;
    /**
     * 
     * @type {number}
     * @memberof ARCNCustomerDetail
     */
    subDistrictId?: number;
    /**
     * 
     * @type {string}
     * @memberof ARCNCustomerDetail
     */
    zipCode?: string;
    /**
     * 
     * @type {string}
     * @memberof ARCNCustomerDetail
     */
    telephone?: string;
    /**
     * 
     * @type {string}
     * @memberof ARCNCustomerDetail
     */
    email?: string;
}
/**
 * 
 * @export
 * @interface ARCNInHouseCampaignDetail
 */
export interface ARCNInHouseCampaignDetail {
    /**
     * 
     * @type {string}
     * @memberof ARCNInHouseCampaignDetail
     */
    campaignName?: string;
    /**
     * 
     * @type {number}
     * @memberof ARCNInHouseCampaignDetail
     */
    supConSale?: number;
    /**
     * 
     * @type {string}
     * @memberof ARCNInHouseCampaignDetail
     */
    startDate?: string;
    /**
     * 
     * @type {string}
     * @memberof ARCNInHouseCampaignDetail
     */
    endDate?: string;
}
/**
 * 
 * @export
 * @interface ARCNInHouseCustomerDetail
 */
export interface ARCNInHouseCustomerDetail {
    /**
     * 
     * @type {string}
     * @memberof ARCNInHouseCustomerDetail
     */
    rebateCode?: string;
    /**
     * 
     * @type {string}
     * @memberof ARCNInHouseCustomerDetail
     */
    taxPayerId?: string;
    /**
     * 
     * @type {string}
     * @memberof ARCNInHouseCustomerDetail
     */
    revenueBranchCode?: string;
    /**
     * 
     * @type {string}
     * @memberof ARCNInHouseCustomerDetail
     */
    customerName?: string;
    /**
     * 
     * @type {string}
     * @memberof ARCNInHouseCustomerDetail
     */
    fullAddress?: string;
    /**
     * 
     * @type {number}
     * @memberof ARCNInHouseCustomerDetail
     */
    provinceId?: number;
    /**
     * 
     * @type {number}
     * @memberof ARCNInHouseCustomerDetail
     */
    districtId?: number;
    /**
     * 
     * @type {number}
     * @memberof ARCNInHouseCustomerDetail
     */
    subDistrictId?: number;
    /**
     * 
     * @type {string}
     * @memberof ARCNInHouseCustomerDetail
     */
    zipCode?: string;
    /**
     * 
     * @type {string}
     * @memberof ARCNInHouseCustomerDetail
     */
    telephone?: string;
    /**
     * 
     * @type {string}
     * @memberof ARCNInHouseCustomerDetail
     */
    email?: string;
}
/**
 * 
 * @export
 * @interface ARCNInHousePeriodSale
 */
export interface ARCNInHousePeriodSale {
    /**
     * 
     * @type {number}
     * @memberof ARCNInHousePeriodSale
     */
    rowNumber?: number;
}
/**
 * 
 * @export
 * @interface ARCNRebateDetail
 */
export interface ARCNRebateDetail {
    /**
     * 
     * @type {string}
     * @memberof ARCNRebateDetail
     */
    supplierName?: string;
    /**
     * 
     * @type {number}
     * @memberof ARCNRebateDetail
     */
    rebateAmount?: number;
    /**
     * 
     * @type {number}
     * @memberof ARCNRebateDetail
     */
    brandId?: number;
    /**
     * 
     * @type {string}
     * @memberof ARCNRebateDetail
     */
    brandName?: string;
    /**
     * 
     * @type {string}
     * @memberof ARCNRebateDetail
     */
    rebateDetail?: string;
    /**
     * 
     * @type {string}
     * @memberof ARCNRebateDetail
     */
    cnNo?: string;
    /**
     * 
     * @type {string}
     * @memberof ARCNRebateDetail
     */
    cnDate?: string;
}
/**
 * 
 * @export
 * @interface ARCNTotal
 */
export interface ARCNTotal {
    /**
     * 
     * @type {number}
     * @memberof ARCNTotal
     */
    amount?: number;
    /**
     * 
     * @type {number}
     * @memberof ARCNTotal
     */
    vat?: number;
    /**
     * 
     * @type {number}
     * @memberof ARCNTotal
     */
    total?: number;
}

/**
 * 
 * @export
 */
export const ARCNstatus = {
    NUMBER_1: 1,
    NUMBER_2: 2,
    NUMBER_3: 3,
    NUMBER_4: 4,
    NUMBER_MINUS_1: -1
} as const;
export type ARCNstatus = typeof ARCNstatus[keyof typeof ARCNstatus];

/**
 * 
 * @export
 * @interface ApprovalAPCNDetailModel
 */
export interface ApprovalAPCNDetailModel {
    /**
     * 
     * @type {number}
     * @memberof ApprovalAPCNDetailModel
     */
    rbtCnapId?: number;
    /**
     * 
     * @type {APCNSupplierDetail}
     * @memberof ApprovalAPCNDetailModel
     */
    supplierDetail?: APCNSupplierDetail;
    /**
     * 
     * @type {APCNRebateDetail}
     * @memberof ApprovalAPCNDetailModel
     */
    rebateDetail?: APCNRebateDetail;
    /**
     * 
     * @type {string}
     * @memberof ApprovalAPCNDetailModel
     */
    remark?: string;
    /**
     * 
     * @type {APCNTotal}
     * @memberof ApprovalAPCNDetailModel
     */
    cnTotal?: APCNTotal;
    /**
     * 
     * @type {Array<AttachmentModel>}
     * @memberof ApprovalAPCNDetailModel
     */
    attachment?: Array<AttachmentModel>;
    /**
     * 
     * @type {TaxWithholdingModel}
     * @memberof ApprovalAPCNDetailModel
     */
    taxWithholding?: TaxWithholdingModel;
    /**
     * 
     * @type {Array<VoucherModel>}
     * @memberof ApprovalAPCNDetailModel
     */
    voucher?: Array<VoucherModel>;
    /**
     * 
     * @type {Array<TransactionHistoryModel>}
     * @memberof ApprovalAPCNDetailModel
     */
    history?: Array<TransactionHistoryModel>;
    /**
     * 
     * @type {number}
     * @memberof ApprovalAPCNDetailModel
     */
    workflowId?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalAPCNDetailModel
     */
    currentStepId?: number;
}
/**
 * 
 * @export
 * @interface ApprovalAPCNDetailModelBaseResponseModel
 */
export interface ApprovalAPCNDetailModelBaseResponseModel {
    /**
     * 
     * @type {boolean}
     * @memberof ApprovalAPCNDetailModelBaseResponseModel
     */
    success?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ApprovalAPCNDetailModelBaseResponseModel
     */
    message?: string;
    /**
     * 
     * @type {number}
     * @memberof ApprovalAPCNDetailModelBaseResponseModel
     */
    statusCode?: number;
    /**
     * 
     * @type {ApprovalAPCNDetailModel}
     * @memberof ApprovalAPCNDetailModelBaseResponseModel
     */
    data?: ApprovalAPCNDetailModel;
}
/**
 * 
 * @export
 * @interface ApprovalAPCNModel
 */
export interface ApprovalAPCNModel {
    /**
     * 
     * @type {number}
     * @memberof ApprovalAPCNModel
     */
    rowNumber?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalAPCNModel
     */
    companyId?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalAPCNModel
     */
    organizationId?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalAPCNModel
     */
    ownerUserId?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalAPCNModel
     */
    rbtCnapId?: number;
    /**
     * 
     * @type {string}
     * @memberof ApprovalAPCNModel
     */
    rebateCode?: string;
    /**
     * 
     * @type {string}
     * @memberof ApprovalAPCNModel
     */
    cnDate?: string;
    /**
     * 
     * @type {string}
     * @memberof ApprovalAPCNModel
     */
    brandName?: string;
    /**
     * 
     * @type {string}
     * @memberof ApprovalAPCNModel
     */
    cnNo?: string;
    /**
     * 
     * @type {number}
     * @memberof ApprovalAPCNModel
     */
    rebateAmount?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalAPCNModel
     */
    cnAmount?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalAPCNModel
     */
    vat?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalAPCNModel
     */
    amountIncludeVat?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalAPCNModel
     */
    workflowId?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalAPCNModel
     */
    currentStepId?: number;
    /**
     * 
     * @type {APCNstatus}
     * @memberof ApprovalAPCNModel
     */
    trnStatus?: APCNstatus;
}


/**
 * 
 * @export
 * @interface ApprovalAPCNResponseModel
 */
export interface ApprovalAPCNResponseModel {
    /**
     * 
     * @type {boolean}
     * @memberof ApprovalAPCNResponseModel
     */
    success?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ApprovalAPCNResponseModel
     */
    message?: string;
    /**
     * 
     * @type {number}
     * @memberof ApprovalAPCNResponseModel
     */
    statusCode?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalAPCNResponseModel
     */
    pageIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalAPCNResponseModel
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalAPCNResponseModel
     */
    pageAll?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalAPCNResponseModel
     */
    totalRecord?: number;
    /**
     * 
     * @type {Array<ApprovalAPCNModel>}
     * @memberof ApprovalAPCNResponseModel
     */
    data?: Array<ApprovalAPCNModel>;
    /**
     * 
     * @type {number}
     * @memberof ApprovalAPCNResponseModel
     */
    workflowId?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalAPCNResponseModel
     */
    approvalTotal?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalAPCNResponseModel
     */
    approvalConfirmed?: number;
    /**
     * 
     * @type {Array<BaseCountStatusModel>}
     * @memberof ApprovalAPCNResponseModel
     */
    countStatusList?: Array<BaseCountStatusModel>;
}
/**
 * 
 * @export
 * @interface ApprovalARCNClaimDetailModel
 */
export interface ApprovalARCNClaimDetailModel {
    /**
     * 
     * @type {number}
     * @memberof ApprovalARCNClaimDetailModel
     */
    trnClaimId?: number;
    /**
     * 
     * @type {CNSendStatus}
     * @memberof ApprovalARCNClaimDetailModel
     */
    trnStatus?: CNSendStatus;
    /**
     * 
     * @type {string}
     * @memberof ApprovalARCNClaimDetailModel
     */
    trnStatusName?: string;
    /**
     * 
     * @type {ApprovalARCNCustomerDetailModel}
     * @memberof ApprovalARCNClaimDetailModel
     */
    customerDetail?: ApprovalARCNCustomerDetailModel;
    /**
     * 
     * @type {Array<ApprovalARCNClaimProductModel>}
     * @memberof ApprovalARCNClaimDetailModel
     */
    productList?: Array<ApprovalARCNClaimProductModel>;
    /**
     * 
     * @type {Array<VoucherModel>}
     * @memberof ApprovalARCNClaimDetailModel
     */
    voucher?: Array<VoucherModel>;
    /**
     * 
     * @type {Array<TransactionHistoryModel>}
     * @memberof ApprovalARCNClaimDetailModel
     */
    history?: Array<TransactionHistoryModel>;
    /**
     * 
     * @type {number}
     * @memberof ApprovalARCNClaimDetailModel
     */
    claimPrice?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalARCNClaimDetailModel
     */
    claimVatPrice?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalARCNClaimDetailModel
     */
    claimTotalPrice?: number;
    /**
     * 
     * @type {string}
     * @memberof ApprovalARCNClaimDetailModel
     */
    claimSqmRemark?: string;
    /**
     * 
     * @type {string}
     * @memberof ApprovalARCNClaimDetailModel
     */
    claimFaRemark?: string;
    /**
     * 
     * @type {number}
     * @memberof ApprovalARCNClaimDetailModel
     */
    workflowId?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalARCNClaimDetailModel
     */
    currentStepId?: number;
    /**
     * 
     * @type {boolean}
     * @memberof ApprovalARCNClaimDetailModel
     */
    isWorkflowDone?: boolean;
}


/**
 * 
 * @export
 * @interface ApprovalARCNClaimDetailModelBaseResponseModel
 */
export interface ApprovalARCNClaimDetailModelBaseResponseModel {
    /**
     * 
     * @type {boolean}
     * @memberof ApprovalARCNClaimDetailModelBaseResponseModel
     */
    success?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ApprovalARCNClaimDetailModelBaseResponseModel
     */
    message?: string;
    /**
     * 
     * @type {number}
     * @memberof ApprovalARCNClaimDetailModelBaseResponseModel
     */
    statusCode?: number;
    /**
     * 
     * @type {ApprovalARCNClaimDetailModel}
     * @memberof ApprovalARCNClaimDetailModelBaseResponseModel
     */
    data?: ApprovalARCNClaimDetailModel;
}
/**
 * 
 * @export
 * @interface ApprovalARCNClaimModel
 */
export interface ApprovalARCNClaimModel {
    /**
     * 
     * @type {number}
     * @memberof ApprovalARCNClaimModel
     */
    rowNumber?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalARCNClaimModel
     */
    trnClaimId?: number;
    /**
     * 
     * @type {string}
     * @memberof ApprovalARCNClaimModel
     */
    claimCnNo?: string;
    /**
     * 
     * @type {string}
     * @memberof ApprovalARCNClaimModel
     */
    claimCnDate?: string;
    /**
     * 
     * @type {string}
     * @memberof ApprovalARCNClaimModel
     */
    customerName?: string;
    /**
     * 
     * @type {ClaimPriority}
     * @memberof ApprovalARCNClaimModel
     */
    claimPriority?: ClaimPriority;
    /**
     * 
     * @type {string}
     * @memberof ApprovalARCNClaimModel
     */
    claimPriorityName?: string;
    /**
     * 
     * @type {number}
     * @memberof ApprovalARCNClaimModel
     */
    claimPrice?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalARCNClaimModel
     */
    claimVatPrice?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalARCNClaimModel
     */
    claimTotalPrice?: number;
    /**
     * 
     * @type {CNSendStatus}
     * @memberof ApprovalARCNClaimModel
     */
    trnStatus?: CNSendStatus;
    /**
     * 
     * @type {string}
     * @memberof ApprovalARCNClaimModel
     */
    trnStatusName?: string;
    /**
     * 
     * @type {Array<ClaimDetailModel>}
     * @memberof ApprovalARCNClaimModel
     */
    claimDetail?: Array<ClaimDetailModel>;
    /**
     * 
     * @type {Array<string>}
     * @memberof ApprovalARCNClaimModel
     */
    invoiceList?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof ApprovalARCNClaimModel
     */
    itemCodeList?: Array<string>;
}


/**
 * 
 * @export
 * @interface ApprovalARCNClaimProductModel
 */
export interface ApprovalARCNClaimProductModel {
    /**
     * 
     * @type {number}
     * @memberof ApprovalARCNClaimProductModel
     */
    rowNumber?: number;
    /**
     * 
     * @type {string}
     * @memberof ApprovalARCNClaimProductModel
     */
    serviceDate?: string;
    /**
     * 
     * @type {number}
     * @memberof ApprovalARCNClaimProductModel
     */
    warrantyLeft?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalARCNClaimProductModel
     */
    warrantyMonth?: number;
    /**
     * 
     * @type {string}
     * @memberof ApprovalARCNClaimProductModel
     */
    tagBarcode?: string;
    /**
     * 
     * @type {string}
     * @memberof ApprovalARCNClaimProductModel
     */
    jobClaimNo?: string;
    /**
     * 
     * @type {string}
     * @memberof ApprovalARCNClaimProductModel
     */
    jobClaimType?: string;
    /**
     * 
     * @type {string}
     * @memberof ApprovalARCNClaimProductModel
     */
    jobClaimTypeName?: string;
    /**
     * 
     * @type {string}
     * @memberof ApprovalARCNClaimProductModel
     */
    invoiceNo?: string;
    /**
     * 
     * @type {string}
     * @memberof ApprovalARCNClaimProductModel
     */
    brandDescription?: string;
    /**
     * 
     * @type {string}
     * @memberof ApprovalARCNClaimProductModel
     */
    itemCode?: string;
    /**
     * 
     * @type {string}
     * @memberof ApprovalARCNClaimProductModel
     */
    itemDescription?: string;
    /**
     * 
     * @type {string}
     * @memberof ApprovalARCNClaimProductModel
     */
    serialNo?: string;
    /**
     * 
     * @type {number}
     * @memberof ApprovalARCNClaimProductModel
     */
    itemPrice?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalARCNClaimProductModel
     */
    itemDepreciation?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalARCNClaimProductModel
     */
    itemTotalPrice?: number;
}
/**
 * 
 * @export
 * @interface ApprovalARCNClaimResponseModel
 */
export interface ApprovalARCNClaimResponseModel {
    /**
     * 
     * @type {boolean}
     * @memberof ApprovalARCNClaimResponseModel
     */
    success?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ApprovalARCNClaimResponseModel
     */
    message?: string;
    /**
     * 
     * @type {number}
     * @memberof ApprovalARCNClaimResponseModel
     */
    statusCode?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalARCNClaimResponseModel
     */
    pageIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalARCNClaimResponseModel
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalARCNClaimResponseModel
     */
    pageAll?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalARCNClaimResponseModel
     */
    totalRecord?: number;
    /**
     * 
     * @type {Array<ApprovalARCNClaimModel>}
     * @memberof ApprovalARCNClaimResponseModel
     */
    data?: Array<ApprovalARCNClaimModel>;
    /**
     * 
     * @type {number}
     * @memberof ApprovalARCNClaimResponseModel
     */
    workflowId?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalARCNClaimResponseModel
     */
    approvalTotal?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalARCNClaimResponseModel
     */
    approvalConfirmed?: number;
    /**
     * 
     * @type {Array<BaseCountStatusModel>}
     * @memberof ApprovalARCNClaimResponseModel
     */
    countStatusList?: Array<BaseCountStatusModel>;
}
/**
 * 
 * @export
 * @interface ApprovalARCNCustomerDetailModel
 */
export interface ApprovalARCNCustomerDetailModel {
    /**
     * 
     * @type {number}
     * @memberof ApprovalARCNCustomerDetailModel
     */
    customerId?: number;
    /**
     * 
     * @type {string}
     * @memberof ApprovalARCNCustomerDetailModel
     */
    customerTaxId?: string;
    /**
     * 
     * @type {string}
     * @memberof ApprovalARCNCustomerDetailModel
     */
    customerBranch?: string;
    /**
     * 
     * @type {string}
     * @memberof ApprovalARCNCustomerDetailModel
     */
    supplierName?: string;
    /**
     * 
     * @type {string}
     * @memberof ApprovalARCNCustomerDetailModel
     */
    address?: string;
    /**
     * 
     * @type {number}
     * @memberof ApprovalARCNCustomerDetailModel
     */
    provinceId?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalARCNCustomerDetailModel
     */
    districtId?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalARCNCustomerDetailModel
     */
    subDistrictId?: number;
    /**
     * 
     * @type {string}
     * @memberof ApprovalARCNCustomerDetailModel
     */
    zipCode?: string;
    /**
     * 
     * @type {string}
     * @memberof ApprovalARCNCustomerDetailModel
     */
    customerTel?: string;
    /**
     * 
     * @type {string}
     * @memberof ApprovalARCNCustomerDetailModel
     */
    customerEmail?: string;
    /**
     * 
     * @type {string}
     * @memberof ApprovalARCNCustomerDetailModel
     */
    customerName?: string;
    /**
     * 
     * @type {string}
     * @memberof ApprovalARCNCustomerDetailModel
     */
    claimCnNo?: string;
    /**
     * 
     * @type {string}
     * @memberof ApprovalARCNCustomerDetailModel
     */
    claimCnDate?: string;
    /**
     * 
     * @type {string}
     * @memberof ApprovalARCNCustomerDetailModel
     */
    claimPriorityName?: string;
}
/**
 * 
 * @export
 * @interface ApprovalARCNInHouseDetail
 */
export interface ApprovalARCNInHouseDetail {
    /**
     * 
     * @type {number}
     * @memberof ApprovalARCNInHouseDetail
     */
    rbtCnarInhouseId?: number;
    /**
     * 
     * @type {ARCNInHouseCustomerDetail}
     * @memberof ApprovalARCNInHouseDetail
     */
    customerDetail?: ARCNInHouseCustomerDetail;
    /**
     * 
     * @type {ARCNInHouseCampaignDetail}
     * @memberof ApprovalARCNInHouseDetail
     */
    campaignDetail?: ARCNInHouseCampaignDetail;
    /**
     * 
     * @type {Array<ARCNInHousePeriodSale>}
     * @memberof ApprovalARCNInHouseDetail
     */
    periodSale?: Array<ARCNInHousePeriodSale>;
    /**
     * 
     * @type {string}
     * @memberof ApprovalARCNInHouseDetail
     */
    remark?: string;
    /**
     * 
     * @type {ARCNTotal}
     * @memberof ApprovalARCNInHouseDetail
     */
    cnTotal?: ARCNTotal;
    /**
     * 
     * @type {Array<AttachmentModel>}
     * @memberof ApprovalARCNInHouseDetail
     */
    attachment?: Array<AttachmentModel>;
    /**
     * 
     * @type {TaxWithholdingModel}
     * @memberof ApprovalARCNInHouseDetail
     */
    taxWithholding?: TaxWithholdingModel;
    /**
     * 
     * @type {Array<VoucherModel>}
     * @memberof ApprovalARCNInHouseDetail
     */
    voucher?: Array<VoucherModel>;
    /**
     * 
     * @type {Array<TransactionHistoryModel>}
     * @memberof ApprovalARCNInHouseDetail
     */
    history?: Array<TransactionHistoryModel>;
    /**
     * 
     * @type {number}
     * @memberof ApprovalARCNInHouseDetail
     */
    workflowId?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalARCNInHouseDetail
     */
    currentStepId?: number;
}
/**
 * 
 * @export
 * @interface ApprovalARCNInHouseDetailBaseResponseModel
 */
export interface ApprovalARCNInHouseDetailBaseResponseModel {
    /**
     * 
     * @type {boolean}
     * @memberof ApprovalARCNInHouseDetailBaseResponseModel
     */
    success?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ApprovalARCNInHouseDetailBaseResponseModel
     */
    message?: string;
    /**
     * 
     * @type {number}
     * @memberof ApprovalARCNInHouseDetailBaseResponseModel
     */
    statusCode?: number;
    /**
     * 
     * @type {ApprovalARCNInHouseDetail}
     * @memberof ApprovalARCNInHouseDetailBaseResponseModel
     */
    data?: ApprovalARCNInHouseDetail;
}
/**
 * 
 * @export
 * @interface ApprovalARCNInHouseModel
 */
export interface ApprovalARCNInHouseModel {
    /**
     * 
     * @type {number}
     * @memberof ApprovalARCNInHouseModel
     */
    rowNumber?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalARCNInHouseModel
     */
    companyId?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalARCNInHouseModel
     */
    organizationId?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalARCNInHouseModel
     */
    ownerUserId?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalARCNInHouseModel
     */
    rbtCnarInhouseId?: number;
    /**
     * 
     * @type {string}
     * @memberof ApprovalARCNInHouseModel
     */
    cnDate?: string;
    /**
     * 
     * @type {string}
     * @memberof ApprovalARCNInHouseModel
     */
    customerName?: string;
    /**
     * 
     * @type {string}
     * @memberof ApprovalARCNInHouseModel
     */
    cnNo?: string;
    /**
     * 
     * @type {number}
     * @memberof ApprovalARCNInHouseModel
     */
    actualSale?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalARCNInHouseModel
     */
    cnAmount?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalARCNInHouseModel
     */
    vat?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalARCNInHouseModel
     */
    amountIncludeVat?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalARCNInHouseModel
     */
    workflowId?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalARCNInHouseModel
     */
    currentStepId?: number;
    /**
     * 
     * @type {ARCNstatus}
     * @memberof ApprovalARCNInHouseModel
     */
    trnStatus?: ARCNstatus;
}


/**
 * 
 * @export
 * @interface ApprovalARCNInHouseResponseModel
 */
export interface ApprovalARCNInHouseResponseModel {
    /**
     * 
     * @type {boolean}
     * @memberof ApprovalARCNInHouseResponseModel
     */
    success?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ApprovalARCNInHouseResponseModel
     */
    message?: string;
    /**
     * 
     * @type {number}
     * @memberof ApprovalARCNInHouseResponseModel
     */
    statusCode?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalARCNInHouseResponseModel
     */
    pageIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalARCNInHouseResponseModel
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalARCNInHouseResponseModel
     */
    pageAll?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalARCNInHouseResponseModel
     */
    totalRecord?: number;
    /**
     * 
     * @type {Array<ApprovalARCNInHouseModel>}
     * @memberof ApprovalARCNInHouseResponseModel
     */
    data?: Array<ApprovalARCNInHouseModel>;
    /**
     * 
     * @type {number}
     * @memberof ApprovalARCNInHouseResponseModel
     */
    workflowId?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalARCNInHouseResponseModel
     */
    approvalTotal?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalARCNInHouseResponseModel
     */
    approvalConfirmed?: number;
    /**
     * 
     * @type {Array<BaseCountStatusModel>}
     * @memberof ApprovalARCNInHouseResponseModel
     */
    countStatusList?: Array<BaseCountStatusModel>;
}
/**
 * 
 * @export
 * @interface ApprovalARCNRebateDetailModel
 */
export interface ApprovalARCNRebateDetailModel {
    /**
     * 
     * @type {number}
     * @memberof ApprovalARCNRebateDetailModel
     */
    rbtCnarBrandId?: number;
    /**
     * 
     * @type {ARCNCustomerDetail}
     * @memberof ApprovalARCNRebateDetailModel
     */
    customerDetail?: ARCNCustomerDetail;
    /**
     * 
     * @type {ARCNRebateDetail}
     * @memberof ApprovalARCNRebateDetailModel
     */
    rebateDetail?: ARCNRebateDetail;
    /**
     * 
     * @type {string}
     * @memberof ApprovalARCNRebateDetailModel
     */
    remark?: string;
    /**
     * 
     * @type {ARCNTotal}
     * @memberof ApprovalARCNRebateDetailModel
     */
    cnTotal?: ARCNTotal;
    /**
     * 
     * @type {Array<AttachmentModel>}
     * @memberof ApprovalARCNRebateDetailModel
     */
    attachment?: Array<AttachmentModel>;
    /**
     * 
     * @type {TaxWithholdingModel}
     * @memberof ApprovalARCNRebateDetailModel
     */
    taxWithholding?: TaxWithholdingModel;
    /**
     * 
     * @type {Array<VoucherModel>}
     * @memberof ApprovalARCNRebateDetailModel
     */
    voucher?: Array<VoucherModel>;
    /**
     * 
     * @type {Array<TransactionHistoryModel>}
     * @memberof ApprovalARCNRebateDetailModel
     */
    history?: Array<TransactionHistoryModel>;
    /**
     * 
     * @type {number}
     * @memberof ApprovalARCNRebateDetailModel
     */
    workflowId?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalARCNRebateDetailModel
     */
    currentStepId?: number;
}
/**
 * 
 * @export
 * @interface ApprovalARCNRebateDetailModelBaseResponseModel
 */
export interface ApprovalARCNRebateDetailModelBaseResponseModel {
    /**
     * 
     * @type {boolean}
     * @memberof ApprovalARCNRebateDetailModelBaseResponseModel
     */
    success?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ApprovalARCNRebateDetailModelBaseResponseModel
     */
    message?: string;
    /**
     * 
     * @type {number}
     * @memberof ApprovalARCNRebateDetailModelBaseResponseModel
     */
    statusCode?: number;
    /**
     * 
     * @type {ApprovalARCNRebateDetailModel}
     * @memberof ApprovalARCNRebateDetailModelBaseResponseModel
     */
    data?: ApprovalARCNRebateDetailModel;
}
/**
 * 
 * @export
 * @interface ApprovalARCNRebateModel
 */
export interface ApprovalARCNRebateModel {
    /**
     * 
     * @type {number}
     * @memberof ApprovalARCNRebateModel
     */
    rowNumber?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalARCNRebateModel
     */
    companyId?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalARCNRebateModel
     */
    organizationId?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalARCNRebateModel
     */
    ownerUserId?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalARCNRebateModel
     */
    rbtCnarBrandId?: number;
    /**
     * 
     * @type {string}
     * @memberof ApprovalARCNRebateModel
     */
    rebateCode?: string;
    /**
     * 
     * @type {string}
     * @memberof ApprovalARCNRebateModel
     */
    cnDate?: string;
    /**
     * 
     * @type {string}
     * @memberof ApprovalARCNRebateModel
     */
    brandName?: string;
    /**
     * 
     * @type {string}
     * @memberof ApprovalARCNRebateModel
     */
    customerName?: string;
    /**
     * 
     * @type {string}
     * @memberof ApprovalARCNRebateModel
     */
    cnNo?: string;
    /**
     * 
     * @type {number}
     * @memberof ApprovalARCNRebateModel
     */
    rebateAmount?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalARCNRebateModel
     */
    cnAmount?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalARCNRebateModel
     */
    vat?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalARCNRebateModel
     */
    amountIncludeVat?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalARCNRebateModel
     */
    workflowId?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalARCNRebateModel
     */
    currentStepId?: number;
    /**
     * 
     * @type {ARCNstatus}
     * @memberof ApprovalARCNRebateModel
     */
    trnStatus?: ARCNstatus;
}


/**
 * 
 * @export
 * @interface ApprovalARCNRebateResponseModel
 */
export interface ApprovalARCNRebateResponseModel {
    /**
     * 
     * @type {boolean}
     * @memberof ApprovalARCNRebateResponseModel
     */
    success?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ApprovalARCNRebateResponseModel
     */
    message?: string;
    /**
     * 
     * @type {number}
     * @memberof ApprovalARCNRebateResponseModel
     */
    statusCode?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalARCNRebateResponseModel
     */
    pageIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalARCNRebateResponseModel
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalARCNRebateResponseModel
     */
    pageAll?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalARCNRebateResponseModel
     */
    totalRecord?: number;
    /**
     * 
     * @type {Array<ApprovalARCNRebateModel>}
     * @memberof ApprovalARCNRebateResponseModel
     */
    data?: Array<ApprovalARCNRebateModel>;
    /**
     * 
     * @type {number}
     * @memberof ApprovalARCNRebateResponseModel
     */
    workflowId?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalARCNRebateResponseModel
     */
    approvalTotal?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalARCNRebateResponseModel
     */
    approvalConfirmed?: number;
    /**
     * 
     * @type {Array<BaseCountStatusModel>}
     * @memberof ApprovalARCNRebateResponseModel
     */
    countStatusList?: Array<BaseCountStatusModel>;
}
/**
 * 
 * @export
 * @interface ApprovalOMSOPDetailModel
 */
export interface ApprovalOMSOPDetailModel {
    /**
     * 
     * @type {number}
     * @memberof ApprovalOMSOPDetailModel
     */
    trnSopPaymentId?: number;
    /**
     * 
     * @type {PaymentSOPStatus}
     * @memberof ApprovalOMSOPDetailModel
     */
    paymentSopStatus?: PaymentSOPStatus;
    /**
     * 
     * @type {string}
     * @memberof ApprovalOMSOPDetailModel
     */
    paymentSopStatusName?: string;
    /**
     * 
     * @type {string}
     * @memberof ApprovalOMSOPDetailModel
     */
    projectCode?: string;
    /**
     * 
     * @type {number}
     * @memberof ApprovalOMSOPDetailModel
     */
    paymentSopMonth?: number;
    /**
     * 
     * @type {string}
     * @memberof ApprovalOMSOPDetailModel
     */
    paymentSopMonthName?: string;
    /**
     * 
     * @type {number}
     * @memberof ApprovalOMSOPDetailModel
     */
    paymentSopYear?: number;
    /**
     * 
     * @type {string}
     * @memberof ApprovalOMSOPDetailModel
     */
    partnerName?: string;
    /**
     * 
     * @type {number}
     * @memberof ApprovalOMSOPDetailModel
     */
    paymentType?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalOMSOPDetailModel
     */
    jobType?: number;
    /**
     * 
     * @type {string}
     * @memberof ApprovalOMSOPDetailModel
     */
    jobTypeName?: string;
    /**
     * 
     * @type {ApprovalARCNCustomerDetailModel}
     * @memberof ApprovalOMSOPDetailModel
     */
    partnerDetail?: ApprovalARCNCustomerDetailModel;
    /**
     * 
     * @type {Array<ApprovalOMSOPInvoiceModel>}
     * @memberof ApprovalOMSOPDetailModel
     */
    invoices?: Array<ApprovalOMSOPInvoiceModel>;
    /**
     * 
     * @type {Array<VoucherModel>}
     * @memberof ApprovalOMSOPDetailModel
     */
    voucher?: Array<VoucherModel>;
    /**
     * 
     * @type {Array<TransactionHistoryModel>}
     * @memberof ApprovalOMSOPDetailModel
     */
    history?: Array<TransactionHistoryModel>;
    /**
     * 
     * @type {TaxWithholdingModel}
     * @memberof ApprovalOMSOPDetailModel
     */
    taxWithholding?: TaxWithholdingModel;
    /**
     * 
     * @type {number}
     * @memberof ApprovalOMSOPDetailModel
     */
    sopPaymentPrice?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalOMSOPDetailModel
     */
    sopPaymentVatPrice?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalOMSOPDetailModel
     */
    sopPaymentTotalPrice?: number;
    /**
     * 
     * @type {string}
     * @memberof ApprovalOMSOPDetailModel
     */
    createDate?: string;
    /**
     * 
     * @type {number}
     * @memberof ApprovalOMSOPDetailModel
     */
    workflowId?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalOMSOPDetailModel
     */
    currentStepId?: number;
    /**
     * 
     * @type {string}
     * @memberof ApprovalOMSOPDetailModel
     */
    paymentSopRemark?: string;
    /**
     * 
     * @type {Array<AttachmentModel>}
     * @memberof ApprovalOMSOPDetailModel
     */
    attachment?: Array<AttachmentModel>;
}


/**
 * 
 * @export
 * @interface ApprovalOMSOPDetailModelBaseResponseModel
 */
export interface ApprovalOMSOPDetailModelBaseResponseModel {
    /**
     * 
     * @type {boolean}
     * @memberof ApprovalOMSOPDetailModelBaseResponseModel
     */
    success?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ApprovalOMSOPDetailModelBaseResponseModel
     */
    message?: string;
    /**
     * 
     * @type {number}
     * @memberof ApprovalOMSOPDetailModelBaseResponseModel
     */
    statusCode?: number;
    /**
     * 
     * @type {ApprovalOMSOPDetailModel}
     * @memberof ApprovalOMSOPDetailModelBaseResponseModel
     */
    data?: ApprovalOMSOPDetailModel;
}
/**
 * 
 * @export
 * @interface ApprovalOMSOPInvoiceModel
 */
export interface ApprovalOMSOPInvoiceModel {
    /**
     * 
     * @type {number}
     * @memberof ApprovalOMSOPInvoiceModel
     */
    trnSopPaymentInvoiceId?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalOMSOPInvoiceModel
     */
    trnSopPaymentId?: number;
    /**
     * 
     * @type {string}
     * @memberof ApprovalOMSOPInvoiceModel
     */
    invoiceNo?: string;
    /**
     * 
     * @type {string}
     * @memberof ApprovalOMSOPInvoiceModel
     */
    invoiceDate?: string;
    /**
     * 
     * @type {string}
     * @memberof ApprovalOMSOPInvoiceModel
     */
    poNo?: string;
    /**
     * 
     * @type {number}
     * @memberof ApprovalOMSOPInvoiceModel
     */
    wagesCost?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalOMSOPInvoiceModel
     */
    travelExpenses?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalOMSOPInvoiceModel
     */
    amountOfMoney?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalOMSOPInvoiceModel
     */
    amountOfVat?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalOMSOPInvoiceModel
     */
    amountTotal?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalOMSOPInvoiceModel
     */
    fileAttachId?: number;
    /**
     * 
     * @type {string}
     * @memberof ApprovalOMSOPInvoiceModel
     */
    filePath?: string;
}
/**
 * 
 * @export
 * @interface ApprovalOMSOPModel
 */
export interface ApprovalOMSOPModel {
    /**
     * 
     * @type {number}
     * @memberof ApprovalOMSOPModel
     */
    trnSopPaymentId?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalOMSOPModel
     */
    rowNumber?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalOMSOPModel
     */
    paymentSopMonth?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalOMSOPModel
     */
    paymentSopYear?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalOMSOPModel
     */
    jobType?: number;
    /**
     * 
     * @type {string}
     * @memberof ApprovalOMSOPModel
     */
    createDate?: string;
    /**
     * 
     * @type {string}
     * @memberof ApprovalOMSOPModel
     */
    projectCode?: string;
    /**
     * 
     * @type {string}
     * @memberof ApprovalOMSOPModel
     */
    partnerName?: string;
    /**
     * 
     * @type {string}
     * @memberof ApprovalOMSOPModel
     */
    invoiceNo?: string;
    /**
     * 
     * @type {number}
     * @memberof ApprovalOMSOPModel
     */
    numberOfJob?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalOMSOPModel
     */
    amountOfMoney?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalOMSOPModel
     */
    amountOfVat?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalOMSOPModel
     */
    amountTotal?: number;
    /**
     * 
     * @type {PaymentSOPStatus}
     * @memberof ApprovalOMSOPModel
     */
    paymentSopStatus?: PaymentSOPStatus;
    /**
     * 
     * @type {string}
     * @memberof ApprovalOMSOPModel
     */
    paymentSopStatusName?: string;
    /**
     * 
     * @type {number}
     * @memberof ApprovalOMSOPModel
     */
    workflowId?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalOMSOPModel
     */
    currentStepId?: number;
}


/**
 * 
 * @export
 * @interface ApprovalOMSOPResponseModel
 */
export interface ApprovalOMSOPResponseModel {
    /**
     * 
     * @type {boolean}
     * @memberof ApprovalOMSOPResponseModel
     */
    success?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ApprovalOMSOPResponseModel
     */
    message?: string;
    /**
     * 
     * @type {number}
     * @memberof ApprovalOMSOPResponseModel
     */
    statusCode?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalOMSOPResponseModel
     */
    pageIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalOMSOPResponseModel
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalOMSOPResponseModel
     */
    pageAll?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalOMSOPResponseModel
     */
    totalRecord?: number;
    /**
     * 
     * @type {Array<ApprovalOMSOPModel>}
     * @memberof ApprovalOMSOPResponseModel
     */
    data?: Array<ApprovalOMSOPModel>;
    /**
     * 
     * @type {number}
     * @memberof ApprovalOMSOPResponseModel
     */
    workflowId?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalOMSOPResponseModel
     */
    approvalTotal?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalOMSOPResponseModel
     */
    approvalConfirmed?: number;
    /**
     * 
     * @type {Array<BaseCountStatusModel>}
     * @memberof ApprovalOMSOPResponseModel
     */
    countStatusList?: Array<BaseCountStatusModel>;
}
/**
 * 
 * @export
 * @interface AttachmentModel
 */
export interface AttachmentModel {
    /**
     * 
     * @type {number}
     * @memberof AttachmentModel
     */
    fileAttachId?: number;
    /**
     * 
     * @type {string}
     * @memberof AttachmentModel
     */
    fileName?: string;
    /**
     * 
     * @type {string}
     * @memberof AttachmentModel
     */
    filePath?: string;
    /**
     * 
     * @type {boolean}
     * @memberof AttachmentModel
     */
    activeFlag?: boolean;
}
/**
 * 
 * @export
 * @interface AverageDelayPayModel
 */
export interface AverageDelayPayModel {
    /**
     * 
     * @type {number}
     * @memberof AverageDelayPayModel
     */
    averageDelayPay?: number;
    /**
     * 
     * @type {number}
     * @memberof AverageDelayPayModel
     */
    averageDelayPayScore?: number;
    /**
     * 
     * @type {number}
     * @memberof AverageDelayPayModel
     */
    maxscoreAverage?: number;
    /**
     * 
     * @type {number}
     * @memberof AverageDelayPayModel
     */
    actualScoreAverage?: number;
    /**
     * 
     * @type {number}
     * @memberof AverageDelayPayModel
     */
    percentAverage?: number;
    /**
     * 
     * @type {number}
     * @memberof AverageDelayPayModel
     */
    percentWeightAverage?: number;
}
/**
 * 
 * @export
 * @interface Bankremain
 */
export interface Bankremain {
    /**
     * 
     * @type {string}
     * @memberof Bankremain
     */
    tranDate?: string;
    /**
     * 
     * @type {string}
     * @memberof Bankremain
     */
    tranCode?: string;
    /**
     * 
     * @type {number}
     * @memberof Bankremain
     */
    tranAmount?: number;
}
/**
 * 
 * @export
 * @interface BaseCountStatusModel
 */
export interface BaseCountStatusModel {
    /**
     * 
     * @type {number}
     * @memberof BaseCountStatusModel
     */
    currentStepId?: number;
    /**
     * 
     * @type {number}
     * @memberof BaseCountStatusModel
     */
    approvalStep?: number;
}
/**
 * 
 * @export
 * @interface BillingPlanGetSearchModel
 */
export interface BillingPlanGetSearchModel {
    /**
     * 
     * @type {number}
     * @memberof BillingPlanGetSearchModel
     */
    rowNumber?: number;
    /**
     * 
     * @type {number}
     * @memberof BillingPlanGetSearchModel
     */
    billingPlanId?: number;
    /**
     * 
     * @type {string}
     * @memberof BillingPlanGetSearchModel
     */
    customerCode?: string;
    /**
     * 
     * @type {string}
     * @memberof BillingPlanGetSearchModel
     */
    customerName?: string;
    /**
     * 
     * @type {string}
     * @memberof BillingPlanGetSearchModel
     */
    invoiceNo?: string;
    /**
     * 
     * @type {string}
     * @memberof BillingPlanGetSearchModel
     */
    invoiceDate?: string;
    /**
     * 
     * @type {string}
     * @memberof BillingPlanGetSearchModel
     */
    soNo?: string;
    /**
     * 
     * @type {string}
     * @memberof BillingPlanGetSearchModel
     */
    soDate?: string;
    /**
     * 
     * @type {number}
     * @memberof BillingPlanGetSearchModel
     */
    invoiceAmount?: number;
    /**
     * 
     * @type {string}
     * @memberof BillingPlanGetSearchModel
     */
    paymentDue?: string;
    /**
     * 
     * @type {number}
     * @memberof BillingPlanGetSearchModel
     */
    overDue?: number;
    /**
     * 
     * @type {number}
     * @memberof BillingPlanGetSearchModel
     */
    aging?: number;
    /**
     * 
     * @type {number}
     * @memberof BillingPlanGetSearchModel
     */
    planAmountArgo?: number;
    /**
     * 
     * @type {string}
     * @memberof BillingPlanGetSearchModel
     */
    planDateArgo?: string;
    /**
     * 
     * @type {number}
     * @memberof BillingPlanGetSearchModel
     */
    planAmount?: number;
    /**
     * 
     * @type {string}
     * @memberof BillingPlanGetSearchModel
     */
    planDate?: string;
}
/**
 * 
 * @export
 * @interface BillingPlanGetSearchModelBaseResponsePagination
 */
export interface BillingPlanGetSearchModelBaseResponsePagination {
    /**
     * 
     * @type {boolean}
     * @memberof BillingPlanGetSearchModelBaseResponsePagination
     */
    success?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BillingPlanGetSearchModelBaseResponsePagination
     */
    message?: string;
    /**
     * 
     * @type {number}
     * @memberof BillingPlanGetSearchModelBaseResponsePagination
     */
    statusCode?: number;
    /**
     * 
     * @type {number}
     * @memberof BillingPlanGetSearchModelBaseResponsePagination
     */
    pageIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof BillingPlanGetSearchModelBaseResponsePagination
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof BillingPlanGetSearchModelBaseResponsePagination
     */
    pageAll?: number;
    /**
     * 
     * @type {number}
     * @memberof BillingPlanGetSearchModelBaseResponsePagination
     */
    totalRecord?: number;
    /**
     * 
     * @type {Array<BillingPlanGetSearchModel>}
     * @memberof BillingPlanGetSearchModelBaseResponsePagination
     */
    data?: Array<BillingPlanGetSearchModel>;
}
/**
 * 
 * @export
 * @interface BillingPlanModel
 */
export interface BillingPlanModel {
    /**
     * 
     * @type {number}
     * @memberof BillingPlanModel
     */
    billingPlanId?: number;
    /**
     * 
     * @type {string}
     * @memberof BillingPlanModel
     */
    customerName?: string;
    /**
     * 
     * @type {string}
     * @memberof BillingPlanModel
     */
    invoiceNo?: string;
    /**
     * 
     * @type {string}
     * @memberof BillingPlanModel
     */
    invoiceDate?: string;
    /**
     * 
     * @type {string}
     * @memberof BillingPlanModel
     */
    soNo?: string;
    /**
     * 
     * @type {string}
     * @memberof BillingPlanModel
     */
    soDate?: string;
    /**
     * 
     * @type {number}
     * @memberof BillingPlanModel
     */
    invoiceAmount?: number;
    /**
     * 
     * @type {string}
     * @memberof BillingPlanModel
     */
    paymentDue?: string;
    /**
     * 
     * @type {number}
     * @memberof BillingPlanModel
     */
    overDue?: number;
    /**
     * 
     * @type {number}
     * @memberof BillingPlanModel
     */
    aging?: number;
    /**
     * 
     * @type {number}
     * @memberof BillingPlanModel
     */
    planAmountArgo?: number;
    /**
     * 
     * @type {string}
     * @memberof BillingPlanModel
     */
    planDateArgo?: string;
    /**
     * 
     * @type {number}
     * @memberof BillingPlanModel
     */
    planAmount?: number;
    /**
     * 
     * @type {string}
     * @memberof BillingPlanModel
     */
    planDate?: string;
}
/**
 * 
 * @export
 * @interface BillingPlanModelBaseResponseModel
 */
export interface BillingPlanModelBaseResponseModel {
    /**
     * 
     * @type {boolean}
     * @memberof BillingPlanModelBaseResponseModel
     */
    success?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BillingPlanModelBaseResponseModel
     */
    message?: string;
    /**
     * 
     * @type {number}
     * @memberof BillingPlanModelBaseResponseModel
     */
    statusCode?: number;
    /**
     * 
     * @type {BillingPlanModel}
     * @memberof BillingPlanModelBaseResponseModel
     */
    data?: BillingPlanModel;
}
/**
 * 
 * @export
 * @interface BillingPlanPatchModel
 */
export interface BillingPlanPatchModel {
    /**
     * 
     * @type {number}
     * @memberof BillingPlanPatchModel
     */
    billingPlanId?: number;
    /**
     * 
     * @type {number}
     * @memberof BillingPlanPatchModel
     */
    planAmount?: number;
    /**
     * 
     * @type {string}
     * @memberof BillingPlanPatchModel
     */
    planDate?: string;
}
/**
 * 
 * @export
 * @interface BillingPlanPatchModelBaseResponseModel
 */
export interface BillingPlanPatchModelBaseResponseModel {
    /**
     * 
     * @type {boolean}
     * @memberof BillingPlanPatchModelBaseResponseModel
     */
    success?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BillingPlanPatchModelBaseResponseModel
     */
    message?: string;
    /**
     * 
     * @type {number}
     * @memberof BillingPlanPatchModelBaseResponseModel
     */
    statusCode?: number;
    /**
     * 
     * @type {BillingPlanPatchModel}
     * @memberof BillingPlanPatchModelBaseResponseModel
     */
    data?: BillingPlanPatchModel;
}
/**
 * 
 * @export
 * @interface BooleanBaseResponseModel
 */
export interface BooleanBaseResponseModel {
    /**
     * 
     * @type {boolean}
     * @memberof BooleanBaseResponseModel
     */
    success?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BooleanBaseResponseModel
     */
    message?: string;
    /**
     * 
     * @type {number}
     * @memberof BooleanBaseResponseModel
     */
    statusCode?: number;
    /**
     * 
     * @type {boolean}
     * @memberof BooleanBaseResponseModel
     */
    data?: boolean;
}

/**
 * 
 * @export
 */
export const CNSendStatus = {
    NUMBER_1: 1,
    NUMBER_2: 2,
    NUMBER_3: 3
} as const;
export type CNSendStatus = typeof CNSendStatus[keyof typeof CNSendStatus];

/**
 * 
 * @export
 * @interface CancelImportModel
 */
export interface CancelImportModel {
    /**
     * 
     * @type {number}
     * @memberof CancelImportModel
     */
    impId?: number;
    /**
     * 
     * @type {string}
     * @memberof CancelImportModel
     */
    cancelRemark?: string;
}
/**
 * 
 * @export
 * @interface ClaimCNJobModel
 */
export interface ClaimCNJobModel {
    /**
     * 
     * @type {number}
     * @memberof ClaimCNJobModel
     */
    rowNumber?: number;
    /**
     * 
     * @type {string}
     * @memberof ClaimCNJobModel
     */
    serviceDate?: string;
    /**
     * 
     * @type {string}
     * @memberof ClaimCNJobModel
     */
    tagbarCode?: string;
    /**
     * 
     * @type {string}
     * @memberof ClaimCNJobModel
     */
    jobClaimNo?: string;
    /**
     * 
     * @type {string}
     * @memberof ClaimCNJobModel
     */
    cnNo?: string;
    /**
     * 
     * @type {string}
     * @memberof ClaimCNJobModel
     */
    cnDate?: string;
    /**
     * 
     * @type {string}
     * @memberof ClaimCNJobModel
     */
    invoiceNo?: string;
    /**
     * 
     * @type {string}
     * @memberof ClaimCNJobModel
     */
    brandsDescription?: string;
    /**
     * 
     * @type {string}
     * @memberof ClaimCNJobModel
     */
    productID?: string;
    /**
     * 
     * @type {string}
     * @memberof ClaimCNJobModel
     */
    productDescription?: string;
    /**
     * 
     * @type {number}
     * @memberof ClaimCNJobModel
     */
    warrantyMonth?: number;
    /**
     * 
     * @type {number}
     * @memberof ClaimCNJobModel
     */
    warrantyLeft?: number;
    /**
     * 
     * @type {string}
     * @memberof ClaimCNJobModel
     */
    snCode?: string;
    /**
     * 
     * @type {string}
     * @memberof ClaimCNJobModel
     */
    saleCode?: string;
    /**
     * 
     * @type {string}
     * @memberof ClaimCNJobModel
     */
    saleName?: string;
    /**
     * 
     * @type {string}
     * @memberof ClaimCNJobModel
     */
    shopCode?: string;
    /**
     * 
     * @type {string}
     * @memberof ClaimCNJobModel
     */
    shopName?: string;
    /**
     * 
     * @type {string}
     * @memberof ClaimCNJobModel
     */
    cnCreateRemark?: string;
    /**
     * 
     * @type {number}
     * @memberof ClaimCNJobModel
     */
    cnCreatePriorityType?: number;
    /**
     * 
     * @type {number}
     * @memberof ClaimCNJobModel
     */
    cnCreateType?: number;
    /**
     * 
     * @type {number}
     * @memberof ClaimCNJobModel
     */
    cnPrice?: number;
    /**
     * 
     * @type {number}
     * @memberof ClaimCNJobModel
     */
    cnRestorePercent?: number;
    /**
     * 
     * @type {number}
     * @memberof ClaimCNJobModel
     */
    cnRestoreAmount?: number;
    /**
     * 
     * @type {string}
     * @memberof ClaimCNJobModel
     */
    cnClaimType?: string;
}
/**
 * 
 * @export
 * @interface ClaimCNPaymentModel
 */
export interface ClaimCNPaymentModel {
    /**
     * 
     * @type {string}
     * @memberof ClaimCNPaymentModel
     */
    jobClaimNo?: string;
    /**
     * 
     * @type {TypeOfPayment}
     * @memberof ClaimCNPaymentModel
     */
    typeOfPayment?: TypeOfPayment;
    /**
     * 
     * @type {string}
     * @memberof ClaimCNPaymentModel
     */
    transferPaymentNo?: string;
    /**
     * 
     * @type {string}
     * @memberof ClaimCNPaymentModel
     */
    transferPaymentDate?: string;
    /**
     * 
     * @type {string}
     * @memberof ClaimCNPaymentModel
     */
    chequeNo?: string;
    /**
     * 
     * @type {string}
     * @memberof ClaimCNPaymentModel
     */
    chequeDate?: string;
    /**
     * 
     * @type {string}
     * @memberof ClaimCNPaymentModel
     */
    cnNo?: string;
    /**
     * 
     * @type {string}
     * @memberof ClaimCNPaymentModel
     */
    cnDate?: string;
}


/**
 * 
 * @export
 * @interface ClaimCNPaymentModelListBaseResponseModel
 */
export interface ClaimCNPaymentModelListBaseResponseModel {
    /**
     * 
     * @type {boolean}
     * @memberof ClaimCNPaymentModelListBaseResponseModel
     */
    success?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ClaimCNPaymentModelListBaseResponseModel
     */
    message?: string;
    /**
     * 
     * @type {number}
     * @memberof ClaimCNPaymentModelListBaseResponseModel
     */
    statusCode?: number;
    /**
     * 
     * @type {Array<ClaimCNPaymentModel>}
     * @memberof ClaimCNPaymentModelListBaseResponseModel
     */
    data?: Array<ClaimCNPaymentModel>;
}
/**
 * 
 * @export
 * @interface ClaimCNRequestModel
 */
export interface ClaimCNRequestModel {
    /**
     * 
     * @type {number}
     * @memberof ClaimCNRequestModel
     */
    cnCreateType?: number;
    /**
     * 
     * @type {string}
     * @memberof ClaimCNRequestModel
     */
    cnNo?: string;
    /**
     * 
     * @type {string}
     * @memberof ClaimCNRequestModel
     */
    cnDate?: string;
    /**
     * 
     * @type {string}
     * @memberof ClaimCNRequestModel
     */
    customerID?: string;
    /**
     * 
     * @type {string}
     * @memberof ClaimCNRequestModel
     */
    customerTaxCode?: string;
    /**
     * 
     * @type {string}
     * @memberof ClaimCNRequestModel
     */
    firstName?: string;
    /**
     * 
     * @type {string}
     * @memberof ClaimCNRequestModel
     */
    lastName?: string;
    /**
     * 
     * @type {string}
     * @memberof ClaimCNRequestModel
     */
    address?: string;
    /**
     * 
     * @type {string}
     * @memberof ClaimCNRequestModel
     */
    subDistrictName?: string;
    /**
     * 
     * @type {string}
     * @memberof ClaimCNRequestModel
     */
    districtName?: string;
    /**
     * 
     * @type {string}
     * @memberof ClaimCNRequestModel
     */
    provinceName?: string;
    /**
     * 
     * @type {string}
     * @memberof ClaimCNRequestModel
     */
    zipCode?: string;
    /**
     * 
     * @type {string}
     * @memberof ClaimCNRequestModel
     */
    mobile?: string;
    /**
     * 
     * @type {string}
     * @memberof ClaimCNRequestModel
     */
    email?: string;
    /**
     * 
     * @type {number}
     * @memberof ClaimCNRequestModel
     */
    claimPrice?: number;
    /**
     * 
     * @type {number}
     * @memberof ClaimCNRequestModel
     */
    claimVatPrice?: number;
    /**
     * 
     * @type {number}
     * @memberof ClaimCNRequestModel
     */
    claimTotalPrice?: number;
    /**
     * 
     * @type {number}
     * @memberof ClaimCNRequestModel
     */
    cnCreatePriorityType?: number;
    /**
     * 
     * @type {string}
     * @memberof ClaimCNRequestModel
     */
    cnCreateRemark?: string;
    /**
     * 
     * @type {string}
     * @memberof ClaimCNRequestModel
     */
    sendByName?: string;
    /**
     * 
     * @type {Array<ClaimCNJobModel>}
     * @memberof ClaimCNRequestModel
     */
    jobList?: Array<ClaimCNJobModel>;
}
/**
 * 
 * @export
 * @interface ClaimDetailModel
 */
export interface ClaimDetailModel {
    /**
     * 
     * @type {string}
     * @memberof ClaimDetailModel
     */
    itemCode?: string;
    /**
     * 
     * @type {string}
     * @memberof ClaimDetailModel
     */
    itemDescription?: string;
    /**
     * 
     * @type {string}
     * @memberof ClaimDetailModel
     */
    invoiceList?: string;
}

/**
 * 
 * @export
 */
export const ClaimPriority = {
    NUMBER_1: 1,
    NUMBER_2: 2
} as const;
export type ClaimPriority = typeof ClaimPriority[keyof typeof ClaimPriority];

/**
 * 
 * @export
 * @interface ConfigDetailModel
 */
export interface ConfigDetailModel {
    /**
     * 
     * @type {number}
     * @memberof ConfigDetailModel
     */
    configId?: number;
    /**
     * 
     * @type {string}
     * @memberof ConfigDetailModel
     */
    configKey?: string;
    /**
     * 
     * @type {string}
     * @memberof ConfigDetailModel
     */
    configValue?: string;
    /**
     * 
     * @type {string}
     * @memberof ConfigDetailModel
     */
    configType?: string;
    /**
     * 
     * @type {string}
     * @memberof ConfigDetailModel
     */
    configDataType?: string;
    /**
     * 
     * @type {string}
     * @memberof ConfigDetailModel
     */
    configDescription?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ConfigDetailModel
     */
    activeFlag?: boolean;
}
/**
 * 
 * @export
 * @interface ConfigDetailModelBaseResponseModel
 */
export interface ConfigDetailModelBaseResponseModel {
    /**
     * 
     * @type {boolean}
     * @memberof ConfigDetailModelBaseResponseModel
     */
    success?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ConfigDetailModelBaseResponseModel
     */
    message?: string;
    /**
     * 
     * @type {number}
     * @memberof ConfigDetailModelBaseResponseModel
     */
    statusCode?: number;
    /**
     * 
     * @type {ConfigDetailModel}
     * @memberof ConfigDetailModelBaseResponseModel
     */
    data?: ConfigDetailModel;
}
/**
 * 
 * @export
 * @interface ConfigEvaluationTopicGetSearchModel
 */
export interface ConfigEvaluationTopicGetSearchModel {
    /**
     * 
     * @type {number}
     * @memberof ConfigEvaluationTopicGetSearchModel
     */
    rowNumber?: number;
    /**
     * 
     * @type {number}
     * @memberof ConfigEvaluationTopicGetSearchModel
     */
    customerEvaluationId?: number;
    /**
     * 
     * @type {string}
     * @memberof ConfigEvaluationTopicGetSearchModel
     */
    evaluationName?: string;
    /**
     * 
     * @type {string}
     * @memberof ConfigEvaluationTopicGetSearchModel
     */
    createDate?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ConfigEvaluationTopicGetSearchModel
     */
    activeFlag?: boolean;
}
/**
 * 
 * @export
 * @interface ConfigEvaluationTopicGetSearchModelBaseResponsePagination
 */
export interface ConfigEvaluationTopicGetSearchModelBaseResponsePagination {
    /**
     * 
     * @type {boolean}
     * @memberof ConfigEvaluationTopicGetSearchModelBaseResponsePagination
     */
    success?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ConfigEvaluationTopicGetSearchModelBaseResponsePagination
     */
    message?: string;
    /**
     * 
     * @type {number}
     * @memberof ConfigEvaluationTopicGetSearchModelBaseResponsePagination
     */
    statusCode?: number;
    /**
     * 
     * @type {number}
     * @memberof ConfigEvaluationTopicGetSearchModelBaseResponsePagination
     */
    pageIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof ConfigEvaluationTopicGetSearchModelBaseResponsePagination
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof ConfigEvaluationTopicGetSearchModelBaseResponsePagination
     */
    pageAll?: number;
    /**
     * 
     * @type {number}
     * @memberof ConfigEvaluationTopicGetSearchModelBaseResponsePagination
     */
    totalRecord?: number;
    /**
     * 
     * @type {Array<ConfigEvaluationTopicGetSearchModel>}
     * @memberof ConfigEvaluationTopicGetSearchModelBaseResponsePagination
     */
    data?: Array<ConfigEvaluationTopicGetSearchModel>;
}
/**
 * 
 * @export
 * @interface ConfigModel
 */
export interface ConfigModel {
    /**
     * 
     * @type {number}
     * @memberof ConfigModel
     */
    rowNumber?: number;
    /**
     * 
     * @type {number}
     * @memberof ConfigModel
     */
    configId?: number;
    /**
     * 
     * @type {string}
     * @memberof ConfigModel
     */
    configKey?: string;
    /**
     * 
     * @type {string}
     * @memberof ConfigModel
     */
    configValue?: string;
    /**
     * 
     * @type {string}
     * @memberof ConfigModel
     */
    configType?: string;
    /**
     * 
     * @type {string}
     * @memberof ConfigModel
     */
    configDataType?: string;
    /**
     * 
     * @type {string}
     * @memberof ConfigModel
     */
    configDescription?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ConfigModel
     */
    activeFlag?: boolean;
}
/**
 * 
 * @export
 * @interface ConfigModelBaseResponsePagination
 */
export interface ConfigModelBaseResponsePagination {
    /**
     * 
     * @type {boolean}
     * @memberof ConfigModelBaseResponsePagination
     */
    success?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ConfigModelBaseResponsePagination
     */
    message?: string;
    /**
     * 
     * @type {number}
     * @memberof ConfigModelBaseResponsePagination
     */
    statusCode?: number;
    /**
     * 
     * @type {number}
     * @memberof ConfigModelBaseResponsePagination
     */
    pageIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof ConfigModelBaseResponsePagination
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof ConfigModelBaseResponsePagination
     */
    pageAll?: number;
    /**
     * 
     * @type {number}
     * @memberof ConfigModelBaseResponsePagination
     */
    totalRecord?: number;
    /**
     * 
     * @type {Array<ConfigModel>}
     * @memberof ConfigModelBaseResponsePagination
     */
    data?: Array<ConfigModel>;
}
/**
 * 
 * @export
 * @interface ConfigModelListBaseResponseModel
 */
export interface ConfigModelListBaseResponseModel {
    /**
     * 
     * @type {boolean}
     * @memberof ConfigModelListBaseResponseModel
     */
    success?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ConfigModelListBaseResponseModel
     */
    message?: string;
    /**
     * 
     * @type {number}
     * @memberof ConfigModelListBaseResponseModel
     */
    statusCode?: number;
    /**
     * 
     * @type {Array<ConfigModel>}
     * @memberof ConfigModelListBaseResponseModel
     */
    data?: Array<ConfigModel>;
}
/**
 * 
 * @export
 * @interface CreateOMSopRequestModel
 */
export interface CreateOMSopRequestModel {
    /**
     * 
     * @type {string}
     * @memberof CreateOMSopRequestModel
     */
    sendByCode?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateOMSopRequestModel
     */
    sendByName?: string;
    /**
     * 
     * @type {number}
     * @memberof CreateOMSopRequestModel
     */
    reqSopRoundID?: number;
    /**
     * 
     * @type {number}
     * @memberof CreateOMSopRequestModel
     */
    paymentSopMonth?: number;
    /**
     * 
     * @type {number}
     * @memberof CreateOMSopRequestModel
     */
    paymentSopYear?: number;
    /**
     * 
     * @type {string}
     * @memberof CreateOMSopRequestModel
     */
    projectCode?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateOMSopRequestModel
     */
    partnerCode?: string;
    /**
     * 
     * @type {number}
     * @memberof CreateOMSopRequestModel
     */
    parterId?: number;
    /**
     * 
     * @type {number}
     * @memberof CreateOMSopRequestModel
     */
    numberOfJob?: number;
    /**
     * 
     * @type {number}
     * @memberof CreateOMSopRequestModel
     */
    amountOfMoney?: number;
    /**
     * 
     * @type {number}
     * @memberof CreateOMSopRequestModel
     */
    amountOfVat?: number;
    /**
     * 
     * @type {number}
     * @memberof CreateOMSopRequestModel
     */
    amountTotal?: number;
    /**
     * 
     * @type {number}
     * @memberof CreateOMSopRequestModel
     */
    paymentType?: number;
    /**
     * 
     * @type {number}
     * @memberof CreateOMSopRequestModel
     */
    jobType?: number;
    /**
     * 
     * @type {Array<Invoice>}
     * @memberof CreateOMSopRequestModel
     */
    invoiceList?: Array<Invoice>;
}
/**
 * 
 * @export
 * @interface CreditworthinessModel
 */
export interface CreditworthinessModel {
    /**
     * 
     * @type {number}
     * @memberof CreditworthinessModel
     */
    fsClass?: number;
    /**
     * 
     * @type {number}
     * @memberof CreditworthinessModel
     */
    fsClassScore?: number;
    /**
     * 
     * @type {string}
     * @memberof CreditworthinessModel
     */
    fsGrade?: string;
    /**
     * 
     * @type {number}
     * @memberof CreditworthinessModel
     */
    fsGradeScore?: number;
    /**
     * 
     * @type {string}
     * @memberof CreditworthinessModel
     */
    director?: string;
    /**
     * 
     * @type {number}
     * @memberof CreditworthinessModel
     */
    directorScore?: number;
    /**
     * 
     * @type {string}
     * @memberof CreditworthinessModel
     */
    shareholder?: string;
    /**
     * 
     * @type {number}
     * @memberof CreditworthinessModel
     */
    shareholderScore?: number;
    /**
     * 
     * @type {number}
     * @memberof CreditworthinessModel
     */
    creditLimit?: number;
    /**
     * 
     * @type {number}
     * @memberof CreditworthinessModel
     */
    creditLimitScore?: number;
    /**
     * 
     * @type {number}
     * @memberof CreditworthinessModel
     */
    creditTerm?: number;
    /**
     * 
     * @type {number}
     * @memberof CreditworthinessModel
     */
    creditTermScore?: number;
    /**
     * 
     * @type {number}
     * @memberof CreditworthinessModel
     */
    maxscoreG2?: number;
    /**
     * 
     * @type {number}
     * @memberof CreditworthinessModel
     */
    actualScoreG2?: number;
    /**
     * 
     * @type {number}
     * @memberof CreditworthinessModel
     */
    percentG2?: number;
    /**
     * 
     * @type {number}
     * @memberof CreditworthinessModel
     */
    percentWeightG2?: number;
}

/**
 * 
 * @export
 */
export const CustomerAddressType = {
    NUMBER_1: 1,
    NUMBER_2: 2,
    NUMBER_3: 3
} as const;
export type CustomerAddressType = typeof CustomerAddressType[keyof typeof CustomerAddressType];


/**
 * 
 * @export
 */
export const CustomerCreditType = {
    NUMBER_1: 1,
    NUMBER_2: 2
} as const;
export type CustomerCreditType = typeof CustomerCreditType[keyof typeof CustomerCreditType];


/**
 * 
 * @export
 */
export const CustomerRegisterStatus = {
    NUMBER_0: 0,
    NUMBER_1: 1,
    NUMBER_2: 2,
    NUMBER_3: 3,
    NUMBER_4: 4,
    NUMBER_5: 5
} as const;
export type CustomerRegisterStatus = typeof CustomerRegisterStatus[keyof typeof CustomerRegisterStatus];

/**
 * 
 * @export
 * @interface CustomerVerifyTokenResponseModel
 */
export interface CustomerVerifyTokenResponseModel {
    /**
     * 
     * @type {TokenModel}
     * @memberof CustomerVerifyTokenResponseModel
     */
    tokenResponse?: TokenModel;
    /**
     * 
     * @type {UserDetailModel}
     * @memberof CustomerVerifyTokenResponseModel
     */
    userDetailResponse?: UserDetailModel;
}
/**
 * 
 * @export
 * @interface CustomerVerifyTokenResponseModelBaseResponseModel
 */
export interface CustomerVerifyTokenResponseModelBaseResponseModel {
    /**
     * 
     * @type {boolean}
     * @memberof CustomerVerifyTokenResponseModelBaseResponseModel
     */
    success?: boolean;
    /**
     * 
     * @type {string}
     * @memberof CustomerVerifyTokenResponseModelBaseResponseModel
     */
    message?: string;
    /**
     * 
     * @type {number}
     * @memberof CustomerVerifyTokenResponseModelBaseResponseModel
     */
    statusCode?: number;
    /**
     * 
     * @type {CustomerVerifyTokenResponseModel}
     * @memberof CustomerVerifyTokenResponseModelBaseResponseModel
     */
    data?: CustomerVerifyTokenResponseModel;
}

/**
 * 
 * @export
 */
export const DataAccessType = {
    NUMBER_1: 1,
    NUMBER_2: 2,
    NUMBER_3: 3,
    NUMBER_4: 4,
    NUMBER_5: 5
} as const;
export type DataAccessType = typeof DataAccessType[keyof typeof DataAccessType];

/**
 * 
 * @export
 * @interface DateOnly
 */
export interface DateOnly {
    /**
     * 
     * @type {number}
     * @memberof DateOnly
     */
    year?: number;
    /**
     * 
     * @type {number}
     * @memberof DateOnly
     */
    month?: number;
    /**
     * 
     * @type {number}
     * @memberof DateOnly
     */
    day?: number;
    /**
     * 
     * @type {DayOfWeek}
     * @memberof DateOnly
     */
    dayOfWeek?: DayOfWeek;
    /**
     * 
     * @type {number}
     * @memberof DateOnly
     */
    readonly dayOfYear?: number;
    /**
     * 
     * @type {number}
     * @memberof DateOnly
     */
    readonly dayNumber?: number;
}



/**
 * 
 * @export
 */
export const DayOfWeek = {
    NUMBER_0: 0,
    NUMBER_1: 1,
    NUMBER_2: 2,
    NUMBER_3: 3,
    NUMBER_4: 4,
    NUMBER_5: 5,
    NUMBER_6: 6
} as const;
export type DayOfWeek = typeof DayOfWeek[keyof typeof DayOfWeek];

/**
 * 
 * @export
 * @interface DebtLetterBookInvoiceGetInterfaceModel
 */
export interface DebtLetterBookInvoiceGetInterfaceModel {
    /**
     * 
     * @type {number}
     * @memberof DebtLetterBookInvoiceGetInterfaceModel
     */
    rowNumber?: number;
    /**
     * 
     * @type {number}
     * @memberof DebtLetterBookInvoiceGetInterfaceModel
     */
    invoiceListId?: number;
    /**
     * 
     * @type {string}
     * @memberof DebtLetterBookInvoiceGetInterfaceModel
     */
    invoiceNo?: string;
    /**
     * 
     * @type {string}
     * @memberof DebtLetterBookInvoiceGetInterfaceModel
     */
    invoiceDate?: string;
    /**
     * 
     * @type {number}
     * @memberof DebtLetterBookInvoiceGetInterfaceModel
     */
    invoiceTotal?: number;
    /**
     * 
     * @type {string}
     * @memberof DebtLetterBookInvoiceGetInterfaceModel
     */
    paymentDue?: string;
    /**
     * 
     * @type {number}
     * @memberof DebtLetterBookInvoiceGetInterfaceModel
     */
    overDue?: number;
    /**
     * 
     * @type {boolean}
     * @memberof DebtLetterBookInvoiceGetInterfaceModel
     */
    activeFlag?: boolean;
}
/**
 * 
 * @export
 * @interface DebtLetterBookInvoiceGetModel
 */
export interface DebtLetterBookInvoiceGetModel {
    /**
     * 
     * @type {number}
     * @memberof DebtLetterBookInvoiceGetModel
     */
    bookId?: number;
    /**
     * 
     * @type {string}
     * @memberof DebtLetterBookInvoiceGetModel
     */
    bookNumber?: string;
    /**
     * 
     * @type {string}
     * @memberof DebtLetterBookInvoiceGetModel
     */
    customerName?: string;
    /**
     * 
     * @type {string}
     * @memberof DebtLetterBookInvoiceGetModel
     */
    addressDetail?: string;
    /**
     * 
     * @type {string}
     * @memberof DebtLetterBookInvoiceGetModel
     */
    subDistrictName?: string;
    /**
     * 
     * @type {string}
     * @memberof DebtLetterBookInvoiceGetModel
     */
    districtName?: string;
    /**
     * 
     * @type {string}
     * @memberof DebtLetterBookInvoiceGetModel
     */
    provinceName?: string;
    /**
     * 
     * @type {string}
     * @memberof DebtLetterBookInvoiceGetModel
     */
    zipCode?: string;
    /**
     * 
     * @type {string}
     * @memberof DebtLetterBookInvoiceGetModel
     */
    contactTel?: string;
    /**
     * 
     * @type {string}
     * @memberof DebtLetterBookInvoiceGetModel
     */
    contactEmail?: string;
    /**
     * 
     * @type {number}
     * @memberof DebtLetterBookInvoiceGetModel
     */
    bookNo?: number;
    /**
     * 
     * @type {number}
     * @memberof DebtLetterBookInvoiceGetModel
     */
    bookAmount?: number;
    /**
     * 
     * @type {Array<DebtLetterBookInvoiceGetInterfaceModel>}
     * @memberof DebtLetterBookInvoiceGetModel
     */
    invoiceList?: Array<DebtLetterBookInvoiceGetInterfaceModel>;
}
/**
 * 
 * @export
 * @interface DebtLetterBookInvoiceGetModelBaseResponsePagination
 */
export interface DebtLetterBookInvoiceGetModelBaseResponsePagination {
    /**
     * 
     * @type {boolean}
     * @memberof DebtLetterBookInvoiceGetModelBaseResponsePagination
     */
    success?: boolean;
    /**
     * 
     * @type {string}
     * @memberof DebtLetterBookInvoiceGetModelBaseResponsePagination
     */
    message?: string;
    /**
     * 
     * @type {number}
     * @memberof DebtLetterBookInvoiceGetModelBaseResponsePagination
     */
    statusCode?: number;
    /**
     * 
     * @type {number}
     * @memberof DebtLetterBookInvoiceGetModelBaseResponsePagination
     */
    pageIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof DebtLetterBookInvoiceGetModelBaseResponsePagination
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof DebtLetterBookInvoiceGetModelBaseResponsePagination
     */
    pageAll?: number;
    /**
     * 
     * @type {number}
     * @memberof DebtLetterBookInvoiceGetModelBaseResponsePagination
     */
    totalRecord?: number;
    /**
     * 
     * @type {Array<DebtLetterBookInvoiceGetModel>}
     * @memberof DebtLetterBookInvoiceGetModelBaseResponsePagination
     */
    data?: Array<DebtLetterBookInvoiceGetModel>;
}
/**
 * 
 * @export
 * @interface DebtLetterBookInvoiceGetSearchInterfaceModel
 */
export interface DebtLetterBookInvoiceGetSearchInterfaceModel {
    /**
     * 
     * @type {number}
     * @memberof DebtLetterBookInvoiceGetSearchInterfaceModel
     */
    rowNumber?: number;
    /**
     * 
     * @type {number}
     * @memberof DebtLetterBookInvoiceGetSearchInterfaceModel
     */
    invoiceListId?: number;
    /**
     * 
     * @type {string}
     * @memberof DebtLetterBookInvoiceGetSearchInterfaceModel
     */
    customerName?: string;
    /**
     * 
     * @type {string}
     * @memberof DebtLetterBookInvoiceGetSearchInterfaceModel
     */
    invoiceNo?: string;
    /**
     * 
     * @type {string}
     * @memberof DebtLetterBookInvoiceGetSearchInterfaceModel
     */
    invoiceDate?: string;
    /**
     * 
     * @type {number}
     * @memberof DebtLetterBookInvoiceGetSearchInterfaceModel
     */
    invoiceTotal?: number;
    /**
     * 
     * @type {string}
     * @memberof DebtLetterBookInvoiceGetSearchInterfaceModel
     */
    paymentDue?: string;
    /**
     * 
     * @type {number}
     * @memberof DebtLetterBookInvoiceGetSearchInterfaceModel
     */
    overDue?: number;
}
/**
 * 
 * @export
 * @interface DebtLetterBookInvoiceGetSearchInterfaceModelBaseResponsePagination
 */
export interface DebtLetterBookInvoiceGetSearchInterfaceModelBaseResponsePagination {
    /**
     * 
     * @type {boolean}
     * @memberof DebtLetterBookInvoiceGetSearchInterfaceModelBaseResponsePagination
     */
    success?: boolean;
    /**
     * 
     * @type {string}
     * @memberof DebtLetterBookInvoiceGetSearchInterfaceModelBaseResponsePagination
     */
    message?: string;
    /**
     * 
     * @type {number}
     * @memberof DebtLetterBookInvoiceGetSearchInterfaceModelBaseResponsePagination
     */
    statusCode?: number;
    /**
     * 
     * @type {number}
     * @memberof DebtLetterBookInvoiceGetSearchInterfaceModelBaseResponsePagination
     */
    pageIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof DebtLetterBookInvoiceGetSearchInterfaceModelBaseResponsePagination
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof DebtLetterBookInvoiceGetSearchInterfaceModelBaseResponsePagination
     */
    pageAll?: number;
    /**
     * 
     * @type {number}
     * @memberof DebtLetterBookInvoiceGetSearchInterfaceModelBaseResponsePagination
     */
    totalRecord?: number;
    /**
     * 
     * @type {Array<DebtLetterBookInvoiceGetSearchInterfaceModel>}
     * @memberof DebtLetterBookInvoiceGetSearchInterfaceModelBaseResponsePagination
     */
    data?: Array<DebtLetterBookInvoiceGetSearchInterfaceModel>;
}
/**
 * 
 * @export
 * @interface DebtLetterBookInvoiceGetSearchModel
 */
export interface DebtLetterBookInvoiceGetSearchModel {
    /**
     * 
     * @type {number}
     * @memberof DebtLetterBookInvoiceGetSearchModel
     */
    rowNumber?: number;
    /**
     * 
     * @type {number}
     * @memberof DebtLetterBookInvoiceGetSearchModel
     */
    bookId?: number;
    /**
     * 
     * @type {string}
     * @memberof DebtLetterBookInvoiceGetSearchModel
     */
    bookNumber?: string;
    /**
     * 
     * @type {string}
     * @memberof DebtLetterBookInvoiceGetSearchModel
     */
    custermerCode?: string;
    /**
     * 
     * @type {string}
     * @memberof DebtLetterBookInvoiceGetSearchModel
     */
    customerName?: string;
    /**
     * 
     * @type {number}
     * @memberof DebtLetterBookInvoiceGetSearchModel
     */
    bookAmount?: number;
    /**
     * 
     * @type {string}
     * @memberof DebtLetterBookInvoiceGetSearchModel
     */
    bookDate?: string;
    /**
     * 
     * @type {number}
     * @memberof DebtLetterBookInvoiceGetSearchModel
     */
    bookNo?: number;
}
/**
 * 
 * @export
 * @interface DebtLetterBookInvoiceGetSearchModelBaseResponsePagination
 */
export interface DebtLetterBookInvoiceGetSearchModelBaseResponsePagination {
    /**
     * 
     * @type {boolean}
     * @memberof DebtLetterBookInvoiceGetSearchModelBaseResponsePagination
     */
    success?: boolean;
    /**
     * 
     * @type {string}
     * @memberof DebtLetterBookInvoiceGetSearchModelBaseResponsePagination
     */
    message?: string;
    /**
     * 
     * @type {number}
     * @memberof DebtLetterBookInvoiceGetSearchModelBaseResponsePagination
     */
    statusCode?: number;
    /**
     * 
     * @type {number}
     * @memberof DebtLetterBookInvoiceGetSearchModelBaseResponsePagination
     */
    pageIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof DebtLetterBookInvoiceGetSearchModelBaseResponsePagination
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof DebtLetterBookInvoiceGetSearchModelBaseResponsePagination
     */
    pageAll?: number;
    /**
     * 
     * @type {number}
     * @memberof DebtLetterBookInvoiceGetSearchModelBaseResponsePagination
     */
    totalRecord?: number;
    /**
     * 
     * @type {Array<DebtLetterBookInvoiceGetSearchModel>}
     * @memberof DebtLetterBookInvoiceGetSearchModelBaseResponsePagination
     */
    data?: Array<DebtLetterBookInvoiceGetSearchModel>;
}
/**
 * 
 * @export
 * @interface DebtLetterBookInvoiceInterfaceListModel
 */
export interface DebtLetterBookInvoiceInterfaceListModel {
    /**
     * 
     * @type {number}
     * @memberof DebtLetterBookInvoiceInterfaceListModel
     */
    invoiceListId?: number;
    /**
     * 
     * @type {boolean}
     * @memberof DebtLetterBookInvoiceInterfaceListModel
     */
    activeFlag?: boolean;
}
/**
 * 
 * @export
 * @interface DebtLetterBookInvoiceInterfaceModel
 */
export interface DebtLetterBookInvoiceInterfaceModel {
    /**
     * 
     * @type {number}
     * @memberof DebtLetterBookInvoiceInterfaceModel
     */
    bookId?: number;
    /**
     * 
     * @type {Array<DebtLetterBookInvoiceInterfaceListModel>}
     * @memberof DebtLetterBookInvoiceInterfaceModel
     */
    invoiceList?: Array<DebtLetterBookInvoiceInterfaceListModel>;
}
/**
 * 
 * @export
 * @interface DebtLetterBookInvoiceInterfaceModelBaseResponseModel
 */
export interface DebtLetterBookInvoiceInterfaceModelBaseResponseModel {
    /**
     * 
     * @type {boolean}
     * @memberof DebtLetterBookInvoiceInterfaceModelBaseResponseModel
     */
    success?: boolean;
    /**
     * 
     * @type {string}
     * @memberof DebtLetterBookInvoiceInterfaceModelBaseResponseModel
     */
    message?: string;
    /**
     * 
     * @type {number}
     * @memberof DebtLetterBookInvoiceInterfaceModelBaseResponseModel
     */
    statusCode?: number;
    /**
     * 
     * @type {DebtLetterBookInvoiceInterfaceModel}
     * @memberof DebtLetterBookInvoiceInterfaceModelBaseResponseModel
     */
    data?: DebtLetterBookInvoiceInterfaceModel;
}
/**
 * 
 * @export
 * @interface DebtLetterBookInvoiceInterfaceModelListBaseResponseModel
 */
export interface DebtLetterBookInvoiceInterfaceModelListBaseResponseModel {
    /**
     * 
     * @type {boolean}
     * @memberof DebtLetterBookInvoiceInterfaceModelListBaseResponseModel
     */
    success?: boolean;
    /**
     * 
     * @type {string}
     * @memberof DebtLetterBookInvoiceInterfaceModelListBaseResponseModel
     */
    message?: string;
    /**
     * 
     * @type {number}
     * @memberof DebtLetterBookInvoiceInterfaceModelListBaseResponseModel
     */
    statusCode?: number;
    /**
     * 
     * @type {Array<DebtLetterBookInvoiceInterfaceModel>}
     * @memberof DebtLetterBookInvoiceInterfaceModelListBaseResponseModel
     */
    data?: Array<DebtLetterBookInvoiceInterfaceModel>;
}
/**
 * 
 * @export
 * @interface DebtLetterFormModel
 */
export interface DebtLetterFormModel {
    /**
     * 
     * @type {number}
     * @memberof DebtLetterFormModel
     */
    bookId?: number;
    /**
     * 
     * @type {number}
     * @memberof DebtLetterFormModel
     */
    userId?: number;
}
/**
 * 
 * @export
 * @interface DebtLetterInvoiceGetSearchModel
 */
export interface DebtLetterInvoiceGetSearchModel {
    /**
     * 
     * @type {number}
     * @memberof DebtLetterInvoiceGetSearchModel
     */
    rowNumber?: number;
    /**
     * 
     * @type {number}
     * @memberof DebtLetterInvoiceGetSearchModel
     */
    customerId?: number;
    /**
     * 
     * @type {number}
     * @memberof DebtLetterInvoiceGetSearchModel
     */
    organizationId?: number;
    /**
     * 
     * @type {number}
     * @memberof DebtLetterInvoiceGetSearchModel
     */
    ownerUserId?: number;
    /**
     * 
     * @type {string}
     * @memberof DebtLetterInvoiceGetSearchModel
     */
    customerName?: string;
    /**
     * 
     * @type {number}
     * @memberof DebtLetterInvoiceGetSearchModel
     */
    invoiceAmountCount?: number;
    /**
     * 
     * @type {number}
     * @memberof DebtLetterInvoiceGetSearchModel
     */
    amountOfMoney?: number;
    /**
     * 
     * @type {Array<DebtLetterBookInvoiceInterfaceListModel>}
     * @memberof DebtLetterInvoiceGetSearchModel
     */
    invoiceList?: Array<DebtLetterBookInvoiceInterfaceListModel>;
}
/**
 * 
 * @export
 * @interface DebtLetterInvoiceGetSearchModelBaseResponsePagination
 */
export interface DebtLetterInvoiceGetSearchModelBaseResponsePagination {
    /**
     * 
     * @type {boolean}
     * @memberof DebtLetterInvoiceGetSearchModelBaseResponsePagination
     */
    success?: boolean;
    /**
     * 
     * @type {string}
     * @memberof DebtLetterInvoiceGetSearchModelBaseResponsePagination
     */
    message?: string;
    /**
     * 
     * @type {number}
     * @memberof DebtLetterInvoiceGetSearchModelBaseResponsePagination
     */
    statusCode?: number;
    /**
     * 
     * @type {number}
     * @memberof DebtLetterInvoiceGetSearchModelBaseResponsePagination
     */
    pageIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof DebtLetterInvoiceGetSearchModelBaseResponsePagination
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof DebtLetterInvoiceGetSearchModelBaseResponsePagination
     */
    pageAll?: number;
    /**
     * 
     * @type {number}
     * @memberof DebtLetterInvoiceGetSearchModelBaseResponsePagination
     */
    totalRecord?: number;
    /**
     * 
     * @type {Array<DebtLetterInvoiceGetSearchModel>}
     * @memberof DebtLetterInvoiceGetSearchModelBaseResponsePagination
     */
    data?: Array<DebtLetterInvoiceGetSearchModel>;
}
/**
 * 
 * @export
 * @interface DropdownEmployeeModel
 */
export interface DropdownEmployeeModel {
    /**
     * 
     * @type {number}
     * @memberof DropdownEmployeeModel
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof DropdownEmployeeModel
     */
    key?: string;
    /**
     * 
     * @type {string}
     * @memberof DropdownEmployeeModel
     */
    value?: string;
    /**
     * 
     * @type {number}
     * @memberof DropdownEmployeeModel
     */
    rowNumber?: number;
    /**
     * 
     * @type {string}
     * @memberof DropdownEmployeeModel
     */
    employeeCode?: string;
    /**
     * 
     * @type {string}
     * @memberof DropdownEmployeeModel
     */
    firstnameTh?: string;
    /**
     * 
     * @type {string}
     * @memberof DropdownEmployeeModel
     */
    lastnameTh?: string;
    /**
     * 
     * @type {string}
     * @memberof DropdownEmployeeModel
     */
    firstnameEn?: string;
    /**
     * 
     * @type {string}
     * @memberof DropdownEmployeeModel
     */
    lastnameEn?: string;
    /**
     * 
     * @type {number}
     * @memberof DropdownEmployeeModel
     */
    organizationId?: number;
}
/**
 * 
 * @export
 * @interface DropdownEmployeeModelBaseResponsePagination
 */
export interface DropdownEmployeeModelBaseResponsePagination {
    /**
     * 
     * @type {boolean}
     * @memberof DropdownEmployeeModelBaseResponsePagination
     */
    success?: boolean;
    /**
     * 
     * @type {string}
     * @memberof DropdownEmployeeModelBaseResponsePagination
     */
    message?: string;
    /**
     * 
     * @type {number}
     * @memberof DropdownEmployeeModelBaseResponsePagination
     */
    statusCode?: number;
    /**
     * 
     * @type {number}
     * @memberof DropdownEmployeeModelBaseResponsePagination
     */
    pageIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof DropdownEmployeeModelBaseResponsePagination
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof DropdownEmployeeModelBaseResponsePagination
     */
    pageAll?: number;
    /**
     * 
     * @type {number}
     * @memberof DropdownEmployeeModelBaseResponsePagination
     */
    totalRecord?: number;
    /**
     * 
     * @type {Array<DropdownEmployeeModel>}
     * @memberof DropdownEmployeeModelBaseResponsePagination
     */
    data?: Array<DropdownEmployeeModel>;
}
/**
 * 
 * @export
 * @interface DropdownModel
 */
export interface DropdownModel {
    /**
     * 
     * @type {number}
     * @memberof DropdownModel
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof DropdownModel
     */
    key?: string;
    /**
     * 
     * @type {string}
     * @memberof DropdownModel
     */
    value?: string;
}
/**
 * 
 * @export
 * @interface DropdownModelListBaseResponseModel
 */
export interface DropdownModelListBaseResponseModel {
    /**
     * 
     * @type {boolean}
     * @memberof DropdownModelListBaseResponseModel
     */
    success?: boolean;
    /**
     * 
     * @type {string}
     * @memberof DropdownModelListBaseResponseModel
     */
    message?: string;
    /**
     * 
     * @type {number}
     * @memberof DropdownModelListBaseResponseModel
     */
    statusCode?: number;
    /**
     * 
     * @type {Array<DropdownModel>}
     * @memberof DropdownModelListBaseResponseModel
     */
    data?: Array<DropdownModel>;
}
/**
 * 
 * @export
 * @interface DropdownRoleModel
 */
export interface DropdownRoleModel {
    /**
     * 
     * @type {number}
     * @memberof DropdownRoleModel
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof DropdownRoleModel
     */
    key?: string;
    /**
     * 
     * @type {string}
     * @memberof DropdownRoleModel
     */
    value?: string;
    /**
     * 
     * @type {DataAccessType}
     * @memberof DropdownRoleModel
     */
    dataAccessType?: DataAccessType;
}


/**
 * 
 * @export
 * @interface DropdownRoleModelListBaseResponseModel
 */
export interface DropdownRoleModelListBaseResponseModel {
    /**
     * 
     * @type {boolean}
     * @memberof DropdownRoleModelListBaseResponseModel
     */
    success?: boolean;
    /**
     * 
     * @type {string}
     * @memberof DropdownRoleModelListBaseResponseModel
     */
    message?: string;
    /**
     * 
     * @type {number}
     * @memberof DropdownRoleModelListBaseResponseModel
     */
    statusCode?: number;
    /**
     * 
     * @type {Array<DropdownRoleModel>}
     * @memberof DropdownRoleModelListBaseResponseModel
     */
    data?: Array<DropdownRoleModel>;
}
/**
 * 
 * @export
 * @interface DropdownSubDistrictModel
 */
export interface DropdownSubDistrictModel {
    /**
     * 
     * @type {number}
     * @memberof DropdownSubDistrictModel
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof DropdownSubDistrictModel
     */
    key?: string;
    /**
     * 
     * @type {string}
     * @memberof DropdownSubDistrictModel
     */
    value?: string;
    /**
     * 
     * @type {string}
     * @memberof DropdownSubDistrictModel
     */
    zipCode?: string;
}
/**
 * 
 * @export
 * @interface DropdownSubDistrictModelListBaseResponseModel
 */
export interface DropdownSubDistrictModelListBaseResponseModel {
    /**
     * 
     * @type {boolean}
     * @memberof DropdownSubDistrictModelListBaseResponseModel
     */
    success?: boolean;
    /**
     * 
     * @type {string}
     * @memberof DropdownSubDistrictModelListBaseResponseModel
     */
    message?: string;
    /**
     * 
     * @type {number}
     * @memberof DropdownSubDistrictModelListBaseResponseModel
     */
    statusCode?: number;
    /**
     * 
     * @type {Array<DropdownSubDistrictModel>}
     * @memberof DropdownSubDistrictModelListBaseResponseModel
     */
    data?: Array<DropdownSubDistrictModel>;
}
/**
 * 
 * @export
 * @interface DropdownTreeModel
 */
export interface DropdownTreeModel {
    /**
     * 
     * @type {number}
     * @memberof DropdownTreeModel
     */
    key?: number;
    /**
     * 
     * @type {string}
     * @memberof DropdownTreeModel
     */
    label?: string;
    /**
     * 
     * @type {string}
     * @memberof DropdownTreeModel
     */
    data?: string;
    /**
     * 
     * @type {string}
     * @memberof DropdownTreeModel
     */
    icon?: string;
    /**
     * 
     * @type {Array<DropdownTreeModel>}
     * @memberof DropdownTreeModel
     */
    children?: Array<DropdownTreeModel>;
}
/**
 * 
 * @export
 * @interface DropdownTreeModelListBaseResponseModel
 */
export interface DropdownTreeModelListBaseResponseModel {
    /**
     * 
     * @type {boolean}
     * @memberof DropdownTreeModelListBaseResponseModel
     */
    success?: boolean;
    /**
     * 
     * @type {string}
     * @memberof DropdownTreeModelListBaseResponseModel
     */
    message?: string;
    /**
     * 
     * @type {number}
     * @memberof DropdownTreeModelListBaseResponseModel
     */
    statusCode?: number;
    /**
     * 
     * @type {Array<DropdownTreeModel>}
     * @memberof DropdownTreeModelListBaseResponseModel
     */
    data?: Array<DropdownTreeModel>;
}
/**
 * 
 * @export
 * @interface DuplicateConfigEvaluationTopic
 */
export interface DuplicateConfigEvaluationTopic {
    /**
     * 
     * @type {number}
     * @memberof DuplicateConfigEvaluationTopic
     */
    customerEvaluationId?: number;
}
/**
 * 
 * @export
 * @interface EmployeeOwnerModel
 */
export interface EmployeeOwnerModel {
    /**
     * 
     * @type {number}
     * @memberof EmployeeOwnerModel
     */
    employeeId?: number;
}
/**
 * 
 * @export
 * @interface EngineerInfo
 */
export interface EngineerInfo {
    /**
     * 
     * @type {string}
     * @memberof EngineerInfo
     */
    engineerCode?: string;
    /**
     * 
     * @type {string}
     * @memberof EngineerInfo
     */
    engineerName?: string;
    /**
     * 
     * @type {number}
     * @memberof EngineerInfo
     */
    numberOfInvoice?: number;
    /**
     * 
     * @type {number}
     * @memberof EngineerInfo
     */
    numberOfJob?: number;
    /**
     * 
     * @type {number}
     * @memberof EngineerInfo
     */
    amountOfMoney?: number;
}

/**
 * 
 * @export
 */
export const EvaluationConfigType = {
    NUMBER_1: 1,
    NUMBER_2: 2
} as const;
export type EvaluationConfigType = typeof EvaluationConfigType[keyof typeof EvaluationConfigType];


/**
 * 
 * @export
 */
export const EvaluationType = {
    NUMBER_1: 1,
    NUMBER_2: 2
} as const;
export type EvaluationType = typeof EvaluationType[keyof typeof EvaluationType];

/**
 * 
 * @export
 * @interface FinancialStrengthModel
 */
export interface FinancialStrengthModel {
    /**
     * 
     * @type {string}
     * @memberof FinancialStrengthModel
     */
    accountsNotesRecvnet?: string;
    /**
     * 
     * @type {number}
     * @memberof FinancialStrengthModel
     */
    inventories?: number;
    /**
     * 
     * @type {number}
     * @memberof FinancialStrengthModel
     */
    shorttermloanasset?: number;
    /**
     * 
     * @type {string}
     * @memberof FinancialStrengthModel
     */
    totalcurrentasset?: string;
    /**
     * 
     * @type {string}
     * @memberof FinancialStrengthModel
     */
    longtermloanasset?: string;
    /**
     * 
     * @type {string}
     * @memberof FinancialStrengthModel
     */
    ppenet?: string;
    /**
     * 
     * @type {string}
     * @memberof FinancialStrengthModel
     */
    totalnoncurrentasset?: string;
    /**
     * 
     * @type {number}
     * @memberof FinancialStrengthModel
     */
    totalAssets?: number;
    /**
     * 
     * @type {number}
     * @memberof FinancialStrengthModel
     */
    totalAssetsScore?: number;
    /**
     * 
     * @type {number}
     * @memberof FinancialStrengthModel
     */
    cashbank?: number;
    /**
     * 
     * @type {string}
     * @memberof FinancialStrengthModel
     */
    acctpayable?: string;
    /**
     * 
     * @type {string}
     * @memberof FinancialStrengthModel
     */
    shorttermloanliab?: string;
    /**
     * 
     * @type {string}
     * @memberof FinancialStrengthModel
     */
    totalcurrentliab?: string;
    /**
     * 
     * @type {string}
     * @memberof FinancialStrengthModel
     */
    longtermloanliab?: string;
    /**
     * 
     * @type {string}
     * @memberof FinancialStrengthModel
     */
    totalnoncurrentliab?: string;
    /**
     * 
     * @type {string}
     * @memberof FinancialStrengthModel
     */
    totalLiabilities?: string;
    /**
     * 
     * @type {number}
     * @memberof FinancialStrengthModel
     */
    totalLiabilitiesScore?: number;
    /**
     * 
     * @type {string}
     * @memberof FinancialStrengthModel
     */
    bankoverdraft?: string;
    /**
     * 
     * @type {string}
     * @memberof FinancialStrengthModel
     */
    authcommonstock?: string;
    /**
     * 
     * @type {string}
     * @memberof FinancialStrengthModel
     */
    paidupcommonstock?: string;
    /**
     * 
     * @type {string}
     * @memberof FinancialStrengthModel
     */
    retainedearnings?: string;
    /**
     * 
     * @type {string}
     * @memberof FinancialStrengthModel
     */
    totalequity?: string;
    /**
     * 
     * @type {string}
     * @memberof FinancialStrengthModel
     */
    totalliabequity?: string;
    /**
     * 
     * @type {number}
     * @memberof FinancialStrengthModel
     */
    netSales?: number;
    /**
     * 
     * @type {number}
     * @memberof FinancialStrengthModel
     */
    netSalesScore?: number;
    /**
     * 
     * @type {string}
     * @memberof FinancialStrengthModel
     */
    totalrevenue?: string;
    /**
     * 
     * @type {string}
     * @memberof FinancialStrengthModel
     */
    costofsales?: string;
    /**
     * 
     * @type {string}
     * @memberof FinancialStrengthModel
     */
    grossprofit?: string;
    /**
     * 
     * @type {string}
     * @memberof FinancialStrengthModel
     */
    operatingexp?: string;
    /**
     * 
     * @type {string}
     * @memberof FinancialStrengthModel
     */
    incomebeforeda?: string;
    /**
     * 
     * @type {string}
     * @memberof FinancialStrengthModel
     */
    incomebeforeinteresttax?: string;
    /**
     * 
     * @type {string}
     * @memberof FinancialStrengthModel
     */
    netIncome?: string;
    /**
     * 
     * @type {number}
     * @memberof FinancialStrengthModel
     */
    netIncomeScore?: number;
    /**
     * 
     * @type {string}
     * @memberof FinancialStrengthModel
     */
    eps?: string;
    /**
     * 
     * @type {string}
     * @memberof FinancialStrengthModel
     */
    interestexp?: string;
    /**
     * 
     * @type {number}
     * @memberof FinancialStrengthModel
     */
    maxscoreG3?: number;
    /**
     * 
     * @type {number}
     * @memberof FinancialStrengthModel
     */
    actualScoreG3?: number;
    /**
     * 
     * @type {number}
     * @memberof FinancialStrengthModel
     */
    percentG3?: number;
    /**
     * 
     * @type {number}
     * @memberof FinancialStrengthModel
     */
    percentWeightG3?: number;
}
/**
 * 
 * @export
 * @interface GrowthPotentialModel
 */
export interface GrowthPotentialModel {
    /**
     * 
     * @type {number}
     * @memberof GrowthPotentialModel
     */
    netSalesGrowth?: number;
    /**
     * 
     * @type {number}
     * @memberof GrowthPotentialModel
     */
    netSalesGrowthScore?: number;
    /**
     * 
     * @type {string}
     * @memberof GrowthPotentialModel
     */
    totalrevenuegrowth?: string;
    /**
     * 
     * @type {string}
     * @memberof GrowthPotentialModel
     */
    totalassetgrowth?: string;
    /**
     * 
     * @type {number}
     * @memberof GrowthPotentialModel
     */
    netProfitGrowth?: number;
    /**
     * 
     * @type {number}
     * @memberof GrowthPotentialModel
     */
    netProfitGrowthScore?: number;
    /**
     * 
     * @type {number}
     * @memberof GrowthPotentialModel
     */
    maxscoreG5?: number;
    /**
     * 
     * @type {number}
     * @memberof GrowthPotentialModel
     */
    actualScoreG5?: number;
    /**
     * 
     * @type {number}
     * @memberof GrowthPotentialModel
     */
    percentG5?: number;
    /**
     * 
     * @type {number}
     * @memberof GrowthPotentialModel
     */
    percentWeightG5?: number;
}
/**
 * 
 * @export
 * @interface ImportStatementDetailModel
 */
export interface ImportStatementDetailModel {
    /**
     * 
     * @type {LogImportStatementModel}
     * @memberof ImportStatementDetailModel
     */
    logImportStatement?: LogImportStatementModel;
    /**
     * 
     * @type {Array<ImportStatementModel>}
     * @memberof ImportStatementDetailModel
     */
    importStatements?: Array<ImportStatementModel>;
}
/**
 * 
 * @export
 * @interface ImportStatementDetailModelBaseResponseModel
 */
export interface ImportStatementDetailModelBaseResponseModel {
    /**
     * 
     * @type {boolean}
     * @memberof ImportStatementDetailModelBaseResponseModel
     */
    success?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ImportStatementDetailModelBaseResponseModel
     */
    message?: string;
    /**
     * 
     * @type {number}
     * @memberof ImportStatementDetailModelBaseResponseModel
     */
    statusCode?: number;
    /**
     * 
     * @type {ImportStatementDetailModel}
     * @memberof ImportStatementDetailModelBaseResponseModel
     */
    data?: ImportStatementDetailModel;
}
/**
 * 
 * @export
 * @interface ImportStatementModel
 */
export interface ImportStatementModel {
    /**
     * 
     * @type {number}
     * @memberof ImportStatementModel
     */
    rowNumber?: number;
    /**
     * 
     * @type {number}
     * @memberof ImportStatementModel
     */
    stmtId?: number;
    /**
     * 
     * @type {number}
     * @memberof ImportStatementModel
     */
    bankAccountId?: number;
    /**
     * 
     * @type {number}
     * @memberof ImportStatementModel
     */
    stmtTypeId?: number;
    /**
     * 
     * @type {string}
     * @memberof ImportStatementModel
     */
    bankAccountNo?: string;
    /**
     * 
     * @type {string}
     * @memberof ImportStatementModel
     */
    bankAccountName?: string;
    /**
     * 
     * @type {string}
     * @memberof ImportStatementModel
     */
    bankAccountType?: string;
    /**
     * 
     * @type {string}
     * @memberof ImportStatementModel
     */
    bankBranchCode?: string;
    /**
     * 
     * @type {string}
     * @memberof ImportStatementModel
     */
    stmtTypeCode?: string;
    /**
     * 
     * @type {string}
     * @memberof ImportStatementModel
     */
    uuid?: string;
    /**
     * 
     * @type {string}
     * @memberof ImportStatementModel
     */
    stmtDatetime?: string;
    /**
     * 
     * @type {string}
     * @memberof ImportStatementModel
     */
    stmtDescription?: string;
    /**
     * 
     * @type {number}
     * @memberof ImportStatementModel
     */
    stmtMoneyMovement?: number;
    /**
     * 
     * @type {number}
     * @memberof ImportStatementModel
     */
    stmtMoneyCumulative?: number;
    /**
     * 
     * @type {string}
     * @memberof ImportStatementModel
     */
    chequeNo?: string;
    /**
     * 
     * @type {string}
     * @memberof ImportStatementModel
     */
    sequenceNo?: string;
    /**
     * 
     * @type {string}
     * @memberof ImportStatementModel
     */
    ref1?: string;
    /**
     * 
     * @type {string}
     * @memberof ImportStatementModel
     */
    ref2?: string;
    /**
     * 
     * @type {string}
     * @memberof ImportStatementModel
     */
    ref3?: string;
    /**
     * 
     * @type {string}
     * @memberof ImportStatementModel
     */
    terminalId?: string;
    /**
     * 
     * @type {string}
     * @memberof ImportStatementModel
     */
    channel?: string;
    /**
     * 
     * @type {string}
     * @memberof ImportStatementModel
     */
    remark?: string;
    /**
     * 
     * @type {number}
     * @memberof ImportStatementModel
     */
    companyId?: number;
    /**
     * 
     * @type {Array<VoucherMappingStatementModel>}
     * @memberof ImportStatementModel
     */
    vouchers?: Array<VoucherMappingStatementModel>;
    /**
     * 
     * @type {number}
     * @memberof ImportStatementModel
     */
    rootOrganizationId?: number;
    /**
     * 
     * @type {boolean}
     * @memberof ImportStatementModel
     */
    activeFlag?: boolean;
}
/**
 * 
 * @export
 * @interface ImportStatementResponseModel
 */
export interface ImportStatementResponseModel {
    /**
     * 
     * @type {boolean}
     * @memberof ImportStatementResponseModel
     */
    success?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ImportStatementResponseModel
     */
    message?: string;
    /**
     * 
     * @type {number}
     * @memberof ImportStatementResponseModel
     */
    statusCode?: number;
    /**
     * 
     * @type {number}
     * @memberof ImportStatementResponseModel
     */
    pageIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof ImportStatementResponseModel
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof ImportStatementResponseModel
     */
    pageAll?: number;
    /**
     * 
     * @type {number}
     * @memberof ImportStatementResponseModel
     */
    totalRecord?: number;
    /**
     * 
     * @type {Array<ImportStatementModel>}
     * @memberof ImportStatementResponseModel
     */
    data?: Array<ImportStatementModel>;
}
/**
 * 
 * @export
 * @interface Invoice
 */
export interface Invoice {
    /**
     * 
     * @type {string}
     * @memberof Invoice
     */
    invoiceNo?: string;
    /**
     * 
     * @type {string}
     * @memberof Invoice
     */
    invoiceDate?: string;
    /**
     * 
     * @type {string}
     * @memberof Invoice
     */
    poNo?: string;
    /**
     * 
     * @type {number}
     * @memberof Invoice
     */
    wagesCost?: number;
    /**
     * 
     * @type {number}
     * @memberof Invoice
     */
    travelExpenses?: number;
    /**
     * 
     * @type {number}
     * @memberof Invoice
     */
    amountOfMoney?: number;
    /**
     * 
     * @type {number}
     * @memberof Invoice
     */
    amountOfVat?: number;
    /**
     * 
     * @type {number}
     * @memberof Invoice
     */
    amountTotal?: number;
    /**
     * 
     * @type {string}
     * @memberof Invoice
     */
    invoiceFilePath?: string;
}
/**
 * 
 * @export
 * @interface LiquidityModel
 */
export interface LiquidityModel {
    /**
     * 
     * @type {number}
     * @memberof LiquidityModel
     */
    currentRatio?: number;
    /**
     * 
     * @type {number}
     * @memberof LiquidityModel
     */
    currentRatioScore?: number;
    /**
     * 
     * @type {number}
     * @memberof LiquidityModel
     */
    quickRatio?: number;
    /**
     * 
     * @type {number}
     * @memberof LiquidityModel
     */
    quickRatioScore?: number;
    /**
     * 
     * @type {string}
     * @memberof LiquidityModel
     */
    arturnover?: string;
    /**
     * 
     * @type {string}
     * @memberof LiquidityModel
     */
    apturnover?: string;
    /**
     * 
     * @type {number}
     * @memberof LiquidityModel
     */
    avgpaymentperiod?: number;
    /**
     * 
     * @type {string}
     * @memberof LiquidityModel
     */
    inventoryturnover?: string;
    /**
     * 
     * @type {string}
     * @memberof LiquidityModel
     */
    collectionperiod?: string;
    /**
     * 
     * @type {number}
     * @memberof LiquidityModel
     */
    dayssalesinventory?: number;
    /**
     * 
     * @type {number}
     * @memberof LiquidityModel
     */
    grossprofitmargin?: number;
    /**
     * 
     * @type {number}
     * @memberof LiquidityModel
     */
    netprofitmargin?: number;
    /**
     * 
     * @type {number}
     * @memberof LiquidityModel
     */
    roa?: number;
    /**
     * 
     * @type {number}
     * @memberof LiquidityModel
     */
    roe?: number;
    /**
     * 
     * @type {number}
     * @memberof LiquidityModel
     */
    roeScore?: number;
    /**
     * 
     * @type {number}
     * @memberof LiquidityModel
     */
    debtRatio?: number;
    /**
     * 
     * @type {number}
     * @memberof LiquidityModel
     */
    debtRatioScore?: number;
    /**
     * 
     * @type {string}
     * @memberof LiquidityModel
     */
    debttoequity?: string;
    /**
     * 
     * @type {string}
     * @memberof LiquidityModel
     */
    interestcoverage?: string;
    /**
     * 
     * @type {number}
     * @memberof LiquidityModel
     */
    maxscoreG4?: number;
    /**
     * 
     * @type {number}
     * @memberof LiquidityModel
     */
    actualScoreG4?: number;
    /**
     * 
     * @type {number}
     * @memberof LiquidityModel
     */
    percentG4?: number;
    /**
     * 
     * @type {number}
     * @memberof LiquidityModel
     */
    percentWeightG4?: number;
}
/**
 * 
 * @export
 * @interface LogImportStatementModel
 */
export interface LogImportStatementModel {
    /**
     * 
     * @type {number}
     * @memberof LogImportStatementModel
     */
    rowNumber?: number;
    /**
     * 
     * @type {number}
     * @memberof LogImportStatementModel
     */
    importStmtId?: number;
    /**
     * 
     * @type {number}
     * @memberof LogImportStatementModel
     */
    bankAccountId?: number;
    /**
     * 
     * @type {string}
     * @memberof LogImportStatementModel
     */
    bankAccountName?: string;
    /**
     * 
     * @type {string}
     * @memberof LogImportStatementModel
     */
    bankAccountNo?: string;
    /**
     * 
     * @type {string}
     * @memberof LogImportStatementModel
     */
    bankAccountType?: string;
    /**
     * 
     * @type {string}
     * @memberof LogImportStatementModel
     */
    impFileName?: string;
    /**
     * 
     * @type {string}
     * @memberof LogImportStatementModel
     */
    impFilePath?: string;
    /**
     * 
     * @type {string}
     * @memberof LogImportStatementModel
     */
    impFileType?: string;
    /**
     * 
     * @type {number}
     * @memberof LogImportStatementModel
     */
    impFileSizes?: number;
    /**
     * 
     * @type {number}
     * @memberof LogImportStatementModel
     */
    impFileRows?: number;
    /**
     * 
     * @type {number}
     * @memberof LogImportStatementModel
     */
    moneyMovement?: number;
    /**
     * 
     * @type {number}
     * @memberof LogImportStatementModel
     */
    moneyCumulative?: number;
    /**
     * 
     * @type {DateOnly}
     * @memberof LogImportStatementModel
     */
    dateStart?: DateOnly;
    /**
     * 
     * @type {DateOnly}
     * @memberof LogImportStatementModel
     */
    dateEnd?: DateOnly;
    /**
     * 
     * @type {string}
     * @memberof LogImportStatementModel
     */
    cancelRemark?: string;
    /**
     * 
     * @type {string}
     * @memberof LogImportStatementModel
     */
    createDate?: string;
    /**
     * 
     * @type {boolean}
     * @memberof LogImportStatementModel
     */
    activeFlag?: boolean;
    /**
     * 
     * @type {string}
     * @memberof LogImportStatementModel
     */
    updateDate?: string;
    /**
     * 
     * @type {string}
     * @memberof LogImportStatementModel
     */
    updateBy?: string;
}
/**
 * 
 * @export
 * @interface LogImportStatementResponseModel
 */
export interface LogImportStatementResponseModel {
    /**
     * 
     * @type {boolean}
     * @memberof LogImportStatementResponseModel
     */
    success?: boolean;
    /**
     * 
     * @type {string}
     * @memberof LogImportStatementResponseModel
     */
    message?: string;
    /**
     * 
     * @type {number}
     * @memberof LogImportStatementResponseModel
     */
    statusCode?: number;
    /**
     * 
     * @type {number}
     * @memberof LogImportStatementResponseModel
     */
    pageIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof LogImportStatementResponseModel
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof LogImportStatementResponseModel
     */
    pageAll?: number;
    /**
     * 
     * @type {number}
     * @memberof LogImportStatementResponseModel
     */
    totalRecord?: number;
    /**
     * 
     * @type {Array<LogImportStatementModel>}
     * @memberof LogImportStatementResponseModel
     */
    data?: Array<LogImportStatementModel>;
}

/**
 * 
 * @export
 */
export const MappingPageFileType = {
    NUMBER_1: 1,
    NUMBER_2: 2,
    NUMBER_3: 3
} as const;
export type MappingPageFileType = typeof MappingPageFileType[keyof typeof MappingPageFileType];

/**
 * 
 * @export
 * @interface MasterCustomerAddressModel
 */
export interface MasterCustomerAddressModel {
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerAddressModel
     */
    companyId?: number;
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerAddressModel
     */
    organizationId?: number;
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerAddressModel
     */
    ownerUserId?: number;
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerAddressModel
     */
    customerId?: number;
    /**
     * 
     * @type {CustomerAddressType}
     * @memberof MasterCustomerAddressModel
     */
    addressType?: CustomerAddressType;
    /**
     * 
     * @type {string}
     * @memberof MasterCustomerAddressModel
     */
    readonly addressTypeName?: string;
    /**
     * 
     * @type {string}
     * @memberof MasterCustomerAddressModel
     */
    building?: string;
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerAddressModel
     */
    provinceId?: number;
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerAddressModel
     */
    districtId?: number;
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerAddressModel
     */
    subDistrictId?: number;
    /**
     * 
     * @type {string}
     * @memberof MasterCustomerAddressModel
     */
    zipCode?: string;
    /**
     * 
     * @type {string}
     * @memberof MasterCustomerAddressModel
     */
    addressDetail?: string;
    /**
     * 
     * @type {string}
     * @memberof MasterCustomerAddressModel
     */
    addressRemark?: string;
}


/**
 * 
 * @export
 * @interface MasterCustomerAttachModel
 */
export interface MasterCustomerAttachModel {
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerAttachModel
     */
    companyId?: number;
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerAttachModel
     */
    organizationId?: number;
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerAttachModel
     */
    ownerUserId?: number;
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerAttachModel
     */
    customerId?: number;
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerAttachModel
     */
    fileNameId?: number;
    /**
     * 
     * @type {string}
     * @memberof MasterCustomerAttachModel
     */
    fileName?: string;
    /**
     * 
     * @type {string}
     * @memberof MasterCustomerAttachModel
     */
    filePath?: string;
    /**
     * 
     * @type {string}
     * @memberof MasterCustomerAttachModel
     */
    fileRemark?: string;
}
/**
 * 
 * @export
 * @interface MasterCustomerBankModel
 */
export interface MasterCustomerBankModel {
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerBankModel
     */
    companyId?: number;
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerBankModel
     */
    organizationId?: number;
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerBankModel
     */
    ownerUserId?: number;
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerBankModel
     */
    customerId?: number;
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerBankModel
     */
    bankId?: number;
    /**
     * 
     * @type {string}
     * @memberof MasterCustomerBankModel
     */
    bankName?: string;
    /**
     * 
     * @type {string}
     * @memberof MasterCustomerBankModel
     */
    bankBranch?: string;
    /**
     * 
     * @type {string}
     * @memberof MasterCustomerBankModel
     */
    bankAccountNo?: string;
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerBankModel
     */
    depositTypeId?: number;
    /**
     * 
     * @type {string}
     * @memberof MasterCustomerBankModel
     */
    depositTypeName?: string;
}
/**
 * 
 * @export
 * @interface MasterCustomerCompanyModel
 */
export interface MasterCustomerCompanyModel {
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerCompanyModel
     */
    customerCompanyId?: number;
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerCompanyModel
     */
    companyId?: number;
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerCompanyModel
     */
    organizationId?: number;
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerCompanyModel
     */
    ownerUserId?: number;
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerCompanyModel
     */
    customerId?: number;
    /**
     * 
     * @type {CustomerCreditType}
     * @memberof MasterCustomerCompanyModel
     */
    customerCreditType?: CustomerCreditType;
    /**
     * 
     * @type {string}
     * @memberof MasterCustomerCompanyModel
     */
    readonly customerCreditTypeName?: string;
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerCompanyModel
     */
    amountRequest?: number;
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerCompanyModel
     */
    amountApprove?: number;
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerCompanyModel
     */
    amountInsuranceApprove?: number;
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerCompanyModel
     */
    creditDays?: number;
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerCompanyModel
     */
    amountOld?: number;
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerCompanyModel
     */
    creditDaysOld?: number;
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerCompanyModel
     */
    dayOfBilling?: number;
}


/**
 * 
 * @export
 * @interface MasterCustomerContactModel
 */
export interface MasterCustomerContactModel {
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerContactModel
     */
    companyId?: number;
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerContactModel
     */
    organizationId?: number;
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerContactModel
     */
    ownerUserId?: number;
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerContactModel
     */
    customerId?: number;
    /**
     * 
     * @type {string}
     * @memberof MasterCustomerContactModel
     */
    contactName?: string;
    /**
     * 
     * @type {string}
     * @memberof MasterCustomerContactModel
     */
    contactDept?: string;
    /**
     * 
     * @type {string}
     * @memberof MasterCustomerContactModel
     */
    contactTel?: string;
    /**
     * 
     * @type {string}
     * @memberof MasterCustomerContactModel
     */
    contactFax?: string;
    /**
     * 
     * @type {string}
     * @memberof MasterCustomerContactModel
     */
    contactEmail?: string;
    /**
     * 
     * @type {string}
     * @memberof MasterCustomerContactModel
     */
    contactLineId?: string;
    /**
     * 
     * @type {string}
     * @memberof MasterCustomerContactModel
     */
    contactRemark?: string;
}
/**
 * 
 * @export
 * @interface MasterCustomerCreditScoreGetSearchModel
 */
export interface MasterCustomerCreditScoreGetSearchModel {
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerCreditScoreGetSearchModel
     */
    rowNumber?: number;
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerCreditScoreGetSearchModel
     */
    customerCreditScoreId?: number;
    /**
     * 
     * @type {string}
     * @memberof MasterCustomerCreditScoreGetSearchModel
     */
    creditScoreName?: string;
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerCreditScoreGetSearchModel
     */
    scoreMin?: number;
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerCreditScoreGetSearchModel
     */
    scoreMax?: number;
    /**
     * 
     * @type {string}
     * @memberof MasterCustomerCreditScoreGetSearchModel
     */
    colorCode?: string;
    /**
     * 
     * @type {string}
     * @memberof MasterCustomerCreditScoreGetSearchModel
     */
    updateBy?: string;
    /**
     * 
     * @type {string}
     * @memberof MasterCustomerCreditScoreGetSearchModel
     */
    updateDate?: string;
    /**
     * 
     * @type {boolean}
     * @memberof MasterCustomerCreditScoreGetSearchModel
     */
    activeFlag?: boolean;
}
/**
 * 
 * @export
 * @interface MasterCustomerCreditScoreGetSearchModelBaseResponsePagination
 */
export interface MasterCustomerCreditScoreGetSearchModelBaseResponsePagination {
    /**
     * 
     * @type {boolean}
     * @memberof MasterCustomerCreditScoreGetSearchModelBaseResponsePagination
     */
    success?: boolean;
    /**
     * 
     * @type {string}
     * @memberof MasterCustomerCreditScoreGetSearchModelBaseResponsePagination
     */
    message?: string;
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerCreditScoreGetSearchModelBaseResponsePagination
     */
    statusCode?: number;
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerCreditScoreGetSearchModelBaseResponsePagination
     */
    pageIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerCreditScoreGetSearchModelBaseResponsePagination
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerCreditScoreGetSearchModelBaseResponsePagination
     */
    pageAll?: number;
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerCreditScoreGetSearchModelBaseResponsePagination
     */
    totalRecord?: number;
    /**
     * 
     * @type {Array<MasterCustomerCreditScoreGetSearchModel>}
     * @memberof MasterCustomerCreditScoreGetSearchModelBaseResponsePagination
     */
    data?: Array<MasterCustomerCreditScoreGetSearchModel>;
}
/**
 * 
 * @export
 * @interface MasterCustomerCreditScoreModel
 */
export interface MasterCustomerCreditScoreModel {
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerCreditScoreModel
     */
    customerCreditScoreId?: number;
    /**
     * 
     * @type {string}
     * @memberof MasterCustomerCreditScoreModel
     */
    creditScoreName?: string;
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerCreditScoreModel
     */
    scoreMin?: number;
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerCreditScoreModel
     */
    scoreMax?: number;
    /**
     * 
     * @type {string}
     * @memberof MasterCustomerCreditScoreModel
     */
    colorCode?: string;
    /**
     * 
     * @type {boolean}
     * @memberof MasterCustomerCreditScoreModel
     */
    activeFlag?: boolean;
}
/**
 * 
 * @export
 * @interface MasterCustomerCreditScoreModelBaseResponseModel
 */
export interface MasterCustomerCreditScoreModelBaseResponseModel {
    /**
     * 
     * @type {boolean}
     * @memberof MasterCustomerCreditScoreModelBaseResponseModel
     */
    success?: boolean;
    /**
     * 
     * @type {string}
     * @memberof MasterCustomerCreditScoreModelBaseResponseModel
     */
    message?: string;
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerCreditScoreModelBaseResponseModel
     */
    statusCode?: number;
    /**
     * 
     * @type {MasterCustomerCreditScoreModel}
     * @memberof MasterCustomerCreditScoreModelBaseResponseModel
     */
    data?: MasterCustomerCreditScoreModel;
}
/**
 * 
 * @export
 * @interface MasterCustomerEvaluationGroupDetailModel
 */
export interface MasterCustomerEvaluationGroupDetailModel {
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerEvaluationGroupDetailModel
     */
    customerEvaluationGroupDetailId?: number;
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerEvaluationGroupDetailModel
     */
    customerEvaluationGroupId?: number;
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerEvaluationGroupDetailModel
     */
    customerEvaluationConfigId?: number;
    /**
     * 
     * @type {string}
     * @memberof MasterCustomerEvaluationGroupDetailModel
     */
    evaluationName?: string;
    /**
     * 
     * @type {EvaluationConfigType}
     * @memberof MasterCustomerEvaluationGroupDetailModel
     */
    evaluationConfigType?: EvaluationConfigType;
    /**
     * 
     * @type {string}
     * @memberof MasterCustomerEvaluationGroupDetailModel
     */
    readonly evaluationConfigTypeName?: string;
    /**
     * 
     * @type {Array<MasterCustomerEvaluationGroupDetailValueModel>}
     * @memberof MasterCustomerEvaluationGroupDetailModel
     */
    customerEvaluationGroupDetailValue?: Array<MasterCustomerEvaluationGroupDetailValueModel>;
}


/**
 * 
 * @export
 * @interface MasterCustomerEvaluationGroupDetailValueModel
 */
export interface MasterCustomerEvaluationGroupDetailValueModel {
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerEvaluationGroupDetailValueModel
     */
    customerEvaluationGroupDetailValueId?: number;
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerEvaluationGroupDetailValueModel
     */
    customerEvaluationGroupDetailId?: number;
    /**
     * 
     * @type {string}
     * @memberof MasterCustomerEvaluationGroupDetailValueModel
     */
    textValue?: string;
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerEvaluationGroupDetailValueModel
     */
    rangeMinValue?: number;
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerEvaluationGroupDetailValueModel
     */
    rangeMaxValue?: number;
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerEvaluationGroupDetailValueModel
     */
    score?: number;
}
/**
 * 
 * @export
 * @interface MasterCustomerEvaluationGroupModel
 */
export interface MasterCustomerEvaluationGroupModel {
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerEvaluationGroupModel
     */
    customerEvaluationGroupId?: number;
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerEvaluationGroupModel
     */
    customerEvaluationId?: number;
    /**
     * 
     * @type {string}
     * @memberof MasterCustomerEvaluationGroupModel
     */
    evaluationGroupName?: string;
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerEvaluationGroupModel
     */
    evaluationPercentWeight?: number;
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerEvaluationGroupModel
     */
    evaluationMaxScore?: number;
    /**
     * 
     * @type {Array<MasterCustomerEvaluationGroupDetailModel>}
     * @memberof MasterCustomerEvaluationGroupModel
     */
    customerEvaluationGroupDetail?: Array<MasterCustomerEvaluationGroupDetailModel>;
}
/**
 * 
 * @export
 * @interface MasterCustomerEvaluationModel
 */
export interface MasterCustomerEvaluationModel {
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerEvaluationModel
     */
    customerEvaluationId?: number;
    /**
     * 
     * @type {string}
     * @memberof MasterCustomerEvaluationModel
     */
    evaluationName?: string;
    /**
     * 
     * @type {EvaluationType}
     * @memberof MasterCustomerEvaluationModel
     */
    evaluationType?: EvaluationType;
    /**
     * 
     * @type {string}
     * @memberof MasterCustomerEvaluationModel
     */
    readonly evaluationTypeName?: string;
    /**
     * 
     * @type {boolean}
     * @memberof MasterCustomerEvaluationModel
     */
    activeFlag?: boolean;
    /**
     * 
     * @type {Array<MasterCustomerEvaluationGroupModel>}
     * @memberof MasterCustomerEvaluationModel
     */
    customerEvaluationGroup?: Array<MasterCustomerEvaluationGroupModel>;
}


/**
 * 
 * @export
 * @interface MasterCustomerEvaluationModelBaseResponseModel
 */
export interface MasterCustomerEvaluationModelBaseResponseModel {
    /**
     * 
     * @type {boolean}
     * @memberof MasterCustomerEvaluationModelBaseResponseModel
     */
    success?: boolean;
    /**
     * 
     * @type {string}
     * @memberof MasterCustomerEvaluationModelBaseResponseModel
     */
    message?: string;
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerEvaluationModelBaseResponseModel
     */
    statusCode?: number;
    /**
     * 
     * @type {MasterCustomerEvaluationModel}
     * @memberof MasterCustomerEvaluationModelBaseResponseModel
     */
    data?: MasterCustomerEvaluationModel;
}
/**
 * 
 * @export
 * @interface MasterCustomerGetSearchModel
 */
export interface MasterCustomerGetSearchModel {
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerGetSearchModel
     */
    rowNumber?: number;
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerGetSearchModel
     */
    customerId?: number;
    /**
     * 
     * @type {string}
     * @memberof MasterCustomerGetSearchModel
     */
    customerCode?: string;
    /**
     * 
     * @type {string}
     * @memberof MasterCustomerGetSearchModel
     */
    customerName?: string;
    /**
     * 
     * @type {CustomerCreditType}
     * @memberof MasterCustomerGetSearchModel
     */
    customerCreditType?: CustomerCreditType;
    /**
     * 
     * @type {string}
     * @memberof MasterCustomerGetSearchModel
     */
    readonly customerCreditTypeName?: string;
    /**
     * 
     * @type {string}
     * @memberof MasterCustomerGetSearchModel
     */
    salesOwner?: string;
    /**
     * 
     * @type {boolean}
     * @memberof MasterCustomerGetSearchModel
     */
    holdStatus?: boolean;
    /**
     * 
     * @type {string}
     * @memberof MasterCustomerGetSearchModel
     */
    updateDate?: string;
    /**
     * 
     * @type {string}
     * @memberof MasterCustomerGetSearchModel
     */
    lastCalculateDate?: string;
}


/**
 * 
 * @export
 * @interface MasterCustomerGetSearchModelBaseResponsePagination
 */
export interface MasterCustomerGetSearchModelBaseResponsePagination {
    /**
     * 
     * @type {boolean}
     * @memberof MasterCustomerGetSearchModelBaseResponsePagination
     */
    success?: boolean;
    /**
     * 
     * @type {string}
     * @memberof MasterCustomerGetSearchModelBaseResponsePagination
     */
    message?: string;
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerGetSearchModelBaseResponsePagination
     */
    statusCode?: number;
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerGetSearchModelBaseResponsePagination
     */
    pageIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerGetSearchModelBaseResponsePagination
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerGetSearchModelBaseResponsePagination
     */
    pageAll?: number;
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerGetSearchModelBaseResponsePagination
     */
    totalRecord?: number;
    /**
     * 
     * @type {Array<MasterCustomerGetSearchModel>}
     * @memberof MasterCustomerGetSearchModelBaseResponsePagination
     */
    data?: Array<MasterCustomerGetSearchModel>;
}
/**
 * 
 * @export
 * @interface MasterCustomerGradeGetSearchModel
 */
export interface MasterCustomerGradeGetSearchModel {
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerGradeGetSearchModel
     */
    rowNumber?: number;
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerGradeGetSearchModel
     */
    customerGradeId?: number;
    /**
     * 
     * @type {string}
     * @memberof MasterCustomerGradeGetSearchModel
     */
    gradeName?: string;
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerGradeGetSearchModel
     */
    scoreMin?: number;
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerGradeGetSearchModel
     */
    scoreMax?: number;
    /**
     * 
     * @type {string}
     * @memberof MasterCustomerGradeGetSearchModel
     */
    colorCode?: string;
    /**
     * 
     * @type {string}
     * @memberof MasterCustomerGradeGetSearchModel
     */
    updateBy?: string;
    /**
     * 
     * @type {string}
     * @memberof MasterCustomerGradeGetSearchModel
     */
    updateDate?: string;
    /**
     * 
     * @type {boolean}
     * @memberof MasterCustomerGradeGetSearchModel
     */
    activeFlag?: boolean;
}
/**
 * 
 * @export
 * @interface MasterCustomerGradeGetSearchModelBaseResponsePagination
 */
export interface MasterCustomerGradeGetSearchModelBaseResponsePagination {
    /**
     * 
     * @type {boolean}
     * @memberof MasterCustomerGradeGetSearchModelBaseResponsePagination
     */
    success?: boolean;
    /**
     * 
     * @type {string}
     * @memberof MasterCustomerGradeGetSearchModelBaseResponsePagination
     */
    message?: string;
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerGradeGetSearchModelBaseResponsePagination
     */
    statusCode?: number;
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerGradeGetSearchModelBaseResponsePagination
     */
    pageIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerGradeGetSearchModelBaseResponsePagination
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerGradeGetSearchModelBaseResponsePagination
     */
    pageAll?: number;
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerGradeGetSearchModelBaseResponsePagination
     */
    totalRecord?: number;
    /**
     * 
     * @type {Array<MasterCustomerGradeGetSearchModel>}
     * @memberof MasterCustomerGradeGetSearchModelBaseResponsePagination
     */
    data?: Array<MasterCustomerGradeGetSearchModel>;
}
/**
 * 
 * @export
 * @interface MasterCustomerGradeModel
 */
export interface MasterCustomerGradeModel {
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerGradeModel
     */
    customerGradeId?: number;
    /**
     * 
     * @type {string}
     * @memberof MasterCustomerGradeModel
     */
    gradeName?: string;
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerGradeModel
     */
    scoreMin?: number;
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerGradeModel
     */
    scoreMax?: number;
    /**
     * 
     * @type {string}
     * @memberof MasterCustomerGradeModel
     */
    colorCode?: string;
    /**
     * 
     * @type {boolean}
     * @memberof MasterCustomerGradeModel
     */
    activeFlag?: boolean;
}
/**
 * 
 * @export
 * @interface MasterCustomerGradeModelBaseResponseModel
 */
export interface MasterCustomerGradeModelBaseResponseModel {
    /**
     * 
     * @type {boolean}
     * @memberof MasterCustomerGradeModelBaseResponseModel
     */
    success?: boolean;
    /**
     * 
     * @type {string}
     * @memberof MasterCustomerGradeModelBaseResponseModel
     */
    message?: string;
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerGradeModelBaseResponseModel
     */
    statusCode?: number;
    /**
     * 
     * @type {MasterCustomerGradeModel}
     * @memberof MasterCustomerGradeModelBaseResponseModel
     */
    data?: MasterCustomerGradeModel;
}
/**
 * 
 * @export
 * @interface MasterCustomerModel
 */
export interface MasterCustomerModel {
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerModel
     */
    customerId?: number;
    /**
     * 
     * @type {PersonType}
     * @memberof MasterCustomerModel
     */
    customerType?: PersonType;
    /**
     * 
     * @type {string}
     * @memberof MasterCustomerModel
     */
    readonly customerTypeName?: string;
    /**
     * 
     * @type {string}
     * @memberof MasterCustomerModel
     */
    customerCode?: string;
    /**
     * 
     * @type {string}
     * @memberof MasterCustomerModel
     */
    customerName?: string;
    /**
     * 
     * @type {string}
     * @memberof MasterCustomerModel
     */
    customerLastname?: string;
    /**
     * 
     * @type {string}
     * @memberof MasterCustomerModel
     */
    customerNameEn?: string;
    /**
     * 
     * @type {string}
     * @memberof MasterCustomerModel
     */
    customerLastnameEn?: string;
    /**
     * 
     * @type {string}
     * @memberof MasterCustomerModel
     */
    customerTaxCode?: string;
    /**
     * 
     * @type {string}
     * @memberof MasterCustomerModel
     */
    registeredDate?: string;
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerModel
     */
    registeredCapital?: number;
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerModel
     */
    registeredTypeId?: number;
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerModel
     */
    businessGroupId?: number;
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerModel
     */
    businessTypeId?: number;
    /**
     * 
     * @type {string}
     * @memberof MasterCustomerModel
     */
    customerGrade?: string;
    /**
     * 
     * @type {string}
     * @memberof MasterCustomerModel
     */
    customerCreditScore?: string;
    /**
     * 
     * @type {string}
     * @memberof MasterCustomerModel
     */
    lastCalculateDate?: string;
    /**
     * 
     * @type {string}
     * @memberof MasterCustomerModel
     */
    lastUpdateCreditDate?: string;
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerModel
     */
    organizationId?: number;
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerModel
     */
    ownerUserId?: number;
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerModel
     */
    companyId?: number;
    /**
     * 
     * @type {boolean}
     * @memberof MasterCustomerModel
     */
    holdStatus?: boolean;
    /**
     * 
     * @type {Array<MasterCustomerContactModel>}
     * @memberof MasterCustomerModel
     */
    contactList?: Array<MasterCustomerContactModel>;
    /**
     * 
     * @type {Array<MasterCustomerAddressModel>}
     * @memberof MasterCustomerModel
     */
    addressList?: Array<MasterCustomerAddressModel>;
    /**
     * 
     * @type {Array<MasterCustomerBankModel>}
     * @memberof MasterCustomerModel
     */
    bankList?: Array<MasterCustomerBankModel>;
    /**
     * 
     * @type {Array<MasterCustomerAttachModel>}
     * @memberof MasterCustomerModel
     */
    attachList?: Array<MasterCustomerAttachModel>;
    /**
     * 
     * @type {Array<MasterEmployeeModel>}
     * @memberof MasterCustomerModel
     */
    salesList?: Array<MasterEmployeeModel>;
    /**
     * 
     * @type {Array<MasterEmployeeModel>}
     * @memberof MasterCustomerModel
     */
    projectManagerList?: Array<MasterEmployeeModel>;
    /**
     * 
     * @type {Array<MasterEmployeeModel>}
     * @memberof MasterCustomerModel
     */
    collectionList?: Array<MasterEmployeeModel>;
    /**
     * 
     * @type {Array<MasterCustomerCompanyModel>}
     * @memberof MasterCustomerModel
     */
    companyList?: Array<MasterCustomerCompanyModel>;
}


/**
 * 
 * @export
 * @interface MasterCustomerModelBaseResponseModel
 */
export interface MasterCustomerModelBaseResponseModel {
    /**
     * 
     * @type {boolean}
     * @memberof MasterCustomerModelBaseResponseModel
     */
    success?: boolean;
    /**
     * 
     * @type {string}
     * @memberof MasterCustomerModelBaseResponseModel
     */
    message?: string;
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerModelBaseResponseModel
     */
    statusCode?: number;
    /**
     * 
     * @type {MasterCustomerModel}
     * @memberof MasterCustomerModelBaseResponseModel
     */
    data?: MasterCustomerModel;
}
/**
 * 
 * @export
 * @interface MasterCustomerOwnerModel
 */
export interface MasterCustomerOwnerModel {
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerOwnerModel
     */
    customerId?: number;
    /**
     * 
     * @type {Array<EmployeeOwnerModel>}
     * @memberof MasterCustomerOwnerModel
     */
    salesList?: Array<EmployeeOwnerModel>;
    /**
     * 
     * @type {Array<EmployeeOwnerModel>}
     * @memberof MasterCustomerOwnerModel
     */
    projectManagerList?: Array<EmployeeOwnerModel>;
    /**
     * 
     * @type {Array<EmployeeOwnerModel>}
     * @memberof MasterCustomerOwnerModel
     */
    collectionList?: Array<EmployeeOwnerModel>;
}
/**
 * 
 * @export
 * @interface MasterCustomerOwnerModelBaseResponseModel
 */
export interface MasterCustomerOwnerModelBaseResponseModel {
    /**
     * 
     * @type {boolean}
     * @memberof MasterCustomerOwnerModelBaseResponseModel
     */
    success?: boolean;
    /**
     * 
     * @type {string}
     * @memberof MasterCustomerOwnerModelBaseResponseModel
     */
    message?: string;
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerOwnerModelBaseResponseModel
     */
    statusCode?: number;
    /**
     * 
     * @type {MasterCustomerOwnerModel}
     * @memberof MasterCustomerOwnerModelBaseResponseModel
     */
    data?: MasterCustomerOwnerModel;
}
/**
 * 
 * @export
 * @interface MasterEmployeeModel
 */
export interface MasterEmployeeModel {
    /**
     * 
     * @type {number}
     * @memberof MasterEmployeeModel
     */
    employeeId?: number;
    /**
     * 
     * @type {string}
     * @memberof MasterEmployeeModel
     */
    companyName?: string;
    /**
     * 
     * @type {string}
     * @memberof MasterEmployeeModel
     */
    employeeCode?: string;
    /**
     * 
     * @type {string}
     * @memberof MasterEmployeeModel
     */
    employeeName?: string;
    /**
     * 
     * @type {string}
     * @memberof MasterEmployeeModel
     */
    department?: string;
    /**
     * 
     * @type {string}
     * @memberof MasterEmployeeModel
     */
    mobilePhone?: string;
    /**
     * 
     * @type {string}
     * @memberof MasterEmployeeModel
     */
    email?: string;
}
/**
 * 
 * @export
 * @interface MasterEmployeeModelBaseResponsePagination
 */
export interface MasterEmployeeModelBaseResponsePagination {
    /**
     * 
     * @type {boolean}
     * @memberof MasterEmployeeModelBaseResponsePagination
     */
    success?: boolean;
    /**
     * 
     * @type {string}
     * @memberof MasterEmployeeModelBaseResponsePagination
     */
    message?: string;
    /**
     * 
     * @type {number}
     * @memberof MasterEmployeeModelBaseResponsePagination
     */
    statusCode?: number;
    /**
     * 
     * @type {number}
     * @memberof MasterEmployeeModelBaseResponsePagination
     */
    pageIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof MasterEmployeeModelBaseResponsePagination
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof MasterEmployeeModelBaseResponsePagination
     */
    pageAll?: number;
    /**
     * 
     * @type {number}
     * @memberof MasterEmployeeModelBaseResponsePagination
     */
    totalRecord?: number;
    /**
     * 
     * @type {Array<MasterEmployeeModel>}
     * @memberof MasterEmployeeModelBaseResponsePagination
     */
    data?: Array<MasterEmployeeModel>;
}
/**
 * 
 * @export
 * @interface MaximumDelayPayModel
 */
export interface MaximumDelayPayModel {
    /**
     * 
     * @type {number}
     * @memberof MaximumDelayPayModel
     */
    maximumDelayPay?: number;
    /**
     * 
     * @type {number}
     * @memberof MaximumDelayPayModel
     */
    maximumDelayPayScore?: number;
    /**
     * 
     * @type {number}
     * @memberof MaximumDelayPayModel
     */
    maxscoreMaximum?: number;
    /**
     * 
     * @type {number}
     * @memberof MaximumDelayPayModel
     */
    actualScoreMaximum?: number;
    /**
     * 
     * @type {number}
     * @memberof MaximumDelayPayModel
     */
    percentMaximum?: number;
    /**
     * 
     * @type {number}
     * @memberof MaximumDelayPayModel
     */
    percentWeightMaximum?: number;
}
/**
 * 
 * @export
 * @interface MenuResponseModel
 */
export interface MenuResponseModel {
    /**
     * 
     * @type {number}
     * @memberof MenuResponseModel
     */
    menuId?: number;
    /**
     * 
     * @type {string}
     * @memberof MenuResponseModel
     */
    menuName?: string;
    /**
     * 
     * @type {string}
     * @memberof MenuResponseModel
     */
    menuRoute?: string;
    /**
     * 
     * @type {string}
     * @memberof MenuResponseModel
     */
    menuIcon?: string;
    /**
     * 
     * @type {number}
     * @memberof MenuResponseModel
     */
    menuParent?: number;
    /**
     * 
     * @type {string}
     * @memberof MenuResponseModel
     */
    menuCode?: string;
    /**
     * 
     * @type {boolean}
     * @memberof MenuResponseModel
     */
    isAllow?: boolean;
    /**
     * 
     * @type {Array<MenuResponseModel>}
     * @memberof MenuResponseModel
     */
    subMenu?: Array<MenuResponseModel>;
    /**
     * 
     * @type {number}
     * @memberof MenuResponseModel
     */
    totalNotificaition?: number;
}
/**
 * 
 * @export
 * @interface MenuResponseModelListBaseResponseModel
 */
export interface MenuResponseModelListBaseResponseModel {
    /**
     * 
     * @type {boolean}
     * @memberof MenuResponseModelListBaseResponseModel
     */
    success?: boolean;
    /**
     * 
     * @type {string}
     * @memberof MenuResponseModelListBaseResponseModel
     */
    message?: string;
    /**
     * 
     * @type {number}
     * @memberof MenuResponseModelListBaseResponseModel
     */
    statusCode?: number;
    /**
     * 
     * @type {Array<MenuResponseModel>}
     * @memberof MenuResponseModelListBaseResponseModel
     */
    data?: Array<MenuResponseModel>;
}
/**
 * 
 * @export
 * @interface NotFoundMappingDetailModel
 */
export interface NotFoundMappingDetailModel {
    /**
     * 
     * @type {number}
     * @memberof NotFoundMappingDetailModel
     */
    stmtId?: number;
    /**
     * 
     * @type {number}
     * @memberof NotFoundMappingDetailModel
     */
    glVoucherId?: number;
    /**
     * 
     * @type {string}
     * @memberof NotFoundMappingDetailModel
     */
    stmtDatetime?: string;
    /**
     * 
     * @type {string}
     * @memberof NotFoundMappingDetailModel
     */
    transactionDate?: string;
    /**
     * 
     * @type {string}
     * @memberof NotFoundMappingDetailModel
     */
    ref1?: string;
    /**
     * 
     * @type {string}
     * @memberof NotFoundMappingDetailModel
     */
    voucherNo?: string;
    /**
     * 
     * @type {number}
     * @memberof NotFoundMappingDetailModel
     */
    stmtMoneyMovement?: number;
    /**
     * 
     * @type {number}
     * @memberof NotFoundMappingDetailModel
     */
    glAmount?: number;
    /**
     * 
     * @type {number}
     * @memberof NotFoundMappingDetailModel
     */
    mapValue?: number;
}
/**
 * 
 * @export
 * @interface NotFoundMappingDetailModelBaseResponseModel
 */
export interface NotFoundMappingDetailModelBaseResponseModel {
    /**
     * 
     * @type {boolean}
     * @memberof NotFoundMappingDetailModelBaseResponseModel
     */
    success?: boolean;
    /**
     * 
     * @type {string}
     * @memberof NotFoundMappingDetailModelBaseResponseModel
     */
    message?: string;
    /**
     * 
     * @type {number}
     * @memberof NotFoundMappingDetailModelBaseResponseModel
     */
    statusCode?: number;
    /**
     * 
     * @type {NotFoundMappingDetailModel}
     * @memberof NotFoundMappingDetailModelBaseResponseModel
     */
    data?: NotFoundMappingDetailModel;
}
/**
 * 
 * @export
 * @interface NotFoundMappingModel
 */
export interface NotFoundMappingModel {
    /**
     * 
     * @type {number}
     * @memberof NotFoundMappingModel
     */
    rowNumber?: number;
    /**
     * 
     * @type {number}
     * @memberof NotFoundMappingModel
     */
    stmtId?: number;
    /**
     * 
     * @type {number}
     * @memberof NotFoundMappingModel
     */
    glVoucherId?: number;
    /**
     * 
     * @type {number}
     * @memberof NotFoundMappingModel
     */
    accountId?: number;
    /**
     * 
     * @type {number}
     * @memberof NotFoundMappingModel
     */
    bankAccountId?: number;
    /**
     * 
     * @type {string}
     * @memberof NotFoundMappingModel
     */
    bankAccountName?: string;
    /**
     * 
     * @type {string}
     * @memberof NotFoundMappingModel
     */
    bankAccountNo?: string;
    /**
     * 
     * @type {string}
     * @memberof NotFoundMappingModel
     */
    bankAccountType?: string;
    /**
     * 
     * @type {string}
     * @memberof NotFoundMappingModel
     */
    stmtDatetime?: string;
    /**
     * 
     * @type {string}
     * @memberof NotFoundMappingModel
     */
    stmtDescription?: string;
    /**
     * 
     * @type {number}
     * @memberof NotFoundMappingModel
     */
    stmtMoneyMovement?: number;
    /**
     * 
     * @type {string}
     * @memberof NotFoundMappingModel
     */
    chequeNo?: string;
    /**
     * 
     * @type {string}
     * @memberof NotFoundMappingModel
     */
    transactionDate?: string;
    /**
     * 
     * @type {string}
     * @memberof NotFoundMappingModel
     */
    voucherNo?: string;
    /**
     * 
     * @type {string}
     * @memberof NotFoundMappingModel
     */
    voucherRemark?: string;
    /**
     * 
     * @type {number}
     * @memberof NotFoundMappingModel
     */
    glAmount?: number;
    /**
     * 
     * @type {string}
     * @memberof NotFoundMappingModel
     */
    ref1?: string;
    /**
     * 
     * @type {number}
     * @memberof NotFoundMappingModel
     */
    mappedAmount?: number;
    /**
     * 
     * @type {number}
     * @memberof NotFoundMappingModel
     */
    remainAmount?: number;
}
/**
 * 
 * @export
 * @interface NotFoundMappingResponseModel
 */
export interface NotFoundMappingResponseModel {
    /**
     * 
     * @type {boolean}
     * @memberof NotFoundMappingResponseModel
     */
    success?: boolean;
    /**
     * 
     * @type {string}
     * @memberof NotFoundMappingResponseModel
     */
    message?: string;
    /**
     * 
     * @type {number}
     * @memberof NotFoundMappingResponseModel
     */
    statusCode?: number;
    /**
     * 
     * @type {number}
     * @memberof NotFoundMappingResponseModel
     */
    pageIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof NotFoundMappingResponseModel
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof NotFoundMappingResponseModel
     */
    pageAll?: number;
    /**
     * 
     * @type {number}
     * @memberof NotFoundMappingResponseModel
     */
    totalRecord?: number;
    /**
     * 
     * @type {Array<NotFoundMappingModel>}
     * @memberof NotFoundMappingResponseModel
     */
    data?: Array<NotFoundMappingModel>;
}
/**
 * 
 * @export
 * @interface NotiStepIdModel
 */
export interface NotiStepIdModel {
    /**
     * 
     * @type {number}
     * @memberof NotiStepIdModel
     */
    waitingOMSOP?: number;
    /**
     * 
     * @type {number}
     * @memberof NotiStepIdModel
     */
    waitingOMNC?: number;
    /**
     * 
     * @type {number}
     * @memberof NotiStepIdModel
     */
    waitingOMClaim?: number;
    /**
     * 
     * @type {number}
     * @memberof NotiStepIdModel
     */
    countNotfoundVoucher?: number;
    /**
     * 
     * @type {number}
     * @memberof NotiStepIdModel
     */
    countNotFoundStatement?: number;
    /**
     * 
     * @type {number}
     * @memberof NotiStepIdModel
     */
    waitingARCNClaim?: number;
    /**
     * 
     * @type {number}
     * @memberof NotiStepIdModel
     */
    waitingARCNBrandRebate?: number;
    /**
     * 
     * @type {number}
     * @memberof NotiStepIdModel
     */
    waitingARCNInhouseCampaign?: number;
    /**
     * 
     * @type {number}
     * @memberof NotiStepIdModel
     */
    waitingTravel?: number;
}
/**
 * 
 * @export
 * @interface NotiStepIdModelBaseResponseModel
 */
export interface NotiStepIdModelBaseResponseModel {
    /**
     * 
     * @type {boolean}
     * @memberof NotiStepIdModelBaseResponseModel
     */
    success?: boolean;
    /**
     * 
     * @type {string}
     * @memberof NotiStepIdModelBaseResponseModel
     */
    message?: string;
    /**
     * 
     * @type {number}
     * @memberof NotiStepIdModelBaseResponseModel
     */
    statusCode?: number;
    /**
     * 
     * @type {NotiStepIdModel}
     * @memberof NotiStepIdModelBaseResponseModel
     */
    data?: NotiStepIdModel;
}
/**
 * 
 * @export
 * @interface OrganizationModel
 */
export interface OrganizationModel {
    /**
     * 
     * @type {number}
     * @memberof OrganizationModel
     */
    organizationId?: number;
    /**
     * 
     * @type {string}
     * @memberof OrganizationModel
     */
    organizationNameTh?: string;
}

/**
 * 
 * @export
 */
export const PaymentSOPStatus = {
    NUMBER_9: 9,
    NUMBER_10: 10,
    NUMBER_11: 11,
    NUMBER_12: 12,
    NUMBER_13: 13,
    NUMBER_14: 14,
    NUMBER_15: 15
} as const;
export type PaymentSOPStatus = typeof PaymentSOPStatus[keyof typeof PaymentSOPStatus];


/**
 * 
 * @export
 */
export const PaymentTravelStatus = {
    NUMBER_5: 5,
    NUMBER_6: 6,
    NUMBER_7: 7,
    NUMBER_8: 8,
    NUMBER_9: 9,
    NUMBER_10: 10,
    NUMBER_11: 11
} as const;
export type PaymentTravelStatus = typeof PaymentTravelStatus[keyof typeof PaymentTravelStatus];

/**
 * 
 * @export
 * @interface PermissionResponseModel
 */
export interface PermissionResponseModel {
    /**
     * 
     * @type {number}
     * @memberof PermissionResponseModel
     */
    permissionId?: number;
    /**
     * 
     * @type {string}
     * @memberof PermissionResponseModel
     */
    permissionName?: string;
    /**
     * 
     * @type {number}
     * @memberof PermissionResponseModel
     */
    menuId?: number;
    /**
     * 
     * @type {boolean}
     * @memberof PermissionResponseModel
     */
    isAllow?: boolean;
}
/**
 * 
 * @export
 * @interface PermissionResponseModelListBaseResponseModel
 */
export interface PermissionResponseModelListBaseResponseModel {
    /**
     * 
     * @type {boolean}
     * @memberof PermissionResponseModelListBaseResponseModel
     */
    success?: boolean;
    /**
     * 
     * @type {string}
     * @memberof PermissionResponseModelListBaseResponseModel
     */
    message?: string;
    /**
     * 
     * @type {number}
     * @memberof PermissionResponseModelListBaseResponseModel
     */
    statusCode?: number;
    /**
     * 
     * @type {Array<PermissionResponseModel>}
     * @memberof PermissionResponseModelListBaseResponseModel
     */
    data?: Array<PermissionResponseModel>;
}

/**
 * 
 * @export
 */
export const PersonType = {
    NUMBER_1: 1,
    NUMBER_2: 2
} as const;
export type PersonType = typeof PersonType[keyof typeof PersonType];

/**
 * 
 * @export
 * @interface ProFileCreditModel
 */
export interface ProFileCreditModel {
    /**
     * 
     * @type {number}
     * @memberof ProFileCreditModel
     */
    totalScore?: number;
    /**
     * 
     * @type {string}
     * @memberof ProFileCreditModel
     */
    creditScore?: string;
    /**
     * 
     * @type {string}
     * @memberof ProFileCreditModel
     */
    grade?: string;
}
/**
 * 
 * @export
 * @interface ProfileModel
 */
export interface ProfileModel {
    /**
     * 
     * @type {ProfileStabilityModel}
     * @memberof ProfileModel
     */
    profileStability?: ProfileStabilityModel;
    /**
     * 
     * @type {CreditworthinessModel}
     * @memberof ProfileModel
     */
    creditworthiness?: CreditworthinessModel;
    /**
     * 
     * @type {FinancialStrengthModel}
     * @memberof ProfileModel
     */
    financialStrength?: FinancialStrengthModel;
    /**
     * 
     * @type {LiquidityModel}
     * @memberof ProfileModel
     */
    liquidity?: LiquidityModel;
    /**
     * 
     * @type {GrowthPotentialModel}
     * @memberof ProfileModel
     */
    growthPotential?: GrowthPotentialModel;
    /**
     * 
     * @type {AverageDelayPayModel}
     * @memberof ProfileModel
     */
    averageDelayPay?: AverageDelayPayModel;
    /**
     * 
     * @type {MaximumDelayPayModel}
     * @memberof ProfileModel
     */
    maximumDelayPay?: MaximumDelayPayModel;
    /**
     * 
     * @type {ProFileCreditModel}
     * @memberof ProfileModel
     */
    proFileCredit?: ProFileCreditModel;
}
/**
 * 
 * @export
 * @interface ProfileModelBaseResponseModel
 */
export interface ProfileModelBaseResponseModel {
    /**
     * 
     * @type {boolean}
     * @memberof ProfileModelBaseResponseModel
     */
    success?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ProfileModelBaseResponseModel
     */
    message?: string;
    /**
     * 
     * @type {number}
     * @memberof ProfileModelBaseResponseModel
     */
    statusCode?: number;
    /**
     * 
     * @type {ProfileModel}
     * @memberof ProfileModelBaseResponseModel
     */
    data?: ProfileModel;
}
/**
 * 
 * @export
 * @interface ProfileStabilityModel
 */
export interface ProfileStabilityModel {
    /**
     * 
     * @type {number}
     * @memberof ProfileStabilityModel
     */
    registrationNo?: number;
    /**
     * 
     * @type {string}
     * @memberof ProfileStabilityModel
     */
    companyName?: string;
    /**
     * 
     * @type {string}
     * @memberof ProfileStabilityModel
     */
    registrationNoPrevious?: string;
    /**
     * 
     * @type {string}
     * @memberof ProfileStabilityModel
     */
    companyStatus?: string;
    /**
     * 
     * @type {number}
     * @memberof ProfileStabilityModel
     */
    yearTotal?: number;
    /**
     * 
     * @type {number}
     * @memberof ProfileStabilityModel
     */
    yearTotalScore?: number;
    /**
     * 
     * @type {string}
     * @memberof ProfileStabilityModel
     */
    companyType?: string;
    /**
     * 
     * @type {string}
     * @memberof ProfileStabilityModel
     */
    registrationDate?: string;
    /**
     * 
     * @type {number}
     * @memberof ProfileStabilityModel
     */
    registeredCapital?: number;
    /**
     * 
     * @type {number}
     * @memberof ProfileStabilityModel
     */
    registeredCapitalScore?: number;
    /**
     * 
     * @type {string}
     * @memberof ProfileStabilityModel
     */
    businessSize?: string;
    /**
     * 
     * @type {number}
     * @memberof ProfileStabilityModel
     */
    businessSizeScore?: number;
    /**
     * 
     * @type {string}
     * @memberof ProfileStabilityModel
     */
    inactiveDate?: string;
    /**
     * 
     * @type {string}
     * @memberof ProfileStabilityModel
     */
    importerExporter?: string;
    /**
     * 
     * @type {number}
     * @memberof ProfileStabilityModel
     */
    importerExporterScore?: number;
    /**
     * 
     * @type {string}
     * @memberof ProfileStabilityModel
     */
    address?: string;
    /**
     * 
     * @type {string}
     * @memberof ProfileStabilityModel
     */
    subDistrict?: string;
    /**
     * 
     * @type {string}
     * @memberof ProfileStabilityModel
     */
    district?: string;
    /**
     * 
     * @type {string}
     * @memberof ProfileStabilityModel
     */
    province?: string;
    /**
     * 
     * @type {string}
     * @memberof ProfileStabilityModel
     */
    region?: string;
    /**
     * 
     * @type {string}
     * @memberof ProfileStabilityModel
     */
    mobilePhone?: string;
    /**
     * 
     * @type {string}
     * @memberof ProfileStabilityModel
     */
    officialSignatory?: string;
    /**
     * 
     * @type {string}
     * @memberof ProfileStabilityModel
     */
    tsicCodeNo1?: string;
    /**
     * 
     * @type {number}
     * @memberof ProfileStabilityModel
     */
    tsicCodeNo1Score?: number;
    /**
     * 
     * @type {string}
     * @memberof ProfileStabilityModel
     */
    tsicCodeNo2?: string;
    /**
     * 
     * @type {number}
     * @memberof ProfileStabilityModel
     */
    tsicCodeNo2Score?: number;
    /**
     * 
     * @type {string}
     * @memberof ProfileStabilityModel
     */
    tsicCodeNo3?: string;
    /**
     * 
     * @type {number}
     * @memberof ProfileStabilityModel
     */
    tsicCodeNo3Score?: number;
    /**
     * 
     * @type {string}
     * @memberof ProfileStabilityModel
     */
    naicsCodeNo1?: string;
    /**
     * 
     * @type {number}
     * @memberof ProfileStabilityModel
     */
    naicsCodeNo1Score?: number;
    /**
     * 
     * @type {string}
     * @memberof ProfileStabilityModel
     */
    naicsCodeNo2?: string;
    /**
     * 
     * @type {number}
     * @memberof ProfileStabilityModel
     */
    naicsCodeNo2Score?: number;
    /**
     * 
     * @type {string}
     * @memberof ProfileStabilityModel
     */
    naicsCodeNo3?: string;
    /**
     * 
     * @type {number}
     * @memberof ProfileStabilityModel
     */
    naicsCodeNo3Score?: number;
    /**
     * 
     * @type {number}
     * @memberof ProfileStabilityModel
     */
    maxscoreG1?: number;
    /**
     * 
     * @type {number}
     * @memberof ProfileStabilityModel
     */
    actualScoreG1?: number;
    /**
     * 
     * @type {number}
     * @memberof ProfileStabilityModel
     */
    percentG1?: number;
    /**
     * 
     * @type {number}
     * @memberof ProfileStabilityModel
     */
    percentWeightG1?: number;
}
/**
 * 
 * @export
 * @interface RebateSendApcnFaB2bModel
 */
export interface RebateSendApcnFaB2bModel {
    /**
     * 
     * @type {Array<TrnRbtCnapModel>}
     * @memberof RebateSendApcnFaB2bModel
     */
    trnRbtCnap?: Array<TrnRbtCnapModel>;
    /**
     * 
     * @type {Array<TrnRbtCnapFileModel>}
     * @memberof RebateSendApcnFaB2bModel
     */
    trnRbtCnapFile?: Array<TrnRbtCnapFileModel>;
}
/**
 * 
 * @export
 * @interface RebateSendArcnBrnFaModel
 */
export interface RebateSendArcnBrnFaModel {
    /**
     * 
     * @type {Array<TrnRbtCnarBrandModel>}
     * @memberof RebateSendArcnBrnFaModel
     */
    trnRbtCnarBrand?: Array<TrnRbtCnarBrandModel>;
    /**
     * 
     * @type {Array<TrnRbtCnarBrandFileModel>}
     * @memberof RebateSendArcnBrnFaModel
     */
    trnRbtCnarBrandFile?: Array<TrnRbtCnarBrandFileModel>;
}
/**
 * 
 * @export
 * @interface RebateSendArcnInhFaModel
 */
export interface RebateSendArcnInhFaModel {
    /**
     * 
     * @type {Array<TrnRbtCnarInhouseModel>}
     * @memberof RebateSendArcnInhFaModel
     */
    trnRbtCnarInhouse?: Array<TrnRbtCnarInhouseModel>;
    /**
     * 
     * @type {Array<TrnRbtCnarInhouseFileModel>}
     * @memberof RebateSendArcnInhFaModel
     */
    trnRbtCnarInhouseFile?: Array<TrnRbtCnarInhouseFileModel>;
}

/**
 * 
 * @export
 */
export const RefType = {
    NUMBER_1: 1,
    NUMBER_2: 2,
    NUMBER_3: 3,
    NUMBER_4: 4
} as const;
export type RefType = typeof RefType[keyof typeof RefType];

/**
 * 
 * @export
 * @interface RefreshTokenModel
 */
export interface RefreshTokenModel {
    /**
     * 
     * @type {string}
     * @memberof RefreshTokenModel
     */
    refreshToken?: string;
}
/**
 * 
 * @export
 * @interface RegisterCustomerAddressModel
 */
export interface RegisterCustomerAddressModel {
    /**
     * 
     * @type {number}
     * @memberof RegisterCustomerAddressModel
     */
    ownerUserId?: number;
    /**
     * 
     * @type {number}
     * @memberof RegisterCustomerAddressModel
     */
    regisCustomerId?: number;
    /**
     * 
     * @type {CustomerAddressType}
     * @memberof RegisterCustomerAddressModel
     */
    addressType?: CustomerAddressType;
    /**
     * 
     * @type {string}
     * @memberof RegisterCustomerAddressModel
     */
    readonly addressTypeName?: string;
    /**
     * 
     * @type {string}
     * @memberof RegisterCustomerAddressModel
     */
    addressDetail?: string;
    /**
     * 
     * @type {string}
     * @memberof RegisterCustomerAddressModel
     */
    building?: string;
    /**
     * 
     * @type {number}
     * @memberof RegisterCustomerAddressModel
     */
    provinceId?: number;
    /**
     * 
     * @type {string}
     * @memberof RegisterCustomerAddressModel
     */
    provinceName?: string;
    /**
     * 
     * @type {number}
     * @memberof RegisterCustomerAddressModel
     */
    districtId?: number;
    /**
     * 
     * @type {string}
     * @memberof RegisterCustomerAddressModel
     */
    districtName?: string;
    /**
     * 
     * @type {number}
     * @memberof RegisterCustomerAddressModel
     */
    subDistrictId?: number;
    /**
     * 
     * @type {string}
     * @memberof RegisterCustomerAddressModel
     */
    subDistrictName?: string;
    /**
     * 
     * @type {string}
     * @memberof RegisterCustomerAddressModel
     */
    zipCode?: string;
    /**
     * 
     * @type {string}
     * @memberof RegisterCustomerAddressModel
     */
    addressRemark?: string;
}


/**
 * 
 * @export
 * @interface RegisterCustomerAttachModel
 */
export interface RegisterCustomerAttachModel {
    /**
     * 
     * @type {number}
     * @memberof RegisterCustomerAttachModel
     */
    ownerUserId?: number;
    /**
     * 
     * @type {number}
     * @memberof RegisterCustomerAttachModel
     */
    regisCustomerId?: number;
    /**
     * 
     * @type {number}
     * @memberof RegisterCustomerAttachModel
     */
    fileNameId?: number;
    /**
     * 
     * @type {string}
     * @memberof RegisterCustomerAttachModel
     */
    fileName?: string;
    /**
     * 
     * @type {string}
     * @memberof RegisterCustomerAttachModel
     */
    filePath?: string;
    /**
     * 
     * @type {string}
     * @memberof RegisterCustomerAttachModel
     */
    fileRemark?: string;
}
/**
 * 
 * @export
 * @interface RegisterCustomerBankModel
 */
export interface RegisterCustomerBankModel {
    /**
     * 
     * @type {number}
     * @memberof RegisterCustomerBankModel
     */
    ownerUserId?: number;
    /**
     * 
     * @type {number}
     * @memberof RegisterCustomerBankModel
     */
    regisCustomerId?: number;
    /**
     * 
     * @type {number}
     * @memberof RegisterCustomerBankModel
     */
    bankId?: number;
    /**
     * 
     * @type {string}
     * @memberof RegisterCustomerBankModel
     */
    bankName?: string;
    /**
     * 
     * @type {string}
     * @memberof RegisterCustomerBankModel
     */
    bankBranch?: string;
    /**
     * 
     * @type {string}
     * @memberof RegisterCustomerBankModel
     */
    bankAccountNo?: string;
    /**
     * 
     * @type {number}
     * @memberof RegisterCustomerBankModel
     */
    depositTypeId?: number;
    /**
     * 
     * @type {string}
     * @memberof RegisterCustomerBankModel
     */
    depositTypeName?: string;
}
/**
 * 
 * @export
 * @interface RegisterCustomerContactModel
 */
export interface RegisterCustomerContactModel {
    /**
     * 
     * @type {number}
     * @memberof RegisterCustomerContactModel
     */
    ownerUserId?: number;
    /**
     * 
     * @type {number}
     * @memberof RegisterCustomerContactModel
     */
    regisCustomerId?: number;
    /**
     * 
     * @type {string}
     * @memberof RegisterCustomerContactModel
     */
    contactName?: string;
    /**
     * 
     * @type {string}
     * @memberof RegisterCustomerContactModel
     */
    contactDept?: string;
    /**
     * 
     * @type {string}
     * @memberof RegisterCustomerContactModel
     */
    contactTel?: string;
    /**
     * 
     * @type {string}
     * @memberof RegisterCustomerContactModel
     */
    contactFax?: string;
    /**
     * 
     * @type {string}
     * @memberof RegisterCustomerContactModel
     */
    contactEmail?: string;
    /**
     * 
     * @type {string}
     * @memberof RegisterCustomerContactModel
     */
    contactLineId?: string;
    /**
     * 
     * @type {string}
     * @memberof RegisterCustomerContactModel
     */
    contactRemark?: string;
}
/**
 * 
 * @export
 * @interface RegisterCustomerGetSearchModel
 */
export interface RegisterCustomerGetSearchModel {
    /**
     * 
     * @type {number}
     * @memberof RegisterCustomerGetSearchModel
     */
    rowNumber?: number;
    /**
     * 
     * @type {number}
     * @memberof RegisterCustomerGetSearchModel
     */
    regisCustomerId?: number;
    /**
     * 
     * @type {string}
     * @memberof RegisterCustomerGetSearchModel
     */
    customerName?: string;
    /**
     * 
     * @type {CustomerCreditType}
     * @memberof RegisterCustomerGetSearchModel
     */
    customerCreditType?: CustomerCreditType;
    /**
     * 
     * @type {string}
     * @memberof RegisterCustomerGetSearchModel
     */
    readonly customerCreditTypeName?: string;
    /**
     * 
     * @type {string}
     * @memberof RegisterCustomerGetSearchModel
     */
    salesOwner?: string;
    /**
     * 
     * @type {CustomerRegisterStatus}
     * @memberof RegisterCustomerGetSearchModel
     */
    regisStatus?: CustomerRegisterStatus;
    /**
     * 
     * @type {string}
     * @memberof RegisterCustomerGetSearchModel
     */
    readonly regisStatusName?: string;
    /**
     * 
     * @type {string}
     * @memberof RegisterCustomerGetSearchModel
     */
    registeredDate?: string;
    /**
     * 
     * @type {number}
     * @memberof RegisterCustomerGetSearchModel
     */
    workflowId?: number;
    /**
     * 
     * @type {number}
     * @memberof RegisterCustomerGetSearchModel
     */
    currentStepId?: number;
    /**
     * 
     * @type {number}
     * @memberof RegisterCustomerGetSearchModel
     */
    organizationId?: number;
    /**
     * 
     * @type {number}
     * @memberof RegisterCustomerGetSearchModel
     */
    ownerUserId?: number;
    /**
     * 
     * @type {string}
     * @memberof RegisterCustomerGetSearchModel
     */
    requestedDate?: string;
    /**
     * 
     * @type {string}
     * @memberof RegisterCustomerGetSearchModel
     */
    remarkRequest?: string;
}


/**
 * 
 * @export
 * @interface RegisterCustomerGetSearchModelBaseResponsePagination
 */
export interface RegisterCustomerGetSearchModelBaseResponsePagination {
    /**
     * 
     * @type {boolean}
     * @memberof RegisterCustomerGetSearchModelBaseResponsePagination
     */
    success?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RegisterCustomerGetSearchModelBaseResponsePagination
     */
    message?: string;
    /**
     * 
     * @type {number}
     * @memberof RegisterCustomerGetSearchModelBaseResponsePagination
     */
    statusCode?: number;
    /**
     * 
     * @type {number}
     * @memberof RegisterCustomerGetSearchModelBaseResponsePagination
     */
    pageIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof RegisterCustomerGetSearchModelBaseResponsePagination
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof RegisterCustomerGetSearchModelBaseResponsePagination
     */
    pageAll?: number;
    /**
     * 
     * @type {number}
     * @memberof RegisterCustomerGetSearchModelBaseResponsePagination
     */
    totalRecord?: number;
    /**
     * 
     * @type {Array<RegisterCustomerGetSearchModel>}
     * @memberof RegisterCustomerGetSearchModelBaseResponsePagination
     */
    data?: Array<RegisterCustomerGetSearchModel>;
}
/**
 * 
 * @export
 * @interface RegisterCustomerUpdateModel
 */
export interface RegisterCustomerUpdateModel {
    /**
     * 
     * @type {number}
     * @memberof RegisterCustomerUpdateModel
     */
    companyId?: number;
    /**
     * 
     * @type {string}
     * @memberof RegisterCustomerUpdateModel
     */
    companyNameTh?: string;
    /**
     * 
     * @type {number}
     * @memberof RegisterCustomerUpdateModel
     */
    organizationId?: number;
    /**
     * 
     * @type {string}
     * @memberof RegisterCustomerUpdateModel
     */
    orgNameTh?: string;
    /**
     * 
     * @type {number}
     * @memberof RegisterCustomerUpdateModel
     */
    ownerUserId?: number;
    /**
     * 
     * @type {string}
     * @memberof RegisterCustomerUpdateModel
     */
    ownerEmployeeCode?: string;
    /**
     * 
     * @type {string}
     * @memberof RegisterCustomerUpdateModel
     */
    ownerUserName?: string;
    /**
     * 
     * @type {PersonType}
     * @memberof RegisterCustomerUpdateModel
     */
    customerType?: PersonType;
    /**
     * 
     * @type {string}
     * @memberof RegisterCustomerUpdateModel
     */
    readonly customerTypeName?: string;
    /**
     * 
     * @type {CustomerCreditType}
     * @memberof RegisterCustomerUpdateModel
     */
    customerCreditType?: CustomerCreditType;
    /**
     * 
     * @type {string}
     * @memberof RegisterCustomerUpdateModel
     */
    readonly customerCreditTypeName?: string;
    /**
     * 
     * @type {number}
     * @memberof RegisterCustomerUpdateModel
     */
    amountRequest?: number;
    /**
     * 
     * @type {number}
     * @memberof RegisterCustomerUpdateModel
     */
    creditDays?: number;
    /**
     * 
     * @type {string}
     * @memberof RegisterCustomerUpdateModel
     */
    customerName?: string;
    /**
     * 
     * @type {string}
     * @memberof RegisterCustomerUpdateModel
     */
    customerLastname?: string;
    /**
     * 
     * @type {string}
     * @memberof RegisterCustomerUpdateModel
     */
    customerNameEn?: string;
    /**
     * 
     * @type {string}
     * @memberof RegisterCustomerUpdateModel
     */
    customerLastnameEn?: string;
    /**
     * 
     * @type {string}
     * @memberof RegisterCustomerUpdateModel
     */
    customerTaxCode?: string;
    /**
     * 
     * @type {string}
     * @memberof RegisterCustomerUpdateModel
     */
    registeredDate?: string;
    /**
     * 
     * @type {number}
     * @memberof RegisterCustomerUpdateModel
     */
    registeredCapital?: number;
    /**
     * 
     * @type {number}
     * @memberof RegisterCustomerUpdateModel
     */
    registeredTypeId?: number;
    /**
     * 
     * @type {number}
     * @memberof RegisterCustomerUpdateModel
     */
    businessGroupId?: number;
    /**
     * 
     * @type {number}
     * @memberof RegisterCustomerUpdateModel
     */
    businessTypeId?: number;
    /**
     * 
     * @type {number}
     * @memberof RegisterCustomerUpdateModel
     */
    employeeId?: number;
    /**
     * 
     * @type {CustomerRegisterStatus}
     * @memberof RegisterCustomerUpdateModel
     */
    regisStatus?: CustomerRegisterStatus;
    /**
     * 
     * @type {string}
     * @memberof RegisterCustomerUpdateModel
     */
    readonly regisStatusName?: string;
    /**
     * 
     * @type {string}
     * @memberof RegisterCustomerUpdateModel
     */
    regisCode?: string;
    /**
     * 
     * @type {number}
     * @memberof RegisterCustomerUpdateModel
     */
    lastStep?: number;
    /**
     * 
     * @type {boolean}
     * @memberof RegisterCustomerUpdateModel
     */
    activeFlag?: boolean;
    /**
     * 
     * @type {number}
     * @memberof RegisterCustomerUpdateModel
     */
    dayOfBilling?: number;
    /**
     * 
     * @type {number}
     * @memberof RegisterCustomerUpdateModel
     */
    amountApprove?: number;
    /**
     * 
     * @type {number}
     * @memberof RegisterCustomerUpdateModel
     */
    amountInsuranceApprove?: number;
    /**
     * 
     * @type {number}
     * @memberof RegisterCustomerUpdateModel
     */
    workflowId?: number;
    /**
     * 
     * @type {number}
     * @memberof RegisterCustomerUpdateModel
     */
    currentStepId?: number;
    /**
     * 
     * @type {string}
     * @memberof RegisterCustomerUpdateModel
     */
    generateToken?: string;
    /**
     * 
     * @type {Array<RegisterCustomerContactModel>}
     * @memberof RegisterCustomerUpdateModel
     */
    contactList?: Array<RegisterCustomerContactModel>;
    /**
     * 
     * @type {Array<RegisterCustomerAddressModel>}
     * @memberof RegisterCustomerUpdateModel
     */
    addressList?: Array<RegisterCustomerAddressModel>;
    /**
     * 
     * @type {Array<RegisterCustomerBankModel>}
     * @memberof RegisterCustomerUpdateModel
     */
    bankList?: Array<RegisterCustomerBankModel>;
    /**
     * 
     * @type {Array<RegisterCustomerAttachModel>}
     * @memberof RegisterCustomerUpdateModel
     */
    attachList?: Array<RegisterCustomerAttachModel>;
    /**
     * 
     * @type {number}
     * @memberof RegisterCustomerUpdateModel
     */
    regisCustomerId?: number;
}


/**
 * 
 * @export
 * @interface RegisterCustomerUpdateModelBaseResponseModel
 */
export interface RegisterCustomerUpdateModelBaseResponseModel {
    /**
     * 
     * @type {boolean}
     * @memberof RegisterCustomerUpdateModelBaseResponseModel
     */
    success?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RegisterCustomerUpdateModelBaseResponseModel
     */
    message?: string;
    /**
     * 
     * @type {number}
     * @memberof RegisterCustomerUpdateModelBaseResponseModel
     */
    statusCode?: number;
    /**
     * 
     * @type {RegisterCustomerUpdateModel}
     * @memberof RegisterCustomerUpdateModelBaseResponseModel
     */
    data?: RegisterCustomerUpdateModel;
}
/**
 * 
 * @export
 * @interface RemarkModel
 */
export interface RemarkModel {
    /**
     * 
     * @type {number}
     * @memberof RemarkModel
     */
    reqTravelId?: number;
    /**
     * 
     * @type {string}
     * @memberof RemarkModel
     */
    paymentTravelRemark?: string;
}
/**
 * 
 * @export
 * @interface ReportBankReconcileModel
 */
export interface ReportBankReconcileModel {
    /**
     * 
     * @type {number}
     * @memberof ReportBankReconcileModel
     */
    bankAccountId?: number;
    /**
     * 
     * @type {string}
     * @memberof ReportBankReconcileModel
     */
    unit?: string;
    /**
     * 
     * @type {string}
     * @memberof ReportBankReconcileModel
     */
    orgNameTh?: string;
    /**
     * 
     * @type {string}
     * @memberof ReportBankReconcileModel
     */
    bankAccountName?: string;
    /**
     * 
     * @type {string}
     * @memberof ReportBankReconcileModel
     */
    glAccountName?: string;
    /**
     * 
     * @type {string}
     * @memberof ReportBankReconcileModel
     */
    endDate?: string;
    /**
     * 
     * @type {number}
     * @memberof ReportBankReconcileModel
     */
    accountRemain?: number;
    /**
     * 
     * @type {Array<Bankremain>}
     * @memberof ReportBankReconcileModel
     */
    bankRemainPlus?: Array<Bankremain>;
    /**
     * 
     * @type {number}
     * @memberof ReportBankReconcileModel
     */
    sumBankRemainPlus?: number;
    /**
     * 
     * @type {Array<Bankremain>}
     * @memberof ReportBankReconcileModel
     */
    bankRemainMinus?: Array<Bankremain>;
    /**
     * 
     * @type {number}
     * @memberof ReportBankReconcileModel
     */
    sumBankRemainMinus?: number;
    /**
     * 
     * @type {Array<Bankremain>}
     * @memberof ReportBankReconcileModel
     */
    accountRemainPlus?: Array<Bankremain>;
    /**
     * 
     * @type {number}
     * @memberof ReportBankReconcileModel
     */
    sumAccountRemainPlus?: number;
    /**
     * 
     * @type {Array<Bankremain>}
     * @memberof ReportBankReconcileModel
     */
    accountRemainMinus?: Array<Bankremain>;
    /**
     * 
     * @type {number}
     * @memberof ReportBankReconcileModel
     */
    sumAccountRemainMinus?: number;
    /**
     * 
     * @type {number}
     * @memberof ReportBankReconcileModel
     */
    bankRemain?: number;
    /**
     * 
     * @type {number}
     * @memberof ReportBankReconcileModel
     */
    otherRemainPlus?: number;
    /**
     * 
     * @type {number}
     * @memberof ReportBankReconcileModel
     */
    otherRemainMinus?: number;
}
/**
 * 
 * @export
 * @interface ReportBankReconcileModelBaseResponseModel
 */
export interface ReportBankReconcileModelBaseResponseModel {
    /**
     * 
     * @type {boolean}
     * @memberof ReportBankReconcileModelBaseResponseModel
     */
    success?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ReportBankReconcileModelBaseResponseModel
     */
    message?: string;
    /**
     * 
     * @type {number}
     * @memberof ReportBankReconcileModelBaseResponseModel
     */
    statusCode?: number;
    /**
     * 
     * @type {ReportBankReconcileModel}
     * @memberof ReportBankReconcileModelBaseResponseModel
     */
    data?: ReportBankReconcileModel;
}
/**
 * 
 * @export
 * @interface RequestReportBankReconcileModel
 */
export interface RequestReportBankReconcileModel {
    /**
     * 
     * @type {string}
     * @memberof RequestReportBankReconcileModel
     */
    endDate?: string;
    /**
     * 
     * @type {number}
     * @memberof RequestReportBankReconcileModel
     */
    bankAccountId?: number;
    /**
     * 
     * @type {number}
     * @memberof RequestReportBankReconcileModel
     */
    unit?: number;
    /**
     * 
     * @type {number}
     * @memberof RequestReportBankReconcileModel
     */
    type?: number;
    /**
     * 
     * @type {string}
     * @memberof RequestReportBankReconcileModel
     */
    unitName?: string;
}

/**
 * 
 * @export
 */
export const RequestUnHoldStatus = {
    NUMBER_0: 0,
    NUMBER_1: 1,
    NUMBER_2: 2,
    NUMBER_3: 3,
    NUMBER_4: 4
} as const;
export type RequestUnHoldStatus = typeof RequestUnHoldStatus[keyof typeof RequestUnHoldStatus];

/**
 * 
 * @export
 * @interface RequestUnholdDetailModel
 */
export interface RequestUnholdDetailModel {
    /**
     * 
     * @type {number}
     * @memberof RequestUnholdDetailModel
     */
    soListId?: number;
}
/**
 * 
 * @export
 * @interface RequestUnholdGetSearchModel
 */
export interface RequestUnholdGetSearchModel {
    /**
     * 
     * @type {number}
     * @memberof RequestUnholdGetSearchModel
     */
    rowNumber?: number;
    /**
     * 
     * @type {number}
     * @memberof RequestUnholdGetSearchModel
     */
    reqUnholdId?: number;
    /**
     * 
     * @type {string}
     * @memberof RequestUnholdGetSearchModel
     */
    customerCode?: string;
    /**
     * 
     * @type {string}
     * @memberof RequestUnholdGetSearchModel
     */
    customerName?: string;
    /**
     * 
     * @type {number}
     * @memberof RequestUnholdGetSearchModel
     */
    reqCountItem?: number;
    /**
     * 
     * @type {number}
     * @memberof RequestUnholdGetSearchModel
     */
    reqAmount?: number;
    /**
     * 
     * @type {string}
     * @memberof RequestUnholdGetSearchModel
     */
    createDate?: string;
    /**
     * 
     * @type {RequestUnHoldStatus}
     * @memberof RequestUnholdGetSearchModel
     */
    reqStatus?: RequestUnHoldStatus;
    /**
     * 
     * @type {string}
     * @memberof RequestUnholdGetSearchModel
     */
    readonly reqStatusName?: string;
    /**
     * 
     * @type {string}
     * @memberof RequestUnholdGetSearchModel
     */
    remark?: string;
    /**
     * 
     * @type {number}
     * @memberof RequestUnholdGetSearchModel
     */
    currentStepId?: number;
    /**
     * 
     * @type {Array<RequestUnholdDetailModel>}
     * @memberof RequestUnholdGetSearchModel
     */
    reqUnholdDetail?: Array<RequestUnholdDetailModel>;
    /**
     * 
     * @type {number}
     * @memberof RequestUnholdGetSearchModel
     */
    organizationId?: number;
    /**
     * 
     * @type {number}
     * @memberof RequestUnholdGetSearchModel
     */
    ownerUserId?: number;
    /**
     * 
     * @type {string}
     * @memberof RequestUnholdGetSearchModel
     */
    requestedDate?: string;
    /**
     * 
     * @type {string}
     * @memberof RequestUnholdGetSearchModel
     */
    rejectRemark?: string;
}


/**
 * 
 * @export
 * @interface RequestUnholdGetSearchResponseModel
 */
export interface RequestUnholdGetSearchResponseModel {
    /**
     * 
     * @type {boolean}
     * @memberof RequestUnholdGetSearchResponseModel
     */
    success?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RequestUnholdGetSearchResponseModel
     */
    message?: string;
    /**
     * 
     * @type {number}
     * @memberof RequestUnholdGetSearchResponseModel
     */
    statusCode?: number;
    /**
     * 
     * @type {number}
     * @memberof RequestUnholdGetSearchResponseModel
     */
    pageIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof RequestUnholdGetSearchResponseModel
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof RequestUnholdGetSearchResponseModel
     */
    pageAll?: number;
    /**
     * 
     * @type {number}
     * @memberof RequestUnholdGetSearchResponseModel
     */
    totalRecord?: number;
    /**
     * 
     * @type {Array<RequestUnholdGetSearchModel>}
     * @memberof RequestUnholdGetSearchResponseModel
     */
    data?: Array<RequestUnholdGetSearchModel>;
    /**
     * 
     * @type {number}
     * @memberof RequestUnholdGetSearchResponseModel
     */
    workflowId?: number;
    /**
     * 
     * @type {number}
     * @memberof RequestUnholdGetSearchResponseModel
     */
    approvalTotal?: number;
    /**
     * 
     * @type {number}
     * @memberof RequestUnholdGetSearchResponseModel
     */
    approvalConfirmed?: number;
    /**
     * 
     * @type {Array<BaseCountStatusModel>}
     * @memberof RequestUnholdGetSearchResponseModel
     */
    countStatusList?: Array<BaseCountStatusModel>;
}
/**
 * 
 * @export
 * @interface RequestUnholdGroupModel
 */
export interface RequestUnholdGroupModel {
    /**
     * 
     * @type {number}
     * @memberof RequestUnholdGroupModel
     */
    reqUnholdId?: number;
    /**
     * 
     * @type {number}
     * @memberof RequestUnholdGroupModel
     */
    customerId?: number;
    /**
     * 
     * @type {RequestUnHoldStatus}
     * @memberof RequestUnholdGroupModel
     */
    reqStatus?: RequestUnHoldStatus;
    /**
     * 
     * @type {string}
     * @memberof RequestUnholdGroupModel
     */
    readonly reqStatusName?: string;
    /**
     * 
     * @type {string}
     * @memberof RequestUnholdGroupModel
     */
    remark?: string;
    /**
     * 
     * @type {Array<RequestUnholdDetailModel>}
     * @memberof RequestUnholdGroupModel
     */
    reqUnholdDetail?: Array<RequestUnholdDetailModel>;
}


/**
 * 
 * @export
 * @interface RequestUnholdGroupModelListBaseResponseModel
 */
export interface RequestUnholdGroupModelListBaseResponseModel {
    /**
     * 
     * @type {boolean}
     * @memberof RequestUnholdGroupModelListBaseResponseModel
     */
    success?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RequestUnholdGroupModelListBaseResponseModel
     */
    message?: string;
    /**
     * 
     * @type {number}
     * @memberof RequestUnholdGroupModelListBaseResponseModel
     */
    statusCode?: number;
    /**
     * 
     * @type {Array<RequestUnholdGroupModel>}
     * @memberof RequestUnholdGroupModelListBaseResponseModel
     */
    data?: Array<RequestUnholdGroupModel>;
}
/**
 * 
 * @export
 * @interface RequestUnholdSOGetModel
 */
export interface RequestUnholdSOGetModel {
    /**
     * 
     * @type {number}
     * @memberof RequestUnholdSOGetModel
     */
    reqUnholdId?: number;
    /**
     * 
     * @type {number}
     * @memberof RequestUnholdSOGetModel
     */
    customerId?: number;
    /**
     * 
     * @type {string}
     * @memberof RequestUnholdSOGetModel
     */
    customerName?: string;
    /**
     * 
     * @type {CustomerAddressType}
     * @memberof RequestUnholdSOGetModel
     */
    addressType?: CustomerAddressType;
    /**
     * 
     * @type {string}
     * @memberof RequestUnholdSOGetModel
     */
    readonly addressTypeName?: string;
    /**
     * 
     * @type {string}
     * @memberof RequestUnholdSOGetModel
     */
    addressDetail?: string;
    /**
     * 
     * @type {string}
     * @memberof RequestUnholdSOGetModel
     */
    subDistrictName?: string;
    /**
     * 
     * @type {string}
     * @memberof RequestUnholdSOGetModel
     */
    districtName?: string;
    /**
     * 
     * @type {string}
     * @memberof RequestUnholdSOGetModel
     */
    provinceName?: string;
    /**
     * 
     * @type {string}
     * @memberof RequestUnholdSOGetModel
     */
    zipCode?: string;
    /**
     * 
     * @type {string}
     * @memberof RequestUnholdSOGetModel
     */
    contactTel?: string;
    /**
     * 
     * @type {string}
     * @memberof RequestUnholdSOGetModel
     */
    contactEmail?: string;
    /**
     * 
     * @type {number}
     * @memberof RequestUnholdSOGetModel
     */
    totalAmount?: number;
    /**
     * 
     * @type {string}
     * @memberof RequestUnholdSOGetModel
     */
    remark?: string;
    /**
     * 
     * @type {Array<RequestUnholdSOListModel>}
     * @memberof RequestUnholdSOGetModel
     */
    soList?: Array<RequestUnholdSOListModel>;
    /**
     * 
     * @type {number}
     * @memberof RequestUnholdSOGetModel
     */
    workflowId?: number;
    /**
     * 
     * @type {number}
     * @memberof RequestUnholdSOGetModel
     */
    currentStepId?: number;
}


/**
 * 
 * @export
 * @interface RequestUnholdSOGetModelBaseResponsePagination
 */
export interface RequestUnholdSOGetModelBaseResponsePagination {
    /**
     * 
     * @type {boolean}
     * @memberof RequestUnholdSOGetModelBaseResponsePagination
     */
    success?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RequestUnholdSOGetModelBaseResponsePagination
     */
    message?: string;
    /**
     * 
     * @type {number}
     * @memberof RequestUnholdSOGetModelBaseResponsePagination
     */
    statusCode?: number;
    /**
     * 
     * @type {number}
     * @memberof RequestUnholdSOGetModelBaseResponsePagination
     */
    pageIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof RequestUnholdSOGetModelBaseResponsePagination
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof RequestUnholdSOGetModelBaseResponsePagination
     */
    pageAll?: number;
    /**
     * 
     * @type {number}
     * @memberof RequestUnholdSOGetModelBaseResponsePagination
     */
    totalRecord?: number;
    /**
     * 
     * @type {Array<RequestUnholdSOGetModel>}
     * @memberof RequestUnholdSOGetModelBaseResponsePagination
     */
    data?: Array<RequestUnholdSOGetModel>;
}
/**
 * 
 * @export
 * @interface RequestUnholdSOListModel
 */
export interface RequestUnholdSOListModel {
    /**
     * 
     * @type {number}
     * @memberof RequestUnholdSOListModel
     */
    soListId?: number;
    /**
     * 
     * @type {string}
     * @memberof RequestUnholdSOListModel
     */
    soNo?: string;
    /**
     * 
     * @type {string}
     * @memberof RequestUnholdSOListModel
     */
    refSo?: string;
    /**
     * 
     * @type {number}
     * @memberof RequestUnholdSOListModel
     */
    soTotal?: number;
    /**
     * 
     * @type {string}
     * @memberof RequestUnholdSOListModel
     */
    creditType?: string;
    /**
     * 
     * @type {string}
     * @memberof RequestUnholdSOListModel
     */
    soDate?: string;
    /**
     * 
     * @type {number}
     * @memberof RequestUnholdSOListModel
     */
    soStatus?: number;
    /**
     * 
     * @type {string}
     * @memberof RequestUnholdSOListModel
     */
    remark?: string;
}
/**
 * 
 * @export
 * @interface RequestUnholdSearchGetSOModel
 */
export interface RequestUnholdSearchGetSOModel {
    /**
     * 
     * @type {number}
     * @memberof RequestUnholdSearchGetSOModel
     */
    rowNumber?: number;
    /**
     * 
     * @type {number}
     * @memberof RequestUnholdSearchGetSOModel
     */
    soListId?: number;
    /**
     * 
     * @type {number}
     * @memberof RequestUnholdSearchGetSOModel
     */
    customerId?: number;
    /**
     * 
     * @type {string}
     * @memberof RequestUnholdSearchGetSOModel
     */
    customerCode?: string;
    /**
     * 
     * @type {string}
     * @memberof RequestUnholdSearchGetSOModel
     */
    customerName?: string;
    /**
     * 
     * @type {string}
     * @memberof RequestUnholdSearchGetSOModel
     */
    soNo?: string;
    /**
     * 
     * @type {number}
     * @memberof RequestUnholdSearchGetSOModel
     */
    amount?: number;
    /**
     * 
     * @type {string}
     * @memberof RequestUnholdSearchGetSOModel
     */
    creditType?: string;
    /**
     * 
     * @type {string}
     * @memberof RequestUnholdSearchGetSOModel
     */
    soDate?: string;
    /**
     * 
     * @type {number}
     * @memberof RequestUnholdSearchGetSOModel
     */
    soHoldStatus?: number;
}
/**
 * 
 * @export
 * @interface RequestUnholdSearchGetSOModelBaseResponsePagination
 */
export interface RequestUnholdSearchGetSOModelBaseResponsePagination {
    /**
     * 
     * @type {boolean}
     * @memberof RequestUnholdSearchGetSOModelBaseResponsePagination
     */
    success?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RequestUnholdSearchGetSOModelBaseResponsePagination
     */
    message?: string;
    /**
     * 
     * @type {number}
     * @memberof RequestUnholdSearchGetSOModelBaseResponsePagination
     */
    statusCode?: number;
    /**
     * 
     * @type {number}
     * @memberof RequestUnholdSearchGetSOModelBaseResponsePagination
     */
    pageIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof RequestUnholdSearchGetSOModelBaseResponsePagination
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof RequestUnholdSearchGetSOModelBaseResponsePagination
     */
    pageAll?: number;
    /**
     * 
     * @type {number}
     * @memberof RequestUnholdSearchGetSOModelBaseResponsePagination
     */
    totalRecord?: number;
    /**
     * 
     * @type {Array<RequestUnholdSearchGetSOModel>}
     * @memberof RequestUnholdSearchGetSOModelBaseResponsePagination
     */
    data?: Array<RequestUnholdSearchGetSOModel>;
}
/**
 * 
 * @export
 * @interface RequestUpdateCreditAmount
 */
export interface RequestUpdateCreditAmount {
    /**
     * 
     * @type {number}
     * @memberof RequestUpdateCreditAmount
     */
    reqUpdateCustomerId?: number;
    /**
     * 
     * @type {number}
     * @memberof RequestUpdateCreditAmount
     */
    amountApprove?: number;
    /**
     * 
     * @type {number}
     * @memberof RequestUpdateCreditAmount
     */
    creditDaysApprove?: number;
    /**
     * 
     * @type {number}
     * @memberof RequestUpdateCreditAmount
     */
    amountInsuranceApprove?: number;
    /**
     * 
     * @type {string}
     * @memberof RequestUpdateCreditAmount
     */
    remarkApprove?: string;
}
/**
 * 
 * @export
 * @interface RequestUpdateCreditAmountBaseResponseModel
 */
export interface RequestUpdateCreditAmountBaseResponseModel {
    /**
     * 
     * @type {boolean}
     * @memberof RequestUpdateCreditAmountBaseResponseModel
     */
    success?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RequestUpdateCreditAmountBaseResponseModel
     */
    message?: string;
    /**
     * 
     * @type {number}
     * @memberof RequestUpdateCreditAmountBaseResponseModel
     */
    statusCode?: number;
    /**
     * 
     * @type {RequestUpdateCreditAmount}
     * @memberof RequestUpdateCreditAmountBaseResponseModel
     */
    data?: RequestUpdateCreditAmount;
}
/**
 * 
 * @export
 * @interface RequestUpdateCustomerAddressModel
 */
export interface RequestUpdateCustomerAddressModel {
    /**
     * 
     * @type {number}
     * @memberof RequestUpdateCustomerAddressModel
     */
    ownerUserId?: number;
    /**
     * 
     * @type {number}
     * @memberof RequestUpdateCustomerAddressModel
     */
    reqUpdateCustomerId?: number;
    /**
     * 
     * @type {CustomerAddressType}
     * @memberof RequestUpdateCustomerAddressModel
     */
    addressType?: CustomerAddressType;
    /**
     * 
     * @type {string}
     * @memberof RequestUpdateCustomerAddressModel
     */
    readonly addressTypeName?: string;
    /**
     * 
     * @type {string}
     * @memberof RequestUpdateCustomerAddressModel
     */
    building?: string;
    /**
     * 
     * @type {number}
     * @memberof RequestUpdateCustomerAddressModel
     */
    provinceId?: number;
    /**
     * 
     * @type {number}
     * @memberof RequestUpdateCustomerAddressModel
     */
    districtId?: number;
    /**
     * 
     * @type {number}
     * @memberof RequestUpdateCustomerAddressModel
     */
    subDistrictId?: number;
    /**
     * 
     * @type {string}
     * @memberof RequestUpdateCustomerAddressModel
     */
    zipCode?: string;
    /**
     * 
     * @type {string}
     * @memberof RequestUpdateCustomerAddressModel
     */
    addressDetail?: string;
    /**
     * 
     * @type {string}
     * @memberof RequestUpdateCustomerAddressModel
     */
    addressRemark?: string;
}


/**
 * 
 * @export
 * @interface RequestUpdateCustomerAttachModel
 */
export interface RequestUpdateCustomerAttachModel {
    /**
     * 
     * @type {number}
     * @memberof RequestUpdateCustomerAttachModel
     */
    ownerUserId?: number;
    /**
     * 
     * @type {number}
     * @memberof RequestUpdateCustomerAttachModel
     */
    reqUpdateCustomerId?: number;
    /**
     * 
     * @type {number}
     * @memberof RequestUpdateCustomerAttachModel
     */
    fileNameId?: number;
    /**
     * 
     * @type {string}
     * @memberof RequestUpdateCustomerAttachModel
     */
    fileName?: string;
    /**
     * 
     * @type {string}
     * @memberof RequestUpdateCustomerAttachModel
     */
    filePath?: string;
    /**
     * 
     * @type {string}
     * @memberof RequestUpdateCustomerAttachModel
     */
    fileRemark?: string;
}
/**
 * 
 * @export
 * @interface RequestUpdateCustomerBankModel
 */
export interface RequestUpdateCustomerBankModel {
    /**
     * 
     * @type {number}
     * @memberof RequestUpdateCustomerBankModel
     */
    ownerUserId?: number;
    /**
     * 
     * @type {number}
     * @memberof RequestUpdateCustomerBankModel
     */
    reqUpdateCustomerId?: number;
    /**
     * 
     * @type {number}
     * @memberof RequestUpdateCustomerBankModel
     */
    bankId?: number;
    /**
     * 
     * @type {string}
     * @memberof RequestUpdateCustomerBankModel
     */
    bankName?: string;
    /**
     * 
     * @type {string}
     * @memberof RequestUpdateCustomerBankModel
     */
    bankBranch?: string;
    /**
     * 
     * @type {string}
     * @memberof RequestUpdateCustomerBankModel
     */
    bankAccountNo?: string;
    /**
     * 
     * @type {number}
     * @memberof RequestUpdateCustomerBankModel
     */
    depositTypeId?: number;
    /**
     * 
     * @type {string}
     * @memberof RequestUpdateCustomerBankModel
     */
    depositTypeName?: string;
}
/**
 * 
 * @export
 * @interface RequestUpdateCustomerContact
 */
export interface RequestUpdateCustomerContact {
    /**
     * 
     * @type {number}
     * @memberof RequestUpdateCustomerContact
     */
    ownerUserId?: number;
    /**
     * 
     * @type {number}
     * @memberof RequestUpdateCustomerContact
     */
    reqUpdateCustomerId?: number;
    /**
     * 
     * @type {string}
     * @memberof RequestUpdateCustomerContact
     */
    contactName?: string;
    /**
     * 
     * @type {string}
     * @memberof RequestUpdateCustomerContact
     */
    contactDept?: string;
    /**
     * 
     * @type {string}
     * @memberof RequestUpdateCustomerContact
     */
    contactTel?: string;
    /**
     * 
     * @type {string}
     * @memberof RequestUpdateCustomerContact
     */
    contactFax?: string;
    /**
     * 
     * @type {string}
     * @memberof RequestUpdateCustomerContact
     */
    contactEmail?: string;
    /**
     * 
     * @type {string}
     * @memberof RequestUpdateCustomerContact
     */
    contactLineId?: string;
    /**
     * 
     * @type {string}
     * @memberof RequestUpdateCustomerContact
     */
    contactRemark?: string;
}

/**
 * 
 * @export
 */
export const RequestUpdateCustomerCreditTypeStatus = {
    NUMBER_1: 1,
    NUMBER_2: 2
} as const;
export type RequestUpdateCustomerCreditTypeStatus = typeof RequestUpdateCustomerCreditTypeStatus[keyof typeof RequestUpdateCustomerCreditTypeStatus];

/**
 * 
 * @export
 * @interface RequestUpdateCustomerGetSearchModel
 */
export interface RequestUpdateCustomerGetSearchModel {
    /**
     * 
     * @type {number}
     * @memberof RequestUpdateCustomerGetSearchModel
     */
    rowNumber?: number;
    /**
     * 
     * @type {number}
     * @memberof RequestUpdateCustomerGetSearchModel
     */
    reqUpdateCustomerId?: number;
    /**
     * 
     * @type {string}
     * @memberof RequestUpdateCustomerGetSearchModel
     */
    reqCode?: string;
    /**
     * 
     * @type {string}
     * @memberof RequestUpdateCustomerGetSearchModel
     */
    customerCode?: string;
    /**
     * 
     * @type {string}
     * @memberof RequestUpdateCustomerGetSearchModel
     */
    customerNameOld?: string;
    /**
     * 
     * @type {string}
     * @memberof RequestUpdateCustomerGetSearchModel
     */
    customerName?: string;
    /**
     * 
     * @type {CustomerCreditType}
     * @memberof RequestUpdateCustomerGetSearchModel
     */
    customerCreditTypeOld?: CustomerCreditType;
    /**
     * 
     * @type {string}
     * @memberof RequestUpdateCustomerGetSearchModel
     */
    readonly customerCreditTypeNameOld?: string;
    /**
     * 
     * @type {CustomerCreditType}
     * @memberof RequestUpdateCustomerGetSearchModel
     */
    customerCreditType?: CustomerCreditType;
    /**
     * 
     * @type {string}
     * @memberof RequestUpdateCustomerGetSearchModel
     */
    readonly customerCreditTypeName?: string;
    /**
     * 
     * @type {RequestUpdateCustomerTypeStatus}
     * @memberof RequestUpdateCustomerGetSearchModel
     */
    reqType?: RequestUpdateCustomerTypeStatus;
    /**
     * 
     * @type {string}
     * @memberof RequestUpdateCustomerGetSearchModel
     */
    readonly reqTypeName?: string;
    /**
     * 
     * @type {RequestUpdateCustomerStatus}
     * @memberof RequestUpdateCustomerGetSearchModel
     */
    regisStatus?: RequestUpdateCustomerStatus;
    /**
     * 
     * @type {string}
     * @memberof RequestUpdateCustomerGetSearchModel
     */
    readonly regisStatusName?: string;
    /**
     * 
     * @type {string}
     * @memberof RequestUpdateCustomerGetSearchModel
     */
    rejectReason?: string;
    /**
     * 
     * @type {string}
     * @memberof RequestUpdateCustomerGetSearchModel
     */
    createDate?: string;
    /**
     * 
     * @type {number}
     * @memberof RequestUpdateCustomerGetSearchModel
     */
    workflowId?: number;
    /**
     * 
     * @type {number}
     * @memberof RequestUpdateCustomerGetSearchModel
     */
    currentStepId?: number;
    /**
     * 
     * @type {number}
     * @memberof RequestUpdateCustomerGetSearchModel
     */
    organizationId?: number;
    /**
     * 
     * @type {number}
     * @memberof RequestUpdateCustomerGetSearchModel
     */
    ownerUserId?: number;
    /**
     * 
     * @type {string}
     * @memberof RequestUpdateCustomerGetSearchModel
     */
    requestedDate?: string;
}


/**
 * 
 * @export
 * @interface RequestUpdateCustomerGetSearchModelBaseResponsePagination
 */
export interface RequestUpdateCustomerGetSearchModelBaseResponsePagination {
    /**
     * 
     * @type {boolean}
     * @memberof RequestUpdateCustomerGetSearchModelBaseResponsePagination
     */
    success?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RequestUpdateCustomerGetSearchModelBaseResponsePagination
     */
    message?: string;
    /**
     * 
     * @type {number}
     * @memberof RequestUpdateCustomerGetSearchModelBaseResponsePagination
     */
    statusCode?: number;
    /**
     * 
     * @type {number}
     * @memberof RequestUpdateCustomerGetSearchModelBaseResponsePagination
     */
    pageIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof RequestUpdateCustomerGetSearchModelBaseResponsePagination
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof RequestUpdateCustomerGetSearchModelBaseResponsePagination
     */
    pageAll?: number;
    /**
     * 
     * @type {number}
     * @memberof RequestUpdateCustomerGetSearchModelBaseResponsePagination
     */
    totalRecord?: number;
    /**
     * 
     * @type {Array<RequestUpdateCustomerGetSearchModel>}
     * @memberof RequestUpdateCustomerGetSearchModelBaseResponsePagination
     */
    data?: Array<RequestUpdateCustomerGetSearchModel>;
}
/**
 * 
 * @export
 * @interface RequestUpdateCustomerModel
 */
export interface RequestUpdateCustomerModel {
    /**
     * 
     * @type {number}
     * @memberof RequestUpdateCustomerModel
     */
    reqUpdateCustomerId?: number;
    /**
     * 
     * @type {string}
     * @memberof RequestUpdateCustomerModel
     */
    companyNameTh?: string;
    /**
     * 
     * @type {string}
     * @memberof RequestUpdateCustomerModel
     */
    orgNameTh?: string;
    /**
     * 
     * @type {number}
     * @memberof RequestUpdateCustomerModel
     */
    ownerUserId?: number;
    /**
     * 
     * @type {string}
     * @memberof RequestUpdateCustomerModel
     */
    ownerEmployeeCode?: string;
    /**
     * 
     * @type {string}
     * @memberof RequestUpdateCustomerModel
     */
    ownerUserName?: string;
    /**
     * 
     * @type {number}
     * @memberof RequestUpdateCustomerModel
     */
    customerId?: number;
    /**
     * 
     * @type {PersonType}
     * @memberof RequestUpdateCustomerModel
     */
    customerType?: PersonType;
    /**
     * 
     * @type {string}
     * @memberof RequestUpdateCustomerModel
     */
    readonly customerTypeName?: string;
    /**
     * 
     * @type {RequestUpdateCustomerTypeStatus}
     * @memberof RequestUpdateCustomerModel
     */
    reqType?: RequestUpdateCustomerTypeStatus;
    /**
     * 
     * @type {string}
     * @memberof RequestUpdateCustomerModel
     */
    readonly reqTypeName?: string;
    /**
     * 
     * @type {RequestUpdateCustomerCreditTypeStatus}
     * @memberof RequestUpdateCustomerModel
     */
    reqCreditType?: RequestUpdateCustomerCreditTypeStatus;
    /**
     * 
     * @type {string}
     * @memberof RequestUpdateCustomerModel
     */
    readonly reqCreditTypeName?: string;
    /**
     * 
     * @type {number}
     * @memberof RequestUpdateCustomerModel
     */
    amountOld?: number;
    /**
     * 
     * @type {number}
     * @memberof RequestUpdateCustomerModel
     */
    amountRequest?: number;
    /**
     * 
     * @type {number}
     * @memberof RequestUpdateCustomerModel
     */
    amountApprove?: number;
    /**
     * 
     * @type {number}
     * @memberof RequestUpdateCustomerModel
     */
    creditDaysOld?: number;
    /**
     * 
     * @type {number}
     * @memberof RequestUpdateCustomerModel
     */
    creditDayRequest?: number;
    /**
     * 
     * @type {number}
     * @memberof RequestUpdateCustomerModel
     */
    creditDaysApprove?: number;
    /**
     * 
     * @type {string}
     * @memberof RequestUpdateCustomerModel
     */
    creditChangeStartDate?: string;
    /**
     * 
     * @type {string}
     * @memberof RequestUpdateCustomerModel
     */
    creditChangeEndDate?: string;
    /**
     * 
     * @type {CustomerCreditType}
     * @memberof RequestUpdateCustomerModel
     */
    customerCreditTypeOld?: CustomerCreditType;
    /**
     * 
     * @type {string}
     * @memberof RequestUpdateCustomerModel
     */
    readonly customerCreditTypeNameOld?: string;
    /**
     * 
     * @type {CustomerCreditType}
     * @memberof RequestUpdateCustomerModel
     */
    customerCreditType?: CustomerCreditType;
    /**
     * 
     * @type {string}
     * @memberof RequestUpdateCustomerModel
     */
    readonly customerCreditTypeName?: string;
    /**
     * 
     * @type {number}
     * @memberof RequestUpdateCustomerModel
     */
    creditDays?: number;
    /**
     * 
     * @type {string}
     * @memberof RequestUpdateCustomerModel
     */
    customerNameOld?: string;
    /**
     * 
     * @type {string}
     * @memberof RequestUpdateCustomerModel
     */
    customerLastnameOld?: string;
    /**
     * 
     * @type {string}
     * @memberof RequestUpdateCustomerModel
     */
    customerNameEnOld?: string;
    /**
     * 
     * @type {string}
     * @memberof RequestUpdateCustomerModel
     */
    customerLastnameEnOld?: string;
    /**
     * 
     * @type {string}
     * @memberof RequestUpdateCustomerModel
     */
    customerName?: string;
    /**
     * 
     * @type {string}
     * @memberof RequestUpdateCustomerModel
     */
    customerLastname?: string;
    /**
     * 
     * @type {string}
     * @memberof RequestUpdateCustomerModel
     */
    customerNameEn?: string;
    /**
     * 
     * @type {string}
     * @memberof RequestUpdateCustomerModel
     */
    customerLastnameEn?: string;
    /**
     * 
     * @type {string}
     * @memberof RequestUpdateCustomerModel
     */
    customerTaxCode?: string;
    /**
     * 
     * @type {string}
     * @memberof RequestUpdateCustomerModel
     */
    registeredDate?: string;
    /**
     * 
     * @type {number}
     * @memberof RequestUpdateCustomerModel
     */
    registeredCapital?: number;
    /**
     * 
     * @type {number}
     * @memberof RequestUpdateCustomerModel
     */
    registeredTypeId?: number;
    /**
     * 
     * @type {number}
     * @memberof RequestUpdateCustomerModel
     */
    businessGroupId?: number;
    /**
     * 
     * @type {number}
     * @memberof RequestUpdateCustomerModel
     */
    businessTypeId?: number;
    /**
     * 
     * @type {RequestUpdateCustomerStatus}
     * @memberof RequestUpdateCustomerModel
     */
    regisStatus?: RequestUpdateCustomerStatus;
    /**
     * 
     * @type {string}
     * @memberof RequestUpdateCustomerModel
     */
    readonly regisStatusName?: string;
    /**
     * 
     * @type {string}
     * @memberof RequestUpdateCustomerModel
     */
    reqCode?: string;
    /**
     * 
     * @type {boolean}
     * @memberof RequestUpdateCustomerModel
     */
    activeFlag?: boolean;
    /**
     * 
     * @type {number}
     * @memberof RequestUpdateCustomerModel
     */
    dayOfBilling?: number;
    /**
     * 
     * @type {number}
     * @memberof RequestUpdateCustomerModel
     */
    amountInsuranceApprove?: number;
    /**
     * 
     * @type {string}
     * @memberof RequestUpdateCustomerModel
     */
    remarkApprove?: string;
    /**
     * 
     * @type {string}
     * @memberof RequestUpdateCustomerModel
     */
    remarkRequest?: string;
    /**
     * 
     * @type {number}
     * @memberof RequestUpdateCustomerModel
     */
    workflowId?: number;
    /**
     * 
     * @type {number}
     * @memberof RequestUpdateCustomerModel
     */
    currentStepId?: number;
    /**
     * 
     * @type {Array<RequestUpdateCustomerAddressModel>}
     * @memberof RequestUpdateCustomerModel
     */
    addressList?: Array<RequestUpdateCustomerAddressModel>;
    /**
     * 
     * @type {Array<RequestUpdateCustomerBankModel>}
     * @memberof RequestUpdateCustomerModel
     */
    bankList?: Array<RequestUpdateCustomerBankModel>;
    /**
     * 
     * @type {Array<RequestUpdateCustomerAttachModel>}
     * @memberof RequestUpdateCustomerModel
     */
    attachList?: Array<RequestUpdateCustomerAttachModel>;
    /**
     * 
     * @type {Array<RequestUpdateCustomerContact>}
     * @memberof RequestUpdateCustomerModel
     */
    contactList?: Array<RequestUpdateCustomerContact>;
}


/**
 * 
 * @export
 * @interface RequestUpdateCustomerModelBaseResponseModel
 */
export interface RequestUpdateCustomerModelBaseResponseModel {
    /**
     * 
     * @type {boolean}
     * @memberof RequestUpdateCustomerModelBaseResponseModel
     */
    success?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RequestUpdateCustomerModelBaseResponseModel
     */
    message?: string;
    /**
     * 
     * @type {number}
     * @memberof RequestUpdateCustomerModelBaseResponseModel
     */
    statusCode?: number;
    /**
     * 
     * @type {RequestUpdateCustomerModel}
     * @memberof RequestUpdateCustomerModelBaseResponseModel
     */
    data?: RequestUpdateCustomerModel;
}

/**
 * 
 * @export
 */
export const RequestUpdateCustomerStatus = {
    NUMBER_0: 0,
    NUMBER_1: 1,
    NUMBER_2: 2,
    NUMBER_3: 3,
    NUMBER_4: 4
} as const;
export type RequestUpdateCustomerStatus = typeof RequestUpdateCustomerStatus[keyof typeof RequestUpdateCustomerStatus];


/**
 * 
 * @export
 */
export const RequestUpdateCustomerTypeStatus = {
    NUMBER_1: 1,
    NUMBER_2: 2
} as const;
export type RequestUpdateCustomerTypeStatus = typeof RequestUpdateCustomerTypeStatus[keyof typeof RequestUpdateCustomerTypeStatus];

/**
 * 
 * @export
 * @interface RoleModel
 */
export interface RoleModel {
    /**
     * 
     * @type {number}
     * @memberof RoleModel
     */
    roleId?: number;
    /**
     * 
     * @type {string}
     * @memberof RoleModel
     */
    roleName?: string;
    /**
     * 
     * @type {string}
     * @memberof RoleModel
     */
    roleDescription?: string;
    /**
     * 
     * @type {number}
     * @memberof RoleModel
     */
    rolLevel?: number;
}
/**
 * 
 * @export
 * @interface RolePermissionRequestModel
 */
export interface RolePermissionRequestModel {
    /**
     * 
     * @type {number}
     * @memberof RolePermissionRequestModel
     */
    roleId?: number;
    /**
     * 
     * @type {Array<MenuResponseModel>}
     * @memberof RolePermissionRequestModel
     */
    menus?: Array<MenuResponseModel>;
    /**
     * 
     * @type {Array<PermissionResponseModel>}
     * @memberof RolePermissionRequestModel
     */
    permissions?: Array<PermissionResponseModel>;
}
/**
 * 
 * @export
 * @interface RoleRequestModel
 */
export interface RoleRequestModel {
    /**
     * 
     * @type {number}
     * @memberof RoleRequestModel
     */
    roleId?: number;
    /**
     * 
     * @type {string}
     * @memberof RoleRequestModel
     */
    roleName?: string;
    /**
     * 
     * @type {string}
     * @memberof RoleRequestModel
     */
    roleDescription?: string;
    /**
     * 
     * @type {DataAccessType}
     * @memberof RoleRequestModel
     */
    dataAccessType?: DataAccessType;
    /**
     * 
     * @type {boolean}
     * @memberof RoleRequestModel
     */
    activeFlag?: boolean;
}


/**
 * 
 * @export
 * @interface RoleRequestModelBaseResponseModel
 */
export interface RoleRequestModelBaseResponseModel {
    /**
     * 
     * @type {boolean}
     * @memberof RoleRequestModelBaseResponseModel
     */
    success?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RoleRequestModelBaseResponseModel
     */
    message?: string;
    /**
     * 
     * @type {number}
     * @memberof RoleRequestModelBaseResponseModel
     */
    statusCode?: number;
    /**
     * 
     * @type {RoleRequestModel}
     * @memberof RoleRequestModelBaseResponseModel
     */
    data?: RoleRequestModel;
}
/**
 * 
 * @export
 * @interface RoleResponseModel
 */
export interface RoleResponseModel {
    /**
     * 
     * @type {number}
     * @memberof RoleResponseModel
     */
    roleId?: number;
    /**
     * 
     * @type {string}
     * @memberof RoleResponseModel
     */
    roleName?: string;
    /**
     * 
     * @type {string}
     * @memberof RoleResponseModel
     */
    roleDescription?: string;
    /**
     * 
     * @type {number}
     * @memberof RoleResponseModel
     */
    roleLevel?: number;
    /**
     * 
     * @type {boolean}
     * @memberof RoleResponseModel
     */
    activeFlag?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof RoleResponseModel
     */
    isDefaultRole?: boolean;
    /**
     * 
     * @type {number}
     * @memberof RoleResponseModel
     */
    createdBy?: number;
    /**
     * 
     * @type {string}
     * @memberof RoleResponseModel
     */
    readonly createdDate?: string;
    /**
     * 
     * @type {DataAccessType}
     * @memberof RoleResponseModel
     */
    dataAccessType?: DataAccessType;
}


/**
 * 
 * @export
 * @interface RoleResponseModelBaseResponseModel
 */
export interface RoleResponseModelBaseResponseModel {
    /**
     * 
     * @type {boolean}
     * @memberof RoleResponseModelBaseResponseModel
     */
    success?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RoleResponseModelBaseResponseModel
     */
    message?: string;
    /**
     * 
     * @type {number}
     * @memberof RoleResponseModelBaseResponseModel
     */
    statusCode?: number;
    /**
     * 
     * @type {RoleResponseModel}
     * @memberof RoleResponseModelBaseResponseModel
     */
    data?: RoleResponseModel;
}
/**
 * 
 * @export
 * @interface RoleResponseModelBaseResponsePagination
 */
export interface RoleResponseModelBaseResponsePagination {
    /**
     * 
     * @type {boolean}
     * @memberof RoleResponseModelBaseResponsePagination
     */
    success?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RoleResponseModelBaseResponsePagination
     */
    message?: string;
    /**
     * 
     * @type {number}
     * @memberof RoleResponseModelBaseResponsePagination
     */
    statusCode?: number;
    /**
     * 
     * @type {number}
     * @memberof RoleResponseModelBaseResponsePagination
     */
    pageIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof RoleResponseModelBaseResponsePagination
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof RoleResponseModelBaseResponsePagination
     */
    pageAll?: number;
    /**
     * 
     * @type {number}
     * @memberof RoleResponseModelBaseResponsePagination
     */
    totalRecord?: number;
    /**
     * 
     * @type {Array<RoleResponseModel>}
     * @memberof RoleResponseModelBaseResponsePagination
     */
    data?: Array<RoleResponseModel>;
}
/**
 * 
 * @export
 * @interface RoleResponseModelListBaseResponseModel
 */
export interface RoleResponseModelListBaseResponseModel {
    /**
     * 
     * @type {boolean}
     * @memberof RoleResponseModelListBaseResponseModel
     */
    success?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RoleResponseModelListBaseResponseModel
     */
    message?: string;
    /**
     * 
     * @type {number}
     * @memberof RoleResponseModelListBaseResponseModel
     */
    statusCode?: number;
    /**
     * 
     * @type {Array<RoleResponseModel>}
     * @memberof RoleResponseModelListBaseResponseModel
     */
    data?: Array<RoleResponseModel>;
}
/**
 * 
 * @export
 * @interface SaleLoginRequestModel
 */
export interface SaleLoginRequestModel {
    /**
     * 
     * @type {number}
     * @memberof SaleLoginRequestModel
     */
    userID?: number;
}
/**
 * 
 * @export
 * @interface SaleTokenModel
 */
export interface SaleTokenModel {
    /**
     * 
     * @type {string}
     * @memberof SaleTokenModel
     */
    token?: string;
}
/**
 * 
 * @export
 * @interface StringBaseResponseModel
 */
export interface StringBaseResponseModel {
    /**
     * 
     * @type {boolean}
     * @memberof StringBaseResponseModel
     */
    success?: boolean;
    /**
     * 
     * @type {string}
     * @memberof StringBaseResponseModel
     */
    message?: string;
    /**
     * 
     * @type {number}
     * @memberof StringBaseResponseModel
     */
    statusCode?: number;
    /**
     * 
     * @type {string}
     * @memberof StringBaseResponseModel
     */
    data?: string;
}
/**
 * 
 * @export
 * @interface SysCustomerEvaluationConfigGetSearchModel
 */
export interface SysCustomerEvaluationConfigGetSearchModel {
    /**
     * 
     * @type {number}
     * @memberof SysCustomerEvaluationConfigGetSearchModel
     */
    rowNumber?: number;
    /**
     * 
     * @type {number}
     * @memberof SysCustomerEvaluationConfigGetSearchModel
     */
    customerEvaluationConfigId?: number;
    /**
     * 
     * @type {string}
     * @memberof SysCustomerEvaluationConfigGetSearchModel
     */
    evaluationName?: string;
    /**
     * 
     * @type {EvaluationConfigType}
     * @memberof SysCustomerEvaluationConfigGetSearchModel
     */
    evaluationConfigType?: EvaluationConfigType;
    /**
     * 
     * @type {string}
     * @memberof SysCustomerEvaluationConfigGetSearchModel
     */
    readonly evaluationConfigTypeName?: string;
}


/**
 * 
 * @export
 * @interface SysCustomerEvaluationConfigGetSearchModelBaseResponsePagination
 */
export interface SysCustomerEvaluationConfigGetSearchModelBaseResponsePagination {
    /**
     * 
     * @type {boolean}
     * @memberof SysCustomerEvaluationConfigGetSearchModelBaseResponsePagination
     */
    success?: boolean;
    /**
     * 
     * @type {string}
     * @memberof SysCustomerEvaluationConfigGetSearchModelBaseResponsePagination
     */
    message?: string;
    /**
     * 
     * @type {number}
     * @memberof SysCustomerEvaluationConfigGetSearchModelBaseResponsePagination
     */
    statusCode?: number;
    /**
     * 
     * @type {number}
     * @memberof SysCustomerEvaluationConfigGetSearchModelBaseResponsePagination
     */
    pageIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof SysCustomerEvaluationConfigGetSearchModelBaseResponsePagination
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof SysCustomerEvaluationConfigGetSearchModelBaseResponsePagination
     */
    pageAll?: number;
    /**
     * 
     * @type {number}
     * @memberof SysCustomerEvaluationConfigGetSearchModelBaseResponsePagination
     */
    totalRecord?: number;
    /**
     * 
     * @type {Array<SysCustomerEvaluationConfigGetSearchModel>}
     * @memberof SysCustomerEvaluationConfigGetSearchModelBaseResponsePagination
     */
    data?: Array<SysCustomerEvaluationConfigGetSearchModel>;
}
/**
 * 
 * @export
 * @interface SysCustomerEvaluationConfigModel
 */
export interface SysCustomerEvaluationConfigModel {
    /**
     * 
     * @type {number}
     * @memberof SysCustomerEvaluationConfigModel
     */
    customerEvaluationConfigId?: number;
    /**
     * 
     * @type {string}
     * @memberof SysCustomerEvaluationConfigModel
     */
    evaluationName?: string;
    /**
     * 
     * @type {EvaluationConfigType}
     * @memberof SysCustomerEvaluationConfigModel
     */
    evaluationConfigType?: EvaluationConfigType;
    /**
     * 
     * @type {string}
     * @memberof SysCustomerEvaluationConfigModel
     */
    readonly evaluationConfigTypeName?: string;
}


/**
 * 
 * @export
 * @interface SysCustomerEvaluationConfigModelListBaseResponseModel
 */
export interface SysCustomerEvaluationConfigModelListBaseResponseModel {
    /**
     * 
     * @type {boolean}
     * @memberof SysCustomerEvaluationConfigModelListBaseResponseModel
     */
    success?: boolean;
    /**
     * 
     * @type {string}
     * @memberof SysCustomerEvaluationConfigModelListBaseResponseModel
     */
    message?: string;
    /**
     * 
     * @type {number}
     * @memberof SysCustomerEvaluationConfigModelListBaseResponseModel
     */
    statusCode?: number;
    /**
     * 
     * @type {Array<SysCustomerEvaluationConfigModel>}
     * @memberof SysCustomerEvaluationConfigModelListBaseResponseModel
     */
    data?: Array<SysCustomerEvaluationConfigModel>;
}
/**
 * 
 * @export
 * @interface SysEvaluationConfigId
 */
export interface SysEvaluationConfigId {
    /**
     * 
     * @type {Array<number>}
     * @memberof SysEvaluationConfigId
     */
    customerEvaluationConfigId?: Array<number>;
}
/**
 * 
 * @export
 * @interface TaxWithholdingModel
 */
export interface TaxWithholdingModel {
    /**
     * 
     * @type {number}
     * @memberof TaxWithholdingModel
     */
    trnTaxId?: number;
    /**
     * 
     * @type {number}
     * @memberof TaxWithholdingModel
     */
    companyId?: number;
    /**
     * 
     * @type {number}
     * @memberof TaxWithholdingModel
     */
    organizationId?: number;
    /**
     * 
     * @type {number}
     * @memberof TaxWithholdingModel
     */
    refId?: number;
    /**
     * 
     * @type {RefType}
     * @memberof TaxWithholdingModel
     */
    refType?: RefType;
    /**
     * 
     * @type {number}
     * @memberof TaxWithholdingModel
     */
    taxType?: number;
    /**
     * 
     * @type {number}
     * @memberof TaxWithholdingModel
     */
    incomeTypeId?: number;
    /**
     * 
     * @type {number}
     * @memberof TaxWithholdingModel
     */
    taxOtherType?: number;
    /**
     * 
     * @type {string}
     * @memberof TaxWithholdingModel
     */
    branchCode?: string;
    /**
     * 
     * @type {string}
     * @memberof TaxWithholdingModel
     */
    taxDate?: string;
    /**
     * 
     * @type {number}
     * @memberof TaxWithholdingModel
     */
    taxRate?: number;
    /**
     * 
     * @type {string}
     * @memberof TaxWithholdingModel
     */
    taxRemark?: string;
    /**
     * 
     * @type {number}
     * @memberof TaxWithholdingModel
     */
    amountBeforeTax?: number;
    /**
     * 
     * @type {number}
     * @memberof TaxWithholdingModel
     */
    taxAmount?: number;
    /**
     * 
     * @type {number}
     * @memberof TaxWithholdingModel
     */
    amountAfterTax?: number;
}


/**
 * 
 * @export
 * @interface TokenModel
 */
export interface TokenModel {
    /**
     * 
     * @type {string}
     * @memberof TokenModel
     */
    accessToken?: string;
    /**
     * 
     * @type {string}
     * @memberof TokenModel
     */
    refreshToken?: string;
}
/**
 * 
 * @export
 * @interface TokenModelBaseResponseModel
 */
export interface TokenModelBaseResponseModel {
    /**
     * 
     * @type {boolean}
     * @memberof TokenModelBaseResponseModel
     */
    success?: boolean;
    /**
     * 
     * @type {string}
     * @memberof TokenModelBaseResponseModel
     */
    message?: string;
    /**
     * 
     * @type {number}
     * @memberof TokenModelBaseResponseModel
     */
    statusCode?: number;
    /**
     * 
     * @type {TokenModel}
     * @memberof TokenModelBaseResponseModel
     */
    data?: TokenModel;
}
/**
 * 
 * @export
 * @interface TotalSummaryDetail
 */
export interface TotalSummaryDetail {
    /**
     * 
     * @type {number}
     * @memberof TotalSummaryDetail
     */
    totalSummary?: number;
}
/**
 * 
 * @export
 * @interface TransactionHistoryModel
 */
export interface TransactionHistoryModel {
    /**
     * 
     * @type {string}
     * @memberof TransactionHistoryModel
     */
    logStatusName?: string;
    /**
     * 
     * @type {string}
     * @memberof TransactionHistoryModel
     */
    updatedBy?: string;
    /**
     * 
     * @type {string}
     * @memberof TransactionHistoryModel
     */
    updatedDate?: string;
}
/**
 * 
 * @export
 * @interface TravelDetailListResponseModel
 */
export interface TravelDetailListResponseModel {
    /**
     * 
     * @type {number}
     * @memberof TravelDetailListResponseModel
     */
    no?: number;
    /**
     * 
     * @type {number}
     * @memberof TravelDetailListResponseModel
     */
    jobCostID?: number;
    /**
     * 
     * @type {number}
     * @memberof TravelDetailListResponseModel
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof TravelDetailListResponseModel
     */
    code?: string;
    /**
     * 
     * @type {string}
     * @memberof TravelDetailListResponseModel
     */
    currentBranch?: string;
    /**
     * 
     * @type {string}
     * @memberof TravelDetailListResponseModel
     */
    difficulty?: string;
    /**
     * 
     * @type {string}
     * @memberof TravelDetailListResponseModel
     */
    closedDate?: string;
    /**
     * 
     * @type {string}
     * @memberof TravelDetailListResponseModel
     */
    travelStartDate?: string;
    /**
     * 
     * @type {string}
     * @memberof TravelDetailListResponseModel
     */
    actionTravelStartDate?: string;
    /**
     * 
     * @type {string}
     * @memberof TravelDetailListResponseModel
     */
    travelStartLocation?: string;
    /**
     * 
     * @type {string}
     * @memberof TravelDetailListResponseModel
     */
    checkInLocation?: string;
    /**
     * 
     * @type {number}
     * @memberof TravelDetailListResponseModel
     */
    travelingCarMileage?: number;
    /**
     * 
     * @type {string}
     * @memberof TravelDetailListResponseModel
     */
    travelingCarNumber?: string;
    /**
     * 
     * @type {string}
     * @memberof TravelDetailListResponseModel
     */
    checkInDate?: string;
    /**
     * 
     * @type {string}
     * @memberof TravelDetailListResponseModel
     */
    travelActionDate?: string;
    /**
     * 
     * @type {number}
     * @memberof TravelDetailListResponseModel
     */
    travelSummaryTime?: number;
    /**
     * 
     * @type {number}
     * @memberof TravelDetailListResponseModel
     */
    checkInCarMileage?: number;
    /**
     * 
     * @type {number}
     * @memberof TravelDetailListResponseModel
     */
    carMileage?: number;
    /**
     * 
     * @type {string}
     * @memberof TravelDetailListResponseModel
     */
    startOfTraveling?: string;
    /**
     * 
     * @type {number}
     * @memberof TravelDetailListResponseModel
     */
    oilCostPriceRate?: number;
    /**
     * 
     * @type {number}
     * @memberof TravelDetailListResponseModel
     */
    oilCostPricePerKilometerRate?: number;
    /**
     * 
     * @type {number}
     * @memberof TravelDetailListResponseModel
     */
    oilCost?: number;
    /**
     * 
     * @type {string}
     * @memberof TravelDetailListResponseModel
     */
    projectCode?: string;
    /**
     * 
     * @type {string}
     * @memberof TravelDetailListResponseModel
     */
    projectName?: string;
    /**
     * 
     * @type {string}
     * @memberof TravelDetailListResponseModel
     */
    customerName?: string;
    /**
     * 
     * @type {string}
     * @memberof TravelDetailListResponseModel
     */
    locationName?: string;
    /**
     * 
     * @type {string}
     * @memberof TravelDetailListResponseModel
     */
    addressLineOne?: string;
    /**
     * 
     * @type {string}
     * @memberof TravelDetailListResponseModel
     */
    addressLineTwo?: string;
    /**
     * 
     * @type {string}
     * @memberof TravelDetailListResponseModel
     */
    disticctName?: string;
    /**
     * 
     * @type {string}
     * @memberof TravelDetailListResponseModel
     */
    provinceName?: string;
    /**
     * 
     * @type {string}
     * @memberof TravelDetailListResponseModel
     */
    engineerCode?: string;
    /**
     * 
     * @type {string}
     * @memberof TravelDetailListResponseModel
     */
    engineerName?: string;
    /**
     * 
     * @type {string}
     * @memberof TravelDetailListResponseModel
     */
    company?: string;
    /**
     * 
     * @type {string}
     * @memberof TravelDetailListResponseModel
     */
    budgetCode?: string;
    /**
     * 
     * @type {string}
     * @memberof TravelDetailListResponseModel
     */
    budgetName?: string;
    /**
     * 
     * @type {string}
     * @memberof TravelDetailListResponseModel
     */
    companyCode?: string;
    /**
     * 
     * @type {number}
     * @memberof TravelDetailListResponseModel
     */
    jobType?: number;
    /**
     * 
     * @type {string}
     * @memberof TravelDetailListResponseModel
     */
    certNo?: string;
    /**
     * 
     * @type {string}
     * @memberof TravelDetailListResponseModel
     */
    jobTextStatus?: string;
    /**
     * 
     * @type {number}
     * @memberof TravelDetailListResponseModel
     */
    enabledCheckbox?: number;
    /**
     * 
     * @type {string}
     * @memberof TravelDetailListResponseModel
     */
    reasonForReject?: string;
    /**
     * 
     * @type {string}
     * @memberof TravelDetailListResponseModel
     */
    adjustRemark?: string;
    /**
     * 
     * @type {string}
     * @memberof TravelDetailListResponseModel
     */
    dataVerifyType?: string;
    /**
     * 
     * @type {number}
     * @memberof TravelDetailListResponseModel
     */
    suspendStatus?: number;
    /**
     * 
     * @type {number}
     * @memberof TravelDetailListResponseModel
     */
    dataVerifyStatus?: number;
    /**
     * 
     * @type {string}
     * @memberof TravelDetailListResponseModel
     */
    dataVerifyRemark?: string;
    /**
     * 
     * @type {string}
     * @memberof TravelDetailListResponseModel
     */
    startSubDistrict?: string;
    /**
     * 
     * @type {string}
     * @memberof TravelDetailListResponseModel
     */
    startDistrict?: string;
    /**
     * 
     * @type {string}
     * @memberof TravelDetailListResponseModel
     */
    startProvince?: string;
    /**
     * 
     * @type {string}
     * @memberof TravelDetailListResponseModel
     */
    endSubDistrict?: string;
    /**
     * 
     * @type {string}
     * @memberof TravelDetailListResponseModel
     */
    endDistrict?: string;
    /**
     * 
     * @type {string}
     * @memberof TravelDetailListResponseModel
     */
    endProvince?: string;
    /**
     * 
     * @type {string}
     * @memberof TravelDetailListResponseModel
     */
    mapFinal?: string;
}
/**
 * 
 * @export
 * @interface TravelEngineerDetailListModel
 */
export interface TravelEngineerDetailListModel {
    /**
     * 
     * @type {number}
     * @memberof TravelEngineerDetailListModel
     */
    reqTravelEngineerId?: number;
    /**
     * 
     * @type {number}
     * @memberof TravelEngineerDetailListModel
     */
    rowNumber?: number;
    /**
     * 
     * @type {number}
     * @memberof TravelEngineerDetailListModel
     */
    reqTravelId?: number;
    /**
     * 
     * @type {string}
     * @memberof TravelEngineerDetailListModel
     */
    engineerCode?: string;
    /**
     * 
     * @type {string}
     * @memberof TravelEngineerDetailListModel
     */
    engineerName?: string;
    /**
     * 
     * @type {number}
     * @memberof TravelEngineerDetailListModel
     */
    numberOfInvoice?: number;
    /**
     * 
     * @type {number}
     * @memberof TravelEngineerDetailListModel
     */
    numberOfJob?: number;
    /**
     * 
     * @type {number}
     * @memberof TravelEngineerDetailListModel
     */
    amountOfMoney?: number;
    /**
     * 
     * @type {number}
     * @memberof TravelEngineerDetailListModel
     */
    lastAmountOfMoney?: number;
    /**
     * 
     * @type {string}
     * @memberof TravelEngineerDetailListModel
     */
    costDistanct?: string;
    /**
     * 
     * @type {string}
     * @memberof TravelEngineerDetailListModel
     */
    costDistanctSign?: string;
}
/**
 * 
 * @export
 * @interface TravelSummaryDataModel
 */
export interface TravelSummaryDataModel {
    /**
     * 
     * @type {number}
     * @memberof TravelSummaryDataModel
     */
    rowNumber?: number;
    /**
     * 
     * @type {number}
     * @memberof TravelSummaryDataModel
     */
    reqTravelId?: number;
    /**
     * 
     * @type {number}
     * @memberof TravelSummaryDataModel
     */
    companyId?: number;
    /**
     * 
     * @type {number}
     * @memberof TravelSummaryDataModel
     */
    paymentCompanyId?: number;
    /**
     * 
     * @type {string}
     * @memberof TravelSummaryDataModel
     */
    paymentCompany?: string;
    /**
     * 
     * @type {string}
     * @memberof TravelSummaryDataModel
     */
    paymentCompanyCode?: string;
    /**
     * 
     * @type {string}
     * @memberof TravelSummaryDataModel
     */
    paymentCompanyName?: string;
    /**
     * 
     * @type {number}
     * @memberof TravelSummaryDataModel
     */
    paymentTravelMonth?: number;
    /**
     * 
     * @type {string}
     * @memberof TravelSummaryDataModel
     */
    paymentTravelMonthName?: string;
    /**
     * 
     * @type {number}
     * @memberof TravelSummaryDataModel
     */
    paymentTravelYear?: number;
    /**
     * 
     * @type {string}
     * @memberof TravelSummaryDataModel
     */
    readonly paymentTravelYearStr?: string;
    /**
     * 
     * @type {string}
     * @memberof TravelSummaryDataModel
     */
    createDate?: string;
    /**
     * 
     * @type {number}
     * @memberof TravelSummaryDataModel
     */
    paymentGasPrice?: number;
    /**
     * 
     * @type {number}
     * @memberof TravelSummaryDataModel
     */
    numberOfEngineer?: number;
    /**
     * 
     * @type {number}
     * @memberof TravelSummaryDataModel
     */
    numberOfInvoice?: number;
    /**
     * 
     * @type {number}
     * @memberof TravelSummaryDataModel
     */
    numberOfJob?: number;
    /**
     * 
     * @type {number}
     * @memberof TravelSummaryDataModel
     */
    amountOfMoney?: number;
    /**
     * 
     * @type {string}
     * @memberof TravelSummaryDataModel
     */
    paymentTravelRemark?: string;
    /**
     * 
     * @type {PaymentTravelStatus}
     * @memberof TravelSummaryDataModel
     */
    paymentTravelStatus?: PaymentTravelStatus;
    /**
     * 
     * @type {string}
     * @memberof TravelSummaryDataModel
     */
    paymentTravelStatusName?: string;
    /**
     * 
     * @type {string}
     * @memberof TravelSummaryDataModel
     */
    fileAttachment1?: string;
    /**
     * 
     * @type {string}
     * @memberof TravelSummaryDataModel
     */
    fileAttachment2?: string;
    /**
     * 
     * @type {string}
     * @memberof TravelSummaryDataModel
     */
    fileAttachment3?: string;
    /**
     * 
     * @type {string}
     * @memberof TravelSummaryDataModel
     */
    companyPayroll?: string;
    /**
     * 
     * @type {string}
     * @memberof TravelSummaryDataModel
     */
    consumtionRateUnit?: string;
    /**
     * 
     * @type {string}
     * @memberof TravelSummaryDataModel
     */
    oilCostPriceUnit?: string;
    /**
     * 
     * @type {string}
     * @memberof TravelSummaryDataModel
     */
    oilCostSummaryUnit?: string;
    /**
     * 
     * @type {string}
     * @memberof TravelSummaryDataModel
     */
    paymentSendDate?: string;
    /**
     * 
     * @type {Array<TotalSummaryDetail>}
     * @memberof TravelSummaryDataModel
     */
    totalSummaryDetail?: Array<TotalSummaryDetail>;
    /**
     * 
     * @type {TravelSummaryTotalDetail}
     * @memberof TravelSummaryDataModel
     */
    summarySubDetail?: TravelSummaryTotalDetail;
    /**
     * 
     * @type {Array<TravelEngineerDetailListModel>}
     * @memberof TravelSummaryDataModel
     */
    summarySubDetailList?: Array<TravelEngineerDetailListModel>;
    /**
     * 
     * @type {Array<TravelSummaryHistoryModel>}
     * @memberof TravelSummaryDataModel
     */
    travelSummaryHistory?: Array<TravelSummaryHistoryModel>;
    /**
     * 
     * @type {number}
     * @memberof TravelSummaryDataModel
     */
    workflowId?: number;
    /**
     * 
     * @type {number}
     * @memberof TravelSummaryDataModel
     */
    currentStepId?: number;
    /**
     * 
     * @type {number}
     * @memberof TravelSummaryDataModel
     */
    reqOilRoundId?: number;
    /**
     * 
     * @type {string}
     * @memberof TravelSummaryDataModel
     */
    rejectReason?: string;
    /**
     * 
     * @type {number}
     * @memberof TravelSummaryDataModel
     */
    breakageRate?: number;
    /**
     * 
     * @type {number}
     * @memberof TravelSummaryDataModel
     */
    oilCostRate?: number;
}


/**
 * 
 * @export
 * @interface TravelSummaryDataModelBaseResponseModel
 */
export interface TravelSummaryDataModelBaseResponseModel {
    /**
     * 
     * @type {boolean}
     * @memberof TravelSummaryDataModelBaseResponseModel
     */
    success?: boolean;
    /**
     * 
     * @type {string}
     * @memberof TravelSummaryDataModelBaseResponseModel
     */
    message?: string;
    /**
     * 
     * @type {number}
     * @memberof TravelSummaryDataModelBaseResponseModel
     */
    statusCode?: number;
    /**
     * 
     * @type {TravelSummaryDataModel}
     * @memberof TravelSummaryDataModelBaseResponseModel
     */
    data?: TravelSummaryDataModel;
}
/**
 * 
 * @export
 * @interface TravelSummaryHistoryModel
 */
export interface TravelSummaryHistoryModel {
    /**
     * 
     * @type {string}
     * @memberof TravelSummaryHistoryModel
     */
    logStatusName?: string;
    /**
     * 
     * @type {string}
     * @memberof TravelSummaryHistoryModel
     */
    updatedBy?: string;
    /**
     * 
     * @type {string}
     * @memberof TravelSummaryHistoryModel
     */
    updatedDate?: string;
    /**
     * 
     * @type {string}
     * @memberof TravelSummaryHistoryModel
     */
    transitionLabel?: string;
    /**
     * 
     * @type {string}
     * @memberof TravelSummaryHistoryModel
     */
    transitionType?: string;
}
/**
 * 
 * @export
 * @interface TravelSummaryReceiveModel
 */
export interface TravelSummaryReceiveModel {
    /**
     * 
     * @type {number}
     * @memberof TravelSummaryReceiveModel
     */
    reqOilRoundID?: number;
    /**
     * 
     * @type {string}
     * @memberof TravelSummaryReceiveModel
     */
    budgetCompanyCode?: string;
    /**
     * 
     * @type {number}
     * @memberof TravelSummaryReceiveModel
     */
    oilRoundMonth?: number;
    /**
     * 
     * @type {number}
     * @memberof TravelSummaryReceiveModel
     */
    oilRoundYear?: number;
    /**
     * 
     * @type {number}
     * @memberof TravelSummaryReceiveModel
     */
    oilRate?: number;
    /**
     * 
     * @type {number}
     * @memberof TravelSummaryReceiveModel
     */
    oilRatePerKM?: number;
    /**
     * 
     * @type {number}
     * @memberof TravelSummaryReceiveModel
     */
    numberOfEngineer?: number;
    /**
     * 
     * @type {number}
     * @memberof TravelSummaryReceiveModel
     */
    numberOfInvoice?: number;
    /**
     * 
     * @type {number}
     * @memberof TravelSummaryReceiveModel
     */
    numberOfJob?: number;
    /**
     * 
     * @type {number}
     * @memberof TravelSummaryReceiveModel
     */
    amountOfMoney?: number;
    /**
     * 
     * @type {number}
     * @memberof TravelSummaryReceiveModel
     */
    sendByCodeID?: number;
    /**
     * 
     * @type {string}
     * @memberof TravelSummaryReceiveModel
     */
    sendByName?: string;
    /**
     * 
     * @type {number}
     * @memberof TravelSummaryReceiveModel
     */
    breakageRate?: number;
    /**
     * 
     * @type {number}
     * @memberof TravelSummaryReceiveModel
     */
    oilCostRate?: number;
    /**
     * 
     * @type {Array<EngineerInfo>}
     * @memberof TravelSummaryReceiveModel
     */
    engineerList?: Array<EngineerInfo>;
}
/**
 * 
 * @export
 * @interface TravelSummaryResponseModel
 */
export interface TravelSummaryResponseModel {
    /**
     * 
     * @type {boolean}
     * @memberof TravelSummaryResponseModel
     */
    success?: boolean;
    /**
     * 
     * @type {string}
     * @memberof TravelSummaryResponseModel
     */
    message?: string;
    /**
     * 
     * @type {number}
     * @memberof TravelSummaryResponseModel
     */
    statusCode?: number;
    /**
     * 
     * @type {number}
     * @memberof TravelSummaryResponseModel
     */
    pageIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof TravelSummaryResponseModel
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof TravelSummaryResponseModel
     */
    pageAll?: number;
    /**
     * 
     * @type {number}
     * @memberof TravelSummaryResponseModel
     */
    totalRecord?: number;
    /**
     * 
     * @type {Array<TravelSummaryDataModel>}
     * @memberof TravelSummaryResponseModel
     */
    data?: Array<TravelSummaryDataModel>;
    /**
     * 
     * @type {number}
     * @memberof TravelSummaryResponseModel
     */
    workflowId?: number;
    /**
     * 
     * @type {number}
     * @memberof TravelSummaryResponseModel
     */
    approvalTotal?: number;
    /**
     * 
     * @type {number}
     * @memberof TravelSummaryResponseModel
     */
    approvalConfirmed?: number;
    /**
     * 
     * @type {Array<BaseCountStatusModel>}
     * @memberof TravelSummaryResponseModel
     */
    countStatusList?: Array<BaseCountStatusModel>;
}
/**
 * 
 * @export
 * @interface TravelSummaryRoundList
 */
export interface TravelSummaryRoundList {
    /**
     * 
     * @type {number}
     * @memberof TravelSummaryRoundList
     */
    roundId?: number;
    /**
     * 
     * @type {string}
     * @memberof TravelSummaryRoundList
     */
    roundMonthname?: string;
    /**
     * 
     * @type {string}
     * @memberof TravelSummaryRoundList
     */
    roundYear?: string;
}
/**
 * 
 * @export
 * @interface TravelSummaryTotalDetail
 */
export interface TravelSummaryTotalDetail {
    /**
     * 
     * @type {string}
     * @memberof TravelSummaryTotalDetail
     */
    currentEffectMonth?: string;
    /**
     * 
     * @type {string}
     * @memberof TravelSummaryTotalDetail
     */
    currentEffectYear?: string;
    /**
     * 
     * @type {string}
     * @memberof TravelSummaryTotalDetail
     */
    lastEffectMonth?: string;
    /**
     * 
     * @type {string}
     * @memberof TravelSummaryTotalDetail
     */
    lastEffectYear?: string;
    /**
     * 
     * @type {number}
     * @memberof TravelSummaryTotalDetail
     */
    currentTotalCost?: number;
    /**
     * 
     * @type {number}
     * @memberof TravelSummaryTotalDetail
     */
    lastTotalCost?: number;
    /**
     * 
     * @type {string}
     * @memberof TravelSummaryTotalDetail
     */
    percentTotalDistanct?: string;
    /**
     * 
     * @type {string}
     * @memberof TravelSummaryTotalDetail
     */
    percentTotalDistanctSign?: string;
}
/**
 * 
 * @export
 * @interface TrnRbtCnapFileModel
 */
export interface TrnRbtCnapFileModel {
    /**
     * 
     * @type {string}
     * @memberof TrnRbtCnapFileModel
     */
    fileName?: string;
    /**
     * 
     * @type {string}
     * @memberof TrnRbtCnapFileModel
     */
    filePath?: string;
    /**
     * 
     * @type {number}
     * @memberof TrnRbtCnapFileModel
     */
    headerReferenceId?: number;
}
/**
 * 
 * @export
 * @interface TrnRbtCnapModel
 */
export interface TrnRbtCnapModel {
    /**
     * 
     * @type {number}
     * @memberof TrnRbtCnapModel
     */
    companyId?: number;
    /**
     * 
     * @type {number}
     * @memberof TrnRbtCnapModel
     */
    organizationId?: number;
    /**
     * 
     * @type {number}
     * @memberof TrnRbtCnapModel
     */
    ownerUserId?: number;
    /**
     * 
     * @type {number}
     * @memberof TrnRbtCnapModel
     */
    headerReferenceId?: number;
    /**
     * 
     * @type {string}
     * @memberof TrnRbtCnapModel
     */
    rebateCode?: string;
    /**
     * 
     * @type {string}
     * @memberof TrnRbtCnapModel
     */
    rebateDetail?: string;
    /**
     * 
     * @type {number}
     * @memberof TrnRbtCnapModel
     */
    rebateAmount?: number;
    /**
     * 
     * @type {number}
     * @memberof TrnRbtCnapModel
     */
    brandId?: number;
    /**
     * 
     * @type {string}
     * @memberof TrnRbtCnapModel
     */
    brandName?: string;
    /**
     * 
     * @type {number}
     * @memberof TrnRbtCnapModel
     */
    vendorId?: number;
    /**
     * 
     * @type {number}
     * @memberof TrnRbtCnapModel
     */
    recordReferenceId?: number;
    /**
     * 
     * @type {string}
     * @memberof TrnRbtCnapModel
     */
    cnNo?: string;
    /**
     * 
     * @type {string}
     * @memberof TrnRbtCnapModel
     */
    cnDate?: string;
    /**
     * 
     * @type {number}
     * @memberof TrnRbtCnapModel
     */
    cnAmount?: number;
    /**
     * 
     * @type {number}
     * @memberof TrnRbtCnapModel
     */
    vat?: number;
    /**
     * 
     * @type {number}
     * @memberof TrnRbtCnapModel
     */
    cnAmountCur?: number;
    /**
     * 
     * @type {number}
     * @memberof TrnRbtCnapModel
     */
    vatCur?: number;
    /**
     * 
     * @type {number}
     * @memberof TrnRbtCnapModel
     */
    currencyId?: number;
    /**
     * 
     * @type {string}
     * @memberof TrnRbtCnapModel
     */
    currencyAbbr?: string;
    /**
     * 
     * @type {number}
     * @memberof TrnRbtCnapModel
     */
    exchangeRate?: number;
    /**
     * 
     * @type {string}
     * @memberof TrnRbtCnapModel
     */
    supplierId?: string;
    /**
     * 
     * @type {string}
     * @memberof TrnRbtCnapModel
     */
    supplierCode?: string;
    /**
     * 
     * @type {string}
     * @memberof TrnRbtCnapModel
     */
    supplierName?: string;
    /**
     * 
     * @type {string}
     * @memberof TrnRbtCnapModel
     */
    taxPayerId?: string;
    /**
     * 
     * @type {string}
     * @memberof TrnRbtCnapModel
     */
    revenueBranchCode?: string;
    /**
     * 
     * @type {string}
     * @memberof TrnRbtCnapModel
     */
    fullAddress?: string;
    /**
     * 
     * @type {number}
     * @memberof TrnRbtCnapModel
     */
    provinceId?: number;
    /**
     * 
     * @type {string}
     * @memberof TrnRbtCnapModel
     */
    provinceName?: string;
    /**
     * 
     * @type {number}
     * @memberof TrnRbtCnapModel
     */
    districtId?: number;
    /**
     * 
     * @type {string}
     * @memberof TrnRbtCnapModel
     */
    districtName?: string;
    /**
     * 
     * @type {number}
     * @memberof TrnRbtCnapModel
     */
    subDistrictId?: number;
    /**
     * 
     * @type {string}
     * @memberof TrnRbtCnapModel
     */
    subDistrictName?: string;
    /**
     * 
     * @type {string}
     * @memberof TrnRbtCnapModel
     */
    zipCode?: string;
    /**
     * 
     * @type {string}
     * @memberof TrnRbtCnapModel
     */
    telephone?: string;
    /**
     * 
     * @type {string}
     * @memberof TrnRbtCnapModel
     */
    email?: string;
}
/**
 * 
 * @export
 * @interface TrnRbtCnarBrandFileModel
 */
export interface TrnRbtCnarBrandFileModel {
    /**
     * 
     * @type {string}
     * @memberof TrnRbtCnarBrandFileModel
     */
    fileName?: string;
    /**
     * 
     * @type {string}
     * @memberof TrnRbtCnarBrandFileModel
     */
    filePath?: string;
    /**
     * 
     * @type {number}
     * @memberof TrnRbtCnarBrandFileModel
     */
    backToBackId?: number;
}
/**
 * 
 * @export
 * @interface TrnRbtCnarBrandModel
 */
export interface TrnRbtCnarBrandModel {
    /**
     * 
     * @type {number}
     * @memberof TrnRbtCnarBrandModel
     */
    companyId?: number;
    /**
     * 
     * @type {number}
     * @memberof TrnRbtCnarBrandModel
     */
    organizationId?: number;
    /**
     * 
     * @type {number}
     * @memberof TrnRbtCnarBrandModel
     */
    ownerUserId?: number;
    /**
     * 
     * @type {number}
     * @memberof TrnRbtCnarBrandModel
     */
    backToBackId?: number;
    /**
     * 
     * @type {string}
     * @memberof TrnRbtCnarBrandModel
     */
    rebateCode?: string;
    /**
     * 
     * @type {string}
     * @memberof TrnRbtCnarBrandModel
     */
    rebateDetail?: string;
    /**
     * 
     * @type {number}
     * @memberof TrnRbtCnarBrandModel
     */
    rebateAmount?: number;
    /**
     * 
     * @type {number}
     * @memberof TrnRbtCnarBrandModel
     */
    brandId?: number;
    /**
     * 
     * @type {string}
     * @memberof TrnRbtCnarBrandModel
     */
    brandName?: string;
    /**
     * 
     * @type {number}
     * @memberof TrnRbtCnarBrandModel
     */
    vendorId?: number;
    /**
     * 
     * @type {string}
     * @memberof TrnRbtCnarBrandModel
     */
    supplierName?: string;
    /**
     * 
     * @type {number}
     * @memberof TrnRbtCnarBrandModel
     */
    backToBackImportId?: number;
    /**
     * 
     * @type {string}
     * @memberof TrnRbtCnarBrandModel
     */
    cnNo?: string;
    /**
     * 
     * @type {string}
     * @memberof TrnRbtCnarBrandModel
     */
    cnDate?: string;
    /**
     * 
     * @type {number}
     * @memberof TrnRbtCnarBrandModel
     */
    cnAmount?: number;
    /**
     * 
     * @type {number}
     * @memberof TrnRbtCnarBrandModel
     */
    vat?: number;
    /**
     * 
     * @type {number}
     * @memberof TrnRbtCnarBrandModel
     */
    cnAmountCur?: number;
    /**
     * 
     * @type {number}
     * @memberof TrnRbtCnarBrandModel
     */
    vatCur?: number;
    /**
     * 
     * @type {number}
     * @memberof TrnRbtCnarBrandModel
     */
    currencyId?: number;
    /**
     * 
     * @type {string}
     * @memberof TrnRbtCnarBrandModel
     */
    currencyAbbr?: string;
    /**
     * 
     * @type {number}
     * @memberof TrnRbtCnarBrandModel
     */
    exchangeRate?: number;
    /**
     * 
     * @type {string}
     * @memberof TrnRbtCnarBrandModel
     */
    customerId?: string;
    /**
     * 
     * @type {string}
     * @memberof TrnRbtCnarBrandModel
     */
    customerCode?: string;
    /**
     * 
     * @type {string}
     * @memberof TrnRbtCnarBrandModel
     */
    customerName?: string;
    /**
     * 
     * @type {string}
     * @memberof TrnRbtCnarBrandModel
     */
    taxPayerId?: string;
    /**
     * 
     * @type {string}
     * @memberof TrnRbtCnarBrandModel
     */
    revenueBranchCode?: string;
    /**
     * 
     * @type {string}
     * @memberof TrnRbtCnarBrandModel
     */
    fullAddress?: string;
    /**
     * 
     * @type {number}
     * @memberof TrnRbtCnarBrandModel
     */
    provinceId?: number;
    /**
     * 
     * @type {string}
     * @memberof TrnRbtCnarBrandModel
     */
    provinceName?: string;
    /**
     * 
     * @type {number}
     * @memberof TrnRbtCnarBrandModel
     */
    districtId?: number;
    /**
     * 
     * @type {string}
     * @memberof TrnRbtCnarBrandModel
     */
    districtName?: string;
    /**
     * 
     * @type {number}
     * @memberof TrnRbtCnarBrandModel
     */
    subDistrictId?: number;
    /**
     * 
     * @type {string}
     * @memberof TrnRbtCnarBrandModel
     */
    subDistrictName?: string;
    /**
     * 
     * @type {string}
     * @memberof TrnRbtCnarBrandModel
     */
    zipCode?: string;
    /**
     * 
     * @type {string}
     * @memberof TrnRbtCnarBrandModel
     */
    telephone?: string;
    /**
     * 
     * @type {string}
     * @memberof TrnRbtCnarBrandModel
     */
    email?: string;
    /**
     * 
     * @type {number}
     * @memberof TrnRbtCnarBrandModel
     */
    workflowId?: number;
    /**
     * 
     * @type {number}
     * @memberof TrnRbtCnarBrandModel
     */
    currentStepId?: number;
    /**
     * 
     * @type {number}
     * @memberof TrnRbtCnarBrandModel
     */
    trnStatus?: number;
}
/**
 * 
 * @export
 * @interface TrnRbtCnarInhouseFileModel
 */
export interface TrnRbtCnarInhouseFileModel {
    /**
     * 
     * @type {string}
     * @memberof TrnRbtCnarInhouseFileModel
     */
    fileName?: string;
    /**
     * 
     * @type {string}
     * @memberof TrnRbtCnarInhouseFileModel
     */
    filePath?: string;
    /**
     * 
     * @type {number}
     * @memberof TrnRbtCnarInhouseFileModel
     */
    cnDealerCreateId?: number;
}
/**
 * 
 * @export
 * @interface TrnRbtCnarInhouseModel
 */
export interface TrnRbtCnarInhouseModel {
    /**
     * 
     * @type {number}
     * @memberof TrnRbtCnarInhouseModel
     */
    companyId?: number;
    /**
     * 
     * @type {number}
     * @memberof TrnRbtCnarInhouseModel
     */
    organizationId?: number;
    /**
     * 
     * @type {number}
     * @memberof TrnRbtCnarInhouseModel
     */
    ownerUserId?: number;
    /**
     * 
     * @type {number}
     * @memberof TrnRbtCnarInhouseModel
     */
    cnDealerCreateId?: number;
    /**
     * 
     * @type {number}
     * @memberof TrnRbtCnarInhouseModel
     */
    rebateCampaignId?: number;
    /**
     * 
     * @type {string}
     * @memberof TrnRbtCnarInhouseModel
     */
    campaignName?: string;
    /**
     * 
     * @type {string}
     * @memberof TrnRbtCnarInhouseModel
     */
    campaignTypeName?: string;
    /**
     * 
     * @type {number}
     * @memberof TrnRbtCnarInhouseModel
     */
    supConSale?: number;
    /**
     * 
     * @type {number}
     * @memberof TrnRbtCnarInhouseModel
     */
    supConQty?: number;
    /**
     * 
     * @type {number}
     * @memberof TrnRbtCnarInhouseModel
     */
    rebateCalculateType?: number;
    /**
     * 
     * @type {number}
     * @memberof TrnRbtCnarInhouseModel
     */
    actualSale?: number;
    /**
     * 
     * @type {number}
     * @memberof TrnRbtCnarInhouseModel
     */
    actualQty?: number;
    /**
     * 
     * @type {string}
     * @memberof TrnRbtCnarInhouseModel
     */
    startDate?: string;
    /**
     * 
     * @type {string}
     * @memberof TrnRbtCnarInhouseModel
     */
    endDate?: string;
    /**
     * 
     * @type {string}
     * @memberof TrnRbtCnarInhouseModel
     */
    conPeriodStart?: string;
    /**
     * 
     * @type {string}
     * @memberof TrnRbtCnarInhouseModel
     */
    conPeriodEnd?: string;
    /**
     * 
     * @type {number}
     * @memberof TrnRbtCnarInhouseModel
     */
    estRebateAmount?: number;
    /**
     * 
     * @type {number}
     * @memberof TrnRbtCnarInhouseModel
     */
    cnDealerCreateListId?: number;
    /**
     * 
     * @type {string}
     * @memberof TrnRbtCnarInhouseModel
     */
    cnNo?: string;
    /**
     * 
     * @type {string}
     * @memberof TrnRbtCnarInhouseModel
     */
    cnDate?: string;
    /**
     * 
     * @type {number}
     * @memberof TrnRbtCnarInhouseModel
     */
    cnAmount?: number;
    /**
     * 
     * @type {number}
     * @memberof TrnRbtCnarInhouseModel
     */
    vat?: number;
    /**
     * 
     * @type {number}
     * @memberof TrnRbtCnarInhouseModel
     */
    cnAmountCur?: number;
    /**
     * 
     * @type {number}
     * @memberof TrnRbtCnarInhouseModel
     */
    vatCur?: number;
    /**
     * 
     * @type {number}
     * @memberof TrnRbtCnarInhouseModel
     */
    currencyId?: number;
    /**
     * 
     * @type {string}
     * @memberof TrnRbtCnarInhouseModel
     */
    currencyAbbr?: string;
    /**
     * 
     * @type {number}
     * @memberof TrnRbtCnarInhouseModel
     */
    exchangeRate?: number;
    /**
     * 
     * @type {string}
     * @memberof TrnRbtCnarInhouseModel
     */
    customerId?: string;
    /**
     * 
     * @type {string}
     * @memberof TrnRbtCnarInhouseModel
     */
    customerCode?: string;
    /**
     * 
     * @type {string}
     * @memberof TrnRbtCnarInhouseModel
     */
    customerName?: string;
    /**
     * 
     * @type {string}
     * @memberof TrnRbtCnarInhouseModel
     */
    taxPayerId?: string;
    /**
     * 
     * @type {string}
     * @memberof TrnRbtCnarInhouseModel
     */
    revenueBranchCode?: string;
    /**
     * 
     * @type {string}
     * @memberof TrnRbtCnarInhouseModel
     */
    fullAddress?: string;
    /**
     * 
     * @type {number}
     * @memberof TrnRbtCnarInhouseModel
     */
    provinceId?: number;
    /**
     * 
     * @type {string}
     * @memberof TrnRbtCnarInhouseModel
     */
    provinceName?: string;
    /**
     * 
     * @type {number}
     * @memberof TrnRbtCnarInhouseModel
     */
    districtId?: number;
    /**
     * 
     * @type {string}
     * @memberof TrnRbtCnarInhouseModel
     */
    districtName?: string;
    /**
     * 
     * @type {number}
     * @memberof TrnRbtCnarInhouseModel
     */
    subDistrictId?: number;
    /**
     * 
     * @type {string}
     * @memberof TrnRbtCnarInhouseModel
     */
    subDistrictName?: string;
    /**
     * 
     * @type {string}
     * @memberof TrnRbtCnarInhouseModel
     */
    zipCode?: string;
    /**
     * 
     * @type {string}
     * @memberof TrnRbtCnarInhouseModel
     */
    telephone?: string;
    /**
     * 
     * @type {string}
     * @memberof TrnRbtCnarInhouseModel
     */
    email?: string;
    /**
     * 
     * @type {number}
     * @memberof TrnRbtCnarInhouseModel
     */
    workflowId?: number;
    /**
     * 
     * @type {number}
     * @memberof TrnRbtCnarInhouseModel
     */
    currentStepId?: number;
    /**
     * 
     * @type {number}
     * @memberof TrnRbtCnarInhouseModel
     */
    trnStatus?: number;
}

/**
 * 
 * @export
 */
export const TypeOfPayment = {
    NUMBER_1: 1,
    NUMBER_2: 2,
    NUMBER_6: 6,
    NUMBER_7: 7
} as const;
export type TypeOfPayment = typeof TypeOfPayment[keyof typeof TypeOfPayment];

/**
 * 
 * @export
 * @interface UpdateActiveFlagMasterCustomerCreditScoreModel
 */
export interface UpdateActiveFlagMasterCustomerCreditScoreModel {
    /**
     * 
     * @type {number}
     * @memberof UpdateActiveFlagMasterCustomerCreditScoreModel
     */
    customerCreditScoreId?: number;
    /**
     * 
     * @type {boolean}
     * @memberof UpdateActiveFlagMasterCustomerCreditScoreModel
     */
    activeFlag?: boolean;
}
/**
 * 
 * @export
 * @interface UpdateActiveFlagMasterCustomerCreditScoreModelBaseResponseModel
 */
export interface UpdateActiveFlagMasterCustomerCreditScoreModelBaseResponseModel {
    /**
     * 
     * @type {boolean}
     * @memberof UpdateActiveFlagMasterCustomerCreditScoreModelBaseResponseModel
     */
    success?: boolean;
    /**
     * 
     * @type {string}
     * @memberof UpdateActiveFlagMasterCustomerCreditScoreModelBaseResponseModel
     */
    message?: string;
    /**
     * 
     * @type {number}
     * @memberof UpdateActiveFlagMasterCustomerCreditScoreModelBaseResponseModel
     */
    statusCode?: number;
    /**
     * 
     * @type {UpdateActiveFlagMasterCustomerCreditScoreModel}
     * @memberof UpdateActiveFlagMasterCustomerCreditScoreModelBaseResponseModel
     */
    data?: UpdateActiveFlagMasterCustomerCreditScoreModel;
}
/**
 * 
 * @export
 * @interface UpdateActiveFlagMasterCustomerGradeModel
 */
export interface UpdateActiveFlagMasterCustomerGradeModel {
    /**
     * 
     * @type {number}
     * @memberof UpdateActiveFlagMasterCustomerGradeModel
     */
    customerGradeId?: number;
    /**
     * 
     * @type {boolean}
     * @memberof UpdateActiveFlagMasterCustomerGradeModel
     */
    activeFlag?: boolean;
}
/**
 * 
 * @export
 * @interface UpdateActiveFlagMasterCustomerGradeModelBaseResponseModel
 */
export interface UpdateActiveFlagMasterCustomerGradeModelBaseResponseModel {
    /**
     * 
     * @type {boolean}
     * @memberof UpdateActiveFlagMasterCustomerGradeModelBaseResponseModel
     */
    success?: boolean;
    /**
     * 
     * @type {string}
     * @memberof UpdateActiveFlagMasterCustomerGradeModelBaseResponseModel
     */
    message?: string;
    /**
     * 
     * @type {number}
     * @memberof UpdateActiveFlagMasterCustomerGradeModelBaseResponseModel
     */
    statusCode?: number;
    /**
     * 
     * @type {UpdateActiveFlagMasterCustomerGradeModel}
     * @memberof UpdateActiveFlagMasterCustomerGradeModelBaseResponseModel
     */
    data?: UpdateActiveFlagMasterCustomerGradeModel;
}
/**
 * 
 * @export
 * @interface UpdateAmountRegistterCustomerModel
 */
export interface UpdateAmountRegistterCustomerModel {
    /**
     * 
     * @type {number}
     * @memberof UpdateAmountRegistterCustomerModel
     */
    regisCustomerId?: number;
    /**
     * 
     * @type {number}
     * @memberof UpdateAmountRegistterCustomerModel
     */
    amountApprove?: number;
    /**
     * 
     * @type {number}
     * @memberof UpdateAmountRegistterCustomerModel
     */
    amountInsuranceApprove?: number;
}
/**
 * 
 * @export
 * @interface UpdateAmountRegistterCustomerModelBaseResponseModel
 */
export interface UpdateAmountRegistterCustomerModelBaseResponseModel {
    /**
     * 
     * @type {boolean}
     * @memberof UpdateAmountRegistterCustomerModelBaseResponseModel
     */
    success?: boolean;
    /**
     * 
     * @type {string}
     * @memberof UpdateAmountRegistterCustomerModelBaseResponseModel
     */
    message?: string;
    /**
     * 
     * @type {number}
     * @memberof UpdateAmountRegistterCustomerModelBaseResponseModel
     */
    statusCode?: number;
    /**
     * 
     * @type {UpdateAmountRegistterCustomerModel}
     * @memberof UpdateAmountRegistterCustomerModelBaseResponseModel
     */
    data?: UpdateAmountRegistterCustomerModel;
}
/**
 * 
 * @export
 * @interface UpdateCustomerEvaluationActiveFlag
 */
export interface UpdateCustomerEvaluationActiveFlag {
    /**
     * 
     * @type {number}
     * @memberof UpdateCustomerEvaluationActiveFlag
     */
    customerEvaluationId?: number;
    /**
     * 
     * @type {boolean}
     * @memberof UpdateCustomerEvaluationActiveFlag
     */
    activeFlag?: boolean;
}
/**
 * 
 * @export
 * @interface UpdateCustomerEvaluationActiveFlagBaseResponseModel
 */
export interface UpdateCustomerEvaluationActiveFlagBaseResponseModel {
    /**
     * 
     * @type {boolean}
     * @memberof UpdateCustomerEvaluationActiveFlagBaseResponseModel
     */
    success?: boolean;
    /**
     * 
     * @type {string}
     * @memberof UpdateCustomerEvaluationActiveFlagBaseResponseModel
     */
    message?: string;
    /**
     * 
     * @type {number}
     * @memberof UpdateCustomerEvaluationActiveFlagBaseResponseModel
     */
    statusCode?: number;
    /**
     * 
     * @type {UpdateCustomerEvaluationActiveFlag}
     * @memberof UpdateCustomerEvaluationActiveFlagBaseResponseModel
     */
    data?: UpdateCustomerEvaluationActiveFlag;
}
/**
 * 
 * @export
 * @interface UserChangePasswordByEmailModel
 */
export interface UserChangePasswordByEmailModel {
    /**
     * 
     * @type {string}
     * @memberof UserChangePasswordByEmailModel
     */
    forgotPasswordToken?: string;
    /**
     * 
     * @type {string}
     * @memberof UserChangePasswordByEmailModel
     */
    newPassword?: string;
    /**
     * 
     * @type {string}
     * @memberof UserChangePasswordByEmailModel
     */
    validateNewPassword?: string;
}
/**
 * 
 * @export
 * @interface UserChangePasswordByUserIDModel
 */
export interface UserChangePasswordByUserIDModel {
    /**
     * 
     * @type {number}
     * @memberof UserChangePasswordByUserIDModel
     */
    userId?: number;
    /**
     * 
     * @type {string}
     * @memberof UserChangePasswordByUserIDModel
     */
    oldPassword?: string;
    /**
     * 
     * @type {string}
     * @memberof UserChangePasswordByUserIDModel
     */
    newPassword?: string;
    /**
     * 
     * @type {string}
     * @memberof UserChangePasswordByUserIDModel
     */
    validateNewPassword?: string;
}
/**
 * 
 * @export
 * @interface UserCreateModel
 */
export interface UserCreateModel {
    /**
     * 
     * @type {string}
     * @memberof UserCreateModel
     */
    username?: string;
    /**
     * 
     * @type {string}
     * @memberof UserCreateModel
     */
    password?: string;
    /**
     * 
     * @type {UserType}
     * @memberof UserCreateModel
     */
    userType?: UserType;
    /**
     * 
     * @type {string}
     * @memberof UserCreateModel
     */
    firstname?: string;
    /**
     * 
     * @type {string}
     * @memberof UserCreateModel
     */
    lastname?: string;
    /**
     * 
     * @type {number}
     * @memberof UserCreateModel
     */
    businessRoleId?: number;
    /**
     * 
     * @type {number}
     * @memberof UserCreateModel
     */
    orgId?: number;
    /**
     * 
     * @type {string}
     * @memberof UserCreateModel
     */
    email?: string;
    /**
     * 
     * @type {string}
     * @memberof UserCreateModel
     */
    mobilePhone?: string;
    /**
     * 
     * @type {string}
     * @memberof UserCreateModel
     */
    employeeCode?: string;
    /**
     * 
     * @type {boolean}
     * @memberof UserCreateModel
     */
    activeFlag?: boolean;
    /**
     * 
     * @type {DataAccessType}
     * @memberof UserCreateModel
     */
    dataAccessType?: DataAccessType;
    /**
     * 
     * @type {Set<number>}
     * @memberof UserCreateModel
     */
    accessDepartment?: Set<number>;
    /**
     * 
     * @type {Array<RoleModel>}
     * @memberof UserCreateModel
     */
    roles?: Array<RoleModel>;
    /**
     * 
     * @type {string}
     * @memberof UserCreateModel
     */
    userProfilePath?: string;
    /**
     * 
     * @type {string}
     * @memberof UserCreateModel
     */
    userSignaturePath?: string;
    /**
     * 
     * @type {string}
     * @memberof UserCreateModel
     */
    userSignatureBase64?: string;
}


/**
 * 
 * @export
 * @interface UserDetailModel
 */
export interface UserDetailModel {
    /**
     * 
     * @type {number}
     * @memberof UserDetailModel
     */
    userId?: number;
    /**
     * 
     * @type {string}
     * @memberof UserDetailModel
     */
    username?: string;
    /**
     * 
     * @type {UserType}
     * @memberof UserDetailModel
     */
    userType?: UserType;
    /**
     * 
     * @type {string}
     * @memberof UserDetailModel
     */
    firstName?: string;
    /**
     * 
     * @type {string}
     * @memberof UserDetailModel
     */
    lastName?: string;
    /**
     * 
     * @type {number}
     * @memberof UserDetailModel
     */
    employeeId?: number;
    /**
     * 
     * @type {string}
     * @memberof UserDetailModel
     */
    employeeCode?: string;
    /**
     * 
     * @type {string}
     * @memberof UserDetailModel
     */
    email?: string;
    /**
     * 
     * @type {string}
     * @memberof UserDetailModel
     */
    mobilePhone?: string;
    /**
     * 
     * @type {boolean}
     * @memberof UserDetailModel
     */
    activeFlag?: boolean;
    /**
     * 
     * @type {DataAccessType}
     * @memberof UserDetailModel
     */
    dataAccessType?: DataAccessType;
    /**
     * 
     * @type {string}
     * @memberof UserDetailModel
     */
    readonly dataAccessTypeName?: string;
    /**
     * 
     * @type {string}
     * @memberof UserDetailModel
     */
    orgName?: string;
    /**
     * 
     * @type {string}
     * @memberof UserDetailModel
     */
    companyName?: string;
    /**
     * 
     * @type {Array<RoleModel>}
     * @memberof UserDetailModel
     */
    roles?: Array<RoleModel>;
    /**
     * 
     * @type {Array<OrganizationModel>}
     * @memberof UserDetailModel
     */
    organization?: Array<OrganizationModel>;
    /**
     * 
     * @type {TokenModel}
     * @memberof UserDetailModel
     */
    token?: TokenModel;
    /**
     * 
     * @type {Array<MenuResponseModel>}
     * @memberof UserDetailModel
     */
    menus?: Array<MenuResponseModel>;
    /**
     * 
     * @type {Array<PermissionResponseModel>}
     * @memberof UserDetailModel
     */
    permissions?: Array<PermissionResponseModel>;
    /**
     * 
     * @type {boolean}
     * @memberof UserDetailModel
     */
    changePassword?: boolean;
    /**
     * 
     * @type {string}
     * @memberof UserDetailModel
     */
    userProfilePath?: string;
}


/**
 * 
 * @export
 * @interface UserDetailModelBaseResponseModel
 */
export interface UserDetailModelBaseResponseModel {
    /**
     * 
     * @type {boolean}
     * @memberof UserDetailModelBaseResponseModel
     */
    success?: boolean;
    /**
     * 
     * @type {string}
     * @memberof UserDetailModelBaseResponseModel
     */
    message?: string;
    /**
     * 
     * @type {number}
     * @memberof UserDetailModelBaseResponseModel
     */
    statusCode?: number;
    /**
     * 
     * @type {UserDetailModel}
     * @memberof UserDetailModelBaseResponseModel
     */
    data?: UserDetailModel;
}
/**
 * 
 * @export
 * @interface UserLoginRequestModel
 */
export interface UserLoginRequestModel {
    /**
     * 
     * @type {string}
     * @memberof UserLoginRequestModel
     */
    username?: string;
    /**
     * 
     * @type {string}
     * @memberof UserLoginRequestModel
     */
    password?: string;
}
/**
 * 
 * @export
 * @interface UserModel
 */
export interface UserModel {
    /**
     * 
     * @type {number}
     * @memberof UserModel
     */
    userId?: number;
    /**
     * 
     * @type {string}
     * @memberof UserModel
     */
    username?: string;
    /**
     * 
     * @type {string}
     * @memberof UserModel
     */
    firstName?: string;
    /**
     * 
     * @type {string}
     * @memberof UserModel
     */
    lastName?: string;
    /**
     * 
     * @type {string}
     * @memberof UserModel
     */
    email?: string;
    /**
     * 
     * @type {string}
     * @memberof UserModel
     */
    firstnameTh?: string;
    /**
     * 
     * @type {boolean}
     * @memberof UserModel
     */
    activeFlag?: boolean;
    /**
     * 
     * @type {Array<RoleModel>}
     * @memberof UserModel
     */
    roles?: Array<RoleModel>;
    /**
     * 
     * @type {string}
     * @memberof UserModel
     */
    lastLoginDate?: string;
}
/**
 * 
 * @export
 * @interface UserModelBaseResponsePagination
 */
export interface UserModelBaseResponsePagination {
    /**
     * 
     * @type {boolean}
     * @memberof UserModelBaseResponsePagination
     */
    success?: boolean;
    /**
     * 
     * @type {string}
     * @memberof UserModelBaseResponsePagination
     */
    message?: string;
    /**
     * 
     * @type {number}
     * @memberof UserModelBaseResponsePagination
     */
    statusCode?: number;
    /**
     * 
     * @type {number}
     * @memberof UserModelBaseResponsePagination
     */
    pageIndex?: number;
    /**
     * 
     * @type {number}
     * @memberof UserModelBaseResponsePagination
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof UserModelBaseResponsePagination
     */
    pageAll?: number;
    /**
     * 
     * @type {number}
     * @memberof UserModelBaseResponsePagination
     */
    totalRecord?: number;
    /**
     * 
     * @type {Array<UserModel>}
     * @memberof UserModelBaseResponsePagination
     */
    data?: Array<UserModel>;
}
/**
 * 
 * @export
 * @interface UserResetPasswordRequest
 */
export interface UserResetPasswordRequest {
    /**
     * 
     * @type {string}
     * @memberof UserResetPasswordRequest
     */
    email?: string;
}

/**
 * 
 * @export
 */
export const UserType = {
    NUMBER_1: 1,
    NUMBER_2: 2
} as const;
export type UserType = typeof UserType[keyof typeof UserType];

/**
 * 
 * @export
 * @interface UserUpdateRequestModel
 */
export interface UserUpdateRequestModel {
    /**
     * 
     * @type {number}
     * @memberof UserUpdateRequestModel
     */
    userId?: number;
    /**
     * 
     * @type {string}
     * @memberof UserUpdateRequestModel
     */
    username?: string;
    /**
     * 
     * @type {string}
     * @memberof UserUpdateRequestModel
     */
    password?: string;
    /**
     * 
     * @type {UserType}
     * @memberof UserUpdateRequestModel
     */
    userType?: UserType;
    /**
     * 
     * @type {string}
     * @memberof UserUpdateRequestModel
     */
    firstname?: string;
    /**
     * 
     * @type {string}
     * @memberof UserUpdateRequestModel
     */
    lastname?: string;
    /**
     * 
     * @type {number}
     * @memberof UserUpdateRequestModel
     */
    businessRoleId?: number;
    /**
     * 
     * @type {number}
     * @memberof UserUpdateRequestModel
     */
    orgId?: number;
    /**
     * 
     * @type {string}
     * @memberof UserUpdateRequestModel
     */
    email?: string;
    /**
     * 
     * @type {string}
     * @memberof UserUpdateRequestModel
     */
    mobilePhone?: string;
    /**
     * 
     * @type {string}
     * @memberof UserUpdateRequestModel
     */
    employeeCode?: string;
    /**
     * 
     * @type {boolean}
     * @memberof UserUpdateRequestModel
     */
    activeFlag?: boolean;
    /**
     * 
     * @type {DataAccessType}
     * @memberof UserUpdateRequestModel
     */
    dataAccessType?: DataAccessType;
    /**
     * 
     * @type {Set<number>}
     * @memberof UserUpdateRequestModel
     */
    accessDepartment?: Set<number>;
    /**
     * 
     * @type {Array<RoleModel>}
     * @memberof UserUpdateRequestModel
     */
    roles?: Array<RoleModel>;
    /**
     * 
     * @type {string}
     * @memberof UserUpdateRequestModel
     */
    userProfilePath?: string;
    /**
     * 
     * @type {string}
     * @memberof UserUpdateRequestModel
     */
    userSignaturePath?: string;
    /**
     * 
     * @type {string}
     * @memberof UserUpdateRequestModel
     */
    userSignatureBase64?: string;
}


/**
 * 
 * @export
 * @interface UserUpdateRequestModelBaseResponseModel
 */
export interface UserUpdateRequestModelBaseResponseModel {
    /**
     * 
     * @type {boolean}
     * @memberof UserUpdateRequestModelBaseResponseModel
     */
    success?: boolean;
    /**
     * 
     * @type {string}
     * @memberof UserUpdateRequestModelBaseResponseModel
     */
    message?: string;
    /**
     * 
     * @type {number}
     * @memberof UserUpdateRequestModelBaseResponseModel
     */
    statusCode?: number;
    /**
     * 
     * @type {UserUpdateRequestModel}
     * @memberof UserUpdateRequestModelBaseResponseModel
     */
    data?: UserUpdateRequestModel;
}
/**
 * 
 * @export
 * @interface VoucherDetailModel
 */
export interface VoucherDetailModel {
    /**
     * 
     * @type {number}
     * @memberof VoucherDetailModel
     */
    trnVoucherDetailId?: number;
    /**
     * 
     * @type {number}
     * @memberof VoucherDetailModel
     */
    trnVoucherId?: number;
    /**
     * 
     * @type {number}
     * @memberof VoucherDetailModel
     */
    chartAccountsId?: number;
    /**
     * 
     * @type {number}
     * @memberof VoucherDetailModel
     */
    currencyId?: number;
    /**
     * 
     * @type {number}
     * @memberof VoucherDetailModel
     */
    exchangeRate?: number;
    /**
     * 
     * @type {number}
     * @memberof VoucherDetailModel
     */
    amount?: number;
    /**
     * 
     * @type {string}
     * @memberof VoucherDetailModel
     */
    remark?: string;
    /**
     * 
     * @type {number}
     * @memberof VoucherDetailModel
     */
    depId?: number;
    /**
     * 
     * @type {number}
     * @memberof VoucherDetailModel
     */
    projectId?: number;
}
/**
 * 
 * @export
 * @interface VoucherMappingStatementModel
 */
export interface VoucherMappingStatementModel {
    /**
     * 
     * @type {number}
     * @memberof VoucherMappingStatementModel
     */
    mappingStmtId?: number;
    /**
     * 
     * @type {number}
     * @memberof VoucherMappingStatementModel
     */
    stmtId?: number;
    /**
     * 
     * @type {number}
     * @memberof VoucherMappingStatementModel
     */
    refSystemId?: number;
    /**
     * 
     * @type {number}
     * @memberof VoucherMappingStatementModel
     */
    mappingValue?: number;
}
/**
 * 
 * @export
 * @interface VoucherModel
 */
export interface VoucherModel {
    /**
     * 
     * @type {number}
     * @memberof VoucherModel
     */
    trnVoucherId?: number;
    /**
     * 
     * @type {RefType}
     * @memberof VoucherModel
     */
    refType?: RefType;
    /**
     * 
     * @type {number}
     * @memberof VoucherModel
     */
    voucherType?: number;
    /**
     * 
     * @type {string}
     * @memberof VoucherModel
     */
    voucherDate?: string;
    /**
     * 
     * @type {string}
     * @memberof VoucherModel
     */
    voucherCode?: string;
    /**
     * 
     * @type {string}
     * @memberof VoucherModel
     */
    voucherRemark?: string;
    /**
     * 
     * @type {number}
     * @memberof VoucherModel
     */
    voucherAmount?: number;
    /**
     * 
     * @type {Array<VoucherDetailModel>}
     * @memberof VoucherModel
     */
    voucherDetail?: Array<VoucherDetailModel>;
}



/**
 * 
 * @export
 */
export const WorkFlowRefType = {
    NUMBER_1: 1,
    NUMBER_2: 2,
    NUMBER_3: 3,
    NUMBER_4: 4,
    NUMBER_5: 5,
    NUMBER_6: 6,
    NUMBER_7: 7,
    NUMBER_8: 8,
    NUMBER_9: 9,
    NUMBER_10: 10,
    NUMBER_11: 11,
    NUMBER_12: 12,
    NUMBER_13: 13,
    NUMBER_14: 14,
    NUMBER_15: 15,
    NUMBER_16: 16,
    NUMBER_17: 17,
    NUMBER_18: 18,
    NUMBER_19: 19,
    NUMBER_20: 20,
    NUMBER_21: 21
} as const;
export type WorkFlowRefType = typeof WorkFlowRefType[keyof typeof WorkFlowRefType];

/**
 * 
 * @export
 * @interface WorkflowStepStatusModel
 */
export interface WorkflowStepStatusModel {
    /**
     * 
     * @type {WorkFlowRefType}
     * @memberof WorkflowStepStatusModel
     */
    workflowRefType?: WorkFlowRefType;
    /**
     * 
     * @type {number}
     * @memberof WorkflowStepStatusModel
     */
    workflowStepId?: number;
    /**
     * 
     * @type {string}
     * @memberof WorkflowStepStatusModel
     */
    targetStatusName?: string;
}


/**
 * 
 * @export
 * @interface WorkflowStepStatusModelListBaseResponseModel
 */
export interface WorkflowStepStatusModelListBaseResponseModel {
    /**
     * 
     * @type {boolean}
     * @memberof WorkflowStepStatusModelListBaseResponseModel
     */
    success?: boolean;
    /**
     * 
     * @type {string}
     * @memberof WorkflowStepStatusModelListBaseResponseModel
     */
    message?: string;
    /**
     * 
     * @type {number}
     * @memberof WorkflowStepStatusModelListBaseResponseModel
     */
    statusCode?: number;
    /**
     * 
     * @type {Array<WorkflowStepStatusModel>}
     * @memberof WorkflowStepStatusModelListBaseResponseModel
     */
    data?: Array<WorkflowStepStatusModel>;
}
/**
 * 
 * @export
 * @interface WorkflowTransitionInfoModel
 */
export interface WorkflowTransitionInfoModel {
    /**
     * 
     * @type {WorkFlowRefType}
     * @memberof WorkflowTransitionInfoModel
     */
    workflowRefType?: WorkFlowRefType;
    /**
     * 
     * @type {number}
     * @memberof WorkflowTransitionInfoModel
     */
    transitionId?: number;
    /**
     * 
     * @type {number}
     * @memberof WorkflowTransitionInfoModel
     */
    currentStepId?: number;
    /**
     * 
     * @type {number}
     * @memberof WorkflowTransitionInfoModel
     */
    targetStepId?: number;
    /**
     * 
     * @type {string}
     * @memberof WorkflowTransitionInfoModel
     */
    targetStepType?: string;
    /**
     * 
     * @type {string}
     * @memberof WorkflowTransitionInfoModel
     */
    targetStepName?: string;
    /**
     * 
     * @type {boolean}
     * @memberof WorkflowTransitionInfoModel
     */
    requiredSave?: boolean;
}


/**
 * 
 * @export
 * @interface WorkflowTransitionInfoModelListBaseResponseModel
 */
export interface WorkflowTransitionInfoModelListBaseResponseModel {
    /**
     * 
     * @type {boolean}
     * @memberof WorkflowTransitionInfoModelListBaseResponseModel
     */
    success?: boolean;
    /**
     * 
     * @type {string}
     * @memberof WorkflowTransitionInfoModelListBaseResponseModel
     */
    message?: string;
    /**
     * 
     * @type {number}
     * @memberof WorkflowTransitionInfoModelListBaseResponseModel
     */
    statusCode?: number;
    /**
     * 
     * @type {Array<WorkflowTransitionInfoModel>}
     * @memberof WorkflowTransitionInfoModelListBaseResponseModel
     */
    data?: Array<WorkflowTransitionInfoModel>;
}
/**
 * 
 * @export
 * @interface WorkflowTransitionRequest
 */
export interface WorkflowTransitionRequest {
    /**
     * 
     * @type {WorkFlowRefType}
     * @memberof WorkflowTransitionRequest
     */
    workflowRefType?: WorkFlowRefType;
    /**
     * 
     * @type {number}
     * @memberof WorkflowTransitionRequest
     */
    currentStepId?: number;
    /**
     * 
     * @type {number}
     * @memberof WorkflowTransitionRequest
     */
    targetStepId?: number;
    /**
     * 
     * @type {Array<number>}
     * @memberof WorkflowTransitionRequest
     */
    entityIdList?: Array<number>;
    /**
     * 
     * @type {number}
     * @memberof WorkflowTransitionRequest
     */
    transitionId?: number;
    /**
     * 
     * @type {string}
     * @memberof WorkflowTransitionRequest
     */
    remark?: string;
}


/**
 * 
 * @export
 * @interface WorkflowTransitionResult
 */
export interface WorkflowTransitionResult {
    /**
     * 
     * @type {number}
     * @memberof WorkflowTransitionResult
     */
    newStepId?: number;
    /**
     * 
     * @type {string}
     * @memberof WorkflowTransitionResult
     */
    newStepCode?: string;
    /**
     * 
     * @type {string}
     * @memberof WorkflowTransitionResult
     */
    newStepName?: string;
    /**
     * 
     * @type {boolean}
     * @memberof WorkflowTransitionResult
     */
    isFinished?: boolean;
    /**
     * 
     * @type {number}
     * @memberof WorkflowTransitionResult
     */
    transactionId?: number;
}
/**
 * 
 * @export
 * @interface WorkflowTransitionResultBaseResponseModel
 */
export interface WorkflowTransitionResultBaseResponseModel {
    /**
     * 
     * @type {boolean}
     * @memberof WorkflowTransitionResultBaseResponseModel
     */
    success?: boolean;
    /**
     * 
     * @type {string}
     * @memberof WorkflowTransitionResultBaseResponseModel
     */
    message?: string;
    /**
     * 
     * @type {number}
     * @memberof WorkflowTransitionResultBaseResponseModel
     */
    statusCode?: number;
    /**
     * 
     * @type {WorkflowTransitionResult}
     * @memberof WorkflowTransitionResultBaseResponseModel
     */
    data?: WorkflowTransitionResult;
}
