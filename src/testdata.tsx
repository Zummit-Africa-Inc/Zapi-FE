import blueFire from "./assets/images/blueFire.png"
import purpleFire from "./assets/images/purpleFire.png"
import { MdControlCamera, MdOutlineEdit, MdOutlineLanguage, MdOutlineScience } from "react-icons/md";

export const APIS = [
    {
        id: "0001",
        name: "Text Summarizer API",
        description: "The simplest and most effective way to skip the plenty text, and focus on the main points in to summarize the text. This API does that for you using our SumryMan AI built with Python.",
        status: "verified",
        image: "/images/zapi-logo.png",
        latency: 300,
        popularity: 9.9,
        service_level: 100,
    },
    {
        id: "0002",
        name: "Weather API",
        description: "The simplest and most effective way to skip the plenty text, and focus on the main points in to summarize the text. This API does that for you using our SumryMan AI built with Python.",
        status: "unverified",
        image: "/images/zapi-logo.png",
        latency: 300,
        popularity: 9.9,
        service_level: 100,
    },
    {
        id: "0003",
        name: "Speech Synthesis API",
        description: "The simplest and most effective way to skip the plenty text, and focus on the main points in to summarize the text. This API does that for you using our SumryMan AI built with Python.",
        status: "verified",
        image: "/images/zapi-logo.png",
        latency: 300,
        popularity: 9.9,
        service_level: 100,
    },
    {
        id: "0004",
        name: "Self-driving Car(Test)",
        description: "The simplest and most effective way to skip the plenty text, and focus on the main points in to summarize the text. This API does that for you using our SumryMan AI built with Python.",
        status: "unverified",
        image: "/images/zapi-logo.png",
        latency: 300,
        popularity: 9.9,
        service_level: 100,
    },
    {
        id: "0005",
        name: "Emotion Detector",
        description: "The simplest and most effective way to skip the plenty text, and focus on the main points in to summarize the text. This API does that for you using our SumryMan AI built with Python.",
        status: "verified",
        image: "/images/zapi-logo.png",
        latency: 300,
        popularity: 9.9,
        service_level: 100,
    },
    {
        id: "0006",
        name: "Premier League API",
        description: "The simplest and most effective way to skip the plenty text, and focus on the main points in to summarize the text. This API does that for you using our SumryMan AI built with Python.",
        status: "unverified",
        image: "/images/zapi-logo.png",
        latency: 300,
        popularity: 9.9,
        service_level: 100,
    },
    {
        id: "0007",
        name: "Typicode",
        description: "The simplest and most effective way to skip the plenty text, and focus on the main points in to summarize the text. This API does that for you using our SumryMan AI built with Python.",
        status: "verified",
        image: "/images/zapi-logo.png",
        latency: 300,
        popularity: 9.9,
        service_level: 100,
    },
    {
        id: "0008",
        name: "Cryptocurrency",
        description: "The simplest and most effective way to skip the plenty text, and focus on the main points in to summarize the text. This API does that for you using our SumryMan AI built with Python.",
        status: "unverified",
        image: "/images/zapi-logo.png",
        latency: 300,
        popularity: 9.9,
        service_level: 100,
    },
    {
        id: "0009",
        name: "Auto Code Completion",
        description: "The simplest and most effective way to skip the plenty text, and focus on the main points in to summarize the text. This API does that for you using our SumryMan AI built with Python.",
        status: "verified",
        image: "/images/zapi-logo.png",
        latency: 300,
        popularity: 9.9,
        service_level: 100,
    },
];

export const CATEGORIES = [
    "data",
    "sports",
    "finance",
    "travel",
    "entertainment",
    "location",
    "science",
    "food",
    "transportation",
    "music",
    "business",
    "visual recognition",
    "tools",
    "text analysis",
    "weather",

];

export const USER = [{
    id: '0001',
    fullName: 'Dummy Name',
    email: 'Dummyname@gmail.com',
    userName: 'Dummzy',
    userId: '11223344556677',
    profileId: '11aa22bb33cc44dd55ee',
    image: '/images/pro-pics.png',
}]

export const DASHBOARDTEXT1 = {
    title: 'Recent Payments',
    subtitle: "You haven't made any payments yet"
}

export const DASHBOARDTEXT2 = {
    title: 'Top API By Quota Usage',
    subtitle: "You haven't subscribed to any paid/freemium plans yet"
}

export const STATISTICS = [
    {query: "Total API Calls (Default)", span: "10"},
   {query: "Average API Calls", span: "5"},
   {query: "Calls per second", span: "1"},
    {query: "Max API Calls", span: "5"},
   {query: "Min API Calls", span: "1"}
]

export const ERROR = [
  {query: "Average Error Rate (Default)", span: "6"},
   {query: "Median Error Rate", span: "3"},
   {query: "Max Error Rate", span: "6"},
   {query: "Min Error Rate", span: "1"},
   {query: "Total Error Rate", span: "6"},
]

export const SUCCESS = [
   {query:"Average Success Rate (Default)", span: "4"},
   {query:"Median Success Rate", span: "2"},
   {query:"Max Success Rate", span: "4"},
   {query:"Min Success Rate", span: "1"},
   {query:"Total Success Rate", span: "4"},
]

export const TIMERANGE = [
    "Last hour", "Last 3 hours", "Last 6 hours", "Last 12 hours", "Last 24 hours", "Last 7 days", "Last 30 days", "Last 365 days",
]

export const PERIOD = ["Minutes", "Hours", "Days"]

export const ZONE = [
    "GMT+14:00 Line Islands Time (PACIFIC)",
    "GMT+13:00 New Zealand Daylight Time (PACIFIC ANTARTICA)",
]

export const TABLEHADING = ["Time", "API Version", "Endpoint", "Method", "Location", "Response Status", "Latency",]

export const ROWS = [
    {
        time: 1143155,
        version: "V1",
        endpoint: "Create A New Link",
        method: "GET",
        location: "Nigeria",
        status: 401,
        latency: "400ms",
    },
    {
        time: 1143155,
        version: "V1",
        endpoint: "Create A New Link",
        method: "GET",
        location: "Nigeria",
        status: 401,
        latency: "400ms",
    },
    {
        time: 1143155,
        version: "V1",
        endpoint: "Create A New Link",
        method: "GET",
        location: "Nigeria",
        status: 401,
        latency: "400ms",
    },
    {
        time: 1143155,
        version: "V1",
        endpoint: "Create A New Link",
        method: "GET",
        location: "Nigeria",
        status: 401,
        latency: "400ms",
    },
    {
        time: 1143155,
        version: "V1",
        endpoint: "Create A New Link",
        method: "GET",
        location: "Nigeria",
        status: 401,
        latency: "400ms",
    },
    {
        time: 1143155,
        version: "V1",
        endpoint: "Create A New Link",
        method: "GET",
        location: "Nigeria",
        status: 401,
        latency: "400ms",
    },
    {
        time: 1143155,
        version: "V1",
        endpoint: "Create A New Link",
        method: "GET",
        location: "Nigeria",
        status: 401,
        latency: "400ms",
    },
    {
        time: 1143155,
        version: "V1",
        endpoint: "Create A New Link",
        method: "GET",
        location: "Nigeria",
        status: 401,
        latency: "400ms",
    },
];

export const LOGINHISTORIES = [
    "2022-06-12 13:24pm",
    "2022-07-11 12:25pm",
    "2012-04-02 13:44pm",
    "2015-06-04 15:24pm",
    "2018-12-23 17:24pm",
    "2020-06-04 03:24pm",
    "2012-06-12 06:24pm",
    "2014-06-22 13:24pm",
    "2013-06-12 09:24pm",
    "2012-06-25 10:24pm",
    "2010-06-17 15:24pm",
];

export const METHOD = ["GET", "POST"]

export const DATATYPE = ["STRING", "NUMBER", "BOOLEAN"]

export const TABLEHEADING = ["Endpoint", "Method", "Route"]

export const TABLEROWS = [
    {
        endpoint: "user",
        method: "POST",
        Route: "/signup"
    },
    {
        endpoint: "user",
        method: "GET",
        Route: "/login"
    },
]

export const TextBoxData = [
    { id: 1, text: "Lorem Ipsum" },
    { id: 2, text: "Lorem Ipsum" }
]

export const EducationText1 = { id: 1, }
export const EducationText2 =
    {
        id: 2,
        image: blueFire,
        title: "Learn More about API",
        text: "A complete API reference of the Product Library, a JavaScript library made for rapid interactive prototyping for web and mobile.",
        buttonText: "Learn more",
        buttonText2: "Dismiss"
    }
export const EducationText3 = {
        id: 3,
        image: purpleFire,
        title: "Learn More about API",
        text: "A complete API reference of the Product Library, a JavaScript library made for rapid interactive prototyping for web and mobile.",
        buttonText: "Learn more",
        buttonText2: "Dismiss"
    }
export const EducationText4 = { id: 4,}

export const APIData = [
    {
      id: "1",
      url: "https://qnanswer-api.pk25mf6178910.eu-west-3.cs.amazonlightsail.com/q_and_a",
      name: "Text Summarizer"
    }
  ]

  export const DEVELOPERSLINKS = [
    // {
    //     image: <MdCameraControl />,
    //     text: "Request",
    //     link: "#"
    // },
    // {
    //     image: <MdOutlineScience />,
    //     text: "Tests",
    //     link: "/"
    // },
    {
        image: <MdOutlineLanguage />,
        text: "Hub Listing",
        link: "#"
    },
    // {
    //     image: <MdOutlineEdit />,
    //     text: "Settings",
    //     link: "/"
    // },
]

export const SCHEMA = [
    {
        header:"Passthrough Everything (default)",
        label:"Passthrough Everything (default). \n If a request contains a header or query parameter not defined in the API specification; the request will not be blocked.",
        value:"Passthrough Everything (default)"

    },
    {
        header:"Strip and Passthrough",
        label:"Strip and Passthrough. \n If a request contains a header or query parameter not defined in the API specification; the parameters will be removed and the request will pass through.",
        value:"Strip and Passthrough"
    },
    {
        header:"Block",
        label:"Block. \n If a request contains a header or query parameter not defined in the API specification; the request will be blocked.",
        value:"Block"
    }
]

export const AUTHENTICATION = [
    {
        label:"RapidAPI Auth Only",
        value:"RapidAPI Auth Only"
    },
    {
        label:"OAuth2",
        value:"OAuth2"

    },
    {
        label:"Header",
        value:"Header"
    },
    {
        label:"Query",
        value:"Query"
    },
    {
        label:"Basic",
        value:"Basic"
    },
    {
        label:"No Auth",
        value:"No Auth"
    }
]
