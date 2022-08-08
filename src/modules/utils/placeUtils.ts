import { Match } from "../../types/match";
import {
    YELP_API_KEY
} from "@env";
import axios from 'axios';

export const findCommonCategories = (match: Match | null): string[] => {
    if (!match) {
        return [];
    }
    const user1 = match.users[match.userMatched[0]];
    const user2 = match.users[match.userMatched[1]];
    const commonCategories = user1.categories.filter((category: any) => user2.categories.includes(category));
    return commonCategories;
}

export const getCommonSearchRequest = (commonCategories: string[], location: string): object => {
    let searchRequest = {
        location: location,
        categories: commonCategories.length > 0 ? commonCategories.join(",") : "",
    }
    return searchRequest;
}

export const getTopFivePlaces = async (searchRequest: object) => {
    try {
        const response = await axios.get(`https://api.yelp.com/v3/businesses/search`, {
            params: searchRequest,
            headers: {
                Authorization: `Bearer ${YELP_API_KEY}`
            }
        })
        return response.data.businesses
            .filter((item: any) => item.is_closed === false)
            .sort((
                (a: any, b: any) => b.rating - a.rating
            )).slice(0, 5).map((item: any) => {
                return {
                    id: item.id,
                    name: item.name,
                    photoUrl: item.image_url,
                    categories: item.categories,
                    price: item.price,
                    location: item.location,
                    phone: item.phone,
                }
            });
    } catch (error) {
        console.log(error);
    }
}