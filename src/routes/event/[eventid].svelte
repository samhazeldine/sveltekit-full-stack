<script type="ts" context="module">
    export async function load({ page, fetch }) {
        const eventId = page.params.eventid;

        try {
            const res = await fetch("/api/event/${eventId}");
            const jsonRes = await res.json();
            const event = jsonRes.eventDetail[0];
            return {
                props: {
                    eventId: event.id,
                    eventName: event.event_name,
                    startDate: event.start_date,
                    endDate: event.end_date,
                },
            };
        } catch (err) {
            console.log(err);
        }
    }
</script>

<script type="ts">
    export let eventId;
    export let eventName;
    export let startDate;
    export let endDate;
</script>

<main>
    <p>{eventId}</p>
    <p>{eventName}</p>
    <p>{startDate}</p>
    <p>{endDate}</p>
</main>