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
  RequestUpdateCreditAmount,
  RequestUpdateCreditAmountBaseResponseModel,
  RequestUpdateCustomerGetSearchModelBaseResponsePagination,
  RequestUpdateCustomerModel,
  RequestUpdateCustomerModelBaseResponseModel,
} from '../models/index';

export interface ApiRequestUpdateCustomerCreateRequestUpdateCustomerPostRequest {
    body?: Omit<RequestUpdateCustomerModel, 'customer_type_name'|'req_type_name'|'req_credit_type_name'|'customer_credit_type_name_old'|'customer_credit_type_name'|'regis_status_name'>;
}

export interface ApiRequestUpdateCustomerDeleteRequestUpdateCustomerPatchRequest {
    reqId?: number;
}

export interface ApiRequestUpdateCustomerGetRequestUpdateCustomerByIdReqIdGetRequest {
    reqId: number;
}

export interface ApiRequestUpdateCustomerGetRequestUpdateCustomerListGetRequest {
    reqCode?: string;
    customerName?: string;
    customerCreditType?: any;
    reqType?: any;
    regisStatus?: any;
    startDate?: string;
    endDate?: string;
    isApprove?: boolean;
    pageIndex?: number;
    pageSize?: number;
}

export interface ApiRequestUpdateCustomerUpdateRequestCreditAmountPatchRequest {
    body?: RequestUpdateCreditAmount;
}

export interface ApiRequestUpdateCustomerUpdateRequestUpdateCustomerPutRequest {
    body?: Omit<RequestUpdateCustomerModel, 'customer_type_name'|'req_type_name'|'req_credit_type_name'|'customer_credit_type_name_old'|'customer_credit_type_name'|'regis_status_name'>;
}

/**
 * RequestUpdateCustomerApi - interface
 * 
 * @export
 * @interface RequestUpdateCustomerApiInterface
 */
export interface RequestUpdateCustomerApiInterface {
    /**
     * 
     * @param {RequestUpdateCustomerModel} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RequestUpdateCustomerApiInterface
     */
    apiRequestUpdateCustomerCreateRequestUpdateCustomerPostRaw(requestParameters: ApiRequestUpdateCustomerCreateRequestUpdateCustomerPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RequestUpdateCustomerModelBaseResponseModel>>;

    /**
     */
    apiRequestUpdateCustomerCreateRequestUpdateCustomerPost(requestParameters: ApiRequestUpdateCustomerCreateRequestUpdateCustomerPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RequestUpdateCustomerModelBaseResponseModel>;

    /**
     * 
     * @param {number} [reqId] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RequestUpdateCustomerApiInterface
     */
    apiRequestUpdateCustomerDeleteRequestUpdateCustomerPatchRaw(requestParameters: ApiRequestUpdateCustomerDeleteRequestUpdateCustomerPatchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BooleanBaseResponseModel>>;

    /**
     */
    apiRequestUpdateCustomerDeleteRequestUpdateCustomerPatch(requestParameters: ApiRequestUpdateCustomerDeleteRequestUpdateCustomerPatchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BooleanBaseResponseModel>;

    /**
     * 
     * @param {number} reqId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RequestUpdateCustomerApiInterface
     */
    apiRequestUpdateCustomerGetRequestUpdateCustomerByIdReqIdGetRaw(requestParameters: ApiRequestUpdateCustomerGetRequestUpdateCustomerByIdReqIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RequestUpdateCustomerModelBaseResponseModel>>;

    /**
     */
    apiRequestUpdateCustomerGetRequestUpdateCustomerByIdReqIdGet(requestParameters: ApiRequestUpdateCustomerGetRequestUpdateCustomerByIdReqIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RequestUpdateCustomerModelBaseResponseModel>;

    /**
     * 
     * @param {string} [reqCode] 
     * @param {string} [customerName] 
     * @param {any} [customerCreditType] 
     * @param {any} [reqType] 
     * @param {any} [regisStatus] 
     * @param {string} [startDate] 
     * @param {string} [endDate] 
     * @param {boolean} [isApprove] 
     * @param {number} [pageIndex] 
     * @param {number} [pageSize] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RequestUpdateCustomerApiInterface
     */
    apiRequestUpdateCustomerGetRequestUpdateCustomerListGetRaw(requestParameters: ApiRequestUpdateCustomerGetRequestUpdateCustomerListGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RequestUpdateCustomerGetSearchModelBaseResponsePagination>>;

    /**
     */
    apiRequestUpdateCustomerGetRequestUpdateCustomerListGet(requestParameters: ApiRequestUpdateCustomerGetRequestUpdateCustomerListGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RequestUpdateCustomerGetSearchModelBaseResponsePagination>;

    /**
     * 
     * @param {RequestUpdateCreditAmount} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RequestUpdateCustomerApiInterface
     */
    apiRequestUpdateCustomerUpdateRequestCreditAmountPatchRaw(requestParameters: ApiRequestUpdateCustomerUpdateRequestCreditAmountPatchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RequestUpdateCreditAmountBaseResponseModel>>;

    /**
     */
    apiRequestUpdateCustomerUpdateRequestCreditAmountPatch(requestParameters: ApiRequestUpdateCustomerUpdateRequestCreditAmountPatchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RequestUpdateCreditAmountBaseResponseModel>;

    /**
     * 
     * @param {RequestUpdateCustomerModel} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RequestUpdateCustomerApiInterface
     */
    apiRequestUpdateCustomerUpdateRequestUpdateCustomerPutRaw(requestParameters: ApiRequestUpdateCustomerUpdateRequestUpdateCustomerPutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RequestUpdateCustomerModelBaseResponseModel>>;

    /**
     */
    apiRequestUpdateCustomerUpdateRequestUpdateCustomerPut(requestParameters: ApiRequestUpdateCustomerUpdateRequestUpdateCustomerPutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RequestUpdateCustomerModelBaseResponseModel>;

}

/**
 * 
 */
export class RequestUpdateCustomerApi extends runtime.BaseAPI implements RequestUpdateCustomerApiInterface {

    /**
     */
    async apiRequestUpdateCustomerCreateRequestUpdateCustomerPostRaw(requestParameters: ApiRequestUpdateCustomerCreateRequestUpdateCustomerPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RequestUpdateCustomerModelBaseResponseModel>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // oauth2 authentication
        }

        const response = await this.request({
            path: `/api/RequestUpdateCustomer/create-request-update-customer`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['body'],
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     */
    async apiRequestUpdateCustomerCreateRequestUpdateCustomerPost(requestParameters: ApiRequestUpdateCustomerCreateRequestUpdateCustomerPostRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RequestUpdateCustomerModelBaseResponseModel> {
        const response = await this.apiRequestUpdateCustomerCreateRequestUpdateCustomerPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiRequestUpdateCustomerDeleteRequestUpdateCustomerPatchRaw(requestParameters: ApiRequestUpdateCustomerDeleteRequestUpdateCustomerPatchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BooleanBaseResponseModel>> {
        const queryParameters: any = {};

        if (requestParameters['reqId'] != null) {
            queryParameters['reqId'] = requestParameters['reqId'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // oauth2 authentication
        }

        const response = await this.request({
            path: `/api/RequestUpdateCustomer/delete-request-update-customer`,
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     */
    async apiRequestUpdateCustomerDeleteRequestUpdateCustomerPatch(requestParameters: ApiRequestUpdateCustomerDeleteRequestUpdateCustomerPatchRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BooleanBaseResponseModel> {
        const response = await this.apiRequestUpdateCustomerDeleteRequestUpdateCustomerPatchRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiRequestUpdateCustomerGetRequestUpdateCustomerByIdReqIdGetRaw(requestParameters: ApiRequestUpdateCustomerGetRequestUpdateCustomerByIdReqIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RequestUpdateCustomerModelBaseResponseModel>> {
        if (requestParameters['reqId'] == null) {
            throw new runtime.RequiredError(
                'reqId',
                'Required parameter "reqId" was null or undefined when calling apiRequestUpdateCustomerGetRequestUpdateCustomerByIdReqIdGet().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // oauth2 authentication
        }

        const response = await this.request({
            path: `/api/RequestUpdateCustomer/get-request-update-customer-by-id/{reqId}`.replace(`{${"reqId"}}`, encodeURIComponent(String(requestParameters['reqId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     */
    async apiRequestUpdateCustomerGetRequestUpdateCustomerByIdReqIdGet(requestParameters: ApiRequestUpdateCustomerGetRequestUpdateCustomerByIdReqIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RequestUpdateCustomerModelBaseResponseModel> {
        const response = await this.apiRequestUpdateCustomerGetRequestUpdateCustomerByIdReqIdGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiRequestUpdateCustomerGetRequestUpdateCustomerListGetRaw(requestParameters: ApiRequestUpdateCustomerGetRequestUpdateCustomerListGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RequestUpdateCustomerGetSearchModelBaseResponsePagination>> {
        const queryParameters: any = {};

        if (requestParameters['reqCode'] != null) {
            queryParameters['req_code'] = requestParameters['reqCode'];
        }

        if (requestParameters['customerName'] != null) {
            queryParameters['customer_name'] = requestParameters['customerName'];
        }

        if (requestParameters['customerCreditType'] != null) {
            queryParameters['customer_credit_type'] = requestParameters['customerCreditType'];
        }

        if (requestParameters['reqType'] != null) {
            queryParameters['req_type'] = requestParameters['reqType'];
        }

        if (requestParameters['regisStatus'] != null) {
            queryParameters['regis_status'] = requestParameters['regisStatus'];
        }

        if (requestParameters['startDate'] != null) {
            queryParameters['start_date'] = requestParameters['startDate'];
        }

        if (requestParameters['endDate'] != null) {
            queryParameters['end_date'] = requestParameters['endDate'];
        }

        if (requestParameters['isApprove'] != null) {
            queryParameters['is_approve'] = requestParameters['isApprove'];
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
            path: `/api/RequestUpdateCustomer/get-request-update-customer-list`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     */
    async apiRequestUpdateCustomerGetRequestUpdateCustomerListGet(requestParameters: ApiRequestUpdateCustomerGetRequestUpdateCustomerListGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RequestUpdateCustomerGetSearchModelBaseResponsePagination> {
        const response = await this.apiRequestUpdateCustomerGetRequestUpdateCustomerListGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiRequestUpdateCustomerUpdateRequestCreditAmountPatchRaw(requestParameters: ApiRequestUpdateCustomerUpdateRequestCreditAmountPatchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RequestUpdateCreditAmountBaseResponseModel>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // oauth2 authentication
        }

        const response = await this.request({
            path: `/api/RequestUpdateCustomer/update-request-credit-amount`,
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['body'],
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     */
    async apiRequestUpdateCustomerUpdateRequestCreditAmountPatch(requestParameters: ApiRequestUpdateCustomerUpdateRequestCreditAmountPatchRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RequestUpdateCreditAmountBaseResponseModel> {
        const response = await this.apiRequestUpdateCustomerUpdateRequestCreditAmountPatchRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiRequestUpdateCustomerUpdateRequestUpdateCustomerPutRaw(requestParameters: ApiRequestUpdateCustomerUpdateRequestUpdateCustomerPutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RequestUpdateCustomerModelBaseResponseModel>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // oauth2 authentication
        }

        const response = await this.request({
            path: `/api/RequestUpdateCustomer/update-request-update-customer`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['body'],
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     */
    async apiRequestUpdateCustomerUpdateRequestUpdateCustomerPut(requestParameters: ApiRequestUpdateCustomerUpdateRequestUpdateCustomerPutRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RequestUpdateCustomerModelBaseResponseModel> {
        const response = await this.apiRequestUpdateCustomerUpdateRequestUpdateCustomerPutRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
