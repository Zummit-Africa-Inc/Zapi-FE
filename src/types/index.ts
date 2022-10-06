import { HeaderObject } from "../interfaces";

export type APIType = {
   id: string
   name:	string
   description: string
   base_url: string
   about: string
   categoryId:	string
   logo_url?: string
   api_website: string
   term_of_use: string
   visibility: string
   read_me: string
   endpoints?: Array<EndpointsType | null>
}

export type UserResponseType = {
   access: string
   refresh: string
   userId: string
   profileId: string
   fullName: string
   email: string
}

export type UserProfileType = {
   id: string
   createdOn: string | Date | null
   createdBy: string | null
   updatedOn: string | Date | null
   updatedBy: string | null
   deletedOn: string | Date | null
   deletedBy: string | null
   email: string
   user_id: string
   subscriptions?: string[] | []
   publishedApis?: string[] | []
   followers?: string[] | []
   followering?: string[] | []
   picture: object | string | null
}

export type EndpointsType = {
   id?: string | undefined
   name: string
   route: string
   method: string
   description: string
   headers?: Array<HeaderObject>
   requestBody?: Array<object>
}

export type AnalyticsType = {
   id: string,
    createdOn: string | Date | null,
    createdBy: string | null,
    updatedOn: string | Date | null,
    updatedBy: string | null,
    deletedOn: string | Date | null,
    deletedBy: string | null,
    totalLatency: number,
    averageLatency: number,
    apiId: string,
    successful_calls: number,
    total_calls: number,
    total_errors: number
}

export type AnalyticsLog = {
   id: string,
   createdOn: string | Date | null,
   createdBy: string | null,
   updatedOn: string | Date | null,
   updatedBy: string | null,
   deletedOn: string | Date | null,
   deletedBy: string | null,
   latency: number,
   profileId: string,
   errorMessage: null,
   status: number,
   apiId: string,
   endpoint: string,
   method: string
}