const SubCards = ({ exchange }) => {
  return (
    <section className="sub-cards-container">
      <h4>market cap overview</h4>
      <div className="sub-cards-grid">
        {exchange.map((cap) => {
          // Destructure
          const { id, name, symbol, marketCapUsd } = cap;

          // Convert incoming CAP string
          let capConversion = new Intl.NumberFormat("en-US", {
            maximumSignificantDigits: 4,
          }).format(marketCapUsd);

          capConversion = capConversion.slice(0, -9);

          return (
            <article key={id} className="sub-card">
              <div className="card-header">
                <p>{name}</p>
                <img
                  src={`https://assets.coincap.io/assets/icons/${symbol.toLowerCase()}@2x.png`}
                  alt={name}
                />
              </div>
              <p className="value">{`$${capConversion}b`}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default SubCards;
