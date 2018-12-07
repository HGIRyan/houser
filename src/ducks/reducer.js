const initialState = {
    property_name: '',
    address: '',
    city: '',
    state: '',
    zipcode: 0,
    monthly_rent: 0,
    desired_rent: 0,
    imglink: 'http://grw.trains.com/sitefiles/images/no-preview-available.png'
}

// DEFINE
const UPDATEPROPERTY_NAME = 'UPDATEPROPERTY_NAME'
const UPDATEADDRESS = 'UPDATEADDRESS'
const UPDATECITY = 'UPDATECITY'
const UPDATESTATE = 'UPDATESTATE'
const UPDATEZIPCODE = 'UPDATEZIPCODE'
const UPDATEMONTHLY_RENT = 'UPDATEMONTHLY_RENT'
const UPDATEDESIRED_RENT = 'UPDATEDESIRED_RENT'
const UPDATEDEIMGLINK = 'UPDATEDEIMGLINK'
const RESEST_STATE = "RESET_STATE"


// FUNCTION
export function updatePropertyName(property_name) {
    return {
        type: UPDATEPROPERTY_NAME,
        payload: property_name
    }
}
export function updateAddress(address) {
    return {
        type: UPDATEADDRESS,
        payload: address
    }
}
export function updateCity(city) {
    return {
        type: UPDATECITY,
        payload: city
    }
}
export function updateState(state) {
    return {
        type: UPDATESTATE,
        payload: state
    }
}
export function updateZipCode(zipcode) {
    return {
        type: UPDATEZIPCODE,
        payload: zipcode
    }
}
export function updateMonthlyRent(monthly_rent) {
    return {
        type: UPDATEMONTHLY_RENT,
        payload: monthly_rent
    }
}
export function updateDesiredRent(desired_rent) {
    return {
        type: UPDATEDESIRED_RENT,
        payload: desired_rent
    }
}
export function updateImgLink(imglink) {
    return {
        type: UPDATEDEIMGLINK,
        payload: imglink
    }
}
export function resetState() {
    return {
        type: RESEST_STATE
    }
}

// EXPORT
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case UPDATEPROPERTY_NAME:
            return { ...state, property_name: action.payload }
        case UPDATEADDRESS:
            return { ...state, address: action.payload }
        case UPDATECITY:
            return { ...state, city: action.payload }
        case UPDATESTATE:
            return { ...state, state: action.payload }
        case UPDATEZIPCODE:
            return { ...state, zipcode: action.payload }
        case UPDATEMONTHLY_RENT:
            return { ...state, monthly_rent: action.payload }
        case UPDATEDESIRED_RENT:
            return { ...state, desired_rent: action.payload }
        case UPDATEDEIMGLINK:
            return { ...state, imglink: action.payload }
        case RESEST_STATE:
            return { address: '', city: '', state: '', zipcode: 0, monthly_rent: 0, desired_rent: 0, imglink: 'http://grw.trains.com/sitefiles/images/no-preview-available.png' }
        default:
            return state;
    }
}