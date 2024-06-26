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
  ErrorModel,
  NetworkConnect,
  NetworkCreate201Response,
  NetworkCreateRequest,
  NetworkDisconnect,
  NetworkPrune200Response,
  NetworkResource,
} from '../models/index';
import {
    ErrorModelFromJSON,
    ErrorModelToJSON,
    NetworkConnectFromJSON,
    NetworkConnectToJSON,
    NetworkCreate201ResponseFromJSON,
    NetworkCreate201ResponseToJSON,
    NetworkCreateRequestFromJSON,
    NetworkCreateRequestToJSON,
    NetworkDisconnectFromJSON,
    NetworkDisconnectToJSON,
    NetworkPrune200ResponseFromJSON,
    NetworkPrune200ResponseToJSON,
    NetworkResourceFromJSON,
    NetworkResourceToJSON,
} from '../models/index';

export interface NetworkConnectRequest {
    name: string;
    create?: NetworkConnect;
}

export interface NetworkCreateOperationRequest {
    create?: NetworkCreateRequest;
}

export interface NetworkDeleteRequest {
    name: string;
}

export interface NetworkDisconnectRequest {
    name: string;
    create?: NetworkDisconnect;
}

export interface NetworkInspectRequest {
    name: string;
    verbose?: boolean;
    scope?: string;
}

export interface NetworkListRequest {
    filters?: string;
}

export interface NetworkPruneRequest {
    filters?: string;
}

/**
 * 
 */
export class NetworksCompatApi extends runtime.BaseAPI {

    /**
     * Connect a container to a network
     * Connect container to network
     */
    async networkConnectRaw(requestParameters: NetworkConnectRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['name'] == null) {
            throw new runtime.RequiredError(
                'name',
                'Required parameter "name" was null or undefined when calling networkConnect().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/networks/{name}/connect`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters['name']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['create'] as any,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Connect a container to a network
     * Connect container to network
     */
    async networkConnect(requestParameters: NetworkConnectRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.networkConnectRaw(requestParameters, initOverrides);
    }

    /**
     * Create a network configuration
     * Create network
     */
    async networkCreateRaw(requestParameters: NetworkCreateOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<NetworkCreate201Response>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/networks/create`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['create'] as any,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => NetworkCreate201ResponseFromJSON(jsonValue));
    }

    /**
     * Create a network configuration
     * Create network
     */
    async networkCreate(requestParameters: NetworkCreateOperationRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<NetworkCreate201Response> {
        const response = await this.networkCreateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Remove a network
     * Remove a network
     */
    async networkDeleteRaw(requestParameters: NetworkDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['name'] == null) {
            throw new runtime.RequiredError(
                'name',
                'Required parameter "name" was null or undefined when calling networkDelete().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/networks/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters['name']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Remove a network
     * Remove a network
     */
    async networkDelete(requestParameters: NetworkDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.networkDeleteRaw(requestParameters, initOverrides);
    }

    /**
     * Disconnect a container from a network
     * Disconnect container from network
     */
    async networkDisconnectRaw(requestParameters: NetworkDisconnectRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['name'] == null) {
            throw new runtime.RequiredError(
                'name',
                'Required parameter "name" was null or undefined when calling networkDisconnect().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/networks/{name}/disconnect`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters['name']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['create'] as any,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Disconnect a container from a network
     * Disconnect container from network
     */
    async networkDisconnect(requestParameters: NetworkDisconnectRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.networkDisconnectRaw(requestParameters, initOverrides);
    }

    /**
     * Display low level configuration network
     * Inspect a network
     */
    async networkInspectRaw(requestParameters: NetworkInspectRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<NetworkResource>> {
        if (requestParameters['name'] == null) {
            throw new runtime.RequiredError(
                'name',
                'Required parameter "name" was null or undefined when calling networkInspect().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['verbose'] != null) {
            queryParameters['verbose'] = requestParameters['verbose'];
        }

        if (requestParameters['scope'] != null) {
            queryParameters['scope'] = requestParameters['scope'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/networks/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters['name']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => NetworkResourceFromJSON(jsonValue));
    }

    /**
     * Display low level configuration network
     * Inspect a network
     */
    async networkInspect(requestParameters: NetworkInspectRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<NetworkResource> {
        const response = await this.networkInspectRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Display summary of network configurations
     * List networks
     */
    async networkListRaw(requestParameters: NetworkListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<NetworkResource>>> {
        const queryParameters: any = {};

        if (requestParameters['filters'] != null) {
            queryParameters['filters'] = requestParameters['filters'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/networks`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(NetworkResourceFromJSON));
    }

    /**
     * Display summary of network configurations
     * List networks
     */
    async networkList(requestParameters: NetworkListRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<NetworkResource>> {
        const response = await this.networkListRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Remove networks that do not have containers
     * Delete unused networks
     */
    async networkPruneRaw(requestParameters: NetworkPruneRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<NetworkPrune200Response>> {
        const queryParameters: any = {};

        if (requestParameters['filters'] != null) {
            queryParameters['filters'] = requestParameters['filters'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/networks/prune`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => NetworkPrune200ResponseFromJSON(jsonValue));
    }

    /**
     * Remove networks that do not have containers
     * Delete unused networks
     */
    async networkPrune(requestParameters: NetworkPruneRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<NetworkPrune200Response> {
        const response = await this.networkPruneRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
