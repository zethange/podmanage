/* tslint:disable */
/* eslint-disable */
/**
 * supports a RESTful API for the Libpod library
 * This documentation describes the Podman v2.x+ RESTful API. It consists of a Docker-compatible API and a Libpod API providing support for Podman’s unique features such as pods.  To start the service and keep it running for 5,000 seconds (-t 0 runs forever):  podman system service -t 5000 &  You can then use cURL on the socket using requests documented below.  NOTE: if you install the package podman-docker, it will create a symbolic link for /run/docker.sock to /run/podman/podman.sock  NOTE: Some fields in the API response JSON are encoded as omitempty, which means that if said field has a zero value, they will not be encoded in the API response. This is a feature to help reduce the size of the JSON responses returned via the API.  NOTE: Due to the limitations of [go-swagger](https://github.com/go-swagger/go-swagger), some field values that have a complex type show up as null in the docs as well as in the API responses. This is because the zero value for the field type is null. The field description in the docs will state what type the field is expected to be for such cases.  See podman-system-service(1) for more information.  Quick Examples:  \'podman info\'  curl --unix-socket /run/podman/podman.sock http://d/v5.0.0/libpod/info  \'podman pull quay.io/containers/podman\'  curl -XPOST --unix-socket /run/podman/podman.sock -v \'http://d/v5.0.0/images/create?fromImage=quay.io%2Fcontainers%2Fpodman\'  \'podman list images\'  curl --unix-socket /run/podman/podman.sock -v \'http://d/v5.0.0/libpod/images/json\' | jq
 *
 * The version of the OpenAPI document: 5.0.0
 * Contact: podman@lists.podman.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  AuthConfig,
  AuthReport,
  ErrorModel,
  SystemComponentVersion,
  SystemDfReport,
} from '../models/index';
import {
    AuthConfigFromJSON,
    AuthConfigToJSON,
    AuthReportFromJSON,
    AuthReportToJSON,
    ErrorModelFromJSON,
    ErrorModelToJSON,
    SystemComponentVersionFromJSON,
    SystemComponentVersionToJSON,
    SystemDfReportFromJSON,
    SystemDfReportToJSON,
} from '../models/index';

export interface SystemAuthRequest {
    authConfig?: AuthConfig;
}

export interface SystemEventsRequest {
    since?: string;
    until?: string;
    filters?: string;
}

/**
 * 
 */
export class SystemCompatApi extends runtime.BaseAPI {

    /**
     * Check auth configuration
     */
    async systemAuthRaw(requestParameters: SystemAuthRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AuthReport>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/auth`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AuthConfigToJSON(requestParameters['authConfig']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AuthReportFromJSON(jsonValue));
    }

    /**
     * Check auth configuration
     */
    async systemAuth(requestParameters: SystemAuthRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AuthReport> {
        const response = await this.systemAuthRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Return information about disk usage for containers, images, and volumes
     * Show disk usage
     */
    async systemDataUsageRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SystemDfReport>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/system/df`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SystemDfReportFromJSON(jsonValue));
    }

    /**
     * Return information about disk usage for containers, images, and volumes
     * Show disk usage
     */
    async systemDataUsage(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SystemDfReport> {
        const response = await this.systemDataUsageRaw(initOverrides);
        return await response.value();
    }

    /**
     * Returns events filtered on query parameters
     * Get events
     */
    async systemEventsRaw(requestParameters: SystemEventsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        if (requestParameters['since'] != null) {
            queryParameters['since'] = requestParameters['since'];
        }

        if (requestParameters['until'] != null) {
            queryParameters['until'] = requestParameters['until'];
        }

        if (requestParameters['filters'] != null) {
            queryParameters['filters'] = requestParameters['filters'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/events`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Returns events filtered on query parameters
     * Get events
     */
    async systemEvents(requestParameters: SystemEventsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.systemEventsRaw(requestParameters, initOverrides);
    }

    /**
     * Returns information on the system and libpod configuration
     * Get info
     */
    async systemInfoRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/info`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Returns information on the system and libpod configuration
     * Get info
     */
    async systemInfo(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.systemInfoRaw(initOverrides);
    }

    /**
     * Return protocol information in response headers. `HEAD /libpod/_ping` is also supported. `/_ping` is available for compatibility with other engines. The \'_ping\' endpoints are not versioned. 
     * Ping service
     */
    async systemPingRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<string>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/libpod/_ping`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<string>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * Return protocol information in response headers. `HEAD /libpod/_ping` is also supported. `/_ping` is available for compatibility with other engines. The \'_ping\' endpoints are not versioned. 
     * Ping service
     */
    async systemPing(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<string> {
        const response = await this.systemPingRaw(initOverrides);
        return await response.value();
    }

    /**
     * Component Version information
     */
    async systemVersionRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SystemComponentVersion>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/version`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SystemComponentVersionFromJSON(jsonValue));
    }

    /**
     * Component Version information
     */
    async systemVersion(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SystemComponentVersion> {
        const response = await this.systemVersionRaw(initOverrides);
        return await response.value();
    }

}