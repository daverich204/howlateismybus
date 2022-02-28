// import WinnipegTransitAPI from "winnipegtransitapi";

// const api_client = new WinnipegTransitAPI(process.env.REACT_APP_TRANSIT_API_KEY);

export const getNearbyStops = async ({ lat, lon, distance = 1000 }) => {
    try {
        // return await api_client.getStopsMatching({ lat, lon, distance });
        const reqUrl = `https://api.winnipegtransit.com/v3/stops.json?api-key=${process.env.REACT_APP_TRANSIT_API_KEY}&lat=${lat}&lon=${lon}&distance=${distance}`
        const response = await fetch(reqUrl);
        return response.json();
    } catch (e) {
        console.log("Exception Caught => ", e);
        throw e;
    }
}

const all_functions = {
    getNearbyStops
}

export default all_functions;
