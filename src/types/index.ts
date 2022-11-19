export interface IUser {
	id: number,
	telegramLogin: string,
    firstName: string,
    lastName: string,
    photoUrl: string
    city: string,
    country: string,
    rating: number,
	reviews: {
		id: number,
		text: string;
		author: {
			id: number,
			telegramLogin: string;
			firstName: string;
			lastName: string;
		}
	}[]
}