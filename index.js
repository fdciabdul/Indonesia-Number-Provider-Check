const list = {
    "Telkomsel":[
        "0811","0812", "0813", "0821", "0822", "0823", "0851", "0852", "0853"
    ],
    "XL":[
        "0817", "0818", "0819", "0859", "0877", "0878", "0879"
    ],
    "Axis":[
        "0831", "0832", "0833", "0837", "0838"
    ],
    "Indosat":[
        "0814", "0815", "0815", "0816", "0855", "0856", "0857", "0858"
    ],
    "Three":[
        "0894", "0895", "0896", "0897", "0898", "0899"
    ],
    "Smartfren":[
        "0881", "0882", "0883", "0884", "0885", "0886", "0887", "0888", "0888"
    ]
}

// find the operator
exports.operator = (number) => {
    let result = 'Unknown';
    Object.keys(list).forEach((key) => {
        if (list[key].includes(number)) {
            result = key;
        }
    });
    return result;
}