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

const getAddress = (location: any): string => {
    if (!location) return "";

    if (location['display_address'].length === 0) return "";

    return location['display_address'].join(",\n");
}

const getCategories = (categories: any): string[] => {
    if (!categories) return [];

    return categories.map((category: any) => category['title']).map((category: string) => category.slice(0, 10));
}

const getPriceLevel = (priceLevel: string): number  => {
    if (!priceLevel) return 0;

    return priceLevel.length;
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
                    categories: getCategories(item.categories),
                    priceLevel: getPriceLevel(item.price),
                    address: getAddress(item.location),
                    city: item.location.city,
                    country: item.location.country,
                    phoneNumber: item.phone,
                }
            });
    } catch (error) {
        console.log(error);
    }
}