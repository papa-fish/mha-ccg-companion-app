export default function handleUnblocked(damage, state, setState, setDamage, setSpeed) {
    setState(state - damage);
    setDamage(4);
    setSpeed(4);
};