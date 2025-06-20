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
    brand_id?: number;
    /**
     * 
     * @type {string}
     * @memberof APCNRebateDetail
     */
    brand_name?: string;
    /**
     * 
     * @type {number}
     * @memberof APCNRebateDetail
     */
    rebate_amount?: number;
    /**
     * 
     * @type {string}
     * @memberof APCNRebateDetail
     */
    rebate_detail?: string;
    /**
     * 
     * @type {string}
     * @memberof APCNRebateDetail
     */
    cn_no?: string;
    /**
     * 
     * @type {string}
     * @memberof APCNRebateDetail
     */
    cn_date?: string;
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
    create_date?: string;
    /**
     * 
     * @type {string}
     * @memberof APCNSupplierDetail
     */
    rebate_code?: string;
    /**
     * 
     * @type {string}
     * @memberof APCNSupplierDetail
     */
    supplier_id?: string;
    /**
     * 
     * @type {string}
     * @memberof APCNSupplierDetail
     */
    supplier_code?: string;
    /**
     * 
     * @type {string}
     * @memberof APCNSupplierDetail
     */
    tax_payer_id?: string;
    /**
     * 
     * @type {string}
     * @memberof APCNSupplierDetail
     */
    revenue_branch_code?: string;
    /**
     * 
     * @type {string}
     * @memberof APCNSupplierDetail
     */
    supplier_name?: string;
    /**
     * 
     * @type {string}
     * @memberof APCNSupplierDetail
     */
    full_address?: string;
    /**
     * 
     * @type {number}
     * @memberof APCNSupplierDetail
     */
    province_id?: number;
    /**
     * 
     * @type {number}
     * @memberof APCNSupplierDetail
     */
    district_id?: number;
    /**
     * 
     * @type {number}
     * @memberof APCNSupplierDetail
     */
    sub_district_id?: number;
    /**
     * 
     * @type {string}
     * @memberof APCNSupplierDetail
     */
    zip_code?: string;
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
    rebate_code?: string;
    /**
     * 
     * @type {string}
     * @memberof ARCNCustomerDetail
     */
    rebate_detail?: string;
    /**
     * 
     * @type {string}
     * @memberof ARCNCustomerDetail
     */
    tax_payer_id?: string;
    /**
     * 
     * @type {string}
     * @memberof ARCNCustomerDetail
     */
    revenue_branch_code?: string;
    /**
     * 
     * @type {string}
     * @memberof ARCNCustomerDetail
     */
    customer_name?: string;
    /**
     * 
     * @type {string}
     * @memberof ARCNCustomerDetail
     */
    full_address?: string;
    /**
     * 
     * @type {number}
     * @memberof ARCNCustomerDetail
     */
    province_id?: number;
    /**
     * 
     * @type {number}
     * @memberof ARCNCustomerDetail
     */
    district_id?: number;
    /**
     * 
     * @type {number}
     * @memberof ARCNCustomerDetail
     */
    sub_district_id?: number;
    /**
     * 
     * @type {string}
     * @memberof ARCNCustomerDetail
     */
    zip_code?: string;
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
    campaign_name?: string;
    /**
     * 
     * @type {number}
     * @memberof ARCNInHouseCampaignDetail
     */
    sup_con_sale?: number;
    /**
     * 
     * @type {string}
     * @memberof ARCNInHouseCampaignDetail
     */
    start_date?: string;
    /**
     * 
     * @type {string}
     * @memberof ARCNInHouseCampaignDetail
     */
    end_date?: string;
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
    rebate_code?: string;
    /**
     * 
     * @type {string}
     * @memberof ARCNInHouseCustomerDetail
     */
    tax_payer_id?: string;
    /**
     * 
     * @type {string}
     * @memberof ARCNInHouseCustomerDetail
     */
    revenue_branch_code?: string;
    /**
     * 
     * @type {string}
     * @memberof ARCNInHouseCustomerDetail
     */
    customer_name?: string;
    /**
     * 
     * @type {string}
     * @memberof ARCNInHouseCustomerDetail
     */
    full_address?: string;
    /**
     * 
     * @type {number}
     * @memberof ARCNInHouseCustomerDetail
     */
    province_id?: number;
    /**
     * 
     * @type {number}
     * @memberof ARCNInHouseCustomerDetail
     */
    district_id?: number;
    /**
     * 
     * @type {number}
     * @memberof ARCNInHouseCustomerDetail
     */
    sub_district_id?: number;
    /**
     * 
     * @type {string}
     * @memberof ARCNInHouseCustomerDetail
     */
    zip_code?: string;
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
    row_number?: number;
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
    supplier_name?: string;
    /**
     * 
     * @type {number}
     * @memberof ARCNRebateDetail
     */
    rebate_amount?: number;
    /**
     * 
     * @type {number}
     * @memberof ARCNRebateDetail
     */
    brand_id?: number;
    /**
     * 
     * @type {string}
     * @memberof ARCNRebateDetail
     */
    brand_name?: string;
    /**
     * 
     * @type {string}
     * @memberof ARCNRebateDetail
     */
    rebate_detail?: string;
    /**
     * 
     * @type {string}
     * @memberof ARCNRebateDetail
     */
    cn_no?: string;
    /**
     * 
     * @type {string}
     * @memberof ARCNRebateDetail
     */
    cn_date?: string;
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
    rbt_cnap_id?: number;
    /**
     * 
     * @type {APCNSupplierDetail}
     * @memberof ApprovalAPCNDetailModel
     */
    supplier_detail?: APCNSupplierDetail;
    /**
     * 
     * @type {APCNRebateDetail}
     * @memberof ApprovalAPCNDetailModel
     */
    rebate_detail?: APCNRebateDetail;
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
    cn_total?: APCNTotal;
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
    workflow_id?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalAPCNDetailModel
     */
    current_step_id?: number;
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
    row_number?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalAPCNModel
     */
    company_id?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalAPCNModel
     */
    organization_id?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalAPCNModel
     */
    owner_user_id?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalAPCNModel
     */
    rbt_cnap_id?: number;
    /**
     * 
     * @type {string}
     * @memberof ApprovalAPCNModel
     */
    rebate_code?: string;
    /**
     * 
     * @type {string}
     * @memberof ApprovalAPCNModel
     */
    cn_date?: string;
    /**
     * 
     * @type {string}
     * @memberof ApprovalAPCNModel
     */
    brand_name?: string;
    /**
     * 
     * @type {string}
     * @memberof ApprovalAPCNModel
     */
    cn_no?: string;
    /**
     * 
     * @type {number}
     * @memberof ApprovalAPCNModel
     */
    rebate_amount?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalAPCNModel
     */
    cn_amount?: number;
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
    amount_include_vat?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalAPCNModel
     */
    workflow_id?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalAPCNModel
     */
    current_step_id?: number;
    /**
     * 
     * @type {APCNstatus}
     * @memberof ApprovalAPCNModel
     */
    trn_status?: APCNstatus;
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
    workflow_id?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalAPCNResponseModel
     */
    approval_total?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalAPCNResponseModel
     */
    approval_confirmed?: number;
    /**
     * 
     * @type {Array<BaseCountStatusModel>}
     * @memberof ApprovalAPCNResponseModel
     */
    count_status_list?: Array<BaseCountStatusModel>;
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
    trn_claim_id?: number;
    /**
     * 
     * @type {CNSendStatus}
     * @memberof ApprovalARCNClaimDetailModel
     */
    trn_status?: CNSendStatus;
    /**
     * 
     * @type {string}
     * @memberof ApprovalARCNClaimDetailModel
     */
    trn_status_name?: string;
    /**
     * 
     * @type {ApprovalARCNCustomerDetailModel}
     * @memberof ApprovalARCNClaimDetailModel
     */
    customer_detail?: ApprovalARCNCustomerDetailModel;
    /**
     * 
     * @type {Array<ApprovalARCNClaimProductModel>}
     * @memberof ApprovalARCNClaimDetailModel
     */
    product_list?: Array<ApprovalARCNClaimProductModel>;
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
    claim_price?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalARCNClaimDetailModel
     */
    claim_vat_price?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalARCNClaimDetailModel
     */
    claim_total_price?: number;
    /**
     * 
     * @type {string}
     * @memberof ApprovalARCNClaimDetailModel
     */
    claim_sqm_remark?: string;
    /**
     * 
     * @type {string}
     * @memberof ApprovalARCNClaimDetailModel
     */
    claim_fa_remark?: string;
    /**
     * 
     * @type {number}
     * @memberof ApprovalARCNClaimDetailModel
     */
    workflow_id?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalARCNClaimDetailModel
     */
    current_step_id?: number;
    /**
     * 
     * @type {boolean}
     * @memberof ApprovalARCNClaimDetailModel
     */
    is_workflow_done?: boolean;
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
    row_number?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalARCNClaimModel
     */
    trn_claim_id?: number;
    /**
     * 
     * @type {string}
     * @memberof ApprovalARCNClaimModel
     */
    claim_cn_no?: string;
    /**
     * 
     * @type {string}
     * @memberof ApprovalARCNClaimModel
     */
    claim_cn_date?: string;
    /**
     * 
     * @type {string}
     * @memberof ApprovalARCNClaimModel
     */
    customer_name?: string;
    /**
     * 
     * @type {ClaimPriority}
     * @memberof ApprovalARCNClaimModel
     */
    claim_priority?: ClaimPriority;
    /**
     * 
     * @type {string}
     * @memberof ApprovalARCNClaimModel
     */
    claim_priority_name?: string;
    /**
     * 
     * @type {number}
     * @memberof ApprovalARCNClaimModel
     */
    claim_price?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalARCNClaimModel
     */
    claim_vat_price?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalARCNClaimModel
     */
    claim_total_price?: number;
    /**
     * 
     * @type {CNSendStatus}
     * @memberof ApprovalARCNClaimModel
     */
    trn_status?: CNSendStatus;
    /**
     * 
     * @type {string}
     * @memberof ApprovalARCNClaimModel
     */
    trn_status_name?: string;
    /**
     * 
     * @type {Array<ClaimDetailModel>}
     * @memberof ApprovalARCNClaimModel
     */
    claim_detail?: Array<ClaimDetailModel>;
    /**
     * 
     * @type {Array<string>}
     * @memberof ApprovalARCNClaimModel
     */
    invoice_list?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof ApprovalARCNClaimModel
     */
    item_code_list?: Array<string>;
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
    row_number?: number;
    /**
     * 
     * @type {string}
     * @memberof ApprovalARCNClaimProductModel
     */
    service_date?: string;
    /**
     * 
     * @type {number}
     * @memberof ApprovalARCNClaimProductModel
     */
    warranty_left?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalARCNClaimProductModel
     */
    warranty_month?: number;
    /**
     * 
     * @type {string}
     * @memberof ApprovalARCNClaimProductModel
     */
    tag_barcode?: string;
    /**
     * 
     * @type {string}
     * @memberof ApprovalARCNClaimProductModel
     */
    job_claim_no?: string;
    /**
     * 
     * @type {string}
     * @memberof ApprovalARCNClaimProductModel
     */
    job_claim_type?: string;
    /**
     * 
     * @type {string}
     * @memberof ApprovalARCNClaimProductModel
     */
    job_claim_type_name?: string;
    /**
     * 
     * @type {string}
     * @memberof ApprovalARCNClaimProductModel
     */
    invoice_no?: string;
    /**
     * 
     * @type {string}
     * @memberof ApprovalARCNClaimProductModel
     */
    brand_description?: string;
    /**
     * 
     * @type {string}
     * @memberof ApprovalARCNClaimProductModel
     */
    item_code?: string;
    /**
     * 
     * @type {string}
     * @memberof ApprovalARCNClaimProductModel
     */
    item_description?: string;
    /**
     * 
     * @type {string}
     * @memberof ApprovalARCNClaimProductModel
     */
    serial_no?: string;
    /**
     * 
     * @type {number}
     * @memberof ApprovalARCNClaimProductModel
     */
    item_price?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalARCNClaimProductModel
     */
    item_depreciation?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalARCNClaimProductModel
     */
    item_total_price?: number;
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
    workflow_id?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalARCNClaimResponseModel
     */
    approval_total?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalARCNClaimResponseModel
     */
    approval_confirmed?: number;
    /**
     * 
     * @type {Array<BaseCountStatusModel>}
     * @memberof ApprovalARCNClaimResponseModel
     */
    count_status_list?: Array<BaseCountStatusModel>;
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
    customer_id?: number;
    /**
     * 
     * @type {string}
     * @memberof ApprovalARCNCustomerDetailModel
     */
    customer_tax_id?: string;
    /**
     * 
     * @type {string}
     * @memberof ApprovalARCNCustomerDetailModel
     */
    customer_branch?: string;
    /**
     * 
     * @type {string}
     * @memberof ApprovalARCNCustomerDetailModel
     */
    supplier_name?: string;
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
    province_id?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalARCNCustomerDetailModel
     */
    district_id?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalARCNCustomerDetailModel
     */
    sub_district_id?: number;
    /**
     * 
     * @type {string}
     * @memberof ApprovalARCNCustomerDetailModel
     */
    zip_code?: string;
    /**
     * 
     * @type {string}
     * @memberof ApprovalARCNCustomerDetailModel
     */
    customer_tel?: string;
    /**
     * 
     * @type {string}
     * @memberof ApprovalARCNCustomerDetailModel
     */
    customer_email?: string;
    /**
     * 
     * @type {string}
     * @memberof ApprovalARCNCustomerDetailModel
     */
    customer_name?: string;
    /**
     * 
     * @type {string}
     * @memberof ApprovalARCNCustomerDetailModel
     */
    claim_cn_no?: string;
    /**
     * 
     * @type {string}
     * @memberof ApprovalARCNCustomerDetailModel
     */
    claim_cn_date?: string;
    /**
     * 
     * @type {string}
     * @memberof ApprovalARCNCustomerDetailModel
     */
    claim_priority_name?: string;
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
    rbt_cnar_inhouse_id?: number;
    /**
     * 
     * @type {ARCNInHouseCustomerDetail}
     * @memberof ApprovalARCNInHouseDetail
     */
    customer_detail?: ARCNInHouseCustomerDetail;
    /**
     * 
     * @type {ARCNInHouseCampaignDetail}
     * @memberof ApprovalARCNInHouseDetail
     */
    campaign_detail?: ARCNInHouseCampaignDetail;
    /**
     * 
     * @type {Array<ARCNInHousePeriodSale>}
     * @memberof ApprovalARCNInHouseDetail
     */
    period_sale?: Array<ARCNInHousePeriodSale>;
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
    cn_total?: ARCNTotal;
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
    workflow_id?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalARCNInHouseDetail
     */
    current_step_id?: number;
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
    row_number?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalARCNInHouseModel
     */
    company_id?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalARCNInHouseModel
     */
    organization_id?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalARCNInHouseModel
     */
    owner_user_id?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalARCNInHouseModel
     */
    rbt_cnar_inhouse_id?: number;
    /**
     * 
     * @type {string}
     * @memberof ApprovalARCNInHouseModel
     */
    cn_date?: string;
    /**
     * 
     * @type {string}
     * @memberof ApprovalARCNInHouseModel
     */
    customer_name?: string;
    /**
     * 
     * @type {string}
     * @memberof ApprovalARCNInHouseModel
     */
    cn_no?: string;
    /**
     * 
     * @type {number}
     * @memberof ApprovalARCNInHouseModel
     */
    actual_sale?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalARCNInHouseModel
     */
    cn_amount?: number;
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
    amount_include_vat?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalARCNInHouseModel
     */
    workflow_id?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalARCNInHouseModel
     */
    current_step_id?: number;
    /**
     * 
     * @type {ARCNstatus}
     * @memberof ApprovalARCNInHouseModel
     */
    trn_status?: ARCNstatus;
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
    workflow_id?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalARCNInHouseResponseModel
     */
    approval_total?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalARCNInHouseResponseModel
     */
    approval_confirmed?: number;
    /**
     * 
     * @type {Array<BaseCountStatusModel>}
     * @memberof ApprovalARCNInHouseResponseModel
     */
    count_status_list?: Array<BaseCountStatusModel>;
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
    rbt_cnar_brand_id?: number;
    /**
     * 
     * @type {ARCNCustomerDetail}
     * @memberof ApprovalARCNRebateDetailModel
     */
    customer_detail?: ARCNCustomerDetail;
    /**
     * 
     * @type {ARCNRebateDetail}
     * @memberof ApprovalARCNRebateDetailModel
     */
    rebate_detail?: ARCNRebateDetail;
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
    cn_total?: ARCNTotal;
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
    workflow_id?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalARCNRebateDetailModel
     */
    current_step_id?: number;
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
    row_number?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalARCNRebateModel
     */
    company_id?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalARCNRebateModel
     */
    organization_id?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalARCNRebateModel
     */
    owner_user_id?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalARCNRebateModel
     */
    rbt_cnar_brand_id?: number;
    /**
     * 
     * @type {string}
     * @memberof ApprovalARCNRebateModel
     */
    rebate_code?: string;
    /**
     * 
     * @type {string}
     * @memberof ApprovalARCNRebateModel
     */
    cn_date?: string;
    /**
     * 
     * @type {string}
     * @memberof ApprovalARCNRebateModel
     */
    brand_name?: string;
    /**
     * 
     * @type {string}
     * @memberof ApprovalARCNRebateModel
     */
    customer_name?: string;
    /**
     * 
     * @type {string}
     * @memberof ApprovalARCNRebateModel
     */
    cn_no?: string;
    /**
     * 
     * @type {number}
     * @memberof ApprovalARCNRebateModel
     */
    rebate_amount?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalARCNRebateModel
     */
    cn_amount?: number;
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
    amount_include_vat?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalARCNRebateModel
     */
    workflow_id?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalARCNRebateModel
     */
    current_step_id?: number;
    /**
     * 
     * @type {ARCNstatus}
     * @memberof ApprovalARCNRebateModel
     */
    trn_status?: ARCNstatus;
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
    workflow_id?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalARCNRebateResponseModel
     */
    approval_total?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalARCNRebateResponseModel
     */
    approval_confirmed?: number;
    /**
     * 
     * @type {Array<BaseCountStatusModel>}
     * @memberof ApprovalARCNRebateResponseModel
     */
    count_status_list?: Array<BaseCountStatusModel>;
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
    trn_sop_payment_id?: number;
    /**
     * 
     * @type {PaymentSOPStatus}
     * @memberof ApprovalOMSOPDetailModel
     */
    payment_sop_status?: PaymentSOPStatus;
    /**
     * 
     * @type {string}
     * @memberof ApprovalOMSOPDetailModel
     */
    payment_sop_status_name?: string;
    /**
     * 
     * @type {string}
     * @memberof ApprovalOMSOPDetailModel
     */
    project_code?: string;
    /**
     * 
     * @type {number}
     * @memberof ApprovalOMSOPDetailModel
     */
    payment_sop_month?: number;
    /**
     * 
     * @type {string}
     * @memberof ApprovalOMSOPDetailModel
     */
    payment_sop_month_name?: string;
    /**
     * 
     * @type {number}
     * @memberof ApprovalOMSOPDetailModel
     */
    payment_sop_year?: number;
    /**
     * 
     * @type {string}
     * @memberof ApprovalOMSOPDetailModel
     */
    partner_name?: string;
    /**
     * 
     * @type {number}
     * @memberof ApprovalOMSOPDetailModel
     */
    payment_type?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalOMSOPDetailModel
     */
    job_type?: number;
    /**
     * 
     * @type {string}
     * @memberof ApprovalOMSOPDetailModel
     */
    job_type_name?: string;
    /**
     * 
     * @type {ApprovalARCNCustomerDetailModel}
     * @memberof ApprovalOMSOPDetailModel
     */
    partner_detail?: ApprovalARCNCustomerDetailModel;
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
    sop_payment_price?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalOMSOPDetailModel
     */
    sop_payment_vat_price?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalOMSOPDetailModel
     */
    sop_payment_total_price?: number;
    /**
     * 
     * @type {string}
     * @memberof ApprovalOMSOPDetailModel
     */
    create_date?: string;
    /**
     * 
     * @type {number}
     * @memberof ApprovalOMSOPDetailModel
     */
    workflow_id?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalOMSOPDetailModel
     */
    current_step_id?: number;
    /**
     * 
     * @type {string}
     * @memberof ApprovalOMSOPDetailModel
     */
    payment_sop_remark?: string;
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
    trn_sop_payment_invoice_id?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalOMSOPInvoiceModel
     */
    trn_sop_payment_id?: number;
    /**
     * 
     * @type {string}
     * @memberof ApprovalOMSOPInvoiceModel
     */
    invoice_no?: string;
    /**
     * 
     * @type {string}
     * @memberof ApprovalOMSOPInvoiceModel
     */
    invoice_date?: string;
    /**
     * 
     * @type {string}
     * @memberof ApprovalOMSOPInvoiceModel
     */
    po_no?: string;
    /**
     * 
     * @type {number}
     * @memberof ApprovalOMSOPInvoiceModel
     */
    wages_cost?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalOMSOPInvoiceModel
     */
    travel_expenses?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalOMSOPInvoiceModel
     */
    amount_of_money?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalOMSOPInvoiceModel
     */
    amount_of_vat?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalOMSOPInvoiceModel
     */
    amount_total?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalOMSOPInvoiceModel
     */
    file_attach_id?: number;
    /**
     * 
     * @type {string}
     * @memberof ApprovalOMSOPInvoiceModel
     */
    file_path?: string;
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
    trn_sop_payment_id?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalOMSOPModel
     */
    row_number?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalOMSOPModel
     */
    payment_sop_month?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalOMSOPModel
     */
    payment_sop_year?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalOMSOPModel
     */
    job_type?: number;
    /**
     * 
     * @type {string}
     * @memberof ApprovalOMSOPModel
     */
    create_date?: string;
    /**
     * 
     * @type {string}
     * @memberof ApprovalOMSOPModel
     */
    project_code?: string;
    /**
     * 
     * @type {string}
     * @memberof ApprovalOMSOPModel
     */
    partner_name?: string;
    /**
     * 
     * @type {string}
     * @memberof ApprovalOMSOPModel
     */
    invoice_no?: string;
    /**
     * 
     * @type {number}
     * @memberof ApprovalOMSOPModel
     */
    number_of_job?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalOMSOPModel
     */
    amount_of_money?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalOMSOPModel
     */
    amount_of_vat?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalOMSOPModel
     */
    amount_total?: number;
    /**
     * 
     * @type {PaymentSOPStatus}
     * @memberof ApprovalOMSOPModel
     */
    payment_sop_status?: PaymentSOPStatus;
    /**
     * 
     * @type {string}
     * @memberof ApprovalOMSOPModel
     */
    payment_sop_status_name?: string;
    /**
     * 
     * @type {number}
     * @memberof ApprovalOMSOPModel
     */
    workflow_id?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalOMSOPModel
     */
    current_step_id?: number;
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
    workflow_id?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalOMSOPResponseModel
     */
    approval_total?: number;
    /**
     * 
     * @type {number}
     * @memberof ApprovalOMSOPResponseModel
     */
    approval_confirmed?: number;
    /**
     * 
     * @type {Array<BaseCountStatusModel>}
     * @memberof ApprovalOMSOPResponseModel
     */
    count_status_list?: Array<BaseCountStatusModel>;
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
    file_attach_id?: number;
    /**
     * 
     * @type {string}
     * @memberof AttachmentModel
     */
    file_name?: string;
    /**
     * 
     * @type {string}
     * @memberof AttachmentModel
     */
    file_path?: string;
    /**
     * 
     * @type {boolean}
     * @memberof AttachmentModel
     */
    active_flag?: boolean;
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
    average_delay_pay?: number;
    /**
     * 
     * @type {number}
     * @memberof AverageDelayPayModel
     */
    average_delay_pay_score?: number;
    /**
     * 
     * @type {number}
     * @memberof AverageDelayPayModel
     */
    maxscore_average?: number;
    /**
     * 
     * @type {number}
     * @memberof AverageDelayPayModel
     */
    actual_score_average?: number;
    /**
     * 
     * @type {number}
     * @memberof AverageDelayPayModel
     */
    percent_average?: number;
    /**
     * 
     * @type {number}
     * @memberof AverageDelayPayModel
     */
    percent_weight_average?: number;
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
    tran_date?: string;
    /**
     * 
     * @type {string}
     * @memberof Bankremain
     */
    tran_code?: string;
    /**
     * 
     * @type {number}
     * @memberof Bankremain
     */
    tran_amount?: number;
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
    current_step_id?: number;
    /**
     * 
     * @type {number}
     * @memberof BaseCountStatusModel
     */
    approval_step?: number;
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
    row_number?: number;
    /**
     * 
     * @type {number}
     * @memberof BillingPlanGetSearchModel
     */
    billing_plan_id?: number;
    /**
     * 
     * @type {string}
     * @memberof BillingPlanGetSearchModel
     */
    customer_code?: string;
    /**
     * 
     * @type {string}
     * @memberof BillingPlanGetSearchModel
     */
    customer_name?: string;
    /**
     * 
     * @type {string}
     * @memberof BillingPlanGetSearchModel
     */
    invoice_no?: string;
    /**
     * 
     * @type {string}
     * @memberof BillingPlanGetSearchModel
     */
    invoice_date?: string;
    /**
     * 
     * @type {string}
     * @memberof BillingPlanGetSearchModel
     */
    so_no?: string;
    /**
     * 
     * @type {string}
     * @memberof BillingPlanGetSearchModel
     */
    so_date?: string;
    /**
     * 
     * @type {number}
     * @memberof BillingPlanGetSearchModel
     */
    invoice_amount?: number;
    /**
     * 
     * @type {string}
     * @memberof BillingPlanGetSearchModel
     */
    payment_due?: string;
    /**
     * 
     * @type {number}
     * @memberof BillingPlanGetSearchModel
     */
    over_due?: number;
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
    plan_amount_argo?: number;
    /**
     * 
     * @type {string}
     * @memberof BillingPlanGetSearchModel
     */
    plan_date_argo?: string;
    /**
     * 
     * @type {number}
     * @memberof BillingPlanGetSearchModel
     */
    plan_amount?: number;
    /**
     * 
     * @type {string}
     * @memberof BillingPlanGetSearchModel
     */
    plan_date?: string;
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
    billing_plan_id?: number;
    /**
     * 
     * @type {string}
     * @memberof BillingPlanModel
     */
    customer_name?: string;
    /**
     * 
     * @type {string}
     * @memberof BillingPlanModel
     */
    invoice_no?: string;
    /**
     * 
     * @type {string}
     * @memberof BillingPlanModel
     */
    invoice_date?: string;
    /**
     * 
     * @type {string}
     * @memberof BillingPlanModel
     */
    so_no?: string;
    /**
     * 
     * @type {string}
     * @memberof BillingPlanModel
     */
    so_date?: string;
    /**
     * 
     * @type {number}
     * @memberof BillingPlanModel
     */
    invoice_amount?: number;
    /**
     * 
     * @type {string}
     * @memberof BillingPlanModel
     */
    payment_due?: string;
    /**
     * 
     * @type {number}
     * @memberof BillingPlanModel
     */
    over_due?: number;
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
    plan_amount_argo?: number;
    /**
     * 
     * @type {string}
     * @memberof BillingPlanModel
     */
    plan_date_argo?: string;
    /**
     * 
     * @type {number}
     * @memberof BillingPlanModel
     */
    plan_amount?: number;
    /**
     * 
     * @type {string}
     * @memberof BillingPlanModel
     */
    plan_date?: string;
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
    billing_plan_id?: number;
    /**
     * 
     * @type {number}
     * @memberof BillingPlanPatchModel
     */
    plan_amount?: number;
    /**
     * 
     * @type {string}
     * @memberof BillingPlanPatchModel
     */
    plan_date?: string;
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
    imp_id?: number;
    /**
     * 
     * @type {string}
     * @memberof CancelImportModel
     */
    cancel_remark?: string;
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
    job_claim_no?: string;
    /**
     * 
     * @type {TypeOfPayment}
     * @memberof ClaimCNPaymentModel
     */
    type_of_payment?: TypeOfPayment;
    /**
     * 
     * @type {string}
     * @memberof ClaimCNPaymentModel
     */
    transfer_payment_no?: string;
    /**
     * 
     * @type {string}
     * @memberof ClaimCNPaymentModel
     */
    transfer_payment_date?: string;
    /**
     * 
     * @type {string}
     * @memberof ClaimCNPaymentModel
     */
    cheque_no?: string;
    /**
     * 
     * @type {string}
     * @memberof ClaimCNPaymentModel
     */
    cheque_date?: string;
    /**
     * 
     * @type {string}
     * @memberof ClaimCNPaymentModel
     */
    cn_no?: string;
    /**
     * 
     * @type {string}
     * @memberof ClaimCNPaymentModel
     */
    cn_date?: string;
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
    item_code?: string;
    /**
     * 
     * @type {string}
     * @memberof ClaimDetailModel
     */
    item_description?: string;
    /**
     * 
     * @type {string}
     * @memberof ClaimDetailModel
     */
    invoice_list?: string;
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
    config_id?: number;
    /**
     * 
     * @type {string}
     * @memberof ConfigDetailModel
     */
    config_key?: string;
    /**
     * 
     * @type {string}
     * @memberof ConfigDetailModel
     */
    config_value?: string;
    /**
     * 
     * @type {string}
     * @memberof ConfigDetailModel
     */
    config_type?: string;
    /**
     * 
     * @type {string}
     * @memberof ConfigDetailModel
     */
    config_data_type?: string;
    /**
     * 
     * @type {string}
     * @memberof ConfigDetailModel
     */
    config_description?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ConfigDetailModel
     */
    active_flag?: boolean;
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
    row_number?: number;
    /**
     * 
     * @type {number}
     * @memberof ConfigEvaluationTopicGetSearchModel
     */
    customer_evaluation_id?: number;
    /**
     * 
     * @type {string}
     * @memberof ConfigEvaluationTopicGetSearchModel
     */
    evaluation_name?: string;
    /**
     * 
     * @type {string}
     * @memberof ConfigEvaluationTopicGetSearchModel
     */
    create_date?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ConfigEvaluationTopicGetSearchModel
     */
    active_flag?: boolean;
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
    row_number?: number;
    /**
     * 
     * @type {number}
     * @memberof ConfigModel
     */
    config_id?: number;
    /**
     * 
     * @type {string}
     * @memberof ConfigModel
     */
    config_key?: string;
    /**
     * 
     * @type {string}
     * @memberof ConfigModel
     */
    config_value?: string;
    /**
     * 
     * @type {string}
     * @memberof ConfigModel
     */
    config_type?: string;
    /**
     * 
     * @type {string}
     * @memberof ConfigModel
     */
    config_data_type?: string;
    /**
     * 
     * @type {string}
     * @memberof ConfigModel
     */
    config_description?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ConfigModel
     */
    active_flag?: boolean;
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
    parter_id?: number;
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
    fs_class?: number;
    /**
     * 
     * @type {number}
     * @memberof CreditworthinessModel
     */
    fs_class_score?: number;
    /**
     * 
     * @type {string}
     * @memberof CreditworthinessModel
     */
    fs_grade?: string;
    /**
     * 
     * @type {number}
     * @memberof CreditworthinessModel
     */
    fs_grade_score?: number;
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
    director_score?: number;
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
    shareholder_score?: number;
    /**
     * 
     * @type {number}
     * @memberof CreditworthinessModel
     */
    credit_limit?: number;
    /**
     * 
     * @type {number}
     * @memberof CreditworthinessModel
     */
    credit_limit_score?: number;
    /**
     * 
     * @type {number}
     * @memberof CreditworthinessModel
     */
    credit_term?: number;
    /**
     * 
     * @type {number}
     * @memberof CreditworthinessModel
     */
    credit_term_score?: number;
    /**
     * 
     * @type {number}
     * @memberof CreditworthinessModel
     */
    maxscore_g2?: number;
    /**
     * 
     * @type {number}
     * @memberof CreditworthinessModel
     */
    actual_score_g2?: number;
    /**
     * 
     * @type {number}
     * @memberof CreditworthinessModel
     */
    percent_g2?: number;
    /**
     * 
     * @type {number}
     * @memberof CreditworthinessModel
     */
    percent_weight_g2?: number;
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
    row_number?: number;
    /**
     * 
     * @type {number}
     * @memberof DebtLetterBookInvoiceGetInterfaceModel
     */
    invoice_list_id?: number;
    /**
     * 
     * @type {string}
     * @memberof DebtLetterBookInvoiceGetInterfaceModel
     */
    invoice_no?: string;
    /**
     * 
     * @type {string}
     * @memberof DebtLetterBookInvoiceGetInterfaceModel
     */
    invoice_date?: string;
    /**
     * 
     * @type {number}
     * @memberof DebtLetterBookInvoiceGetInterfaceModel
     */
    invoice_total?: number;
    /**
     * 
     * @type {string}
     * @memberof DebtLetterBookInvoiceGetInterfaceModel
     */
    payment_due?: string;
    /**
     * 
     * @type {number}
     * @memberof DebtLetterBookInvoiceGetInterfaceModel
     */
    over_due?: number;
    /**
     * 
     * @type {boolean}
     * @memberof DebtLetterBookInvoiceGetInterfaceModel
     */
    active_flag?: boolean;
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
    book_id?: number;
    /**
     * 
     * @type {string}
     * @memberof DebtLetterBookInvoiceGetModel
     */
    book_number?: string;
    /**
     * 
     * @type {string}
     * @memberof DebtLetterBookInvoiceGetModel
     */
    customer_name?: string;
    /**
     * 
     * @type {string}
     * @memberof DebtLetterBookInvoiceGetModel
     */
    address_detail?: string;
    /**
     * 
     * @type {string}
     * @memberof DebtLetterBookInvoiceGetModel
     */
    sub_district_name?: string;
    /**
     * 
     * @type {string}
     * @memberof DebtLetterBookInvoiceGetModel
     */
    district_name?: string;
    /**
     * 
     * @type {string}
     * @memberof DebtLetterBookInvoiceGetModel
     */
    province_name?: string;
    /**
     * 
     * @type {string}
     * @memberof DebtLetterBookInvoiceGetModel
     */
    zip_code?: string;
    /**
     * 
     * @type {string}
     * @memberof DebtLetterBookInvoiceGetModel
     */
    contact_tel?: string;
    /**
     * 
     * @type {string}
     * @memberof DebtLetterBookInvoiceGetModel
     */
    contact_email?: string;
    /**
     * 
     * @type {number}
     * @memberof DebtLetterBookInvoiceGetModel
     */
    book_no?: number;
    /**
     * 
     * @type {number}
     * @memberof DebtLetterBookInvoiceGetModel
     */
    book_amount?: number;
    /**
     * 
     * @type {Array<DebtLetterBookInvoiceGetInterfaceModel>}
     * @memberof DebtLetterBookInvoiceGetModel
     */
    invoice_list?: Array<DebtLetterBookInvoiceGetInterfaceModel>;
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
    row_number?: number;
    /**
     * 
     * @type {number}
     * @memberof DebtLetterBookInvoiceGetSearchInterfaceModel
     */
    invoice_list_id?: number;
    /**
     * 
     * @type {string}
     * @memberof DebtLetterBookInvoiceGetSearchInterfaceModel
     */
    customer_name?: string;
    /**
     * 
     * @type {string}
     * @memberof DebtLetterBookInvoiceGetSearchInterfaceModel
     */
    invoice_no?: string;
    /**
     * 
     * @type {string}
     * @memberof DebtLetterBookInvoiceGetSearchInterfaceModel
     */
    invoice_date?: string;
    /**
     * 
     * @type {number}
     * @memberof DebtLetterBookInvoiceGetSearchInterfaceModel
     */
    invoice_total?: number;
    /**
     * 
     * @type {string}
     * @memberof DebtLetterBookInvoiceGetSearchInterfaceModel
     */
    payment_due?: string;
    /**
     * 
     * @type {number}
     * @memberof DebtLetterBookInvoiceGetSearchInterfaceModel
     */
    over_due?: number;
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
    row_number?: number;
    /**
     * 
     * @type {number}
     * @memberof DebtLetterBookInvoiceGetSearchModel
     */
    book_id?: number;
    /**
     * 
     * @type {string}
     * @memberof DebtLetterBookInvoiceGetSearchModel
     */
    book_number?: string;
    /**
     * 
     * @type {string}
     * @memberof DebtLetterBookInvoiceGetSearchModel
     */
    custermer_code?: string;
    /**
     * 
     * @type {string}
     * @memberof DebtLetterBookInvoiceGetSearchModel
     */
    customer_name?: string;
    /**
     * 
     * @type {number}
     * @memberof DebtLetterBookInvoiceGetSearchModel
     */
    book_amount?: number;
    /**
     * 
     * @type {string}
     * @memberof DebtLetterBookInvoiceGetSearchModel
     */
    book_date?: string;
    /**
     * 
     * @type {number}
     * @memberof DebtLetterBookInvoiceGetSearchModel
     */
    book_no?: number;
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
    invoice_list_id?: number;
    /**
     * 
     * @type {boolean}
     * @memberof DebtLetterBookInvoiceInterfaceListModel
     */
    active_flag?: boolean;
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
    book_id?: number;
    /**
     * 
     * @type {Array<DebtLetterBookInvoiceInterfaceListModel>}
     * @memberof DebtLetterBookInvoiceInterfaceModel
     */
    invoice_list?: Array<DebtLetterBookInvoiceInterfaceListModel>;
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
    book_id?: number;
    /**
     * 
     * @type {number}
     * @memberof DebtLetterFormModel
     */
    user_id?: number;
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
    row_number?: number;
    /**
     * 
     * @type {number}
     * @memberof DebtLetterInvoiceGetSearchModel
     */
    customer_id?: number;
    /**
     * 
     * @type {number}
     * @memberof DebtLetterInvoiceGetSearchModel
     */
    organization_id?: number;
    /**
     * 
     * @type {number}
     * @memberof DebtLetterInvoiceGetSearchModel
     */
    owner_user_id?: number;
    /**
     * 
     * @type {string}
     * @memberof DebtLetterInvoiceGetSearchModel
     */
    customer_name?: string;
    /**
     * 
     * @type {number}
     * @memberof DebtLetterInvoiceGetSearchModel
     */
    invoice_amount_count?: number;
    /**
     * 
     * @type {number}
     * @memberof DebtLetterInvoiceGetSearchModel
     */
    amount_of_money?: number;
    /**
     * 
     * @type {Array<DebtLetterBookInvoiceInterfaceListModel>}
     * @memberof DebtLetterInvoiceGetSearchModel
     */
    invoice_list?: Array<DebtLetterBookInvoiceInterfaceListModel>;
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
    row_number?: number;
    /**
     * 
     * @type {string}
     * @memberof DropdownEmployeeModel
     */
    employee_code?: string;
    /**
     * 
     * @type {string}
     * @memberof DropdownEmployeeModel
     */
    firstname_th?: string;
    /**
     * 
     * @type {string}
     * @memberof DropdownEmployeeModel
     */
    lastname_th?: string;
    /**
     * 
     * @type {string}
     * @memberof DropdownEmployeeModel
     */
    firstname_en?: string;
    /**
     * 
     * @type {string}
     * @memberof DropdownEmployeeModel
     */
    lastname_en?: string;
    /**
     * 
     * @type {number}
     * @memberof DropdownEmployeeModel
     */
    organization_id?: number;
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
    data_access_type?: DataAccessType;
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
    zip_code?: string;
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
    customer_evaluation_id?: number;
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
    employee_id?: number;
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
    accounts_notes_recvnet?: string;
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
    total_assets?: number;
    /**
     * 
     * @type {number}
     * @memberof FinancialStrengthModel
     */
    total_assets_score?: number;
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
    total_liabilities?: string;
    /**
     * 
     * @type {number}
     * @memberof FinancialStrengthModel
     */
    total_liabilities_score?: number;
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
    net_sales?: number;
    /**
     * 
     * @type {number}
     * @memberof FinancialStrengthModel
     */
    net_sales_score?: number;
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
    net_income?: string;
    /**
     * 
     * @type {number}
     * @memberof FinancialStrengthModel
     */
    net_income_score?: number;
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
    maxscore_g3?: number;
    /**
     * 
     * @type {number}
     * @memberof FinancialStrengthModel
     */
    actual_score_g3?: number;
    /**
     * 
     * @type {number}
     * @memberof FinancialStrengthModel
     */
    percent_g3?: number;
    /**
     * 
     * @type {number}
     * @memberof FinancialStrengthModel
     */
    percent_weight_g3?: number;
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
    net_sales_growth?: number;
    /**
     * 
     * @type {number}
     * @memberof GrowthPotentialModel
     */
    net_sales_growth_score?: number;
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
    net_profit_growth?: number;
    /**
     * 
     * @type {number}
     * @memberof GrowthPotentialModel
     */
    net_profit_growth_score?: number;
    /**
     * 
     * @type {number}
     * @memberof GrowthPotentialModel
     */
    maxscore_g5?: number;
    /**
     * 
     * @type {number}
     * @memberof GrowthPotentialModel
     */
    actual_score_g5?: number;
    /**
     * 
     * @type {number}
     * @memberof GrowthPotentialModel
     */
    percent_g5?: number;
    /**
     * 
     * @type {number}
     * @memberof GrowthPotentialModel
     */
    percent_weight_g5?: number;
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
    row_number?: number;
    /**
     * 
     * @type {number}
     * @memberof ImportStatementModel
     */
    stmt_id?: number;
    /**
     * 
     * @type {number}
     * @memberof ImportStatementModel
     */
    bank_account_id?: number;
    /**
     * 
     * @type {number}
     * @memberof ImportStatementModel
     */
    stmt_type_id?: number;
    /**
     * 
     * @type {string}
     * @memberof ImportStatementModel
     */
    bank_account_no?: string;
    /**
     * 
     * @type {string}
     * @memberof ImportStatementModel
     */
    bank_account_name?: string;
    /**
     * 
     * @type {string}
     * @memberof ImportStatementModel
     */
    bank_account_type?: string;
    /**
     * 
     * @type {string}
     * @memberof ImportStatementModel
     */
    bank_branch_code?: string;
    /**
     * 
     * @type {string}
     * @memberof ImportStatementModel
     */
    stmt_type_code?: string;
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
    stmt_datetime?: string;
    /**
     * 
     * @type {string}
     * @memberof ImportStatementModel
     */
    stmt_description?: string;
    /**
     * 
     * @type {number}
     * @memberof ImportStatementModel
     */
    stmt_money_movement?: number;
    /**
     * 
     * @type {number}
     * @memberof ImportStatementModel
     */
    stmt_money_cumulative?: number;
    /**
     * 
     * @type {string}
     * @memberof ImportStatementModel
     */
    cheque_no?: string;
    /**
     * 
     * @type {string}
     * @memberof ImportStatementModel
     */
    sequence_no?: string;
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
    terminal_id?: string;
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
    company_id?: number;
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
    root_organization_id?: number;
    /**
     * 
     * @type {boolean}
     * @memberof ImportStatementModel
     */
    active_flag?: boolean;
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
    current_ratio?: number;
    /**
     * 
     * @type {number}
     * @memberof LiquidityModel
     */
    current_ratio_score?: number;
    /**
     * 
     * @type {number}
     * @memberof LiquidityModel
     */
    quick_ratio?: number;
    /**
     * 
     * @type {number}
     * @memberof LiquidityModel
     */
    quick_ratio_score?: number;
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
    roe_score?: number;
    /**
     * 
     * @type {number}
     * @memberof LiquidityModel
     */
    debt_ratio?: number;
    /**
     * 
     * @type {number}
     * @memberof LiquidityModel
     */
    debt_ratio_score?: number;
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
    maxscore_g4?: number;
    /**
     * 
     * @type {number}
     * @memberof LiquidityModel
     */
    actual_score_g4?: number;
    /**
     * 
     * @type {number}
     * @memberof LiquidityModel
     */
    percent_g4?: number;
    /**
     * 
     * @type {number}
     * @memberof LiquidityModel
     */
    percent_weight_g4?: number;
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
    row_number?: number;
    /**
     * 
     * @type {number}
     * @memberof LogImportStatementModel
     */
    import_stmt_id?: number;
    /**
     * 
     * @type {number}
     * @memberof LogImportStatementModel
     */
    bank_account_id?: number;
    /**
     * 
     * @type {string}
     * @memberof LogImportStatementModel
     */
    bank_account_name?: string;
    /**
     * 
     * @type {string}
     * @memberof LogImportStatementModel
     */
    bank_account_no?: string;
    /**
     * 
     * @type {string}
     * @memberof LogImportStatementModel
     */
    bank_account_type?: string;
    /**
     * 
     * @type {string}
     * @memberof LogImportStatementModel
     */
    imp_file_name?: string;
    /**
     * 
     * @type {string}
     * @memberof LogImportStatementModel
     */
    imp_file_path?: string;
    /**
     * 
     * @type {string}
     * @memberof LogImportStatementModel
     */
    imp_file_type?: string;
    /**
     * 
     * @type {number}
     * @memberof LogImportStatementModel
     */
    imp_file_sizes?: number;
    /**
     * 
     * @type {number}
     * @memberof LogImportStatementModel
     */
    imp_file_rows?: number;
    /**
     * 
     * @type {number}
     * @memberof LogImportStatementModel
     */
    money_movement?: number;
    /**
     * 
     * @type {number}
     * @memberof LogImportStatementModel
     */
    money_cumulative?: number;
    /**
     * 
     * @type {DateOnly}
     * @memberof LogImportStatementModel
     */
    date_start?: DateOnly;
    /**
     * 
     * @type {DateOnly}
     * @memberof LogImportStatementModel
     */
    date_end?: DateOnly;
    /**
     * 
     * @type {string}
     * @memberof LogImportStatementModel
     */
    cancel_remark?: string;
    /**
     * 
     * @type {string}
     * @memberof LogImportStatementModel
     */
    create_date?: string;
    /**
     * 
     * @type {boolean}
     * @memberof LogImportStatementModel
     */
    active_flag?: boolean;
    /**
     * 
     * @type {string}
     * @memberof LogImportStatementModel
     */
    update_date?: string;
    /**
     * 
     * @type {string}
     * @memberof LogImportStatementModel
     */
    update_by?: string;
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
    company_id?: number;
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerAddressModel
     */
    organization_id?: number;
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerAddressModel
     */
    owner_user_id?: number;
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerAddressModel
     */
    customer_id?: number;
    /**
     * 
     * @type {CustomerAddressType}
     * @memberof MasterCustomerAddressModel
     */
    address_type?: CustomerAddressType;
    /**
     * 
     * @type {string}
     * @memberof MasterCustomerAddressModel
     */
    readonly address_type_name?: string;
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
    province_id?: number;
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerAddressModel
     */
    district_id?: number;
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerAddressModel
     */
    sub_district_id?: number;
    /**
     * 
     * @type {string}
     * @memberof MasterCustomerAddressModel
     */
    zip_code?: string;
    /**
     * 
     * @type {string}
     * @memberof MasterCustomerAddressModel
     */
    address_detail?: string;
    /**
     * 
     * @type {string}
     * @memberof MasterCustomerAddressModel
     */
    address_remark?: string;
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
    company_id?: number;
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerAttachModel
     */
    organization_id?: number;
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerAttachModel
     */
    owner_user_id?: number;
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerAttachModel
     */
    customer_id?: number;
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerAttachModel
     */
    file_name_id?: number;
    /**
     * 
     * @type {string}
     * @memberof MasterCustomerAttachModel
     */
    file_name?: string;
    /**
     * 
     * @type {string}
     * @memberof MasterCustomerAttachModel
     */
    file_path?: string;
    /**
     * 
     * @type {string}
     * @memberof MasterCustomerAttachModel
     */
    file_remark?: string;
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
    company_id?: number;
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerBankModel
     */
    organization_id?: number;
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerBankModel
     */
    owner_user_id?: number;
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerBankModel
     */
    customer_id?: number;
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerBankModel
     */
    bank_id?: number;
    /**
     * 
     * @type {string}
     * @memberof MasterCustomerBankModel
     */
    bank_name?: string;
    /**
     * 
     * @type {string}
     * @memberof MasterCustomerBankModel
     */
    bank_branch?: string;
    /**
     * 
     * @type {string}
     * @memberof MasterCustomerBankModel
     */
    bank_account_no?: string;
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerBankModel
     */
    deposit_type_id?: number;
    /**
     * 
     * @type {string}
     * @memberof MasterCustomerBankModel
     */
    deposit_type_name?: string;
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
    customer_company_id?: number;
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerCompanyModel
     */
    company_id?: number;
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerCompanyModel
     */
    organization_id?: number;
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerCompanyModel
     */
    owner_user_id?: number;
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerCompanyModel
     */
    customer_id?: number;
    /**
     * 
     * @type {CustomerCreditType}
     * @memberof MasterCustomerCompanyModel
     */
    customer_credit_type?: CustomerCreditType;
    /**
     * 
     * @type {string}
     * @memberof MasterCustomerCompanyModel
     */
    readonly customer_credit_type_name?: string;
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerCompanyModel
     */
    amount_request?: number;
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerCompanyModel
     */
    amount_approve?: number;
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerCompanyModel
     */
    amount_insurance_approve?: number;
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerCompanyModel
     */
    credit_days?: number;
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerCompanyModel
     */
    amount_old?: number;
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerCompanyModel
     */
    credit_days_old?: number;
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerCompanyModel
     */
    day_of_billing?: number;
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
    company_id?: number;
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerContactModel
     */
    organization_id?: number;
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerContactModel
     */
    owner_user_id?: number;
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerContactModel
     */
    customer_id?: number;
    /**
     * 
     * @type {string}
     * @memberof MasterCustomerContactModel
     */
    contact_name?: string;
    /**
     * 
     * @type {string}
     * @memberof MasterCustomerContactModel
     */
    contact_dept?: string;
    /**
     * 
     * @type {string}
     * @memberof MasterCustomerContactModel
     */
    contact_tel?: string;
    /**
     * 
     * @type {string}
     * @memberof MasterCustomerContactModel
     */
    contact_fax?: string;
    /**
     * 
     * @type {string}
     * @memberof MasterCustomerContactModel
     */
    contact_email?: string;
    /**
     * 
     * @type {string}
     * @memberof MasterCustomerContactModel
     */
    contact_line_id?: string;
    /**
     * 
     * @type {string}
     * @memberof MasterCustomerContactModel
     */
    contact_remark?: string;
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
    row_number?: number;
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerCreditScoreGetSearchModel
     */
    customer_credit_score_id?: number;
    /**
     * 
     * @type {string}
     * @memberof MasterCustomerCreditScoreGetSearchModel
     */
    credit_score_name?: string;
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerCreditScoreGetSearchModel
     */
    score_min?: number;
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerCreditScoreGetSearchModel
     */
    score_max?: number;
    /**
     * 
     * @type {string}
     * @memberof MasterCustomerCreditScoreGetSearchModel
     */
    color_code?: string;
    /**
     * 
     * @type {string}
     * @memberof MasterCustomerCreditScoreGetSearchModel
     */
    update_by?: string;
    /**
     * 
     * @type {string}
     * @memberof MasterCustomerCreditScoreGetSearchModel
     */
    update_date?: string;
    /**
     * 
     * @type {boolean}
     * @memberof MasterCustomerCreditScoreGetSearchModel
     */
    active_flag?: boolean;
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
    customer_credit_score_id?: number;
    /**
     * 
     * @type {string}
     * @memberof MasterCustomerCreditScoreModel
     */
    credit_score_name?: string;
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerCreditScoreModel
     */
    score_min?: number;
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerCreditScoreModel
     */
    score_max?: number;
    /**
     * 
     * @type {string}
     * @memberof MasterCustomerCreditScoreModel
     */
    color_code?: string;
    /**
     * 
     * @type {boolean}
     * @memberof MasterCustomerCreditScoreModel
     */
    active_flag?: boolean;
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
    customer_evaluation_group_detail_id?: number;
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerEvaluationGroupDetailModel
     */
    customer_evaluation_group_id?: number;
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerEvaluationGroupDetailModel
     */
    customer_evaluation_config_id?: number;
    /**
     * 
     * @type {string}
     * @memberof MasterCustomerEvaluationGroupDetailModel
     */
    evaluation_name?: string;
    /**
     * 
     * @type {EvaluationConfigType}
     * @memberof MasterCustomerEvaluationGroupDetailModel
     */
    evaluation_config_type?: EvaluationConfigType;
    /**
     * 
     * @type {string}
     * @memberof MasterCustomerEvaluationGroupDetailModel
     */
    readonly evaluation_config_type_name?: string;
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
    customer_evaluation_group_detail_value_id?: number;
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerEvaluationGroupDetailValueModel
     */
    customer_evaluation_group_detail_id?: number;
    /**
     * 
     * @type {string}
     * @memberof MasterCustomerEvaluationGroupDetailValueModel
     */
    text_value?: string;
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerEvaluationGroupDetailValueModel
     */
    range_min_value?: number;
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerEvaluationGroupDetailValueModel
     */
    range_max_value?: number;
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
    customer_evaluation_group_id?: number;
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerEvaluationGroupModel
     */
    customer_evaluation_id?: number;
    /**
     * 
     * @type {string}
     * @memberof MasterCustomerEvaluationGroupModel
     */
    evaluation_group_name?: string;
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerEvaluationGroupModel
     */
    evaluation_percent_weight?: number;
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerEvaluationGroupModel
     */
    evaluation_max_score?: number;
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
    customer_evaluation_id?: number;
    /**
     * 
     * @type {string}
     * @memberof MasterCustomerEvaluationModel
     */
    evaluation_name?: string;
    /**
     * 
     * @type {EvaluationType}
     * @memberof MasterCustomerEvaluationModel
     */
    evaluation_type?: EvaluationType;
    /**
     * 
     * @type {string}
     * @memberof MasterCustomerEvaluationModel
     */
    readonly evaluation_type_name?: string;
    /**
     * 
     * @type {boolean}
     * @memberof MasterCustomerEvaluationModel
     */
    active_flag?: boolean;
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
    row_number?: number;
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerGetSearchModel
     */
    customer_id?: number;
    /**
     * 
     * @type {string}
     * @memberof MasterCustomerGetSearchModel
     */
    customer_code?: string;
    /**
     * 
     * @type {string}
     * @memberof MasterCustomerGetSearchModel
     */
    customer_name?: string;
    /**
     * 
     * @type {CustomerCreditType}
     * @memberof MasterCustomerGetSearchModel
     */
    customer_credit_type?: CustomerCreditType;
    /**
     * 
     * @type {string}
     * @memberof MasterCustomerGetSearchModel
     */
    readonly customer_credit_type_name?: string;
    /**
     * 
     * @type {string}
     * @memberof MasterCustomerGetSearchModel
     */
    sales_owner?: string;
    /**
     * 
     * @type {boolean}
     * @memberof MasterCustomerGetSearchModel
     */
    hold_status?: boolean;
    /**
     * 
     * @type {string}
     * @memberof MasterCustomerGetSearchModel
     */
    update_date?: string;
    /**
     * 
     * @type {string}
     * @memberof MasterCustomerGetSearchModel
     */
    last_calculate_date?: string;
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
    row_number?: number;
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerGradeGetSearchModel
     */
    customer_grade_id?: number;
    /**
     * 
     * @type {string}
     * @memberof MasterCustomerGradeGetSearchModel
     */
    grade_name?: string;
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerGradeGetSearchModel
     */
    score_min?: number;
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerGradeGetSearchModel
     */
    score_max?: number;
    /**
     * 
     * @type {string}
     * @memberof MasterCustomerGradeGetSearchModel
     */
    color_code?: string;
    /**
     * 
     * @type {string}
     * @memberof MasterCustomerGradeGetSearchModel
     */
    update_by?: string;
    /**
     * 
     * @type {string}
     * @memberof MasterCustomerGradeGetSearchModel
     */
    update_date?: string;
    /**
     * 
     * @type {boolean}
     * @memberof MasterCustomerGradeGetSearchModel
     */
    active_flag?: boolean;
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
    customer_grade_id?: number;
    /**
     * 
     * @type {string}
     * @memberof MasterCustomerGradeModel
     */
    grade_name?: string;
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerGradeModel
     */
    score_min?: number;
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerGradeModel
     */
    score_max?: number;
    /**
     * 
     * @type {string}
     * @memberof MasterCustomerGradeModel
     */
    color_code?: string;
    /**
     * 
     * @type {boolean}
     * @memberof MasterCustomerGradeModel
     */
    active_flag?: boolean;
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
    customer_id?: number;
    /**
     * 
     * @type {PersonType}
     * @memberof MasterCustomerModel
     */
    customer_type?: PersonType;
    /**
     * 
     * @type {string}
     * @memberof MasterCustomerModel
     */
    readonly customer_type_name?: string;
    /**
     * 
     * @type {string}
     * @memberof MasterCustomerModel
     */
    customer_code?: string;
    /**
     * 
     * @type {string}
     * @memberof MasterCustomerModel
     */
    customer_name?: string;
    /**
     * 
     * @type {string}
     * @memberof MasterCustomerModel
     */
    customer_lastname?: string;
    /**
     * 
     * @type {string}
     * @memberof MasterCustomerModel
     */
    customer_name_en?: string;
    /**
     * 
     * @type {string}
     * @memberof MasterCustomerModel
     */
    customer_lastname_en?: string;
    /**
     * 
     * @type {string}
     * @memberof MasterCustomerModel
     */
    customer_tax_code?: string;
    /**
     * 
     * @type {string}
     * @memberof MasterCustomerModel
     */
    registered_date?: string;
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerModel
     */
    registered_capital?: number;
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerModel
     */
    registered_type_id?: number;
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerModel
     */
    business_group_id?: number;
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerModel
     */
    business_type_id?: number;
    /**
     * 
     * @type {string}
     * @memberof MasterCustomerModel
     */
    customer_grade?: string;
    /**
     * 
     * @type {string}
     * @memberof MasterCustomerModel
     */
    customer_credit_score?: string;
    /**
     * 
     * @type {string}
     * @memberof MasterCustomerModel
     */
    last_calculate_date?: string;
    /**
     * 
     * @type {string}
     * @memberof MasterCustomerModel
     */
    last_update_credit_date?: string;
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerModel
     */
    organization_id?: number;
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerModel
     */
    owner_user_id?: number;
    /**
     * 
     * @type {number}
     * @memberof MasterCustomerModel
     */
    company_id?: number;
    /**
     * 
     * @type {boolean}
     * @memberof MasterCustomerModel
     */
    hold_status?: boolean;
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
    customer_id?: number;
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
    employee_id?: number;
    /**
     * 
     * @type {string}
     * @memberof MasterEmployeeModel
     */
    company_name?: string;
    /**
     * 
     * @type {string}
     * @memberof MasterEmployeeModel
     */
    employee_code?: string;
    /**
     * 
     * @type {string}
     * @memberof MasterEmployeeModel
     */
    employee_name?: string;
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
    mobile_phone?: string;
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
    maximum_delay_pay?: number;
    /**
     * 
     * @type {number}
     * @memberof MaximumDelayPayModel
     */
    maximum_delay_pay_score?: number;
    /**
     * 
     * @type {number}
     * @memberof MaximumDelayPayModel
     */
    maxscore_maximum?: number;
    /**
     * 
     * @type {number}
     * @memberof MaximumDelayPayModel
     */
    actual_score_maximum?: number;
    /**
     * 
     * @type {number}
     * @memberof MaximumDelayPayModel
     */
    percent_maximum?: number;
    /**
     * 
     * @type {number}
     * @memberof MaximumDelayPayModel
     */
    percent_weight_maximum?: number;
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
    menu_id?: number;
    /**
     * 
     * @type {string}
     * @memberof MenuResponseModel
     */
    menu_name?: string;
    /**
     * 
     * @type {string}
     * @memberof MenuResponseModel
     */
    menu_route?: string;
    /**
     * 
     * @type {string}
     * @memberof MenuResponseModel
     */
    menu_icon?: string;
    /**
     * 
     * @type {number}
     * @memberof MenuResponseModel
     */
    menu_parent?: number;
    /**
     * 
     * @type {string}
     * @memberof MenuResponseModel
     */
    menu_code?: string;
    /**
     * 
     * @type {boolean}
     * @memberof MenuResponseModel
     */
    is_allow?: boolean;
    /**
     * 
     * @type {Array<MenuResponseModel>}
     * @memberof MenuResponseModel
     */
    sub_menu?: Array<MenuResponseModel>;
    /**
     * 
     * @type {number}
     * @memberof MenuResponseModel
     */
    total_notificaition?: number;
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
    stmt_id?: number;
    /**
     * 
     * @type {number}
     * @memberof NotFoundMappingDetailModel
     */
    gl_voucher_id?: number;
    /**
     * 
     * @type {string}
     * @memberof NotFoundMappingDetailModel
     */
    stmt_datetime?: string;
    /**
     * 
     * @type {string}
     * @memberof NotFoundMappingDetailModel
     */
    transaction_date?: string;
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
    voucher_no?: string;
    /**
     * 
     * @type {number}
     * @memberof NotFoundMappingDetailModel
     */
    stmt_money_movement?: number;
    /**
     * 
     * @type {number}
     * @memberof NotFoundMappingDetailModel
     */
    gl_amount?: number;
    /**
     * 
     * @type {number}
     * @memberof NotFoundMappingDetailModel
     */
    map_value?: number;
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
    row_number?: number;
    /**
     * 
     * @type {number}
     * @memberof NotFoundMappingModel
     */
    stmt_id?: number;
    /**
     * 
     * @type {number}
     * @memberof NotFoundMappingModel
     */
    gl_voucher_id?: number;
    /**
     * 
     * @type {number}
     * @memberof NotFoundMappingModel
     */
    account_id?: number;
    /**
     * 
     * @type {number}
     * @memberof NotFoundMappingModel
     */
    bank_account_id?: number;
    /**
     * 
     * @type {string}
     * @memberof NotFoundMappingModel
     */
    bank_account_name?: string;
    /**
     * 
     * @type {string}
     * @memberof NotFoundMappingModel
     */
    bank_account_no?: string;
    /**
     * 
     * @type {string}
     * @memberof NotFoundMappingModel
     */
    bank_account_type?: string;
    /**
     * 
     * @type {string}
     * @memberof NotFoundMappingModel
     */
    stmt_datetime?: string;
    /**
     * 
     * @type {string}
     * @memberof NotFoundMappingModel
     */
    stmt_description?: string;
    /**
     * 
     * @type {number}
     * @memberof NotFoundMappingModel
     */
    stmt_money_movement?: number;
    /**
     * 
     * @type {string}
     * @memberof NotFoundMappingModel
     */
    cheque_no?: string;
    /**
     * 
     * @type {string}
     * @memberof NotFoundMappingModel
     */
    transaction_date?: string;
    /**
     * 
     * @type {string}
     * @memberof NotFoundMappingModel
     */
    voucher_no?: string;
    /**
     * 
     * @type {string}
     * @memberof NotFoundMappingModel
     */
    voucher_remark?: string;
    /**
     * 
     * @type {number}
     * @memberof NotFoundMappingModel
     */
    gl_amount?: number;
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
    mapped_amount?: number;
    /**
     * 
     * @type {number}
     * @memberof NotFoundMappingModel
     */
    remain_amount?: number;
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
    organization_id?: number;
    /**
     * 
     * @type {string}
     * @memberof OrganizationModel
     */
    organization_name_th?: string;
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
    permission_id?: number;
    /**
     * 
     * @type {string}
     * @memberof PermissionResponseModel
     */
    permission_name?: string;
    /**
     * 
     * @type {number}
     * @memberof PermissionResponseModel
     */
    menu_id?: number;
    /**
     * 
     * @type {boolean}
     * @memberof PermissionResponseModel
     */
    is_allow?: boolean;
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
    total_score?: number;
    /**
     * 
     * @type {string}
     * @memberof ProFileCreditModel
     */
    credit_score?: string;
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
    registration_no?: number;
    /**
     * 
     * @type {string}
     * @memberof ProfileStabilityModel
     */
    company_name?: string;
    /**
     * 
     * @type {string}
     * @memberof ProfileStabilityModel
     */
    registration_no_previous?: string;
    /**
     * 
     * @type {string}
     * @memberof ProfileStabilityModel
     */
    company_status?: string;
    /**
     * 
     * @type {number}
     * @memberof ProfileStabilityModel
     */
    year_total?: number;
    /**
     * 
     * @type {number}
     * @memberof ProfileStabilityModel
     */
    year_total_score?: number;
    /**
     * 
     * @type {string}
     * @memberof ProfileStabilityModel
     */
    company_type?: string;
    /**
     * 
     * @type {string}
     * @memberof ProfileStabilityModel
     */
    registration_date?: string;
    /**
     * 
     * @type {number}
     * @memberof ProfileStabilityModel
     */
    registered_capital?: number;
    /**
     * 
     * @type {number}
     * @memberof ProfileStabilityModel
     */
    registered_capital_score?: number;
    /**
     * 
     * @type {string}
     * @memberof ProfileStabilityModel
     */
    business_size?: string;
    /**
     * 
     * @type {number}
     * @memberof ProfileStabilityModel
     */
    business_size_score?: number;
    /**
     * 
     * @type {string}
     * @memberof ProfileStabilityModel
     */
    inactive_date?: string;
    /**
     * 
     * @type {string}
     * @memberof ProfileStabilityModel
     */
    importer_exporter?: string;
    /**
     * 
     * @type {number}
     * @memberof ProfileStabilityModel
     */
    importer_exporter_score?: number;
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
    sub_district?: string;
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
    mobile_phone?: string;
    /**
     * 
     * @type {string}
     * @memberof ProfileStabilityModel
     */
    official_signatory?: string;
    /**
     * 
     * @type {string}
     * @memberof ProfileStabilityModel
     */
    tsic_code_no_1?: string;
    /**
     * 
     * @type {number}
     * @memberof ProfileStabilityModel
     */
    tsic_code_no_1_score?: number;
    /**
     * 
     * @type {string}
     * @memberof ProfileStabilityModel
     */
    tsic_code_no_2?: string;
    /**
     * 
     * @type {number}
     * @memberof ProfileStabilityModel
     */
    tsic_code_no_2_score?: number;
    /**
     * 
     * @type {string}
     * @memberof ProfileStabilityModel
     */
    tsic_code_no_3?: string;
    /**
     * 
     * @type {number}
     * @memberof ProfileStabilityModel
     */
    tsic_code_no_3_score?: number;
    /**
     * 
     * @type {string}
     * @memberof ProfileStabilityModel
     */
    naics_code_no_1?: string;
    /**
     * 
     * @type {number}
     * @memberof ProfileStabilityModel
     */
    naics_code_no_1_score?: number;
    /**
     * 
     * @type {string}
     * @memberof ProfileStabilityModel
     */
    naics_code_no_2?: string;
    /**
     * 
     * @type {number}
     * @memberof ProfileStabilityModel
     */
    naics_code_no_2_score?: number;
    /**
     * 
     * @type {string}
     * @memberof ProfileStabilityModel
     */
    naics_code_no_3?: string;
    /**
     * 
     * @type {number}
     * @memberof ProfileStabilityModel
     */
    naics_code_no_3_score?: number;
    /**
     * 
     * @type {number}
     * @memberof ProfileStabilityModel
     */
    maxscore_g1?: number;
    /**
     * 
     * @type {number}
     * @memberof ProfileStabilityModel
     */
    actual_score_g1?: number;
    /**
     * 
     * @type {number}
     * @memberof ProfileStabilityModel
     */
    percent_g1?: number;
    /**
     * 
     * @type {number}
     * @memberof ProfileStabilityModel
     */
    percent_weight_g1?: number;
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
    trn_rbt_cnap?: Array<TrnRbtCnapModel>;
    /**
     * 
     * @type {Array<TrnRbtCnapFileModel>}
     * @memberof RebateSendApcnFaB2bModel
     */
    trn_rbt_cnap_file?: Array<TrnRbtCnapFileModel>;
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
    trn_rbt_cnar_brand?: Array<TrnRbtCnarBrandModel>;
    /**
     * 
     * @type {Array<TrnRbtCnarBrandFileModel>}
     * @memberof RebateSendArcnBrnFaModel
     */
    trn_rbt_cnar_brand_file?: Array<TrnRbtCnarBrandFileModel>;
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
    trn_rbt_cnar_inhouse?: Array<TrnRbtCnarInhouseModel>;
    /**
     * 
     * @type {Array<TrnRbtCnarInhouseFileModel>}
     * @memberof RebateSendArcnInhFaModel
     */
    trn_rbt_cnar_inhouse_file?: Array<TrnRbtCnarInhouseFileModel>;
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
    refresh_token?: string;
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
    owner_user_id?: number;
    /**
     * 
     * @type {number}
     * @memberof RegisterCustomerAddressModel
     */
    regis_customer_id?: number;
    /**
     * 
     * @type {CustomerAddressType}
     * @memberof RegisterCustomerAddressModel
     */
    address_type?: CustomerAddressType;
    /**
     * 
     * @type {string}
     * @memberof RegisterCustomerAddressModel
     */
    readonly address_type_name?: string;
    /**
     * 
     * @type {string}
     * @memberof RegisterCustomerAddressModel
     */
    address_detail?: string;
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
    province_id?: number;
    /**
     * 
     * @type {string}
     * @memberof RegisterCustomerAddressModel
     */
    province_name?: string;
    /**
     * 
     * @type {number}
     * @memberof RegisterCustomerAddressModel
     */
    district_id?: number;
    /**
     * 
     * @type {string}
     * @memberof RegisterCustomerAddressModel
     */
    district_name?: string;
    /**
     * 
     * @type {number}
     * @memberof RegisterCustomerAddressModel
     */
    sub_district_id?: number;
    /**
     * 
     * @type {string}
     * @memberof RegisterCustomerAddressModel
     */
    sub_district_name?: string;
    /**
     * 
     * @type {string}
     * @memberof RegisterCustomerAddressModel
     */
    zip_code?: string;
    /**
     * 
     * @type {string}
     * @memberof RegisterCustomerAddressModel
     */
    address_remark?: string;
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
    owner_user_id?: number;
    /**
     * 
     * @type {number}
     * @memberof RegisterCustomerAttachModel
     */
    regis_customer_id?: number;
    /**
     * 
     * @type {number}
     * @memberof RegisterCustomerAttachModel
     */
    file_name_id?: number;
    /**
     * 
     * @type {string}
     * @memberof RegisterCustomerAttachModel
     */
    file_name?: string;
    /**
     * 
     * @type {string}
     * @memberof RegisterCustomerAttachModel
     */
    file_path?: string;
    /**
     * 
     * @type {string}
     * @memberof RegisterCustomerAttachModel
     */
    file_remark?: string;
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
    owner_user_id?: number;
    /**
     * 
     * @type {number}
     * @memberof RegisterCustomerBankModel
     */
    regis_customer_id?: number;
    /**
     * 
     * @type {number}
     * @memberof RegisterCustomerBankModel
     */
    bank_id?: number;
    /**
     * 
     * @type {string}
     * @memberof RegisterCustomerBankModel
     */
    bank_name?: string;
    /**
     * 
     * @type {string}
     * @memberof RegisterCustomerBankModel
     */
    bank_branch?: string;
    /**
     * 
     * @type {string}
     * @memberof RegisterCustomerBankModel
     */
    bank_account_no?: string;
    /**
     * 
     * @type {number}
     * @memberof RegisterCustomerBankModel
     */
    deposit_type_id?: number;
    /**
     * 
     * @type {string}
     * @memberof RegisterCustomerBankModel
     */
    deposit_type_name?: string;
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
    owner_user_id?: number;
    /**
     * 
     * @type {number}
     * @memberof RegisterCustomerContactModel
     */
    regis_customer_id?: number;
    /**
     * 
     * @type {string}
     * @memberof RegisterCustomerContactModel
     */
    contact_name?: string;
    /**
     * 
     * @type {string}
     * @memberof RegisterCustomerContactModel
     */
    contact_dept?: string;
    /**
     * 
     * @type {string}
     * @memberof RegisterCustomerContactModel
     */
    contact_tel?: string;
    /**
     * 
     * @type {string}
     * @memberof RegisterCustomerContactModel
     */
    contact_fax?: string;
    /**
     * 
     * @type {string}
     * @memberof RegisterCustomerContactModel
     */
    contact_email?: string;
    /**
     * 
     * @type {string}
     * @memberof RegisterCustomerContactModel
     */
    contact_line_id?: string;
    /**
     * 
     * @type {string}
     * @memberof RegisterCustomerContactModel
     */
    contact_remark?: string;
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
    row_number?: number;
    /**
     * 
     * @type {number}
     * @memberof RegisterCustomerGetSearchModel
     */
    regis_customer_id?: number;
    /**
     * 
     * @type {string}
     * @memberof RegisterCustomerGetSearchModel
     */
    customer_name?: string;
    /**
     * 
     * @type {CustomerCreditType}
     * @memberof RegisterCustomerGetSearchModel
     */
    customer_credit_type?: CustomerCreditType;
    /**
     * 
     * @type {string}
     * @memberof RegisterCustomerGetSearchModel
     */
    readonly customer_credit_type_name?: string;
    /**
     * 
     * @type {string}
     * @memberof RegisterCustomerGetSearchModel
     */
    sales_owner?: string;
    /**
     * 
     * @type {CustomerRegisterStatus}
     * @memberof RegisterCustomerGetSearchModel
     */
    regis_status?: CustomerRegisterStatus;
    /**
     * 
     * @type {string}
     * @memberof RegisterCustomerGetSearchModel
     */
    readonly regis_status_name?: string;
    /**
     * 
     * @type {string}
     * @memberof RegisterCustomerGetSearchModel
     */
    registered_date?: string;
    /**
     * 
     * @type {number}
     * @memberof RegisterCustomerGetSearchModel
     */
    workflow_id?: number;
    /**
     * 
     * @type {number}
     * @memberof RegisterCustomerGetSearchModel
     */
    current_step_id?: number;
    /**
     * 
     * @type {number}
     * @memberof RegisterCustomerGetSearchModel
     */
    organization_id?: number;
    /**
     * 
     * @type {number}
     * @memberof RegisterCustomerGetSearchModel
     */
    owner_user_id?: number;
    /**
     * 
     * @type {string}
     * @memberof RegisterCustomerGetSearchModel
     */
    requested_date?: string;
    /**
     * 
     * @type {string}
     * @memberof RegisterCustomerGetSearchModel
     */
    remark_request?: string;
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
    company_id?: number;
    /**
     * 
     * @type {string}
     * @memberof RegisterCustomerUpdateModel
     */
    company_name_th?: string;
    /**
     * 
     * @type {number}
     * @memberof RegisterCustomerUpdateModel
     */
    organization_id?: number;
    /**
     * 
     * @type {string}
     * @memberof RegisterCustomerUpdateModel
     */
    org_name_th?: string;
    /**
     * 
     * @type {number}
     * @memberof RegisterCustomerUpdateModel
     */
    owner_user_id?: number;
    /**
     * 
     * @type {string}
     * @memberof RegisterCustomerUpdateModel
     */
    owner_employee_code?: string;
    /**
     * 
     * @type {string}
     * @memberof RegisterCustomerUpdateModel
     */
    owner_user_name?: string;
    /**
     * 
     * @type {PersonType}
     * @memberof RegisterCustomerUpdateModel
     */
    customer_type?: PersonType;
    /**
     * 
     * @type {string}
     * @memberof RegisterCustomerUpdateModel
     */
    readonly customer_type_name?: string;
    /**
     * 
     * @type {CustomerCreditType}
     * @memberof RegisterCustomerUpdateModel
     */
    customer_credit_type?: CustomerCreditType;
    /**
     * 
     * @type {string}
     * @memberof RegisterCustomerUpdateModel
     */
    readonly customer_credit_type_name?: string;
    /**
     * 
     * @type {number}
     * @memberof RegisterCustomerUpdateModel
     */
    amount_request?: number;
    /**
     * 
     * @type {number}
     * @memberof RegisterCustomerUpdateModel
     */
    credit_days?: number;
    /**
     * 
     * @type {string}
     * @memberof RegisterCustomerUpdateModel
     */
    customer_name?: string;
    /**
     * 
     * @type {string}
     * @memberof RegisterCustomerUpdateModel
     */
    customer_lastname?: string;
    /**
     * 
     * @type {string}
     * @memberof RegisterCustomerUpdateModel
     */
    customer_name_en?: string;
    /**
     * 
     * @type {string}
     * @memberof RegisterCustomerUpdateModel
     */
    customer_lastname_en?: string;
    /**
     * 
     * @type {string}
     * @memberof RegisterCustomerUpdateModel
     */
    customer_tax_code?: string;
    /**
     * 
     * @type {string}
     * @memberof RegisterCustomerUpdateModel
     */
    registered_date?: string;
    /**
     * 
     * @type {number}
     * @memberof RegisterCustomerUpdateModel
     */
    registered_capital?: number;
    /**
     * 
     * @type {number}
     * @memberof RegisterCustomerUpdateModel
     */
    registered_type_id?: number;
    /**
     * 
     * @type {number}
     * @memberof RegisterCustomerUpdateModel
     */
    business_group_id?: number;
    /**
     * 
     * @type {number}
     * @memberof RegisterCustomerUpdateModel
     */
    business_type_id?: number;
    /**
     * 
     * @type {number}
     * @memberof RegisterCustomerUpdateModel
     */
    employee_id?: number;
    /**
     * 
     * @type {CustomerRegisterStatus}
     * @memberof RegisterCustomerUpdateModel
     */
    regis_status?: CustomerRegisterStatus;
    /**
     * 
     * @type {string}
     * @memberof RegisterCustomerUpdateModel
     */
    readonly regis_status_name?: string;
    /**
     * 
     * @type {string}
     * @memberof RegisterCustomerUpdateModel
     */
    regis_code?: string;
    /**
     * 
     * @type {number}
     * @memberof RegisterCustomerUpdateModel
     */
    last_step?: number;
    /**
     * 
     * @type {boolean}
     * @memberof RegisterCustomerUpdateModel
     */
    active_flag?: boolean;
    /**
     * 
     * @type {number}
     * @memberof RegisterCustomerUpdateModel
     */
    day_of_billing?: number;
    /**
     * 
     * @type {number}
     * @memberof RegisterCustomerUpdateModel
     */
    amount_approve?: number;
    /**
     * 
     * @type {number}
     * @memberof RegisterCustomerUpdateModel
     */
    amount_insurance_approve?: number;
    /**
     * 
     * @type {number}
     * @memberof RegisterCustomerUpdateModel
     */
    workflow_id?: number;
    /**
     * 
     * @type {number}
     * @memberof RegisterCustomerUpdateModel
     */
    current_step_id?: number;
    /**
     * 
     * @type {string}
     * @memberof RegisterCustomerUpdateModel
     */
    generate_token?: string;
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
    regis_customer_id?: number;
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
    req_travel_id?: number;
    /**
     * 
     * @type {string}
     * @memberof RemarkModel
     */
    payment_travel_remark?: string;
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
    bank_account_id?: number;
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
    org_name_th?: string;
    /**
     * 
     * @type {string}
     * @memberof ReportBankReconcileModel
     */
    bank_account_name?: string;
    /**
     * 
     * @type {string}
     * @memberof ReportBankReconcileModel
     */
    gl_account_name?: string;
    /**
     * 
     * @type {string}
     * @memberof ReportBankReconcileModel
     */
    end_date?: string;
    /**
     * 
     * @type {number}
     * @memberof ReportBankReconcileModel
     */
    account_remain?: number;
    /**
     * 
     * @type {Array<Bankremain>}
     * @memberof ReportBankReconcileModel
     */
    bank_remain_plus?: Array<Bankremain>;
    /**
     * 
     * @type {number}
     * @memberof ReportBankReconcileModel
     */
    sum_bank_remain_plus?: number;
    /**
     * 
     * @type {Array<Bankremain>}
     * @memberof ReportBankReconcileModel
     */
    bank_remain_minus?: Array<Bankremain>;
    /**
     * 
     * @type {number}
     * @memberof ReportBankReconcileModel
     */
    sum_bank_remain_minus?: number;
    /**
     * 
     * @type {Array<Bankremain>}
     * @memberof ReportBankReconcileModel
     */
    account_remain_plus?: Array<Bankremain>;
    /**
     * 
     * @type {number}
     * @memberof ReportBankReconcileModel
     */
    sum_account_remain_plus?: number;
    /**
     * 
     * @type {Array<Bankremain>}
     * @memberof ReportBankReconcileModel
     */
    account_remain_minus?: Array<Bankremain>;
    /**
     * 
     * @type {number}
     * @memberof ReportBankReconcileModel
     */
    sum_account_remain_minus?: number;
    /**
     * 
     * @type {number}
     * @memberof ReportBankReconcileModel
     */
    bank_remain?: number;
    /**
     * 
     * @type {number}
     * @memberof ReportBankReconcileModel
     */
    other_remain_plus?: number;
    /**
     * 
     * @type {number}
     * @memberof ReportBankReconcileModel
     */
    other_remain_minus?: number;
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
    end_date?: string;
    /**
     * 
     * @type {number}
     * @memberof RequestReportBankReconcileModel
     */
    bank_account_id?: number;
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
    unit_name?: string;
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
    so_list_id?: number;
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
    row_number?: number;
    /**
     * 
     * @type {number}
     * @memberof RequestUnholdGetSearchModel
     */
    req_unhold_id?: number;
    /**
     * 
     * @type {string}
     * @memberof RequestUnholdGetSearchModel
     */
    customer_code?: string;
    /**
     * 
     * @type {string}
     * @memberof RequestUnholdGetSearchModel
     */
    customer_name?: string;
    /**
     * 
     * @type {number}
     * @memberof RequestUnholdGetSearchModel
     */
    req_count_item?: number;
    /**
     * 
     * @type {number}
     * @memberof RequestUnholdGetSearchModel
     */
    req_amount?: number;
    /**
     * 
     * @type {string}
     * @memberof RequestUnholdGetSearchModel
     */
    create_date?: string;
    /**
     * 
     * @type {RequestUnHoldStatus}
     * @memberof RequestUnholdGetSearchModel
     */
    req_status?: RequestUnHoldStatus;
    /**
     * 
     * @type {string}
     * @memberof RequestUnholdGetSearchModel
     */
    readonly req_status_name?: string;
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
    current_step_id?: number;
    /**
     * 
     * @type {Array<RequestUnholdDetailModel>}
     * @memberof RequestUnholdGetSearchModel
     */
    req_unhold_detail?: Array<RequestUnholdDetailModel>;
    /**
     * 
     * @type {number}
     * @memberof RequestUnholdGetSearchModel
     */
    organization_id?: number;
    /**
     * 
     * @type {number}
     * @memberof RequestUnholdGetSearchModel
     */
    owner_user_id?: number;
    /**
     * 
     * @type {string}
     * @memberof RequestUnholdGetSearchModel
     */
    requested_date?: string;
    /**
     * 
     * @type {string}
     * @memberof RequestUnholdGetSearchModel
     */
    reject_remark?: string;
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
    workflow_id?: number;
    /**
     * 
     * @type {number}
     * @memberof RequestUnholdGetSearchResponseModel
     */
    approval_total?: number;
    /**
     * 
     * @type {number}
     * @memberof RequestUnholdGetSearchResponseModel
     */
    approval_confirmed?: number;
    /**
     * 
     * @type {Array<BaseCountStatusModel>}
     * @memberof RequestUnholdGetSearchResponseModel
     */
    count_status_list?: Array<BaseCountStatusModel>;
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
    req_unhold_id?: number;
    /**
     * 
     * @type {number}
     * @memberof RequestUnholdGroupModel
     */
    customer_id?: number;
    /**
     * 
     * @type {RequestUnHoldStatus}
     * @memberof RequestUnholdGroupModel
     */
    req_status?: RequestUnHoldStatus;
    /**
     * 
     * @type {string}
     * @memberof RequestUnholdGroupModel
     */
    readonly req_status_name?: string;
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
    req_unhold_detail?: Array<RequestUnholdDetailModel>;
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
    req_unhold_id?: number;
    /**
     * 
     * @type {number}
     * @memberof RequestUnholdSOGetModel
     */
    customer_id?: number;
    /**
     * 
     * @type {string}
     * @memberof RequestUnholdSOGetModel
     */
    customer_name?: string;
    /**
     * 
     * @type {CustomerAddressType}
     * @memberof RequestUnholdSOGetModel
     */
    address_type?: CustomerAddressType;
    /**
     * 
     * @type {string}
     * @memberof RequestUnholdSOGetModel
     */
    readonly address_type_name?: string;
    /**
     * 
     * @type {string}
     * @memberof RequestUnholdSOGetModel
     */
    address_detail?: string;
    /**
     * 
     * @type {string}
     * @memberof RequestUnholdSOGetModel
     */
    sub_district_name?: string;
    /**
     * 
     * @type {string}
     * @memberof RequestUnholdSOGetModel
     */
    district_name?: string;
    /**
     * 
     * @type {string}
     * @memberof RequestUnholdSOGetModel
     */
    province_name?: string;
    /**
     * 
     * @type {string}
     * @memberof RequestUnholdSOGetModel
     */
    zip_code?: string;
    /**
     * 
     * @type {string}
     * @memberof RequestUnholdSOGetModel
     */
    contact_tel?: string;
    /**
     * 
     * @type {string}
     * @memberof RequestUnholdSOGetModel
     */
    contact_email?: string;
    /**
     * 
     * @type {number}
     * @memberof RequestUnholdSOGetModel
     */
    total_amount?: number;
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
    so_list?: Array<RequestUnholdSOListModel>;
    /**
     * 
     * @type {number}
     * @memberof RequestUnholdSOGetModel
     */
    workflow_id?: number;
    /**
     * 
     * @type {number}
     * @memberof RequestUnholdSOGetModel
     */
    current_step_id?: number;
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
    so_list_id?: number;
    /**
     * 
     * @type {string}
     * @memberof RequestUnholdSOListModel
     */
    so_no?: string;
    /**
     * 
     * @type {string}
     * @memberof RequestUnholdSOListModel
     */
    ref_so?: string;
    /**
     * 
     * @type {number}
     * @memberof RequestUnholdSOListModel
     */
    so_total?: number;
    /**
     * 
     * @type {string}
     * @memberof RequestUnholdSOListModel
     */
    credit_type?: string;
    /**
     * 
     * @type {string}
     * @memberof RequestUnholdSOListModel
     */
    so_date?: string;
    /**
     * 
     * @type {number}
     * @memberof RequestUnholdSOListModel
     */
    so_status?: number;
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
    row_number?: number;
    /**
     * 
     * @type {number}
     * @memberof RequestUnholdSearchGetSOModel
     */
    so_list_id?: number;
    /**
     * 
     * @type {number}
     * @memberof RequestUnholdSearchGetSOModel
     */
    customer_id?: number;
    /**
     * 
     * @type {string}
     * @memberof RequestUnholdSearchGetSOModel
     */
    customer_code?: string;
    /**
     * 
     * @type {string}
     * @memberof RequestUnholdSearchGetSOModel
     */
    customer_name?: string;
    /**
     * 
     * @type {string}
     * @memberof RequestUnholdSearchGetSOModel
     */
    so_no?: string;
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
    credit_type?: string;
    /**
     * 
     * @type {string}
     * @memberof RequestUnholdSearchGetSOModel
     */
    so_date?: string;
    /**
     * 
     * @type {number}
     * @memberof RequestUnholdSearchGetSOModel
     */
    so_hold_status?: number;
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
    req_update_customer_id?: number;
    /**
     * 
     * @type {number}
     * @memberof RequestUpdateCreditAmount
     */
    amount_approve?: number;
    /**
     * 
     * @type {number}
     * @memberof RequestUpdateCreditAmount
     */
    credit_days_approve?: number;
    /**
     * 
     * @type {number}
     * @memberof RequestUpdateCreditAmount
     */
    amount_insurance_approve?: number;
    /**
     * 
     * @type {string}
     * @memberof RequestUpdateCreditAmount
     */
    remark_approve?: string;
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
    owner_user_id?: number;
    /**
     * 
     * @type {number}
     * @memberof RequestUpdateCustomerAddressModel
     */
    req_update_customer_id?: number;
    /**
     * 
     * @type {CustomerAddressType}
     * @memberof RequestUpdateCustomerAddressModel
     */
    address_type?: CustomerAddressType;
    /**
     * 
     * @type {string}
     * @memberof RequestUpdateCustomerAddressModel
     */
    readonly address_type_name?: string;
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
    province_id?: number;
    /**
     * 
     * @type {number}
     * @memberof RequestUpdateCustomerAddressModel
     */
    district_id?: number;
    /**
     * 
     * @type {number}
     * @memberof RequestUpdateCustomerAddressModel
     */
    sub_district_id?: number;
    /**
     * 
     * @type {string}
     * @memberof RequestUpdateCustomerAddressModel
     */
    zip_code?: string;
    /**
     * 
     * @type {string}
     * @memberof RequestUpdateCustomerAddressModel
     */
    address_detail?: string;
    /**
     * 
     * @type {string}
     * @memberof RequestUpdateCustomerAddressModel
     */
    address_remark?: string;
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
    owner_user_id?: number;
    /**
     * 
     * @type {number}
     * @memberof RequestUpdateCustomerAttachModel
     */
    req_update_customer_id?: number;
    /**
     * 
     * @type {number}
     * @memberof RequestUpdateCustomerAttachModel
     */
    file_name_id?: number;
    /**
     * 
     * @type {string}
     * @memberof RequestUpdateCustomerAttachModel
     */
    file_name?: string;
    /**
     * 
     * @type {string}
     * @memberof RequestUpdateCustomerAttachModel
     */
    file_path?: string;
    /**
     * 
     * @type {string}
     * @memberof RequestUpdateCustomerAttachModel
     */
    file_remark?: string;
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
    owner_user_id?: number;
    /**
     * 
     * @type {number}
     * @memberof RequestUpdateCustomerBankModel
     */
    req_update_customer_id?: number;
    /**
     * 
     * @type {number}
     * @memberof RequestUpdateCustomerBankModel
     */
    bank_id?: number;
    /**
     * 
     * @type {string}
     * @memberof RequestUpdateCustomerBankModel
     */
    bank_name?: string;
    /**
     * 
     * @type {string}
     * @memberof RequestUpdateCustomerBankModel
     */
    bank_branch?: string;
    /**
     * 
     * @type {string}
     * @memberof RequestUpdateCustomerBankModel
     */
    bank_account_no?: string;
    /**
     * 
     * @type {number}
     * @memberof RequestUpdateCustomerBankModel
     */
    deposit_type_id?: number;
    /**
     * 
     * @type {string}
     * @memberof RequestUpdateCustomerBankModel
     */
    deposit_type_name?: string;
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
    owner_user_id?: number;
    /**
     * 
     * @type {number}
     * @memberof RequestUpdateCustomerContact
     */
    req_update_customer_id?: number;
    /**
     * 
     * @type {string}
     * @memberof RequestUpdateCustomerContact
     */
    contact_name?: string;
    /**
     * 
     * @type {string}
     * @memberof RequestUpdateCustomerContact
     */
    contact_dept?: string;
    /**
     * 
     * @type {string}
     * @memberof RequestUpdateCustomerContact
     */
    contact_tel?: string;
    /**
     * 
     * @type {string}
     * @memberof RequestUpdateCustomerContact
     */
    contact_fax?: string;
    /**
     * 
     * @type {string}
     * @memberof RequestUpdateCustomerContact
     */
    contact_email?: string;
    /**
     * 
     * @type {string}
     * @memberof RequestUpdateCustomerContact
     */
    contact_line_id?: string;
    /**
     * 
     * @type {string}
     * @memberof RequestUpdateCustomerContact
     */
    contact_remark?: string;
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
    row_number?: number;
    /**
     * 
     * @type {number}
     * @memberof RequestUpdateCustomerGetSearchModel
     */
    req_update_customer_id?: number;
    /**
     * 
     * @type {string}
     * @memberof RequestUpdateCustomerGetSearchModel
     */
    req_code?: string;
    /**
     * 
     * @type {string}
     * @memberof RequestUpdateCustomerGetSearchModel
     */
    customer_code?: string;
    /**
     * 
     * @type {string}
     * @memberof RequestUpdateCustomerGetSearchModel
     */
    customer_name_old?: string;
    /**
     * 
     * @type {string}
     * @memberof RequestUpdateCustomerGetSearchModel
     */
    customer_name?: string;
    /**
     * 
     * @type {CustomerCreditType}
     * @memberof RequestUpdateCustomerGetSearchModel
     */
    customer_credit_type_old?: CustomerCreditType;
    /**
     * 
     * @type {string}
     * @memberof RequestUpdateCustomerGetSearchModel
     */
    readonly customer_credit_type_name_old?: string;
    /**
     * 
     * @type {CustomerCreditType}
     * @memberof RequestUpdateCustomerGetSearchModel
     */
    customer_credit_type?: CustomerCreditType;
    /**
     * 
     * @type {string}
     * @memberof RequestUpdateCustomerGetSearchModel
     */
    readonly customer_credit_type_name?: string;
    /**
     * 
     * @type {RequestUpdateCustomerTypeStatus}
     * @memberof RequestUpdateCustomerGetSearchModel
     */
    req_type?: RequestUpdateCustomerTypeStatus;
    /**
     * 
     * @type {string}
     * @memberof RequestUpdateCustomerGetSearchModel
     */
    readonly req_type_name?: string;
    /**
     * 
     * @type {RequestUpdateCustomerStatus}
     * @memberof RequestUpdateCustomerGetSearchModel
     */
    regis_status?: RequestUpdateCustomerStatus;
    /**
     * 
     * @type {string}
     * @memberof RequestUpdateCustomerGetSearchModel
     */
    readonly regis_status_name?: string;
    /**
     * 
     * @type {string}
     * @memberof RequestUpdateCustomerGetSearchModel
     */
    reject_reason?: string;
    /**
     * 
     * @type {string}
     * @memberof RequestUpdateCustomerGetSearchModel
     */
    create_date?: string;
    /**
     * 
     * @type {number}
     * @memberof RequestUpdateCustomerGetSearchModel
     */
    workflow_id?: number;
    /**
     * 
     * @type {number}
     * @memberof RequestUpdateCustomerGetSearchModel
     */
    current_step_id?: number;
    /**
     * 
     * @type {number}
     * @memberof RequestUpdateCustomerGetSearchModel
     */
    organization_id?: number;
    /**
     * 
     * @type {number}
     * @memberof RequestUpdateCustomerGetSearchModel
     */
    owner_user_id?: number;
    /**
     * 
     * @type {string}
     * @memberof RequestUpdateCustomerGetSearchModel
     */
    requested_date?: string;
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
    req_update_customer_id?: number;
    /**
     * 
     * @type {string}
     * @memberof RequestUpdateCustomerModel
     */
    company_name_th?: string;
    /**
     * 
     * @type {string}
     * @memberof RequestUpdateCustomerModel
     */
    org_name_th?: string;
    /**
     * 
     * @type {number}
     * @memberof RequestUpdateCustomerModel
     */
    owner_user_id?: number;
    /**
     * 
     * @type {string}
     * @memberof RequestUpdateCustomerModel
     */
    owner_employee_code?: string;
    /**
     * 
     * @type {string}
     * @memberof RequestUpdateCustomerModel
     */
    owner_user_name?: string;
    /**
     * 
     * @type {number}
     * @memberof RequestUpdateCustomerModel
     */
    customer_id?: number;
    /**
     * 
     * @type {PersonType}
     * @memberof RequestUpdateCustomerModel
     */
    customer_type?: PersonType;
    /**
     * 
     * @type {string}
     * @memberof RequestUpdateCustomerModel
     */
    readonly customer_type_name?: string;
    /**
     * 
     * @type {RequestUpdateCustomerTypeStatus}
     * @memberof RequestUpdateCustomerModel
     */
    req_type?: RequestUpdateCustomerTypeStatus;
    /**
     * 
     * @type {string}
     * @memberof RequestUpdateCustomerModel
     */
    readonly req_type_name?: string;
    /**
     * 
     * @type {RequestUpdateCustomerCreditTypeStatus}
     * @memberof RequestUpdateCustomerModel
     */
    req_credit_type?: RequestUpdateCustomerCreditTypeStatus;
    /**
     * 
     * @type {string}
     * @memberof RequestUpdateCustomerModel
     */
    readonly req_credit_type_name?: string;
    /**
     * 
     * @type {number}
     * @memberof RequestUpdateCustomerModel
     */
    amount_old?: number;
    /**
     * 
     * @type {number}
     * @memberof RequestUpdateCustomerModel
     */
    amount_request?: number;
    /**
     * 
     * @type {number}
     * @memberof RequestUpdateCustomerModel
     */
    amount_approve?: number;
    /**
     * 
     * @type {number}
     * @memberof RequestUpdateCustomerModel
     */
    credit_days_old?: number;
    /**
     * 
     * @type {number}
     * @memberof RequestUpdateCustomerModel
     */
    credit_day_request?: number;
    /**
     * 
     * @type {number}
     * @memberof RequestUpdateCustomerModel
     */
    credit_days_approve?: number;
    /**
     * 
     * @type {string}
     * @memberof RequestUpdateCustomerModel
     */
    credit_change_start_date?: string;
    /**
     * 
     * @type {string}
     * @memberof RequestUpdateCustomerModel
     */
    credit_change_end_date?: string;
    /**
     * 
     * @type {CustomerCreditType}
     * @memberof RequestUpdateCustomerModel
     */
    customer_credit_type_old?: CustomerCreditType;
    /**
     * 
     * @type {string}
     * @memberof RequestUpdateCustomerModel
     */
    readonly customer_credit_type_name_old?: string;
    /**
     * 
     * @type {CustomerCreditType}
     * @memberof RequestUpdateCustomerModel
     */
    customer_credit_type?: CustomerCreditType;
    /**
     * 
     * @type {string}
     * @memberof RequestUpdateCustomerModel
     */
    readonly customer_credit_type_name?: string;
    /**
     * 
     * @type {number}
     * @memberof RequestUpdateCustomerModel
     */
    credit_days?: number;
    /**
     * 
     * @type {string}
     * @memberof RequestUpdateCustomerModel
     */
    customer_name_old?: string;
    /**
     * 
     * @type {string}
     * @memberof RequestUpdateCustomerModel
     */
    customer_lastname_old?: string;
    /**
     * 
     * @type {string}
     * @memberof RequestUpdateCustomerModel
     */
    customer_name_en_old?: string;
    /**
     * 
     * @type {string}
     * @memberof RequestUpdateCustomerModel
     */
    customer_lastname_en_old?: string;
    /**
     * 
     * @type {string}
     * @memberof RequestUpdateCustomerModel
     */
    customer_name?: string;
    /**
     * 
     * @type {string}
     * @memberof RequestUpdateCustomerModel
     */
    customer_lastname?: string;
    /**
     * 
     * @type {string}
     * @memberof RequestUpdateCustomerModel
     */
    customer_name_en?: string;
    /**
     * 
     * @type {string}
     * @memberof RequestUpdateCustomerModel
     */
    customer_lastname_en?: string;
    /**
     * 
     * @type {string}
     * @memberof RequestUpdateCustomerModel
     */
    customer_tax_code?: string;
    /**
     * 
     * @type {string}
     * @memberof RequestUpdateCustomerModel
     */
    registered_date?: string;
    /**
     * 
     * @type {number}
     * @memberof RequestUpdateCustomerModel
     */
    registered_capital?: number;
    /**
     * 
     * @type {number}
     * @memberof RequestUpdateCustomerModel
     */
    registered_type_id?: number;
    /**
     * 
     * @type {number}
     * @memberof RequestUpdateCustomerModel
     */
    business_group_id?: number;
    /**
     * 
     * @type {number}
     * @memberof RequestUpdateCustomerModel
     */
    business_type_id?: number;
    /**
     * 
     * @type {RequestUpdateCustomerStatus}
     * @memberof RequestUpdateCustomerModel
     */
    regis_status?: RequestUpdateCustomerStatus;
    /**
     * 
     * @type {string}
     * @memberof RequestUpdateCustomerModel
     */
    readonly regis_status_name?: string;
    /**
     * 
     * @type {string}
     * @memberof RequestUpdateCustomerModel
     */
    req_code?: string;
    /**
     * 
     * @type {boolean}
     * @memberof RequestUpdateCustomerModel
     */
    active_flag?: boolean;
    /**
     * 
     * @type {number}
     * @memberof RequestUpdateCustomerModel
     */
    day_of_billing?: number;
    /**
     * 
     * @type {number}
     * @memberof RequestUpdateCustomerModel
     */
    amount_insurance_approve?: number;
    /**
     * 
     * @type {string}
     * @memberof RequestUpdateCustomerModel
     */
    remark_approve?: string;
    /**
     * 
     * @type {string}
     * @memberof RequestUpdateCustomerModel
     */
    remark_request?: string;
    /**
     * 
     * @type {number}
     * @memberof RequestUpdateCustomerModel
     */
    workflow_id?: number;
    /**
     * 
     * @type {number}
     * @memberof RequestUpdateCustomerModel
     */
    current_step_id?: number;
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
    role_id?: number;
    /**
     * 
     * @type {string}
     * @memberof RoleModel
     */
    role_name?: string;
    /**
     * 
     * @type {string}
     * @memberof RoleModel
     */
    role_description?: string;
    /**
     * 
     * @type {number}
     * @memberof RoleModel
     */
    rol_level?: number;
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
    role_id?: number;
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
    role_id?: number;
    /**
     * 
     * @type {string}
     * @memberof RoleRequestModel
     */
    role_name?: string;
    /**
     * 
     * @type {string}
     * @memberof RoleRequestModel
     */
    role_description?: string;
    /**
     * 
     * @type {DataAccessType}
     * @memberof RoleRequestModel
     */
    data_access_type?: DataAccessType;
    /**
     * 
     * @type {boolean}
     * @memberof RoleRequestModel
     */
    active_flag?: boolean;
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
    role_id?: number;
    /**
     * 
     * @type {string}
     * @memberof RoleResponseModel
     */
    role_name?: string;
    /**
     * 
     * @type {string}
     * @memberof RoleResponseModel
     */
    role_description?: string;
    /**
     * 
     * @type {number}
     * @memberof RoleResponseModel
     */
    role_level?: number;
    /**
     * 
     * @type {boolean}
     * @memberof RoleResponseModel
     */
    active_flag?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof RoleResponseModel
     */
    is_default_role?: boolean;
    /**
     * 
     * @type {number}
     * @memberof RoleResponseModel
     */
    created_by?: number;
    /**
     * 
     * @type {string}
     * @memberof RoleResponseModel
     */
    readonly created_date?: string;
    /**
     * 
     * @type {DataAccessType}
     * @memberof RoleResponseModel
     */
    data_access_type?: DataAccessType;
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
    row_number?: number;
    /**
     * 
     * @type {number}
     * @memberof SysCustomerEvaluationConfigGetSearchModel
     */
    customer_evaluation_config_id?: number;
    /**
     * 
     * @type {string}
     * @memberof SysCustomerEvaluationConfigGetSearchModel
     */
    evaluation_name?: string;
    /**
     * 
     * @type {EvaluationConfigType}
     * @memberof SysCustomerEvaluationConfigGetSearchModel
     */
    evaluation_config_type?: EvaluationConfigType;
    /**
     * 
     * @type {string}
     * @memberof SysCustomerEvaluationConfigGetSearchModel
     */
    readonly evaluation_config_type_name?: string;
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
    customer_evaluation_config_id?: number;
    /**
     * 
     * @type {string}
     * @memberof SysCustomerEvaluationConfigModel
     */
    evaluation_name?: string;
    /**
     * 
     * @type {EvaluationConfigType}
     * @memberof SysCustomerEvaluationConfigModel
     */
    evaluation_config_type?: EvaluationConfigType;
    /**
     * 
     * @type {string}
     * @memberof SysCustomerEvaluationConfigModel
     */
    readonly evaluation_config_type_name?: string;
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
    customer_evaluation_config_id?: Array<number>;
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
    trn_tax_id?: number;
    /**
     * 
     * @type {number}
     * @memberof TaxWithholdingModel
     */
    company_id?: number;
    /**
     * 
     * @type {number}
     * @memberof TaxWithholdingModel
     */
    organization_id?: number;
    /**
     * 
     * @type {number}
     * @memberof TaxWithholdingModel
     */
    ref_id?: number;
    /**
     * 
     * @type {RefType}
     * @memberof TaxWithholdingModel
     */
    ref_type?: RefType;
    /**
     * 
     * @type {number}
     * @memberof TaxWithholdingModel
     */
    tax_type?: number;
    /**
     * 
     * @type {number}
     * @memberof TaxWithholdingModel
     */
    income_type_id?: number;
    /**
     * 
     * @type {number}
     * @memberof TaxWithholdingModel
     */
    tax_other_type?: number;
    /**
     * 
     * @type {string}
     * @memberof TaxWithholdingModel
     */
    branch_code?: string;
    /**
     * 
     * @type {string}
     * @memberof TaxWithholdingModel
     */
    tax_date?: string;
    /**
     * 
     * @type {number}
     * @memberof TaxWithholdingModel
     */
    tax_rate?: number;
    /**
     * 
     * @type {string}
     * @memberof TaxWithholdingModel
     */
    tax_remark?: string;
    /**
     * 
     * @type {number}
     * @memberof TaxWithholdingModel
     */
    amount_before_tax?: number;
    /**
     * 
     * @type {number}
     * @memberof TaxWithholdingModel
     */
    tax_amount?: number;
    /**
     * 
     * @type {number}
     * @memberof TaxWithholdingModel
     */
    amount_after_tax?: number;
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
    access_token?: string;
    /**
     * 
     * @type {string}
     * @memberof TokenModel
     */
    refresh_token?: string;
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
    total_summary?: number;
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
    log_status_name?: string;
    /**
     * 
     * @type {string}
     * @memberof TransactionHistoryModel
     */
    updated_by?: string;
    /**
     * 
     * @type {string}
     * @memberof TransactionHistoryModel
     */
    updated_date?: string;
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
    req_travel_engineer_id?: number;
    /**
     * 
     * @type {number}
     * @memberof TravelEngineerDetailListModel
     */
    row_number?: number;
    /**
     * 
     * @type {number}
     * @memberof TravelEngineerDetailListModel
     */
    req_travel_id?: number;
    /**
     * 
     * @type {string}
     * @memberof TravelEngineerDetailListModel
     */
    engineer_code?: string;
    /**
     * 
     * @type {string}
     * @memberof TravelEngineerDetailListModel
     */
    engineer_name?: string;
    /**
     * 
     * @type {number}
     * @memberof TravelEngineerDetailListModel
     */
    number_of_invoice?: number;
    /**
     * 
     * @type {number}
     * @memberof TravelEngineerDetailListModel
     */
    number_of_job?: number;
    /**
     * 
     * @type {number}
     * @memberof TravelEngineerDetailListModel
     */
    amount_of_money?: number;
    /**
     * 
     * @type {number}
     * @memberof TravelEngineerDetailListModel
     */
    last_amount_of_money?: number;
    /**
     * 
     * @type {string}
     * @memberof TravelEngineerDetailListModel
     */
    cost_distanct?: string;
    /**
     * 
     * @type {string}
     * @memberof TravelEngineerDetailListModel
     */
    cost_distanct_sign?: string;
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
    row_number?: number;
    /**
     * 
     * @type {number}
     * @memberof TravelSummaryDataModel
     */
    req_travel_id?: number;
    /**
     * 
     * @type {number}
     * @memberof TravelSummaryDataModel
     */
    company_id?: number;
    /**
     * 
     * @type {number}
     * @memberof TravelSummaryDataModel
     */
    payment_company_id?: number;
    /**
     * 
     * @type {string}
     * @memberof TravelSummaryDataModel
     */
    payment_company?: string;
    /**
     * 
     * @type {string}
     * @memberof TravelSummaryDataModel
     */
    payment_company_code?: string;
    /**
     * 
     * @type {string}
     * @memberof TravelSummaryDataModel
     */
    payment_company_name?: string;
    /**
     * 
     * @type {number}
     * @memberof TravelSummaryDataModel
     */
    payment_travel_month?: number;
    /**
     * 
     * @type {string}
     * @memberof TravelSummaryDataModel
     */
    payment_travel_month_name?: string;
    /**
     * 
     * @type {number}
     * @memberof TravelSummaryDataModel
     */
    payment_travel_year?: number;
    /**
     * 
     * @type {string}
     * @memberof TravelSummaryDataModel
     */
    readonly payment_travel_year_str?: string;
    /**
     * 
     * @type {string}
     * @memberof TravelSummaryDataModel
     */
    create_date?: string;
    /**
     * 
     * @type {number}
     * @memberof TravelSummaryDataModel
     */
    payment_gas_price?: number;
    /**
     * 
     * @type {number}
     * @memberof TravelSummaryDataModel
     */
    number_of_engineer?: number;
    /**
     * 
     * @type {number}
     * @memberof TravelSummaryDataModel
     */
    number_of_invoice?: number;
    /**
     * 
     * @type {number}
     * @memberof TravelSummaryDataModel
     */
    number_of_job?: number;
    /**
     * 
     * @type {number}
     * @memberof TravelSummaryDataModel
     */
    amount_of_money?: number;
    /**
     * 
     * @type {string}
     * @memberof TravelSummaryDataModel
     */
    payment_travel_remark?: string;
    /**
     * 
     * @type {PaymentTravelStatus}
     * @memberof TravelSummaryDataModel
     */
    payment_travel_status?: PaymentTravelStatus;
    /**
     * 
     * @type {string}
     * @memberof TravelSummaryDataModel
     */
    payment_travel_status_name?: string;
    /**
     * 
     * @type {string}
     * @memberof TravelSummaryDataModel
     */
    file_attachment_1?: string;
    /**
     * 
     * @type {string}
     * @memberof TravelSummaryDataModel
     */
    file_attachment_2?: string;
    /**
     * 
     * @type {string}
     * @memberof TravelSummaryDataModel
     */
    file_attachment_3?: string;
    /**
     * 
     * @type {string}
     * @memberof TravelSummaryDataModel
     */
    company_payroll?: string;
    /**
     * 
     * @type {string}
     * @memberof TravelSummaryDataModel
     */
    consumtion_rate_unit?: string;
    /**
     * 
     * @type {string}
     * @memberof TravelSummaryDataModel
     */
    oil_cost_price_unit?: string;
    /**
     * 
     * @type {string}
     * @memberof TravelSummaryDataModel
     */
    oil_cost_summary_unit?: string;
    /**
     * 
     * @type {string}
     * @memberof TravelSummaryDataModel
     */
    payment_send_date?: string;
    /**
     * 
     * @type {Array<TotalSummaryDetail>}
     * @memberof TravelSummaryDataModel
     */
    total_summary_detail?: Array<TotalSummaryDetail>;
    /**
     * 
     * @type {TravelSummaryTotalDetail}
     * @memberof TravelSummaryDataModel
     */
    summary_sub_detail?: TravelSummaryTotalDetail;
    /**
     * 
     * @type {Array<TravelEngineerDetailListModel>}
     * @memberof TravelSummaryDataModel
     */
    summary_sub_detail_list?: Array<TravelEngineerDetailListModel>;
    /**
     * 
     * @type {Array<TravelSummaryHistoryModel>}
     * @memberof TravelSummaryDataModel
     */
    travel_summary_history?: Array<TravelSummaryHistoryModel>;
    /**
     * 
     * @type {number}
     * @memberof TravelSummaryDataModel
     */
    workflow_id?: number;
    /**
     * 
     * @type {number}
     * @memberof TravelSummaryDataModel
     */
    current_step_id?: number;
    /**
     * 
     * @type {number}
     * @memberof TravelSummaryDataModel
     */
    req_oil_round_id?: number;
    /**
     * 
     * @type {string}
     * @memberof TravelSummaryDataModel
     */
    reject_reason?: string;
    /**
     * 
     * @type {number}
     * @memberof TravelSummaryDataModel
     */
    breakage_rate?: number;
    /**
     * 
     * @type {number}
     * @memberof TravelSummaryDataModel
     */
    oil_cost_rate?: number;
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
    log_status_name?: string;
    /**
     * 
     * @type {string}
     * @memberof TravelSummaryHistoryModel
     */
    updated_by?: string;
    /**
     * 
     * @type {string}
     * @memberof TravelSummaryHistoryModel
     */
    updated_date?: string;
    /**
     * 
     * @type {string}
     * @memberof TravelSummaryHistoryModel
     */
    transition_label?: string;
    /**
     * 
     * @type {string}
     * @memberof TravelSummaryHistoryModel
     */
    transition_type?: string;
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
    workflow_id?: number;
    /**
     * 
     * @type {number}
     * @memberof TravelSummaryResponseModel
     */
    approval_total?: number;
    /**
     * 
     * @type {number}
     * @memberof TravelSummaryResponseModel
     */
    approval_confirmed?: number;
    /**
     * 
     * @type {Array<BaseCountStatusModel>}
     * @memberof TravelSummaryResponseModel
     */
    count_status_list?: Array<BaseCountStatusModel>;
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
    round_id?: number;
    /**
     * 
     * @type {string}
     * @memberof TravelSummaryRoundList
     */
    round_monthname?: string;
    /**
     * 
     * @type {string}
     * @memberof TravelSummaryRoundList
     */
    round_year?: string;
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
    current_effect_month?: string;
    /**
     * 
     * @type {string}
     * @memberof TravelSummaryTotalDetail
     */
    current_effect_year?: string;
    /**
     * 
     * @type {string}
     * @memberof TravelSummaryTotalDetail
     */
    last_effect_month?: string;
    /**
     * 
     * @type {string}
     * @memberof TravelSummaryTotalDetail
     */
    last_effect_year?: string;
    /**
     * 
     * @type {number}
     * @memberof TravelSummaryTotalDetail
     */
    current_total_cost?: number;
    /**
     * 
     * @type {number}
     * @memberof TravelSummaryTotalDetail
     */
    last_total_cost?: number;
    /**
     * 
     * @type {string}
     * @memberof TravelSummaryTotalDetail
     */
    percent_total_distanct?: string;
    /**
     * 
     * @type {string}
     * @memberof TravelSummaryTotalDetail
     */
    percent_total_distanct_sign?: string;
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
    file_name?: string;
    /**
     * 
     * @type {string}
     * @memberof TrnRbtCnapFileModel
     */
    file_path?: string;
    /**
     * 
     * @type {number}
     * @memberof TrnRbtCnapFileModel
     */
    header_reference_id?: number;
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
    company_id?: number;
    /**
     * 
     * @type {number}
     * @memberof TrnRbtCnapModel
     */
    organization_id?: number;
    /**
     * 
     * @type {number}
     * @memberof TrnRbtCnapModel
     */
    owner_user_id?: number;
    /**
     * 
     * @type {number}
     * @memberof TrnRbtCnapModel
     */
    header_reference_id?: number;
    /**
     * 
     * @type {string}
     * @memberof TrnRbtCnapModel
     */
    rebate_code?: string;
    /**
     * 
     * @type {string}
     * @memberof TrnRbtCnapModel
     */
    rebate_detail?: string;
    /**
     * 
     * @type {number}
     * @memberof TrnRbtCnapModel
     */
    rebate_amount?: number;
    /**
     * 
     * @type {number}
     * @memberof TrnRbtCnapModel
     */
    brand_id?: number;
    /**
     * 
     * @type {string}
     * @memberof TrnRbtCnapModel
     */
    brand_name?: string;
    /**
     * 
     * @type {number}
     * @memberof TrnRbtCnapModel
     */
    vendor_id?: number;
    /**
     * 
     * @type {number}
     * @memberof TrnRbtCnapModel
     */
    record_reference_id?: number;
    /**
     * 
     * @type {string}
     * @memberof TrnRbtCnapModel
     */
    cn_no?: string;
    /**
     * 
     * @type {string}
     * @memberof TrnRbtCnapModel
     */
    cn_date?: string;
    /**
     * 
     * @type {number}
     * @memberof TrnRbtCnapModel
     */
    cn_amount?: number;
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
    cn_amount_cur?: number;
    /**
     * 
     * @type {number}
     * @memberof TrnRbtCnapModel
     */
    vat_cur?: number;
    /**
     * 
     * @type {number}
     * @memberof TrnRbtCnapModel
     */
    currency_id?: number;
    /**
     * 
     * @type {string}
     * @memberof TrnRbtCnapModel
     */
    currency_abbr?: string;
    /**
     * 
     * @type {number}
     * @memberof TrnRbtCnapModel
     */
    exchange_rate?: number;
    /**
     * 
     * @type {string}
     * @memberof TrnRbtCnapModel
     */
    supplier_id?: string;
    /**
     * 
     * @type {string}
     * @memberof TrnRbtCnapModel
     */
    supplier_code?: string;
    /**
     * 
     * @type {string}
     * @memberof TrnRbtCnapModel
     */
    supplier_name?: string;
    /**
     * 
     * @type {string}
     * @memberof TrnRbtCnapModel
     */
    tax_payer_id?: string;
    /**
     * 
     * @type {string}
     * @memberof TrnRbtCnapModel
     */
    revenue_branch_code?: string;
    /**
     * 
     * @type {string}
     * @memberof TrnRbtCnapModel
     */
    full_address?: string;
    /**
     * 
     * @type {number}
     * @memberof TrnRbtCnapModel
     */
    province_id?: number;
    /**
     * 
     * @type {string}
     * @memberof TrnRbtCnapModel
     */
    province_name?: string;
    /**
     * 
     * @type {number}
     * @memberof TrnRbtCnapModel
     */
    district_id?: number;
    /**
     * 
     * @type {string}
     * @memberof TrnRbtCnapModel
     */
    district_name?: string;
    /**
     * 
     * @type {number}
     * @memberof TrnRbtCnapModel
     */
    sub_district_id?: number;
    /**
     * 
     * @type {string}
     * @memberof TrnRbtCnapModel
     */
    sub_district_name?: string;
    /**
     * 
     * @type {string}
     * @memberof TrnRbtCnapModel
     */
    zip_code?: string;
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
    file_name?: string;
    /**
     * 
     * @type {string}
     * @memberof TrnRbtCnarBrandFileModel
     */
    file_path?: string;
    /**
     * 
     * @type {number}
     * @memberof TrnRbtCnarBrandFileModel
     */
    back_to_back_id?: number;
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
    company_id?: number;
    /**
     * 
     * @type {number}
     * @memberof TrnRbtCnarBrandModel
     */
    organization_id?: number;
    /**
     * 
     * @type {number}
     * @memberof TrnRbtCnarBrandModel
     */
    owner_user_id?: number;
    /**
     * 
     * @type {number}
     * @memberof TrnRbtCnarBrandModel
     */
    back_to_back_id?: number;
    /**
     * 
     * @type {string}
     * @memberof TrnRbtCnarBrandModel
     */
    rebate_code?: string;
    /**
     * 
     * @type {string}
     * @memberof TrnRbtCnarBrandModel
     */
    rebate_detail?: string;
    /**
     * 
     * @type {number}
     * @memberof TrnRbtCnarBrandModel
     */
    rebate_amount?: number;
    /**
     * 
     * @type {number}
     * @memberof TrnRbtCnarBrandModel
     */
    brand_id?: number;
    /**
     * 
     * @type {string}
     * @memberof TrnRbtCnarBrandModel
     */
    brand_name?: string;
    /**
     * 
     * @type {number}
     * @memberof TrnRbtCnarBrandModel
     */
    vendor_id?: number;
    /**
     * 
     * @type {string}
     * @memberof TrnRbtCnarBrandModel
     */
    supplier_name?: string;
    /**
     * 
     * @type {number}
     * @memberof TrnRbtCnarBrandModel
     */
    back_to_back_import_id?: number;
    /**
     * 
     * @type {string}
     * @memberof TrnRbtCnarBrandModel
     */
    cn_no?: string;
    /**
     * 
     * @type {string}
     * @memberof TrnRbtCnarBrandModel
     */
    cn_date?: string;
    /**
     * 
     * @type {number}
     * @memberof TrnRbtCnarBrandModel
     */
    cn_amount?: number;
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
    cn_amount_cur?: number;
    /**
     * 
     * @type {number}
     * @memberof TrnRbtCnarBrandModel
     */
    vat_cur?: number;
    /**
     * 
     * @type {number}
     * @memberof TrnRbtCnarBrandModel
     */
    currency_id?: number;
    /**
     * 
     * @type {string}
     * @memberof TrnRbtCnarBrandModel
     */
    currency_abbr?: string;
    /**
     * 
     * @type {number}
     * @memberof TrnRbtCnarBrandModel
     */
    exchange_rate?: number;
    /**
     * 
     * @type {string}
     * @memberof TrnRbtCnarBrandModel
     */
    customer_id?: string;
    /**
     * 
     * @type {string}
     * @memberof TrnRbtCnarBrandModel
     */
    customer_code?: string;
    /**
     * 
     * @type {string}
     * @memberof TrnRbtCnarBrandModel
     */
    customer_name?: string;
    /**
     * 
     * @type {string}
     * @memberof TrnRbtCnarBrandModel
     */
    tax_payer_id?: string;
    /**
     * 
     * @type {string}
     * @memberof TrnRbtCnarBrandModel
     */
    revenue_branch_code?: string;
    /**
     * 
     * @type {string}
     * @memberof TrnRbtCnarBrandModel
     */
    full_address?: string;
    /**
     * 
     * @type {number}
     * @memberof TrnRbtCnarBrandModel
     */
    province_id?: number;
    /**
     * 
     * @type {string}
     * @memberof TrnRbtCnarBrandModel
     */
    province_name?: string;
    /**
     * 
     * @type {number}
     * @memberof TrnRbtCnarBrandModel
     */
    district_id?: number;
    /**
     * 
     * @type {string}
     * @memberof TrnRbtCnarBrandModel
     */
    district_name?: string;
    /**
     * 
     * @type {number}
     * @memberof TrnRbtCnarBrandModel
     */
    sub_district_id?: number;
    /**
     * 
     * @type {string}
     * @memberof TrnRbtCnarBrandModel
     */
    sub_district_name?: string;
    /**
     * 
     * @type {string}
     * @memberof TrnRbtCnarBrandModel
     */
    zip_code?: string;
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
    workflow_id?: number;
    /**
     * 
     * @type {number}
     * @memberof TrnRbtCnarBrandModel
     */
    current_step_id?: number;
    /**
     * 
     * @type {number}
     * @memberof TrnRbtCnarBrandModel
     */
    trn_status?: number;
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
    file_name?: string;
    /**
     * 
     * @type {string}
     * @memberof TrnRbtCnarInhouseFileModel
     */
    file_path?: string;
    /**
     * 
     * @type {number}
     * @memberof TrnRbtCnarInhouseFileModel
     */
    cn_dealer_create_id?: number;
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
    company_id?: number;
    /**
     * 
     * @type {number}
     * @memberof TrnRbtCnarInhouseModel
     */
    organization_id?: number;
    /**
     * 
     * @type {number}
     * @memberof TrnRbtCnarInhouseModel
     */
    owner_user_id?: number;
    /**
     * 
     * @type {number}
     * @memberof TrnRbtCnarInhouseModel
     */
    cn_dealer_create_id?: number;
    /**
     * 
     * @type {number}
     * @memberof TrnRbtCnarInhouseModel
     */
    rebate_campaign_id?: number;
    /**
     * 
     * @type {string}
     * @memberof TrnRbtCnarInhouseModel
     */
    campaign_name?: string;
    /**
     * 
     * @type {string}
     * @memberof TrnRbtCnarInhouseModel
     */
    campaign_type_name?: string;
    /**
     * 
     * @type {number}
     * @memberof TrnRbtCnarInhouseModel
     */
    sup_con_sale?: number;
    /**
     * 
     * @type {number}
     * @memberof TrnRbtCnarInhouseModel
     */
    sup_con_qty?: number;
    /**
     * 
     * @type {number}
     * @memberof TrnRbtCnarInhouseModel
     */
    rebate_calculate_type?: number;
    /**
     * 
     * @type {number}
     * @memberof TrnRbtCnarInhouseModel
     */
    actual_sale?: number;
    /**
     * 
     * @type {number}
     * @memberof TrnRbtCnarInhouseModel
     */
    actual_qty?: number;
    /**
     * 
     * @type {string}
     * @memberof TrnRbtCnarInhouseModel
     */
    start_date?: string;
    /**
     * 
     * @type {string}
     * @memberof TrnRbtCnarInhouseModel
     */
    end_date?: string;
    /**
     * 
     * @type {string}
     * @memberof TrnRbtCnarInhouseModel
     */
    con_period_start?: string;
    /**
     * 
     * @type {string}
     * @memberof TrnRbtCnarInhouseModel
     */
    con_period_end?: string;
    /**
     * 
     * @type {number}
     * @memberof TrnRbtCnarInhouseModel
     */
    est_rebate_amount?: number;
    /**
     * 
     * @type {number}
     * @memberof TrnRbtCnarInhouseModel
     */
    cn_dealer_create_list_id?: number;
    /**
     * 
     * @type {string}
     * @memberof TrnRbtCnarInhouseModel
     */
    cn_no?: string;
    /**
     * 
     * @type {string}
     * @memberof TrnRbtCnarInhouseModel
     */
    cn_date?: string;
    /**
     * 
     * @type {number}
     * @memberof TrnRbtCnarInhouseModel
     */
    cn_amount?: number;
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
    cn_amount_cur?: number;
    /**
     * 
     * @type {number}
     * @memberof TrnRbtCnarInhouseModel
     */
    vat_cur?: number;
    /**
     * 
     * @type {number}
     * @memberof TrnRbtCnarInhouseModel
     */
    currency_id?: number;
    /**
     * 
     * @type {string}
     * @memberof TrnRbtCnarInhouseModel
     */
    currency_abbr?: string;
    /**
     * 
     * @type {number}
     * @memberof TrnRbtCnarInhouseModel
     */
    exchange_rate?: number;
    /**
     * 
     * @type {string}
     * @memberof TrnRbtCnarInhouseModel
     */
    customer_id?: string;
    /**
     * 
     * @type {string}
     * @memberof TrnRbtCnarInhouseModel
     */
    customer_code?: string;
    /**
     * 
     * @type {string}
     * @memberof TrnRbtCnarInhouseModel
     */
    customer_name?: string;
    /**
     * 
     * @type {string}
     * @memberof TrnRbtCnarInhouseModel
     */
    tax_payer_id?: string;
    /**
     * 
     * @type {string}
     * @memberof TrnRbtCnarInhouseModel
     */
    revenue_branch_code?: string;
    /**
     * 
     * @type {string}
     * @memberof TrnRbtCnarInhouseModel
     */
    full_address?: string;
    /**
     * 
     * @type {number}
     * @memberof TrnRbtCnarInhouseModel
     */
    province_id?: number;
    /**
     * 
     * @type {string}
     * @memberof TrnRbtCnarInhouseModel
     */
    province_name?: string;
    /**
     * 
     * @type {number}
     * @memberof TrnRbtCnarInhouseModel
     */
    district_id?: number;
    /**
     * 
     * @type {string}
     * @memberof TrnRbtCnarInhouseModel
     */
    district_name?: string;
    /**
     * 
     * @type {number}
     * @memberof TrnRbtCnarInhouseModel
     */
    sub_district_id?: number;
    /**
     * 
     * @type {string}
     * @memberof TrnRbtCnarInhouseModel
     */
    sub_district_name?: string;
    /**
     * 
     * @type {string}
     * @memberof TrnRbtCnarInhouseModel
     */
    zip_code?: string;
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
    workflow_id?: number;
    /**
     * 
     * @type {number}
     * @memberof TrnRbtCnarInhouseModel
     */
    current_step_id?: number;
    /**
     * 
     * @type {number}
     * @memberof TrnRbtCnarInhouseModel
     */
    trn_status?: number;
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
    customer_credit_score_id?: number;
    /**
     * 
     * @type {boolean}
     * @memberof UpdateActiveFlagMasterCustomerCreditScoreModel
     */
    active_flag?: boolean;
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
    customer_grade_id?: number;
    /**
     * 
     * @type {boolean}
     * @memberof UpdateActiveFlagMasterCustomerGradeModel
     */
    active_flag?: boolean;
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
    regis_customer_id?: number;
    /**
     * 
     * @type {number}
     * @memberof UpdateAmountRegistterCustomerModel
     */
    amount_approve?: number;
    /**
     * 
     * @type {number}
     * @memberof UpdateAmountRegistterCustomerModel
     */
    amount_insurance_approve?: number;
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
    customer_evaluation_id?: number;
    /**
     * 
     * @type {boolean}
     * @memberof UpdateCustomerEvaluationActiveFlag
     */
    active_flag?: boolean;
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
    forgot_password_token?: string;
    /**
     * 
     * @type {string}
     * @memberof UserChangePasswordByEmailModel
     */
    new_password?: string;
    /**
     * 
     * @type {string}
     * @memberof UserChangePasswordByEmailModel
     */
    validate_new_password?: string;
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
    user_id?: number;
    /**
     * 
     * @type {string}
     * @memberof UserChangePasswordByUserIDModel
     */
    old_password?: string;
    /**
     * 
     * @type {string}
     * @memberof UserChangePasswordByUserIDModel
     */
    new_password?: string;
    /**
     * 
     * @type {string}
     * @memberof UserChangePasswordByUserIDModel
     */
    validate_new_password?: string;
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
    user_type?: UserType;
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
    business_role_id?: number;
    /**
     * 
     * @type {number}
     * @memberof UserCreateModel
     */
    org_id?: number;
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
    mobile_phone?: string;
    /**
     * 
     * @type {string}
     * @memberof UserCreateModel
     */
    employee_code?: string;
    /**
     * 
     * @type {boolean}
     * @memberof UserCreateModel
     */
    active_flag?: boolean;
    /**
     * 
     * @type {DataAccessType}
     * @memberof UserCreateModel
     */
    data_access_type?: DataAccessType;
    /**
     * 
     * @type {Set<number>}
     * @memberof UserCreateModel
     */
    access_department?: Set<number>;
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
    user_profile_path?: string;
    /**
     * 
     * @type {string}
     * @memberof UserCreateModel
     */
    user_signature_path?: string;
    /**
     * 
     * @type {string}
     * @memberof UserCreateModel
     */
    user_signature_base64?: string;
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
    user_id?: number;
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
    user_type?: UserType;
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
    employee_id?: number;
    /**
     * 
     * @type {string}
     * @memberof UserDetailModel
     */
    employee_code?: string;
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
    mobile_phone?: string;
    /**
     * 
     * @type {boolean}
     * @memberof UserDetailModel
     */
    active_flag?: boolean;
    /**
     * 
     * @type {DataAccessType}
     * @memberof UserDetailModel
     */
    data_access_type?: DataAccessType;
    /**
     * 
     * @type {string}
     * @memberof UserDetailModel
     */
    readonly data_access_type_name?: string;
    /**
     * 
     * @type {string}
     * @memberof UserDetailModel
     */
    org_name?: string;
    /**
     * 
     * @type {string}
     * @memberof UserDetailModel
     */
    company_name?: string;
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
    change_password?: boolean;
    /**
     * 
     * @type {string}
     * @memberof UserDetailModel
     */
    user_profile_path?: string;
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
    user_id?: number;
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
    firstname_th?: string;
    /**
     * 
     * @type {boolean}
     * @memberof UserModel
     */
    active_flag?: boolean;
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
    last_login_date?: string;
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
    user_id?: number;
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
    user_type?: UserType;
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
    business_role_id?: number;
    /**
     * 
     * @type {number}
     * @memberof UserUpdateRequestModel
     */
    org_id?: number;
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
    mobile_phone?: string;
    /**
     * 
     * @type {string}
     * @memberof UserUpdateRequestModel
     */
    employee_code?: string;
    /**
     * 
     * @type {boolean}
     * @memberof UserUpdateRequestModel
     */
    active_flag?: boolean;
    /**
     * 
     * @type {DataAccessType}
     * @memberof UserUpdateRequestModel
     */
    data_access_type?: DataAccessType;
    /**
     * 
     * @type {Set<number>}
     * @memberof UserUpdateRequestModel
     */
    access_department?: Set<number>;
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
    user_profile_path?: string;
    /**
     * 
     * @type {string}
     * @memberof UserUpdateRequestModel
     */
    user_signature_path?: string;
    /**
     * 
     * @type {string}
     * @memberof UserUpdateRequestModel
     */
    user_signature_base64?: string;
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
    trn_voucher_detail_id?: number;
    /**
     * 
     * @type {number}
     * @memberof VoucherDetailModel
     */
    trn_voucher_id?: number;
    /**
     * 
     * @type {number}
     * @memberof VoucherDetailModel
     */
    chart_accounts_id?: number;
    /**
     * 
     * @type {number}
     * @memberof VoucherDetailModel
     */
    currency_id?: number;
    /**
     * 
     * @type {number}
     * @memberof VoucherDetailModel
     */
    exchange_rate?: number;
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
    dep_id?: number;
    /**
     * 
     * @type {number}
     * @memberof VoucherDetailModel
     */
    project_id?: number;
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
    mapping_stmt_id?: number;
    /**
     * 
     * @type {number}
     * @memberof VoucherMappingStatementModel
     */
    stmt_id?: number;
    /**
     * 
     * @type {number}
     * @memberof VoucherMappingStatementModel
     */
    ref_system_id?: number;
    /**
     * 
     * @type {number}
     * @memberof VoucherMappingStatementModel
     */
    mapping_value?: number;
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
    trn_voucher_id?: number;
    /**
     * 
     * @type {RefType}
     * @memberof VoucherModel
     */
    ref_type?: RefType;
    /**
     * 
     * @type {number}
     * @memberof VoucherModel
     */
    voucher_type?: number;
    /**
     * 
     * @type {string}
     * @memberof VoucherModel
     */
    voucher_date?: string;
    /**
     * 
     * @type {string}
     * @memberof VoucherModel
     */
    voucher_code?: string;
    /**
     * 
     * @type {string}
     * @memberof VoucherModel
     */
    voucher_remark?: string;
    /**
     * 
     * @type {number}
     * @memberof VoucherModel
     */
    voucher_amount?: number;
    /**
     * 
     * @type {Array<VoucherDetailModel>}
     * @memberof VoucherModel
     */
    voucher_detail?: Array<VoucherDetailModel>;
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
    workflow_ref_type?: WorkFlowRefType;
    /**
     * 
     * @type {number}
     * @memberof WorkflowStepStatusModel
     */
    workflow_step_id?: number;
    /**
     * 
     * @type {string}
     * @memberof WorkflowStepStatusModel
     */
    target_status_name?: string;
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
    workflow_ref_type?: WorkFlowRefType;
    /**
     * 
     * @type {number}
     * @memberof WorkflowTransitionInfoModel
     */
    transition_id?: number;
    /**
     * 
     * @type {number}
     * @memberof WorkflowTransitionInfoModel
     */
    current_step_id?: number;
    /**
     * 
     * @type {number}
     * @memberof WorkflowTransitionInfoModel
     */
    target_step_id?: number;
    /**
     * 
     * @type {string}
     * @memberof WorkflowTransitionInfoModel
     */
    target_step_type?: string;
    /**
     * 
     * @type {string}
     * @memberof WorkflowTransitionInfoModel
     */
    target_step_name?: string;
    /**
     * 
     * @type {boolean}
     * @memberof WorkflowTransitionInfoModel
     */
    required_save?: boolean;
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
    workflow_ref_type?: WorkFlowRefType;
    /**
     * 
     * @type {number}
     * @memberof WorkflowTransitionRequest
     */
    current_step_id?: number;
    /**
     * 
     * @type {number}
     * @memberof WorkflowTransitionRequest
     */
    target_step_id?: number;
    /**
     * 
     * @type {Array<number>}
     * @memberof WorkflowTransitionRequest
     */
    entity_id_list?: Array<number>;
    /**
     * 
     * @type {number}
     * @memberof WorkflowTransitionRequest
     */
    transition_id?: number;
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
