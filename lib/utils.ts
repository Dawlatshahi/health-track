import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const parseStringify = (value: any) => JSON.parse(JSON.stringify(value));

export const convertFileToUrl = (file: File) => URL.createObjectURL(file);

// FORMAT DATE TIME
export const formatDateTime = (
	dateString: Date | string,
	timeZone: string = Intl.DateTimeFormat().resolvedOptions().timeZone
) => {
	const dateTimeOptions: Intl.DateTimeFormatOptions = {
		month: 'short', // abbreviated month name (e.g., 'Oct')
		day: 'numeric', // numeric day of the month (e.g., '25')
		year: 'numeric', // numeric year (e.g., '2023')
		hour: 'numeric', // numeric hour (e.g., '8')
		minute: 'numeric', // numeric minute (e.g., '30')
		hour12: true, // use 12-hour clock (true) or 24-hour clock (false)
	};

	// Generate the formatted date-time string
	let formattedDateTime: string = new Date(dateString).toLocaleString(
		'en-US',
		dateTimeOptions
	);

	// Replace only the " at " with a comma to keep the date and time separated by a comma
	formattedDateTime = formattedDateTime.replace(' at ', ', ');

	const formattedDateDay: string = new Date(dateString).toLocaleString(
		'en-US',
		{
			weekday: 'short',
			year: 'numeric',
			month: '2-digit',
			day: '2-digit',
		}
	);

	const formattedDate: string = new Date(dateString).toLocaleString('en-US', {
		month: 'short',
		year: 'numeric',
		day: 'numeric',
	});

	const formattedTime: string = new Date(dateString).toLocaleString('en-US', {
		hour: 'numeric',
		minute: 'numeric',
		hour12: true,
	});

	return {
		dateTime: formattedDateTime,
		dateDay: formattedDateDay,
		dateOnly: formattedDate,
		timeOnly: formattedTime,
	};
};

export function encryptKey(passkey: string) {
	return btoa(passkey);
}

export function decryptKey(passkey: string) {
	return atob(passkey);
}
