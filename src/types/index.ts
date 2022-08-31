
export type APIResponseType = {
   id: string
   createdOn: string | Date | null
   createdBy: string | Date | null
   updatedOn: string | Date | null
   updatedBy: string | null
   deletedOn: string | Date | null
   deletedBy: string | null
   name: string
   description: string
   base_url: string
   popularity: number | null
   about: string | null
   subscriptions: Array<string> | Array<any>
   status: string | null
   visibility: string | null
   rating: number | null
   service_level: number | null
   latency: number | null
   categoryId: string
   profileId: string
   secretKey: string | null
   tutorialsId: string | null
   discussionsId: string | null
   priceGroupId: string | null
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