
export default ({ member, drivers, setDrivers, randomizedGroup, setRandomizedGroup }) => {
  const handleRemoveMember = () => {
    setDrivers(drivers.filter(driver => driver !== member));
    setRandomizedGroup(randomizedGroup.filter(driver => driver !== member));
  }

  return (
    <li>
      {member}
      <button
        className="remove-btn tooltip"
        onClick={handleRemoveMember}
      >
        <span>x</span>
        <span className="tooltiptext">Remove this member</span>
      </button>
    </li>
  );
};
