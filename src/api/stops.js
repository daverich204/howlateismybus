import WinnipegTransitAPI from "winnipegtransitapi";

const api_client = new WinnipegTransitAPI(process.env.REACT_APP_TRANSIT_API_KEY);

export const getNearbyStops = async ({ lat, lon, distance = 1000 }) => {
    try {
        return await api_client.getStopsMatching({ lat, lon, distance });
    } catch (e) {
        console.log("Exception Caught => ", e);
    }
}

const all_functions = {
    getNearbyStops
}

export default all_functions;
