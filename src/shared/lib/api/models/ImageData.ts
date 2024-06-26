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
import type { ImageConfig } from './ImageConfig';
import {
    ImageConfigFromJSON,
    ImageConfigFromJSONTyped,
    ImageConfigToJSON,
} from './ImageConfig';
import type { RootFS } from './RootFS';
import {
    RootFSFromJSON,
    RootFSFromJSONTyped,
    RootFSToJSON,
} from './RootFS';
import type { Schema2HealthConfig } from './Schema2HealthConfig';
import {
    Schema2HealthConfigFromJSON,
    Schema2HealthConfigFromJSONTyped,
    Schema2HealthConfigToJSON,
} from './Schema2HealthConfig';
import type { DriverData } from './DriverData';
import {
    DriverDataFromJSON,
    DriverDataFromJSONTyped,
    DriverDataToJSON,
} from './DriverData';
import type { History } from './History';
import {
    HistoryFromJSON,
    HistoryFromJSONTyped,
    HistoryToJSON,
} from './History';

/**
 * 
 * @export
 * @interface ImageData
 */
export interface ImageData {
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof ImageData
     */
    annotations?: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof ImageData
     */
    architecture?: string;
    /**
     * 
     * @type {string}
     * @memberof ImageData
     */
    author?: string;
    /**
     * 
     * @type {string}
     * @memberof ImageData
     */
    comment?: string;
    /**
     * 
     * @type {ImageConfig}
     * @memberof ImageData
     */
    config?: ImageConfig;
    /**
     * 
     * @type {Date}
     * @memberof ImageData
     */
    created?: Date;
    /**
     * The following is an example of the contents of Digest types:
     * 
     * sha256:7173b809ca12ec5dee4506cd86be934c4596dd234ee82c0662eac04a8c2c71dc
     * 
     * This allows to abstract the digest behind this type and work only in those
     * terms.
     * @type {string}
     * @memberof ImageData
     */
    digest?: string;
    /**
     * 
     * @type {DriverData}
     * @memberof ImageData
     */
    graphDriver?: DriverData;
    /**
     * 
     * @type {Schema2HealthConfig}
     * @memberof ImageData
     */
    healthcheck?: Schema2HealthConfig;
    /**
     * 
     * @type {Array<History>}
     * @memberof ImageData
     */
    history?: Array<History>;
    /**
     * 
     * @type {string}
     * @memberof ImageData
     */
    id?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof ImageData
     */
    labels?: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof ImageData
     */
    manifestType?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof ImageData
     */
    namesHistory?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof ImageData
     */
    os?: string;
    /**
     * 
     * @type {string}
     * @memberof ImageData
     */
    parent?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof ImageData
     */
    repoDigests?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof ImageData
     */
    repoTags?: Array<string>;
    /**
     * 
     * @type {RootFS}
     * @memberof ImageData
     */
    rootFS?: RootFS;
    /**
     * 
     * @type {number}
     * @memberof ImageData
     */
    size?: number;
    /**
     * 
     * @type {string}
     * @memberof ImageData
     */
    user?: string;
    /**
     * 
     * @type {string}
     * @memberof ImageData
     */
    version?: string;
    /**
     * 
     * @type {number}
     * @memberof ImageData
     */
    virtualSize?: number;
}

/**
 * Check if a given object implements the ImageData interface.
 */
export function instanceOfImageData(value: object): value is ImageData {
    return true;
}

export function ImageDataFromJSON(json: any): ImageData {
    return ImageDataFromJSONTyped(json, false);
}

export function ImageDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): ImageData {
    if (json == null) {
        return json;
    }
    return {
        
        'annotations': json['Annotations'] == null ? undefined : json['Annotations'],
        'architecture': json['Architecture'] == null ? undefined : json['Architecture'],
        'author': json['Author'] == null ? undefined : json['Author'],
        'comment': json['Comment'] == null ? undefined : json['Comment'],
        'config': json['Config'] == null ? undefined : ImageConfigFromJSON(json['Config']),
        'created': json['Created'] == null ? undefined : (new Date(json['Created'])),
        'digest': json['Digest'] == null ? undefined : json['Digest'],
        'graphDriver': json['GraphDriver'] == null ? undefined : DriverDataFromJSON(json['GraphDriver']),
        'healthcheck': json['Healthcheck'] == null ? undefined : Schema2HealthConfigFromJSON(json['Healthcheck']),
        'history': json['History'] == null ? undefined : ((json['History'] as Array<any>).map(HistoryFromJSON)),
        'id': json['Id'] == null ? undefined : json['Id'],
        'labels': json['Labels'] == null ? undefined : json['Labels'],
        'manifestType': json['ManifestType'] == null ? undefined : json['ManifestType'],
        'namesHistory': json['NamesHistory'] == null ? undefined : json['NamesHistory'],
        'os': json['Os'] == null ? undefined : json['Os'],
        'parent': json['Parent'] == null ? undefined : json['Parent'],
        'repoDigests': json['RepoDigests'] == null ? undefined : json['RepoDigests'],
        'repoTags': json['RepoTags'] == null ? undefined : json['RepoTags'],
        'rootFS': json['RootFS'] == null ? undefined : RootFSFromJSON(json['RootFS']),
        'size': json['Size'] == null ? undefined : json['Size'],
        'user': json['User'] == null ? undefined : json['User'],
        'version': json['Version'] == null ? undefined : json['Version'],
        'virtualSize': json['VirtualSize'] == null ? undefined : json['VirtualSize'],
    };
}

export function ImageDataToJSON(value?: ImageData | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'Annotations': value['annotations'],
        'Architecture': value['architecture'],
        'Author': value['author'],
        'Comment': value['comment'],
        'Config': ImageConfigToJSON(value['config']),
        'Created': value['created'] == null ? undefined : ((value['created']).toISOString()),
        'Digest': value['digest'],
        'GraphDriver': DriverDataToJSON(value['graphDriver']),
        'Healthcheck': Schema2HealthConfigToJSON(value['healthcheck']),
        'History': value['history'] == null ? undefined : ((value['history'] as Array<any>).map(HistoryToJSON)),
        'Id': value['id'],
        'Labels': value['labels'],
        'ManifestType': value['manifestType'],
        'NamesHistory': value['namesHistory'],
        'Os': value['os'],
        'Parent': value['parent'],
        'RepoDigests': value['repoDigests'],
        'RepoTags': value['repoTags'],
        'RootFS': RootFSToJSON(value['rootFS']),
        'Size': value['size'],
        'User': value['user'],
        'Version': value['version'],
        'VirtualSize': value['virtualSize'],
    };
}

