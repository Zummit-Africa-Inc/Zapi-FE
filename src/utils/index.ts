export const PASSWORD_REGEX = /^(?=.*[a-zA-Z0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%_]).{8,20}$/

export const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=_{|}~-]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/

export const loadMapApi = () => {
    const mapsURL = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDukB5FCekGPrNNVpvy6D5xdYst_0P2Hak&libraries=places&language=en&v=quarterly`;
    const scripts = document.getElementsByTagName("script");

    for (let i = 0; i<scripts.length; i++){
        if (scripts[i].src.indexOf(mapsURL) === 0) {
            return scripts[i];
        }
    }
    const googleMapScript = document.createElement('script');
    googleMapScript.src = mapsURL;
    googleMapScript.async = true;
    googleMapScript.defer = true;
    window.document.body.appendChild(googleMapScript);

    return googleMapScript;
};