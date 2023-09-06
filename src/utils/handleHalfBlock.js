export default function handleHalfBlock(damage, state, setState, setDamage, setSpeed) {
    setState(state - Math.ceil(damage / 2))
    setDamage(4);
    setSpeed(4);
};