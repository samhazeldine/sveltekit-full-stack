<script lang="ts">
	import {goto} from '$app/navigation';

	let name:string;
	let startDate:string;
	let endDate:string;

	async function createEvent () {
		const event = {
			event_name: name,
			start_date: startDate,
			end_date: endDate
		}
		try {
			const res = await fetch('/api/event', {
				method: 'POST',
				body: JSON.stringify(event)
			});
			const jsonRes = await res.json();
			const eventId = jsonRes.eventId;
			goto('/event/' + eventId);
		}
		catch(err){
			alert("error");
		}
	}

</script>

<form on:submit|preventDefault={createEvent}>
	<label for="eventName">What are you trying to plan?</label>
	<input
		id="eventName"
		type="text"
		required
		bind:value={name}
		
	/>

	<h3>What dates would you like to see?</h3>

	<label for="startDate">Start Date</label>
	<input
		type="date"
		id="startDate"
		required
		bind:value={startDate}
	/>

	<label for="endDate">End Date</label>
	<input
		type="date"
		id="endDate"
		required
		bind:value={endDate}
	/>

	<button type="submit">Let's Go!</button>
</form>

<style>
</style>
