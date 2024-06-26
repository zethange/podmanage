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
  IdResponse,
  InspectPodData,
  ListPodsReport,
  PlayKubeReport,
  PodKillReport,
  PodPauseReport,
  PodPruneReport,
  PodRestartReport,
  PodRmReport,
  PodSpecGenerator,
  PodStartReport,
  PodStatsReport,
  PodStopReport,
  PodTopOKBody,
  PodUnpauseReport,
} from '../models/index';
import {
    ErrorModelFromJSON,
    ErrorModelToJSON,
    IdResponseFromJSON,
    IdResponseToJSON,
    InspectPodDataFromJSON,
    InspectPodDataToJSON,
    ListPodsReportFromJSON,
    ListPodsReportToJSON,
    PlayKubeReportFromJSON,
    PlayKubeReportToJSON,
    PodKillReportFromJSON,
    PodKillReportToJSON,
    PodPauseReportFromJSON,
    PodPauseReportToJSON,
    PodPruneReportFromJSON,
    PodPruneReportToJSON,
    PodRestartReportFromJSON,
    PodRestartReportToJSON,
    PodRmReportFromJSON,
    PodRmReportToJSON,
    PodSpecGeneratorFromJSON,
    PodSpecGeneratorToJSON,
    PodStartReportFromJSON,
    PodStartReportToJSON,
    PodStatsReportFromJSON,
    PodStatsReportToJSON,
    PodStopReportFromJSON,
    PodStopReportToJSON,
    PodTopOKBodyFromJSON,
    PodTopOKBodyToJSON,
    PodUnpauseReportFromJSON,
    PodUnpauseReportToJSON,
} from '../models/index';

export interface GenerateKubeLibpodRequest {
    names: Array<string>;
    service?: boolean;
    type?: string;
    replicas?: number;
    noTrunc?: boolean;
    podmanOnly?: boolean;
}

export interface GenerateSystemdLibpodRequest {
    name: string;
    useName?: boolean;
    _new?: boolean;
    noHeader?: boolean;
    startTimeout?: number;
    stopTimeout?: number;
    restartPolicy?: GenerateSystemdLibpodRestartPolicyEnum;
    containerPrefix?: string;
    podPrefix?: string;
    separator?: string;
    restartSec?: number;
    wants?: Array<string>;
    after?: Array<string>;
    requires?: Array<string>;
    additionalEnvVariables?: Array<string>;
}

export interface KubeApplyLibpodRequest {
    caCertFile?: string;
    kubeConfig?: string;
    namespace?: string;
    service?: boolean;
    file?: string;
    request?: string;
}

export interface PlayKubeDownLibpodRequest {
    force?: boolean;
}

export interface PlayKubeLibpodRequest {
    annotations?: string;
    logDriver?: string;
    logOptions?: Array<string>;
    network?: Array<string>;
    noHosts?: boolean;
    noTrunc?: boolean;
    publishPorts?: Array<string>;
    publishAllPorts?: boolean;
    replace?: boolean;
    serviceContainer?: boolean;
    start?: boolean;
    staticIPs?: Array<string>;
    staticMACs?: Array<string>;
    tlsVerify?: boolean;
    userns?: string;
    wait?: boolean;
    request?: string;
}

export interface PodCreateLibpodRequest {
    create?: PodSpecGenerator;
}

export interface PodDeleteLibpodRequest {
    name: string;
    force?: boolean;
}

export interface PodExistsLibpodRequest {
    name: string;
}

export interface PodInspectLibpodRequest {
    name: string;
}

export interface PodKillLibpodRequest {
    name: string;
    signal?: string;
}

export interface PodListLibpodRequest {
    filters?: string;
}

export interface PodPauseLibpodRequest {
    name: string;
}

export interface PodRestartLibpodRequest {
    name: string;
}

export interface PodStartLibpodRequest {
    name: string;
}

export interface PodStatsAllLibpodRequest {
    all?: boolean;
    namesOrIDs?: Array<string>;
}

export interface PodStopLibpodRequest {
    name: string;
    t?: number;
}

export interface PodTopLibpodRequest {
    name: string;
    stream?: boolean;
    delay?: number;
    psArgs?: string;
}

export interface PodUnpauseLibpodRequest {
    name: string;
}

/**
 * 
 */
export class PodsApi extends runtime.BaseAPI {

    /**
     * Generate Kubernetes YAML based on a pod or container.
     * Generate a Kubernetes YAML file.
     */
    async generateKubeLibpodRaw(requestParameters: GenerateKubeLibpodRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Blob>> {
        if (requestParameters['names'] == null) {
            throw new runtime.RequiredError(
                'names',
                'Required parameter "names" was null or undefined when calling generateKubeLibpod().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['names'] != null) {
            queryParameters['names'] = requestParameters['names']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['service'] != null) {
            queryParameters['service'] = requestParameters['service'];
        }

        if (requestParameters['type'] != null) {
            queryParameters['type'] = requestParameters['type'];
        }

        if (requestParameters['replicas'] != null) {
            queryParameters['replicas'] = requestParameters['replicas'];
        }

        if (requestParameters['noTrunc'] != null) {
            queryParameters['noTrunc'] = requestParameters['noTrunc'];
        }

        if (requestParameters['podmanOnly'] != null) {
            queryParameters['podmanOnly'] = requestParameters['podmanOnly'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/libpod/generate/kube`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.BlobApiResponse(response);
    }

    /**
     * Generate Kubernetes YAML based on a pod or container.
     * Generate a Kubernetes YAML file.
     */
    async generateKubeLibpod(requestParameters: GenerateKubeLibpodRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Blob> {
        const response = await this.generateKubeLibpodRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Generate Systemd Units based on a pod or container.
     * Generate Systemd Units
     */
    async generateSystemdLibpodRaw(requestParameters: GenerateSystemdLibpodRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<{ [key: string]: string; }>> {
        if (requestParameters['name'] == null) {
            throw new runtime.RequiredError(
                'name',
                'Required parameter "name" was null or undefined when calling generateSystemdLibpod().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['useName'] != null) {
            queryParameters['useName'] = requestParameters['useName'];
        }

        if (requestParameters['_new'] != null) {
            queryParameters['new'] = requestParameters['_new'];
        }

        if (requestParameters['noHeader'] != null) {
            queryParameters['noHeader'] = requestParameters['noHeader'];
        }

        if (requestParameters['startTimeout'] != null) {
            queryParameters['startTimeout'] = requestParameters['startTimeout'];
        }

        if (requestParameters['stopTimeout'] != null) {
            queryParameters['stopTimeout'] = requestParameters['stopTimeout'];
        }

        if (requestParameters['restartPolicy'] != null) {
            queryParameters['restartPolicy'] = requestParameters['restartPolicy'];
        }

        if (requestParameters['containerPrefix'] != null) {
            queryParameters['containerPrefix'] = requestParameters['containerPrefix'];
        }

        if (requestParameters['podPrefix'] != null) {
            queryParameters['podPrefix'] = requestParameters['podPrefix'];
        }

        if (requestParameters['separator'] != null) {
            queryParameters['separator'] = requestParameters['separator'];
        }

        if (requestParameters['restartSec'] != null) {
            queryParameters['restartSec'] = requestParameters['restartSec'];
        }

        if (requestParameters['wants'] != null) {
            queryParameters['wants'] = requestParameters['wants']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['after'] != null) {
            queryParameters['after'] = requestParameters['after']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['requires'] != null) {
            queryParameters['requires'] = requestParameters['requires']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['additionalEnvVariables'] != null) {
            queryParameters['additionalEnvVariables'] = requestParameters['additionalEnvVariables']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/libpod/generate/{name}/systemd`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters['name']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Generate Systemd Units based on a pod or container.
     * Generate Systemd Units
     */
    async generateSystemdLibpod(requestParameters: GenerateSystemdLibpodRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<{ [key: string]: string; }> {
        const response = await this.generateSystemdLibpodRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Deploy a podman container, pod, volume, or Kubernetes yaml to a Kubernetes cluster.
     * Apply a podman workload or Kubernetes YAML file.
     */
    async kubeApplyLibpodRaw(requestParameters: KubeApplyLibpodRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Blob>> {
        const queryParameters: any = {};

        if (requestParameters['caCertFile'] != null) {
            queryParameters['caCertFile'] = requestParameters['caCertFile'];
        }

        if (requestParameters['kubeConfig'] != null) {
            queryParameters['kubeConfig'] = requestParameters['kubeConfig'];
        }

        if (requestParameters['namespace'] != null) {
            queryParameters['namespace'] = requestParameters['namespace'];
        }

        if (requestParameters['service'] != null) {
            queryParameters['service'] = requestParameters['service'];
        }

        if (requestParameters['file'] != null) {
            queryParameters['file'] = requestParameters['file'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/libpod/kube/apply`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['request'] as any,
        }, initOverrides);

        return new runtime.BlobApiResponse(response);
    }

    /**
     * Deploy a podman container, pod, volume, or Kubernetes yaml to a Kubernetes cluster.
     * Apply a podman workload or Kubernetes YAML file.
     */
    async kubeApplyLibpod(requestParameters: KubeApplyLibpodRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Blob> {
        const response = await this.kubeApplyLibpodRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Tears down pods, secrets, and volumes defined in a YAML file
     * Remove resources created from kube play
     */
    async playKubeDownLibpodRaw(requestParameters: PlayKubeDownLibpodRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PlayKubeReport>> {
        const queryParameters: any = {};

        if (requestParameters['force'] != null) {
            queryParameters['force'] = requestParameters['force'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/libpod/play/kube`,
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PlayKubeReportFromJSON(jsonValue));
    }

    /**
     * Tears down pods, secrets, and volumes defined in a YAML file
     * Remove resources created from kube play
     */
    async playKubeDownLibpod(requestParameters: PlayKubeDownLibpodRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PlayKubeReport> {
        const response = await this.playKubeDownLibpodRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create and run pods based on a Kubernetes YAML file (pod or service kind).
     * Play a Kubernetes YAML file.
     */
    async playKubeLibpodRaw(requestParameters: PlayKubeLibpodRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PlayKubeReport>> {
        const queryParameters: any = {};

        if (requestParameters['annotations'] != null) {
            queryParameters['annotations'] = requestParameters['annotations'];
        }

        if (requestParameters['logDriver'] != null) {
            queryParameters['logDriver'] = requestParameters['logDriver'];
        }

        if (requestParameters['logOptions'] != null) {
            queryParameters['logOptions'] = requestParameters['logOptions']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['network'] != null) {
            queryParameters['network'] = requestParameters['network']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['noHosts'] != null) {
            queryParameters['noHosts'] = requestParameters['noHosts'];
        }

        if (requestParameters['noTrunc'] != null) {
            queryParameters['noTrunc'] = requestParameters['noTrunc'];
        }

        if (requestParameters['publishPorts'] != null) {
            queryParameters['publishPorts'] = requestParameters['publishPorts']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['publishAllPorts'] != null) {
            queryParameters['publishAllPorts'] = requestParameters['publishAllPorts'];
        }

        if (requestParameters['replace'] != null) {
            queryParameters['replace'] = requestParameters['replace'];
        }

        if (requestParameters['serviceContainer'] != null) {
            queryParameters['serviceContainer'] = requestParameters['serviceContainer'];
        }

        if (requestParameters['start'] != null) {
            queryParameters['start'] = requestParameters['start'];
        }

        if (requestParameters['staticIPs'] != null) {
            queryParameters['staticIPs'] = requestParameters['staticIPs']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['staticMACs'] != null) {
            queryParameters['staticMACs'] = requestParameters['staticMACs']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['tlsVerify'] != null) {
            queryParameters['tlsVerify'] = requestParameters['tlsVerify'];
        }

        if (requestParameters['userns'] != null) {
            queryParameters['userns'] = requestParameters['userns'];
        }

        if (requestParameters['wait'] != null) {
            queryParameters['wait'] = requestParameters['wait'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/libpod/play/kube`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['request'] as any,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PlayKubeReportFromJSON(jsonValue));
    }

    /**
     * Create and run pods based on a Kubernetes YAML file (pod or service kind).
     * Play a Kubernetes YAML file.
     */
    async playKubeLibpod(requestParameters: PlayKubeLibpodRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PlayKubeReport> {
        const response = await this.playKubeLibpodRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create a pod
     */
    async podCreateLibpodRaw(requestParameters: PodCreateLibpodRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<IdResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/libpod/pods/create`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PodSpecGeneratorToJSON(requestParameters['create']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => IdResponseFromJSON(jsonValue));
    }

    /**
     * Create a pod
     */
    async podCreateLibpod(requestParameters: PodCreateLibpodRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<IdResponse> {
        const response = await this.podCreateLibpodRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Remove pod
     */
    async podDeleteLibpodRaw(requestParameters: PodDeleteLibpodRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PodRmReport>> {
        if (requestParameters['name'] == null) {
            throw new runtime.RequiredError(
                'name',
                'Required parameter "name" was null or undefined when calling podDeleteLibpod().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['force'] != null) {
            queryParameters['force'] = requestParameters['force'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/libpod/pods/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters['name']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PodRmReportFromJSON(jsonValue));
    }

    /**
     * Remove pod
     */
    async podDeleteLibpod(requestParameters: PodDeleteLibpodRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PodRmReport> {
        const response = await this.podDeleteLibpodRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Check if a pod exists by name or ID
     * Pod exists
     */
    async podExistsLibpodRaw(requestParameters: PodExistsLibpodRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['name'] == null) {
            throw new runtime.RequiredError(
                'name',
                'Required parameter "name" was null or undefined when calling podExistsLibpod().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/libpod/pods/{name}/exists`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters['name']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Check if a pod exists by name or ID
     * Pod exists
     */
    async podExistsLibpod(requestParameters: PodExistsLibpodRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.podExistsLibpodRaw(requestParameters, initOverrides);
    }

    /**
     * Inspect pod
     */
    async podInspectLibpodRaw(requestParameters: PodInspectLibpodRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<InspectPodData>> {
        if (requestParameters['name'] == null) {
            throw new runtime.RequiredError(
                'name',
                'Required parameter "name" was null or undefined when calling podInspectLibpod().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/libpod/pods/{name}/json`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters['name']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InspectPodDataFromJSON(jsonValue));
    }

    /**
     * Inspect pod
     */
    async podInspectLibpod(requestParameters: PodInspectLibpodRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<InspectPodData> {
        const response = await this.podInspectLibpodRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Kill a pod
     */
    async podKillLibpodRaw(requestParameters: PodKillLibpodRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PodKillReport>> {
        if (requestParameters['name'] == null) {
            throw new runtime.RequiredError(
                'name',
                'Required parameter "name" was null or undefined when calling podKillLibpod().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['signal'] != null) {
            queryParameters['signal'] = requestParameters['signal'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/libpod/pods/{name}/kill`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters['name']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PodKillReportFromJSON(jsonValue));
    }

    /**
     * Kill a pod
     */
    async podKillLibpod(requestParameters: PodKillLibpodRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PodKillReport> {
        const response = await this.podKillLibpodRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List pods
     */
    async podListLibpodRaw(requestParameters: PodListLibpodRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<ListPodsReport>>> {
        const queryParameters: any = {};

        if (requestParameters['filters'] != null) {
            queryParameters['filters'] = requestParameters['filters'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/libpod/pods/json`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ListPodsReportFromJSON));
    }

    /**
     * List pods
     */
    async podListLibpod(requestParameters: PodListLibpodRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<ListPodsReport>> {
        const response = await this.podListLibpodRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Pause a pod
     * Pause a pod
     */
    async podPauseLibpodRaw(requestParameters: PodPauseLibpodRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PodPauseReport>> {
        if (requestParameters['name'] == null) {
            throw new runtime.RequiredError(
                'name',
                'Required parameter "name" was null or undefined when calling podPauseLibpod().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/libpod/pods/{name}/pause`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters['name']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PodPauseReportFromJSON(jsonValue));
    }

    /**
     * Pause a pod
     * Pause a pod
     */
    async podPauseLibpod(requestParameters: PodPauseLibpodRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PodPauseReport> {
        const response = await this.podPauseLibpodRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Prune unused pods
     */
    async podPruneLibpodRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PodPruneReport>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/libpod/pods/prune`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PodPruneReportFromJSON(jsonValue));
    }

    /**
     * Prune unused pods
     */
    async podPruneLibpod(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PodPruneReport> {
        const response = await this.podPruneLibpodRaw(initOverrides);
        return await response.value();
    }

    /**
     * Restart a pod
     */
    async podRestartLibpodRaw(requestParameters: PodRestartLibpodRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PodRestartReport>> {
        if (requestParameters['name'] == null) {
            throw new runtime.RequiredError(
                'name',
                'Required parameter "name" was null or undefined when calling podRestartLibpod().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/libpod/pods/{name}/restart`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters['name']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PodRestartReportFromJSON(jsonValue));
    }

    /**
     * Restart a pod
     */
    async podRestartLibpod(requestParameters: PodRestartLibpodRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PodRestartReport> {
        const response = await this.podRestartLibpodRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Start a pod
     */
    async podStartLibpodRaw(requestParameters: PodStartLibpodRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PodStartReport>> {
        if (requestParameters['name'] == null) {
            throw new runtime.RequiredError(
                'name',
                'Required parameter "name" was null or undefined when calling podStartLibpod().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/libpod/pods/{name}/start`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters['name']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PodStartReportFromJSON(jsonValue));
    }

    /**
     * Start a pod
     */
    async podStartLibpod(requestParameters: PodStartLibpodRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PodStartReport> {
        const response = await this.podStartLibpodRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Display a live stream of resource usage statistics for the containers in one or more pods
     * Statistics for one or more pods
     */
    async podStatsAllLibpodRaw(requestParameters: PodStatsAllLibpodRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<PodStatsReport>>> {
        const queryParameters: any = {};

        if (requestParameters['all'] != null) {
            queryParameters['all'] = requestParameters['all'];
        }

        if (requestParameters['namesOrIDs'] != null) {
            queryParameters['namesOrIDs'] = requestParameters['namesOrIDs']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/libpod/pods/stats`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(PodStatsReportFromJSON));
    }

    /**
     * Display a live stream of resource usage statistics for the containers in one or more pods
     * Statistics for one or more pods
     */
    async podStatsAllLibpod(requestParameters: PodStatsAllLibpodRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<PodStatsReport>> {
        const response = await this.podStatsAllLibpodRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Stop a pod
     */
    async podStopLibpodRaw(requestParameters: PodStopLibpodRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PodStopReport>> {
        if (requestParameters['name'] == null) {
            throw new runtime.RequiredError(
                'name',
                'Required parameter "name" was null or undefined when calling podStopLibpod().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['t'] != null) {
            queryParameters['t'] = requestParameters['t'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/libpod/pods/{name}/stop`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters['name']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PodStopReportFromJSON(jsonValue));
    }

    /**
     * Stop a pod
     */
    async podStopLibpod(requestParameters: PodStopLibpodRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PodStopReport> {
        const response = await this.podStopLibpodRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List processes running inside a pod
     * List processes
     */
    async podTopLibpodRaw(requestParameters: PodTopLibpodRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PodTopOKBody>> {
        if (requestParameters['name'] == null) {
            throw new runtime.RequiredError(
                'name',
                'Required parameter "name" was null or undefined when calling podTopLibpod().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['stream'] != null) {
            queryParameters['stream'] = requestParameters['stream'];
        }

        if (requestParameters['delay'] != null) {
            queryParameters['delay'] = requestParameters['delay'];
        }

        if (requestParameters['psArgs'] != null) {
            queryParameters['ps_args'] = requestParameters['psArgs'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/libpod/pods/{name}/top`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters['name']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PodTopOKBodyFromJSON(jsonValue));
    }

    /**
     * List processes running inside a pod
     * List processes
     */
    async podTopLibpod(requestParameters: PodTopLibpodRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PodTopOKBody> {
        const response = await this.podTopLibpodRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Unpause a pod
     */
    async podUnpauseLibpodRaw(requestParameters: PodUnpauseLibpodRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PodUnpauseReport>> {
        if (requestParameters['name'] == null) {
            throw new runtime.RequiredError(
                'name',
                'Required parameter "name" was null or undefined when calling podUnpauseLibpod().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/libpod/pods/{name}/unpause`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters['name']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PodUnpauseReportFromJSON(jsonValue));
    }

    /**
     * Unpause a pod
     */
    async podUnpauseLibpod(requestParameters: PodUnpauseLibpodRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PodUnpauseReport> {
        const response = await this.podUnpauseLibpodRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const GenerateSystemdLibpodRestartPolicyEnum = {
    No: 'no',
    OnSuccess: 'on-success',
    OnFailure: 'on-failure',
    OnAbnormal: 'on-abnormal',
    OnWatchdog: 'on-watchdog',
    OnAbort: 'on-abort',
    Always: 'always'
} as const;
export type GenerateSystemdLibpodRestartPolicyEnum = typeof GenerateSystemdLibpodRestartPolicyEnum[keyof typeof GenerateSystemdLibpodRestartPolicyEnum];
