function groupAnagrams(words) {
    let groups = [];

    for (let i = 0; i < words.length; i++) {
        let found = false;
        for (let j = 0; j < groups.length; j++) {
            if (AnagramChecker(words[i], groups[j][0])) {
                groups[j].push(words[i]);
                found = true;
                break;
            }
        }
        if (!found) {
            groups.push([words[i]]);
        }
    }

    return groups;
}

function AnagramChecker(str1, str2) {
    if (str1.length !== str2.length) return false;

    let count = {};
    for (let i = 0; i < str1.length; i++) {
        count[str1[i]] = (count[str1[i]] || 0) + 1;
        count[str2[i]] = (count[str2[i]] || 0) - 1;
    }

    for (let char in count) {
        if (count[char] !== 0) return false;
    }

    return true;
}

let words = ['cook', 'save', 'taste', 'aves', 'vase', 'state', 'map'];
console.log(groupAnagrams(words));
