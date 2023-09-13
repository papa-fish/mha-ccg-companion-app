export default function handleReset(setShowOverlay, setPlayerOneCurrentHp, playerOneMaxHp, setPlayerTwoCurrentHp, playerTwoMaxHp) {
    setShowOverlay(false);
    setPlayerOneCurrentHp(playerOneMaxHp);
    setPlayerTwoCurrentHp(playerTwoMaxHp);
};