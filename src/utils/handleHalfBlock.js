export default function handleHalfBlock(damage, state, setState) {
    setState(state - Math.ceil(damage / 2))
    // setAttackDamage(4);
    // setAttackSpeed(4);
};