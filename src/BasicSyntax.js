export function romanToInteger(str) {
    let result = 0;
    for (let i = 0; i < str.length; i++) {
        switch (str[i] + str[i + 1]) {
            case 'IV':
                result += 4;
                i++;
                break;
            case 'IX':
                result += 9;
                i++;
                break;
            case 'XL':
                result += 40;
                i++;
                break;
            case 'XC':
                result += 90;
                i++;
                break;
            case 'CD':
                result += 400;
                i++;
                break;
            case 'CM':
                result += 900;
                i++;
                break;
            default:
                switch (str[i]) {
                    case 'I':
                        result += 1;
                        break;
                    case 'V':
                        result += 5;
                        break;
                    case 'X':
                        result += 10;
                        break;
                    case 'L':
                        result += 50;
                        break;
                    case 'C':
                        result += 100;
                        break;
                    case 'D':
                        result += 500;
                        break;
                    default:
                        result += 1000;
                }
        }
    }
    return result;
}
