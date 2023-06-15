//1. Реализуйте функцию, которая принимает параметром подсторку, число повторов и разделитель, а возвращает сторку, состоящую из указанного количества повторов подстроки с использованием разделителя.
// repeatString("yo", 3, " ") => "yo yo yo"
// repeatString("yo", 3, ",") => "yo,yo,yo"
// repeatString("yo", 3, ", ") => "yo, yo, yo"
// repeatString("yo", 0, ", ") => ""
// repeatString("yo", 1, ", ") => "yo"
const repeatString = (subString, num, separator) => {
    return  (subString + separator).repeat(num).slice(0, -separator.length)
}
// console.log(repeatString("yo", 3, " "))
// console.log(repeatString("yo", 3, ","))
// console.log(repeatString("yo", 3, ", "))
// console.log(repeatString("yo", 0, ", "))
// console.log(repeatString("yo", 1, ", "))

//2. Реализуйте функцию, которая принимает параметром сторку и подстроку, а возвращает true, если строка начинается с указанной подстроки, в противном случае - false. Регистр не учитывается.
// const checkStart = (str, subStr) => {
//     return str.toLowerCase().startsWith(subStr.toLowerCase())
// }
const checkStart = (str, substring) => {
    let lowercaseStr = str.toLowerCase();
    let lowercaseSubstring = substring.toLowerCase();

    // Проверяем, что длина подстроки меньше или равна длине строки
    if (lowercaseSubstring.length > lowercaseStr.length) {
        return false;
    }
    // Сравниваем символы строки и подстроки на соответствующих позициях
    for (let i = 0; i < lowercaseSubstring.length; i++) {
        if (lowercaseStr[i] !== lowercaseSubstring[i]) {
            return false;
        }
    }
    return true;
}
// console.log(checkStart("Incubator", "inc") )//=> true
// console.log(checkStart("Incubator", "idr") )//=> false
// console.log(checkStart("Incubator", "yo") )//=> false

//3. Реализуйте функцию, которая принимает параметром строку и число (количество символов), а возвращает строку из параметров, обрезанную до указанного количества символов и завершает её многоточием.
//truncateString("Всем студентам инкубатора желаю удачи!", 10) => "Всем студе..."
const truncateString = (str, num) => {
    return `${str.slice(0, num)}...`
    // return str.slice(0, num) + '...'
}
// console.log(truncateString("Всем студентам инкубатора желаю удачи!", 10)) // => "Всем студе..."

//4. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает самое короткое слово в предложении, если в параметрах пустая строка или не строка, то возвращает null.
const getMinLengthWord = (str) => {
    if (typeof(str) !== 'string' || str.length<=0) {
        return null
    } else {
       let newArr = str.split(' ')
        let shortWord = newArr[0]
        for(let i=0; i < newArr.length; i++) {
            if (newArr[i].length < shortWord.length) {
                shortWord = newArr[i]
            }
        }
        return shortWord
    }
}
// console.log(getMinLengthWord("Всем студентам инкубатора желаю удачи.")) //=> "Всем"
// console.log(getMinLengthWord("")) //=> null
// console.log(getMinLengthWord(123))  //=> null
// console.log(getMinLengthWord(true)) //=> null
// console.log(getMinLengthWord(undefined)) //=> null

//5. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает то же предложение, где все слова написаны строчными, но начинаются с заглавных букв.
const setUpperCase = (str) => {
    let arr = str.toLowerCase().split(' ')
    // var words = sentence.toLowerCase().split(" ");
    let  result = arr.map(function(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    });
    return result.join(" ")
}
// console.log(setUpperCase("всем стУдентам инкуБатора Желаю удачИ")) //=> "Всем Студентам Инкубатора Желаю Удачи"
// setUpperCase("всем стУдентам инкуБатора Желаю удачИ") => "Всем Студентам Инкубатора Желаю Удачи!"

// !!!!!!!!!!!!!!!!!!После решения 5 задач - поднимаем руку!!!!!!!!

//6. Реализуйте функцию, котрая принимает параметрами строку и подстроку. Если все
// символы подстроки содержаться в стороке - возвращает true, если нет -
// возвращает false. Проверка проводится без учёта регистра и без учёта
// повторяющихся символов.
// * с учётом повторяющихся символов в подстроке


// isIncludes("Incubator", "Cut") => true
// isIncludes("Incubator", "table") => false
// isIncludes("Incubator", "inbba") => true //*false
// isIncludes("Incubator", "inba") => true  //*true
// isIncludes("Incubator", "Incubatorrr")=> true //*false











