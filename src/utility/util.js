export default class Util {

    static convertStrDay(day) {
        switch (day) {
            case 1:
                return 'Senin';
            case 2:
                return 'Selasa';
            case 3:
                return 'Rabu';
            case 4:
                return 'Kamis';
            case 5:
                return 'Jumat';
            case 6:
                return 'Sabtu';
            case 0:
                return 'Minggu';
            default:
                break;
        }
    }

    static getStrDate(date) {
        const day = Util.convertStrDay(new Date(date).getDay());
        const strDate = new Date(date).getDate();
        const month = new Date(date).getMonth() + 1;
        const year = new Date(date).getFullYear();
        return day + ' ' + strDate + '/' + month + '/' + year;
    }

}