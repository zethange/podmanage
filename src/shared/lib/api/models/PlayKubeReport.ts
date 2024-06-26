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
import type { PodRmReport } from './PodRmReport';
import {
    PodRmReportFromJSON,
    PodRmReportFromJSONTyped,
    PodRmReportToJSON,
} from './PodRmReport';
import type { PlaySecret } from './PlaySecret';
import {
    PlaySecretFromJSON,
    PlaySecretFromJSONTyped,
    PlaySecretToJSON,
} from './PlaySecret';
import type { PodStopReport } from './PodStopReport';
import {
    PodStopReportFromJSON,
    PodStopReportFromJSONTyped,
    PodStopReportToJSON,
} from './PodStopReport';
import type { SecretRmReport } from './SecretRmReport';
import {
    SecretRmReportFromJSON,
    SecretRmReportFromJSONTyped,
    SecretRmReportToJSON,
} from './SecretRmReport';
import type { PlayKubePod } from './PlayKubePod';
import {
    PlayKubePodFromJSON,
    PlayKubePodFromJSONTyped,
    PlayKubePodToJSON,
} from './PlayKubePod';
import type { PlayKubeVolume } from './PlayKubeVolume';
import {
    PlayKubeVolumeFromJSON,
    PlayKubeVolumeFromJSONTyped,
    PlayKubeVolumeToJSON,
} from './PlayKubeVolume';
import type { VolumeRmReport } from './VolumeRmReport';
import {
    VolumeRmReportFromJSON,
    VolumeRmReportFromJSONTyped,
    VolumeRmReportToJSON,
} from './VolumeRmReport';

/**
 * 
 * @export
 * @interface PlayKubeReport
 */
export interface PlayKubeReport {
    /**
     * If set, exit with the specified exit code.
     * @type {number}
     * @memberof PlayKubeReport
     */
    exitCode?: number;
    /**
     * Pods - pods created by play kube.
     * @type {Array<PlayKubePod>}
     * @memberof PlayKubeReport
     */
    pods?: Array<PlayKubePod>;
    /**
     * 
     * @type {Array<PodRmReport>}
     * @memberof PlayKubeReport
     */
    rmReport?: Array<PodRmReport>;
    /**
     * 
     * @type {Array<SecretRmReport>}
     * @memberof PlayKubeReport
     */
    secretRmReport?: Array<SecretRmReport>;
    /**
     * Secrets - secrets created by play kube
     * @type {Array<PlaySecret>}
     * @memberof PlayKubeReport
     */
    secrets?: Array<PlaySecret>;
    /**
     * ServiceContainerID - ID of the service container if one is created
     * @type {string}
     * @memberof PlayKubeReport
     */
    serviceContainerID?: string;
    /**
     * 
     * @type {Array<PodStopReport>}
     * @memberof PlayKubeReport
     */
    stopReport?: Array<PodStopReport>;
    /**
     * 
     * @type {Array<VolumeRmReport>}
     * @memberof PlayKubeReport
     */
    volumeRmReport?: Array<VolumeRmReport>;
    /**
     * Volumes - volumes created by play kube.
     * @type {Array<PlayKubeVolume>}
     * @memberof PlayKubeReport
     */
    volumes?: Array<PlayKubeVolume>;
}

/**
 * Check if a given object implements the PlayKubeReport interface.
 */
export function instanceOfPlayKubeReport(value: object): value is PlayKubeReport {
    return true;
}

export function PlayKubeReportFromJSON(json: any): PlayKubeReport {
    return PlayKubeReportFromJSONTyped(json, false);
}

export function PlayKubeReportFromJSONTyped(json: any, ignoreDiscriminator: boolean): PlayKubeReport {
    if (json == null) {
        return json;
    }
    return {
        
        'exitCode': json['ExitCode'] == null ? undefined : json['ExitCode'],
        'pods': json['Pods'] == null ? undefined : ((json['Pods'] as Array<any>).map(PlayKubePodFromJSON)),
        'rmReport': json['RmReport'] == null ? undefined : ((json['RmReport'] as Array<any>).map(PodRmReportFromJSON)),
        'secretRmReport': json['SecretRmReport'] == null ? undefined : ((json['SecretRmReport'] as Array<any>).map(SecretRmReportFromJSON)),
        'secrets': json['Secrets'] == null ? undefined : ((json['Secrets'] as Array<any>).map(PlaySecretFromJSON)),
        'serviceContainerID': json['ServiceContainerID'] == null ? undefined : json['ServiceContainerID'],
        'stopReport': json['StopReport'] == null ? undefined : ((json['StopReport'] as Array<any>).map(PodStopReportFromJSON)),
        'volumeRmReport': json['VolumeRmReport'] == null ? undefined : ((json['VolumeRmReport'] as Array<any>).map(VolumeRmReportFromJSON)),
        'volumes': json['Volumes'] == null ? undefined : ((json['Volumes'] as Array<any>).map(PlayKubeVolumeFromJSON)),
    };
}

export function PlayKubeReportToJSON(value?: PlayKubeReport | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'ExitCode': value['exitCode'],
        'Pods': value['pods'] == null ? undefined : ((value['pods'] as Array<any>).map(PlayKubePodToJSON)),
        'RmReport': value['rmReport'] == null ? undefined : ((value['rmReport'] as Array<any>).map(PodRmReportToJSON)),
        'SecretRmReport': value['secretRmReport'] == null ? undefined : ((value['secretRmReport'] as Array<any>).map(SecretRmReportToJSON)),
        'Secrets': value['secrets'] == null ? undefined : ((value['secrets'] as Array<any>).map(PlaySecretToJSON)),
        'ServiceContainerID': value['serviceContainerID'],
        'StopReport': value['stopReport'] == null ? undefined : ((value['stopReport'] as Array<any>).map(PodStopReportToJSON)),
        'VolumeRmReport': value['volumeRmReport'] == null ? undefined : ((value['volumeRmReport'] as Array<any>).map(VolumeRmReportToJSON)),
        'Volumes': value['volumes'] == null ? undefined : ((value['volumes'] as Array<any>).map(PlayKubeVolumeToJSON)),
    };
}

