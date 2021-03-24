import {containers} from '$lib/db';
const eventContainer = containers.eventContainer;

export async function get({params}) {
    const eventId = params.eventid;
    const querySpec = {
        query: "SELECT * from c WHERE c.id = @id",
        parameters: [
            {"name": "@id", "value": eventId}
        ]
    };

    try {
        const {resources: eventDetail} = await eventContainer.items.query(querySpec).fetchAll();
        if (eventDetail.length === 0) {
            throw Error();
        }
        return {
            status: 200,
            body: {
                eventDetail
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
