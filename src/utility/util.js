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

    static convertCurrency(value) {
        const str = value.toString();
        const digit1 = str.substring(str.length - 3, str.length);
        const sisa1 = str.replace(digit1, '');
        const digit2 = sisa1.substring(sisa1.length - 3, sisa1.length);
        const sisa2 = sisa1.replace(digit2, '');
        const currencyValue = [sisa2, digit2, digit1];
        return currencyValue.join(',');
    }

}