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
import type { ListPodContainer } from './ListPodContainer';
import {
    ListPodContainerFromJSON,
    ListPodContainerFromJSONTyped,
    ListPodContainerToJSON,
} from './ListPodContainer';

/**
 * 
 * @export
 * @interface ListPodsReport
 */
export interface ListPodsReport {
    /**
     * 
     * @type {string}
     * @memberof ListPodsReport
     */
    cgroup?: string;
    /**
     * 
     * @type {Array<ListPodContainer>}
     * @memberof ListPodsReport
     */
    containers?: Array<ListPodContainer>;
    /**
     * 
     * @type {Date}
     * @memberof ListPodsReport
     */
    created?: Date;
    /**
     * 
     * @type {string}
     * @memberof ListPodsReport
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof ListPodsReport
     */
    infraId?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof ListPodsReport
     */
    labels?: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof ListPodsReport
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof ListPodsReport
     */
    namespace?: string;
    /**
     * Network names connected to infra container
     * @type {Array<string>}
     * @memberof ListPodsReport
     */
    networks?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof ListPodsReport
     */
    status?: string;
}

/**
 * Check if a given object implements the ListPodsReport interface.
 */
export function instanceOfListPodsReport(value: object): value is ListPodsReport {
    return true;
}

export function ListPodsReportFromJSON(json: any): ListPodsReport {
    return ListPodsReportFromJSONTyped(json, false);
}

export function ListPodsReportFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListPodsReport {
    if (json == null) {
        return json;
    }
    return {
        
        'cgroup': json['Cgroup'] == null ? undefined : json['Cgroup'],
        'containers': json['Containers'] == null ? undefined : ((json['Containers'] as Array<any>).map(ListPodContainerFromJSON)),
        'created': json['Created'] == null ? undefined : (new Date(json['Created'])),
        'id': json['Id'] == null ? undefined : json['Id'],
        'infraId': json['InfraId'] == null ? undefined : json['InfraId'],
        'labels': json['Labels'] == null ? undefined : json['Labels'],
        'name': json['Name'] == null ? undefined : json['Name'],
        'namespace': json['Namespace'] == null ? undefined : json['Namespace'],
        'networks': json['Networks'] == null ? undefined : json['Networks'],
        'status': json['Status'] == null ? undefined : json['Status'],
    };
}

export function ListPodsReportToJSON(value?: ListPodsReport | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'Cgroup': value['cgroup'],
        'Containers': value['containers'] == null ? undefined : ((value['containers'] as Array<any>).map(ListPodContainerToJSON)),
        'Created': value['created'] == null ? undefined : ((value['created']).toISOString()),
        'Id': value['id'],
        'InfraId': value['infraId'],
        'Labels': value['labels'],
        'Name': value['name'],
        'Namespace': value['namespace'],
        'Networks': value['networks'],
        'Status': value['status'],
    };
}

