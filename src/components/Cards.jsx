import { VscTriangleUp, VscTriangleDown } from "react-icons/vsc";

const Cards = ({ exchange }) => {
  // Set global variables
  let setColor;
  let setSymbol;

  return (
    <section className="main-cards-container">
      {exchange.map((coin) => {
        // Destructure
        const { id, symbol, name, priceUsd, changePercent24Hr } = coin;

        // Convert incoming PRICE string to float number
        let priceConversion = parseFloat(priceUsd).toFixed(2);
        // Convert incoming PERCENTAGE string to float number
        let percentConversion = parseFloat(changePercent24Hr).toFixed(2);

        // Check price change && set symbol/color
        if (percentConversion < 0) {
          setColor = "#dc414c";
          setSymbol = <VscTriangleDown />;
        } else {
          setColor = "#1eb589";
          setSymbol = <VscTriangleUp />;
        }

        return (
          <article className="main-card" key={id}>
            <div className="card-header">
              <img
                src={`https://assets.coincap.io/assets/icons/${symbol.toLowerCase()}@2x.png`}
                alt={name}
              />
              <h3>{name}</h3>
            </div>
            <p className="symbol">{symbol}</p>
            <p className="value">{`$${priceConversion}`}</p>
            <p className="percentage" style={{ color: setColor }}>
              <span>{setSymbol}</span>
              {`${percentConversion}% (24Hr)`}
            </p>
          </article>
        );
      })}
    </section>
  );
};

export default Cards;
