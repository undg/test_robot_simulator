const safe_position = ({pos, max_pos, last_pos}) =>
    (pos >= 0 && pos <= max_pos)
        ? pos
        : last_pos

const safe_direction = ({direction}) => (
    direction === "SOUTH"
    || direction === "WEST"
    || direction === "NORTH"
    || direction === "EAST"
)


module.exports = {
    safe_position: safe_position,
    safe_direction: safe_direction,
}
