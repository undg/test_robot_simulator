safe_position = ({pos, max_pos, last_pos}) =>
    (pos >= 0 && pos <= max_pos)
        ? pos
        : last_pos

module.exports = {
    safe_position: safe_position,
}
