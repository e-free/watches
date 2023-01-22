import moment from 'moment';
import {nanoid} from 'nanoid';

export default class WatchConstructor {
    constructor(town, timezone) {
        this.id = nanoid();
        this.town = town;
        this.timezone = timezone;
        this.time = moment(new Date()).utcOffset(60 * timezone).format("HH:mm:ss ZZ");
        this.hour = '';
        this.min = '';
        this.sec = '';
    }
}