export default function calculateHpPercentage(currentHp, maxHp) {
    return Math.ceil((currentHp / maxHp) * 100);
};
