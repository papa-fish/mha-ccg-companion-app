export default function toggleAttackZone(showAttackZone, setShowAttackZone) {
    if (showAttackZone === 0) {
        setShowAttackZone(1);
    } else if (showAttackZone === 1) {
        setShowAttackZone(2);
    } else {
        setShowAttackZone(0);
    }
};