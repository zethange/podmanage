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
/**
 * ManifestAddArtifactOptions provides the model for creating artifact manifests
 * for files and adding those manifests to a manifest list
 * @export
 * @interface ManifestAddArtifactOptions
 */
export interface ManifestAddArtifactOptions {
    /**
     * Annotation to add to the item in the manifest list
     * @type {Array<string>}
     * @memberof ManifestAddArtifactOptions
     */
    annotation?: Array<string>;
    /**
     * Annotations to add to the item in the manifest list by a map which is preferred over Annotation
     * @type {{ [key: string]: string; }}
     * @memberof ManifestAddArtifactOptions
     */
    annotations?: { [key: string]: string; };
    /**
     * Arch overrides the architecture for the item in the manifest list
     * @type {string}
     * @memberof ManifestAddArtifactOptions
     */
    arch?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof ManifestAddArtifactOptions
     */
    artifactAnnotations?: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof ManifestAddArtifactOptions
     */
    artifactConfig?: string;
    /**
     * 
     * @type {string}
     * @memberof ManifestAddArtifactOptions
     */
    artifactConfigType?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ManifestAddArtifactOptions
     */
    artifactExcludeTitles?: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof ManifestAddArtifactOptions
     */
    artifactFiles?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof ManifestAddArtifactOptions
     */
    artifactLayerType?: string;
    /**
     * 
     * @type {string}
     * @memberof ManifestAddArtifactOptions
     */
    artifactSubject?: string;
    /**
     * Note to future maintainers: keep these fields synchronized with ManifestModifyOptions!
     * @type {string}
     * @memberof ManifestAddArtifactOptions
     */
    artifactType?: string;
    /**
     * Feature list for the item in the manifest list
     * @type {Array<string>}
     * @memberof ManifestAddArtifactOptions
     */
    features?: Array<string>;
    /**
     * IndexAnnotation is a slice of key=value annotations to add to the manifest list itself
     * @type {Array<string>}
     * @memberof ManifestAddArtifactOptions
     */
    indexAnnotation?: Array<string>;
    /**
     * IndexAnnotations is a map of key:value annotations to add to the manifest list itself, by a map which is preferred over IndexAnnotation
     * @type {{ [key: string]: string; }}
     * @memberof ManifestAddArtifactOptions
     */
    indexAnnotations?: { [key: string]: string; };
    /**
     * OS overrides the operating system for the item in the manifest list
     * @type {string}
     * @memberof ManifestAddArtifactOptions
     */
    os?: string;
    /**
     * OS features for the item in the manifest list
     * @type {Array<string>}
     * @memberof ManifestAddArtifactOptions
     */
    osFeatures?: Array<string>;
    /**
     * OSVersion overrides the operating system for the item in the manifest list
     * @type {string}
     * @memberof ManifestAddArtifactOptions
     */
    osVersion?: string;
    /**
     * IndexSubject is a subject value to set in the manifest list itself
     * @type {string}
     * @memberof ManifestAddArtifactOptions
     */
    subject?: string;
    /**
     * Variant for the item in the manifest list
     * @type {string}
     * @memberof ManifestAddArtifactOptions
     */
    variant?: string;
}

/**
 * Check if a given object implements the ManifestAddArtifactOptions interface.
 */
export function instanceOfManifestAddArtifactOptions(value: object): value is ManifestAddArtifactOptions {
    return true;
}

export function ManifestAddArtifactOptionsFromJSON(json: any): ManifestAddArtifactOptions {
    return ManifestAddArtifactOptionsFromJSONTyped(json, false);
}

export function ManifestAddArtifactOptionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ManifestAddArtifactOptions {
    if (json == null) {
        return json;
    }
    return {
        
        'annotation': json['annotation'] == null ? undefined : json['annotation'],
        'annotations': json['annotations'] == null ? undefined : json['annotations'],
        'arch': json['arch'] == null ? undefined : json['arch'],
        'artifactAnnotations': json['artifact_annotations'] == null ? undefined : json['artifact_annotations'],
        'artifactConfig': json['artifact_config'] == null ? undefined : json['artifact_config'],
        'artifactConfigType': json['artifact_config_type'] == null ? undefined : json['artifact_config_type'],
        'artifactExcludeTitles': json['artifact_exclude_titles'] == null ? undefined : json['artifact_exclude_titles'],
        'artifactFiles': json['artifact_files'] == null ? undefined : json['artifact_files'],
        'artifactLayerType': json['artifact_layer_type'] == null ? undefined : json['artifact_layer_type'],
        'artifactSubject': json['artifact_subject'] == null ? undefined : json['artifact_subject'],
        'artifactType': json['artifact_type'] == null ? undefined : json['artifact_type'],
        'features': json['features'] == null ? undefined : json['features'],
        'indexAnnotation': json['index_annotation'] == null ? undefined : json['index_annotation'],
        'indexAnnotations': json['index_annotations'] == null ? undefined : json['index_annotations'],
        'os': json['os'] == null ? undefined : json['os'],
        'osFeatures': json['os_features'] == null ? undefined : json['os_features'],
        'osVersion': json['os_version'] == null ? undefined : json['os_version'],
        'subject': json['subject'] == null ? undefined : json['subject'],
        'variant': json['variant'] == null ? undefined : json['variant'],
    };
}

export function ManifestAddArtifactOptionsToJSON(value?: ManifestAddArtifactOptions | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'annotation': value['annotation'],
        'annotations': value['annotations'],
        'arch': value['arch'],
        'artifact_annotations': value['artifactAnnotations'],
        'artifact_config': value['artifactConfig'],
        'artifact_config_type': value['artifactConfigType'],
        'artifact_exclude_titles': value['artifactExcludeTitles'],
        'artifact_files': value['artifactFiles'],
        'artifact_layer_type': value['artifactLayerType'],
        'artifact_subject': value['artifactSubject'],
        'artifact_type': value['artifactType'],
        'features': value['features'],
        'index_annotation': value['indexAnnotation'],
        'index_annotations': value['indexAnnotations'],
        'os': value['os'],
        'os_features': value['osFeatures'],
        'os_version': value['osVersion'],
        'subject': value['subject'],
        'variant': value['variant'],
    };
}
