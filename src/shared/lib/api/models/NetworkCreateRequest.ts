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

import { mapValues } from '../runtime';
import type { IPAM } from './IPAM';
import {
    IPAMFromJSON,
    IPAMFromJSONTyped,
    IPAMToJSON,
} from './IPAM';
import type { ConfigReference } from './ConfigReference';
import {
    ConfigReferenceFromJSON,
    ConfigReferenceFromJSONTyped,
    ConfigReferenceToJSON,
} from './ConfigReference';

/**
 * 
 * @export
 * @interface NetworkCreateRequest
 */
export interface NetworkCreateRequest {
    /**
     * 
     * @type {boolean}
     * @memberof NetworkCreateRequest
     */
    attachable?: boolean;
    /**
     * Deprecated: CheckDuplicate is deprecated since API v1.44, but it defaults to true when sent by the client
     * package to older daemons.
     * @type {boolean}
     * @memberof NetworkCreateRequest
     */
    checkDuplicate?: boolean;
    /**
     * 
     * @type {ConfigReference}
     * @memberof NetworkCreateRequest
     */
    configFrom?: ConfigReference;
    /**
     * 
     * @type {boolean}
     * @memberof NetworkCreateRequest
     */
    configOnly?: boolean;
    /**
     * 
     * @type {string}
     * @memberof NetworkCreateRequest
     */
    driver?: string;
    /**
     * 
     * @type {boolean}
     * @memberof NetworkCreateRequest
     */
    enableIPv6?: boolean;
    /**
     * 
     * @type {IPAM}
     * @memberof NetworkCreateRequest
     */
    iPAM?: IPAM;
    /**
     * 
     * @type {boolean}
     * @memberof NetworkCreateRequest
     */
    ingress?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof NetworkCreateRequest
     */
    internal?: boolean;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof NetworkCreateRequest
     */
    labels?: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof NetworkCreateRequest
     */
    name?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof NetworkCreateRequest
     */
    options?: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof NetworkCreateRequest
     */
    scope?: string;
}

/**
 * Check if a given object implements the NetworkCreateRequest interface.
 */
export function instanceOfNetworkCreateRequest(value: object): value is NetworkCreateRequest {
    return true;
}

export function NetworkCreateRequestFromJSON(json: any): NetworkCreateRequest {
    return NetworkCreateRequestFromJSONTyped(json, false);
}

export function NetworkCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): NetworkCreateRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'attachable': json['Attachable'] == null ? undefined : json['Attachable'],
        'checkDuplicate': json['CheckDuplicate'] == null ? undefined : json['CheckDuplicate'],
        'configFrom': json['ConfigFrom'] == null ? undefined : ConfigReferenceFromJSON(json['ConfigFrom']),
        'configOnly': json['ConfigOnly'] == null ? undefined : json['ConfigOnly'],
        'driver': json['Driver'] == null ? undefined : json['Driver'],
        'enableIPv6': json['EnableIPv6'] == null ? undefined : json['EnableIPv6'],
        'iPAM': json['IPAM'] == null ? undefined : IPAMFromJSON(json['IPAM']),
        'ingress': json['Ingress'] == null ? undefined : json['Ingress'],
        'internal': json['Internal'] == null ? undefined : json['Internal'],
        'labels': json['Labels'] == null ? undefined : json['Labels'],
        'name': json['Name'] == null ? undefined : json['Name'],
        'options': json['Options'] == null ? undefined : json['Options'],
        'scope': json['Scope'] == null ? undefined : json['Scope'],
    };
}

export function NetworkCreateRequestToJSON(value?: NetworkCreateRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'Attachable': value['attachable'],
        'CheckDuplicate': value['checkDuplicate'],
        'ConfigFrom': ConfigReferenceToJSON(value['configFrom']),
        'ConfigOnly': value['configOnly'],
        'Driver': value['driver'],
        'EnableIPv6': value['enableIPv6'],
        'IPAM': IPAMToJSON(value['iPAM']),
        'Ingress': value['ingress'],
        'Internal': value['internal'],
        'Labels': value['labels'],
        'Name': value['name'],
        'Options': value['options'],
        'Scope': value['scope'],
    };
}
