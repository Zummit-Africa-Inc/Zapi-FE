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
   secretKey: string
   read_me: string
   endpoints?: Array<EndpointsType | null>
   popularity?: number
   service_level?: number
   latency?: number
   createdBy?: Date | string
   createdOn?: Date | string
   updatedBy?: Date | string
   updatedOn?: Date | string
   deletedBy?: Date | string
   deletedOn?: Date | string
   discussion?: Array<DiscussionType | null>
}

export type DiscussionType = {
   id?: string | undefined
   title: string
   discussion: string
   userId: string
   createdOn: string | Date | null
   picture: object | string | null
   fullName: string
}


export type SubscriptionType = {
   id: string
   apiId: string
   name: string
   token: string
}

export type NotificationType = {
   // profileId: string
   content: string | null
   createdOn: string | Date | null
   isRead: boolean | null
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
   email: string
   fullName: string
   profileId: string
   // id: string
   // createdOn: string | Date | null
   // createdBy: string | null
   // updatedOn: string | Date | null
   // updatedBy: string | null
   // deletedOn: string | Date | null
   // deletedBy: string | null
   // email: string
   // user_id: string
   // subscriptions?: string[] | []
   // publishedApis?: string[] | []
   // followers?: string[] | []
   // followering?: string[] | []
   // picture: object | string | null
}

export type EndpointsType = {
   id?: string | undefined
   name: string
   route: string
   method: string
   description: string
   headers?: Array<OptionsType>
   body?: Array<OptionsType>
   query?: Array<OptionsType>
   requestBody?: Array<ReqBody>
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
   createdOn: string,
   latency: number,
   profileId: string,
   errorMessage: null,
   status: number,
   apiId: string,
   endpoint: string,
   method: string,
   version: string | null,
   location: string | null,
}

export type OptionsType = {
   name: string
   type: string
   required: boolean
   value?: any
}

export type ReqBody = {
   key: string;
   value: string | Date | boolean | number | object | symbol | Array<any>;
 }