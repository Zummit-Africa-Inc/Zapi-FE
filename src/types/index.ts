
export type APIType = {
   name:	string
   description: string
   base_url: string
   about?: string
   categoryId?:	string
   logo_url?: string
   api_website?: string
   term_of_use?: string
   visibility?:	string

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