import {containers} from '$lib/db';
const eventContainer = containers.eventContainer;

export async function post(request) {
    const event = JSON.parse(request.body);
    try {
        const {item} = await eventContainer.items.upsert(event);
        return {
            status: 200,
            body: {
                eventId: item.id
            }
        }
    }
    catch(err) {
        return {
            status: 500,
            body: {
                error: 'A server error has occured'
            }
        }
    }
}