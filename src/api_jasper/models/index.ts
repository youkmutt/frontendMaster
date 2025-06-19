/* tslint:disable */
/* eslint-disable */
/**
 * 
 * @export
 * @interface BaseRequestModel
 */
export interface BaseRequestModel {
    /**
     * 
     * @type {string}
     * @memberof BaseRequestModel
     */
    jrxmlName: string;
    /**
     * 
     * @type {string}
     * @memberof BaseRequestModel
     */
    reportName: string;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof BaseRequestModel
     */
    param?: { [key: string]: object; };
}
/**
 * 
 * @export
 * @interface BaseResponseModel
 */
export interface BaseResponseModel {
    /**
     * 
     * @type {string}
     * @memberof BaseResponseModel
     */
    fileName?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof BaseResponseModel
     */
    fileExtension?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof BaseResponseModel
     */
    urlDownload?: string;
}
