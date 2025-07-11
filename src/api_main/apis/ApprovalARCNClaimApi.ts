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
  ApprovalARCNClaimDetailModel,
  ApprovalARCNClaimDetailModelBaseResponseModel,
  ApprovalARCNClaimResponseModel,
} from '../models/index';

export interface ApiApprovalARCNClaimDetailIdGetRequest {
    id: number;
}

export interface ApiApprovalARCNClaimListGetRequest {
    claimCnNo?: string;
    customerName?: string;
    claimCnStartDate?: string;
    claimCnEndDate?: string;
    claimStatus?: any;
    claimType?: number;
    currentStepId?: number;
    pageIndex?: number;
    pageSize?: number;
}

export interface ApiApprovalARCNClaimUpdatePostRequest {
    body?: ApprovalARCNClaimDetailModel;
}

/**
 * ApprovalARCNClaimApi - interface
 * 
 * @export
 * @interface ApprovalARCNClaimApiInterface
 */
export interface ApprovalARCNClaimApiInterface {
    /**
     * 
     * @param {number} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ApprovalARCNClaimApiInterface
     */
    apiApprovalARCNClaimDetailIdGetRaw(requestParameters: ApiApprovalARCNClaimDetailIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApprovalARCNClaimDetailModelBaseResponseModel>>;

    /**
     */
    apiApprovalARCNClaimDetailIdGet(requestParameters: ApiApprovalARCNClaimDetailIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApprovalARCNClaimDetailModelBaseResponseModel>;

    /**
     * 
     * @param {string} [claimCnNo] 
     * @param {string} [customerName] 
     * @param {string} [claimCnStartDate] 
     * @param {string} [claimCnEndDate] 
     * @param {any} [claimStatus] 
     * @param {number} [claimType] 
     * @param {number} [currentStepId] 
     * @param {number} [pageIndex] 
     * @param {number} [pageSize] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ApprovalARCNClaimApiInterface
     */
    apiApprovalARCNClaimListGetRaw(requestParameters: ApiApprovalARCNClaimListGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApprovalARCNClaimResponseModel>>;

    /**
     */
    apiApprovalARCNClaimListGet(requestParameters: ApiApprovalARCNClaimListGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApprovalARCNClaimResponseModel>;

    /**
     * 
     * @param {ApprovalARCNClaimDetailModel} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ApprovalARCNClaimApiInterface
     */
    apiApprovalARCNClaimUpdatePostRaw(requestParameters: ApiApprovalARCNClaimUpdatePostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApprovalARCNClaimDetailModelBaseResponseModel>>;

    /**
     */
    apiApprovalARCNClaimUpdatePost(requestParameters: ApiApprovalARCNClaimUpdatePostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApprovalARCNClaimDetailModelBaseResponseModel>;

}

/**
 * 
 */
export class ApprovalARCNClaimApi extends runtime.BaseAPI implements ApprovalARCNClaimApiInterface {

    /**
     */
    async apiApprovalARCNClaimDetailIdGetRaw(requestParameters: ApiApprovalARCNClaimDetailIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApprovalARCNClaimDetailModelBaseResponseModel>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling apiApprovalARCNClaimDetailIdGet().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // oauth2 authentication
        }

        const response = await this.request({
            path: `/api/ApprovalARCNClaim/detail/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     */
    async apiApprovalARCNClaimDetailIdGet(requestParameters: ApiApprovalARCNClaimDetailIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApprovalARCNClaimDetailModelBaseResponseModel> {
        const response = await this.apiApprovalARCNClaimDetailIdGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiApprovalARCNClaimListGetRaw(requestParameters: ApiApprovalARCNClaimListGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApprovalARCNClaimResponseModel>> {
        const queryParameters: any = {};

        if (requestParameters['claimCnNo'] != null) {
            queryParameters['claim_cn_no'] = requestParameters['claimCnNo'];
        }

        if (requestParameters['customerName'] != null) {
            queryParameters['customer_name'] = requestParameters['customerName'];
        }

        if (requestParameters['claimCnStartDate'] != null) {
            queryParameters['claim_cn_start_date'] = requestParameters['claimCnStartDate'];
        }

        if (requestParameters['claimCnEndDate'] != null) {
            queryParameters['claim_cn_end_date'] = requestParameters['claimCnEndDate'];
        }

        if (requestParameters['claimStatus'] != null) {
            queryParameters['claim_status'] = requestParameters['claimStatus'];
        }

        if (requestParameters['claimType'] != null) {
            queryParameters['claimType'] = requestParameters['claimType'];
        }

        if (requestParameters['currentStepId'] != null) {
            queryParameters['current_step_id'] = requestParameters['currentStepId'];
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
            path: `/api/ApprovalARCNClaim/list`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     */
    async apiApprovalARCNClaimListGet(requestParameters: ApiApprovalARCNClaimListGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApprovalARCNClaimResponseModel> {
        const response = await this.apiApprovalARCNClaimListGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiApprovalARCNClaimUpdatePostRaw(requestParameters: ApiApprovalARCNClaimUpdatePostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApprovalARCNClaimDetailModelBaseResponseModel>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // oauth2 authentication
        }

        const response = await this.request({
            path: `/api/ApprovalARCNClaim/update`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['body'],
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     */
    async apiApprovalARCNClaimUpdatePost(requestParameters: ApiApprovalARCNClaimUpdatePostRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApprovalARCNClaimDetailModelBaseResponseModel> {
        const response = await this.apiApprovalARCNClaimUpdatePostRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
