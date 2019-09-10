var isValid = function(s) {
    let index = 0
    while (s && index !== s.length - 1) {
        let tmp = s[index] + s[index + 1]
        if (tmp === "()" || tmp === "[]" || tmp === "{}") {
            s = s.substr(0, index) + s.substr(index + 2, s.length)
            index = 0
        } else {
            index++
        }
    }
    return !s
}
