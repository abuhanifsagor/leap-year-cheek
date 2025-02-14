 //inch to feet
function inchiToFeet(inch){
    const feet = (inch / 12).toFixed(2);
    return feet;
}

const myHegiht = inchiToFeet(75);
console.log(myHegiht)

    function inchiToFeet2(inchi){
        const feetVale = parseInt(inchi / 12);

        const inchiVale = inchi % 12;
        const convertResult = feetVale + ' ft ' + inchiVale + ' inch';
        return convertResult;
    }

    const myHegiht2 = inchiToFeet2(75);
    console.log(myHegiht2);

    // mile to kilo

    function miltToKilo(mile){
        const kilometer = (mile * 1.609);
        const result = mile + ' mile ' + kilometer + ' kilo ';
        return result;
    }
    const cnvMtoK = miltToKilo(10);
    console.log(cnvMtoK);
    function kiloTomile(kilo){
        const milemetter = (kilo * 0.621371).toFixed(2);
        const result = kilo + ' kilo ' + milemetter + ' mile ';
        return result;
    }
    const cnvktom = kiloTomile(10);
    console.log(cnvktom);