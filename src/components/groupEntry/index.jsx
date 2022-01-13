import "./style.css";

export default ({ inputValue, setInputValue, handleSubmit }) => {
  return (
    <section className="group-entry">
      <p>Enter group one at a time or comma separated</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <input 
            className="form-input-btn"
            type="submit" 
            value="Add them!" 
            disabled={!inputValue}
        />
      </form>
    </section>
  );
};
