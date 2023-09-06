export default function handleEndPhaseClick(player, setPlayer, setEndPhaseBtn1, setEndPhaseBtn2, setDamage, setSpeed) {
    if (player === 1) {
        setEndPhaseBtn1(false);
        setEndPhaseBtn2(true);
        setPlayer(2);
        setDamage(4);
        setSpeed(4);

    } else {
        setEndPhaseBtn1(true);
        setEndPhaseBtn2(false);
        setPlayer(1);
        setDamage(4);
        setSpeed(4);
    }
};