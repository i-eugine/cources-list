export const getCourseDuration = (dur: number) => {
	const hours = `${Math.floor(dur / 60)}`.padStart(2, '0');
	const mins = `${dur % 60}`.padStart(2, '0');
	return `${hours}:${mins}`;
};
