/* tslint:disable */
/* eslint-disable */
/**
 * BaseWebAPI
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  BooleanBaseResponseModel,
  DebtLetterBookInvoiceGetModelBaseResponsePagination,
  DebtLetterBookInvoiceGetSearchInterfaceModelBaseResponsePagination,
  DebtLetterBookInvoiceGetSearchModelBaseResponsePagination,
  DebtLetterBookInvoiceInterfaceModel,
  DebtLetterBookInvoiceInterfaceModelBaseResponseModel,
  DebtLetterBookInvoiceInterfaceModelListBaseResponseModel,
  DebtLetterInvoiceGetSearchModelBaseResponsePagination,
} from '../models/index';

export interface ApiDebtLetterCreateDebtLetterBookInvoicePostRequest {
    body?: DebtLetterBookInvoiceInterfaceModel;
}

export interface ApiDebtLetterDeleteDebtLetterBookInvoicePatchRequest {
    bookId?: number;
}

export interface ApiDebtLetterGetBookInvoiceListByCustomerIdGetRequest {
    customerId?: number;
    organizationId?: number;
    invoiceNo?: string;
    pageIndex?: number;
    pageSize?: number;
}

export interface ApiDebtLetterGetDebtLetterBookInvoiceByIdGetRequest {
    pageIndex?: number;
    pageSize?: number;
    bookId?: number;
    isTrue?: number;
}

export interface ApiDebtLetterGetDebtLetterBookInvoiceListGetRequest {
    bookNumber?: string;
    customerName?: string;
    bookDateStart?: string;
    bookDateEnd?: string;
    pageIndex?: number;
    pageSize?: number;
}

export interface ApiDebtLetterGetInvoiceListGetRequest {
    customerName?: string;
    pageIndex?: number;
    pageSize?: number;
}

export interface ApiDebtLetterUpdateDebtLetterBookInvoicePutRequest {
    body?: DebtLetterBookInvoiceInterfaceModel;
}

/**
 * DebtLetterApi - interface
 * 
 * @export
 * @interface DebtLetterApiInterface
 */
export interface DebtLetterApiInterface {
    /**
     * 
     * @param {DebtLetterBookInvoiceInterfaceModel} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DebtLetterApiInterface
     */
    apiDebtLetterCreateDebtLetterBookInvoicePostRaw(requestParameters: ApiDebtLetterCreateDebtLetterBookInvoicePostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DebtLetterBookInvoiceInterfaceModelListBaseResponseModel>>;

    /**
     */
    apiDebtLetterCreateDebtLetterBookInvoicePost(requestParameters: ApiDebtLetterCreateDebtLetterBookInvoicePostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DebtLetterBookInvoiceInterfaceModelListBaseResponseModel>;

    /**
     * 
     * @param {number} [bookId] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DebtLetterApiInterface
     */
    apiDebtLetterDeleteDebtLetterBookInvoicePatchRaw(requestParameters: ApiDebtLetterDeleteDebtLetterBookInvoicePatchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BooleanBaseResponseModel>>;

    /**
     */
    apiDebtLetterDeleteDebtLetterBookInvoicePatch(requestParameters: ApiDebtLetterDeleteDebtLetterBookInvoicePatchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BooleanBaseResponseModel>;

    /**
     * 
     * @param {number} [customerId] 
     * @param {number} [organizationId] 
     * @param {string} [invoiceNo] 
     * @param {number} [pageIndex] 
     * @param {number} [pageSize] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DebtLetterApiInterface
     */
    apiDebtLetterGetBookInvoiceListByCustomerIdGetRaw(requestParameters: ApiDebtLetterGetBookInvoiceListByCustomerIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DebtLetterBookInvoiceGetSearchInterfaceModelBaseResponsePagination>>;

    /**
     */
    apiDebtLetterGetBookInvoiceListByCustomerIdGet(requestParameters: ApiDebtLetterGetBookInvoiceListByCustomerIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DebtLetterBookInvoiceGetSearchInterfaceModelBaseResponsePagination>;

    /**
     * 
     * @param {number} [pageIndex] 
     * @param {number} [pageSize] 
     * @param {number} [bookId] 
     * @param {number} [isTrue] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DebtLetterApiInterface
     */
    apiDebtLetterGetDebtLetterBookInvoiceByIdGetRaw(requestParameters: ApiDebtLetterGetDebtLetterBookInvoiceByIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DebtLetterBookInvoiceGetModelBaseResponsePagination>>;

    /**
     */
    apiDebtLetterGetDebtLetterBookInvoiceByIdGet(requestParameters: ApiDebtLetterGetDebtLetterBookInvoiceByIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DebtLetterBookInvoiceGetModelBaseResponsePagination>;

    /**
     * 
     * @param {string} [bookNumber] 
     * @param {string} [customerName] 
     * @param {string} [bookDateStart] 
     * @param {string} [bookDateEnd] 
     * @param {number} [pageIndex] 
     * @param {number} [pageSize] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DebtLetterApiInterface
     */
    apiDebtLetterGetDebtLetterBookInvoiceListGetRaw(requestParameters: ApiDebtLetterGetDebtLetterBookInvoiceListGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DebtLetterBookInvoiceGetSearchModelBaseResponsePagination>>;

    /**
     */
    apiDebtLetterGetDebtLetterBookInvoiceListGet(requestParameters: ApiDebtLetterGetDebtLetterBookInvoiceListGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DebtLetterBookInvoiceGetSearchModelBaseResponsePagination>;

    /**
     * 
     * @param {string} [customerName] 
     * @param {number} [pageIndex] 
     * @param {number} [pageSize] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DebtLetterApiInterface
     */
    apiDebtLetterGetInvoiceListGetRaw(requestParameters: ApiDebtLetterGetInvoiceListGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DebtLetterInvoiceGetSearchModelBaseResponsePagination>>;

    /**
     */
    apiDebtLetterGetInvoiceListGet(requestParameters: ApiDebtLetterGetInvoiceListGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DebtLetterInvoiceGetSearchModelBaseResponsePagination>;

    /**
     * 
     * @param {DebtLetterBookInvoiceInterfaceModel} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DebtLetterApiInterface
     */
    apiDebtLetterUpdateDebtLetterBookInvoicePutRaw(requestParameters: ApiDebtLetterUpdateDebtLetterBookInvoicePutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DebtLetterBookInvoiceInterfaceModelBaseResponseModel>>;

    /**
     */
    apiDebtLetterUpdateDebtLetterBookInvoicePut(requestParameters: ApiDebtLetterUpdateDebtLetterBookInvoicePutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DebtLetterBookInvoiceInterfaceModelBaseResponseModel>;

}

/**
 * 
 */
export class DebtLetterApi extends runtime.BaseAPI implements DebtLetterApiInterface {

    /**
     */
    async apiDebtLetterCreateDebtLetterBookInvoicePostRaw(requestParameters: ApiDebtLetterCreateDebtLetterBookInvoicePostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DebtLetterBookInvoiceInterfaceModelListBaseResponseModel>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // oauth2 authentication
        }

        const response = await this.request({
            path: `/api/DebtLetter/create-debt-letter-book-invoice`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['body'],
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     */
    async apiDebtLetterCreateDebtLetterBookInvoicePost(requestParameters: ApiDebtLetterCreateDebtLetterBookInvoicePostRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DebtLetterBookInvoiceInterfaceModelListBaseResponseModel> {
        const response = await this.apiDebtLetterCreateDebtLetterBookInvoicePostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiDebtLetterDeleteDebtLetterBookInvoicePatchRaw(requestParameters: ApiDebtLetterDeleteDebtLetterBookInvoicePatchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BooleanBaseResponseModel>> {
        const queryParameters: any = {};

        if (requestParameters['bookId'] != null) {
            queryParameters['bookId'] = requestParameters['bookId'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // oauth2 authentication
        }

        const response = await this.request({
            path: `/api/DebtLetter/delete-debt-letter-book-invoice`,
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     */
    async apiDebtLetterDeleteDebtLetterBookInvoicePatch(requestParameters: ApiDebtLetterDeleteDebtLetterBookInvoicePatchRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BooleanBaseResponseModel> {
        const response = await this.apiDebtLetterDeleteDebtLetterBookInvoicePatchRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiDebtLetterGetBookInvoiceListByCustomerIdGetRaw(requestParameters: ApiDebtLetterGetBookInvoiceListByCustomerIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DebtLetterBookInvoiceGetSearchInterfaceModelBaseResponsePagination>> {
        const queryParameters: any = {};

        if (requestParameters['customerId'] != null) {
            queryParameters['customer_id'] = requestParameters['customerId'];
        }

        if (requestParameters['organizationId'] != null) {
            queryParameters['organization_id'] = requestParameters['organizationId'];
        }

        if (requestParameters['invoiceNo'] != null) {
            queryParameters['invoice_no'] = requestParameters['invoiceNo'];
        }

        if (requestParameters['pageIndex'] != null) {
            queryParameters['pageIndex'] = requestParameters['pageIndex'];
        }

        if (requestParameters['pageSize'] != null) {
            queryParameters['pageSize'] = requestParameters['pageSize'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // oauth2 authentication
        }

        const response = await this.request({
            path: `/api/DebtLetter/get-book-invoice-list-by-customer-id`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     */
    async apiDebtLetterGetBookInvoiceListByCustomerIdGet(requestParameters: ApiDebtLetterGetBookInvoiceListByCustomerIdGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DebtLetterBookInvoiceGetSearchInterfaceModelBaseResponsePagination> {
        const response = await this.apiDebtLetterGetBookInvoiceListByCustomerIdGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiDebtLetterGetDebtLetterBookInvoiceByIdGetRaw(requestParameters: ApiDebtLetterGetDebtLetterBookInvoiceByIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DebtLetterBookInvoiceGetModelBaseResponsePagination>> {
        const queryParameters: any = {};

        if (requestParameters['pageIndex'] != null) {
            queryParameters['pageIndex'] = requestParameters['pageIndex'];
        }

        if (requestParameters['pageSize'] != null) {
            queryParameters['pageSize'] = requestParameters['pageSize'];
        }

        if (requestParameters['bookId'] != null) {
            queryParameters['bookId'] = requestParameters['bookId'];
        }

        if (requestParameters['isTrue'] != null) {
            queryParameters['is_true'] = requestParameters['isTrue'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // oauth2 authentication
        }

        const response = await this.request({
            path: `/api/DebtLetter/get-debt-letter-book-invoice-by-id`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     */
    async apiDebtLetterGetDebtLetterBookInvoiceByIdGet(requestParameters: ApiDebtLetterGetDebtLetterBookInvoiceByIdGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DebtLetterBookInvoiceGetModelBaseResponsePagination> {
        const response = await this.apiDebtLetterGetDebtLetterBookInvoiceByIdGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiDebtLetterGetDebtLetterBookInvoiceListGetRaw(requestParameters: ApiDebtLetterGetDebtLetterBookInvoiceListGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DebtLetterBookInvoiceGetSearchModelBaseResponsePagination>> {
        const queryParameters: any = {};

        if (requestParameters['bookNumber'] != null) {
            queryParameters['book_number'] = requestParameters['bookNumber'];
        }

        if (requestParameters['customerName'] != null) {
            queryParameters['customer_name'] = requestParameters['customerName'];
        }

        if (requestParameters['bookDateStart'] != null) {
            queryParameters['book_date_start'] = requestParameters['bookDateStart'];
        }

        if (requestParameters['bookDateEnd'] != null) {
            queryParameters['book_date_end'] = requestParameters['bookDateEnd'];
        }

        if (requestParameters['pageIndex'] != null) {
            queryParameters['pageIndex'] = requestParameters['pageIndex'];
        }

        if (requestParameters['pageSize'] != null) {
            queryParameters['pageSize'] = requestParameters['pageSize'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // oauth2 authentication
        }

        const response = await this.request({
            path: `/api/DebtLetter/get-debt-letter-book-invoice-list`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     */
    async apiDebtLetterGetDebtLetterBookInvoiceListGet(requestParameters: ApiDebtLetterGetDebtLetterBookInvoiceListGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DebtLetterBookInvoiceGetSearchModelBaseResponsePagination> {
        const response = await this.apiDebtLetterGetDebtLetterBookInvoiceListGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiDebtLetterGetInvoiceListGetRaw(requestParameters: ApiDebtLetterGetInvoiceListGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DebtLetterInvoiceGetSearchModelBaseResponsePagination>> {
        const queryParameters: any = {};

        if (requestParameters['customerName'] != null) {
            queryParameters['customer_name'] = requestParameters['customerName'];
        }

        if (requestParameters['pageIndex'] != null) {
            queryParameters['pageIndex'] = requestParameters['pageIndex'];
        }

        if (requestParameters['pageSize'] != null) {
            queryParameters['pageSize'] = requestParameters['pageSize'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // oauth2 authentication
        }

        const response = await this.request({
            path: `/api/DebtLetter/get-invoice-list`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     */
    async apiDebtLetterGetInvoiceListGet(requestParameters: ApiDebtLetterGetInvoiceListGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DebtLetterInvoiceGetSearchModelBaseResponsePagination> {
        const response = await this.apiDebtLetterGetInvoiceListGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiDebtLetterUpdateDebtLetterBookInvoicePutRaw(requestParameters: ApiDebtLetterUpdateDebtLetterBookInvoicePutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DebtLetterBookInvoiceInterfaceModelBaseResponseModel>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // oauth2 authentication
        }

        const response = await this.request({
            path: `/api/DebtLetter/update-debt-letter-book-invoice`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['body'],
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     */
    async apiDebtLetterUpdateDebtLetterBookInvoicePut(requestParameters: ApiDebtLetterUpdateDebtLetterBookInvoicePutRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DebtLetterBookInvoiceInterfaceModelBaseResponseModel> {
        const response = await this.apiDebtLetterUpdateDebtLetterBookInvoicePutRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
