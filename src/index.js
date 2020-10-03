function Threedots(text_string, max_length) {
    let short = text_string.substr(0, max_length);
    if (/^\S/.test(text_string.substr(max_length)))
      return short.replace(/\s+\S*$/, "") + "...";
    return short + "...";
}

module.exports = Threedots;