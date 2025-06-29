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
  DebtLetterFormModel,
} from '../models/index';

export interface ApiGeneratePDFDebtLetterPdfPostRequest {
    body?: DebtLetterFormModel;
}

/**
 * GeneratePDFApi - interface
 * 
 * @export
 * @interface GeneratePDFApiInterface
 */
export interface GeneratePDFApiInterface {
    /**
     * 
     * @param {DebtLetterFormModel} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GeneratePDFApiInterface
     */
    apiGeneratePDFDebtLetterPdfPostRaw(requestParameters: ApiGeneratePDFDebtLetterPdfPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
     */
    apiGeneratePDFDebtLetterPdfPost(requestParameters: ApiGeneratePDFDebtLetterPdfPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

}

/**
 * 
 */
export class GeneratePDFApi extends runtime.BaseAPI implements GeneratePDFApiInterface {

    /**
     */
    async apiGeneratePDFDebtLetterPdfPostRaw(requestParameters: ApiGeneratePDFDebtLetterPdfPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/GeneratePDF/debt-letter-pdf`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['body'],
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async apiGeneratePDFDebtLetterPdfPost(requestParameters: ApiGeneratePDFDebtLetterPdfPostRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.apiGeneratePDFDebtLetterPdfPostRaw(requestParameters, initOverrides);
    }

}
